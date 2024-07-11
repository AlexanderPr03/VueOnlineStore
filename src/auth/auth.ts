

export const isAuthenticated = (remember:boolean) => {
    if (remember) {
        return localStorage.getItem('auth') === 'true'
    } else {
        return sessionStorage.getItem('auth') === 'true';
    }
    

}

export const login = (remember:boolean) => {
    if (remember) {
        localStorage.setItem('auth', 'true')   
    } else {
        sessionStorage.setItem('auth', 'true')   

    }

}

export const logout = (remember) => {
    localStorage.setItem('auth', 'false')
}