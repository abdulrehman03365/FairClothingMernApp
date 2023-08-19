interface IHouseBuilder{
SetStory(Number) : House
Rooms(Number) : House

}

class House implements IHouseBuilder
{
    Rooms(Number: any): House {
        return this;
        // throw new Error("Method not implemented.")
    }
    SetStory(story :Number): House {
        return this
    }
    SetRooms(Rooms:Number): House {
        return this
    }

}


class Builder{}