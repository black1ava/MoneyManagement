import React from 'react';
import {Modal, View, ModalProps, TouchableWithoutFeedback} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {styles} from './style';
import {AlertPropsType} from '../../types/Alert';

const Alert: React.FC<ModalProps & AlertPropsType> = props => {
  return (
    <Modal visible={props.visible} transparent animationType="fade">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={props.onClose}>
          <BlurView
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
            style={styles.backdrop}
          />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}></View>
      </View>
    </Modal>
  );
};

export default React.memo(Alert);
