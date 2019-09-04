import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { UnmountClosed as Collapse } from 'react-collapse'
import { faq, schoolName } from '../constants/programInfo'


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

     return (
          <div className="mx-2 lg:mx-10 p-8 shadow rounded">
          <h2 className="py-4 text-center">Frequently Asked Questions</h2>
          
          <div onClick={() => showq1(!q1)}><h3 className="text-lg text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>How much can I borrow and for what specific uses?</h3></div>
          <Collapse isOpened={q1} springConfig={{stiffness: 150, damping: 30}}>
               <p>The maximum amount you can borrow will depend on your program. You can finance your tuition and cost of living expenses.</p>
               <ul>
                    {faq.loanRange.map(program => {
                         return <li>
                              <strong>For {program.programName},</strong> you may borrow from $2,000 up to {program.maxAmount} for tuition. {program.col ? <span>You may also borrow up to {program.colAmount} for cost of living.</span> : <span>Cost of living is not available for this program.</span>}
                         </li>
                    })}
               </ul>
               <p className="mb-0 pb-4"><strong>Please note:</strong> In order to finance cost of living, borrow at least $2,000 in tuition financing. You will pay your cash deposit directly to <strong>{schoolName}</strong>.</p>
          </Collapse>
          
          {faq.costOfLiving &&
               <>
               <div onClick={() => showq2(!q2)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>when will i receive my living stipend?</h3></div>
               <Collapse isOpened={q2} springConfig={{stiffness: 150, damping: 30}}>
                         
                         {faq.costOfLivingPrograms && <p><strong>Only the {faq.costOfLivingPrograms} {faq.multCostOfLivingPrograms ? <span>are</span>: <span>is</span>} eligible for cost of living.</strong></p>}

                         <p>Your lump sum living stipend will be sent to you on the second Wednesday after your program start. You can elect to have your cost of living disbursed via electronic funds transfer or mailed directly to the address provided in their loan application.</p>
                         <p className="mb-0 pb-4">Please allow 1 - 5 business days for your electronic funds transfer to be reflected in your bank account. For all students who elect to have funds mailed to their address, please allow 5 - 10 business days for your check to arrive via U.S. Standard Mail.</p>
               </Collapse>
               </>
          }

          <div onClick={() => showq3(!q3)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>how and when will i repay my loan?</h3></div>
               <Collapse isOpened={q3} springConfig={{stiffness: 150, damping: 30}}>
                    <p>Upon loan acceptance, we will provide you with several options for making payments, including automated payments. You may create an account at <a href="https://www.aspireservicingcenter.com/" target="_blank" rel="noreferrer noopener" className="text-primary">AspireServicingCenter.com</a> at any time to manage payments and account balance.</p>
                    {faq.interestOnly && <p><strong>Interest-Only Loans: </strong>You will start paying interest on your loan roughly one month after your loan is disbursed to the school. Disbursement occurs on the second Wednesday after program start. You will make interest-only payments while in program and for 60 days following program completion.</p>}
                    {faq.interestOnly && <p>You will start making full monthly payments (interest plus principal) after your two-month grace period ends. This 60-day payment grace period helps you to keep your eye on finding the right job following program completion.</p>}
                    {faq.immediateRepayment && <p><strong>Immediate Repayment Loans: </strong>You will start making full monthly payments (interest plus principal) roughly one month after your loan is disbursed to your school. Disbursement occurs on the second Wednesday after program start.</p>}
                    <p className="mb-0 pb-4">There is no prepayment penalty with a Skills Fund loan.</p>
               </Collapse>

          
          <div onClick={() => showq4(!q4)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>what is the deferment period?</h3></div>
               <Collapse isOpened={q4} springConfig={{stiffness: 150, damping: 30}}>
                    <p className="mb-0 pb-4">The deferment period is defined as the time you are attending the course, plus an additional two months after program completion. These additional two months are considered your grace period.</p>
                    {faq.interestOnly && <p className="mb-0 pb-4"><strong>Interest-Only Loans: </strong>Interest-only payments are required during the deferment period. After the deferment period ends, payments of interest and principal are required. Paying interest on your loan during the deferment period will result in lower interest + principal payments during the full loan repayment phase of 36{faq.multipleLoanLengths && <span> or 60</span>} months.</p>}
                    {faq.immediateRepayment && <p className="mb-0 pb-4"><strong>Immediate Repayment Loans: </strong>These loans have no deferment period. You will start making full monthly payments (interest plus principal) roughly one month after your loan is disbursed to your school. Disbursement occurs on the second Wednesday after program start.</p>}
               </Collapse>
          
          <div onClick={() => showq5(!q5)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>how much are interest payments during the deferment period?</h3></div>
               <Collapse isOpened={q5} springConfig={{stiffness: 150, damping: 30}}>
                    <p>The interest-only payments depend on how much you borrow; the less you borrow, the less you will pay.</p>
                    <p><strong>For a 36-month $10,000 loan:</strong> The interest rate is fixed at {faq.interestRate36} / {faq.APR36} estimated APR. The interest-only monthly payment is approximately {faq.IOPayment36}.</p>
                    {faq.multipleLoanLengths && <p><strong>For a 60-month $10,000 loan:</strong> The interest rate is fixed at {faq.interestRate60} / {faq.APR60} estimated APR. The interest-only monthly payment is approximately {faq.IOPayment60}.</p>}
                    <p>Please see terms in "Term Details" above.</p>
                    <p className="mb-0 pb-4"><strong>Please note:</strong> The Annual Percentage Rate (APR) is estimated and may change slightly based on the loan type, origination fee, and approximate program length. To learn how an Annual Percentage Rate (APR) is calculated, <a className="text-primary" target="_blank" href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></p>
               </Collapse>

          <div onClick={() => showq6(!q6)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>will i get charged any fees for taking out this loan?</h3></div>
               <Collapse isOpened={q6} springConfig={{stiffness: 150, damping: 30}}>
                    <p>You will be charged an origination fee of 4.0%. This amount will be added to the amount of tuition you borrow and is included in the total loan principal amount you finance. This fee helps cover the administrative fees associated with originating the loan and is charged by our partner bank. Please see terms in "Term Details" above.</p>
                    <p className="mb-0 pb-4"><strong>Please note:</strong> This fee is already reflected in the APR outlined above and in the loan calculator. Interested in learning more about your interest rate vs. APR? Check out our blog post <a className="text-primary" target="_blank" href="https://skills.fund/resources/apr-versus-interest-rates-whats-the-difference" rel="noreferrer noopener">here.</a></p>
               </Collapse>

          <div onClick={() => showq7(!q7)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>i am applying for a scholarship. should i wait to apply for financing?</h3></div>
               <Collapse isOpened={q7} springConfig={{stiffness: 150, damping: 30}}>
                    <p>You may apply for financing in parallel to applying for your scholarship. If you are awarded your scholarship prior to the disbursement of your financing, please email <a href="mailto:CustomerTrust@Skills.Fund" className="text-primary">CustomerTrust@Skills.Fund</a> or notify your Admissions Counselor with the amount of your scholarship, and your requested financing amount will be downward adjusted.</p>
                    <p>Should you receive your scholarship following the second Wednesday after program start, you can apply your funds to your loan balance at any time without a prepayment penalty.</p>
                    <p className="mb-0 pb-4"><strong>Please note:</strong> Should you want to apply for a scholarship, it is recommended to apply for max tuition financing, and once your scholarship is awarded, Skills Fund can downward adjust your requested tuition financing. This may prevent you having to apply for additional funds, should you not be awarded your scholarship, as loans may not be upward adjusted.</p>
               </Collapse>

          <div onClick={() => showq8(!q8)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>do i need a cosigner?</h3></div>
               <Collapse isOpened={q8} springConfig={{stiffness: 150, damping: 30}}>
                    <p>If you do not meet the loan underwriting criteria, a cosigner may be needed. You can (1) apply individually, and should you not be approved, you may be given the opportunity to amend your application with a cosigner, or (2) initiate your loan process with a cosigner.</p>
                    <p className="mb-0 pb-4"><strong>Please note:</strong> We advise you to apply individually to begin, and should you not be credit approved, you may be given the opportunity to amend your application with a cosigner.</p>
               </Collapse>
 
          <div onClick={() => showq9(!q9)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>when can i apply for a loan?</h3></div>
               <Collapse isOpened={q9} springConfig={{stiffness: 150, damping: 30}}>
                    <p className="mb-0 pb-4">Apply for the loan after your acceptance into a program. Your program cohort must begin within 90 days of the date that you apply for a loan.</p>
               </Collapse>
               
          <div onClick={() => showq10(!q10)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>what information do i need to provide skills fund?</h3></div>
               <Collapse isOpened={q10} springConfig={{stiffness: 150, damping: 30}}>
                    <p>During the loan application process, we will ask you for the following information:</p>
                    <ul className="list-disc mb-0 pb-4">
                         <li>Full name</li>
                         <li>Address</li>
                         <li>Email and other contact information</li>
                         <li>Social Security Number</li>
                         <li>Date of birth</li>
                         <li>Loan amount requested</li>
                         <li>U.S. Citizenship/Permanent Resident status</li>
                         <li>Current income <strong>(not a factor in credit decision)</strong></li>
                         <li>Current employment status <strong>(not a factor in credit decision)</strong></li>
                         <li>Three personal references</li>
                         <li>Cosigner information (if applicable)</li>
                    </ul>
               </Collapse>

          <div onClick={() => showq11(!q11)}><h3 className="text-lg uppercase text-primary flex items-center cursor-pointer"><span className="text-sm"><FaAngleDown /></span>will you check my credit?</h3></div>
               <Collapse isOpened={q11} springConfig={{stiffness: 150, damping: 30}}>
                    <p className="mb-0 pb-4">Yes. When you apply we will check your credit, including your credit score. Interested in learning more about what goes into your credit score? Visit our blog and explore our <a className="text-primary" target="_blank" href="https://skills.fund/resources/financing-101" rel="noreferrer noopener">credit history resources</a> today.</p>
               </Collapse>
           
           <p className="text-left lg:text-center">For other general questions about Skills Fund financing, please visit our <a className="text-primary" target="_blank" href="https://skills.fund/resources/skills-fund-financing-faqs" rel="noreferrer noopener">Resource Center</a>.</p>
       </div>
     )
}

export default FAQ