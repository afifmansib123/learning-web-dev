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
// we out of object now;
profile.fathername = 'father';
profile.mothername = 'mother';

// putting function out of object

profile.externalfunction = function(){
    return this.printprofile() + this.fathername;
}

