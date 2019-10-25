import React, { useEffect, useState } from 'react'
import Homepage from '../components/homepage'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import { GATracking, netlifyFormName, schoolName, schoolURL } from '../constants/programInfo'


// ReactGA.initialize(GATracking, {
//   debug: false,
//   titleCase: false,
//   gaOptions: {
//     siteSpeedSampleRate: 100
//   }
// })

const IndexPage = () => {

  const [IP, setIP] = useState('')

    // Get IP address from client for Hubspot analytics
    async function fetchIP() {
      const res = await fetch("https://ip.nf/me.json")
      res
          .json()
          .then(res => setIP(res.ip.ip))
          .catch(err => console.log(err))
    }

  useEffect(() => {
    ReactPixel.init('928181257515785');
    fetchIP();
  })
  
  return (
    <div>
      <form name={netlifyFormName} data-netlify='true' netlify-honeypot='bot-field' hidden>
        <input type='text' name='name' />
        <input type='email' name='email' />
        <input type='text' name='school'/>
        <input type='button' name='identity' />
        <input type='button' name='identity' />
        <input type='button' name='identity' />
        <input type='text' name='otherDescription' />
        <textarea name='comments' />
      </form>
      <Homepage 
        formName={netlifyFormName}
        IP={IP}
        pageUri={schoolURL}
        schoolName={schoolName}
      />
    </div>
  )
}



export default IndexPage
