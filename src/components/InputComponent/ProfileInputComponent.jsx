import React from "react";

export const ProfileInputComponent = ({
  doubleColumn = false,
  labelTitle,
  type = "text",
  name,
  placeholder,
  value,
  disabled = false,
  register,
  ...rest
}) => {
  return (
    <div className={`col-span-6 ${doubleColumn && "sm:col-span-3"}`}>
      <label htmlFor={name} className="block text-xs font-medium text-gray-700">
        {labelTitle}
      </label>

      <input
        type={type}
        id={name}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        className="input input-primary mt-1 w-full rounded-none border-primary bg-transparent sm:text-sm p-4 pe-12"
        autoComplete="off"
        {...register(name, { required: true })}
        {...rest}
      />
    </div>
  );
};
