

class Utils {
    ttl = 30;
    expirationTime = new Date();
    _isUserLoggedIn = false;

    setIsUserLoggedIn(value) {
      this._isUserLoggedIn = value;
    }
  
    getIsUserLoggedIn() {
      return this._isUserLoggedIn;
    }
  
    setSessionExpireTime(expiresIn) {
      this.expirationTime = new Date().getTime() + expiresIn * 1000;
    }

    getSessionExpireTime()
    {
        return this.expirationTime;
    }
  
    checkUserLogin() {
      const currentTime = new Date().getTime();
      if (currentTime > this.expirationTime) {
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        console.log('Your session has expired');
        this.isUserLoggedIn = false;
      

        // Add your logic to redirect the user to the desired page
      }
    }
  }
  
  const util = new Utils();
  export default util;
  