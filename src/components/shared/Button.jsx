function Button({
  children = "Send",
  version = "primary",
  type = "button",
  isDisabled = true,
}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
