import { Pressable, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons name="menu" size={24} color="white" />
      </Pressable>
      
      <View>
        <Text className="text-center text-sm text-slate-800">Localização</Text>

        <View className="flex-row items-center justify-center">
            <Feather name="map-pin" size={24} color="white" />
            <Text className="text-lg">Campo Grande</Text>
        </View>
      </View>
      
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Feather name="bell" size={24} color="white" />
      </Pressable>
    </View>
  );
}
