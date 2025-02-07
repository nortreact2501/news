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
    
          <Outlet />
          <footer>
            Common footer for all pages
          </footer>
        </>
      )
}