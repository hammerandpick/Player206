class PlayerTwoOSix {
    oGameStateJSON = {};
    constructor() {
        // Initialize the gamestateJSON object with the player's name
        // {"key":"status","timestamp":1730000000000,"value":{"ready":true}}
        this.oGameStateJSON = {                
            "game": "Player Two O'Six",
            "timestamp": Date.now(),
            "value": {
                "ready": true
            }
        };
    }
    getName() {
        return this.oGameStateJSON.game;
    }
    GameStateToJSON() {
        return JSON.stringify(this.oGameStateJSON);
    }
    GameStateFromJSON(jsonString) {
        try {
            this.oGameStateJSON = JSON.parse(jsonString);
        } catch (error) {
            console.error("Invalid JSON string:", error);
        }
    }
}