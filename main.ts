radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber < dice) {
        basic.showIcon(IconNames.Happy)
        win += 1
        if (win == 3) {
            basic.showString("U WON")
            radio.sendString("U LOST")
            dice = 0
            win = 0
        }
    } else if (receivedNumber > dice) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let dice = 0
let win = 0
radio.setGroup(1)
win = 0
