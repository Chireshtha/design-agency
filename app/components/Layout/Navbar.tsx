
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light px-4">
      
      <a className="navbar-brand fw-bold" href="#">
        Brighture
      </a>

      <ul className="navbar-nav ms-auto d-flex flex-row gap-4 fw-semibold">

        <li className="nav-item">
          <a className="nav-link " href="#services">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;