
const initialState = {
    connected: false,
    user: null,
    allusers: [],
    loadinguser: false,
    error: null
}

const userReducer = (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action

    switch (type) {

        default:
            return state
    }
}

export default userReducer