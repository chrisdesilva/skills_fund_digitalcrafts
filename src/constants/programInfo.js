import logo from "../images/dc_logo.png" // add school logo to images folder and import here

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "DigitalCrafts"

export const schoolURL = "https://www.digitalcrafts.com/" // update with url of school's website

export const headline = "Learn to Code at DigitalCrafts" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} offers immersive and flex (part-time) programs to fit any schedule. ${schoolName} partners with Skills Fund to offer tuition and cost of living financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Full Stack Immersive and Full Stack Flex programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "digitalcrafts_contact"

export const GATracking = "UA-68312423-1"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP INFO *****

export const programNameAndURL = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Full Stack Immersive",
    url: "https://my.skills.fund/application?lenderCode=SFDCIE17",
    active: false,
  },
  {
    name: "Full Stack Flex",
    url: "https://my.skills.fund/application?lenderCode=SFDCFX17",
    active: false,
  },
]

export const hubspotFormId = "de12e640-2f91-44d9-bfb0-28197e6d0f7e" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_digitalcrafts_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END LOAN APP INFO *****

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.08 - 11.69%",
  APRRange60: "12.48 - 12.71%",
  interestOnly: [
    {
      programName: "Full Stack Immersive",
      APR36: "11.08%",
      financeCharge36: "$2,371.56",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.48%",
      financeCharge60: "$4,135.64",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "4", // program length in months
    },
  ],
  immediateRepayment: [
    {
      programName: "Full Stack Flex",
      APR36: "11.69%",
      financeCharge36: "$1,808.87",
      FullMonthlyPayment36: "$314.14",
      APR60: "12.71%",
      financeCharge60: "$3,385.95",
      FullMonthlyPayment60: "$214.77",
      LoanExampleAmt: "$9,500",
      LoanExampleOFeeAmt: "$380",
      LoanExampleAmtPlusOFee: "$9,880",
    },
  ],
}

export const faq = {
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms: "Full Stack Immersive program", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  origFee: 0.04,

  // interest payment FAQ info
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.08%",
  APR60: "12.48%",
  IOPayment36: "$77.91",
  IOPayment60: "$95.25",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "DigitalCrafts' Full Stack Immersive program",
      maxAmount: "$14,950",
      col: true,
      colAmount: "$6,000",
    },
    {
      programName: "DigitalCrafts' Full Stack Flex program",
      maxAmount: "$9,950",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN LOAN CALCULATOR INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}

// ***** END LOAN CALCULATOR INFO *****

// ***** BEGIN PAYMENT TABLE INFO *****

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END PAYMENT TABLE INFO *****
