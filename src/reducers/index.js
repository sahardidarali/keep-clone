import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './authReducer'
import notesReducer from './notesReducer'

const persistConfig={
    key:'root',
    storage,
    whitelist:['notesReducer']
}

const rootReducer= combineReducers({
    notesReducer:notesReducer,
    auth:authReducer
})

export default persistReducer(persistConfig,rootReducer)