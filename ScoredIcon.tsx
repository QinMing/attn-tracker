import gauge_25 from "./Gauge_25.png"
import gauge_50 from "./Gauge_50.png"
import gauge_75 from "./Gauge_75.png"
import gauge_100 from "./Gauge_100.png"
import {Image, View} from "react-native";
import React from "react";
//import bodyframe from "./Body_Frame.png";
import faceframe from "./FaceFrame.png";

type Point = { x: number; y: number };

interface Prop {
  faceId: number,
  attentionScore: number,
  faceBounds: {
    size: {
      width: number;
      height: number;
    };
    origin: Point;
  },
  scale: number,
}

export default class ScoredIcon extends React.Component<Prop, {}> {
  render() {
    const {faceId, attentionScore, faceBounds, scale} = this.props;
    let imageSource;
    if (attentionScore < 0.25) {
      imageSource = gauge_25
    } else if (attentionScore < 0.5) {
      imageSource = gauge_50
    } else if (attentionScore < 0.75) {
      imageSource = gauge_75
    } else {
      imageSource = gauge_100
    }
    return (
      <View
        key={faceId.toString() + "-score-icon-image"}
        style={{
          position: 'absolute',
          width: faceBounds.size.width * scale,
          height: faceBounds.size.height * scale,
          left: faceBounds.origin.x + faceBounds.size.width * (0.5 - 0.5 * scale),
          top: faceBounds.origin.y - faceBounds.size.height * (0.1 + scale),
          transform: [
            {perspective: 600},
          ]
        }}>
        <Image
          source={imageSource}
          style={{
            position: 'absolute',
            width: faceBounds.size.width * scale,
            height: faceBounds.size.height * scale,
          }}/>
          <Image
            source={faceframe}
            style={{
              position: 'absolute',
              width: faceBounds.size.width * scale,
              height: faceBounds.size.height * scale,
              top: faceBounds.origin.y + faceBounds.size.height * (0.5-0.5*scale),
            }}/>
      </View>
    );
  }
}
