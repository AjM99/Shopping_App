import React from 'react' ;
import{Flatlist,Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProductOverviewScreen = props =>
{
    const porducts = useSelector(state =>state.porducts.avaiableProducts);
    return<Flatlist data={porducts} 
    keyExractor={item =>item.id} 
    renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />;
}
export default ProductOverviewScreen;