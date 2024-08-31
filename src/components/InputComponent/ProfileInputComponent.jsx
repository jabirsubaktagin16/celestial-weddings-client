import React from "react";

export const ProfileInputComponent = ({
  doubleColumn = false,
  id,
  labelTitle,
  type = "text",
  value,
  placeholder,
  register,
  ...rest
}) => {
  return (
    <div className={`col-span-6 ${doubleColumn && "sm:col-span-3"}`}>
      <label htmlFor={id} className="block text-xs font-medium text-gray-700">
        {labelTitle}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        className="input input-primary mt-1 w-full rounded-none border-primary bg-transparent sm:text-sm p-4 pe-12"
        {...register(`${id}`, { required: true })}
        {...rest}
      />
    </div>
  );
};
