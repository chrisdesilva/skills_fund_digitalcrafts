import React from "react"
import ReactGA from "react-ga"
import { UnmountClosed as Collapse } from "react-collapse"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CookieBanner from "../components/cookieBanner"
import Banner from "../components/banner"
import LeadContent from "../components/leadcontent"
import ThreeSteps from "../components/threesteps"
import LoanCalculator from "../components/loancalculator"
import SlidingLoanCalculator from "../components/slidingLoanCalculator"
import InfoButtonContainer from "../components/infobuttoncontainer"
import LoanApp from "./loanapp"
import Reviews from "./reviews"
import DisabledApplication from "./disabledApplication"
import LeadCaptureForm from "./leadcaptureform"
import ApplyFooter from "./applyFooter"
import TermInfo from "./terminfo"
import FAQ from "./faq"
import Eligibility from "./eligibility"
import ContactForm from "./contactform"
import {
  applicationsLive,
  schoolName,
  showPopup,
} from "../constants/programInfo"

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      termInfo: false,
      faq: false,
      eligibility: false,
      contact: false,
    }
    this.threesteps = React.createRef()
    this.apply = React.createRef()
  }

  scrollToApply = () => {
    this.apply.current.scrollIntoView({ behavior: "smooth" })
    ReactGA.event({
      category: `Apply Now Button | ${schoolName}`,
      action: "click",
      label: "banner",
    })
  }

  scrollToApply2 = () => {
    this.apply.current.scrollIntoView({ behavior: "smooth" })
    ReactGA.event({
      category: `Apply Now Button | ${schoolName}`,
      action: "click",
      label: "getting started",
    })
  }

  scrollToApply3 = () => {
    this.apply.current.scrollIntoView({ behavior: "smooth" })
    ReactGA.event({
      category: `Apply Now Button | ${schoolName}`,
      action: "click",
      label: "footer",
    })
  }

  trackPopup = () => {
    ReactGA.event({
      category: `Student Lead Capture | ${schoolName}`,
      action: "click",
      label: "popup",
    })
  }

  trackStatic = () => {
    ReactGA.event({
      category: `Student Lead Capture | ${schoolName}`,
      action: "click",
      label: "static",
    })
  }

  activateMoreInfo = () => {
    this.setState({
      termInfo: !this.state.termInfo,
      faq: false,
      eligibility: false,
      contact: false,
    })
  }

  activateFAQ = () => {
    this.setState({
      termInfo: false,
      faq: !this.state.faq,
      eligibility: false,
      contact: false,
    })
  }

  activateEligibility = () => {
    this.setState({
      termInfo: false,
      faq: false,
      eligibility: !this.state.eligibility,
      contact: false,
    })
  }

  activateContact = () => {
    this.setState({
      termInfo: false,
      faq: false,
      eligibility: false,
      contact: !this.state.contact,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title={this.props.schoolName} />
        <Banner
          howItWorksOnClick={this.scrollToContent}
          applyNowOnClick={this.scrollToApply}
        />
        {/* <LeadContent schoolName={this.props.schoolName} />
				<ThreeSteps onClick={this.scrollToApply2} ref={this.threesteps} schoolName={this.props.schoolName} />
				<LoanCalculator /> */}
        <SlidingLoanCalculator location={this.props.location} />
        {applicationsLive ? (
          <LoanApp
            ref={this.apply}
            IP={this.props.IP}
            pageUri={this.props.pageUri}
            schoolName={this.props.schoolName}
            location={this.props.location}
          />
        ) : (
          <DisabledApplication
            ref={this.apply}
            IP={this.props.IP}
            pageUri={this.props.pageUri}
            schoolName={this.props.schoolName}
          />
        )}
        <Reviews />
        <LeadCaptureForm
          IP={this.props.IP}
          pageUri={this.props.pageUri}
          schoolName={this.props.schoolName}
          trackGA={this.trackStatic}
        />
        <InfoButtonContainer
          terms={this.activateMoreInfo}
          faq={this.activateFAQ}
          eligibility={this.activateEligibility}
          contact={this.activateContact}
        />
        <Collapse
          isOpened={this.state.termInfo}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <TermInfo />
        </Collapse>
        <Collapse
          isOpened={this.state.faq}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <FAQ schoolName={this.props.schoolName} />
        </Collapse>
        <Collapse
          isOpened={this.state.eligibility}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <Eligibility />
        </Collapse>
        <Collapse
          isOpened={this.state.contact}
          springConfig={{ stiffness: 150, damping: 40 }}
        >
          <ContactForm formName={this.props.formName} />
        </Collapse>
        <CookieBanner />
        <ApplyFooter onClick={this.scrollToApply3} />
      </Layout>
    )
  }
}

export default Homepage
