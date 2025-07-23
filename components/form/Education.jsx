import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";
import { parseEducation } from "../../utils/speechParser";

const Education = () => {
    const { resumeData, setResumeData} = useContext(ResumeContext);
    const [activeField, setActiveField] = React.useState(null);
    const [speechOutput, setSpeechOutput] = React.useState('');

    const handleSpeechResult = (transcript, fieldName) => {
      setSpeechOutput(transcript);
      const [field, index] = fieldName.split('-');
      const newEducation = [...resumeData.education];
      newEducation[parseInt(index)][field] = transcript;
      setResumeData({ ...resumeData, education: newEducation });
      setActiveField(null);
    };

    const handleSectionSpeechResult = (transcript, sectionType) => {
      setSpeechOutput(transcript);
      if (sectionType === 'Education') {
        const parsedData = parseEducation(transcript);
        
        // Create new education entry or update the first one
        const newEducation = [...resumeData.education];
        
        if (newEducation.length === 0) {
          newEducation.push({ school: "", degree: "", startYear: "", endYear: "" });
        }
        
        const targetIndex = 0; // Always update the first education entry for section-level input
        
        if (parsedData.school) newEducation[targetIndex].school = parsedData.school;
        if (parsedData.degree) newEducation[targetIndex].degree = parsedData.degree;
        if (parsedData.startYear) newEducation[targetIndex].startYear = parsedData.startYear;
        if (parsedData.endYear) newEducation[targetIndex].endYear = parsedData.endYear;
        
        setResumeData({ ...resumeData, education: newEducation });
        setActiveField(null);
      }
    };

    const toggleSpeech = (fieldName, isActive) => {
      setActiveField(isActive ? fieldName : null);
    };

    const clearSpeechOutput = () => {
      setSpeechOutput('');
    };

    const handleEducation = (e, index) => {
      const newEducation = [...resumeData.education];
      newEducation[index][e.target.name] = e.target.value;
      setResumeData({ ...resumeData, education: newEducation });
    };
  
    const addEducation = () => {
      setResumeData({
        ...resumeData,
        education: [
          ...resumeData.education,
          { school: "", degree: "", startYear: "", endYear: "" },
        ],
      });
    };
  
    const removeEducation = (index) => {
      const newEducation = [...resumeData.education];
      newEducation[index] = newEducation[newEducation.length - 1];
      newEducation.pop();
      setResumeData({ ...resumeData, education: newEducation });
    };
    
    return (
      <div className="flex-col-gap-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="input-title">Education</h2>
          <SpeechToText 
            onResult={handleSpeechResult}
            targetField={activeField}
            isActive={activeField !== null}
            onToggle={(isActive) => toggleSpeech(activeField, isActive)}
            sectionType="Education"
            onSectionResult={handleSectionSpeechResult}
          />
        </div>
        
        {/* Speech Output Box */}
        {speechOutput && (
          <div className="mb-4 p-3 bg-slate-700/50 border border-slate-600/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-300">Speech Recognition Output:</h3>
              <button
                type="button"
                onClick={clearSpeechOutput}
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Clear
              </button>
            </div>
            <p className="text-sm text-gray-200 bg-slate-800/50 p-2 rounded border border-slate-600/20">
              "{speechOutput}"
            </p>
          </div>
        )}

        {resumeData.education.map((education, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="School"
              name="school"
              className={`w-full other-input ${activeField === `school-${index}` ? 'ring-2 ring-green-500' : ''}`}
              value={education.school}
              onChange={(e) => handleEducation(e, index)}
              onFocus={() => setActiveField(`school-${index}`)}
            />
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              className={`w-full other-input ${activeField === `degree-${index}` ? 'ring-2 ring-green-500' : ''}`}
              value={education.degree}
              onChange={(e) => handleEducation(e, index)}
              onFocus={() => setActiveField(`degree-${index}`)}
            />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={education.startYear}
                onChange={(e) => handleEducation(e, index)} />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={education.endYear}
                onChange={(e) => handleEducation(e, index)} />
            </div>
          </div>
        ))}
        <FormButton size={resumeData.education.length} add={addEducation} remove={removeEducation} />
      </div>
    )
  }

export default Education;