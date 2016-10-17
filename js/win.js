var winState = {
    
    create: function(){
        game.add.image(0,0 , 'winWallpaper');
        this.winSound = game.add.audio('congrat');
        this.winSound.play();
        
        var winLabel = game.add.text(game.width/2, -100, 'Congratulation...', {font: '80px Lobster', fill: '#F5450C' });
        winLabel.anchor.setTo(0.5, 0.5);
        
        game.add.tween(winLabel).to({y: 80}, 1500).easing(Phaser.Easing.Bounce.Out).start();
        this.cursor = game.input.keyboard.createCursorKeys();
        
        this.player = game.add.sprite(game.width/2, -400 ,'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('right', [3], 8, true );
        this.player.animations.add('left', [0], 8 ,true);
        this.player.animations.add('top',[2], 8 ,true);
        
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = -400;
        
        var goL;
                if (game.device.desktop) {
                    goL = 'Press up to continune';
                }
                else {
                    goL = 'Touch the screen to play again';
                }
        
        var goLabel = game.add.text(game.width/2, 300, goL, {font: '45px Lobster', fill: '#9BFF00' });
        goLabel.anchor.setTo(0.5, 0.5);
        
        if (!game.device.desktop) {
            game.input.onDown.add(this.nextStage, this);
            }
        
    },
    
    update: function() {
       if (this.cursor.up.isDown){
        this.nextStage();
        }
    },
    
    nextStage: function() {
        
            game.state.start('menu');
            
        
    },
    
}