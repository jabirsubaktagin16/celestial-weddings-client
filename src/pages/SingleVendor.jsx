import React from "react";
import { useParams } from "react-router-dom";

import { useContext, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../components/Shared/Loading";
import { NotFound } from "../components/Shared/NotFound";
import { PackageCardSkeleton } from "../components/Shared/PackageCardSkeleton";
import { PageTitle } from "../components/Shared/PageTitle";
import { BookingModal } from "../components/Vendor/BookingModal/BookingModal";
import { ContactUs } from "../components/Vendor/ContactUs";
import { PackageCard } from "../components/Vendor/PackageCard";
import { ReviewCard } from "../components/Vendor/ReviewCard";
import { VendorRatings } from "../components/Vendor/VendorRatings";
import useVendor from "../hooks/useVendor";
import { AuthContext } from "../providers/AuthProvider";

export const SingleVendor = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [vendor, loading, refetch] = useVendor.vendorDetails(id);
  const [ratings, ratingsLoading, ratingsRefetch] = useVendor.ratings(id);
  const [packageList, packageLoading, packageRefetch] = useVendor.packages(id);
  const [reviewList, reviewLoading, reviewRefetch] = useVendor.reviews(id);
  const [_package, setPackage] = useState(null);

  if (loading) return <Loading />;

  if (!loading && !vendor) return <NotFound />;

  return (
    <>
      <PageTitle title={vendor?.name ? vendor.name : ""} />
      <div
        className="hero h-[250px] md:h-[350px]"
        style={{
          backgroundImage: `url(${vendor?.cover})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">{vendor?.name}</h1>
            <p className="mb-5">{vendor?.description}</p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Packages
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            Tailored Packages for Your Perfect Day
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
            Explore our carefully curated packages designed to make your wedding
            unforgettable
          </p>
          {packageLoading && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <PackageCardSkeleton />
              <PackageCardSkeleton />
              <PackageCardSkeleton />
            </div>
          )}
          {!packageLoading && packageList && packageList.length === 0 && (
            <p className="text-center text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
              No Package Found
            </p>
          )}
          {!packageLoading && packageList && packageList.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {packageList.map((singlePackage) => (
                <PackageCard
                  key={singlePackage?._id}
                  availablePackage={singlePackage}
                  setPackage={setPackage}
                  user={user}
                />
              ))}
              <BookingModal _package={_package} setPackage={setPackage} />
            </div>
          )}
        </div>
      </div>

      <div className="py-5">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Testimonials
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            What Our Happy Couples Are Saying
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            Experience the magic of {vendor?.name} the words of our delighted
            clients
          </p>
        </div>
        <VendorRatings
          vendor={vendor}
          ratings={ratings}
          refetch={ratingsRefetch}
          user={user}
        />
        {reviewList && reviewList.length > 0 && (
          <div className="container p-6 mx-auto mb-10 xl:px-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {reviewList.map((r) => (
                <SwiperSlide key={r?._id}>
                  <ReviewCard review={r} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      <div className="py-5">
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-primary uppercase">
            Contact
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-text lg:leading-tight lg:text-4xl ">
            Get in Touch
          </h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
            Reach out to us today to discuss your vision and start your journey
            with {vendor?.name}
          </p>
        </div>
        <ContactUs vendor={vendor} />
      </div>
    </>
  );
};
