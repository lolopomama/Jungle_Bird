var playState = {
    
    create: function(){
        
        tilesprite = game.add.tileSprite(0, 0, 360, 640, 'Skyfield');

        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function(){
        
        if (cursors.left.isDown)    {
            tilesprite.tilePosition.x += 8;
        }

        else if (cursors.right.isDown) {
            tilesprite.tilePosition.x -= 8;
        }
    
    },
}