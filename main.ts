input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        if (Money >= 5) {
            basic.showString("FOOD BOUGHT")
        } else {
            basic.showString("" + (5 - Money))
        }
    }
})
let Love = 0
let Money = 0
let Fat = false
Money = 10
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        Love += 1
    }
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
