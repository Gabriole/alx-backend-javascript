export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

    // Validate attributes during object creation
    this.validateAttributes();
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code with validation
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with validation
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display currency in format: "name (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Method to validate constructor attributes
  validateAttributes() {
    this.code = this._code;
    this.name = this._name;
  }
}
