import React from 'react';
import { FileText } from 'lucide-react';

interface CustomTextInputProps {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChange,
  onSubmit,
  disabled
}) => {
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fadeIn">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-purple-500" />
        <h3 className="text-lg font-medium text-gray-800">Custom Text Input</h3>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Paste your text here (minimum 100 words recommended for better results)"
        className="w-full h-40 p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600">
          Word count: {wordCount} {wordCount < 100 && wordCount > 0 && "(minimum 100 recommended)"}
        </span>
        
        <button
          onClick={onSubmit}
          disabled={disabled || wordCount < 50}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Generate MCQs
        </button>
      </div>
    </div>
  );
};

export default CustomTextInput;