export default (state = { notesList: [], deletedNotes: [], archivedNotes: ['helo'], pinnedNotesList: [] }, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            return {
                ...state,
                notesList: [...state.notesList, action.payload]
            }
        case 'ARCHIVE_NOTE':
            return {
                ...state,
                archivedNotes: [action.payload,...state.archivedNotes],
                notesList:state.notesList.filter(function( obj ) {
                    return obj.title !== action.payload.title
                })
            }
      
        case 'PINNED_NOTE':

            return {
                ...state,
                pinnedNotesList: [...state.pinnedNotesList, action.payload],
                notesList: state.notesList.filter(function (obj) {
                    return obj.title !== action.payload.title
                })
            }
        case 'REMOVEPIN_NOTE':

            return {
                ...state,
                notesList: [action.payload, ...state.notesList],
                pinnedNotesList: state.pinnedNotesList.filter(function (obj) {
                    return obj.title !== action.payload.title
                })
            }
        case 'DELETE_NOTE':
            return {
                ...state,
                deletedNotes: [...state.deletedNotes, action.payload],
                notesList: state.notesList.filter(function (obj) {
                    return obj.title !== action.payload.title
                })
            }
            case 'DELETE_PIN_NOTE':
            return {
                ...state,
                deletedNotes: [...state.deletedNotes, action.payload],
                pinnedNotes: state.pinnedNotesList.filter(function (obj) {
                    return obj.title !== action.payload
                })
            }
        case 'PERMANENT_DELETE_NOTE':
            return {
                ...state,
                deletedNotes: state.deletedNotes.filter(function (obj) {
                    return obj.title !== action.payload.title
                })
            }
        default:
            return state
    }
}



