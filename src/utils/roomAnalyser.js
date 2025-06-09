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

    /**
     * Run this every like 10 ticks to save a bit on scanning.
     */
    scanPopulation() {
        if (!Memory.hasOwnProperty('creepPopulation') || Game.time % 10 !== 0) {
            let creepPopulation = {};
            const creeps = room.find(FIND_MY_CREEPS);

            forEach(creeps, creep => {
                creepPopulation[creep.memory.role] ? creepPopulation[creep.memory.role]++ : creepPopulation[creep.memory.role] = 1;
            });

            Memory.creepPopulation = creepPopulation;
        }

        return Memory.creepPopulation;
    }
}