input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.showIcon(IconNames.Ghost)
})
basic.forever(function () {
	
})
