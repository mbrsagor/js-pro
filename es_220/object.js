const languages = {
  name: "Javascript",
  is_active: true,
  framework: {
    angular: "Google",
    react: "Facebook",
    ember: "Apple",
  },
};

// Old style checking sytem
let company = languages && languages.framework && languages.framework.angular && languages.framework.angular;
console.log(company);


//  New style checking stytem
let new_company = languages?.framework?.react;
console.log(new_company);


// example 2
let names = ["sagor", "saif", "ohi", "meg"]
names = null
console.log(names?.[1])
