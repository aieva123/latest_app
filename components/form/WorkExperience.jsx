import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";

const WorkExperience = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);
  const [activeField, setActiveField] = React.useState(null);
  const [speechOutput, setSpeechOutput] = React.useState({});

  const handleSpeechResult = (transcript, fieldName) => {
    const [field, index] = fieldName.split('-');
    setSpeechOutput(prev => ({ ...prev, [index]: transcript }));
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[parseInt(index)][field] = transcript;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
    setActiveField(null);
  };

  const handleSectionSpeechResult = (transcript, sectionType) => {
    setSpeechOutput(prev => ({ ...prev, section: transcript }));
    if (sectionType === 'Work Experience') {
      // For work experience, we could add parsing logic here if needed
      // For now, just store the transcript
      setActiveField(null);
    }
  };
  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  const clearSpeechOutput = (index = null) => {
    if (index !== null) {
      setSpeechOutput(prev => {
        const newOutput = { ...prev };
        delete newOutput[index];
        return newOutput;
      });
    } else {
      setSpeechOutput(prev => {
        const newOutput = { ...prev };
        delete newOutput.section;
        return newOutput;
      });
    }
  };
  const handleWorkExperience = (e, index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const addWorkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        {
          company: "",
          position: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeWorkExperience = (index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
    // Clear speech output for removed entry
    setSpeechOutput(prev => {
      const newOutput = { ...prev };
      delete newOutput[index];
      return newOutput;
    });
  };

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">Work Experience</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
          sectionType="Work Experience"
          onSectionResult={handleSectionSpeechResult}
        />
      </div>
      
      {/* Speech Output Box for Section */}
      {speechOutput.section && (
        <div className="mb-4 p-3 bg-slate-700/50 border border-slate-600/30 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-300">Speech Recognition Output:</h3>
            <button
              type="button"
              onClick={() => clearSpeechOutput()}
              className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
            >
              Clear
            </button>
          </div>
          <p className="text-sm text-gray-200 bg-slate-800/50 p-2 rounded border border-slate-600/20">
            "{speechOutput.section}"
          </p>
        </div>
      )}
      
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-300">Work Experience Entry {index + 1}</h3>
            <SpeechToText 
              onResult={handleSpeechResult}
              targetField={activeField}
              isActive={activeField !== null}
              onToggle={(isActive) => toggleSpeech(activeField, isActive)}
            />
          </div>
          
          {/* Speech Output Box for Individual Entry */}
          {speechOutput[index] && (
            <div className="mb-4 p-3 bg-slate-700/50 border border-slate-600/30 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-300">Speech Recognition Output:</h4>
                <button
                  type="button"
                  onClick={() => clearSpeechOutput(index)}
                  className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Clear
                </button>
              </div>
              <p className="text-sm text-gray-200 bg-slate-800/50 p-2 rounded border border-slate-600/20">
                "{speechOutput[index]}"
              </p>
            </div>
          )}
          
          <input
            type="text"
            placeholder="Company"
            name="company"
            className={`w-full other-input ${activeField === `company-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={workExperience.company}
            onChange={(e) => handleWorkExperience(e, index)}
            onFocus={() => setActiveField(`company-${index}`)}
          />
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            className={`w-full other-input ${activeField === `position-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={workExperience.position}
            onChange={(e) => handleWorkExperience(e, index)}
            onFocus={() => setActiveField(`position-${index}`)}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className={`w-full other-input h-32 ${activeField === `description-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={workExperience.description}
            maxLength="250"
            onChange={(e) => handleWorkExperience(e, index)}
            onFocus={() => setActiveField(`description-${index}`)}
          />
          <textarea
            type="text"
            placeholder="Key Achievements"
            name="keyAchievements"
            className={`w-full other-input h-40 ${activeField === `keyAchievements-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={workExperience.keyAchievements}
            onChange={(e) => handleWorkExperience(e, index)}
            onFocus={() => setActiveField(`keyAchievements-${index}`)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={workExperience.startYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={workExperience.endYear}
              onChange={(e) => handleWorkExperience(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.workExperience.length}
        add={addWorkExperience}
        remove={removeWorkExperience}
      />
    </div>
  );
};

export default WorkExperience;
