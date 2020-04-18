import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import { UnmountClosed as Collapse } from "react-collapse"
import { faq, schoolName } from "../constants/programInfo"

// update with school-specific info
const FAQ = () => {
  const [q1, showq1] = useState(false)
  const [q2, showq2] = useState(false)
  const [q3, showq3] = useState(false)
  const [q4, showq4] = useState(false)
  const [q5, showq5] = useState(false)
  const [q6, showq6] = useState(false)
  const [q7, showq7] = useState(false)
  const [q8, showq8] = useState(false)
  const [q9, showq9] = useState(false)
  const [q10, showq10] = useState(false)
  const [q11, showq11] = useState(false)
  const [q12, showq12] = useState(false)

  return (
    <div className="mx-2 lg:mx-10 p-8 shadow rounded">
      <h2 className="py-4 text-center">Frequently Asked Questions</h2>

      <div onClick={() => showq1(!q1)}>
        <h3 className="text-lg text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          How much can I borrow and for what specific uses?
        </h3>
      </div>
      <Collapse isOpened={q1} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          The maximum amount you can borrow will depend on your program.
          {faq.costOfLiving && (
            <span>
              {" "}
              You can finance your tuition and cost of living expenses.
            </span>
          )}
        </p>
        <ul className="mb-0 pb-4">
          {faq.loanRange.map(program => {
            return (
              <li>
                <strong>For {program.programName},</strong> you may borrow from
                $2,000 up to {program.maxAmount} for tuition.{" "}
                {program.col ? (
                  <span>
                    You may also borrow up to {program.colAmount} for cost of
                    living.
                  </span>
                ) : (
                  <span>Cost of living is not available for this program.</span>
                )}
              </li>
            )
          })}
        </ul>
        {faq.costOfLiving && (
          <p className="mb-0 pb-4">
            <strong>Please note:</strong> In order to finance cost of living,
            borrow at least $2,000 in tuition financing. You will pay your cash
            deposit directly to <strong>{schoolName}</strong>.
          </p>
        )}
      </Collapse>

      <div onClick={() => showq2(!q2)}>
        <h3 className="text-lg text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          Why should I enroll in Autopay?
        </h3>
      </div>
      <Collapse isOpened={q2} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          For loans originated starting in 2020, students have the option to
          enroll in Autopay with our payment processor, Launch Servicing. There
          are numerous benefits for enabling Autopay:
        </p>
        <ul className="list-disc">
          <li>
            Save on interest. You will receive a .25% reduction in the interest
            rate on your loan as long as you remain signed up for Autopay.{" "}
          </li>
          <li>
            Avoid late fees. With Autopay, your monthly loan payments are
            automatic, so you never have to worry about missing a payment and
            incurring late fees.{" "}
          </li>
          <li>
            Protect your credit. By ensuring on-time payments, Autopay protects
            your credit from missed payments.
          </li>
        </ul>
        <p className="mb-0 pb-4">
          And remember, there are no restrictions on pre-payment, so in addition
          to your automatic payments, you can also pay down your loan early
          which will reduce the total amount of interest you will pay over the
          life of the loan.
        </p>
      </Collapse>

      {faq.costOfLiving && (
        <>
          <div onClick={() => showq3(!q3)}>
            <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
              <span className="text-sm">
                <FaAngleDown />
              </span>
              when will i receive my living stipend?
            </h3>
          </div>
          <Collapse
            isOpened={q3}
            springConfig={{ stiffness: 150, damping: 30 }}
          >
            {faq.costOfLivingPrograms && (
              <p>
                <strong>
                  Only the {faq.costOfLivingPrograms}{" "}
                  {faq.multCostOfLivingPrograms ? (
                    <span>are</span>
                  ) : (
                    <span>is</span>
                  )}{" "}
                  eligible for cost of living.
                </strong>
              </p>
            )}

            <p>
              Your lump sum living stipend will be sent to you on the second
              Wednesday after your program start. You can elect to have your
              cost of living disbursed via electronic funds transfer or mailed
              directly to the address provided in their loan application.
            </p>
            <p className="mb-0 pb-4">
              Please allow 1 - 5 business days for your electronic funds
              transfer to be reflected in your bank account. For all students
              who elect to have funds mailed to their address, please allow 5 -
              10 business days for your check to arrive via U.S. Standard Mail.
            </p>
          </Collapse>
        </>
      )}

      <div onClick={() => showq4(!q4)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          how and when will i repay my loan?
        </h3>
      </div>
      <Collapse isOpened={q4} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          You have several options, including automated payments! After you
          apply for a loan, we’ll help you set up your repayment account. About
          one month after your program starts, you’ll make your first loan
          payment.
        </p>
        <p>
          You’ll make monthly payments until your loan is fully repaid, and
          we’re happy to say there’s no prepayment penalty or fee for early
          payments on Skills Fund loans. You can choose to pay the minimum
          monthly payment, or you can make larger payments. You have the
          flexibility to pay off your loan anytime before your loan term ends!
        </p>
        {faq.multipleLoanTypes && (
          <>
            <p>
              Skills Fund offers two repayment options. Check out the loan
              calculator to decide which repayment option is the best fit for
              you!
            </p>
            <ul>
              <li className="list-disc">
                <strong>Interest-only</strong> loans allow you to hold on to
                more of your savings during your training. You’ll start making
                low, interest-only payments about one month after your program
                starts and continue those payments for three months after the
                program ends. After this interest-only period, you’ll start
                making full payments (interest + principal).
              </li>
              <li className="list-disc">
                <strong>Immediate repayment</strong> loans allow you to quickly
                get started on repayment. You’ll start making full payments
                about one month after your program starts.
              </li>
            </ul>
          </>
        )}
        {!faq.multipleLoanTypes && faq.interestOnly && (
          <p>
            Skills Fund’s interest-only loans allow you to hold on to more of
            your savings during your training. You’ll start making low,
            interest-only payments about one month after your program starts and
            continue those payments for three months after the program ends.
            After this interest-only period, you’ll start making full payments
            (interest + principal).
          </p>
        )}
        <p>
          Aspire and Launch are the loan servicers for Skills Fund’s loans. This
          means Aspire or Launch will collect your monthly payments during the
          repayment phase of your loan. All loans applied for{" "}
          <strong>before December 26th, 2019</strong> will be serviced by
          Aspire. All loans applied for{" "}
          <strong>on or after December 26th, 2019</strong> will be serviced by
          Launch.{" "}
        </p>
        <p>
          Need to pay your loan? Have a question about repayment on an existing
          loan?
        </p>
        <ul className="mb-0 pb-4">
          <li className="list-disc">
            If you applied for your loan before December 26th, 2019, visit{" "}
            <a
              className="font-bold text-primary"
              href="https://www.aspireservicingcenter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Aspire online
            </a>{" "}
            or at 1-800-243-7552.{" "}
          </li>
          <li className="list-disc">
            If you applied for your loan on or after December 26th, 2019, visit{" "}
            <a
              className="font-bold text-primary"
              href="https://prod.launchservicing.com/Borrower/Login.aspx"
              target="_blank"
              rel="noreferrer noopener"
            >
              Launch online
            </a>{" "}
            or at 877-354-2629.{" "}
          </li>
        </ul>
      </Collapse>

      <div onClick={() => showq5(!q5)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          what is the deferment period?
        </h3>
      </div>
      <Collapse isOpened={q5} springConfig={{ stiffness: 150, damping: 30 }}>
        <p className="mb-0 pb-4">
          The deferment period is defined as the time you are attending the
          course, plus an additional three months after program completion.
          These additional three months are considered your grace period.
        </p>
        {faq.interestOnly && (
          <p className="mb-0 pb-4">
            <strong>Interest-Only Loans: </strong>Interest-only payments are
            required during the deferment period. After the deferment period
            ends, payments of interest and principal are required. Paying
            interest on your loan during the deferment period will result in
            lower interest + principal payments during the full loan repayment
            phase of 36{faq.multipleLoanLengths && <span> or 60</span>} months.
          </p>
        )}
        {faq.immediateRepayment && (
          <p className="mb-0 pb-4">
            <strong>Immediate Repayment Loans: </strong>These loans have no
            deferment period. You will start making full monthly payments
            (interest plus principal) roughly one month after your loan is
            disbursed to your school. Disbursement occurs on the second
            Wednesday after program start.
          </p>
        )}
      </Collapse>

      <div onClick={() => showq6(!q6)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          how much are interest payments during the deferment period?
        </h3>
      </div>
      <Collapse isOpened={q6} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          The interest-only payments depend on how much you borrow; the less you
          borrow, the less you will pay.
        </p>
        <p>
          <strong>For a 36-month $10,000 loan:</strong> The interest rate is
          fixed at {faq.interestRate36} / {faq.APR36} estimated APR. The
          interest-only monthly payment is approximately {faq.IOPayment36}.
        </p>
        {faq.multipleLoanLengths && (
          <p>
            <strong>For a 60-month $10,000 loan:</strong> The interest rate is
            fixed at {faq.interestRate60} / {faq.APR60} estimated APR. The
            interest-only monthly payment is approximately {faq.IOPayment60}.
          </p>
        )}
        <p>Please see terms in "Term Details" above.</p>
        <p className="mb-0 pb-4">
          <strong>Please note:</strong> The Annual Percentage Rate (APR) is
          estimated and may change slightly based on the loan type, origination
          fee, and approximate program length. To learn how an Annual Percentage
          Rate (APR) is calculated,{" "}
          <a
            className="text-primary"
            target="_blank"
            href="https://skills.fund/resources/how-is-an-apr-calculated"
            rel="noreferrer noopener"
          >
            visit our blog.
          </a>
        </p>
      </Collapse>

      <div onClick={() => showq7(!q7)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          will i get charged any fees for taking out this loan?
        </h3>
      </div>
      <Collapse isOpened={q7} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          You will be charged an origination fee of 5.0%. This amount will be
          added to the amount of tuition you borrow and is included in the total
          loan principal amount you finance. This fee helps cover the
          administrative fees associated with originating the loan and is
          charged by our partner bank. Please see terms in "Term Details" above.
        </p>
        <p className="mb-0 pb-4">
          <strong>Please note:</strong> This fee is already reflected in the APR
          outlined above and in the loan calculator. Interested in learning more
          about your interest rate vs. APR? Check out our blog post{" "}
          <a
            className="text-primary"
            target="_blank"
            href="https://skills.fund/resources/apr-versus-interest-rates-whats-the-difference"
            rel="noreferrer noopener"
          >
            here.
          </a>
        </p>
      </Collapse>

      <div onClick={() => showq8(!q8)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          i am applying for a scholarship. should i wait to apply for financing?
        </h3>
      </div>
      <Collapse isOpened={q8} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          You may apply for financing in parallel to applying for your
          scholarship. If you are awarded your scholarship prior to the
          disbursement of your financing, please email{" "}
          <a href="mailto:CustomerTrust@Skills.Fund" className="text-primary">
            CustomerTrust@Skills.Fund
          </a>{" "}
          or notify your Admissions Counselor with the amount of your
          scholarship, and your requested financing amount will be downward
          adjusted.
        </p>
        <p>
          Should you receive your scholarship following the second Wednesday
          after program start, you can apply your funds to your loan balance at
          any time without a prepayment penalty.
        </p>
        <p className="mb-0 pb-4">
          <strong>Please note:</strong> Should you want to apply for a
          scholarship, it is recommended to apply for max tuition financing, and
          once your scholarship is awarded, Skills Fund can downward adjust your
          requested tuition financing. This may prevent you having to apply for
          additional funds, should you not be awarded your scholarship, as loans
          may not be upward adjusted.
        </p>
      </Collapse>

      <div onClick={() => showq9(!q9)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          do i need a cosigner?
        </h3>
      </div>
      <Collapse isOpened={q9} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          There are two ways to qualify for a Skills Fund loan: on your own, or
          with a cosigner. Cosigners can strengthen your application’s overall
          credit health.{" "}
        </p>
        <p>
          If you decide to apply with a cosigner, we’ll evaluate them with the
          same underwriting criteria we use to evaluate you. You can also choose
          to apply individually to begin, and if you receive a denial, you may
          have the opportunity to add a cosigner to your original application.
        </p>
        <p className="mb-0 pb-4">
          Learn more about our{" "}
          <a
            className="font-bold text-primary"
            href="https://skills.fund/students/will-my-loan-application-be-approved"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            credit and eligibility criteria
          </a>{" "}
          and see our guide to{" "}
          <a
            className="font-bold text-primary"
            href="https://skills.fund/resources/how-to-find-the-right-cosigner-for-your-loan"
            target="_blank"
            rel="noreferrer noopener"
          >
            finding the right cosigner.
          </a>
        </p>
      </Collapse>

      <div onClick={() => showq10(!q10)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          when can i apply for a loan?
        </h3>
      </div>
      <Collapse isOpened={q10} springConfig={{ stiffness: 150, damping: 30 }}>
        <p className="mb-0 pb-4">
          Apply for the loan after your acceptance into a program. Your program
          cohort must begin within 90 days of the date that you apply for a
          loan.
        </p>
      </Collapse>

      <div onClick={() => showq11(!q11)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          what information do i need to provide skills fund?
        </h3>
      </div>
      <Collapse isOpened={q11} springConfig={{ stiffness: 150, damping: 30 }}>
        <p>
          During the loan application process, we will ask you for the following
          information:
        </p>
        <ul className="list-disc mb-0 pb-4">
          <li>Full name</li>
          <li>Email address and other contact information</li>
          <li>Social Security Number</li>
          <li>Date of birth</li>
          <li>Loan amount requested</li>
          <li>One personal reference</li>
          <li>
            Cosigner name and contact information (if applying with a cosigner)
          </li>
          <li>Citizenship / Permanent Resident (Green Card) status</li>
          <li>Current income (not a factor in credit decision)</li>
          <li>Current employment status (not a factor in credit decision)</li>
        </ul>
      </Collapse>

      <div onClick={() => showq12(!q12)}>
        <h3 className="text-lg uppercase text-primary flex items-center cursor-pointer">
          <span className="text-sm">
            <FaAngleDown />
          </span>
          will you check my credit?
        </h3>
      </div>
      <Collapse isOpened={q12} springConfig={{ stiffness: 150, damping: 30 }}>
        <p className="mb-0 pb-4">
          Yes. When you apply we will check your credit, including your credit
          score. Interested in learning more about what goes into your credit
          score? Visit our blog and explore our{" "}
          <a
            className="text-primary"
            target="_blank"
            href="https://skills.fund/resources/financing-101"
            rel="noreferrer noopener"
          >
            credit history resources
          </a>{" "}
          today.
        </p>
      </Collapse>

      <p className="text-left lg:text-center">
        For other general questions about Skills Fund financing, please visit
        our{" "}
        <a
          className="text-primary"
          target="_blank"
          href="https://skills.fund/resources/skills-fund-financing-faqs"
          rel="noreferrer noopener"
        >
          Resource Center
        </a>
        .
      </p>
    </div>
  )
}

export default FAQ
