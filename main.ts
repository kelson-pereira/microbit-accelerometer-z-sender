basic.showString("Z SENDER")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(42)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
