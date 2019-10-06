import React from 'react';
import {FaceFeature} from 'expo-face-detector';
import {Image, StyleSheet, Text, View} from 'react-native';
import {attentionScore} from "./Overlay";
import ScoredIcon from "./ScoredIcon";
import bed_img from "./bed.png"

const landmarkSize = 2;
const iconScale = 0.2;

export const scaledFace = (scale: number, debug: boolean) => function({
  faceID,
  bounds,
  rollAngle,
  yawAngle,
  leftEyeOpenProbability,
  rightEyeOpenProbability,
}: FaceFeature) {
  if (debug) {
    return <View key={faceID}>
      <ScoredIcon
        key={faceID.toString() + "-score-icon"}
        faceId={faceID}
        attentionScore={attentionScore(rollAngle, yawAngle, leftEyeOpenProbability, rightEyeOpenProbability)}
        faceBounds={bounds}
        scale={iconScale * 2}/>
      <View
        key={faceID.toString() + "-square"}
        style={[
          styles.face,
          {
            width: bounds.size.width * scale,
            height: bounds.size.height * scale,
            left: bounds.origin.x * scale,
            top: bounds.origin.y * scale,
            transform: [
              {perspective: 600},
              {rotateZ: `${rollAngle!.toFixed(0)}deg`},
              {rotateY: `${yawAngle!.toFixed(0)}deg`},
            ],
          }
        ]}>
        <Text style={styles.faceText}>debug {debug}</Text>
        <Text style={styles.faceText}>score {attentionScore(rollAngle, yawAngle, leftEyeOpenProbability, rightEyeOpenProbability)}</Text>
        <Text style={styles.faceText}>scale: {scale!.toFixed(3)}</Text>
      </View>
    </View>;
  } else {
    return <View key={faceID}>
      <ScoredIcon
        key={faceID.toString() + "-score-icon"}
        faceId={faceID}
        attentionScore={attentionScore(rollAngle, yawAngle, leftEyeOpenProbability, rightEyeOpenProbability)}
        faceBounds={bounds}
        scale={iconScale * 2}/>
      {smallIcons(faceID, bounds)}
    </View>;
  }
}

function smallIcons(faceID: any, bounds: any) {
  let icons = [];
  if (faceID % 2 === 0) {
    icons.push(smallIcon(faceID, bounds, bed_img, icons.length));
  }
  return icons;
}
function smallIcon(faceID: any, bounds: any, img_src: any, y: number) {
  return <View
    key={faceID.toString() + "-bed-icon"}
    style={{
      position: 'absolute',
      width: bounds.size.width * iconScale,
      height: bounds.size.height * iconScale,
      left: bounds.origin.x + bounds.size.width * (0.5 - 0.5 * iconScale + 2 * (y + 1) * iconScale),
      top: bounds.origin.y - bounds.size.height * (0.1 + iconScale),
      transform: [
        {perspective: 600},
      ]
    }}>
    <Image
      source={bed_img}
      style={{
        position: 'absolute',
        width: bounds.size.width * iconScale,
        height: bounds.size.width * iconScale,
      }}/>
  </View>

}

export const scaledLandmarks = (scale: number) => (face: FaceFeature) => {
  const renderLandmark = (position?: { x: number; y: number }) =>
    position && (
      <View
        style={[
          styles.landmark,
          {
            left: (position.x - landmarkSize / 2) * scale,
            top: (position.y - landmarkSize / 2) * scale,
          },
        ]}
      />
    );
  // console.log('landmark', face);
  return (
    <View key={`landmarks-${face.faceID}`}>
      {renderLandmark(face.leftEyePosition)}
      {renderLandmark(face.rightEyePosition)}
      {renderLandmark(face.leftEarPosition)}
      {renderLandmark(face.rightEarPosition)}
      {renderLandmark(face.leftCheekPosition)}
      {renderLandmark(face.rightCheekPosition)}
      {renderLandmark(face.leftMouthPosition)}
      {renderLandmark(face.mouthPosition)}
      {renderLandmark(face.rightMouthPosition)}
      {renderLandmark(face.noseBasePosition)}
      {renderLandmark(face.bottomMouthPosition)}
    </View>
  );
};

export const landmarks = scaledLandmarks(1);

const styles = StyleSheet.create({
  transpFace: {
    padding: 10,
    borderWidth: 0,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD70000',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
});
