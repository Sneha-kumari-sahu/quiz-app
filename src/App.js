import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who is the prime minister of India?',
			answerOptions: [
				{ answerText: 'Rahul Gandhi', isCorrect: false },
				{ answerText: 'Nitish kumar', isCorrect: false },
				{ answerText: 'Narendra Modi', isCorrect: true },
				{ answerText: 'Yogi Adityanath', isCorrect: false },
			],
		},
		{
			questionText: 'What is capital of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Haryana', isCorrect: false },
				{ answerText: 'Bihar', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the owner of Tata Group?',
			answerOptions: [
				{ answerText: 'Ratan Tata', isCorrect: true },
				{ answerText: 'Gautam Adani', isCorrect: false },
				{ answerText: 'Amit Shah', isCorrect: false },
				{ answerText: 'Mukesh Ambani', isCorrect: false },
			],
		},
		{
			questionText: 'How many state in India?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '27', isCorrect: false },
				{ answerText: '26', isCorrect: false },
				{ answerText: '29', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='result'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
