import React from "react";

export const VendorInputComponent = ({
  labelTitle,
  name,
  type = "text",
  placeholder,
  value,
  register,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {labelTitle}
      </label>

      <div className="relative">
        <input
          id={name}
          type={type}
          className="w-full rounded-none bg-transparent input input-primary p-4 pe-12 text-sm shadow-sm"
          placeholder={placeholder}
          value={value}
          {...register(name, { required: true })}
          {...rest}
        />
      </div>
    </div>
  );
};
