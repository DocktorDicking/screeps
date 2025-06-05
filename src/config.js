module.exports = {
    // Room Settings
    ROOM_SETTINGS: {
        // Minimum energy required to start spawning non-emergency creeps
        MINIMUM_ENERGY: 300,
        // Energy level to trigger emergency mode (spawn basic creeps)
        EMERGENCY_ENERGY: 100,
        // How many ticks to wait between status reports
        STATUS_REPORT_FREQUENCY: 50
    },

    // Creep Population Settings
    CREEP_POPULATION: {
        harvester: {
            minCount: 2,
            priority: 1 // Lower number = higher priority
        },
        upgrader: {
            minCount: 1,
            priority: 2
        },
        builder: {
            minCount: 1,
            priority: 3
        },
        repairer: {
            minCount: 1,
            priority: 4
        }
    },

    // Creep Body Configurations
    CREEP_CONFIGS: {
        // Basic creeps for emergency situations
        emergency: {
            body: [WORK, CARRY, MOVE],
            cost: 200
        },
        // Regular creep configurations
        harvester: {
            basic: {
                body: [WORK, CARRY, MOVE, MOVE],
                cost: 250
            },
            standard: {
                body: [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                cost: 400
            },
            advanced: {
                body: [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE],
                cost: 550
            }
        },
        upgrader: {
            basic: {
                body: [WORK, CARRY, MOVE, MOVE],
                cost: 250
            },
            standard: {
                body: [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                cost: 400
            }
        },
        builder: {
            basic: {
                body: [WORK, CARRY, MOVE, MOVE],
                cost: 250
            },
            standard: {
                body: [WORK, WORK, CARRY, CARRY, MOVE, MOVE],
                cost: 400
            }
        }
    },

    // Structure Settings
    STRUCTURES: {
        // Minimum hits for repair tasks
        REPAIR_THRESHOLD: {
            wall: 10000,
            rampart: 10000,
            road: 2000,
            container: 50000
        }
    },
}