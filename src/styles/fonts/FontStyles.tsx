import React from 'react';

const FontStyles = ({ children }: any) => {
    return (
      <React.Fragment>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
          `}
        </style>
        
        {children}
      </React.Fragment>
    );
}

export default FontStyles;