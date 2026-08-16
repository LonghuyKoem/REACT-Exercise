import "./App.css";
import { NavbarComponent } from "./components/layers/NavbarComponent";
import { HeroSectionComponent } from "./components/layers/HeroSectionComponent";
import { DetailComponent } from "./components/layers/DetailComponent";
import { ProductCardComponent } from "./components/products/ProductCardComponent";
import { ProductCardComponent1 } from "./components/products/ProductCardComponent1";
import { ProductCardComponent2 } from "./components/products/ProductCardComponent2";
import { ProductCardComponent3 } from "./components/products/ProductCardComponent3";
import { ProductCardComponent4 } from "./components/products/ProductCardComponent4";
import { ProductCardComponent5 } from "./components/products/ProductCardComponent5";
import { FooterComponent } from "./components/layers/FooterComponent";

function App() {
  return (
    <section className="justify-between items-center">
      <NavbarComponent />
      <HeroSectionComponent />
      <DetailComponent />
      <div className="items-center flex flex-col">
        <div className="flex gap-10">
          <ProductCardComponent />
          <ProductCardComponent1 />
          <ProductCardComponent2 />
        </div>

        <div className="mt-6 flex gap-10">
          <ProductCardComponent3 />
          <ProductCardComponent4 />
          <ProductCardComponent5 />
        </div>
      </div>
      <FooterComponent />
    </section>
  );
}

export default App;
