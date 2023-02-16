const tributeChest = [];
const queens = [];

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName,
    }
    queens.push(queenObject)
};

createQueen(1, "Trinity Terry")
createQueen(2, "Athena Perez")
createQueen(3, "Charisse Ford")
createQueen(4, "Jenna Solis")
createQueen(5, "Rupert Tiny-Dog")
createQueen(6, "Rihanna")
createQueen(7, "Monica Dinglehopper")

const payTribute = (tributeId, tributeDescription, queenId) => {
    const tributeObject = { 
        id: tributeId,
        description: tributeDescription,
        queenId: queenId,
    }
    tributeChest.push(tributeObject)
};

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
};

for (const queen of queens) {
    const hail = hailTheQueen(queen.name)
    console.log(hail)
};

payTribute(1, "Wine", 1);
payTribute(2, "Squishmallows", 2);
payTribute(3, "Toilet Paper", 3);
payTribute(4, "Bronze", 4);
payTribute(5, "Dog Toy", 5);
payTribute(6, "Baby Bottle", 6);
payTribute(7, "Fruit", 7);

for (const queen of queens) {
    
    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}`)
        }
    }

};

// Below is logging hailTheQueen without a for..of loop
// const athena = hailTheQueen("Athena Perez"); // Argument value is "Athena Perez"
// console.log(athena);

// const charisse = hailTheQueen("Charisse Ford"); // Argument value is "Charisse Ford"
// console.log(charisse);

// const jenna = hailTheQueen("Jenna Solis"); // Argument value is "Jenna Solis"
// console.log(jenna);

// const rupert = hailTheQueen("Rupert Tiny-Dog");
// console.log(rupert);

// const rihanna = hailTheQueen("Rihanna");
// console.log(rihanna);

// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)
