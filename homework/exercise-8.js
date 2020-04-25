/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to ad skills from it

4. Create a method to add a skill to all memebrs in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a method to remove a skill to all memebrs in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function that returns the name of the mentor with more number of skills

7. Create the method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      },
      addSkill: function (newSkill) {
        this.skills.push(newSkill);
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      },
      addSkill: function (newSkill) {
        this.skills.push(newSkill);
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      },
      addSkill: function (newSkill) {
        this.skills.push(newSkill);
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      },
      addSkill: function (newSkill) {
        this.skills.push(newSkill);
      }
  },

];

//YOUR CODE HERE



mentors.forEach(function(object){
  //Task #3
  object.addSkill = function addSkill(newSkill){
    object.skills.push(newSkill);
  };

  //Task #7
  object.addStudentLikes = function addStudentLikes(){
    object.studentLikes += 1;
  };

  if(object.job.city === "Barcelona"){
    //Task #2
    object.class = "Jun1";
    object.addSkill("SQL");

    //Task #1
    if(object.skills.includes("React")){
      console.log(`Hi, my name is ${object.firstName} ${object.lastName}. I work in Barcelona and i know React.`);
    }
  }

})

//Task #4
function addSkill(mentors, newSkill){
  mentors.forEach(function(object){
    object.addSkill(newSkill);
  });
}

//Task #5
function removeSkill(mentors, skill){
  mentors.forEach(element => {
    element.skills.splice(element.skills.indexOf(skill), 1);
  });
}

//Task 6
function mentorWithMoreSkills(mentors){
  var biggestNumOfSkills = 0;
  var mentorMoreSkills = "";

  for (let i = 0; i < mentors.length; i++) {
      if(mentors[i].skills.length > biggestNumOfSkills){
        biggestNumOfSkills = mentors[i].length;
        mentorMoreSkills = mentors[i].firstName + " " + mentors[i].lastName;
      }  
  }

  return mentorMoreSkills;

}

//Task 8 
function addLikeToAllMentors (mentors) {
  mentors.forEach(element => {
    element.addStudentLikes();
  });
}

addSkill(mentors, "Cooking");

removeSkill(mentors, "Cooking");

addLikeToAllMentors(mentors);

console.log(mentorWithMoreSkills(mentors));






console.log("\nDisplaying info of objects:\n");
console.log(mentors);