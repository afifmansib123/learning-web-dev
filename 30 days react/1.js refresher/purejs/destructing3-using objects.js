const props = {
    user : {
     firstname : 'Afif',
     secondname : 'chow',
     age : 25
    }, 
    socials : {
     facebook : 'mchow',
     insta : 'zianchow',
     line : 'a120',
    },
    skills : ['html','js','react'],
 }

 const {user:{firstname,secondname,age},socials:{facebook,insta,line},skills = ['html','css','js']} = props
 console.log(props);