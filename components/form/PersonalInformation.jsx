import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";
import { parsePersonalInformation } from "../../utils/speechParser";

const PersonalInformation = ({}) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);

  const [activeField, setActiveField] = React.useState(null);
  const [speechOutput, setSpeechOutput] = React.useState('');

  const handleSpeechResult = (transcript, fieldName) => {
    setSpeechOutput(transcript);
    setResumeData({ ...resumeData, [fieldName]: transcript });
    setActiveField(null);
  };

  const handleSectionSpeechResult = (transcript, sectionType) => {
    setSpeechOutput(transcript);
    if (sectionType === 'Personal Information') {
      const parsedData = parsePersonalInformation(transcript);
      
      // Update resume data with parsed information
      const updatedData = { ...resumeData };
      
      if (parsedData.name) updatedData.name = parsedData.name;
      if (parsedData.position) updatedData.position = parsedData.position;
      if (parsedData.contactInformation) updatedData.contactInformation = parsedData.contactInformation;
      if (parsedData.email) updatedData.email = parsedData.email;
      if (parsedData.address) updatedData.address = parsedData.address;
      
      setResumeData(updatedData);
      setActiveField(null);
    }
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  const clearSpeechOutput = () => {
    setSpeechOutput('');
  };

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">Personal Information</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
          sectionType="Personal Information"
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

      <div className="grid-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className={`pi ${activeField === 'name' ? 'ring-2 ring-green-500' : ''}`}
            value={resumeData.name}
            onChange={handleChange}
            onFocus={() => setActiveField('name')}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Job Title"
            name="position"
            className={`pi ${activeField === 'position' ? 'ring-2 ring-green-500' : ''}`}
            value={resumeData.position}
            onChange={handleChange}
            onFocus={() => setActiveField('position')}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Contact Information"
            name="contactInformation"
            className={`pi ${activeField === 'contactInformation' ? 'ring-2 ring-green-500' : ''}`}
            value={resumeData.contactInformation}
            onChange={handleChange}
            onFocus={() => setActiveField('contactInformation')}
            minLength="10"
            maxLength="15"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={`pi ${activeField === 'email' ? 'ring-2 ring-green-500' : ''}`}
            value={resumeData.email}
            onChange={handleChange}
            onFocus={() => setActiveField('email')}
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Address"
            name="address"
            className={`pi ${activeField === 'address' ? 'ring-2 ring-green-500' : ''}`}
            value={resumeData.address}
            onChange={handleChange}
            onFocus={() => setActiveField('address')}
          />
        </div>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;