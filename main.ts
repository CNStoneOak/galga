controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart`, spacePlane, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
info.setLife(3)
spacePlane = sprites.create(img`
    c c . . . . . . . . . . . . . . 
    c c c . . . . . . . . . . . . . 
    c c c c . . . . . . . . . . . . 
    c c c f . . . . . . . . . . . . 
    c c c f e . . . . . . . . . . . 
    c c e f e c . . . . . . . . . . 
    e e e c 2 c e e . . . . . . . . 
    e e 2 c 2 c 2 e e f c f c c c c 
    2 2 2 e 2 e 4 4 2 f 2 f b d d d 
    2 2 2 e 4 e e e . . . . . . . . 
    2 2 2 f e e . . . . . . . . . . 
    2 4 4 f e . . . . . . . . . . . 
    4 2 2 e . . . . . . . . . . . . 
    2 2 e e . . . . . . . . . . . . 
    e e e . . . . . . . . . . . . . 
    e e . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . 8 8 
        . . . . . . . . . . . . . 8 8 8 
        . . . . . . . . . . . . 8 8 6 6 
        . . . . . . . . . . . . 8 6 6 9 
        . . . . . . . . . . . 8 f 9 9 6 
        . . . . . . . . . . 8 8 f 6 6 6 
        . . . . . . . . 8 8 8 9 e 6 6 6 
        d d d b f 6 f 6 9 9 8 6 e 6 6 6 
        c c c c f c f 8 8 6 c 6 c 6 8 8 
        . . . . . . . . 8 8 c 6 c 8 8 8 
        . . . . . . . . . . c 8 f 8 8 8 
        . . . . . . . . . . . 8 f 8 8 8 
        . . . . . . . . . . . . f 8 8 8 
        . . . . . . . . . . . . 8 8 8 8 
        . . . . . . . . . . . . . 8 8 8 
        . . . . . . . . . . . . . . 8 8 
        `, SpriteKind.Enemy)
    myEnemy.setVelocity(-100, 0)
    myEnemy.setPosition(160, randint(5, 115))
    myEnemy.setFlag(SpriteFlag.AutoDestroy, true)
})
