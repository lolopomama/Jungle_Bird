var game = new Phaser.Game(800, 400, Phaser.AUTO, 'gameDiv');

//define global var

game.global = {
    score: 0
};

//Add all state

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('over', overState);
game.state.add('win' , winState);



//start 'boot state

game.state.start('boot');