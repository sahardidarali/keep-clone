

export const signIn = (userId, profileImage) => {
    return {
        type: 'SIGN_IN',
        payload: {
            userId: userId,
            profileImage: profileImage
        }
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createNote = (userId, title, body) => {
    return {
        type: 'CREATE_NOTE',
        payload: {
            userId: userId,
            title: title,
            body: body
        }
    }
}
export const editNote = (note) => {
    return {
        type: 'EDIT_NOTE',
        payload: note
    }
}
export const delNote = (note) => {
    return {
        type: 'DELETE_NOTE',
        payload: note
    }
}
export const delPinNote = (note) => {
    return {
        type: 'DELETE_PIN_NOTE',
        payload: note
    }
}
export const permanentDelNote = (note) => {
    return {
        type: 'PERMANENT_DELETE_NOTE',
        payload: note
    }
}
export const archiveNote = (note) => {
    return {
        type: 'ARCHIVE_NOTE',
        payload: note
    }
}
export const pinNote = (note) => {
    return {
        type: 'PINNED_NOTE',
        payload: note
    }
}
export const removePin = (note) => {
    return {
        type: 'REMOVEPIN_NOTE',
        payload: note
    }
}