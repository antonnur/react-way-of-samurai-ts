import {combineReducers, createStore,Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./store";

export type AppStateType = ReturnType<typeof reducers>

export type AppStoreType = Store<ReturnType<typeof reducers>,ActionsTypes >

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer
})

const store:AppStoreType = createStore(reducers)

export default store