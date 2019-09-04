import React from 'react'
import Button from './button'
import { headline } from '../constants/programInfo'

const Banner = props => {
    return (
    <div className='flex flex-col justify-center items-center relative z-0' id='banner'>
        {/* update h2 caps words with school-specific content */}
        <h1 className='text-3xl lg:text-4xl font-normal text-center mt-8 text-black px-4'>{headline}</h1>
        <h2 className='text-base lg:text-xl font-light text-center text-black'>Know exactly what you'll pay with Skills Fund</h2>
        <div className='flex flex-col lg:flex-row pb-16'>
            <Button
                buttonClassName='opacityApply uppercase bg-primary p-3 lg:mb-0 w-40 rounded-full shadow-lg text-white'
                divClassName='flex justify-center mt-5'
                text='apply now'
                onClick={props.applyNowOnClick}
            />
        </div>
    </div>
    )
}

export default Banner;