import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, ScrollView, TouchableOpacityProps, Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import dash_0_1 from "./dash_0_1.png";
import dash_1_0 from "./dash_1_0.png";
import dash_1_1 from "./dash_1_1.png";

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

interface Prop extends TouchableOpacityProps {
  order: number;
}
interface State {
  photos: string[];
  selected: string[];
}

export default class GalleryScreen extends React.Component<Prop, State> {
  readonly state: State = {
    photos: [],
    selected: [],
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  }

  toggleSelection = (uri: string, isSelected: boolean) => {
    let selected = this.state.selected;
    if (isSelected) {
      selected.push(uri);
    } else {
      selected = selected.filter(item => item !== uri);
    }
    this.setState({ selected });
  }

  saveToGallery = async () => {
    const photos = this.state.selected;

    if (photos.length > 0) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        throw new Error('Denied CAMERA_ROLL permissions!');
      }

      const promises = photos.map(photoUri => {
        return MediaLibrary.createAssetAsync(photoUri);
      });

      await Promise.all(promises);
      alert('Successfully saved photos to user\'s gallery!');
    } else {
      alert('No photos to save!');
    }
  }

  renderPhoto = (fileName: string) => (
    <Photo
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
      onSelectionToggle={this.toggleSelection}
    />
  )

  render() {
    let imgSrc;
    if (this.props.order === 1) {
      imgSrc = dash_0_1;
    } else if (this.props.order === 2) {
      imgSrc = dash_1_0;
    } else {
      imgSrc = dash_1_1;
    }
    return (
      <TouchableOpacity style={{flex: 1}} onPress={this.props.onPress}>
        <Image source={imgSrc} style={{flex: 1, aspectRatio: 9/19}}/>
      </TouchableOpacity>
    );
    // return (
    //   <View style={styles.container}>
    //     <View style={styles.navbar}>
    //       <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
    //         <MaterialIcons name="arrow-back" size={25} color="white" />
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.button} onPress={this.saveToGallery}>
    //         <Text style={styles.whiteText}>Save selected to gallery</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <ScrollView contentContainerStyle={{ flex: 1 }}>
    //       <View style={styles.pictures}>
    //         <Image source={food_img}/>
    //       </View>
    //       {/*<View style={styles.pictures}>{this.state.photos.map(this.renderPhoto)}</View>*/}
    //     </ScrollView>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4630EB',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  button: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  },
});
