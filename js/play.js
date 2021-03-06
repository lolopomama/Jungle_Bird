var self;
var playState = {
    
    create: function(){
        
        self = this;
        //Add background
        game.add.image(0,0 , 'skyfield1');
        this.music = game.add.audio('bgSong');
        this.music.loop = true;
        this.music.play();
        
        if (!game.device.desktop) {
            this.addMobileInputs();
        }
        
        this.dieSound = game.add.audio('dieSound');
        this.coinSound = game.add.audio('coinSound');
        this.jumpSound = game.add.audio('jumpSound');
        
        game.global.getSound = game.add.audio('collectAlp');
        game.global.getWrongSound = game.add.audio('collectWrongAlp');
        //Add player
        
        this.player = game.add.sprite(game.width/2, 320 ,'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('right', [3], 8, true );
        this.player.animations.add('left', [0], 8 ,true);
        this.player.animations.add('top',[2], 8 ,true);
        
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 400;
        
        
        this.cursor = game.input.keyboard.createCursorKeys();
        
        // Display the score
        game.global.lifeLabel = game.add.text(700, 30, 'Life: 3',{ font: '25px Lobster', fill: '#00FFFF' });
        game.global.life = 3;
        
        //Add Alphabet
//        this.alphabet = game.add.group();
//        this.alphabet.enableBody = true;
//        this.alphabet.createMultiple(10, 'alphabet');
//        game.time.events.loop(2200, this.addAlphabet, this);
        
        this.alphabet = game.add.group();
        var myFrame = 30;
        for(var i=0; i<26;i++){
            game.global['char'+i] = game.add.sprite(i*myFrame,-30, 'alphabet', i, this.alphabet);  
            game.physics.arcade.enable(game.global['char'+i]);
            game.global['char'+i].name = i;
//            this['char'+i].body.gravity.y = 100 + (Math.random() *500);
//            this['char'+i].body.velocity.x = 100 * game.rnd.pick([-1, 1]);
        }
        this.alphabet.enableBody = true;
        
        
        
        var randomAlp1 = Math.floor(0 + (Math.random() *26));
        var randomAlp2 = Math.floor(0 + (Math.random() *26));
        var randomAlp3 = Math.floor(0 + (Math.random() *26));
        var randomAlp4 = Math.floor(0 + (Math.random() *26));
        var randomAlp5 = Math.floor(0 + (Math.random() *26));
        
        
        
        while(randomAlp1 == randomAlp2 || randomAlp1 == randomAlp3 || randomAlp2 == randomAlp3 ||randomAlp4 == randomAlp1 || randomAlp4 == randomAlp2  || randomAlp4 == randomAlp3 ){
            if(randomAlp1 == randomAlp2) {
                randomAlp1 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp1 == randomAlp3) {
                randomAlp3 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp2 == randomAlp3) {
                randomAlp2 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp4 == randomAlp1){
                randomAlp4 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp4 == randomAlp2){
                randomAlp3 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp4 == randomAlp3){
                randomAlp4 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp5 == randomAlp1){
                randomAlp5 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp5 == randomAlp2){
                randomAlp5 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp5 == randomAlp3){
                randomAlp5 = Math.floor(0 + (Math.random() *26));
            }
    }
        
//        console.log(randomAlp1);
//        console.log(randomAlp2);
//        console.log(randomAlp3);
        
        game.global['char'+randomAlp1].body.gravity.y = 50 + (Math.random() *80);
        game.global['char'+randomAlp2].body.gravity.y = 50 + (Math.random() *80);
        game.global['char'+randomAlp3].body.gravity.y = 50 + (Math.random() *80);
        game.global['char'+randomAlp4].body.gravity.y = 50 + (Math.random() *80);
        game.global['char'+randomAlp5].body.gravity.y = 50 + (Math.random() *80);
        
        
        
        
        
        this.ground = game.add.sprite(0, 360 ,'ground');
        this.ground.scale.setTo(4, 1);
        this.ground.anchor.setTo(0, 0);
        game.physics.arcade.enable(this.ground);
        this.ground.body.immovable = true;
        this.ground.alpha = 0;
        
        this.wall1 = game.add.sprite(-20,0, 'wall');
        this.wall1.scale.setTo(1,2);
        game.physics.arcade.enable(this.wall1);
        this.wall1.body.immovable = true;
        this.wall1.alpha = 0.5;
        
        this.wall2 = game.add.sprite( 800 , 0, 'wall');
        this.wall2.scale.setTo(1,2);
        game.physics.arcade.enable(this.wall2);
        this.wall2.body.immovable = true;
        this.wall2.alpha = 0.5;
        
        
        

        game.global.wordArray = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        
        game.global.word = ['BIRD','ANT','CAT','PIE','APPLE'];
        var r = Math.floor(Math.random()* game.global.word.length);
        
        //เอามาเชื่อมกันนะเออ 
        //pick one of the word from array ,using global because we cannot spcify this. in function anymore <3
        
        game.global.currentWord = game.global.word[r].toUpperCase();
        game.global.word.splice(r, 1);
        
        
        
        console.log(game.global.currentWord);
        console.log(game.global.word);
        
        
        this.wordLabel = game.add.text(game.width/2, 340, game.global.currentWord,{ font: '35px Oswald', fill: '#9ACD32' });
        this.wordLabel.anchor.setTo(0,0 );
        
        game.global.currentPosition = 0;
        
        //change color after we pick the right alphabet
        
        this.getWordLabel = game.add.text(game.width/2, 340, "",{ font: '35px Oswald', fill: '#BA55D3' });
        this.getWordLabel.anchor.setTo(0,0 );
//        this.collectedWord = "";
        },
    
        
  
    
    update: function(){
        game.physics.arcade.collide(this.player, this.ground);
        game.physics.arcade.collide(this.player, this.wall1);
        game.physics.arcade.collide(this.player, this.wall2);
        game.physics.arcade.collide(this.ground, this.alphabet, this.reAlphabet);
        game.physics.arcade.overlap(this.player, this.alphabet, this.collectAlphabet);
//        this.moveBackground();
        this.movePlayer();
        this.nextWin();
        
//        if(!this.player.inWorld){
//            this.playerDie();
//        }
    
    },
    
    nextWin: function(){
            if(game.global.currentPosition == game.global.currentWord.length){
                this.music.stop();
                game.state.start('win');
            }
    },
    
    reAlphabet: function(myGround, myAlphabet){
//        setTimeout(function(){ 
            
            myAlphabet.y = -40;
//            myAlphabet.body.allowGravity = false;
            myAlphabet.body.velocity.y = 0;
        
            var randomAlp1 = Math.floor(0 + (Math.random() *26));
            game.global['char'+randomAlp1].body.gravity.y = 50 + (Math.random() *80);
            game.global['char'+randomAlp1].body.velocity.y = 100;
        
//        }, 100);
        
        
    },
    
    collectAlphabet: function(myPlayer, myAlphabet) {
        //does word are = currnt postion in our word ไหม
        
        
        
        if(game.global.wordArray[myAlphabet.name] == game.global.currentWord[game.global.currentPosition]){
            
            self.getWordLabel.setText(self.getWordLabel.text + game.global.currentWord[game.global.currentPosition] );
            game.global.currentPosition++;

//            self.collectedWord += game.global.wordArray[myAlphabet.name];
            game.global.getSound.play();
//            console.log("hey = "+self.collectedWord );
//            self.NextWord();
                
        }
        
        else{
            game.global.life--;
            
            if(game.global.life <= 0){
                self.playerDie();
            }else {
                game.global.lifeLabel.setText("Life: " + game.global.life);
                game.global.getWrongSound.play();
            }
        }
        
        
        console.log(game.global.wordArray[myAlphabet.name]);
        
        myAlphabet.y = -40;
        myAlphabet.body.allowGravity = false;
        myAlphabet.body.velocity.y = 0;
        
        var randomAlp1 = Math.floor(0 + (Math.random() *26));
        game.global['char'+randomAlp1].body.gravity.y = 50 + (Math.random() *80);
        game.global['char'+randomAlp1].body.velocity.y = 100;
    },
    
    playerDie: function() {
            this.music.stop();
            this.dieSound.play();

        
            game.state.start('over');
        
    },
    
    addMobileInputs: function() {

            var jumpButton = game.add.sprite(650, 300, 'jumpButton');
            jumpButton.inputEnabled = true;
            jumpButton.alpha = 0.5;
            jumpButton.events.onInputDown.add(this.jumpPlayer, this);
        
        // Movement variables
            this.moveLeft = false;
            this.moveRight = false;

            var leftButton = game.add.sprite(50, 300, 'leftButton');
            leftButton.inputEnabled = true;
            leftButton.alpha = 0.5;
            leftButton.events.onInputOver.add(this.setLeftTrue, this);
            leftButton.events.onInputOut.add(this.setLeftFalse, this);
            leftButton.events.onInputDown.add(this.setLeftTrue, this);
            leftButton.events.onInputUp.add(this.setLeftFalse, this);

            var rightButton = game.add.sprite(130, 300, 'rightButton');
            rightButton.inputEnabled = true;
            rightButton.alpha = 0.5;
            rightButton.events.onInputOver.add(this.setRightTrue, this);
            rightButton.events.onInputOut.add(this.setRightFalse, this);
            rightButton.events.onInputDown.add(this.setRightTrue, this);
            rightButton.events.onInputUp.add(this.setRightFalse, this);
        
            
    },
    
    jumpPlayer: function() {

        if (this.player.body.touching.down) {

            this.player.body.velocity.y = -320;
            this.jumpSound.play();
        }
    },
    
    setLeftTrue: function() {
            this.moveLeft = true;
    },
    
    setLeftFalse: function() {
            this.moveLeft = false;
    },
    
    setRightTrue: function() {
            this.moveRight = true;
    },
    
    setRightFalse: function() {
            this.moveRight = false;
    },

    
//    moveBackground: function(){
//              if (this.cursor.left.isDown)    {
//            tilesprite.tilePosition.x += 1;
//            }
//
//            else if (this.cursor.right.isDown) {
//            tilesprite.tilePosition.x -= 1;
//            }
//        
//        
//    },
    
    NextWord: function(){
        if (game.global.currentWord == self.collectedWord ) {
            console.log("next word.");
            var r = Math.floor(Math.random()* game.global.word.length);
            game.global.currentWord = game.global.word[r].toUpperCase();
            game.global.word.splice(r, 1);
            self.wordLabel.setText(game.global.currentWord);
            self.getWordLabel.setText("");
        }
        
    },
    
    movePlayer: function() {

			if (this.cursor.left.isDown || this.moveLeft) {
				this.player.body.velocity.x = -300;
                this.player.animations.play('left'); //Left animation
			}

			else if (this.cursor.right.isDown || this.moveRight) {
				this.player.body.velocity.x = 300;
                this.player.animations.play('right'); //Right animation
			}

			else {
				this.player.body.velocity.x = 0;
                
                
			}

			if (this.cursor.up.isDown && this.player.body.touching.down){
				this.jumpPlayer();
                this.player.body.velocity.y = -320;
                this.player.animations.play('top');
                this.jumpSound.play();
			}
            
            if (game.input.totalActivePointers == 0) {

                this.moveLeft = false;
                this.moveRight = false;
            }
        },
        
    addAlphabet: function() {
            // Get the first dead enemy of the group
            var alp = this.alphabet.getFirstDead();
            // If there isn't any dead enemy, do nothing
            if (!alp) {
                return;
            }
        // Initialize the enemy
            alp.anchor.setTo(0.5, 1);
            alp.reset(game.width/2, 0);
            alp.body.gravity.y = 500;
            alp.body.velocity.x = 100 * game.rnd.pick([-1, 1]);
            alp.body.bounce.x = 1;
            alp.checkWorldBounds = true;
            alp.outOfBoundsKill = true;
        },
    
    
        
    
}