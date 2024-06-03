import topBannerImg from "../assets/Wedding-cuate.png";

export const TopBanner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={topBannerImg} className="max-w-xl" />
        <div>
          <h1 className="text-text text-6xl font-bold">
            Make your wedding memorable!
          </h1>
          <p className="py-6 text-text">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary border-none text-white rounded-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
