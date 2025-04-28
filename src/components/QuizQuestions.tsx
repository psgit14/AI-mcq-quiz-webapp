import React from 'react';
import { Question } from '../types/quiz';
import QuizQuestion from './QuizQuestion';
import { Loader2 } from 'lucide-react';

interface QuizQuestionsProps {
  questions: Question[];
  showAnswers: boolean;
  isLoading: boolean;
  onSelectAnswer: (questionId: string, answerId: string) => void;
}

const QuizQuestions: React.FC<QuizQuestionsProps> = ({
  questions,
  showAnswers,
  isLoading,
  onSelectAnswer
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <p className="text-gray-600">Loading questions...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Select a topic to view questions
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {questions.map((question, index) => (
        <QuizQuestion 
          key={question.id} 
          question={question} 
          index={index}
          showAnswer={showAnswers}
          onSelectAnswer={onSelectAnswer}
        />
      ))}
    </div>
  );
};

export default QuizQuestions;