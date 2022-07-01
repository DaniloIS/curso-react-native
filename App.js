import { Bank } from './src/components/Module03/Bank';
import { PickerSelect } from './src/components/Module03/PickerSelect';
import { SliderComponent } from './src/components/Module03/SliderComponent';
import SwitchComponent from './src/components/Module03/SwitchComponent';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Instagram } from './src/components/Module03/Instagram';
import ChallengeGas from './src/components/Module03/ChallengeGas';
import { HttpReq } from './src/components/Module04/HttpReq';
import { CoinConverter } from './src/components/Module04/CoinConverter';
import { Animation } from './src/components/Module04/Animated';
import { Hooks } from './src/components/Module05/Hooks';
import { Routes } from './src/routes';





export default function App() {
  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {/* <PickerSelect /> */}
      {/* <SliderComponent /> */}
      {/* <SwitchComponent /> */}
      {/* <Bank /> */}
      {/* <Instagram /> */}
      {/* <ChallengeGas /> */}
      {/* <HttpReq /> */}
      {/* <CoinConverter /> */}
      {/* <Animation /> */}
      {/* <Hooks /> */}
      <Routes />
    </>
  );
}