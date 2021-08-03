import React from "react";

const Button = ({
  label,
  className,
  disabled,
  handleSubmit,
  isLoading,
  loadingLabel,
}) => {
  return (
    <>
      {isLoading === false ? (
        <button
          disabled={disabled}
          className={className}
          onClick={handleSubmit}
        >
          {label}
        </button>
      ) : (
        <button className={className} type="button" disabled>
          <span
            className="spinner-border spinner-border-sm mr-2"
            role="status"
            aria-hidden="true"
          ></span>
          {loadingLabel}
        </button>
      )}
    </>
  );
};

export default Button;
