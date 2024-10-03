export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;

    // Validate types during object creation
    this.validateAttributes();
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

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with validation
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with validation
  set students(value) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }

  // Method to validate constructor attributes
  validateAttributes() {
    this.name = this._name;
    this.length = this._length;
    this.students = this._students;
  }
}
