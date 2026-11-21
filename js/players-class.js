class PlayerTwoOSix_Players {
    constructor() {
        this.uniqueID = Math.random().toString(36).substr(2, 9); // Generate a random unique ID
        this.name = undefined;
        this.symbol = undefined;
        this.score = 0;
        this.isReady = false;
    }
}