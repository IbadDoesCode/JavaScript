

// Object As Single Parmeter
const getPerson = (person) => {
    console.log(person.PersonName,
        person.PersonAge)
}

// The Correct Way
const getPer = (person, 
    PersonName, 
    PersonAge) => {
        console.log(PersonName, 
            PersonAge)
}