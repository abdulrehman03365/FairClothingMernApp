// 30 min
export var ttl=30
export var expirationTime=new Date();
var IsUserLoggedIn=false;
const currentTime=new Date().getTime();
export function setSessionTimeout(expiresIn){
    expirationTime = new Date().getTime() + ( expiresIn * 1000); 
}
export function checkUserLogin(){
    if (currentTime> expirationTime){
        localStorage.removeItem(token)
        localStorage.removeItem(expiresIn)
        console.log('Your Session is expired');
        
    }
}