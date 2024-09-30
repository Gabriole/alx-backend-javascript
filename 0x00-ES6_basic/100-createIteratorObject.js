export default function createIteratorObject(report) {
  let allEmployees = [];
  
  // Collect all employees from every department
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(department);
  }

  // Return an iterator for the employees array
  return allEmployees[Symbol.iterator]();
}
