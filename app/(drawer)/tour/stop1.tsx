import { View, Text } from 'react-native';
import StopTemplate from './StopTemplate';

export default function Stop1() {  
  return (
    StopTemplate("Stop 1", 
      "Here is a description of stop 1", 
      require('../../../assets/audio/en/KylePleaseStopEdging.mp3'),
      require('../../../assets/images/emoji1.png'),
      "../stop1",
      "../stop1"
    )
  );
}
