// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let squares = array.map((data)=>{
//     return data*data;
// })

// let cubes = array.map((data)=>{
//     return data*data*data;
// })

// let odds = array.filter((data)=>{
//     return data%2 != 0;
// })

// console.log(squares);
// console.log(cubes);
// console.log(odds);

const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters',
        school: {
            name: 'SPS',
            location: 'Pitampura'
        }
    },
    friends: ["Falcon", "Bucky"]
};

let {education: {school:{name, location}}} = user;

console.log(name, location);