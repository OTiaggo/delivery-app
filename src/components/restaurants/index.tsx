import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { Restaurant } from '../../types/restaurant';
import RestaurantItem from './horizontal';

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        async function fetchRestaurants() { 
            const response = await fetch("http://192.168.0.2:3000/restaurants");
            const data = await response.json();
            setRestaurants(data);
            console.log(data);
        }
        fetchRestaurants();
    }, []);

 return (
   <FlatList
        data={restaurants}
        renderItem={ ({item}) => <RestaurantItem restaurant={item} />}
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
    />
  );
}