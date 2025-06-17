module.exports = {


    buildAndSaveTask() {
        // Builds task and saves it to memory
    },
}

class Task {
    // Object we use for all Tasks
    constructor(type, targetId, roomName) {
        this.id = `${type}_${Game.time}`;
        this.type = type;
        this.targetId = targetId;
    }
}