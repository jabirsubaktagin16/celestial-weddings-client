import price from "../../assets/feature/money-bag.png";
import search from "../../assets/feature/search.png";
import tick from "../../assets/feature/tick.png";
import vendor from "../../assets/feature/vendor.png";

export const SecondSection = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto mt-6 md:px-40 px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-x-16 gap-y-12">
        <div className="text-center">
          <img
            src={search}
            className="w-32 p-5 mask mask-circle bg-secondary mx-auto"
          />
          <h6 className="text-primary font-bold mt-4">Search</h6>
          <p className="text-text text-xs">Vendors for your event</p>
        </div>
        <div className="text-center">
          <img
            src={vendor}
            className="w-32 p-5 mask mask-circle bg-secondary mx-auto"
          />
          <h6 className="text-primary font-bold mt-4">Best Vendors</h6>
          <p className="text-text text-xs">will help to get your event</p>
        </div>
        <div className="text-center">
          <img
            src={price}
            className="w-32 p-5 mask mask-circle bg-secondary mx-auto"
          />

          <h6 className="text-primary font-bold mt-4">Get Best Price</h6>
          <p className="text-text text-xs">
            from vendor can be selected for your event
          </p>
        </div>
        <div className="text-center">
          <img
            src={tick}
            className="w-32 p-5 mask mask-circle bg-secondary mx-auto"
          />
          <h6 className="text-primary font-bold mt-4">Select & Done</h6>
          <p className="text-text text-xs">
            your progress and complete your Big Day within your Budget
          </p>
        </div>
      </div>
    </div>
  );
};
