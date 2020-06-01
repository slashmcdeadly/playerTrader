// globally scoped variables

const team = {
    scottsmen: {}, 
    bedtimePlayers: {}, 
    hartFoundation: {}, 
    communist: {}, 
    goons: {}, 
    pluss: {}, 
    hotelSeattle: {}, 
    dogs: {}, 
    timbersnakes: {}, 
    vultures: {}, 
    thrashers: {}, 
    backes: {}, 
    raccoons: {}, 
    internets: {}
};

let scottsmen, bedtimePlayers, hartFoundation, communist, goons, pluss, hotelSeattle, dogs, timbersnakes, vultures, thrashers, backes, raccoons, internets = {
    players: {}, 
    manager: {}, 
    prestige: '', 
    buildStatus: ''
};

const players = {
    positionPlayer: {}, 
    goalie: {}
};

const positionPlayer = {
    playerName: '',
    shootingPercentage: 0,
    shotsPerGame: 0,
    hitsPerGame: 0,
    blocksPerGame: 0,
    shotsPerSixty: 0,
    hitsPerSixty: 0,
    ppTime: 0,
    ppPoints: 0,
    shPoints: 0,
    ppg: 0,
    shp: 0,
    goals: 0,
    assists: 0,
    pointsPerSixty: 0,
    potential: 0,
    age: 0,
    playerPosition: '',
    playsTopLine: true,
    isDefenceman: false,
    totalTradeScore: 0
}

const goalie = {
    playerName: '',
    shotsPerGame: 0,
    goalsAgainst: 0,
    games: 0,
    wins: 0,
    shutouts: 0, 
    totalTradeScore: 0
}

const manager = {
    tradeWillingness: 0,
    draftStrategy: '',
    managerName: ''
}


// Scottsmen Team Data 

let plDubois = {
    playerName: 'Pierre Luc Dubois',
    shootingPercentage: 11.4,
    shotsPerGame: 2.26,
    hitsPerGame: 1.21,
    blocksPerGame: 0.71,
    ppTime: 160,
    shPoints: 0,
    ppp: 10,
    goals: 18,
    assists: 31,
    potential: 85,
    age: 22,
    playerPosition: 'center',
    playsTopLine: true,
    isDefenceman: false,
    totalTradeScore: tradeScore()
}

let bPoint = {
    playerName: 'Brayden Point',
    shootingPercentage: 17.7,
    shotsPerGame: 2.14,
    hitsPerGame: 0.36,
    blocksPerGame: 0.45,
    ppTime: 197,
    shPoints: 0,
    ppp: 13,
    goals: 25,
    assists: 39,
    potential: 100,
    age: 23,
    playerPosition: 'center',
    playsTopLine: true,
    isDefenceman: false,
    totalTradeScore: tradeScore()
}