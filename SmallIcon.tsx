import React from "react";
import {Image, View} from "react-native";

interface Prop {
  faceID: any,
  bounds: any,
  img_src: any,
  y: number,
  scale: number,
}

export default class SmallIcon extends React.Component<Prop, {}> {
  render() {
    let {faceID, bounds, img_src, y, scale} = this.props;

    return <View
      key={faceID.toString() + '-' + y.toString()}
      style={{
        position: 'absolute',
        width: bounds.size.width * scale,
        height: bounds.size.height * scale,
        left: bounds.origin.x + bounds.size.width * (0.5 - 0.5 * scale + 2 * (y + 1) * scale),
        top: bounds.origin.y - bounds.size.height * (0.1 + scale),
        transform: [
          {perspective: 600},
        ]
      }}>
      <Image
      source={img_src}
      style={{
        position: 'absolute',
        width: bounds.size.width * scale,
        height: bounds.size.width * scale,
      }}/>
    </View>;
  }
}
