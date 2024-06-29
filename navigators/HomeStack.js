import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScreen from '../screen/home/ActivityScreen';
import HomeScreen from '../screen/home/HomeScreen';
import { HEADER_HEIGHT } from '../styles/GlobalStyles';
import LikesScreen from '../screen/home/LikesScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
      <Stack.Navigator initialRouteName="HomeScreenStack">
        <Stack.Screen 
            name="HomeScreenStack" 
            options={{
                header: () => {}
            }}
            component={HomeScreen} 
        />
        <Stack.Screen 
            name="Activity" 
            options={{
                headerStyle: {
                    backgroundColor: 'black',
                    height: HEADER_HEIGHT
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }}
            component={ActivityScreen} 
        />
        <Stack.Screen 
            name="PostLikes" 
            options={{
                title: "Likes",
                headerStyle: {
                    backgroundColor: 'black',
                    height: HEADER_HEIGHT
                },
                headerTitleStyle: {
                    color: 'white'
                },
                headerTintColor: 'white'
            }}
            component={LikesScreen} 
        />
      </Stack.Navigator>
  );
}