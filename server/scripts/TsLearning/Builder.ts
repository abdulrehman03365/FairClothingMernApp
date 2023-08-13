class Home{
    
    floors : number 
    rooms:number

    constructor(rooms :number,floors:number){

    }
}

class HouseBuilder implements IHouseBuilder{
    private roomNumber:number;
    private floorNumber:number;


    setRooms(roomNumber :number): HouseBuilder {
       this.roomNumber=roomNumber
        return this;
    }
    setFloors(floorNumber : number): HouseBuilder {
        this.floorNumber=floorNumber
       return this;
    }

    build() : Home{

return  new Home(this.roomNumber,this.floorNumber)
    }

}


interface IHouseBuilder{

    setRooms(roomNumber :Number): HouseBuilder
    setFloors(floorNumber: Number): HouseBuilder


}


const houseBuilder =new HouseBuilder().setFloors(2).setRooms(3).build()
console.log(houseBuilder);
