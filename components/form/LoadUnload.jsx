import { FaCloudUploadAlt, FaCloudDownloadAlt } from "react-icons/fa";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  // load backup resume data
  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = JSON.parse(event.target.result);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  // download resume data
  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4 justify-center bg-gradient-to-r from-slate-700/30 to-slate-800/30 p-3 rounded-xl border border-slate-600/20 shadow-lg">
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1rem] text-white font-semibold drop-shadow-lg">Load Data</h2>
        <label className="p-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:from-blue-500 hover:to-purple-500">
          <FaCloudUploadAlt className="text-[1rem] text-white" />
          <input
            aria-label="Load Data"
            type="file"
            className="hidden"
            onChange={handleLoad}
            accept=".json"
          />
        </label>
      </div>
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1rem] text-white font-semibold drop-shadow-lg">Save Data</h2>
        <button
          aria-label="Save Data"
          className="p-2 text-white bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:from-green-500 hover:to-blue-500"
          onClick={(event) =>
            handleDownload(
              resumeData,
              resumeData.name + " by ATSResume.json",
              event
            )
          }
        >
          <FaCloudDownloadAlt className="text-[1rem] text-white" />
        </button>
      </div>
    </div>
  );
};

export default LoadUnload;
