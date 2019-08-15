// apples = 14
// print(apples)

// print(f"I have {apples} apples.")

const apples = 14;
console.log(apples)

console.log(`I have ${apples} apples.`)


// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.',
// }

const materials = ['wood', 'metal', 'stone']

const words = {
    elepahnt: "The world's larges land mammal.",
    school: "A place of learning.",
    ice_cream: "A delicious milk-based dessert.",
};

console.log(words)

// num = 16
// if num > 10:
//   print(f"{num} is greater than 10.")
// elif num == 10:
//   print(f"{num} is exactly 10.")
// else:
//   print(f"{num} must be less than 10.")

const num = 16;
    if (num > 10) {
        console.log(`${num} is greater than 10.`);
    }
    else if (num === 10) {
        console.log(`${num} is exactly 10.`);
    }
    else {
        console.log(`${num} must be less than 10.`);
    }

//     for x in range(0,10):
//   print("Doing the same thing over and over.")

for (let x = 0; x < 10; x++) {
    console.log("Doing the same thing over and over.")
}

// base = 5
// for num in range(0,20):
//   print(num + base)

const base = 5;
for (let num = 0; num < 20; num++) {
    console.log(num + base)
}

// total = 0
// for num in range(0,100):
//   total += num

// print(total)

let total = 0;
for (let num = 0; num < 100; num++) {
    console.log(total += num)
}

// for height in range(3,15):
//   if height > 9:
//     print("You can get on the rollercoaster!")
//   else:
//     print("You are too short to ride this rollercoaster.")

for (height = 3; height < 15; height++) {
    if (height > 9) {
        console.log("You can get on the rollercoaster!");
    }
    else {
        console.log('You are too short');
    }
}

// containers = ['purse', 'wallet', 'backback']
// for container in containers:
//   print(container)

const containers = ['purse', 'wallet', 'backback']
let arrayLength = containers.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(containers[i]);
}

// def hello_world():
//   return "Hello world!"

// hello_world()

function helloWorld() {
    console.log("Hello world");
}

helloWorld()


// def add(first_num, second_num):
//   return first_num + second_num

// amount = add(5, 7)
// print(amount)

function add(firstNum, secondNum) {
    return(firstNum + secondNum);
}

let amount = add(5, 7);
console.log(amount)

