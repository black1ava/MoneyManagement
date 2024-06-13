import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableWithoutFeedback, ViewStyle} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Modal from 'react-native-modal';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {styles} from './style';
import {AlertPropsType} from '../../types/Alert';

const Alert: React.FC<AlertPropsType> = props => {
  const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const backdropOpacity = useSharedValue<number>(0);

  useEffect(() => {
    if (props.isVisible) {
      setShowBackdrop(true);
      backdropOpacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.linear,
      });
      return;
    }

    backdropOpacity.value = withTiming(0, {
      duration: 300,
      easing: Easing.linear,
    });

    timeoutRef.current = setTimeout(() => {
      setShowBackdrop(false);
    }, 300);
  }, [props.isVisible]);

  const backdropStyle: ViewStyle = useAnimatedStyle<ViewStyle>(() => ({
    opacity: backdropOpacity.value,
  }));

  return (
    <React.Fragment>
      {showBackdrop && (
        <Animated.View style={[styles.backdrop, backdropStyle]}>
          <BlurView
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
            style={styles.backdrop}
          />
        </Animated.View>
      )}
      <Modal
        isVisible={props.isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={300}
        animationOutTiming={300}
        hasBackdrop={false}
        backdropOpacity={0}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={props.onClose}>
            <View style={styles.backdrop} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContainer}></View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default React.memo(Alert);
