import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ImageBackground } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { H1, Paragraph, YStack, Text, ScrollView } from 'tamagui';
import { Main } from '~/tamagui.config';
import { MediaType } from '~/interfaces/apiresults';
import { getMoiveDetails } from '~/services/api';

type DetailsPageProps = {
  id: string;
  mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(150);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 500, easing: Easing.inOut(Easing.ease) }),
    transform: [
      {
        translateY: withTiming(translateY.value, {
          duration: 500,
          easing: Easing.inOut(Easing.ease),
        }),
      },
    ],
  }));

  useEffect(() => {
    opacity.value = 1;
    translateY.value = 0;
  }, []);

  const movieQuery = useQuery({
    queryKey: ['moive', id],
    queryFn: () => getMoiveDetails(+id, mediaType),
  });

  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}`,
          }}>
          <Animated.View style={animatedStyle}>
            <Animated.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`,
              }}
              borderRadius={6}
              style={{ width: 200, height: 300, margin: 10 }}
              sharedTransitionTag={`${mediaType}-${id}`}
            />
          </Animated.View>
        </ImageBackground>

        <YStack
          p={10}
          animation={'lazy'}
          enterStyle={{
            opacity: 0,
            y: 10,
          }}>
          <H1 color={'$blue7'}>{movieQuery.data?.title || movieQuery.data?.name}</H1>

          <Text fontSize={16}>(2024)</Text>

          <Paragraph theme={'alt2'}>{movieQuery.data?.tagline}</Paragraph>

          <Text fontSize={16}>{movieQuery.data?.overview}</Text>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
