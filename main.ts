let Moisture = 0
basic.forever(function () {
    Moisture = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Moisture)
    basic.pause(100)
})
