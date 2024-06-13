import React, {useEffect} from 'react';
import {
  Easing,
  Keyboard,
  KeyboardEventListener,
  KeyboardEventName,
  Platform,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Dimension} from '../../Constant/Dimension';

const KeyboardSpacing: React.FC = () => {
  const keyboardHeight = useSharedValue<number>(0);

  const updateKeyboardSpacing: KeyboardEventListener = event => {
    const height = Dimension.height - event.endCoordinates.screenY;
    keyboardHeight.value = withTiming(height, {
      duration: 300,
      easing: Easing.linear,
    });
  };

  const resetKeyboardSpacing: KeyboardEventListener = event => {
    keyboardHeight.value = withTiming(0, {
      duration: 300,
      easing: Easing.linear,
    });
  };

  useEffect(() => {
    const updateKeyboadSpacingListener: KeyboardEventName =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidHide';
    const resetKeyboardSpacingListener: KeyboardEventName =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const listeners = [
      Keyboard.addListener(updateKeyboadSpacingListener, updateKeyboardSpacing),
      Keyboard.addListener(resetKeyboardSpacingListener, resetKeyboardSpacing),
    ];

    return () => {
      listeners.forEach(listener => listener.remove());
    };
  }, []);

  const style: ViewStyle = useAnimatedStyle<ViewStyle>(() => ({
    height: keyboardHeight.value,
  }));

  return <Animated.View style={style} />;
};

export default React.memo(KeyboardSpacing);
