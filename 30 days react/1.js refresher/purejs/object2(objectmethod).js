const profile = {
    firstname : 'afif',
    secondname : 'mansib',
    age : 23,
    skills : [
        'html',
        'css',
        'javascript',
    ],
    printprofile:function(){
        return this.firstname + '\t' + this.age + '\t'+ this.skills;
        }
    };

console.log(profile.printprofile());
