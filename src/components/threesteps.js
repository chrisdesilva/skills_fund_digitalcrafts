import React from 'react'
import Button from './button'
import { faq, threeStepCardText } from '../constants/programInfo'

const ThreeSteps = React.forwardRef((props, ref) => {
    return (
        <div className="p-4" ref={ref}>
            <h2 className="text-primary font-normal text-center">Getting Started</h2>
            <div className="flex flex-col lg:flex-row justify-center text-center">

                <div id="stepCard1" className="stepCards flex flex-col items-center m-2 lg:w-1/3 p-4 rounded shadow-2xl bg-white border-primary border-t-8">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-primary">1</p>
                    <h3 className="uppercase">explore your options</h3>
                    <p>Use the loan calculator below to know exactly what you'll pay <strong>before</strong> you apply. You can borrow as little as $2,000 up to the full tuition{faq.costOfLiving && <span> and cost of living max</span>} for your progam.</p>
                </div>

                {/* vvv Update this section as needed vvv */}
                <div id="stepCard2" className="stepCards flex flex-col items-center m-2 lg:w-1/3 p-4 rounded shadow-2xl bg-white border-primary border-t-8">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-primary">2</p>
                    <h3 className="uppercase">{threeStepCardText.step2.header}</h3>
                    <p>{threeStepCardText.step2.text}</p>
                </div>
                {/* ^^^ Update this section as needed ^^^ */}

                <div id="stepCard3" className="stepCards flex flex-col items-center m-2 lg:w-1/3 p-4 rounded shadow-2xl bg-white border-primary border-t-8">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-primary">3</p>
                    <h3 className="uppercase">apply for funding!</h3>
                    <p className="m-0">{threeStepCardText.step3}</p>
                    <Button
                        buttonClassName="opacityApply uppercase bg-primary p-3 rounded-full shadow-lg text-white w-40"
                        divClassName="flex justify-center mt-5"
                        text="apply now"
                        onClick={props.onClick}
                    /> 
                </div>
                
            </div>
        </div>
    )
})

export default ThreeSteps