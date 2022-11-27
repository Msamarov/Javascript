  const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 29,
    examScores: [1, 2],
    gender: 'female',
    name: 'silvia'
},
{
    age: 21,
    examScores: [1, 2, 3],
    gender: 'female',
    name: 'test'
}];

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//menu()
//showData(students);
//showCountData(students);
//showNamesData(students, availableMaleNames, availableFemaleNames);
//deleteLastStudent(students);
//deleteRandomStudent(students);
//showDataGirls(students);
//showGenderCount(students);
//checkIfGirls(students);
//checkStudentAge(students);
//addStudent(students);
//showYoungerAgeStudent(students);
//showAverageAgeStudent(students);

function menu() {
    console.log(`MENU: `);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      while (rl != 0) {
      switch (action) {
        case '1':
            showData();
          break;
        case '2':
            showCountData();
          break;
        case '3':
            showNamesData();
          break;
        case '4':
          deleteLastStudent();
          break;
        case '5':
          deleteLastStudent();
          break;
        case '6':
          showDataGirls();
          break;
        case '7':
          showGenderCount();
          break;
        case '8':
          checkIfGirls();
          break;
        case '9':
          checkStudentAge();
        case '10':
          addStudent();
          break;
        case '11':
          showYoungerAgeStudent();
          break;
        case '12':
          showAverageAgeStudent();
    console.log("¿Hay algo más que te quisiera consultar?");
        }
      }
}

function showData(students) {
    console.log('1 - show data')
    for (let student of students) {
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Gender: ${student.gender}`);
        console.log(`Exam scores: ${student.examScores}`);
        console.log(`---------------------------`);
    }
}

function showCountData(students) {
    console.log('2 - show count data')
    console.log(`Cantidad de alumnos: ${students.length}`)
}

function showNamesData(students, availableMaleNames, availableFemaleNames) {
    console.log('3 - show name data')
    console.log(`Nombres de de alumnos matriculados:`)
    for (let student of students) {
        console.log(`${student.name}`);
    }

    console.log(`Nombres disponibles:`)
    for (let maleName of availableMaleNames) {
        console.log(`${maleName}`);
    }
    for (let femaleName of availableFemaleNames) {
        console.log(`${femaleName}`);
    }
}

function deleteLastStudent(students) {
    console.log('4 - delete last student')
    console.log(`Ultimo estudiante eliminado, nueva lista de estudiantes: ${JSON.stringify(students.pop())}`);
}

function deleteRandomStudent(students) {
    console.log('5 - delete random student')
    const index = Math.floor(Math.random() * students.length);
    console.log(`Estudiante ${index} eliminado, nueva lista de estudiantes: ${JSON.stringify(students.splice(index, 1))}`);
}

function showDataGirls(students) {
    console.log('6 - show data girls')
    for (let student of students) {
        if (student.gender === 'female') {
            console.log(`Name: ${student.name}`);
            console.log(`Age: ${student.age}`);
            console.log(`Exam scores: ${student.examScores}`);
        }
    }
}

function showGenderCount(students) {
    console.log('7 - show gender count')
    let males = 0;
    let females = 0;

    for (let student of students) {
        if (student.gender === 'female') {
            females++;
        }
        if (student.gender === 'male') {
            males++;
        }
    }

    console.log(`Estudiantes 'males': ${males} - Estudiantes 'females': ${females}`);
}

function checkIfGirls(students) {
    console.log('8 - check if girls')
    let allFemales = true;
    let males = 0;
    for (let student of students) {
        if (student.gender !== 'female') {
            allFemales = false
        }
        if (student.gender === 'male') {
            males++;
        }
    }

    console.log(`Estudiantes 'females': ${allFemales}, hay ${males} chicos`);
}

function checkStudentAge(students) {
    console.log('9 - check student age');
    let minAge = 20;
    let maxAge = 25;

    let studentsAge = 0;

    for (let student of students) {
        if (student.age >= minAge && student.age <= maxAge) {
            studentsAge++;
        }
    }

    console.log(`Estudiantes entre ${minAge} y ${maxAge}: ${studentsAge}`);
}

function addStudent(students) {
    console.log('10 - add student')
    const name = (Math.random() + 1).toString(36).substring(7);
    const age = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    let gender = Math.round(Math.random());

    if (gender === 1)
        gender = 'female'
    else
        gender = 'male'


    const student = {
        age: age,
        examScores: [],
        gender: gender,
        name: name
    }

    students.push(student);
    console.log(`Nuevo estudiante ${student.name} añadido, nueva lista de estudiantes: ${JSON.stringify(students)}`);
}

function showYoungerAgeStudent(students) {
    console.log('11 - show younger student')
    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };

    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };

    let ages = [];

    for (let student of students) {
        ages.push(student.age);
    }

    console.log(`Max value is: ${ages.max()}` +
        `\nMin value is: ${ages.min()}`);
}

function showAverageAgeStudent(students) {
    console.log('12 - average age student')
    let ages = [];

    for (let student of students) {
        ages.push(student.age);
    }

    //const average = ages.reduce((a, b) => a + b, 0) / arr.length;
    console.log(`Estudiantes media de edad round: ${Math.round(ages.reduce((a, b) => a + b, 0) / ages.length)}`);
}