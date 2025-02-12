import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import { fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus } from "../features/posts/postsSlice"

export default function useFetchBlogsListRedux() {
    const dispatch = useAppDispatch()
    const blogItems = useAppSelector(selectAllPosts)
    const status = useAppSelector(selectPostsStatus)
    const error = useAppSelector(selectPostsError)

    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchPosts())
      }
    }, [status, dispatch])

    return {status, error, blogItems}

}