
import Toast from 'react-native-toast-message';

export const httpErrorHandler = (error: any) => {
  let errorMessage =
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errorMessages;
  if (!errorMessage) {
    errorMessage = error && error.errorMessages;
  }
  if (errorMessage instanceof Array) {
    errorMessage.forEach(element => {
      Toast.show({
        type: 'error',
        text1: `${element}`,
        text2: 'This is some something 👋'
      });
    });
  } else if (errorMessage) {
    Toast.show({
      type: 'error',
      text1: `${errorMessage}`,
      text2: 'This is some something 👋'
    });
  }
};
