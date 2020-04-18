import React, { useEffect, useRef, useState } from "react"
import { FaTimesCircle } from "react-icons/fa"
import { UnmountClosed as Collapse } from "react-collapse"

const Popup = props => {
  const [optout, optoutClicked] = useState(false)
  const [isPopupVisible, showPopup] = useState(false)
  const popupRef = useRef

  const [email, setEmail] = useState("")
  const [thankYou, showThankYou] = useState(false)

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/3871135/16432a77-dea9-49e9-a253-8a17b9fc0a99`

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
          name: "lead_cycle",
          value: "Lead Capture",
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
        hutk: hsCookie.hubspotutk,
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
    showThankYou(true)
    setEmail("")
    props.trackGA()
  }

  popupRef.current = isPopupVisible

  useEffect(() => {
    if (optout) {
      showPopup(false)
      return
    }
    const handleScroll = () => {
      const show = window.scrollY > 300
      if (popupRef.current !== show) {
        showPopup(true)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [optout])

  return (
    <div className={isPopupVisible ? "popup" : "popup hidePopup"}>
      {!thankYou && (
        <div className="flex flex-col items-center justify-center">
          <p className="m-0">
            Get ready for upcoming start dates at {props.schoolName}!{" "}
          </p>
          <p className="m-0">
            Plan your funding with Skills Fund. We'll send you a step-by-step
            guide to paying for your program.
          </p>
        </div>
      )}
      <form
        className="popup_capture program-apply flex flex-col lg:flex-row m-0 items-center"
        onSubmit={handleSubmit}
      >
        {!thankYou && (
          <input
            className="border-2 rounded border-primary text-left p-2 w-64 text-black"
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={email}
            required
          />
        )}
        <div className="hidden">
          <input type="text" name="Stakeholder Type" value="Student" readOnly />
          <input type="text" name="Lead Cycle" value="Lead Capture" readOnly />
          <input type="text" name="School" value={props.schoolName} readOnly />
        </div>
        {!thankYou && (
          <input
            className="cursor-pointer my-2 lg:my-0 lg:ml-2 uppercase bg-primary p-3 w-40 rounded-full shadow-lg text-white"
            value="Send me the guide!"
            id="leadCaptureSubmitBtn"
            type="submit"
          />
        )}
        <Collapse isOpened={thankYou}>
          <p className="text-center m-0">
            Thank you! Your guide will be in your inbox soon!
          </p>
        </Collapse>
      </form>
      <button className="lg:ml-2" onClick={() => optoutClicked(true)}>
        <FaTimesCircle />
      </button>
    </div>
  )
}

export default Popup
