import { useEffect } from "react"
import { fetchPostsList } from "../services/postsService"
import Counter from "../components/Counter"

export default function Home() {
    return (
        <div>
            Home
            <Counter />
        </div>
    )
}