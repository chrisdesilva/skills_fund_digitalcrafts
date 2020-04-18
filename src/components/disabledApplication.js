import React, { useState } from "react"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"
import marching from "../images/PeopleMarchColor.png"
import { disabledLoanAppFormID } from "../constants/programInfo"

const DisabledApplication = React.forwardRef((props, ref) => {
  const [email, setEmail] = useState("")
  const thankYouMsg =
    "Thanks for requesting more information! We'll let you know when the application button becomes available."
  const [submitted, isSubmitted] = useState(false)
  const formName = `${props.schoolName}_apply_now program-apply flex flex-col items-center`

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const trackGoogleAnalyticsEvent = () => {
    ReactGA.event({
      category: `More Info Button `,
      action: "click",
      label: "submitted notify upcoming cohort",
    })
  }

  const trackFacebookPixel = () => {
    ReactPixel.track("InitiateCheckout", {
      value: 7200.0,
      currency: "USD",
    })
  }

  // submit form data to Hubspot, track Google Analytics event, and redirect user to loan application
  const handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/${disabledLoanAppFormID}`

    // hsCookie gets the data necessary to track Hubspot analytics
    const hsCookie = document.cookie.split(";").reduce((cookies, cookie) => {
      const [name, value] = cookie.split("=").map(c => c.trim())
      cookies[name] = value
      return cookies
    }, {})

    //   field names are all set to match internal values on Hubspot
    const data = {
      fields: [
        {
          name: "email",
          value: `${email}`,
        },
        {
          name: "stakeholder_type",
          value: "Student",
        },
        {
          name: "school",
          value: `${props.schoolName}`,
        },
      ],
      context: {
        hutk: hsCookie.hubspotutk, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        pageUri: `${props.pageUri}`,
        pageName: `${props.schoolName} | Skills Fund`,
        ipAddress: `${props.IP}`,
      },
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => console.log("success", response))
      .catch(error => console.log("error: ", error))

    trackGoogleAnalyticsEvent()
    trackFacebookPixel()
    isSubmitted(true)
  }

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center pt-8 mx-2 lg:mx-10 rounded shadow-xl bg-purple-150"
    >
      <h2>Loan Application</h2>
      <div className="rounded shadow-2xl p-8 px-8 mx-16 mb-8 bg-white">
        {/* update with school name, remove cost of living if school does not offer it */}
        <h3 className="text-center font-normal">
          Looking to apply for Skills Fund financing for {props.schoolName}'s
          upcoming cohort?
        </h3>
        <p className="text-center font-normal">
          The application button will become available once we're within 90 days
          of that cohort start date. Please submit your email address below to
          be notified once the application button becomes available.
        </p>
        <div className="flex justify-center">
          <img
            className="w-auto"
            src={marching}
            alt="People marching and carrying flags"
            loading="lazy"
          />
        </div>
        {/* update form fields as necessary */}
        <form className={formName} onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            className="border-2 rounded border-primary text-center py-2 mb-4 w-64"
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={email}
            required
          />
          <div className="hidden">
            <input
              type="text"
              name="Stakeholder Type"
              value="Student"
              readOnly
            />
            <input
              type="text"
              name="School"
              value={props.schoolName}
              readOnly
            />
          </div>
          {submitted ? (
            <span className="pt-4">{thankYouMsg}</span>
          ) : (
            <input
              className="opacityApply uppercase bg-primary p-3 my-4 w-48 rounded-full shadow-lg text-white cursor-pointer"
              value="NOTIFY ME"
              id="loanAppSubmitBtn"
              type="submit"
            />
          )}
        </form>
      </div>
    </div>
  )
})

export default DisabledApplication
