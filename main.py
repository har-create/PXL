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
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        Pet_Show = 1
    }
}
let Money = 0
let Pet_Show = 0
Pet_Show = 1
Money = 10
basic.forever(function () {
    let Fat = 0
    if (Fat == 1) {
        basic.showString("PET IS FAT")
        music.setVolume(255)
    }
    if (0 == 0) {
    	
    } else if (false) {
    	
    }
    while (Pet_Show == 1) {
        led.setBrightness(255)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
