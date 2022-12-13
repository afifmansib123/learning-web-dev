const profile = {
    firstname : 'afif',
    secondname : 'mansib',
    age : 23,
    skills : [
        'html',
        'css',
        'javascript',
        'react',
        'node',
        'mongo',
        'devops',
    ],
    printprofile:function(){
        return this.firstname + '\t' + this.age + '\t'+ this.skills;
        }
    };
// we out of object now;
profile.fathername = 'father';
profile.mothername = 'mother';

// putting function out of object

//using splice or slice : starting position and how many objects

profile.externalfunction = function(){
    let partofskills = this.skills.splice(0,2);
    return partofskills
    
}
