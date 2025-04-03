import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="Home" options={{ title: 'Home' }} />
      <Drawer.Screen name="Tour" options={{ title: 'Tour' }} />
      <Drawer.Screen name="Activities" options={{ title: 'Activities' }} />
    </Drawer>
  );
}
