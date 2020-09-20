import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductOverviewScreen from '../Screens/shop/ProductOverviewScreen';
import Colors from '../constants/Color';

const ProductNavigator = createStackNavigator
({
    ProductOverview: ProductOverviewScreen
},{
    defaultNavigationOption:
    {
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    }  
});

export default createAppContainer(ProductNavigator);