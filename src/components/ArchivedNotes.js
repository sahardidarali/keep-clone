import React from 'react'
import { connect } from 'react-redux'
import { pinNote,delNote } from '../actions'
function ArchivedNotes(props) {
const renderArchivedNote=()=>{
    if (!props.archivedNotes) {
       return <div>No Archive</div>
    }
    else{
        var filteredArchivedArray = props.archivedNotes.filter( obj => obj.userId === props.userId)
        return filteredArchivedArray.map((archivednote,index) => {
            return (
                <div key={index} style={{ display: "inline-block", margin: "0  0.02rem" }} className="ui cards">
                    <div className="ui card" >
                        <div className="content" key={archivednote.userId}>
                            <div className="header">{archivednote.title}
                            </div>
                            <div className="description">{archivednote.body}</div>
                        </div>
                        <i className="trash alternate outline large icon" onClick={() => { props.delNote(archivednote) }}></i>
                        <i className="trash alternate outline large icon" onClick={() => { props.pinNote(archivednote) }}></i>
                    </div>
                </div>
            )
        })
    }
    }
    return(
        <div className="ui container">
 <br/><br/><br/><br/>
<div>{renderArchivedNote()}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        archivedNotes: state.notesReducer.archivedNotesList
    }
}


export default connect(mapStateToProps,{pinNote,delNote})(ArchivedNotes)
