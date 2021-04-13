const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [{
	question: 'What Political Party does Kevin Minorly Support',
	choice1: 'Democratic',
	choice2: 'Republican',
	choice3: 'None',
	choice4: 'We Should not Discuss Politics in Class',
	answer: 2,
}, {
	question: 'When will Kevin Go To Blended School',
	choice1: 'He Wont',
	choice2: 'Dont Really Care',
	choice3: 'Never',
	choice4: 'Starting on April 14',
	answer: 4,
}, {
	question: 'What Recources Did Kevin Use For This',
	choice1: 'Copy and Pasted from Google',
	choice2: 'Watched An Hour Twenty Minute Video',
	choice3: 'Somehow Made it All Himself',
	choice4: 'Someone Else Made It',
	answer: 2,
}, {
	question: 'Why Will Kevin Get an A on This Project',
	choice1: 'He Wont',
	choice2: 'The Creativity',
	choice3: 'Because Mr.Whalen is Nice',
	choice4: 'Because of the Advanced Coding',
	answer: 3,
} ];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNewQuestion();
};

getNewQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score);
		return window.location.assign('file:///C:/Users/kesha/OneDrive/Documents/GitHub/quizgame-kesha2005/end.html');
	}
	questionCounter++;
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
	ProgressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionsIndex];
	question.innerText = currentQuestion.question;	

	choices.forEach((choice) => {
		const {
			number
		} = choice.dataset;
		choice.innerText = currentQuestion[`choice${number}`];
	});

	availableQuestions.splice(questionsIndex, 1);

	acceptingAnswers = true;
};

choices.forEach((choices) => {
	choices.addEventListener('click', (e) => {
		if (!acceptingAnswers) return;

		acceptingAnswers = false;
		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset.number;

		const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

		if (classToApply === 'correct') {
			incrementScore(SCORE_POINTS);
		}

		selectedChoice.parentElement.classList.add(classToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		}, 1000);
	});
});

incrementScore = nun => {
    score +=nun
    scoreText.innerText = score
}

startGame();