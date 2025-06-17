const roomAnalyzer = require('utils/roomAnalyser');
const config = require("../config");

module.exports = {
    run(room) {
        const priorityRole = this.getPriorityRole(room);

        if (priorityRole) {
            const spawn = Memory.spawn ? Game.getObjectById(Memory.spawn) : roomAnalyzer.spawnScan(room);
            spawn.spawnCreep(this.getBodyType(priorityRole, room), priorityRole + Game.time, {
                memory: {
                    role: priorityRole
                }
            });
        }
    },

    getPriorityRole(room) {
        const population = roomAnalyzer.scanPopulation(room);
        let prioRole;
        // Return priority based on the population, check mincount and population

        population.forEach(role => {
            if (population[role] < config.CREEP_POPULATION[role].minCount) {
                if (config.CREEP_POPULATION[role].priority > config.CREEP_POPULATION[prioRole].priority) {
                    prioRole = role;
                }
            }
        });

        return prioRole;
    },

    getBodyType(role, room) {
        const roomEnergy = room.storage.store.energy;
        const energyLevel = (() => {
            if (roomEnergy >= (config.ROOM_SETTINGS.MINIMUM_ENERGY + config.CREEP_CONFIGS[role].basic.cost)) {
                return 'HIGH';
            } else if (roomEnergy >= config.ROOM_SETTINGS.MINIMUM_ENERGY) {
                return 'MEDIUM';
            } else {
                return 'LOW';
            }
        })();

        switch (energyLevel) {
            case 'HIGH':
                return config.CREEP_CONFIGS[role].standard.body;
            case 'MEDIUM':
                return config.CREEP_POPULATION[role].basic.body;
            case 'LOW':
                return config.CREEP_CONFIGS.emergency.body;
        }
    }
};
