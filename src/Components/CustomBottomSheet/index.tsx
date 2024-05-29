import React, {useImperativeHandle, useRef, useState} from 'react';
import BottomSheet, {
  BottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import {CustomBottomSheetMethodType} from '../../types/CustomBottomSheet';

type CustomBottomSheet = CustomBottomSheetMethodType;

const CustomBottomSheet = React.memo(
  React.forwardRef<CustomBottomSheetMethodType, BottomSheetProps>(
    (props, ref) => {
      const bottomSheetRef = useRef<BottomSheet>(null);
      const [internalIndex, setInternalIndex] = useState<number>(-1);

      const handleOpen = () => bottomSheetRef.current?.snapToIndex(0);
      const handleClose = () => bottomSheetRef.current?.close();

      const renderBottomSheetBackdrop: (
        props: BottomSheetBackdropProps,
      ) => React.ReactElement = backdropProps => (
        <BottomSheetBackdrop
          {...backdropProps}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      );

      useImperativeHandle(ref, () => ({
        onClose: handleClose,
        onOpen: handleOpen,
      }));

      return (
        <BottomSheet
          ref={bottomSheetRef}
          {...props}
          index={-1}
          backdropComponent={renderBottomSheetBackdrop}
          onChange={setInternalIndex}>
          {internalIndex > -1 && props.children}
        </BottomSheet>
      );
    },
  ),
);

export default CustomBottomSheet;
