import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redax/redax-store";
import {connect} from "react-redux";
import {ApiProfileType, setUserProfile} from "../../Redax/profile-reducer";

type mapStateToProps = {
  profile: null | ApiProfileType
}

type ProfileType = {
  profile: null | ApiProfileType
  setUserProfile: (profile: null | ApiProfileType) => void
}

class ProfileContainer extends React.Component<ProfileType> {
  componentDidMount() {
    axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }

  render () {
    return (
      <div>
        <Profile profile={this.props.profile}/>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => ({
  profile: state.profileReducer.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)