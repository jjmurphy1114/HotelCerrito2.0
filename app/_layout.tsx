import { Slot } from 'expo-router';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    primary: '#2E7E41',       // green
    secondary: '#E79F30',     // orange-yellow
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    surface: '#FFFFFF',
    onSurface: '#000000',
  },
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  )
}
