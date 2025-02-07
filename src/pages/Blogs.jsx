import { Button, Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function Blogs({blogItems}) {
    return (
        <div>
            <h2>Latest news</h2>
            {blogItems.map((blog => {
                return (
                    <Card>
                        <Card.Img 
                            variant="top"
                            src={blog.headerPictureUrl}
                        />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>{blog.excerpt}</Card.Text>
                            <NavLink to={`/blogs/${blog.id}`} >Loe edasi ...</NavLink>
                        </Card.Body>
                    </Card>
                )
            }))}
        </div>
    )
}