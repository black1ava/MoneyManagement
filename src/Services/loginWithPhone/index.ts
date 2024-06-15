import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const loginWithPhone: (
  phone: string,
) => Promise<FirebaseAuthTypes.ConfirmationResult> = async phone => {
  try {
    return await auth().signInWithPhoneNumber(phone);
  } catch (error) {
    throw error;
  }
};
