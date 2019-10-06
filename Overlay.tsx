import React from "react";

export const attentionScore = (
    rollAngle: number,
    yawAngle: number,
    leftEyeOpenProbability: number,
    rightEyeOpenProbability: number) => (

      (1 - distToCenter(rollAngle))
      * (1 - distToCenter(yawAngle))
      * leftEyeOpenProbability
      * rightEyeOpenProbability
);

function distToCenter(angle: number) {
    if (angle > 180) {
        return (360.0 - angle) / 90.0;
    } else {
        return angle / 45.0;
    }
}
