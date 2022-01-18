import {ChangeEvent} from 'react';
import {DialogsPageType} from "../../Redax/store";
import {SendMessageAC, UpdateNewMessageBodyAC} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../Redax/redax-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

// type PropsType = {
//   state?: DialogsPageType
//   dispatch?: (action: ActionsTypes) => void
//   store: AppStoreType
// }

// const DialogsContainer = (props: PropsType) => {
//
//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//
//           const state: DialogsPageType = store.getState().dialogsReducer
//
//           const onSendMessageClick = () => {
//             store.dispatch(SendMessageAC())
//           }
//           const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
//             store.dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
//           }
//
//           return <Dialogs updateNewMessageBody={onNewMessageChange}
//                           sendMessage={onSendMessageClick}
//                           dialogsPage={state}/>
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

type MapStateToProps = {
  dialogsPage: DialogsPageType
}

type MapDispatchToProps = {
  sendMessage: () => void
  updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    dialogsPage: state.dialogsReducer
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
  return {
    sendMessage: () => {
      dispatch(SendMessageAC())
    },
    updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(UpdateNewMessageBodyAC(e.currentTarget.value))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer