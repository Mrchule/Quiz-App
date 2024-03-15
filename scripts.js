let quizQuestions = [
  {
    question:
      "A flashing red traffic light signifies that a driver should do what?",
    A: "stop",
    B: "speed up",
    C: "proceed with caution",
    D: "honk the horn",
    answer: "A",
  },
  {
    question: "A knish is traditionally stuffed with what filling?",
    A: "potato",
    B: "creamed corn",
    C: "lemon custard",
    D: "raspberry jelly",
    answer: "A",
  },
  {
    question: "A pita is a type of what?",
    A: "fresh fruit",
    B: "flat bread",
    C: "French tart",
    D: "friend bean dip",
    answer: "B",
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: "landscape",
    B: "caricature",
    C: "still life",
    D: "Impressionism",
    answer: "B",
  },
  {
    question: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A",
  },
  {
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A",
  },
  {
    question: "A triptych is a work of art that is painted on how many panels?",
    A: "two",
    B: "three",
    C: "five",
    D: "eight",
    answer: "B",
  },
  {
    question:
      "According to a famous line from the existentialist play 'No Exit' what is hell?",
    A: "oneself",
    B: "other people",
    C: "little made large",
    D: "hued in green and blue",
    answer: "B",
  },
  {
    question:
      "According to a popular slogan, what state should people not 'mess with'?",
    A: "New York",
    B: "Texas",
    C: "Montana",
    D: "Rhode Island",
    answer: "B",
  },
  {
    question:
      "According to a Yale University study, what smell is the most recognizable to American adults?",
    A: "tuna",
    B: "laundry",
    C: "popcorn",
    D: "coffee",
    answer: "D",
  },
  {
    question:
      "According to folklore, the 'jackalope' is an antlered version of what animal?",
    A: "chicken",
    B: "rabbit",
    C: "moose",
    D: "snake",
    answer: "B",
  },
  {
    question: "According to Greek mythology, who was Apollo's twin sister?",
    A: "Aphrodite",
    B: "Artemis",
    C: "Venus",
    D: "Athena",
    answer: "B",
  },
  {
    question:
      "According to legend, if you give someone the 'evil eye' what are you doing?",
    A: "cursing them",
    B: "blessing a child",
    C: "counting money",
    D: "passing time",
    answer: "A",
  },
  {
    question:
      "According to legend, in what country are you most likely to meet a leprechaun?",
    A: "Ireland",
    B: "Poland",
    C: "Greenland",
    D: "Scotland",
    answer: "A",
  },
  {
    question:
      "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
    A: "Poodle",
    B: "Beagle",
    C: "German shepherd",
    D: "Labrador retriever",
    answer: "D",
  },
  {
    question:
      "According to the Bible, Moses and Aaron had a sister named what?",
    A: "Jochebed",
    B: "Ruth",
    C: "Leah",
    D: "Miriam",
    answer: "D",
  },
  {
    question:
      "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
    A: "calm",
    B: "blue",
    C: "windy",
    D: "really big",
    answer: "B",
  },
  {
    question:
      "According to the Mother Goose nursery rhyme, which child is full of woe?",
    A: "Monday's child",
    B: "Wednesday's child",
    C: "Thursday's child",
    D: "Saturday's child",
    answer: "B",
  },
  {
    question:
      "According to the popular saying, what should you do 'when in Rome'?",
    A: "watch your wallet",
    B: "see the Coliseum",
    C: "as the Romans do",
    D: "don't drink the water",
    answer: "C",
  },
];

const btn = document.querySelector("#submit");
const a = document.querySelector("#a-item");
const b = document.querySelector("#b-item");
const c = document.querySelector("#c-item");
const d = document.querySelector("#d-item");
const que = document.querySelector("#question");
const result=document.querySelector(".container");
// const ans = document.querySelectorAll(".answer");
let answerEle = document.querySelectorAll(".answer");
let count = 0;
let score = 0;
LoadQue();
function LoadQue(Finalscore) {
  if (count < quizQuestions.length) {
    que.innerHTML = count + 1 + ". " + quizQuestions[count].question;
    a.innerHTML = quizQuestions[count].A;
    b.innerHTML = quizQuestions[count].B;
    c.innerHTML = quizQuestions[count].C;
    d.innerHTML = quizQuestions[count].D;
  } else {
    // alert("you have sucessfully compleated the Test ");
    result.classList.add("result")
     result.innerHTML=`<h1> You Got ${Finalscore} marks out of ${quizQuestions.length}`
  }
}

function getselect() {
  let ansss = undefined;
  answerEle.forEach((element) => {
    if (element.checked) {
      ansss = element.id;
    }
  });
  return ansss;
}
function deselectAnswer() {
  answerEle.forEach((element) => {
    element.checked = false;
  });
}
btn.addEventListener("click", () => {
  count++;
  let anss = getselect();
  let finalscore=calculateScore(anss);
  LoadQue(finalscore);
  // console.log("user selected answer :  " + anss);
  // console.log("actual  answer :  " + quizQuestions[count - 1].answer);
  deselectAnswer();
});

function calculateScore(anss) {
  if (quizQuestions[count - 1].answer == anss) {
    score += 1;
  }
  return score;
}
