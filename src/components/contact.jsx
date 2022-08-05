import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Resume from '../assets/icons/cv3.png';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CheckIcon from '@mui/icons-material/Check';

function Contact() {
  const [hidden, setHidden] = React.useState(true);

  function updateClipboard() {
    console.log('loggin');
    navigator.clipboard
      .writeText('andresat48@hotmail.com')
      .then(setHidden(false))
      .then(
        setTimeout(() => {
          setHidden(true);
        }, 3000),
      );
  }
  return (
    <div className="grid place-content-center h-full text-white sm:place-content-stretch">
      {/* --------------------------------------------------------------- */}
      <div className="flex justify-center items-center mb-20 sm:mb-1  ">
        <fieldset style={{ lineHeight: 0.4 }} className="border-4 rounded-md p-6">
          <legend style={{ padding: '5px' }}>Email</legend>
          <span style={{ fontSize: '20px' }}>andresat48@hotmail.com</span>
        </fieldset>
        <div className="text-lg relative ">
          <button onClick={updateClipboard} className="transform transition duration-300 hover:scale-105">
            <ContentCopyIcon className="ml-3 " fontSize="large" />
          </button>
          <div
            className={`flex justify-center items-center absolute left-12 top-0 transform transition duration-900 ${hidden ? 'opacity-0' : 'opacity-100'
              } `}
          >
            <CheckIcon className="" />
            <p className="absolute -left-40 whitespace-nowrap">Copied to clipboard</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="flex gap-28 sm:gap-3 sm:flex-col sm:items-center sm:align ">
        <div className="flex text-8xl gap-8 ">
          <a
            data-tooltip="Go to my Linkedin"
            href="https://www.linkedin.com/in/andres-lossada22/"
            target="_blank "
            className="transform transition duration-300 hover:scale-105"
          >
            <LinkedInIcon fontSize="" />
          </a>
          <a
            data-tooltip="Go to my Github"
            href="https://github.com/dresan22"
            target="_blank"
            className="transform transition duration-300 hover:scale-105"
          >
            <GitHubIcon fontSize="" />
          </a>
        </div>
        {/* --------------------------------------------------------------- */}
        <div className="flex items-start ">
          <div className="relative">
            <img src={Resume} className="h-28 relative object-cover" alt="Resume" />
          </div>
          <div className="text-center text-6xl flex flex-col" style={{ lineHeight: '0' }}>
            <a data-tooltip="Open my Resume" href="/src/assets/Resume.pdf" target="_blank ">
              <FileDownloadOutlinedIcon fontSize="" className="transform transition duration-300 hover:scale-105" />
            </a>
            <span className="text-xs">(62KB)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
