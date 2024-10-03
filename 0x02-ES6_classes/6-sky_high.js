import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent constructor with the sqft attribute
    this._floors = floors;

    // Validate attributes during object creation
    this.validateAttributes();
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  // Method to validate the constructor attributes
  validateAttributes() {
    if (typeof this._floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
  }
}
