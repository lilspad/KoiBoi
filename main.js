import Phaser from 'phaser';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var sprite;

function preload() {
    game.load.spritesheet('koi', 'assets/sprites/koi-sprite.png', 136, 136, 12);
}

function create() {

    sprite = game.add.sprite(40, 100, 'koi');

    sprite.animations.add('swim');

    sprite.animations.play('swim', 50, true);

    game.add.tween(sprite).to({ x: game.width }, 10000, Phaser.Easing.Linear.None, true);

}

function update() {
    
    if (sprite.x >= 300)
    {
        sprite.scale.x += 0.01;
        sprite.scale.y += 0.01;
    }

}