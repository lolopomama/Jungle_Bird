var overState = {
    
    create: function() {
        
        game.add.image(0,0 , 'dieWallpaper');
        
        var dieLabel = game.add.text(game.width/2, -100, 'Game Over. . .', {font: '70px Lobster', fill: '#FFFFE0' });
        dieLabel.anchor.setTo(0.5, 0.5);
        
        game.add.tween(dieLabel).to({y: 80}, 1500).easing(Phaser.Easing.Bounce.Out).start();
        
        
        this.player = game.add.sprite(game.width/2, 50 ,'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('right', [3], 8, true );
        this.player.animations.add('left', [0], 8 ,true);
        this.player.animations.add('top',[2], 8 ,true);
        
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 400;
    },
}