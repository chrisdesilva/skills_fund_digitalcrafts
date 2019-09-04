import React, { useState } from 'react'
import ebook from '../images/ebook.jpg'

const LeadCaptureForm = props => {

    const [email, setEmail] = useState('')
    const [thankYou, showThankYou] = useState(false)

    const handleChange = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/c7688725-624e-435c-8add-8409a327eecb`
        
        // hsCookie gets the data necessary to track Hubspot analytics
        const hsCookie = document.cookie.split(';').reduce((cookies, cookie) => {
            const [ name, value ] = cookie.split('=').map(c => c.trim());
            cookies[name] = value;
            return cookies;
            }, {});

        //   field names are all set to match internal values on Hubspot
        const data = {
        "fields": [
            {
            "name": "email",
            "value": `${email}`
            },
            {
            "name": "lead_cycle",
            "value": "Lead Capture"
            },
            {
            "name": "stakeholder_type", 
            "value": "Student"
            }
        ],
        "context": {
            "hutk": hsCookie.hubspotutk,
            "pageUri": `${props.pageUri}`,
            "pageName": `${props.schoolName} | Skills Fund`,
            "ipAddress": `${props.IP}`
        }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('success', response))
        .catch(error => console.log('error: ', error))
        showThankYou(true)
        setEmail('')
    }

    return (
        <div className="flex flex-col items-center justify-center pt-8">
            <h2>Get a Head Start</h2>
            <div>
                <img className="h-64" src={ebook} alt="step-by-step guide to paying for your program" loading="lazy"/>
            </div>
            <div className="mx-10 rounded flex flex-col pt-5 px-4 mt-5 justify-center items-center">
                <p>We'll send you our step-by-step guide to paying for your program.</p>
                <form className="SecureSet_apply_now program-apply flex flex-col items-center" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input className="border-2 rounded border-primary text-center py-2 mb-4 w-64" type="email" name="email" placeholder="Enter your email address" onChange={handleChange} value={email} required />
                <div className="hidden">
                    <input type="text" name="Stakeholder Type" value="Student" readOnly/>
                    <input type="text" name="Lead Cycle" value="Lead Capture" readOnly/>
                </div>
                {thankYou ? <p className="text-center">Thank you, your guide will be in your inbox soon!</p>: <input className="cursor-pointer opacityApply uppercase bg-primary p-3 mb-4 w-48 rounded-full shadow-lg text-white" value="Send me the guide!" id="leadCaptureSubmitBtn" type="submit"/>}
            </form>
            </div>
        </div>
    )
}

export default LeadCaptureForm