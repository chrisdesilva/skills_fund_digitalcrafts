import React from "react"
import { faq, previewText } from "../constants/programInfo"

const LoanPreview = props => {
  return (
    <div className="loanCalculator__content pt-8 bg-white mb-4">
      <div className="loanCalculator__select flex flex-col items-center px-4">
        <div className="loanCalculator__content">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="flex flex-col justify-center px-4">
              <h2 className="text-gray-800 text-center">
                {previewText.headline}
              </h2>
              <p className="text-gray-800" id="leadText">
                {previewText.subheadline}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around p-4 w-full">
          {previewText.cards.map(card => (
            <div className="relative flex flex-col items-center justify-between p-4 border-2 border-gray-700 rounded shadow-2xl w-full m-2 lg:w-64 text-center">
              <h3>{card.heading}</h3>
              <p>{card.body}</p>
              {card.heading === "Deferred Repayment" && (
                <span className="ribbon text-sm">NEW</span>
              )}
              <p onClick={props.onClick} className="footerLink cursor-pointer">
                Get Started &rarr;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoanPreview
