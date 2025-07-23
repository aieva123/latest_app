import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";
import SpeechToText from "./SpeechToText";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [activeField, setActiveField] = React.useState(null);

  const handleSpeechResult = (transcript, fieldName) => {
    const [skillTitle, index] = fieldName.split('-');
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === skillTitle)
        .skills,
    ];
    newSkills[parseInt(index)] = transcript;
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === skillTitle ? { ...skill, skills: newSkills } : skill
      ),
    }));
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  // skills
  const handleSkill = (e, index, title) => {
    const newSkills = [
      ...resumeData.skills.find((skillType) => skillType.title === title)
        .skills,
    ];
    newSkills[index] = e.target.value;
    setResumeData((prevData) => ({
      ...prevData,
      skills: prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      ),
    }));
  };

  const addSkill = (title) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills, ""];
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const removeSkill = (title, index) => {
    setResumeData((prevData) => {
      const skillType = prevData.skills.find(
        (skillType) => skillType.title === title
      );
      const newSkills = [...skillType.skills];
      newSkills.pop();
      const updatedSkills = prevData.skills.map((skill) =>
        skill.title === title ? { ...skill, skills: newSkills } : skill
      );
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

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
      {skillType.skills.map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={title}
            name={title}
            className={`w-full other-input ${activeField === `${title}-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={skill}
            onChange={(e) => handleSkill(e, index, title)}
            onFocus={() => setActiveField(`${title}-${index}`)}
          />
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title)}
        remove={() => removeSkill(title)}
      />
    </div>
  );
};

export default Skill;
