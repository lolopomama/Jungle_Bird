var loadState = {
    preload: function() {
    
    game.load.image('menuWall', 'assets/menuWall.png');
    game.load.image('Skyfield', 'assets/wallpaper.png');
    
        
    game.load.audio('bgSong', [ 'assets/music.mp3']);
    
    },
    
    create: function() {
        game.state.start('menu');
    }
}