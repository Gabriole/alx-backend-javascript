export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;

    // Validate attributes during object creation
    this.validateAttributes();
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Override the default string description of the class
  toString() {
    return `[object ${this._code}]`;
  }

  // Method to validate the constructor attributes
  validateAttributes() {
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof this._code !== 'string') {
      throw new TypeError('Code must be a string');
    }
  }
}
