export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;

    // Validate attributes during object creation
    this.validateAttributes();
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Method to handle casting to Number (returns size)
  valueOf() {
    return this._size;
  }

  // Method to handle casting to String (returns location)
  toString() {
    return this._location;
  }

  // Method to validate the constructor attributes
  validateAttributes() {
    if (typeof this._size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof this._location !== 'string') {
      throw new TypeError('Location must be a string');
    }
  }
}
