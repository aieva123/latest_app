import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";
import SpeechToText from "./SpeechToText";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "languages";
  const title = "Languages";
  const placeholder = "Language";
  const [activeField, setActiveField] = React.useState(null);

  const handleSpeechResult = (transcript, fieldName) => {
    const [field, index] = fieldName.split('-');
    const newSkills = [...resumeData[skillType]];
    newSkills[parseInt(index)] = transcript;
    setResumeData({ ...resumeData, [skillType]: newSkills });
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  const handleSkills = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };  

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">{title}</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
        />
      </div>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={placeholder}
            name="skill"
            className={`w-full other-input ${activeField === `languages-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={skill}
            onChange={(e) => handleSkills(e, index, skillType)}
            onFocus={() => setActiveField(`languages-${index}`)}
          />
        </div>
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Language;