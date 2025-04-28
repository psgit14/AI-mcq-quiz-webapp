import React from 'react';
import { CheckCircle, XCircle, BarChart2 } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuizResultsProps {
  questions: Question[];
  showAnswers: boolean;
}

const QuizResults: React.FC<QuizResultsProps> = ({ questions, showAnswers }) => {
  if (!showAnswers || questions.length === 0) return null;

  const answeredQuestions = questions.filter(q => q.selectedAnswer);
  const correctAnswers = questions.filter(q => q.selectedAnswer === q.correctAnswer);
  const score = (correctAnswers.length / questions.length) * 100;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fadeIn">
      <div className="flex items-center gap-2 mb-6">
        <BarChart2 className="w-6 h-6 text-purple-500" />
        <h3 className="text-xl font-semibold text-gray-800">Quiz Results</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-blue-600 font-semibold mb-1">Total Questions</div>
          <div className="text-2xl font-bold text-blue-700">{questions.length}</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-green-600 font-semibold mb-1">Correct Answers</div>
          <div className="text-2xl font-bold text-green-700">{correctAnswers.length}</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-purple-600 font-semibold mb-1">Score</div>
          <div className="text-2xl font-bold text-purple-700">{Math.round(score)}%</div>
        </div>
      </div>
      
      <div className="space-y-3">
        {questions.map((question, index) => {
          const isCorrect = question.selectedAnswer === question.correctAnswer;
          return (
            <div 
              key={question.id}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                isCorrect ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center font-medium">
                {index + 1}
              </span>
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span className={`flex-grow ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {question.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizResults;