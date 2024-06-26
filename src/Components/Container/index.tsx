import React, {useEffect, useState} from 'react';
import {View, InteractionManager, ViewStyle, StatusBar} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {ContainerPropsType} from '../../types/Container';
import {styles} from './styles';
import {Color} from '../../Constant/Color';

const Container: React.FC<ContainerPropsType> = props => {
  const [loading, setLoading] = useState<boolean>(true);
  const opacity = useSharedValue<number>(0);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() =>
      setTimeout(() => setLoading(false), 300),
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      opacity.value = withTiming(1, {duration: 300, easing: Easing.linear});
    }
  }, [loading]);

  const containerStyle: ViewStyle = useAnimatedStyle<ViewStyle>(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {!loading && (
        <Animated.View style={[styles.container, containerStyle, props.style]}>
          {props.children}
        </Animated.View>
      )}
    </View>
  );
};

export default React.memo(Container);
