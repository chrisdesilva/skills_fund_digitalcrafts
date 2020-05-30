import React from "react"
import GeneralTerms from "./generalterms"
import InterestOnlyTerms from "./interestonlyterms"
import ImmRepaymentTerms from "./immrepaymentterms"
import { faq, schoolInfo, interestRateCards } from "../constants/programInfo"

const TermInfo = props => (
  <div className="text-center mx-2 lg:mx-10 p-8 shadow rounded">
    <h2 className="py-4 text-center">Loan Details</h2>
    <div>
      <GeneralTerms
        multipleLoanLengths={faq.multipleLoanLengths}
        interestOnly={faq.interestOnly}
        immediateRepayment={faq.immediateRepayment}
        interestRate36={interestRateCards.interestOnly.int36}
        interestRate60={interestRateCards.interestOnly.int60}
        deferred36={interestRateCards.deferred.int36}
        deferred60={interestRateCards.deferred.int60}
        IOAPR36={schoolInfo.interestOnly[0].APR36}
        IOAPR60={schoolInfo.interestOnly[0].APR60}
        IRAPR36={schoolInfo.immediateRepayment[0].APR36}
        IRAPR60={schoolInfo.immediateRepayment[0].APR60}
        APRRange36={interestRateCards.APR36}
        APRRange60={interestRateCards.APR60}
      />

      {/* {faq.interestOnly && schoolInfo.interestOnly.map(school => {
                return <InterestOnlyTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                ioPayment36={school.IOPayment36}
                ioPayment60={school.IOPayment60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                programLength={school.programLength}
                multipleLoanLengths={faq.multipleLoanLengths}
            />
            })}

            {faq.immediateRepayment && schoolInfo.immediateRepayment.map(school => {
                return <ImmRepaymentTerms
                programName={school.programName} 
                loanExampleAmt={school.LoanExampleAmt}
                APR36={school.APR36}
                APR60={school.APR60}
                finCharge36={school.financeCharge36}
                finCharge60={school.financeCharge60}
                fullPayment36={school.FullMonthlyPayment36}
                fullPayment60={school.FullMonthlyPayment60}
                oFee={school.LoanExampleOFeeAmt}
                loanPlusOFee={school.LoanExampleAmtPlusOFee}
                multipleLoanLengths={faq.multipleLoanLengths}
                multipleLoanTypes={faq.multipleLoanTypes}
            />
            })

            } */}
    </div>
  </div>
)

export default TermInfo
