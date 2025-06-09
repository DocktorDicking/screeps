/*
Checks status on amount of creeps in config
Spawns creeps based on priority and amount

 */
const roomAnalyzer = require('utils/roomAnalyser');

module.exports = {


    run(config) {
        const spawn = Memory.spawn ? Game.getObjectById(Memory.spawn) : roomAnalyzer.spawnScan();

    },

    checkPriority() {
        const population = roomAnalyzer.scanPopulation();
        //TODO
    }
};