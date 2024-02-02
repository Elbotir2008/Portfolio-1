import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <h1>Asadov Elbotir</h1>
          <ul className="flex-class">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
