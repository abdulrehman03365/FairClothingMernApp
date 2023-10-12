abstract class Car{
    name:string;
    move(){
       console.log(this.name + " is moving");
        }
    
}

class Jeep extends Car{
    name:string;
    enable4by4(){
        console.log("4 X 4 is enabled");
        
    }


   constructor(name:string){
 
      super();
      this.name=name;
  
    }



}
let jeep = new Jeep("my_jeep");
jeep.move()
jeep.enable4by4()


