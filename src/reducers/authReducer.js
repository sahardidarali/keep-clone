

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    profileImage: null
}

export default (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.userId,
                profileImage: action.payload.profileImage
            }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null ,profileImage:null}
        default:
            return state
    }
}