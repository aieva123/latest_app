import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="ATSResume | Get hired with an ATS-optimized resume"
          description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers."
          keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
        />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:min-h-screen">
          {!formClose && (
            <form className="p-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll border border-slate-700/50 shadow-2xl rounded-2xl m-4">
              <div className="space-y-4">
              <LoadUnload/>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <PersonalInformation />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <SocialMedia />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <Summary />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <Education />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <WorkExperience />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <Projects />
              </div>
              {
                resumeData.skills.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
                  <Skill
                    title={skill.title}
                  />
                  </div>
                ))
              }
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <Language />
              </div>
              <div className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
              <Certification />
              </div>
              </div>
            </form>
          )}
          <Preview />
        </div>
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
