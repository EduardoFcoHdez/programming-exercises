//Merge properties
const regularStudent = {'Name':'Juan'};
const privilegedStudent = {'Plan':'Enrolled'};
const preparedStudent = {...regularStudent, ...privilegedStudent};
console.log('preparedStudent', preparedStudent);