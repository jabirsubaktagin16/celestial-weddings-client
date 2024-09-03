import React from "react";
import { FadeLoader } from "react-spinners";

export const ImageUpload = ({
  isUploading,
  image,
  handleFileChange,
  folderName,
  setImage,
  setIsUploading,
}) => {
  return (
    <div>
      <div className="relative w-full h-[300px] border border-primary">
        {isUploading && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 opacity-60 flex justify-center items-center">
            <FadeLoader color="#fff" />
          </div>
        )}
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="Cover Photo"
          id="coverImage"
        />

        <div className="absolute top-4 right-4">
          <label className="cursor-pointer flex items-center space-x-2 bg-accent text-white py-1 px-3 rounded-lg hover:bg-opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L6 11.172V14h2.828l8.586-8.586a2 2 0 000-2.828z" />
              <path
                fill-rule="evenodd"
                d="M4 12v4h4l8.586-8.586a1 1 0 00-1.414-1.414L4 14.586V12z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Edit Image</span>

            <input
              type="file"
              id="coverInput"
              className="hidden"
              onChange={(e) =>
                handleFileChange(folderName, e, setImage, setIsUploading)
              }
            />
          </label>
        </div>
      </div>
    </div>
  );
};
