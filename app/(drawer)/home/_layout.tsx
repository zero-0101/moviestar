import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';

export default () => {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.blue7.get(),
        },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Moviestar',
          headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="movie/[id]/index"
        options={{
          title: '',
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="tv/[id]/index"
        options={{
          title: '',
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
};
