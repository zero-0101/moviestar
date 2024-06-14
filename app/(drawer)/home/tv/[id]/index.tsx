import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import DetailsPage from '~/components/DetailsPage';
import { MediaType } from '~/interfaces/apiresults';

export default () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <DetailsPage id={id!} mediaType={MediaType.TV}></DetailsPage>
    </View>
  );
};
