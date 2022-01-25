import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Coderunner</h1>
      <div className="header-details">
        <p>Type javascript or markdown in an editor!</p>
        <p>
          To display values in the code editor preview window, use the built-in
          show() function.
        </p>
        <p>You can also import any NPM library or CSS file.</p>
      </div>
    </div>
  );
};

export default Header;
