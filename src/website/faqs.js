module.exports = [
  {
    question: "What is the dress code?",
    answer:
      "The dress code is formal attire, if the men can avoid green suits that would also be great",
  },
  {
    question:
      "What will the weather be like / will there be time spent outside?",
    answer:
      "We expect the weather to be warm, there is also plenty of shelter if the weather turns.",
  },
  {
    question: "Is there a quiet area?",
    answer: "Yes, if you require use of this area then please get in touch.",
  },
  {
    question: "Is there a theme?",
    answer: "No theme",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "There are no plus ones, your invite will be addressed to the invitees",
  },
  {
    question: "Do you cater for particular food requirements?",
    answer: "You can specify this on the RSVP form",
  },
  {
    question: "Can I film / photograph the ceremony?",
    answer:
      "Please do not film or photograph during the ceremony, feel free to photograph the signing of the registry and anything after that.",
  },
  {
    question: "My question is not answered here",
    answer: "Contact us at alexburley3@live.co.uk or beckypowell84@gmail.com",
  },
  {
    question:
      "Who should I call if I can't make it to the wedding or will be late?",
    answer: "Please call the venue on: ",
  },
  {
    question: "Can I bring my child?",
    answer: "Yes",
  },
  {
    question: "What is the accessibility situation?",
    answer: "?",
  },
  {
    question: "When is the deadline for the RSVP?",
    answer: "6 weeks before",
  },
  {
    question: "What is the parking situation?",
    answer: "Plenty",
  },
  {
    question: "What is the itinerary/order of the day?",
    answer: "xyz",
  },
  {
    question: "What time shall I arrive?",
    answer: "xyz",
  },
  {
    question: "Will there be open bar and do I need cash?",
    answer:
      "There will be some drinks paid for and plenty for the meal, the bar does take card.",
  },
].sort((a, b) => {
  return a.question > b.question ? 1 : -1;
});
