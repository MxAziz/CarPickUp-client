import React from 'react';

const TopBackground = ({image}) => {
    return (
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: image,
        }}
      ></div>
    );
};

export default TopBackground;