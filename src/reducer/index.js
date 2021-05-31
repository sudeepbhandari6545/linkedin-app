import { combineReducers } from 'redux'

import userReducers from './userReducer'

const rootReducer = combineReducers({
  userState: userReducers,
})

export default rootReducer
