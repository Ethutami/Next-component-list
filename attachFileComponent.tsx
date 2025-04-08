import React, { useState } from 'react';

const FileUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name); // Menyimpan nama file yang dipilih
    }
  };

  return (
    <div>
      <label 
          htmlFor="file-input" 
          className="inline-flex justify-center items-center p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          {/* Ikon SVG */}
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
            <path stroke="currentColor" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
          </svg>
          <span className="sr-only">Attach file</span>
      </label>
      
      <input 
        id="file-input"
        type="file"
        onChange={handleFileChange}
        className="hidden" // Menyembunyikan input file sebenarnya
      />
    </div>
  );
};

export default FileUpload;
