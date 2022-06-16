let arrayOfCharacters = [
    {name: "Zaid", firstName: "Ali", height: 180, gender: 'M', mass: 200, eyeColor: "Blue"},
    {name: "Marim", firstName: "Ahmed", height: 200, gender: 'F', mass: 90, eyeColor: "Blue"},
    {name: "Fisal", firstName: "Osman", height: 190, gender: 'M', mass: 250, eyeColor: "Blue"},
    {name: "Sarah", firstName: "Farhad", height: 160, gender: 'F', mass: 45, eyeColor: "Blue"},]

let characterFilterMale = arrayOfCharacters.filter((a) => (a.gender === 'M'));
console.log(characterFilterMale);


let arrayNameAndHeight = arrayOfCharacters.map((c) => {
        let b = new Array();
        b.push(c.name)
        b.push(c.height);
        return b
    }
)
console.log(arrayNameAndHeight)

let firstNames = arrayOfCharacters.map((c) => c.firstName)
console.log(firstNames)


let totalMass = arrayOfCharacters.reduce((sum, c) => sum + c.mass, 0);
console.log(totalMass)

console.log("number of characters is: " + arrayOfCharacters.length)

let massGreaterThan100 = arrayOfCharacters.filter((c) => c.mass > 100)
console.log(massGreaterThan100)

let femaleCharacters = arrayOfCharacters.filter((c) => c.gender === 'F')
console.log(femaleCharacters)


let sortByName = arrayOfCharacters.sort((c, b) => c.name.localeCompare(b.name))
console.log(sortByName)

let sortByGender = arrayOfCharacters.sort((c, b) => c.gender.localeCompare(b.gender))
console.log(sortByGender)


let isEveryCharacterHaveBlueEyes = arrayOfCharacters.every((c) => c.eyeColor === "Blue")
console.log(isEveryCharacterHaveBlueEyes)

let isEveryCharacterMale = arrayOfCharacters.every((c) => c.gender === 'M')
console.log(isEveryCharacterMale)


let isThereAtLeastOneMale = arrayOfCharacters.some((c) => c.gender === 'M')
console.log(isThereAtLeastOneMale)

let isAtLeastOneHasMassLessThan50 = arrayOfCharacters.some((c) => c.mass < 50)
console.log(isAtLeastOneHasMassLessThan50)