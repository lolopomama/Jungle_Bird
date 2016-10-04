var playState = {
    
    create: function(){
        
        //Add background
        tilesprite = game.add.tileSprite(0, 0, 800, 400, 'skyfield1');
        
        this.music = game.add.audio('bgSong');
        this.music.loop = true;
        this.music.play();
        
        this.dieSound = game.add.audio('dieSound');
        this.coinSound = game.add.audio('coinSound');
        this.jumpSound = game.add.audio('jumpSound');
        //Add player
        
        this.player = game.add.sprite(game.width/2, game.height/2 ,'player');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('right', [3], 8, true );
        this.player.animations.add('left', [0], 8 ,true);
        this.player.animations.add('top',[2], 8 ,true);
        
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 400;
        
        
        this.cursor = game.input.keyboard.createCursorKeys();
        
        // Display the score
        this.scoreLabel = game.add.text(30, 30, 'score: 0',{ font: '18px Arial', fill: '#ffffff' });
        
        
        //Add Alphabet
//        this.alphabet = game.add.group();
//        this.alphabet.enableBody = true;
//        this.alphabet.createMultiple(10, 'alphabet');
//        game.time.events.loop(2200, this.addAlphabet, this);
        
        this.alphabet = game.add.group();
        var myFrame = 30;
        for(var i=0; i<26;i++){
            this['char'+i] = game.add.sprite(i*myFrame,-30, 'alphabet', i, this.alphabet);  
            game.physics.arcade.enable(this['char'+i]);
//            this['char'+i].body.gravity.y = 100 + (Math.random() *500);
//            this['char'+i].body.velocity.x = 100 * game.rnd.pick([-1, 1]);
        }
        this.alphabet.enableBody = true;
        
        
        var randomAlp1 = Math.floor(0 + (Math.random() *26));
        var randomAlp2 = Math.floor(0 + (Math.random() *26));
        var randomAlp3 = Math.floor(0 + (Math.random() *26));
        
        while(randomAlp1 == randomAlp2 || randomAlp1 == randomAlp3 || randomAlp2 == randomAlp3){
            if(randomAlp1 == randomAlp2) {
                randomAlp1 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp1 == randomAlp3) {
                randomAlp1 = Math.floor(0 + (Math.random() *26));
            }else if(randomAlp2 == randomAlp3) {
                randomAlp2 = Math.floor(0 + (Math.random() *26));
            }
        }
        console.log(randomAlp1);
        console.log(randomAlp2);
        console.log(randomAlp3);
        
        this['char'+randomAlp1].body.gravity.y = 50 + (Math.random() *200);
        this['char'+randomAlp2].body.gravity.y = 50 + (Math.random() *200);
        this['char'+randomAlp3].body.gravity.y = 50 + (Math.random() *200);
        
        
        game.physics.arcade.collide(this.ground, this.alphabet);
        
        
        
        
        // Initialize the score variable
        this.score = 0;
        
        this.ground = game.add.sprite(0, 300 ,'ground');
        this.ground.scale.setTo(4, 1);
        this.ground.anchor.setTo(0, 0);
        game.physics.arcade.enable(this.ground);
        this.ground.body.immovable = true;
        this.ground.alpha = 0;
        
        this.wall1 = game.add.sprite(-10,0, 'wall');
        this.wall1.scale.setTo(1,2);
        game.physics.arcade.enable(this.wall1);
        this.wall1.body.immovable = true;
        this.wall1.alpha = 0.5;
        
        this.wall2 = game.add.sprite( 790 , 0, 'wall');
        this.wall2.scale.setTo(1,2);
        game.physics.arcade.enable(this.wall2);
        this.wall2.body.immovable = true;
        this.wall2.alpha = 0.5;
        
        game.physics.arcade.collide(this.player, this.wall1, this.wall2);
        
//        this.a = game.add.
        
        
        },
    
        
  
    
    update: function(){
        game.physics.arcade.collide(this.player, this.ground);
        this.moveBackground();
        this.movePlayer();
        
        if(!this.player.inWorld){
            this.playerDie();
        }
    
    },
    
    playerDie: function() {
            this.music.stop();
            this.dieSound.play();

        
            game.state.start('menu');
        
    },
    
    moveBackground: function(){
              if (this.cursor.left.isDown)    {
            tilesprite.tilePosition.x += 1;
            }

            else if (this.cursor.right.isDown) {
            tilesprite.tilePosition.x -= 1;
            }
        
        
    },
    
    
    movePlayer: function() {

			if (this.cursor.left.isDown) {
				this.player.body.velocity.x = -200;
                this.player.animations.play('left'); //Left animation
			}

			else if (this.cursor.right.isDown) {
				this.player.body.velocity.x = 200;
                this.player.animations.play('right'); //Right animation
			}

			else {
				this.player.body.velocity.x = 0;
                
                
			}

			if (this.cursor.up.isDown && this.player.body.touching.down){
				this.player.body.velocity.y = -320;
                this.player.animations.play('top');
                this.jumpSound.play();
                
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
    
    word: function() {
        
        var word = ["bubble", "squid", "apple", "green", "phone"];
        
        },
    
}