const taskManager = require('./managers/taskManager');
const spawnManager = require('./managers/spawnManager');
const creepManager = require('./managers/creepManager');
const config = require('./config');

module.exports.loop = function() {
    spawnManager.run(config);

};