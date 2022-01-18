import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./store";

export type AppStateType = ReturnType<typeof rootReducer>

// export type AppStoreType = Store<ReturnType<typeof rootReducer>, ActionsTypes>

const rootReducer = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer
})

// const store: AppStoreType = createStore(rootReducer)
const store = createStore(rootReducer)

export default store