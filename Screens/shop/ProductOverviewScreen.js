import React from 'react' ;
import{Flatlist,Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductOverviewScreen = props =>
{
    const products = useSelector(state =>state.products.avaiableProducts);
    return(
    <Flatlist 
     data={products} 
     keyExractor={item =>item.id} 
     renderItem={itemData => <Text>dfgsd ad{itemData.item.title}</Text>}
    />
    );
};
export default ProductOverviewScreen;