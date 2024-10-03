export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square feet must be a number');
    }

    // Ensure any subclass implements evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
