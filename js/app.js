import employees from "./employees..js";
// inode -vmport { totalSalary, departmentsQuantity } from "./method.js";
import * as employeesMethods from "./method.js";

// console.log(totalSalary(employees));
// console.log(departmentsQuantity(employees));

console.log(employeesMethods.departmentsSalary(employees));
console.log(employeesMethods.totalSalary(employees));
console.log(employeesMethods.departmentsQuantity(employees));