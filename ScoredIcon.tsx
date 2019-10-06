import gauge_25 from "./Gauge_25.png"
import gauge_50 from "./Gauge_50.png"
import gauge_75 from "./Gauge_75.png"
import gauge_100 from "./Gauge_100.png"
import {Image} from "react-native";
import React from "react";

interface Prop {
  attentionScore: number,
  size: number,
}

export default class ScoredIcon extends React.Component<Prop, {}> {
  render() {
    const {attentionScore, size} = this.props;
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
      <Image
        source={imageSource}
        style={{
          width: size * 0.2,
          height: size * 0.2,
        }}/>
    );
  }
}
