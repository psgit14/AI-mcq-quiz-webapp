import React from 'react';
import { Question } from '../types/quiz';
import { CheckCircle, X } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  index: number;
  showAnswer: boolean;
  onSelectAnswer: (questionId: string, answerId: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  index,
  showAnswer,
  onSelectAnswer
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-3 mb-4">
        <span className="flex-shrink-0 bg-blue-100 text-blue-600 font-semibold rounded-full w-8 h-8 flex items-center justify-center">
          {index + 1}
        </span>
        <h3 className="text-lg font-medium text-gray-800">{question.text}</h3>
      </div>
      
      <div className="space-y-3 ml-11">
        {question.options.map(option => {
          const isSelected = option.id === question.selectedAnswer;
          const isCorrect = option.id === question.correctAnswer;
          const showCorrect = showAnswer && isCorrect;
          const showIncorrect = showAnswer && isSelected && !isCorrect;
          
          let optionClasses = 'flex items-center gap-3 p-3 border rounded-md transition-colors cursor-pointer ';
          
          if (showCorrect) {
            optionClasses += 'bg-green-50 border-green-200 text-green-800';
          } else if (showIncorrect) {
            optionClasses += 'bg-red-50 border-red-200 text-red-800';
          } else if (isSelected) {
            optionClasses += 'bg-blue-50 border-blue-200 text-blue-800';
          } else {
            optionClasses += 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100';
          }
          
          return (
            <div 
              key={option.id}
              onClick={() => !showAnswer && onSelectAnswer(question.id, option.id)}
              className={optionClasses}
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center font-medium">
                {option.id}
              </span>
              <span className="flex-grow">{option.text}</span>
              {showCorrect && (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              )}
              {showIncorrect && (
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;