import React, { useEffect, useState } from "react"
import ReactGA from "react-ga"
import ReactPixel from "react-facebook-pixel"
import marching from "../images/PeopleMarchColor.png"
import { UnmountClosed as Collapse } from "react-collapse"
import {
  faq,
  hubspotFormId,
  programLoanInfo,
  schoolName,
  selectAProgram,
  skfURL,
} from "../constants/programInfo"

const LoanApp = React.forwardRef((props, ref) => {
  const [email, setEmail] = useState("")
  const [submitted, isSubmitted] = useState(false)
  const [disclaimers, toggleDisclaimers] = useState(false)
  const [loanUrl, setLoanUrl] = useState(programLoanInfo[0].url)
  const [programName, setProgramName] = useState(programLoanInfo[0].name)
  const [activeIndex, setActiveIndex] = useState(0) // takes in index of program to execute setActive hook
  const queryParams = programLoanInfo.map(program => program.queryParams)
  const formName = `${props.schoolName}_apply_now program-apply flex flex-col items-center`
  const costOfLiving = faq.costOfLiving

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const toggleIsActiveDropdown = e => {
    setActiveIndex(Number(e.target.value))
  }

  useEffect(() => {
    if (queryParams.indexOf(props.location) !== -1) {
      setActiveIndex(queryParams.indexOf(props.location)) // read query params in url, set default value of select based on index of program
      setLoanUrl(programLoanInfo[activeIndex]["url"])
      setProgramName(programLoanInfo[activeIndex]["name"])
      console.log(programLoanInfo[activeIndex])
    }
  }, [])

  useEffect(
    // this effect allows url to update after intial load if student selects a different program
    () => {
      setLoanUrl(programLoanInfo[activeIndex]["url"])
      setProgramName(programLoanInfo[activeIndex]["name"])
    },
    [activeIndex]
  )

  const redirectLoanApp = () => {
    window.open(loanUrl, "_blank", "noopener noreferrer")
  }

  const trackGoogleAnalyticsEvent = () => {
    ReactGA.event({
      category: `Apply Now Button | ${schoolName}`,
      action: "click",
      label: "submitted loan application",
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
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/${hubspotFormId}`

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
          name: `${selectAProgram}`,
          value: `${programName}`,
        },
        {
          name: "school",
          value: `${props.schoolName}`,
        },
        {
          name: "student_loan_application_status",
          value: "BLA Click Email Submitted",
        },
        {
          name: "clicked_begin_loan_application_bla",
          value: "BLA Click",
        },
      ],
      context: {
        hutk: hsCookie.hubspotutk, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
        pageUri: `${skfURL}`,
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
    redirectLoanApp()
    isSubmitted(true)
  }

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center pt-8 bg-primary"
    >
      <h2 className="text-white">Loan Application</h2>
      <div className="rounded shadow-2xl pt-8 px-8 mx-4 bg-white">
        {/* update with school name, remove cost of living if school does not offer it */}
        <h3 className="text-center font-normal">
          {props.schoolName} Tuition
          {costOfLiving && <span> and Cost of Living</span>} Financing
        </h3>
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
          <div className="w-full lg:w-64 px-8 lg:px-0">
            <label htmlFor="email">Email address</label>
            <input
              className="border-2 rounded border-black text-center py-2 mb-4 w-64"
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={email}
              required
            />
            <p className="text-center text-sm mb-0">
              Select your {props.schoolName} program
            </p>
            <select
              id="programSelect"
              className="border-2 border-primary mb-5 bg-white text-center w-full loanCalculator__selectInput"
              onChange={toggleIsActiveDropdown}
              value={activeIndex}
            >
              {programLoanInfo.map((program, i) => {
                return (
                  <option key={program.name} value={i}>
                    {program.name}
                  </option>
                )
              })}
            </select>
          </div>
          {/* )} */}
          {submitted ? (
            <span className="pt-4 text-center">
              Thanks for applying! Your loan application has opened in a new
              window. If the application does not open and pop-up blockers have
              been disabled, please contact{" "}
              <a href="mailto:tech@skills.fund" className="text-primary">
                Tech@Skills.Fund
              </a>
              .
            </span>
          ) : (
            <input
              className="opacityApply uppercase bg-primary p-3 mb-4 w-48 rounded-full shadow-lg text-white cursor-pointer"
              value="APPLY NOW"
              id="loanAppSubmitBtn"
              type="submit"
            />
          )}
          {!submitted && (
            <p className="mt-3 text-xs italic">
              Please note: clicking Apply Now will open your loan application in
              a new tab
            </p>
          )}
          <div className="hidden h-0" id="hide">
            <input
              className="text-xs m-0 text-transparent"
              type="text"
              name="Stakeholder Type"
              value="Student"
              readOnly
            />
            <input
              className="text-xs m-0 text-transparent"
              type="text"
              name="Program Name"
              value={programLoanInfo.programName}
              readOnly
            />
            <input
              className="text-xs m-0 text-transparent"
              type="text"
              name="School"
              value={props.schoolName}
              readOnly
            />
            <input
              className="text-xs m-0 text-transparent"
              type="text"
              name="Student Loan Application Status"
              value="BLA Click Email Submitted"
              readOnly
            />
            <input
              className="text-xs m-0 text-transparent"
              type="text"
              name="Clicked Begin Loan Application BLA"
              value="BLA Click"
              readOnly
            />
          </div>
        </form>
      </div>
      <div className="px-8 text-sm">
        <p
          className="text-center text-white underline cursor-pointer font-bold my-4"
          onClick={() => toggleDisclaimers(!disclaimers)}
        >
          Disclaimers
        </p>
        <Collapse
          isOpened={disclaimers}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <div>
            <p>
              <strong>
                Before you begin, please read these important notes:
              </strong>
            </p>
            <p>Customer identification policy:</p>
            <p>
              For the purpose of the following notice, the words "you" and
              "your" mean the Borrower and the Cosigner. All applicants:
              Important Federal Law Notice - Important information about
              procedures for opening a new account: To help the government fight
              the funding of terrorism and money laundering activities, federal
              law requires all financial institutions to obtain, verify, and
              record information that identifies each person who opens an
              account. What this means for you: When you open an account, we
              will ask for your name, address, date of birth and other
              information that will allow us to identify you. We may also ask to
              see your driver's license or other identifying documents.
            </p>
            <p>Consent to share data:</p>
            <p>
              By beginning the application, I consent under Federal and state
              privacy laws to {props.schoolName} providing to Skills Fund
              information related to my application, enrollment, and completion,
              including but not limited to information contained in my original
              application and supplements as well as information regarding my
              completion, graduation, and post-program outcomes information.
            </p>
            <p>
              <strong>While in the application, please note:</strong>
            </p>
            <p>
              1. DO NOT use the browser Back button. Using the browser Back
              button may cause invalid information and delay the processing of
              your loan.
            </p>
            <p>
              2. Your application will not be complete until it has been signed
              and submitted along with any required documentation.
            </p>
            <p className="mb-0 pb-4">
              3. You will need the address and phone number of 3 references to
              complete your application, including one relative not living with
              you. Others may be friends, employers, etc.
            </p>
          </div>
        </Collapse>
      </div>
    </div>
  )
})

export default LoanApp
