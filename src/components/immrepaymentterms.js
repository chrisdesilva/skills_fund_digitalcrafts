import React from 'react'

const ImmRepaymentTerms = props => (
    <div>
        
        {/* -----WEB VERSION START----- */}

        <div className="p-0 md:p-4 hidden lg:inline">
        <p>This example shows the monthly payments of a {props.loanExampleAmt} <strong>immediate repayment</strong> Skills Fund loan{props.programName && <span> for <strong>{props.programName}</strong></span>}:</p>
            <table>
                <tbody>
                    <tr>
                        <th className="bg-primary text-center text-white w-1/3">Example on a {props.loanExampleAmt} loan</th>
                        <th className="bg-primary text-center text-white w-1/3" colSpan={props.multipleLoanLengths ? undefined : "2"}>36 Month</th>
                        {props.multipleLoanLengths && <th className="bg-primary text-center text-white w-1/3">60 Month</th>}
                    </tr>
                    <tr>
                        <td className="text-center">Annual Percentage Rate</td>
                        <td className="text-center" colSpan={props.multipleLoanLengths ? undefined : "2"} >{props.APR36} (4)</td> 
                        {props.multipleLoanLengths && <td className="text-center" >{props.APR60} (5)</td>} 
                    </tr>
                    <tr>
                        <td className="text-center bg-gray-100">Finance Charge (the dollar amount the credit will cost you)</td>
                        <td className="text-center bg-gray-100" colSpan={props.multipleLoanLengths ? undefined : "2"}>{props.finCharge36} (4)</td> 
                        {props.multipleLoanLengths && <td className="text-center bg-gray-100">{props.finCharge60} (5)</td>} 
                    </tr>

                    <tr>
                        <td className="text-center bg-gray-100">Full Monthly (Principal and Interest) Payment</td>
                        <td className="text-center bg-gray-100" colSpan={props.multipleLoanLengths ? undefined : "2"}>{props.fullPayment36} (4)</td> 
                        {props.multipleLoanLengths && <td className="text-center bg-gray-100">{props.fullPayment60} (5)</td> }
                    </tr>
                </tbody>
            </table>
            <ul className="text-left px-5 md:px-20 list-disc">
                <li>(1) The 4.0% origination fee is assessed to all loans, and is added to the principal request, so for example, a {props.loanExampleAmt} will generate a {props.oFee} origination charge that will increase the loaned amount to {props.loanPlusOFee}.</li>
                <li>(2) Interest rates are fixed and never vary.</li>
                <li>(3) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing {props.loanExampleAmt}, a 4.0% origination fee, and the 36-month principal and interest period.</li>
                {props.multipleLoanLengths && <li>(4) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing {props.loanExampleAmt}, a 4.0% origination fee, and the 60-month principal and interest period.</li>}
        </ul>
        </div>

        {/* -----WEB VERSION END----- */}

        {/* -----MOBILE VERSION START----- */}

        <div className="p-0 md:p-4 lg:hidden">
        <p>This example shows the monthly payments of a {props.loanExampleAmt} <strong>immediate repayment</strong> Skills Fund loan{props.programName && <span> for <strong>{props.programName}</strong></span>}:</p>
            <table>
                <tbody>
                    <tr>
                        <th className="bg-black text-center text-white">Example on a {props.loanExampleAmt} loan</th>
                    </tr>
                    <tr>
                        <th className="bg-primary text-center text-white">36 Month Loan</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Annual Percentage Rate</td>
                    </tr>
                    <tr>
                        <td className="text-center" >{props.APR36} (4)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Finance Charge (the dollar amount the credit will cost you)</td>
                    </tr>
                    <tr>
                        <td className="text-center">{props.finCharge36} (4)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Full Monthly (Principal and Interest) Payment</td>
                    </tr>
                    <tr>
                        <td className="text-center">{props.fullPayment36} (4)</td> 
                    </tr>
                    {props.multipleLoanLengths && 
                    <>
                    <tr>
                        <th className="bg-primary text-center text-white">60 Month Loan</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Annual Percentage Rate</td>    
                    </tr>
                    <tr>
                        <td className="text-center" >{props.APR60} (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Finance Charge (the dollar amount the credit will cost you)</td>
                    </tr>
                    <tr>
                        <td className="text-center">{props.finCharge60} (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold bg-gray-100">Full Monthly (Principal and Interest) Payment</td>
                    </tr>
                    <tr>
                        <td className="text-center">{props.fullPayment60} (5)</td> 
                    </tr>
                    </>
                    }
                </tbody>
            </table>
            <ul className="text-left px-3 md:px-20 list-disc">
                <li>(1) The 4.0% origination fee is assessed to all loans, and is added to the principal request, so for example, a {props.loanExampleAmt} will generate a {props.oFee} origination charge that will increase the loaned amount to {props.loanPlusOFee}.</li>
                <li>(2) Interest rates are fixed and never vary.</li>
                <li>(3) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing {props.loanExampleAmt}, a 4.0% origination fee, and the 36-month principal and interest period.</li>
                {props.multipleLoanLengths && <li>(4) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing {props.loanExampleAmt}, a 4.0% origination fee, and the 60-month principal and interest period.</li>}
            </ul> 
        </div>

        {/* -----MOBILE VERSION END----- */}

    </div>
)

export default ImmRepaymentTerms