


function stringOperation(): string {
    const text = 'eduardo francisco hernandez solorzano';
    const words = text.split(' ');
    console.log('words:::', words);
    let concatenatedWords = '';
    words.forEach((word)=>{        
        concatenatedWords = concatenatedWords.concat(`${word} `);        
    })    
    return concatenatedWords;
}

function capitalizeNames(): string{
    const text = 'eduardo francisco hernandez solorzano';
    const words = text.split(' ');
    let capitalizedWords = words.map((element) => {        
        let capitalWord = (element.charAt(0).toUpperCase()).concat(element.slice(1));
        return capitalWord;
    })
    return capitalizedWords.join(' ');
}

let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 

class Person {
    name : string;
    age : number;
}

class newPerson {
    name : string;
}

function getOnlyNames(people : any[]): Person[] {
    let shortPersonList = people.map((person) => {
    let newPerson = new Person();
    newPerson.name = (person as Person).name  
    return newPerson;          
    });

    return shortPersonList
}


console.log('stringOperation2:::', capitalizeNames());
