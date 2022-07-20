const fs = require('fs')


const estatesBuff = fs.readFileSync('results.json')
const estates = JSON.parse(estatesBuff.toString())
const urls =  estates.map(estate => estate.url)



function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
}
const unique = urls.filter(onlyUnique)


console.log(estates)

console.log('is same length' , unique.length === urls.length1)

