function Header({
  text = "Feedback Ui",
  bgColor = "rgba(0,0,0,0.4)",
  textColor = "#ff6a95",
}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
