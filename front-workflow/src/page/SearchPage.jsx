import React from 'react';
import workflow from '../assets/workflow.png';
import lupa from '../assets/lupa.png';
import Footer from '../components/Footer/Footer';

const SearchPage = () => {
  const inputStyle = {
    backgroundImage: `url(${lupa})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10px center', 
    paddingLeft: '60px'
  };

  return (
    <div className="flex flex-col items-center h-screen mt-16">
      <img src={workflow} alt="Workflow" className="w-48 h-48 mb-4" />
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="w-64 h-12 mt-8 px-4 rounded-full bg-verdeMarino text-white ml-2"
          style={inputStyle}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default SearchPage;