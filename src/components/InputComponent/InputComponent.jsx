/* eslint-disable react/prop-types */
export const InputComponent = ({
  disableStage = false,
  label,
  name,
  type,
  id,
  placeholder,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        disabled={disableStage}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="input input-bordered rounded-none"
        {...rest}
      />
    </div>
  );
};
