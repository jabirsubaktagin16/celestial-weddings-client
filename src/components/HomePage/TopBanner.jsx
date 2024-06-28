import topBannerImg from "../../assets/Wedding-cuate.png";

export const TopBanner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={topBannerImg} className="max-w-xl" />
        <div>
          <h1 className="text-text text-6xl font-bold">
            Make your wedding memorable!
          </h1>
          <p className="py-6 text-lg text-text text-gray-500 lg:text-xl xl:text-xl">
            Make your dream wedding a reality with our comprehensive services.
            From stunning floral arrangements and catering to professional
            photography and beautiful venues, we handle every detail. Let our
            expert planners and talented stylists create an unforgettable
            celebration for your special day.
          </p>
          <button className="btn btn-primary border-none text-white rounded-none w-36">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
