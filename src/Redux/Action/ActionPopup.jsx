export const show = (data) => {

    return {
        type: 'SHOW_POPUP',
        data
    }

}

export const hide = (data) => {

    return {
        type: 'HIDE_POPUP',
        data
    }

}