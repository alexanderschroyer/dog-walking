import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        return petWalker
    }
}
}
// const findCity = (walker, cities) => {
//     let walkerCity = ""

//     for (const city of cities) {
//         if (walker.cityId === city.id)
//         walkerCity = city


//         return walkerCity
//     }
// }


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
    
       
            let currentWalkerCity = null
            for (const city of cities) {
                if (currentPetWalker.cityId === city.id)
                currentWalkerCity = city
            }
            
            
            
            assignmentHTML += `
            <li>
            ${currentPet.name} is being walked by
            ${currentPetWalker.name} in ${currentWalkerCity.city}
            </li>
            `
    }    
    

        assignmentHTML += "</ul>"
    
        return assignmentHTML
    }
