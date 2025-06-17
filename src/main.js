const taskManager = require('./managers/taskManager');
const spawnManager = require('./managers/spawnManager');
const creepManager = require('./managers/creepManager');
const config = require('./config');

module.exports.loop = function() {
    const room = Object.values(Game.rooms).filter(room =>
        room.controller && room.controller.my
    )[0];

    if (!room) {
        console.error("Error: No room found, script cannot run.");
    }

    spawnManager.run(config, room);
};
