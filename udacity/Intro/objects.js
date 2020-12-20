let information = {
    name: "sagor",
    age: 26,
    phn_num: 17737474709,
    adddress: "Dhaka-Bangaldesh",
    is_active: true,
    languages: ['python', 'javascript', 'Swift', 'Dart']
};

information.name = "Md.Bozlur Rosid Sagor" // Update value

for(let obj of Object.entries(information)){
    console.log(obj);
}
