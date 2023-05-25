import Header from "./components/header/header";
import MenuRestaurant from "./components/menu-restaurant/menuRestaurant";
import SwiperComponent from "./components/swiper/swiper";

function App() {
  return (
    <div className={`App font-Estedad-VF`}>
      <Header />
      <SwiperComponent/>
      <MenuRestaurant/>
    </div>
  );
}

export default App;
