input.onButtonPressed(Button.A, function () {
    if (Posición_de_la_paleta > 0) {
        Paleta_1.move(-1)
        Paleta_2.move(-1)
        Posición_de_la_paleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (3 > Posición_de_la_paleta) {
        Paleta_1.move(1)
        Paleta_2.move(1)
        Posición_de_la_paleta += 1
    }
})
function Mover_pelota () {
    basic.pause(450)
    Pelota.move(1)
    Pelota.ifOnEdgeBounce()
    if (Pelota.isTouching(Paleta_1) || Pelota.isTouching(Paleta_2)) {
        Pelota.set(LedSpriteProperty.Y, 0)
        Azar = Math.randomBoolean()
        if (Azar == true) {
            Pelota.turn(Direction.Left, 45)
        } else {
            Pelota.turn(Direction.Right, 45)
        }
        Pelota.ifOnEdgeBounce()
        Puntos += 1
    } else {
        if (Pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString(" PTS:")
            basic.showNumber(Puntos)
        }
    }
}
let Azar = false
let Puntos = 0
let Posición_de_la_paleta = 0
let Pelota: game.LedSprite = null
let Paleta_2: game.LedSprite = null
let Paleta_1: game.LedSprite = null
Paleta_1 = game.createSprite(2, 4)
Paleta_2 = game.createSprite(3, 4)
Pelota = game.createSprite(2, 0)
Posición_de_la_paleta = 2
Puntos = 0
Pelota.turn(Direction.Right, 90)
basic.forever(function () {
    Mover_pelota()
})
