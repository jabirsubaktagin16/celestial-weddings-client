import React from "react";

export const BookingInputComponent = ({
  type = "text",
  labelTitle,
  id,
  name,
  register,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 text-start"
      >
        {labelTitle}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        className="w-full mt-1 input input-sm input-bordered input-primary rounded-none bg-transparent"
        {...rest}
        {...register(`${name}`, { required: true })}
      />
    </>
  );
};
