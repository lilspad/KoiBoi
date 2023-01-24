var endScene = new Phaser.Scene('end');

endScene.create = function() {

    this.add.text(400, 200, "KoiBoi's belly is very happy now.")
    .setOrigin(0.5, 0.5);

    this.add.text(400, 250, "Thanks!", {font: "bold 28px courier"})
    .setOrigin(0.5, 0.5);
}