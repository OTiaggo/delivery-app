import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
 return (
   <View className="w-full flex-row h-14 border border-slate-500 rounded-full bg-transparent gap-2 px-4 items-center">
     <Feather name="search" size={24} color="#9CA3AF" />
     <TextInput
       className="w-full h-full flex-1 bg-transparent"
       placeholder="Buscar produtos..."
       placeholderTextColor="#9CA3AF"
     />
   </View>
  );
}  