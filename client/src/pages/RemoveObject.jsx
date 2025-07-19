import { Scissors, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

const RemoveObject = () => {
  const [input, setInput] = useState("");
  const [object, setObject] = useState("");

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
          <Sparkles className="w-6 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Object Removel</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          type="file"
          className="w-full text-gray-600 p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          
          required
          accept="image/*"
          onChange={(e) => setInput(e.target.files[0])}
        />
        <p className="mt-6 text-sm font-medium">Describe object name to remove</p>
        <textarea
          rows={4}
          
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="name the object to remove from image"
          required
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417df6] to-[#8e37eb] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Scissors className="w-5" />
          Remove Object
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-69">
        <div className="flex items-center gap-3">
          <Scissors className="w-5 h-5 text-[#4a7aff]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-500">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and click "Remove Object" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveObject
