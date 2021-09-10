import React from 'react'
import { connect } from 'react-redux'
import {permanentDelNote} from '../actions'

function DeletedNotes(props) {
const renderDeletedNote=()=>{
    if (!props.deletedNotes) {
        return <div>No Bin</div>
     }
    else{
        var filteredDeletedArray = props.deletedNotes.filter( obj => obj.userId === props.userId)

        return filteredDeletedArray.map((deletednote,index) => {
            return (
                <div key={index} style={{ display: "inline-block", margin: "0  0.02rem" }} className="ui cards">
                    <div className="ui card" >
                        <div className="content" key={deletednote.userId}>
                            <div className="header">{deletednote.title}
                            </div>
                            <div className="description">{deletednote.body}</div>
                        </div>
                        <i className="trash alternate outline large icon" onClick={() => { props.permanentDelNote(deletednote) }}></i>
                    </div>
                </div>
            )
        })
            }
}
    return(
        <div className="ui container">
 <br/><br/><br/><br/>
<div>{renderDeletedNote()}</div>
        </div>
    )
    


}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        deletedNotes: state.notesReducer.deletedNotes
    }
}


export default connect(mapStateToProps,{permanentDelNote})(DeletedNotes)
