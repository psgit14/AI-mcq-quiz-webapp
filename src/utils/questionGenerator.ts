import { Question } from '../types/quiz';
import { questionsByTopic } from '../data/questions';
import nlp from 'compromise';

export const getRandomQuestions = (topicId: string, count: number = 5): Question[] => {
  const topicQuestions = questionsByTopic[topicId] || [];
  if (topicQuestions.length <= count) {
    return topicQuestions;
  }
  
  return [...topicQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

export const generateQuestionsFromText = async (text: string): Promise<Question[]> => {
  const doc = nlp(text);
  const sentences = doc.sentences().out('array');
  const nouns = doc.nouns().out('array');
  const verbs = doc.verbs().out('array');
  
  // Extract key concepts and generate questions
  const questions: Question[] = [];
  let questionId = 1;

  // Generate questions based on important sentences
  const importantSentences = sentences
    .filter(s => s.length > 30)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  importantSentences.forEach((sentence, index) => {
    const options = generateOptionsFromContext(sentence, nouns, verbs);
    
    questions.push({
      id: `custom_${questionId++}`,
      text: generateQuestionFromSentence(sentence),
      options: options.map((opt, i) => ({
        id: String.fromCharCode(97 + i), // a, b, c, d
        text: opt
      })),
      correctAnswer: 'a' // First option is always correct in this simple implementation
    });
  });

  return questions;
};

const generateQuestionFromSentence = (sentence: string): string => {
  // Convert statement to question
  sentence = sentence.trim().replace(/[.!?]+$/, '');
  
  if (sentence.toLowerCase().includes('is') || sentence.toLowerCase().includes('are')) {
    return sentence + '?';
  }
  
  return `Which of the following statements is true about: ${sentence}?`;
};

const generateOptionsFromContext = (
  correctStatement: string,
  nouns: string[],
  verbs: string[]
): string[] => {
  const options = [correctStatement];
  
  // Generate 3 plausible but incorrect options
  while (options.length < 4) {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    
    const incorrectOption = `${randomNoun} ${randomVerb}`;
    if (!options.includes(incorrectOption)) {
      options.push(incorrectOption);
    }
  }
  
  return options;
};