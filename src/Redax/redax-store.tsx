import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

// @ts-ignore
window.store = store

export default store