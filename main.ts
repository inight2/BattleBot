class Bot {
    score() {
        let score: number = 0
        sensors.touch1.onEvent(ButtonEvent.Pressed, function () {
            score += 1
            brick.showValue("Score", score, 1)
        })
    }

    attack() {
        motors.mediumA.run(50)
    }

    checkForDistance() {
        sensors.ultrasonic2.onEvent(UltrasonicSensorEvent.ObjectDetected, function () {
            if (sensors.ultrasonic2.distance() <= 50) {
                brick.showNumber(sensors.ultrasonic2.distance(), 1);
            }

        })
    }
}

let bot = new Bot;

bot.score();

bot.checkForDistance();