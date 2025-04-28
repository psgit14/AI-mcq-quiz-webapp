import React from 'react';
import { Eye, EyeOff, RefreshCw } from 'lucide-react';

interface QuizControlsProps {
  showAnswers: boolean;
  isLoading: boolean;
  hasQuestions: boolean;
  onToggleAnswers: () => void;
  onGenerateNew: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({
  showAnswers,
  isLoading,
  hasQuestions,
  onToggleAnswers,
  onGenerateNew
}) => {
  if (!hasQuestions) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-12">
      <button
        onClick={onToggleAnswers}
        disabled={isLoading || !hasQuestions}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {showAnswers ? (
          <>
            <EyeOff className="w-5 h-5" />
            <span>Hide Answers</span>
          </>
        ) : (
          <>
            <Eye className="w-5 h-5" />
            <span>Show Answers</span>
          </>
        )}
      </button>
      
      <button
        onClick={onGenerateNew}
        disabled={isLoading || !hasQuestions}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
        <span>Generate New MCQs</span>
      </button>
    </div>
  );
};

export default QuizControls;