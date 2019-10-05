import React from 'react';
import { FaceFeature } from 'expo-face-detector';
import { View, Text, StyleSheet } from 'react-native';

export const scoredIcon = (attentionScore: number) => (
  <Text style={styles.faceText}>face %: {attentionScore}</Text>
);
const styles = StyleSheet.create({
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
