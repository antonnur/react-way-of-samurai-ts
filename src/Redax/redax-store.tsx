import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer
})

const store = createStore(rootReducer)

export default store