import logo from "../images/logo_placeholder.png" // add school logo to images folder and import here

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "SCHOOL_NAME"

export const schoolURL = 'https://www.SCHOOLWEBSITE.com/' // update with url of school's website

export const headline = "Learn to CODE at SCHOOL NAME" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `*** EXAMPLE: ${schoolName} designs its programs to cover multiple stacks of programming languages to help graduates develop a diverse skill-set. ${schoolName} partners with Skills Fund to offer tuition and cost of living financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "***EXAMPLE: Choose between the Onsite Bootcamp, Online Full-Time Bootcamp, and Online Part-Time Bootcamp programs."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'SCHOOLNAME_contact'

export const GATracking = 'UA-TRACKING-ID'

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP INFO ***** 

export const programNameAndURL = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Program 1",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=LENDERCODE1" 
    },
    {
        name: "Program 2",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=LENDERCODE2"
    },
    {
        name: "Program 3",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=LENDERCODE3"
    }
]

export const loanUrlWithCode = "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=LENDERCODE1" // if multiple programs, set lenderCode to first program option

export const hubspotFormId = "HUBSPOT_FORM_ID" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_SCHOOLNAME_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END LOAN APP INFO ***** 


// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
    interestRate36: 'X.XX%',
    interestRate60: 'XX.XX%',
    APRRange36: 'XX.XX - XX.XX%',
    APRRange60: 'XX.XX - XX.XX%',
    interestOnly: [{
        programName: 'PROGRAM NAME',
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        IOPayment36: '$XX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        IOPayment60: '$XX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
        programLength: 'X' // program length in months
    }],
    immediateRepayment: [{ 
        programName: 'PROGRAM NAME',
        APR36: 'XX.XX%',
        financeCharge36: '$X,XXX.XX',
        FullMonthlyPayment36: '$XXX.XX',
        APR60: 'XX.XX%',
        financeCharge60: '$X,XXX.XX',
        FullMonthlyPayment60: '$XXX.XX',
        LoanExampleAmt: '$XX,XXX',
        LoanExampleOFeeAmt: '$XXX',
        LoanExampleAmtPlusOFee: '$XX,XXX',
    }]
}

export const faq = {
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Program1 and Program2', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: true, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: true, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    origFee: 0.04,

    // interest payment FAQ info
    interestRate36: 'X.XX%',
    interestRate60: 'XX.XX%',
    APR36: 'XX.XX - XX.XX%',
    APR60: 'XX.XX - XX.XX%',
    IOPayment36: '$XX.XX',
    IOPayment60: '$XX.XX',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "PROGRAM 1",
            maxAmount: "the max loan amount",
            col: true,
            colAmount: "$6,000"
        },
        {
            programName: "PROGRAM 2",
            maxAmount: "$10,750",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 


// ***** BEGIN LOAN CALCULATOR INFO *****

export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
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
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ]
}

// ***** END PAYMENT TABLE INFO *****
