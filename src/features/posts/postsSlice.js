import { createSlice } from '@reduxjs/toolkit'
import { fetchPostsList } from '../../services/postsService'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return await fetchPostsList()
  })

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (action) => {
            //add post adding functionality
        }
    },
    extraReducers: builder => {
      builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            //state.posts.push(...action.payload)
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message ?? 'Unknown Error'
        })
    }
  })

  export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

  export default postsSlice.reducer


  export const selectAllPosts = (state) => state.posts.posts

  export const selectPostsStatus = (state) => state.posts.status
  export const selectPostsError = (state) => state.posts.erro