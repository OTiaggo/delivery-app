import Constrants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";
import Section from "../components/section";
import TrendingFoods from "../components/trending";
import Restaurants from "../components/restaurants";
import RestaurantList from "../components/restaurantList";

export default function Index() {
  const statusBarHeight = Constrants.statusBarHeight;

  return (
    <ScrollView
      style={{ flex: 1, padding: 24 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em Alta"
        size="text-xl"
        label="Ver todas"
        action={() => {}}
      />

      <TrendingFoods />

      <Section
        name="Famosos no DevFood"
        size="text-xl"
        label="Ver todos"
        action={() => {}}
      />

      <Restaurants />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Ver todos"
        action={() => {}}
      />

      <RestaurantList />
    
    </ScrollView>
  );
}
