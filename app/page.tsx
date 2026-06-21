import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Watermark from "./components/Watermark";
import MenuGrid from "./components/MenuGrid";
import MenuSection from "./components/MenuSection";
import SectionDivider from "./components/SectionDivider";
import SectionCard from "./components/SectionCard";
import PillHeader from "./components/PillHeader";
import MenuItem from "./components/MenuItem";

export const metadata: Metadata = {
  title: "Yoda Coffee \u2014 Menu | Coffee, Culture, Community",
  description:
    "Explore the full Yoda Coffee menu: espresso, matcha bar, breakfast, traditional Ethiopian dishes, pizza, burgers, cakes and more.",
  openGraph: {
    title: "Yoda Coffee \u2014 Menu",
    description:
      "Coffee, Culture, Community. Full menu of drinks and food at Yoda Coffee, Addis.",
    type: "website",
  },
};

// ── Data ──────────────────────────────────────────────

const breakfast = [
  { name: "Plain Omelette", price: "600.00", desc: "Egg, sliced toasted bread, jam, and table butter." },
  { name: "Waffle/Pancake", price: "500.00", desc: "Teff or White flour, egg, milk, vanilla, honey or syrup, with side" },
  { name: "Egg Scrambled/ Sandwich", price: "450.00", desc: "Egg, tomato, green chili, onion, vegetable oil, salt & pepper, bread, with side" },
  { name: "Avocado Toast", price: "510.00", desc: "Avocado, toasted bread, tomato, onion, lemon" },
  { name: "Chechebsa Bowl", price: "620.00", desc: "Savory chechebsa tossed in spiced butter with beef, egg, and aromatic seasonings for a protein-rich twist." },
  { name: "Foul Bowl", price: "430.00", desc: "Foul beans enriched with egg, tomato sauce, spices and served with bread and sides." },
  { name: "Oatmeal", price: "450.00", desc: "Warm, creamy oats topped with fresh fruits, peanuts." },
  { name: "French Toast", price: "470.00", desc: "Sliced bread, egg, ground sugar, cinnamon powder, honey/syrup, seasonal sliced fruits" },
  { name: "Stuffed Croissant Sandwich", price: "600.00", desc: "Croissants, egg, cheese, onion, tomato, chili" },
];

const espresso = [
  { name: "Espresso Single | Double", price: "130 | 220" },
  { name: "Lungo", price: "120.00" },
  { name: "Americano", price: "120.00" },
  { name: "Cafe Latte", price: "180.00" },
  { name: "Cappuccino", price: "200.00" },
  { name: "Flat White / Cortado", price: "150.00" },
  { name: "Macchiato", price: "150.00" },
  { name: "Coffee with Tea", price: "130.00" },
  { name: "Fasting Macchiato | Double", price: "200 | 250" },
  { name: "Caramel Macchiato", price: "190.00" },
  { name: "Vanilla/Mocha/Caramel Frappe", price: "350.00" },
  { name: "Mocha Latte", price: "360.00" },
];

const matcha = [
  { name: "Iced/Hot Vanilla Matcha Latte", price: "350.00" },
  { name: "Ice Strawberry Matcha Latte", price: "400.00" },
  { name: "Ice Matcha Latte", price: "350.00" },
  { name: "Hot Matcha", price: "300.00" },
  { name: "Ice Espresso Matcha Latte", price: "270.00" },
];

const iced = [
  { name: "Iced Coffee", price: "120.00" },
  { name: "Iced Tea", price: "120.00" },
  { name: "Iced Latte", price: "250.00" },
  { name: "Iced Mocha Latte", price: "350.00" },
];

const nonCoffee = [
  { name: "Black Tea", price: "80.00" },
  { name: "Green Tea", price: "90.00" },
  { name: "Lemon Tea", price: "90.00" },
  { name: "Fruit Tea", price: "150.00" },
  { name: "Ginger Tea", price: "90.00" },
  { name: "Special Tea", price: "250.00" },
  { name: "Milk with Tea", price: "150.00" },
  { name: "Milk", price: "150.00" },
  { name: "Hot Chocolate", price: "250.00" },
];

const cakes = [
  { name: "Banana / English / Orange / Carrot Cake", price: "145.00" },
  { name: "Croissant", price: "170.00" },
  { name: "Chocolate Croissant", price: "200.00" },
  { name: "Special Cream Cakes", price: "180.00" },
  { name: "Classic Cream Puff", price: "180.00" },
  { name: "Chocolate Mousse", price: "180.00" },
  { name: "Mille-feuille / Opera", price: "230.00" },
  { name: "Fasting Chocolate/Caramel/Vanilla", price: "150.00" },
];

const salad = [
  { name: "Mixed Bean Salad", price: "650.00", desc: "Mixed beans, chickpeas, cucumber, tomato, onion, honey mustard dressing" },
  { name: "Ceasar Salad", price: "450.00", desc: "Lettuce topped with mozzarella cheese, tomato, crispy garlic croutons, and creamy spicy yogurt dressing for a rich and refreshing taste." },
  { name: "Seasonal Fruit Salad", price: "470.00", desc: "Watermelon, papaya, mango, strawberry, black olive, banana, orange, cinnamon honey syrup, mints" },
];

const traditional = [
  { name: "Chikina Tibs", price: "700.00", desc: "Chikina beef pan-cooked with onions, green peppers, garlic, and rich Ethiopian spices, served hot and aromatic." },
  { name: "Tibs Firfir", price: "595.00", desc: "Spiced beef tibs mixed with shredded injera and seasoned sauce" },
  { name: "Fasting Firfir", price: "450.00", desc: "Injera mixed with flavorful vegan sauce, prepared without animal products" },
  { name: "Shiro", price: "480.00", desc: "low-cooked chickpea stew blended with garlic, onion, and traditional spices." },
];

const pasta = [
  { name: "Marinara", price: "500.00", desc: "Tomato sauce, garlic, spaghetti, pepper" },
  { name: "Bolognese", price: "800.00", desc: "Bolognese sauce, table butter, cheese, spaghetti" },
  { name: "Lasagna", price: "1120.00", desc: "Bolognese sauce, mozarella cheese, lasagna sheet, with side" },
];

const mojito = [
  { name: "Orange / Strawberry/Lemon/ Watermelon/Pineapple", price: "350.00" },
];

const milkshake = [
  { name: "Chocolate Milkshake", price: "420.00" },
  { name: "Caramel Milkshake", price: "420.00" },
];

const smoothie = [
  { name: "Avocado Smotothie", price: "420.00" },
  { name: "Strawberry Smoothie", price: "420.00" },
  { name: "Banana Smoothie", price: "420.00" },
];

const wrap = [
  { name: "Beef Wrap", price: "870.00", desc: "Roasted beef, BBQ sauce, mayonnaise, tortilla, onion, tomato, bell pepper, cheese, avocado, side french fries/roasted potato" },
  { name: "Chicken Wrap", price: "870.00", desc: "Chicken, BBQ sauce, mayonnaise, tortilla, onion, tomato, bell pepper, cheese, avocado, side french fries/roasted potato" },
  { name: "Vegetable Wrap", price: "550.00", desc: "Vegetables, avocado, BBQ sauce, side roasted potato/french fries" },
];

const sandwich = [
  { name: "Felafel Sandwich", price: "550.00", desc: "Boiled egg, chickpeas, vegetables, honey mustard, tomatoes, onion, bell pepper, and a side of french fries/roasted potatoes" },
  { name: "Club Sandwich Beef/Chicken", price: "710.00", desc: "Beef/Chicken layered with lettuce, tomato, cheese, and creamy house sauce in toasted bread." },
  { name: "Tuna", price: "750.00", desc: "Tuna, tomato, onion, bell pepper, honey mustard saue, side roasted potato/french fries." },
  { name: "Beef/ Chicken Panini", price: "600.00", desc: "Roasted Beef/Chicken, tomato, onion, bell pepper, mayonnaise , cheese side roasted potato/french fries" },
];

const pizza = [
  { name: "BBQ Chicken", price: "950.00", desc: "Crispy pizza layered with tomato sauce, mozzarella cheese, roasted chicken, fresh vegetables, and smoky BBQ sauce" },
  { name: "Margarita Pizza", price: "750.00", desc: "Tomato sauce, mozzarella cheese, tomato slice" },
  { name: "Roasted Beef", price: "910.00", desc: "Roasted beef, mozzarella cheese, tomato sauce, slice tomato, bell pepper, black olive, mushroom, slice beef" },
  { name: "Vegetable", price: "600.00", desc: "Tomato sauce, zucchini, carrot, eggplant, bell pepper, mushroom, black olive" },
];

const burgerItems = [
  { name: "Yoda Chicken Burger", price: "910.00", desc: "Chicken patty, cheese, roasted chicken, BBQ sauce, mayonnaise, tomato, onion, lettuce, bell pepper, french fries" },
  { name: "Yoda Slider Burger", price: "910.00", desc: "Juicy mini beef and chicken sliders layered with provolone cheese, fresh tomato, onion, crisp lettuce, and Dako special sauce in soft mini burger buns" },
];

// ── Remote image URLs ─────────────────────────────────

const breakfastImages = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBV6mHiEPLBxNllTXcMo08ebynmz7oZPLqPzmTjvxm3I5Z7BiIbQPfbbbuLnOBe6yLF-vEDGgBjE7DtIWNJPcUvlrqi8RV50hYZ2MAafFACumL8BH0_i6Z79u1xfvunlKU9iRmFbqiBoyN4YzVMeq3VixqdYmqQ4vp--sAAl8bRF7FC8uRIItMMe2RSc27Qfq6jMUF0f4Uj0WIg1-GU0NA9D0T1tEJzdQ9OJKgZYPuFaMIrR0dagfgb2QkvF0XuedW58MWIUOIpp4", alt: "Breakfast dish" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkGepcArvOasHiWyXft48TKi_qfKBHK-rJ9Xz5nlXCotl7tCEQaNY4q3J0_rjEFNSUEkynSJvFXd3svNgNkXw-nz200C0lHOdxuFROLN5mpR6PkWfi6XE8mfK8QdBg59B5bu4cd-2d4pPHOxQTlTzrsQ8tt9W8ApxY2142jBLuJLB-des5KyvUF1e4CC_MjWwDOL74-u97SUzz5hekiQPmVRdunM1Yf_3rvtvEy4Ui0wONXz2pg9RN4bbXLSLxpMc50oV6_I7-_L0", alt: "Breakfast dish" },
];

const cakeImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuACtKZyWu3fQVjYnhV8xqU2PJgjMjK0ODTMp8vU2PF2nb1I7xrjeaevU7zIUPXqe4qhaDrl4pajmT0bL4eNQFX2wMyzvUamoG27DfvH2VjkQABV7Mbh7OcTwixXAoA877at2fjol-sgBgRRu3W1hTdplqdGODCwPiWEuUSusddxjh03fMKwsTuA6--HrjYhtLqJI7QVPlZkyBMnrz1ulFOZ5pdE6or1MeGvuG2COAx74wpIBBMP6xGJGE_Lesxb_X8WKwf3LZOsU4Q",
  alt: "Cheesecake slice",
};

const sandwichBurgerImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXSV_eIHvMqLtBhEbYSGiWRH0kwcTvfiQ4pqZX05BegrLIXhVnhwx9JUf3PDWPKfHHnSlQ4UqgSiIBfbjEJhnaqLSGWUI4u5_7K1brEPTwLBxIihFIG9RkgDzku7sscO6G4sZfYjwOWHV8myYtM1hP2FFzHb75JhIOLtZZPM_xPza6_8TH2h4e-9hvy2ZbPNA0zH4aBo0-T10MgDBqoolmeD5fIYo6YwZkGYxwylzZh3_A3NeXT764hJGjvmlhqzyEFNsP0F4_TGY";

const wrapImage = {
  src: "/images/wrap.jpg",
  alt: "Wrap dish",
};

// ── Page ──────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-3 md:px-10 py-8 md:py-20 relative z-10">
        <Watermark />
        <Hero />

        {/* ── Part 1 Grid ── */}
        <MenuGrid>
          {/* Column 1: Breakfast + Salad */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="breakfast" title="BREAKFAST" headerImages={breakfastImages} items={breakfast} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="salad" title="SALAD" items={salad} />
            </SectionCard>
          </div>

          {/* Column 2: Espresso + Non-Coffee + Traditional */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="espresso" title="ESPRESSO" items={espresso} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="non-coffee" title="NON-COFFEE" items={nonCoffee} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="traditional" title="TRADITIONAL" items={traditional} />
            </SectionCard>
          </div>

          {/* Column 3: Matcha + Iced + Cakes */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="matcha" title="MATCHA BAR" items={matcha} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="iced-drinks" title="ICED DRINKS" items={iced} />
            </SectionCard>
            <SectionCard>
              
              <section className="relative" id="cakes">
                <div className="text-center md:text-left mb-8">
                  <PillHeader>CAKES</PillHeader>
                </div>
                <div className="mt-8 rounded-full overflow-hidden w-48 h-48 mx-auto border-4 border-surface shadow-md">
                  <img src={cakeImage.src} alt={cakeImage.alt} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  {cakes.map((it) => (
                    <MenuItem key={it.name} name={it.name} price={it.price} />
                  ))}
                </div>
                
              </section>
            </SectionCard>
          </div>
        </MenuGrid>

        <SectionDivider />

        {/* ── Part 2 Grid ── */}
        <MenuGrid>
          {/* Column 1: Pasta + Mojitos + Milkshake + Smoothie + Wrap */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="pasta" title="PASTA" items={pasta} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="mojitos" title="MOJITOS" items={mojito} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="milkshake" title="MILKSHAKE" items={milkshake} />
            </SectionCard>
            <SectionCard>
              <MenuSection id="smoothie" title="SMOOTHIE" items={smoothie} />
            </SectionCard>
            <SectionCard>
              <section className="relative mt-4" id="wrap">
                <div className="text-center md:text-left mb-8">
                  <PillHeader>WRAP</PillHeader>
                  <div className="mb-8 rounded-xl overflow-hidden h-48 w-full">
                    <img src={wrapImage.src} alt={wrapImage.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  {wrap.map((it) => (
                    <MenuItem key={it.name} name={it.name} price={it.price} desc={it.desc} />
                  ))}
                </div>
              </section>
            </SectionCard>
          </div>

          {/* Column 2: Sandwich + burger image */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="sandwich" title="SANDWICH" items={sandwich} />
            </SectionCard>
          </div>

          {/* Column 3: Pizza + Burger */}
          <div className="menu-column flex flex-col gap-16">
            <SectionCard>
              <MenuSection id="pizza" title="PIZZA" items={pizza} />
            </SectionCard>

            <SectionCard>
              <section className="relative" id="burger">
                <div className="text-center md:text-left mb-8">
                  <PillHeader>BURGER</PillHeader>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="menu-item group">
                    <div className="mb-4 rounded-xl overflow-hidden h-48 w-full">
                      <img src="/images/burger.jpg" alt="Yoda burger" className="w-full h-full object-cover" />
                    </div>
                    <div className="item-row">
                      <span className="item-name group-hover:text-surface-tint transition-colors">Yoda Beef Burger</span>
                      <div className="flex-grow border-b border-dashed border-outline-variant mx-2 opacity-50" />
                      <span className="item-price">910.00</span>
                    </div>
                    <p className="item-desc">Beef patty, cheese, BBQ sauce, mayonnaise, tomato, onion, bell pepper, lettuce, french fries</p>
                  </div>
                  {burgerItems.map((it) => (
                    <MenuItem key={it.name} name={it.name} price={it.price} desc={it.desc} />
                  ))}
                </div>
                <div className="mt-8 md:hidden">
                  {/* <img
                    src={mobileBurgerImage}
                    alt="Yoda burger with fries"
                    className="w-full object-contain rounded-xl drop-shadow-md"
                    style={{ maxHeight: "250px", mixBlendMode: "multiply" as React.CSSProperties["mixBlendMode"] }}
                  /> */}
                </div>
              </section>
            </SectionCard>
          </div>
        </MenuGrid>
      </main>

      <footer className="bg-surface full-width p-8 border-t border-outline-variant/20 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 max-w-[1200px] mx-auto text-on-surface-variant font-body text-sm">
          <div className="mb-4 md:mb-0 text-center md:text-left text-sm italic font-medium">
            All Prices include 15% VAT &amp; 5% service charge | +251 909223333 | @yodacoffee.addis
          </div>
          <div className="flex gap-6 items-center">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              <span className="font-semibold text-sm">Facebook</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              <span className="font-semibold text-sm">Instagram</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">
              <span className="font-semibold text-sm">Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
