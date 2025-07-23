import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import SpeechToText from "./SpeechToText";

const SocialMedia = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [activeField, setActiveField] = React.useState(null);

  const handleSpeechResult = (transcript, fieldName) => {
    const [field, index] = fieldName.split('-');
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[parseInt(index)][field] = transcript.replace("https://", "");
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
    setActiveField(null);
  };

  const toggleSpeech = (fieldName, isActive) => {
    setActiveField(isActive ? fieldName : null);
  };

  // social media
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace(
      "https://",
      ""
    );
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col-gap-2">
      <div className="flex items-center justify-between mb-2">
        <h2 className="input-title">Social Media</h2>
        <SpeechToText 
          onResult={handleSpeechResult}
          targetField={activeField}
          isActive={activeField !== null}
          onToggle={(isActive) => toggleSpeech(activeField, isActive)}
        />
      </div>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="flex-wrap-gap-2">
          <input
            type="text"
            placeholder="Social Media"
            name="socialMedia"
            className={`other-input ${activeField === `socialMedia-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={socialMedia.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
            onFocus={() => setActiveField(`socialMedia-${index}`)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className={`other-input ${activeField === `link-${index}` ? 'ring-2 ring-green-500' : ''}`}
            value={socialMedia.link}
            onChange={(e) => handleSocialMedia(e, index)}
            onFocus={() => setActiveField(`link-${index}`)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={removeSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
