import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { Restaurant } from '../../types/restaurant';
import RestaurantItem from './item';

export default function RestaurantList() {
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
        <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
            {restaurants.map((restaurant) => (
                <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            ))}
        </View>
    );
}