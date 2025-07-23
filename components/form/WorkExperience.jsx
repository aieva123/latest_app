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

  const handleSpeechResult = (transcript, fieldName) => {
    const [field, index] = fieldName.split('-');
    const newWorkExperience = [...resumeData.workExperience];
    newWorkExperience[parseInt(index)][field] = transcript;
    setResumeData({ ...resumeData, workExperience: newWorkExperience });
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
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
        />
      </div>
      {resumeData.workExperience.map((workExperience, index) => (
        <div key={index} className="f-col">
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
