import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNote, pinNote, delNote, removePin, archiveNote,delPinNote } from '../actions'

const CreateNotes = (props) => {
    const [status, setStatus] = useState(false)
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')


    const onClickClose = () => {
        setStatus(false)
        if (title.length > 0 && note.length > 0) {
            props.createNote(props.userId, title, note)
        }
    }

    const pinNote = () => {

        if (!props.pinnednotes) {
            return <div></div>
        } else {

            return (

                props.pinnednotes.map((pinnedNote,index) => {

                    return (

                        <div key={index} style={{ display: "inline-block", margin: "0  0.02rem" }} className="ui cards">
                            <div className="ui card" >

                                <div className="content" >

                                    <div className="header">{pinnedNote.title}
                                        <span onClick={() => { props.removePin(pinnedNote) }}>
                                            <i className="pin icon"  ></i>
                                        </span>
                                        <span onClick={() => { props.delPinNote(pinnedNote) }}>
                                            <i className="trash alternate outline  icon"></i>
                                        </span>
                                    </div>
                                    <div className="description">{pinnedNote.body}</div>
                                </div>
                            </div>


                        </div>
                    )
                })
            )
        }
    }
    const addNote = () => {
        if (!status) {
            return (
                <div>
                    <div className="note centered">
                        <input type="text" onClick={() => { setStatus(true) }} placeholder="Take a note..." className="initial" onChange={() => null} />
                        <span>
                            <i className="right aligned check square outline icon"></i>
                        </span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="note2" >
                    <input type="text" placeholder="Title" onChange={e => { setTitle(e.target.value) }} className="title" />
                    <span>
                        <i className=" pin icon"></i>
                    </span>
                    <br></br>
                    <input type="text" placeholder="Take a note..." className="take-note" onChange={e => { setNote(e.target.value) }} autoFocus="autofocus " />
                    <button onClick={onClickClose}>close</button>

                </div>
            )
        }
    }
    const renderNotes = () => {
        if (!props.notes) {
            return <div></div>
        }
        else {
            var filteredNotesArray = props.notes.filter(obj => obj.userId === props.userId)
            return filteredNotesArray.map((note,index) => {
                return (
                    <div key={index} style={{ display: "inline-block", margin: "0  0.02rem" }} className="ui cards">
                        <div className="ui card" >
                            <div className="content"  >
                                <div className="header">{note.title}
                                    <span>
                                        <i className="ui right aligned pin icon" onClick={() => { props.pinNote(note) }}  ></i>
                                    </span>
                                    <span>
                                        <i className="ui right aligned trash alternate outline  icon" onClick={() => { props.delNote(note) }}></i>
                                    </span>
                                </div>
                                <div className="description">{note.body}</div>
                            </div>
                            <span className="ui right aligned" style={{ padding: "0.3rem" }} onClick={() => { props.archiveNote(note) }}>
                                <i className=" ui right aligned archive icon"></i>
                            </span>
                        </div>

                    </div>
                )
            })
        }
    }
    return (
        <div className="notes-view">
            <br/><br/><br/>
            <div> {addNote()}</div>
            <div>{pinNote()}</div>
            <div className="ui container">
                {renderNotes()}
            </div>
        </div>


    )


}


const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        notes: state.notesReducer.notesList,
        pinnednotes: state.notesReducer.pinnedNotesList,
        deletenotes: state.notesReducer.deletedNotes,
        archivenotes: state.notesReducer.archivedNotes
    }
}


export default connect(mapStateToProps, { createNote, pinNote, delNote, removePin, archiveNote,delPinNote })(CreateNotes)
