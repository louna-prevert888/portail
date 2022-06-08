input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.showIcon(IconNames.Ghost)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.showIcon(IconNames.TShirt)
    }
})
