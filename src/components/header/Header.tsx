import "./header.scss";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="flex-class">
          <h1 onClick={() => location.reload()}>Asadov Elbotir</h1>
          <ul className="flex-class">
            <li>
              <a href="./Asadov Elbotir Resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
