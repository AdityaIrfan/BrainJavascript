const brain = require('brain.js');
const data = require('./data.json');
const network = new brain.recurrent.LSTM();

const trainingData = data.map(items => ({
    input: items.text,
    output: items.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run('my unit test failed');

console.log(`Category: ${output}`);