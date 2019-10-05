import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const pictureSize = 150;

interface State {
  selected: boolean;
}

export default class Photo extends React.Component<
  { uri: string; onSelectionToggle: (uri: string, selected: boolean) => void },
  State
> {
  readonly state: State = {
    selected: false,
  };
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  toggleSelection = () => {
    this.setState({ selected: !this.state.selected }, () =>
      this.props.onSelectionToggle(this.props.uri, this.state.selected)
    );
  }

  render() {
    const { uri } = this.props;
    return (
      <TouchableOpacity
        style={styles.pictureWrapper}
        onPress={this.toggleSelection}
        activeOpacity={1}
      >
        <Image style={styles.picture} source={{ uri }} />
        {this.state.selected && <Ionicons name="md-checkmark-circle" size={30} color="#4630EB" />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  pictureWrapper: {
    width: pictureSize,
    height: pictureSize,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});
