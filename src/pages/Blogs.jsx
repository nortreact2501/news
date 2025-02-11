import { Button, Card } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment, selectCount } from "../features/newsCounter/newsCounterSlice";

export default function Blogs({blogItems}) {
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

    const handleClickOnPost = (postId) => {
        dispatch(increment())
        navigate(`/blogs/${postId}`)
    }
    return (
        <div>
            <h2>Latest news</h2>
            {blogItems.map((blog => {
                return (
                    <Card key={blog.id}>
                        <Card.Img 
                            variant="top"
                            src={blog.headerPictureUrl}
                        />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>{blog.excerpt}</Card.Text>
                            <NavLink to={`/blogs/${blog.id}`} >Loe edasi ...</NavLink>
                            <Button 
                                type="button"
                                onClick={()=>handleClickOnPost(blog.id)}
                            >
                                Loe edasi ...
                            </Button>
                        </Card.Body>
                    </Card>
                )
            }))}
        </div>
    )
}