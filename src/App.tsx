import React from 'react';
import QuizHeader from './components/QuizHeader';
import TopicSelector from './components/TopicSelector';
import CustomTextInput from './components/CustomTextInput';
import QuizQuestions from './components/QuizQuestions';
import QuizControls from './components/QuizControls';
import QuizResults from './components/QuizResults';
import { useQuiz } from './hooks/useQuiz';
import { topics } from './data/topics';

function App() {
  const {
    selectedTopic,
    questions,
    showAnswers,
    isLoading,
    customText,
    selectTopic,
    toggleAnswers,
    generateNewQuestions,
    selectAnswer,
    handleCustomTextChange,
    generateCustomQuestions
  } = useQuiz();

  const isCustomTopic = topics.find(t => t.id === selectedTopic)?.isCustom;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <QuizHeader />

        <div className="flex justify-center">
          <TopicSelector 
            selectedTopic={selectedTopic}
            onSelectTopic={selectTopic}
            disabled={isLoading}
          />
        </div>

        {isCustomTopic && (
          <CustomTextInput
            value={customText}
            onChange={handleCustomTextChange}
            onSubmit={generateCustomQuestions}
            disabled={isLoading}
          />
        )}

        <QuizResults 
          questions={questions}
          showAnswers={showAnswers}
        />

        <QuizQuestions 
          questions={questions}
          showAnswers={showAnswers}
          isLoading={isLoading}
          onSelectAnswer={selectAnswer}
        />

        <QuizControls 
          showAnswers={showAnswers}
          isLoading={isLoading}
          hasQuestions={questions.length > 0}
          onToggleAnswers={toggleAnswers}
          onGenerateNew={isCustomTopic ? generateCustomQuestions : generateNewQuestions}
        />
      </div>
    </div>
  );
}

export default App;