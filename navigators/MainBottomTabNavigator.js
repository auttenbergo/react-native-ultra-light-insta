import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import ExploreScreen from '../screen/ExploreScreen';
import ReelsScreen from '../screen/ReelsScreen';


import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreenHeader from '../components/homeScreen/HomeScreenHeader';
import { BOTTOM_NAVBAR_HEIGHT } from '../styles/GlobalStyles';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigator(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused}) => {
                        let iconName;
                        switch(route.name){
                            case 'Home': iconName = 'home'; break;
                            case 'Explore': iconName = 'search'; break;
                            case 'Reels': iconName = 'film'; break;
                            case 'Profile': iconName = 'user-alt'; break;
                            default: throw Error("Invalid route name")
                        }
                        let iconSize = focused ? 24 : 20
                        let iconColor = focused ? 'white' : 'gray'
                        return <FontAwesome5 name={iconName} size={iconSize} color={iconColor} />
                },
                tabBarShowLabel: false,
                tabBarStyle: { 
                    height: BOTTOM_NAVBAR_HEIGHT,
                    backgroundColor: 'black',
                },
            })}
            >
          <Tab.Screen
                name="Home" 
                component={HomeStack} 
                options={{
                    header: () => (<></>)
                }}
            />
          <Tab.Screen name="Explore" component={ExploreScreen} />
          <Tab.Screen name="Reels" component={ReelsScreen} />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                header: () => (<></>)
            }}
        />
        </Tab.Navigator>
      );
}