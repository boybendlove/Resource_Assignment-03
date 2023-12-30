const initialState = {
    // product: [],
    showModal: false
}

const ReducerPopup = (state = initialState, action) => {

    switch(action.type){

        case 'SHOW_POPUP':
            const stateShow = [state.showModal]
            stateShow.showModal = action.data
            console.log(stateShow)
            return stateShow

        case 'HIDE_POPUP':
            state = {
            showModal: !state.showModal,
            }
            return state

        default:
            return state

    }

}

export default ReducerPopup