import { Facets } from './facets'
import { Drivers } from './drivers'
import { DriverQuestions } from './driver-questions'
import { Dimensions } from './dimensions'


const FacetsList: Facets[] = [
  {
    Id: 1,
    Description: "Safety Commitment",
    Drivers: [
      {
        Id: 1,
        Description: "Safety Programme Effectiveness",
        DriverQuestions: [
          {
            Id: 1,
            Description: "The reason for the safety program is to cut costs only."
          }
        ]
      },
      {
        Id: 2,
        Description: "Incidents will always happen",
        DriverQuestions: [
          {
            Id: 2,
            Description: "Only the safety department is responsible for safety."
          }
        ]
      },
      {
        Id: 3,
        Description: "Safety department resolve matters",
        DriverQuestions: [
          {
            Id: 3,
            Description: "I believe that incidents will happen, even if safety precautions are taken."
          }
        ]
      },
      {
        Id: 4,
        Description: "Information Sharing",
        DriverQuestions: [
          {
            Id: 4,
            Description: "Only the safety department is responsible to solve safety matters."
          }
        ]
      },
      {
        Id: 5,
        Description: "Team Acceptance",
        DriverQuestions: [
          {
            Id: 5,
            Description: "I am the last person to receive any new information."
          }
        ]
      },
      {
        Id: 6,
        Description: "Team Effectiveness",
        DriverQuestions: [
          {
            Id: 6,
            Description: "The rest of my team ignores my views."
          }
        ]
      },
      {
        Id: 7,
        Description: "Joint Decision Making",
        DriverQuestions: [
          {
            Id: 7,
            Description: "Employees find it difficult to work together."
          }
        ]
      },
      {
        Id: 8,
        Description: "Planning Participation",
        DriverQuestions: [
          {
            Id: 8,
            Description: "Only selected team members participate in decision-making in my section."
          }
        ]
      },
      {
        Id: 9,
        Description: "Disciplinary Fairness",
        DriverQuestions: [
          {
            Id: 9,
            Description: "Only a small group of employees participate in job planning."
          }
        ]
      },
      {
        Id: 10,
        Description: "Working Conditions",
        DriverQuestions: [
          {
            Id: 10,
            Description: "My poor safety performance is unfairly punished."
          }
        ]
      },
      {
        Id: 11,
        Description: "Safety Knowledge",
        DriverQuestions: [
          {
            Id: 11,
            Description: "I lack knowledge to behave safely."
          }
        ]
      }
    ]
  },
  {
    Id: 2,
    Description: "Safety Mindset Indicator",
    Drivers: [
      {
        Id: 1,
        Description: "Safety Responsibility",
        DriverQuestions: []
      }
    ]
  }
]

export const Data: Dimensions[] = [
  {
    Id: 1,
    Description: "Dimension 1",
    Facets:FacetsList
  },
   {
    Id: 2,
    Description: "Dimension 2",
    Facets:[]
  },
   {
    Id: 3,
    Description: "Dimension 3",
    Facets:[]
  }
];


