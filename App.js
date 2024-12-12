import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';


const navigation = createStackNavigator(
  {
Index: IndexScreen
  },
  {
    initialRouteName: 'Index', // Corrected the typo here
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

export default createAppContainer(navigator);