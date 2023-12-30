export const addUsers = (data) => {

    return {
        type: 'ON_LOGIN',
        data
    }

}

export const deleteUsers = (data) => {

    return {
        type: 'ON_LOGOUT',
        data
    }

}