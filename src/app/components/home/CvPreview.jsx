'use client'
import { useState } from 'react';




export default function CvPreview(){

    const CVPreviewModal = ({ show, handleClose, cvUrl }) => {
        if (!show) return null;
      
        return (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold">CV Preview</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src={cvUrl}
                  style={{ width: '100%', height: '70dvh' }}
                  frameBorder="0"
                  title="CV Preview"
                ></iframe>
              </div>
              <div className="p-4 border-t border-gray-300 flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        );
      };

      const [showModal, setShowModal] = useState(false);
      const cvUrl = '/Rayane_Hiouani_CV_en.pdf'; 

      const handleShowModal = () => {
        document.getElementById("header").style.display = 'none';
        document.body.style.overflowY = "hidden";
        document.body.style.height = '100vh'
        setShowModal(true)
    };
  const handleCloseModal = () => {
    document.getElementById("header").style.display = "flex";
    document.body.style.overflowY = 'unset';
    document.body.style.height = 'unset'
    setShowModal(false)
};


    return(
        <div id='pvCv'>
        <div 
        // onClick={()=>window.scrollTo(0,1000,{scrollBehavior: "smooth"})} 
        onClick={handleShowModal}
        className="cursor-pointer font-bold whitespace-nowrap px-10 py-3 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bgColor hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
           Preview CV
          </div>
          <CVPreviewModal show={showModal} handleClose={handleCloseModal} cvUrl={cvUrl} />

          </div>
    )
}