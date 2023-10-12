//Factory Pattern allow us to create objects of class under specific conditions and additionaly if we want to limit the type of object creation

class House{
    public type :string;
    private owner : string="abdul";
    protected address : string="karachi";

    constructor(type,owner,address){
    this.type=type;
    this.owner=owner;
    this.address=address;
    }

    revealDetail(){
        console.log("type =" +this.type);
        console.log("owner ="+this.owner);
        console.log("address ="+this.address);
        
        
    }
}


type houseType = '2A' | '3A'

class Factory{

    type:houseType;
    

    constructor(){
       
    }


    createHome(type:houseType)
    {
        if(type='2A')
        {
            return new House("2A","abdul","karachi")
        }
        else
        if(type='3A')
        {
            return new House("3A","abdul","islamabad")
        }
    }



}

let factory = new Factory();
factory.createHome('2A')?.revealDetail()

class IsbHouse extends House {
    constructor() {
      super("2A", "atya", "isb");
    }
  }
  
  const isbHouse = new IsbHouse();
  
  isbHouse.revealDetail();  // Display details of IsbHouse
  