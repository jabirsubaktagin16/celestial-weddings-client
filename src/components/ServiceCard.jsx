/* eslint-disable react/prop-types */
export const ServiceCard = ({ shortForm, imageUrl, title, description }) => {
  return (
    <a href={`/services/${shortForm}`}>
      <div className="da relative flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="group relative m-0 flex h-80 w-full sm:mx-auto sm:max-w-lg">
          <div className="z-10 h-full w-full overflow-hidden border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
            <img
              src={imageUrl}
              className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
