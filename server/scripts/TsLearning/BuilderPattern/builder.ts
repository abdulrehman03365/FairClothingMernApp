// Builder pattern is used to create a object either step by step and in a more readable configurable manner
// Consider Building a character of video game using lot of configurable options from front end.


interface IHouseBuilder{
SetStory(story:number) : void
SetRooms(rooms:number) : void

}

class HouseBuilder implements IHouseBuilder
{
    private rooms : Number;
    private story : Number;

  
    SetStory(story :Number): void {
      this.story=story;
    }
    SetRooms(Rooms:Number): void {
      this.rooms=Rooms;
    }

    build(){
        return this;
    }

    displayDetails()
    {
        console.log("This house has" + this.rooms + "rooms  " + " stories " + this.story);
        
    }

}


let houseBuilder=new HouseBuilder()
houseBuilder.SetRooms(2)
houseBuilder.SetStory(3)
houseBuilder.build();
houseBuilder.displayDetails();