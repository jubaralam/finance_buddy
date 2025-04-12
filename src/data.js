export const navLists = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact Us", url: "/contact-us" },
];

// export const formInputData = [
//     {
//       "label": "Age",
//       "name": "age",
//       "type": "number",
//       "required": true
//     },
//     {
//       "label": "Monthly Income",
//       "name": "monthlyIncome",
//       "type": "number",
//       "required": true
//     },
//     {
//       "label": "Monthly Fixed Expenses",
//       "name": "monthlyFixedExpenses",
//       "type": "number",
//       "required": true
//     },
//     {
//       "label": "Monthly Savings or Investment",
//       "name": "monthlySavings",
//       "type": "number",
//       "required": true
//     },
//     {
//       "label": "Current Savings / Balance",
//       "name": "currentSavings",
//       "type": "number",
//       "required": true
//     }
//     ,
//     {
//       "label": "Expected Yearly Income Growth Rate (%)",
//       "name": "incomeGrowthRate",
//       "type": "number",
//       "required": false
//     },
//     {
//       "label": "Career Change Planned?",
//       "name": "careerChange",
//       "type": "radio",
//       "options": ["Yes", "No"],
//       "required": false
//     },
//     {
//       "label": "Expected New Income",
//       "name": "newExpectedIncome",
//       "type": "number",
//       "required": false
//     },
//     {
//       "label": "Planned Change Year",
//       "name": "changeYear",
//       "type": "number",
//       "required": false
//     },
//     {
//       "label": "Financial Goals",
//       "name": "financialGoals",
//       "type": "repeatable",
//       "fields": [
//         {
//           "label": "Goal Name",
//           "name": "goal",
//           "type": "text",
//           "required": true
//         },
//         {
//           "label": "Target Amount",
//           "name": "amount",
//           "type": "number",
//           "required": true
//         },
//         {
//           "label": "Target Year",
//           "name": "targetYear",
//           "type": "number",
//           "required": true
//         }
//       ]
//     },
// ]

export const formInputData = [
  {
    label: "Age",
    name: "age",
    type: "number",
    required: true,
  },
  {
    label: "Monthly Income",
    name: "monthlyIncome",
    type: "number",
    required: true,
  },
  {
    label: "Monthly Fixed Expenses",
    name: "monthlyFixedExpenses",
    type: "number",
    required: true,
  },
  {
    label: "Monthly Savings or Investment",
    name: "monthlySavings",
    type: "number",
    required: true,
  },
  {
    label: "Current Savings / Balance",
    name: "currentSavings",
    type: "number",
    required: true,
  },
  {
    label: "Expected Yearly Income Growth Rate (%)",
    name: "incomeGrowthRate",
    type: "option",
    required: false,
    options: ["0", "2", "5", "8", "10", "15", "20"],
  },
  {
    label: "Career Change Planned?",
    name: "careerChange",
    type: "radio",
    options: ["Yes", "No"],
    required: false,
  },
  {
    label: "Expected New Income",
    name: "newExpectedIncome",
    type: "number",
    required: false,
  },
  {
    label: "Planned Change Year",
    name: "changeYear",
    type: "option",
    required: false,
    options: ["2025", "2026", "2027", "2028", "2029", "2030"],
  },
  {
    label: "Financial Goals",
    name: "financialGoals",
    type: "repeatable",
    fields: [
      {
        label: "Goal Name",
        name: "goal",
        type: "text",
        required: true,
      },
      {
        label: "Target Amount",
        name: "amount",
        type: "number",
        required: true,
      },
      {
        label: "Target Year",
        name: "targetYear",
        type: "option",
        required: true,
        options: [
          "2025",
          "2026",
          "2027",
          "2028",
          "2029",
          "2030",
          "2035",
          "2040",
        ],
      },
    ],
  },
];


// export const formInputData = [
//   {
//     label: "Age",
//     name: "age",
//     type: "number",
//     required: true,
//     value: 28,
//   },
//   {
//     label: "Monthly Income",
//     name: "monthlyIncome",
//     type: "number",
//     required: true,
//     value: 70000,
//   },
//   {
//     label: "Monthly Fixed Expenses",
//     name: "monthlyFixedExpenses",
//     type: "number",
//     required: true,
//     value: 2000,
//   },
//   {
//     label: "Monthly Savings or Investment",
//     name: "monthlySavings",
//     type: "number",
//     required: true,
//     value: 1000,
//   },
//   {
//     label: "Current Savings / Balance",
//     name: "currentSavings",
//     type: "number",
//     required: true,
//     value: 3000,
//   },
//   {
//     label: "Expected Yearly Income Growth Rate (%)",
//     name: "incomeGrowthRate",
//     type: "option",
//     required: false,
//     options: ["0%", "2%", "5%", "8%", "10%", "15%", "20%"],
//     value: "5%",
//   },
//   {
//     label: "Career Change Planned?",
//     name: "careerChange",
//     type: "radio",
//     options: ["Yes", "No"],
//     required: false,
//     value: "Yes",
//   },
//   {
//     label: "Expected New Income",
//     name: "newExpectedIncome",
//     type: "number",
//     required: false,
//     value: 80000,
//   },
//   {
//     label: "Planned Change Year",
//     name: "changeYear",
//     type: "option",
//     required: false,
//     options: ["2025", "2026", "2027", "2028", "2029", "2030"],
//     value: "1", // Assuming current year is 2025 + 2
//   },
//   {
//     label: "Financial Goals",
//     name: "financialGoals",
//     type: "repeatable",
//     fields: [
//       {
//         label: "Goal Name",
//         name: "goal",
//         type: "text",
//         required: true,
//       },
//       {
//         label: "Target Amount",
//         name: "amount",
//         type: "number",
//         required: true,
//       },
//       {
//         label: "Target Year",
//         name: "targetYear",
//         type: "option",
//         required: true,
//         options: [
//           "2025",
//           "2026",
//           "2027",
//           "2028",
//           "2029",
//           "2030",
//           "2035",
//           "2040",
//         ],
//       },
//     ],
//     value: [
//       {
//         goal: "Buy a Car",
//         amount: 60000,
//         targetYear: "2026", 
//       },
//     ],
//   },
// ];



export const financialProjectionData = {
  netAnnualSavings: 84000,

  yearlyProjection: [
    { year: 2025, income: 600000, savings: 120000, balance: 350000 },
    { year: 2026, income: 630000, savings: 135000, balance: 485000 },
    { year: 2027, income: 661500, savings: 145000, balance: 630000 },
    { year: 2028, income: 694575, savings: 155000, balance: 785000 },
    { year: 2029, income: 729303, savings: 165000, balance: 950000 }
  ],

  financialGoalsStatus: [
    {
      goal: "Buy a Car",
      targetYear: 2026,
      amountNeeded: 500000,
      expectedBalance: 485000,
      status: "At Risk"
    },
    {
      goal: "Child's Education",
      targetYear: 2029,
      amountNeeded: 800000,
      expectedBalance: 950000,
      status: "Achievable"
    }
  ],

  retirementProjection: {
    ageNow: 30,
    ageAtRetirement: 60,
    expectedSavings: 11000000,
    monthlyPostRetirementIncome: 40000
  },

  suggestions: [
    "Consider increasing your monthly savings by 5% to reach your goals faster.",
    "You may fall short for your car goal in 2026. Try postponing it by a year.",
    "Start investing in mutual funds to boost your savings growth.",
    "Plan for inflation – try aiming for at least a 7% income growth rate annually."
  ]
};
