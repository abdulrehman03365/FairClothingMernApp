abstract class BaseRemote{
    tv:Tv
    
    constructor(tv:Tv){

        this.tv=tv;
    }
   
    abstract turnOnTv():void;
    abstract turnOffTv();
    abstract changeChannel();
}


interface Tv{
    turnOnTv():void;
    turnOffTv():void;
    changeChannel():void;
}


class SonyTv implements Tv{
    turnOnTv() {
      console.log("Sony Tv is on");
        
    }
    turnOffTv() {
        console.log("Sony Tv is off");
    }
    changeChannel() {
        console.log("Sony Tv is changing channel");
    }

}


class SamSungTv implements Tv{
    turnOnTv() {
      console.log("Samsung Tv is on");
        
    }
    turnOffTv() {
        console.log("Samsong Tv is off");
    }
    changeChannel() {
        console.log("Samsong Tv is changing channel");
    }

}
class Remote extends BaseRemote{
  
constructor(tv:Tv) {
    super(tv)
}
    turnOnTv(): void {
        this.tv.turnOnTv()
    }
    turnOffTv() {
        this.tv.turnOffTv()
    }
    changeChannel() {
       this.tv.changeChannel() 
    }
}



const sonyTv = new SonyTv()
const remote = new Remote(sonyTv);
remote.turnOnTv();