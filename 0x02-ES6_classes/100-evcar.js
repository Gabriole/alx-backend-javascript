import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the Car class constructor with brand, motor, and color
    super(brand, motor, color);
    this._range = range; // Additional attribute specific to EVCar
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar to return a Car object, not an EVCar
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
