import React from 'react';
import ViewImage from '../../assets/View-image.png';
import "./Ver.css"

const Ver = () => {
    return (
     <section className="h-screen px-4 max-w-xs bg-white m-auto ">
        <div className="pt-28 flex flex-col justify-center items-center">
            <img
            src={ViewImage}
            alt="ConfirmImage"            
            style={{ width: '253px', height: '236px' }}
            />
        </div>

          <div className="m-6 flex flex-col justify-center items-center">
            <h1 style={
                {fontFamily: 'Roboto', 
                fontStyle: 'normal', 
                fontWeight: '400', 
                fontSize: '30px', 
                lineHeight: 'normal', 
                color: '#262628',
                textAlign: 'center',
                margin: '10px'
            
            }
                
            }>
                Ver 
            
            </h1>
            
            <h3       
            style={
                {fontFamily: 'Roboto', 
                fontStyle: 'normal',                  
                fontSize: '17px', 
                lineHeight: 'normal', 
                weight: '400',
                color: '#262628',
                shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                textAlign: 'center',
                margin: '10px'
            }                
            }           
            > Podrá ver a los profesionales más cercano a tu hogar </h3>  
            <button className="actionRegister">Continuar</button>
          
            
          
        </div>
        </section>
      
    )
}

export default Ver