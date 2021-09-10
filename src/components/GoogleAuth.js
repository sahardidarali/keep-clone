import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import CreateNotes from './CreateNotes'
class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '823839075306-mni9lsrnlpp92q7kb73e6s7u3ujgbfue.apps.googleusercontent.com',
                scope: 'profile email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
 
            })
        })
    }
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(
                this.auth.currentUser.get().getId(),
                this.auth.currentUser.get().getBasicProfile().getImageUrl()
                )
        } else {
            this.props.signOut()
        }
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <div style={{right:"0"}}>
                    <CreateNotes/>
                <button style={{marginLeft:"71rem" ,marginTop:"5rem"}} onClick={() => this.auth.signOut()} className="ui red  button">
                    <i className="google icon" />
                    SIGN OUT
                </button>
                </div>
            )
        } else {
            return (
                <div style={{right:"0"}}>
                <button style={{marginLeft:"71rem" ,marginTop:"5.2rem"}} onClick={() => this.auth.signIn()} className="ui  green google button">
                    <i className="google icon" />
                    SIGN IN
                </button>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
               
                {this.renderAuthButton()}
            </div>
            

        )
    }
}
const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}
export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth)