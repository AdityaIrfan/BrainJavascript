const brain = require('brain.js');

const network = new brain.NeuralNetwork(); // call NeuralNetwork funtion from brain.js

network.train([
    { input: [0,0,0], output: [0] },
    { input: [0,0,1], output: [0] },
    { input: [0,1,1], output: [0] },
    { input: [1,0,1], output: [1] },
    { input: [1,1,1], output: [1] },
]);

const output = network.run([1,0,0]);

console.log(`How if we put 1,0,0. We will get output : ${output}`);