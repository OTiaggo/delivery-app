import { View, Text, Pressable } from 'react-native';

interface SectionProps {
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl";
    label: string;
    action: () => void;
}

export default function Section({ name, size, label, action }: SectionProps) {
 return (
   <View className='w-full flex flex-row items-center justify-center'>
        <Text className={`${size} font-semibold my-4 self-start`}>
            {name}
        </Text>
   </View> 
  );
}