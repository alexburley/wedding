module.exports = [
  ...[
    {
      question: "What is the dress code?",
      answer: "Formal/semi formal attire",
    },
    {
      question: "Can I film / photograph the ceremony?",
      answer:
        "Please do not film or photograph during the ceremony, we have a photographer and videographer on the day and will share this after, so you will be able to access footage/photos. Feel free to photograph/record anything after that.",
    },
    {
      question:
        "Who should I call if I can't make it to the wedding or will be late on the day?",
      answer: "Please call the venue on: 01434 400 044 / 01434 682 569 ",
    },
    {
      question: "Is the venue accessible?",
      answer:
        "For any accessibility requirements please contact the venue on 01434 400 044 / 01434 682 569 or email at enquiries@crippshealey.com ",
    },
    {
      question: "When is the deadline for the RSVP?",
      answer: "Please RSVP by 01/03/2021",
    },
    {
      question: "Is there free parking?",
      answer: "There is plenty of free parking on site",
    },
    {
      question: "What is the itinerary/order of the day?",
      answer:
        "13:30 Day Guests Arrive, 14:00 Ceremony, 19:30 Evening Guests Arrive, 01:00 Bar closes",
    },
    {
      question: "What time shall I arrive?",
      answer:
        "Day guests should arrive around 13:30PM and evening guests from 19:30",
    },
  ].sort((a, b) => {
    return a.question > b.question ? 1 : -1;
  }),
  {
    question: "Can I bring a plus one?",
    answer:
      "There are no plus ones, your invite will be addressed to the invitees",
  },
  {
    question: "I have a question that isn't answered here",
    answer:
      "Feel free to text or call us on 0774338195 (Alex) or 07969564376 (Becky)",
  },
];
