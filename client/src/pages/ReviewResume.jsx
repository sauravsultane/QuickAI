import { FileText, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const ReviewResume = () => {
    const [input, setInput] = useState("");
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
  
    };
  return (
   <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00da83]" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Resume</p>
        <input
          type="file"
          className="w-full text-gray-600 p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          
          required
          accept="application/pdf"
          onChange={(e) => setInput(e.target.files[0])}
        />
        <p className="text-xs text-gray-500 font-light mt-1">Support pdf format only.</p>
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00da83] to-[#009bb3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <FileText className="w-5" />
          Review Resume
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-69 max-h-[600px]">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00da83]" />
          <h1 className="text-xl font-semibold">Analysis Result</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-500">
            <FileText className="w-9 h-9" />
            <p>Upload an Resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewResume
