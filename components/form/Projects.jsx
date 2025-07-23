import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [activeField, setActiveField] = React.useState(null);

  const handleSpeechResult = (transcript, fieldName) => {
    const [field, index] = fieldName.split('-');
    const newProjects = [...resumeData.projects];
    newProjects[parseInt(index)][field] = transcript;
    setResumeData({ ...resumeData, projects: newProjects });
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">Projects</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
        />
      </div>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="Project Name"
            name="name"
            className={`w-full other-input ${activeField === `name-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={project.name}
            onChange={(e) => handleProjects(e, index)}
            onFocus={() => setActiveField(`name-${index}`)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className={`w-full other-input ${activeField === `link-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
            onFocus={() => setActiveField(`link-${index}`)}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className={`w-full other-input h-32 ${activeField === `description-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={project.description}
            maxLength="250"
            onChange={(e) => handleProjects(e, index)}
            onFocus={() => setActiveField(`description-${index}`)}
          />
          <textarea
            type="text"
            placeholder="Key Achievements"
            name="keyAchievements"
            className={`w-full other-input h-40 ${activeField === `keyAchievements-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
            onFocus={() => setActiveField(`keyAchievements-${index}`)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={removeProjects}
      />
    </div>
  );
};

export default Projects;
