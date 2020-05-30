import React from "react"
import Button from "./button"
import LeadCaptureForm from "./leadcaptureform"

const ApplyFooter = props => {
  return (
    <div className="flex flex-col md:flex-row justify-center py-8 px-4 bg-gray-200">
      <div className="flex flex-col items-center justify-between my-2 lg:mx-10 w-full lg:w-1/3 rounded  bg-white border-primary border-t-8 p-4">
        <div>
          <h2 className="font-bold text-center">Ready to Get Started?</h2>
          <p className="text-center">
            Begin building your future today! We make funding your education
            easy.
          </p>
        </div>
        <Button
          buttonClassName="opacityApply uppercase bg-primary p-3 rounded-full shadow-lg text-white w-40"
          divClassName="flex justify-center"
          text="apply now"
          onClick={props.onClick}
          id="applyFooter"
        />
      </div>
      <div className="flex flex-col items-center justify-between my-2 lg:mx-10 w-full lg:w-1/3 rounded  bg-white border-primary border-t-8 p-4">
        <div>
          <h2 className="font-bold text-center">Want to Learn More?</h2>
          <p className="text-center">
            We'll send you our step-by-step guide to paying for your program.
          </p>
        </div>
        <LeadCaptureForm IP={props.IP} />
      </div>
    </div>
  )
}

export default ApplyFooter
