import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';

const SpeechToText = ({ onResult, targetField, isActive, onToggle, sectionType, onSectionResult }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        
        // If we have a section type and onSectionResult callback, use intelligent parsing
        if (sectionType && onSectionResult) {
          onSectionResult(transcript, sectionType);
        } else {
          onResult(transcript, targetField);
        }
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
        onToggle(false);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        onToggle(false);
      };

      setRecognition(recognitionInstance);
    }
  }, [onResult, targetField, onToggle]);

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      onToggle(true);
      recognition.start();
    }
  };

  return (
    <button
      type="button"
      onClick={toggleListening}
      className={`p-2 rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 text-sm ${
        isListening 
          ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600' 
          : isActive 
            ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600'
            : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600'
      }`}
      title={isListening ? 'Stop Recording' : sectionType ? `Start Voice Input for ${sectionType}` : 'Start Voice Input'}
      aria-label={isListening ? 'Stop Recording' : sectionType ? `Start Voice Input for ${sectionType}` : 'Start Voice Input'}
    >
      {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
    </button>
  );
};

export default SpeechToText;