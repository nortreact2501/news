import { useState, useEffect } from "react"
import { fetchPostsList } from '../services/postsService';

export default function useFetchBlogsList() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [blogItems, setBlogItems] = useState([])

    useEffect(
        ()=>{
            const fetchList = async() => {
                setLoading(true)
                setError('')
                try {
                    const posts = await fetchPostsList();
                    setBlogItems(() => posts )
                    setLoading(false)
                    setError('')
                } catch (error) {
                    setError(error.message)
                }

            }
            fetchList();
        }, 
        []
    )

    return {loading, error, blogItems}

}
