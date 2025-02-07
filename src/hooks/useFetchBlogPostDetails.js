import { useState, useEffect } from "react"
import { fetchBlogPostDetails } from '../services/postsService';

export default function  useFetchBlogPostDetails(postId) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [blogDetails, setBlogDetails] = useState([])

    useEffect(
        ()=>{
            const fetchDetails = async() => {
                setLoading(true)
                setError('')
                try {
                    const details = await fetchBlogPostDetails(postId);
                    setBlogDetails(() => details )
                    setLoading(false)
                    setError('')
                } catch (error) {
                    setError(error.message)
                }

            }
            fetchDetails();
        }, 
        [postId]
    )

    return {loading, error, blogDetails}

}
