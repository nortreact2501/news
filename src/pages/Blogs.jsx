import { Button, Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { increment, selectCount } from "../features/newsCounter/newsCounterSlice"

export default function Blogs({blogItems}) {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

    const clickLink = () => {
        console.log('klikk lingil')
        dispatch(increment())
    }
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
                            <NavLink to={`/blogs/${blog.id}`} onClick={clickLink} >Loe edasi ...</NavLink>
                        </Card.Body>
                    </Card>
                )
            }))}
        </div>
    )
}