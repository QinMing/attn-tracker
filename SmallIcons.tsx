import React from "react";
import SmallIcon from "./SmallIcon";
import bed_img from "./bed.png";
import food_img from "./food.png";

export default class ScoredIcons extends React.Component<{faceID: any, bounds: any }, {}> {

  render() {
    const {faceID, bounds} = this.props;
    let icons = [];
    // if (true) {
    //   icons.push(<SmallIcon faceID={faceID} bounds={bounds} img_src={hand_img} scale={0.2} y={icons.length}/>);
    // }
    if (faceID % 2 === 0) {
      icons.push(<SmallIcon faceID={faceID} bounds={bounds} img_src={bed_img} scale={0.2} y={icons.length}/>);
    }
    if (faceID * 7 % 11 * 23 % 2 === 0) {
      icons.push(<SmallIcon faceID={faceID} bounds={bounds} img_src={food_img} scale={0.2} y={icons.length}/>);
    }
    return icons;
  }
}
