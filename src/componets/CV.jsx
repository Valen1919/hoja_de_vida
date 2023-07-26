import React from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';

const CV = () => {
  return (
    <div className='container'>
        <div className='hoja_de_vida'>
         <h1>Hoja de Vida</h1>
        
        </div>
        <div className='contenido'>
            <PersonalInfo />
            <Experience />
            <Education />
        </div>
    </div>
    
  );
};

export default CV;
