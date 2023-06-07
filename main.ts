input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . # # # .
        # # # # #
        . # # # .
        `)
    music.playMelody("C5 C5 B B C5 C5 B B ", 1000)
    music.playMelody("C5 C5 B B C5 C5 B B ", 1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . # . .
        . # . # .
        . . . . .
        `)
    music.playMelody("C5 C5 B B A A G G ", 4600)
    music.playMelody("C5 C5 B B A A G G ", 4600)
    music.playMelody("C5 C5 B B A A G G ", 4600)
    music.playMelody("C5 C5 B B A A G G ", 4600)
})
