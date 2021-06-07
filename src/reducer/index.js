import { combineReducers } from 'redux'

import userReducers from './userReducer'
import articleReducer from './articleReducer'

const rootReducer = combineReducers({
  userState: userReducers,
  articleState: articleReducer,
})

export default rootReducer
