function Love2 () {
    if (input.buttonIsPressed(Button.A)) {
        radio.setGroup(1)
        radio.sendNumber(0)
        basic.showIcon(IconNames.Heart)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        if (Money >= 5) {
            basic.showString("FOOD BOUGHT")
        } else {
            basic.showString("" + (5 - Money))
        }
    }
})
let Money = 0
let Fat = false
Money = 10
basic.forever(function () {
    if (Fat == true) {
    	
    }
    if (true) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
