// ham lay data

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// ham luu du lieu

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
