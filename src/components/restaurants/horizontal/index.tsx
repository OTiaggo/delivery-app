import { Pressable, Text, Image } from "react-native";
import { Restaurant } from "@/src/types/restaurant";

export default function RestaurantItem({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Pressable className="flex flex-col items-center justify-center"
    onPress={() => {console.log(`Clicou no restaurante ${restaurant.name}`)}        }>
        <Image 
        source={{ uri: restaurant.image }} 
        className="w-20 h-20 rounded-full" />

      <Text className="mt-2 text-sm text-center w-20 leading-4 text-black" numberOfLines={2}>{restaurant.name}</Text>
    </Pressable>
  );
}
