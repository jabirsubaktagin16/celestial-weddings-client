import React from "react";

export const PackageInputComponent = ({
  labelTitle,
  name,
  type = "text",
  placeholder,
  register,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelTitle}</span>
      </label>
      <input
        className="input input-sm input-bordered input-primary rounded-none bg-transparent"
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        {...register(name, { required: true })}
        {...rest}
      />
    </div>
  );
};
