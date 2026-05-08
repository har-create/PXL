input.onPinPressed(TouchPin.P0, function () {
    basic.showString("BUY FOOD?")
    if (input.buttonIsPressed(Button.A)) {
        if (Money >= 5) {
            basic.showString("FOOD BOUGHT")
        } else {
            basic.showString("" + (5 - Money))
        }
    }
})
function Love2 () {
    if (input.buttonIsPressed(Button.A)) {
        radio.setGroup(1)
        radio.sendNumber(0)
        basic.showIcon(IconNames.Heart)
    }
}
let Money = 0
Money = 10
basic.forever(function () {
    let Fat = 0
    if (Fat == 1) {
        basic.showString("PET IS FAT")
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
