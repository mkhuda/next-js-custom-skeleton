const port = process.env.PORT || 3000;
const localHost = `localhost:${port}`;
const dev = process.env.NODE_ENV !== 'production'
const localUrl = `${(dev) ?
  (process.browser ? 'http://'+window.location.host : 'http://'+localHost)
  :
  (process.browser ? 'https://'+window.location.host : 'https://'+localHost)
}`;

export default class AuthService {
  constructor() {
    this.domain = localUrl
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  /**
   * Login function
   *
   * @param email
   * @param password
   * @returns token & status
   */
  login(email, password) {
    return this.fetch(`${this.domain}/auth`, {
      method: 'POST',
      body: JSON.stringify(
        {
          'email': email,
          'password': password
        })
    })
      .then(res => {
        (res.status) && this.setToken(res.data.jwt)
        return res.status
      })
  }

  /**
   * Check if user is logged in
   *
   * @returns Boolean
   */
  loggedIn(){
    const token = this.getToken()
    return !!token
  }

  /**
   * Set profile into localstorage
   *
   * @param profile
   * @returns profile
   */
  setProfile(profile){
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  /**
   * Get profile from localstorage
   *
   * @returns profile
   */
  getProfile(){
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  /**
   * Set token into Localstorage
   *
   * @param idToken
   * @returns token
   */
  setToken(idToken){
    localStorage.setItem('id_token', idToken)
  }

  /**
   * Get token from localstorage
   *
   * @returns token
   */
  getToken(){
    return localStorage.getItem('id_token')
  }

  /**
   * Logout function auth
   *
   * @returns {undefined}
   */
  logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  /**
   * Check response status
   *
   * @param response
   * @returns {undefined}
   */
  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  /**
   * Check token with fetch
   *
   * @returns {undefined}
   */
  _checkToken() {
    return this.fetch(`${this.domain}/initialize`, {
      method: 'POST',
      body: JSON.stringify(
        {
          'jwt_token': this.getToken()
        })
    })
      .then(res => {
        return res
      })
  }

  /**
   * Default fetch functionality
   *
   * @param url
   * @param options
   * @returns {undefined}
   */
  fetch(url, options){
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()){
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }
}

