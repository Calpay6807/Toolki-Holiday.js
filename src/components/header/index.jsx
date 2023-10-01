import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function Header() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHeader = () => {
    setIsHidden(!isHidden);
  };
  return (
    <header className={isHidden ? "hidden" : ""}>
      <Nav className="nav" justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <i class="bi bi-house-door-fill"></i>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <i class="bi bi-file-earmark-person"></i>
          <Nav.Link eventKey="link-1">Aboute</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <i class="bi bi-person-lines-fill"></i>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <i class="bi bi-info-circle-fill"></i>
          <Nav.Link eventKey="link-3">Services</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="btn-1">
        <button onClick={toggleHeader} className="rate-button">
          <i class="bi bi-arrow-down-up"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
