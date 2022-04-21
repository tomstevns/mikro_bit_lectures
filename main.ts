input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C C D D C E D C ", 120)
})
input.onButtonPressed(Button.A, function () {
    led.plot(randint(0, 4), randint(0, 4))
    led.plot(randint(0, 4), randint(0, 4))
    led.plot(randint(0, 4), randint(0, 4))
})
input.onPinPressed(TouchPin.P2, function () {
    music.playMelody("C5 A B G A E A B ", 120)
    music.playMelody("A C5 E F G E F G ", 120)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, 0)
    led.unplot(0, 1)
    led.unplot(0, 2)
    led.unplot(0, 3)
    led.unplot(0, 4)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("C5 A B G A E A B ", 120)
})
