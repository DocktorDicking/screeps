module.exports = {

    /**
     * Returns the first spawn it can find.
     */
    spawnScan() {
        const spawns = room.find(FIND_MY_SPAWNS);
        if (spawns.length > 0) {
            Memory.spawn = spawns[0].id;
            return spawns[0].id;
        }

        console.error("No spawns found in room");
    },


    resourcesScan() {},

    dangerScan() {},

    scanPopulation() {
        if (!Memory.hasOwnProperty('creepPopulation') || Game.time % 10 !== 0) {
            let creepPopulation = {};
            const creeps = room.find(FIND_MY_CREEPS);

            creeps.forEach(creep => {
                creepPopulation[creep.memory.role] ? creepPopulation[creep.memory.role]++ : creepPopulation[creep.memory.role] = 1;
            })

            Memory.creepPopulation = creepPopulation;
        }

        return Memory.creepPopulation;
    }
}
