
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE READ TASK INSTRUCTIONS CAREFULLY TO KNOW WHEN TO USE OBJECT AS CONSTRUCTOR ARGUMENT. TESTS WILL NOT PASS IF USED WHEN NOT INSTRUCTED. ❗❗ */

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from 2 arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {

  constructor (name, age) {
    this.name = name
    this.age = age
    this.stomach = []
  }

  eat (someFood) {
    if (this.stomach.length < 10) {
    this.stomach.push(someFood)
    }
  }

  poop () {
    return this.stomach.length = 0
  }

  toString () {
    return `${this.name}, ${this.age}`
  }
}

const beel = new Person ("Beel Kreel", 1000)

console.log(`Task 1`, beel)

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon`, from 2 arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor (model, milesPerGallon) {
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometer = 0
  }

  fill (gallons) {
    return this.tank = this.tank + gallons
  }

  drive (distance) {
    const drivableMiles = this.tank * this.milesPerGallon

    if(distance <= drivableMiles) {
    this.odometer = this.odometer + distance
    this.tank = this.tank - (distance / this.milesPerGallon)
    } else {
      this.odometer = this.odometer + drivableMiles
      this.tank = 0
      return `I ran out of fuel at ${this.odometer} miles!`
    }
    }
  }


const honda = new Car ("Honda", "20")

console.log(`Task 2`, honda)
honda.fill(10)
console.log(honda.drive(10))
console.log(honda)

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor (props) {
    this.name = props.name
    this.age = props.age
    this.location = props.location
  }

  speak () {
    return `Hello, my name is ${this.name}, I am from ${this.location}`
  }
}

const whatsALambdasian = new Lambdasian ({
  name: "JayMoney",
  age: 20,
  location: "Right over somewhere"
}) 

console.log(`Task 3`, whatsALambdasian)
/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Lambdasian{
  constructor (props) {
    super(props)
    this.specialty = props.specialty
    this.favLanguage = props.favLanguage
    this.catchPhrase = props.catchPhrase
  }

  demo (subject) {
    return `Today we are learning about ${subject}`
  }

  grade (student, subject) {
    return `${student.name} recieves a perfect score on ${subject}`
  }

  letterGrade (student) {
    let randomGrade = Math.round(Math.random())
    console.log(student.grade)
    console.log(randomGrade)
    if (randomGrade == 0) {
      return student.grade = student.grade + (Math.random() / Math.random() + 1)
    } else {
      return student.grade = student.grade - (Math.random() / Math.random() + 1)
    }
  }
}

const maryElephant = new Instructor ({
  name: "Mary",
  age: 80,
  location: "Greenway",
  specialty: "History",
  favLanguage: "Spanish",
  catchPhrase: "Settle down class"
})

console.log(`Task 4`, maryElephant)

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

class Student extends Lambdasian{
   constructor (props) {
    super(props)
    this.grade = props.grade
    this.previousBackground = props.previousBackground
    this.className = props.className
    this.favSubjects = props.favSubjects
   }

   listSubjects () {
    return `Loving${this.favSubjects}`
   }

   PRAssignment (subject) {
    return `${this.name} has submitted a PR for ${subject}`
   }

   sprintChallenge (subject) {
    return `${this.name} has begun sprint challenge on ${subject}`
   }

   graduate () {
    if (this.grade >= 70) {
      return `${this.name} is ready to graduate!`
    } else {
      return `Keep grading their assignments, they need to learn more.`
    }
   }
}


const collin = new Student ({
  name: "Collin",
  age: 20,
  location: "USA",
  grade: 40,
  previousBackground: "Store Clerk",
  className: "2021",
  favSubjects: [" Math", " Science", " Social Studies"]
})

console.log(`Task 5`, collin.listSubjects())
maryElephant.letterGrade(collin)
console.log(collin)
/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor{
   constructor (props) {
    super(props)
    this.gradClassName = props.gradClassName
    this.favInstructor = props.favInstructor
   }

   standUp (channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`
   }

   debugsCode (student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`
   }
}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
