import React from "react";

import { Parallax } from "react-parallax";
import { Loading } from "../components/Shared/Loading";
import { PageTitle } from "../components/Shared/PageTitle";
import useGallery from "../hooks/useGallery";

export const Gallery = () => {
  const [gallery, loading, galleryRefetch] = useGallery();
  if (loading) return <Loading />;

  // Divide images into chunks of 3 for each column
  const chunkedImages = [];
  for (let i = 0; i < gallery.length; i += 3) {
    chunkedImages.push(gallery.slice(i, i + 3));
  }

  return (
    <>
      <PageTitle title={"Gallery"} />
      <Parallax
        bgImage="./gallery-banner.jpg"
        bgImageAlt="Gallery Banner"
        strength={300}
      >
        <div className="hero h-[250px] bg-cover bg-no-repeat mb-8 md:h-[400px]">
          <div className="hero-content text-center">
            <div className="max-w-100">
              <h1 className="mb-5 text-6xl text-white">Gallery</h1>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="p-8 md:p-12 lg:px-16 lg:py-12">
        <div className="mx-auto max-w-lg text-center">
          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Discover the beauty and elegance of our events through the Gallery
            page, where stunning moments and breathtaking designs are captured
            for your inspiration. Explore the creativity and magic of each
            celebration.
          </p>
        </div>

        <div className="mx-auto mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Map through each column */}
            {chunkedImages.map((imageChunk, columnIndex) => (
              <div className="grid gap-4" key={columnIndex}>
                {/* Map through each image in the chunk */}
                {imageChunk.map((image, index) => (
                  <div key={index}>
                    <img
                      className="h-auto max-w-full rounded-none"
                      src={image?.imageURL} // Assuming image URL is stored in the database
                      alt={image?.description || "Gallery Image"}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
