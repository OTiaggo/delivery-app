import { Restaurant } from "@/src/types/restaurant";
import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantItem({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <Pressable className="flex flex-row items-center justify-start mx-2 gap-2">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />

      <View className="flex gap-2">
        <Text className="text-base text-black leading-4 font-bold">{restaurant.name}</Text>

        <View className="flex flex-row gap-1">
            <Ionicons name="star" size={14} color="#ca8a04" />
            <Text className="text-sm ">4.6</Text>
        </View>
      </View>
    </Pressable>
  );
}
