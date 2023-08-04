// in observer Pattern there are observer and subject 
// subject produce events
// Observer wish to be notified

class Observer{
    notify(){}
   
}

class Subject{

    constructor(){
        this.observers=[]
    }

  
    addObserver(observer){
        this.observers.push(observer)
    }
    removeObserver(observer){
        this.observer.remove(observer)
    }
    notifyObservers(data)
    {
        for(const observer of this.observers)
        {
            observer.notify(data)
        }
    }
}

class Notification extends Observer {
notify(data){
switch(data.type)
    {
        case 'follow':
            console.log(`${data.data.follower}  followed ${data.data.followed}`);


        }
}
}

class User extends Subject{

    constructor(name){
        super();
        this.name=name;
        this.followers=[];
    }
    
    
    follow(user)
    {
       this.notifyObservers({type:'follow',data:{follower:this.name,followed:user.name}})
       

    }
}


const john = new User('John');
const Alice=new User('Alice')
const notification = new Notification()
john.addObserver(notification)
john.follow(Alice)