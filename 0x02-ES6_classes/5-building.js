export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Validate the sqft attribute
    this.validateAttributes();

    // Ensure that the evacuationWarningMessage method is implemented by subclasses
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to validate the constructor attribute
  validateAttributes() {
    if (typeof this._sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
  }
}
