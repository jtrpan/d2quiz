export const quiz1 =  {
  "quizTitle": "Section 1: Common Perks",
  "quizSynopsis": "Do you know your everyday equipment?",
  "appLocale": {
    "landingHeaderText": "<questionLength> Weapon Perks",
    "question": "Perk",
    "startQuizBtn": "I am ready.",
    "resultFilterAll": "All",
    "resultFilterCorrect": "Correct",
    "resultFilterIncorrect": "Incorrect",
    "nextQuestionBtn": "Next",
    "resultPageHeaderText": "You have completed this section. You got <correctIndexLength> out of <questionLength> questions."
  },
  "questions": [
    {
      "answers": [
        "Kill Clip",
        "Rampage",
        "Swashbuckler",
        "Surrounded"
      ],
      "questionType": "text",
      "question": "What perk is this?",
      "questionPic": "https://d2.destinygamewiki.com/mediawiki/images/2/2d/Rampage_icon1.png",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Nicely done - we're kicking things off nice and easy.",
      "messageForIncorrectAnswer": "I don't know what to say, that should have been a freebie. Better go back and review your perks!",
      "explanation": "Rampage: Kills with this weapon temporarily grant increased damage. Stacks 3x.",
      "point": "1"
    },
    {
      "question": "What perk is this?",
      "questionPic": "https://d2.destinygamewiki.com/mediawiki/images/2/23/Threat_detector_icon1.png",
      "questionType": "text",
      "answers": [
        "Threat Detector",
        "Grave Robber",
        "Demolitionist",
        "Headseeker"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Good stuff. Shall we make things a touch harder? ",
      "messageForIncorrectAnswer": "Not quite. Don't sweat it, this was only worth 1 point.",
      "explanation": "Threat Detector: Increased reload, stability, and handling when enemies are in close proximity.",
      "point": "1"
    }
  ]
}

export default quiz1;