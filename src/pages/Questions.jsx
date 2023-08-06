const question = [
    //question 1
    {
        question_type:"Multiple Choice",
        question_order:1,
        question_tags:"#beginner #theoretical",
        qtest:'formula=\\sum_{i=1}^n i = \\frac{n(n+1)}{2}',
        question_code:{
            "tag": "p",
            "props": {},
            "children": [
              "What is thermodynamics in physics and derive its laws. Write in detail<MathJax.Node inline formula='\\sum_{i=1}^n i = \\frac{n(n+1)}{2}' />"
            ]
          },
        options_code:[
            {
                "tag": "p",
                "props": {},
                "children": [
                  "option 1"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "option 2 Write in detail"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "Optin 3 Write in detail"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "Option 4  Write in detail"
                ]
              },
        ]
    },
    //question 2
    {
        question_type:"Multiple Choice",
        question_order:1,
        question_tags:"#medium #formula based",
        qtest:'formula=\\sum_{i=1}^n i = \\frac{n(x+1)}{3}',
        question_code:{
          "tag": "p",
          "props": {},
          "children": [
            "$x^4 = 100$",
            {
              "tag": "b",
              "props": {},
              "children": [
                "India"
              ]
            }
          ]
        },
        options_code:[
            {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/2V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/3V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "2 x (distance/3V)"
                ]
              },
        ]
    },
    //question 3
    {
        question_type:"Multiple Choice",
        question_order:1,
        question_tags:"#medium #formula based",
        qtest:'formula=\\sum_{i=1}^n i = \\frac{n(n+1)}{n+1}',
        question_code:{
            "tag": "p",
            "props": {},
            "children": [
               "What is the Carnot cycle?"]
              
          },
        options_code:[
            {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/2V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/3V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "distance/V"
                ]
              },
              {
                "tag": "p",
                "props": {},
                "children": [
                  "2 x (distance/3V)"
                ]
              },
        ]
    },
    // question 4
{
  question_type: "Multiple Choice",
  question_order: 4,
  question_tags: "#beginner #conceptual",
  qimg:'<img src="https://tse1.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&pid=Api&rs=1&c=1&qlt=95&w=146&h=91" alt="disco" width="180px" />',
  question_code: {
    tag: "p",
    props: {},
    children: [
      "What is the first law of thermodynamics?",
    ],
  },
  options_code: [
    {
      tag: "p",
      props: {},
      children: ["Energy cannot be created or destroyed, only transformed."],
    },
    {
      tag: "p",
      props: {},
      children: ["Heat always flows from a hotter to a colder body."],
    },
    {
      tag: "p",
      props: {},
      children: ["Entropy of a closed system always increases."],
    },
    {
      tag: "p",
      props: {},
      children: ["The efficiency of a heat engine cannot be 100%."],
    },
  ],
},

// question 5
{
  question_type: "Multiple Choice",
  question_order: 5,
  question_tags: "#intermediate #formula based",
  question_code: {
    tag: "p",
    props: {},
    children: [
      "What is the formula for calculating the efficiency of a Carnot engine?",
    ],
  },
  options_code: [
    {
      tag: "p",
      props: {},
      children: ["(T2 - T1) / T2"],
    },
    {
      tag: "p",
      props: {},
      children: ["(T1 - T2) / T1"],
    },
    {
      tag: "p",
      props: {},
      children: ["(T2 - T1) / T1"],
    },
    {
      tag: "p",
      props: {},
      children: ["(T1 - T2) / T2"],
    },
  ],
},

// question 6
{
  question_type: "Multiple Choice",
  question_order: 6,
  question_tags: "#intermediate #conceptual",
  question_code: {
    tag: "p",
    props: {},
    children: [
      "What is the second law of thermodynamics?",
    ],
  },
  options_code: [
    {
      tag: "p",
      props: {},
      children: ["Energy cannot be created or destroyed, only transformed."],
    },
    {
      tag: "p",
      props: {},
      children: ["Heat always flows from a hotter to a colder body."],
    },
    {
      tag: "p",
      props: {},
      children: ["Entropy of a closed system always increases."],
    },
    {
      tag: "p",
      props: {},
      children: ["The efficiency of a heat engine cannot be 100%."],
    },
  ],
},

]
// const question = [
//       {
//         question_code:"What is the first law of thermodynamics?",
//         options_code: [
//           "Energy cannot be created or destroyed, only transformed from one form to another.",
//           "Entropy always increases in a closed system.",
//           "The efficiency of a heat engine cannot be 100%.",
//           "The volume of a gas is inversely proportional to its pressure at a constant temperature."
//         ],
//         answer: 0
//       },
//       {
//         question_code: "What is the second law of thermodynamics?",
//         options_code: [
//           "Entropy always increases in a closed system.",
//           "Energy cannot be created or destroyed, only transformed from one form to another.",
//           "The efficiency of a heat engine cannot be 100%.",
//           "The volume of a gas is inversely proportional to its pressure at a constant temperature."
//         ],
//         answer: 0
//       },
//       {
//         question_code: "What is the Carnot cycle?",
//         options_code: [
//           "An idealized heat engine cycle that is the most efficient possible.",
//           "A cycle that involves the reversible compression and expansion of a gas.",
//           "A cycle that involves the conversion of thermal energy into mechanical energy.",
//           "A cycle that involves the absorption of heat from a high-temperature source and the release of heat to a low-temperature sink."
//         ],
//         answer: 0
//       },
//       {
//         question_code: "What is entropy?",
//         options_code: [
//           "A measure of the disorder or randomness of a system.",
//           "The ability of a system to do work.",
//           "The energy required to increase the temperature of a system by 1 degree Celsius.",
//           "The amount of heat required to change the phase of a substance at constant temperature."
//         ],
//         answer: 0
//       },
//       {
//         question_code: "What is the efficiency of a Carnot cycle?",
//         options_code: [
//           "1 - T_low/T_high",
//           "1 - T_high/T_low",
//           "T_high/T_low",
//           "T_low/T_high"
//         ],
//         answer: 0
//       }
  
// ]
export default question;