import React from 'react'
import { paymentTable } from '../constants/programInfo'

const LoanCalcPaymentTable = () => (
    <div className="flex flex-col items-center">
        {/* WEB TABLE */}
        <table className="hidden lg:inline">
            <tbody>
                <tr>
                    {paymentTable.headers.map(header => <th key={header.location} className="text-center">{header}</th>)}
                </tr>
                    {paymentTable.data.map(data => {
                        return <tr key={data.name}>
                            <td className="text-center">{data.name}</td>
                            <td className="text-center">{data.tuition}</td>
                            <td className="text-center">{data.col}</td>
                            <td className="text-center">{data.max}</td>
                        </tr>
                    })}
            </tbody>
        </table>

        {/* MOBILE TABLE */}
        <table className="lg:hidden">
            <tbody>
                {paymentTable.data.map(program => {
                    return <>
                        <tr>
                            <th className="text-center bg-primary text-white rounded">{program.name}</th>
                        </tr>
                        <tr>
                            <td className="text-center">Tuition: {program.tuition}</td>
                        </tr>
                        <tr>
                            <td className="text-center">Cost of Living: {program.col}</td>
                        </tr>
                        <tr>
                            <td className="text-center">Max Total: {program.max}</td>
                        </tr>
                    </>
                })}
            </tbody>
        </table>
    </div>
)

export default LoanCalcPaymentTable