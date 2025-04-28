import React from 'react';
import { Lightbulb } from 'lucide-react';

const QuizHeader: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Lightbulb className="w-8 h-8 text-purple-500" />
        <h1 className="text-3xl font-bold text-gray-800">MCQ Quiz Generator</h1>
      </div>
      <p className="text-gray-600 max-w-md mx-auto">
        Choose a topic to generate MCQs instantly and test your knowledge!
      </p>
    </header>
  );
};

export default QuizHeader;