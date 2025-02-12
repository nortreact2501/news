import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/newsCounter/newsCounterSlice'
import postsReducer from '../features/posts/postsSlice'

// An example slice reducer function that shows how a Redux reducer works inside.
// We'll replace this soon with real app logic.
// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       // Handle actions here
//       default: {
//         return state
//       }
//     }
//   }

export const store = configureStore({
    // Pass in the root reducer setup as the `reducer` argument
    reducer: {
      // Declare that `state.newsCounter` will be updated by the `counterReducer` function
      newsCounter: counterReducer,
      posts: postsReducer
}
})