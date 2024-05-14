import React, { useState } from 'react';

const TopBanner = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Language');

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <nav className="navbar text-center">
        <div className="container-fluid align-items-center bg-black text-white justify-content-space-between">
          <p className='text-sm mb-0'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className='text-white'href='#' >Shop Now</a></p> 
                
          <div className="dropdown">
            <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedLanguage}
            </button>
            <ul className="dropdown-menu">
              <li><p className="dropdown-item" onClick={() => handleLanguageSelect('English')}>English</p></li>
              <li><p className="dropdown-item" onClick={() => handleLanguageSelect('Spanish')}>Spanish</p></li>
              <li><p className="dropdown-item"onClick={() => handleLanguageSelect('French')}>French</p></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopBanner;
