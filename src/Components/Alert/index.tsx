import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableWithoutFeedback, ViewStyle, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Modal from 'react-native-modal';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';

import {styles} from './style';
import {AlertActionType, AlertPropsType} from '../../types/Alert';
import AlertAction from '../AlertAction';
import {useAlertBackdrop} from '../../Hook/useAlertBackdrop';

const Alert: React.FC<AlertPropsType> = props => {
  const {visible, onSetVisible} = useAlertBackdrop();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const backdropOpacity = useSharedValue<number>(0);
  const {t} = useTranslation();

  const button: () => React.ReactElement | null = () => {
    if (!props.data?.actions) {
      const data: AlertActionType = {
        title: t('Okay'),
        onPress: props.onClose,
        variant: 'primary',
      };

      return <AlertAction data={data} />;
    }

    return null;
  };

  useEffect(() => {
    if (props.isVisible) {
      onSetVisible(true);
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
      onSetVisible(false);
    }, 300);
  }, [props.isVisible]);

  const backdropStyle: ViewStyle = useAnimatedStyle<ViewStyle>(() => ({
    opacity: backdropOpacity.value,
  }));

  return (
    <React.Fragment>
      {visible && (
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
          <View style={styles.modalContainer}>
            {props.data?.title && (
              <Text style={styles.title}>{props.data.title}</Text>
            )}
            {props.data?.description && (
              <Text style={styles.description}>{props.data.description}</Text>
            )}
            {button()}
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default React.memo(Alert);
