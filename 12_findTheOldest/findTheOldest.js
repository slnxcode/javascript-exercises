const findTheOldest = function(people) {
    return people.reduce((ages, person) => {
        const allAges = getAge(ages.yearOfBirth, ages.yearOfDeath);
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        
        return currentAge >= allAges ? person : ages
      })
};

const getAge = (birth, death) => {
    !death ? death = new Date().getFullYear() : death;
    return death - birth;
 }
// Do not edit below this line
module.exports = findTheOldest;
