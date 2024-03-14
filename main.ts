basic.forever(function () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 40)
        neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
        neZha.setMotorSpeed(neZha.MotorList.M4, 0)
        neZha.setMotorSpeed(neZha.MotorList.M1, 40)
    }
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 20)
        neZha.setMotorSpeed(neZha.MotorList.M4, 20)
    }
    if (PlanetX_Basic.Crash(PlanetX_Basic.DigitalRJPin.J2)) {
        neZha.stopAllMotor()
        basic.pause(2000)
        basic.pause(2000)
        basic.pause(2000)
        basic.pause(2000)
    }
})
