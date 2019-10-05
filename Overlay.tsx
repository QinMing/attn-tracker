import React from "react";

export const attentionScore = (
    rollAngle: number,
    yawAngle: number,
    leftEyeOpenProbability: number,
    rightEyeOpenProbability: number) => (

  0.25 * (1 - distToCenter(rollAngle))
  + 0.25 * (1 - distToCenter(yawAngle))
  + 0.25 * leftEyeOpenProbability
  + 0.25 * rightEyeOpenProbability
);

function distToCenter(angle: number) {
    if (angle > 180) {
        return (360.0 - angle) / 90.0;
    } else {
        return angle / 90.0;
    }
}
