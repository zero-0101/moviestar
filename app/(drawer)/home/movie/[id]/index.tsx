import { Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: '',
        }}></Stack.Screen>

      <Text>page</Text>
    </View>
  );
};
