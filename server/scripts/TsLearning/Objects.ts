enum Varient {
VX='VX',
VXL='VXL'
,VXR='VXR'
}


class Car{
   make:string;
   model:string;
   varient:Varient;
   mileage:number;

   
    constructor(make: string , model : string , varient : Varient , mileage :number){
        this.make = make;
        this.model = model;
        this.varient = varient;
        this.mileage = mileage;
    }


   
}

const cars: Car[] = [
    new Car('alto1', '2010', Varient.VX, 1211),
    new Car('alto1', '2010', Varient.VX, 1211)
  ];
 function filterCars(cars: Car[]): Car[] {
    return cars.filter(car => car.varient === Varient.VX);
  }
//   const vxCars = cars.filter(car => car.varient === Varient.VX);
const vxCars= filterCars(cars)
console.log(vxCars);