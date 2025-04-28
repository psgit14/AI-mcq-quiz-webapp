import React from 'react';
import { topics } from '../data/topics';
import { ChevronDown } from 'lucide-react';

interface TopicSelectorProps {
  selectedTopic: string | null;
  onSelectTopic: (topicId: string) => void;
  disabled: boolean;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ 
  selectedTopic, 
  onSelectTopic,
  disabled
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectTopic(e.target.value);
  };

  const selectedTopicName = selectedTopic 
    ? topics.find(topic => topic.id === selectedTopic)?.name 
    : 'Select a topic';

  return (
    <div className="mb-8">
      <div className="relative">
        <select
          value={selectedTopic || ''}
          onChange={handleChange}
          disabled={disabled}
          className="w-full md:w-64 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <option value="" disabled>Select a topic</option>
          {topics.map(topic => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default TopicSelector;