var menuState = {
    
    create: function(){
        game.add.image(0,0 , 'skyfield1');
        
        this.helloSound = game.add.audio('helloSound');
        this.helloSound.play();
        
        var nameLabel = game.add.text(game.width/2, -100, 'Jungle Bird', {font: '70px Lobster', fill: '#F5450C' });
        nameLabel.anchor.setTo(0.5, 0.5);
        
        game.add.tween(nameLabel).to({y: 80}, 1500).easing(Phaser.Easing.Bounce.Out).start();
        
        var goL;
                if (game.device.desktop) {
                    goL = 'Press left or right for new adventure';
                }
                else {
                    goL = 'Touch the screen to start';
                }
        
        var goLabel = game.add.text(game.width/2, 300, goL, {font: '30px Lobster', fill: '#CD5C5C ' });
        goLabel.anchor.setTo(0.5, 0.5);
        
            
        
        //Add Frenzy and wave motion
        var frenzyLable = game.add.text(530, 120, 'FRENZY', {font: '30px Lobster', fill: '#FFD700' });
        
        frenzyLable.anchor.setTo(0.5, 0.5);
        
        game.add.tween(frenzyLable).to({angle: -4}, 100).to({angle: 4 }, 1000 ).to({angle:0}, 100).loop().start();
        
        
        
        //Letting game start
        if (!game.device.desktop) {
            game.input.onDown.add(this.start, this);
            }
        var leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        leftKey.onDown.add(this.start, this);
        
        var rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        rightKey.onDown.add(this.start, this);
        
        
        
    },
    
//     reAlphabet: function(myGround, myAlphabet){
//        setTimeout(function(){ 
//            
//            myAlphabet.y = -40;
//            myAlphabet.body.allowGravity = false;
//            myAlphabet.body.velocity.y = 0;
//        
//            var randomAlp1 = Math.floor(0 + (Math.random() *26));
//            game.global['char'+randomAlp1].body.gravity.y = 50 + (Math.random() *80);
//            game.global['char'+randomAlp1].body.velocity.y = 100;
//        
//        }, 1000);
//        
//        
//    },
    
    start: function() {
        game.state.start('play');
    }
        
}