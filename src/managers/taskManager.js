module.exports = {

    run(room) {
        // Main entry point

    },

    refreshTaskMemory() {
        // Cleans tasks from mem that are marked as completed.
        // Initialize task memory on first run.
    },

    evaluateHarvesterTasks() {
        // Reads tasks from memory, checks resource nodes and the "space" for each resource node.
        // Creates harvester tasks based on available space on a resource node
    },

    evaluateBuilderTasks() {
        // Reads tasks from mem, checks builder tasks and ongoing constructions.
        // Adds or removes them
    },

    evaluateRepairTasks() {
        // Reads tasks from mem, checks repair tasks.
        // Adds new repair tasks
    },

    //Scans room for tasks
    //holds builder tasks and harvester tasks
    //saves tasks to memory using Memory.tasks
    //Keeps track of creeps that are assigned to tasks
}
