const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car, returns a new object of the same class
  cloneCar() {
    return Object.create(
      Object.getPrototypeOf(this), // Create a new object with the same prototype
      Object.getOwnPropertyDescriptors(this) // Clone the properties
    );
  }
}
