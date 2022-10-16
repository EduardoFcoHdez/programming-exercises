const map = ["superman"];

const map1 = new Map([
    ['country', 'Chile'],
    ['name', 'Tom'],
  ]);

const basicPerson = {'carrer':'engineer'};
const person1 = {...basicPerson, 'name':'Francisco','age': 30};
const person2 = {...basicPerson, 'name':'Eduardo', 'age': 40,'address':'Mariano Otero'};
const person3 = {...basicPerson, 'name':'Luis', 'age': 40,'address':'Mariano Otero','address2':'Mariano Otero 2'};

interface Person {
    name?: string;
    age: number;
    address?:string;
    carrer?:string;
} 
const peopleMap = new Map<string,object>();
peopleMap.set('Costa Rica',person1);
peopleMap.set('Colombia',person2);
peopleMap.set('Mexico',person3);

const youngPeopleCountries = Array.from(peopleMap.entries()).filter( item => (item[1] as Person).age < 40 );
console.log('youngPeopleCountries:', youngPeopleCountries);




