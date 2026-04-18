// For this object below add a property named passenger capacity with value 5
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
const passengerCapacity = new Object();     //create a new object
car.passengerCapacity = 5;      //give the object value
console.log(car);
delete car.passengerCapacity;
console.log(car);