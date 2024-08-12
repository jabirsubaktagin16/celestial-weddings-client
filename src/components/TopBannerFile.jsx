import React from "react";

export const TopBannerFile = ({ fileLocation, heading, passage }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(./${fileLocation})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-secondary font-bold">{heading}</h1>
          <p className="mb-5 text-white/80">{passage}</p>
        </div>
      </div>
    </div>
  );
};
