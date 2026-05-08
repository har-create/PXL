def Love2():
    if input.button_is_pressed(Button.A):
        radio.set_group(1)
        radio.send_number(0)
        basic.show_icon(IconNames.HEART)

def on_logo_pressed():
    if True:
        if Money >= 5:
            basic.show_string("FOOD BOUGHT")
        else:
            basic.show_string("" + str((5 - Money)))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Money = 0
Fat = False
Money = 10

def on_forever():
    if Fat == True:
        pass
    if True:
        basic.show_leds("""
            . . . . .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            """)
basic.forever(on_forever)
