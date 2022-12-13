const props = {
    user:{
      firstName:'Asabeneh',
      lastName:'Yetayeh',
      age:250
    },
    post:{
      title:'Destructuring and Spread',
      subtitle:'ES6',
      year:2020
  },
  skills:['JS', 'React', 'Redux', 'Node', 'Python']
  
  }
const {user,post,skills} = props
const {firstName, lastName, age} = user
const {title, subtitle, year} = post
const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

console.log(post);
console.log(age);