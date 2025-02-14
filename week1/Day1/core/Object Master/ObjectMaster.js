const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const divBy3 = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(divBy3);
// an array of pokémon objects that are "fire" type
const typeFire = pokemon.filter(pokemon => pokemon.types[1] == "fire" && pokemon.types.length == 2);
console.log(typeFire);
// an array of pokémon objects that have more than one type 
const multitype = pokemon.filter(pokemon => pokemon.types.length > 1);
console.log(multitype);
// an array with just the names of the pokémon
const names = pokemon.map( p => p.name);
console.log(names);

// an array with just the names of pokémon with an id greater than 99
const find99 = pokemon.filter(pokemon => pokemon.id > 99);
console.log(find99)

// an array with just the names of the pokémon whose only type is poison
const findType = pokemon.filter(pokemon => pokemon.types[0] === "poison" && pokemon.types.length == 1);
console.log(findType)

const findFlying = pokemon.filter(pokemon => pokemon.types[1] ==="flying" && pokemon.types.length == 2);
console.log(findFlying)

// an array containing just the first type of all the pokémon whose second type is "flying"
const flyingfirstType = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0])
console.log(flyingfirstType);
// 8
const normalCount = pokemon.filter(pokemon => pokemon.types[0] === "normal" || pokemon.types[1] === "normal").length;
console.log(normalCount)
// 9
const no148 = pokemon.filter(pokemon => pokemon.id !== 148);
console.log(no148);
