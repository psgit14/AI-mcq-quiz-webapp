import { useState, useCallback } from 'react';
import { Question } from '../types/quiz';
import { getRandomQuestions, generateQuestionsFromText } from '../utils/questionGenerator';
import { topics } from '../data/topics';

export const useQuiz = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customText, setCustomText] = useState('');

  const selectTopic = useCallback((topicId: string) => {
    setIsLoading(true);
    setShowAnswers(false);
    setSelectedTopic(topicId);
    
    if (topics.find(t => t.id === topicId)?.isCustom) {
      setIsLoading(false);
      setQuestions([]);
      return;
    }
    
    setTimeout(() => {
      const newQuestions = getRandomQuestions(topicId, 5);
      setQuestions(newQuestions);
      setIsLoading(false);
    }, 600);
  }, []);

  const toggleAnswers = useCallback(() => {
    setShowAnswers(prev => !prev);
  }, []);

  const generateNewQuestions = useCallback(() => {
    if (!selectedTopic) return;
    
    setIsLoading(true);
    setShowAnswers(false);
    
    setTimeout(() => {
      const newQuestions = getRandomQuestions(selectedTopic, 5);
      setQuestions(newQuestions);
      setIsLoading(false);
    }, 600);
  }, [selectedTopic]);

  const selectAnswer = useCallback((questionId: string, answerId: string) => {
    setQuestions(prevQuestions => 
      prevQuestions.map(q => 
        q.id === questionId 
          ? { ...q, selectedAnswer: answerId }
          : q
      )
    );
  }, []);

  const handleCustomTextChange = useCallback((text: string) => {
    setCustomText(text);
  }, []);

  const generateCustomQuestions = useCallback(async () => {
    if (!customText.trim()) return;
    
    setIsLoading(true);
    setShowAnswers(false);
    
    try {
      const newQuestions = await generateQuestionsFromText(customText);
      setQuestions(newQuestions);
    } catch (error) {
      console.error('Error generating questions:', error);
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  }, [customText]);

  return {
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
  };
};