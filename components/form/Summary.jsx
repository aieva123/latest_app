import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";

const Summary = () => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);
  const [activeField, setActiveField] = React.useState(null);

  const handleSpeechResult = (transcript, fieldName) => {
    setResumeData({ ...resumeData, [fieldName]: transcript });
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">Summary</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
        />
      </div>
      <div className="grid-4">
        <textarea
          placeholder="Summary"
          name="summary"
          className={`w-full other-input h-40 ${activeField === 'summary' ? 'ring-2 ring-green-500' : ''}`}
          value={resumeData.summary}
          onChange={handleChange}
          onFocus={() => setActiveField('summary')}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
