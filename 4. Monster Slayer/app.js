const getRandomValue = (min, max) => {
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    return randomValue;
}

const app = Vue.createApp({
    data() {
        return {
            healthMonster: 100,
            healthPlayer: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        }
    },
    computed: {
        barStyleMonster() {
            return {width: this.healthMonster + '%'};
        },
        barStylePlayer() {
            return {width: this.healthPlayer + '%'};
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        healthPlayer(value) {
            if (value <= 0 && this.healthMonster <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        healthMonster(value) {
            if (value <= 0 && this.healthPlayer <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
    },
    methods: {
        startGame() {
            this.healthMonster = 100;
            this.healthPlayer = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            if (this.healthMonster - attackValue < 0) {
                this.healthMonster = 0;
            } else {
                this.healthMonster -= attackValue;
            }
            this.addLogMessage('player', 'attack', attackValue);
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(5, 12);
            if (this.healthPlayer- attackValue < 0) {
                this.healthPlayer = 0;
            } else {
                this.healthPlayer -= attackValue;
            }
            this.addLogMessage('monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            const attackValue = getRandomValue(10, 25);
            this.healthMonster -= attackValue;
            if (this.healthMonster - attackValue < 0) {
                this.healthMonster = 0;
            } else {
                this.healthMonster -= attackValue;
            }
            this.addLogMessage('player', 'special attack', attackValue);
            this.attackPlayer()
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.healthPlayer + healValue >= 100) {
                this.healthPlayer = 100;
            } else {
                this.healthPlayer += healValue;
            }
            this.currentRound = 0;
            this.addLogMessage('player', 'heal', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.addLogMessage('player', 'surrender');
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    }
});

app.mount('#game')