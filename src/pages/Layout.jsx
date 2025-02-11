import { Container } from "react-bootstrap";
import { Outlet, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCount } from "../features/newsCounter/newsCounterSlice";

export default function Layout() {
    const blogReadCount = useAppSelector(selectCount)
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
            <div>
              Total count of read blog posts: {blogReadCount}
            </div>
          </footer>
        </>
      )
}