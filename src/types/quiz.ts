export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswer: string;
  selectedAnswer?: string;
}

export interface Topic {
  id: string;
  name: string;
  isCustom?: boolean;
}

export interface QuizState {
  selectedTopic: string | null;
  questions: Question[];
  showAnswers: boolean;
  isLoading: boolean;
  customText: string;
}