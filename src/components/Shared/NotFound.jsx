import notFound from "../../assets/error.png";

export const NotFound = () => {
  return (
    <div className="my-10 ">
      <div className="flex justify-center items-center">
        <div className="lg:w-6/12">
          <img src={notFound} alt="Not Found Error" />
        </div>
      </div>
    </div>
  );
};
