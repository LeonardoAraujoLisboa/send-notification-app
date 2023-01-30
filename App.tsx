import OneSignal from 'react-native-onesignal';
import { Platform, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

const oneSignalAppId = Platform.OS === 'ios' ? 'aisdoiasdopa' : 'a4c9f872-b90c-4311-91f4-4c77e3c246a8'
OneSignal.setAppId(oneSignalAppId)//id que tem no one signal. Ai é pelo id 

OneSignal.setEmail('leo_araujo05@hotmail.com')//ai seria para enviar email quando o usuário se cadastra usando o email dele

OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log(response);
})

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}