import React from 'react'
import { FaAngleDown } from 'react-icons/fa'



// no updates necessary

const InfoButtonContainer = props => {

    return (
        <div className="flex flex-wrap items-center justify-around p-4 mx-2 lg:mx-10 rounded shadow-xl">
            <div onClick={props.terms} className="cursor-pointer w-1/4 footerLink flex flex-col items-center text-primary">
                <p className="m-0">Term Details</p>
                <FaAngleDown />
            </div>
            <div onClick={props.faq} className="cursor-pointer w-1/4 footerLink flex flex-col items-center text-primary">
                <p className="m-0">FAQ</p>
                <FaAngleDown />
            </div>
            <div onClick={props.eligibility} className="cursor-pointer w-1/4 footerLink flex flex-col items-center text-primary">
                <p className="m-0">Eligibility</p>
                <FaAngleDown />
            </div>
            <div onClick={props.contact} className="cursor-pointer w-1/4 footerLink flex flex-col items-center text-primary">
                <p className="m-0 ">Contact</p>
                <FaAngleDown />
            </div>
        </div>
    )
}



export default InfoButtonContainer