import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './Category';


const categories = [
  {
    id: 'newin',
    title: 'New in',
    color: '#FFE8E9',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#F1E0FF',
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    color: '#FFE8E9',
  },
];


const Categories = () => {
  return (
    <View>
      <ScrollView horizontal>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories