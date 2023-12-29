import React from 'react';

const Button = ({ Title, PdfPath, LinkPath }) => {
  const handleClick = () => {
    if (PdfPath) {
      window.open(PdfPath, '_blank');
    } else if (LinkPath) {
      window.open(LinkPath, '_blank');
    }
  };

  return (
    <>
      <a
        href="#_"
        onClick={handleClick}
        className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#6C7BB2] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#6C7BB2] rounded-md opacity-0 group-hover:opacity-100 "></span>
        <span className="relative text-[#6C7BB2] transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
          {Title}
        </span>
      </a>
    </>
  );
};

export default Button;
