var titleScene = new Phaser.Scene("title");

titleScene.create = function() {
    this.add.text(330, 180, "KoiBoi", {
        font: "bold 32px courier"
    });
    this.add.text(220, 220, "Explore the pond and hunt some bugs.")
    var start = this.add.text(350,320, "Start >");
    start.setStyle({
        color: "#000000",
        backgroundColor: '#FFFFFF'
        })
    .setPadding(5)
    .setInteractive()
    .on('pointerdown', () => {
        game.scene.remove('title')
        game.scene.start('game');
    })

}