import { Container } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
    
          <Container className="p-5" >
          <Outlet />
          </Container>
          <footer>
            Common footer for all pages
          </footer>
        </>
      )
}