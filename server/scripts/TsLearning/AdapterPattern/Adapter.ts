// when we want to integrate our code with third party apis or legacy code we use adapter pattern and create their adapter .
// when we want all our apis like different payment apis to adapt to standard interface writtern by our developer then we use adapter pattern.


interface INotification{
    send() : void;
}


class SMS{
    step1(){
console.log("SMS service step 1 done");

    }

    step2(){
console.log(" SMS service step 2 done");

    }

    step3(){
console.log("SMS service step 3 done");

    }
    sendSms(){
console.log("sms sent");

    }

}

class smsAdapter implements  INotification{
    service:SMS;
    constructor(service :SMS){
    this.service=service
    }


    
    send(): void {
        this.service.step1()
        this.service.step2()
        this.service.step3()
        this.service.sendSms()
    }
    
}

class emailAdapter implements INotification{
    send(): void {
      console.log("sending email");
      
    }

}

const sms = new SMS;
const smsadapter =new smsAdapter(sms);
const emailadapter =new emailAdapter()

smsadapter.send()
emailadapter.send()
