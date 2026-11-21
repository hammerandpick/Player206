class PlayerTwoOSix {
    oGameStateJSON = {};
    tLastTransmissionTime = 0;
    constructor() {
        // Initialize the gamestateJSON object with the player's name
        // {"key":"status","timestamp":1730000000000,"value":{"ready":true}}
        this.oGameStateJSON = {
            Game: {"value": {"name":"Player Two O'Six", script:""}, "timestamp": Date.now()},
            players: {"value": [], "timestamp": Date.now()},
            StartTime: {"value": Date.now(), "timestamp": Date.now()},
        };
    }
    addPlayer(playerName) {
        var myPlayer = new PlayerTwoOSix_Players();
        myPlayer.name = playerName;
        this.oGameStateJSON.players.value.push(myPlayer);
        console.log(`Added player: ${playerName}`);
        console.log(`Player object:`, myPlayer);
        console.log(`Current players:`, this.oGameStateJSON.players);
    }
    getGameTick(bMilliSec = false) {
        const tick = Date.now() - this.oGameStateJSON.StartTime.value ;
        return bMilliSec ? tick : Math.floor(tick / 1000);
    }
    getGameTime(bAsString = false) {
        const tick = this.getGameTick();
        const hours = Math.floor(tick / 3600);
        const minutes = Math.floor((tick % 3600) / 60);
        const seconds = tick % 60;
        if (bAsString) {
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        return { hours, minutes, seconds };
    }
    getName() {
        return this.oGameStateJSON.Game.value.name;
    }
    getScript() {
        return this.oGameStateJSON.Game.value.script;
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
    sendWithConMan() {
        // preparing the transmission object
        var transmissionObject = {};
        for (const [key, value] of Object.entries(this.oGameStateJSON)) {
            
            if (value.timestamp > this.tLastTransmissionTime) { // Only send if updated since the last transmission
                transmissionObject[key] = {
                "key": key,
                "value": value.value,
                "timestamp": value.timestamp
                };
                console.log(transmissionObject);
            }
        }
        var transmissionArray = Object.values(transmissionObject);
        return JSON.stringify(transmissionArray);
    }
}