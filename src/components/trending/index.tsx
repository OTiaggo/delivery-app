import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import CardHorizontalFood from './food';
import { foodProps } from '../../types/food';


export default function TrendingFoods() {
    const [foods, setFoods] = useState<foodProps[]>([]);

    useEffect(() => {
        async function fetchFoods() { 
            const response = await fetch("http://192.168.0.2:3000/foods");
            const data = await response.json();
            setFoods(data);
            console.log(data);
        }
        fetchFoods();
    }, []);

    return (
        <FlatList
            data={foods}
            renderItem={ ({item}) => <CardHorizontalFood food={item} />}
            horizontal={true}
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
        />
    );
}