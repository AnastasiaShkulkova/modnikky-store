import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppContext from "./context/context";
import SearchPage from "./pages/SearchPage/SearchPage";
import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesList from "./components/Categories/CategoriesList/CategoriesList";
import { Navbar } from "./components/Navbar/Navbar";
import { FooterSection } from "./components/Footer/FooterSection";
import ItemPage from "./pages/ItemPage/ItemPage";
import CartPage from "./pages/CartPage/CartPage";
import SignInPage from "./pages/AuthPage/SignInPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";

function App() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [itemId, setItemId] = useState("");
  const [clickedItem, setClickedItem] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [status, setStatus] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          "https://modnikky-api.herokuapp.com/api/catalog"
        );
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async () => {
    setCartItems((prev) => [...prev, itemId]);

    const data = await axios.post(
      "https://modnikky-api.herokuapp.com/api/cart",
      {
        products: cartItems,
      }
    );

    const message = data.data.message;
    setStatus(message);
    console.log(status);
    console.log(message);

    return message;
  };

  const onClickItem = (id) => {
    const clickItem = items.find((item) => item.id.includes(id));
    setClickedItem(clickItem);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          menuOpen,
          setMenuOpen,
          items,
          setSearchValue,
          searchValue,
          category,
          setCategory,
          itemId,
          setItemId,
          onClickItem,
          clickedItem,
          onAddToCart,
          cartItems,
          status,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/search"
            exact
            element={<SearchPage onChangeSearchInput={onChangeSearchInput} />}
          />
          <Route path={`/category/${category}`} element={<CategoriesList />} />
          <Route path={`/item/${itemId}`} element={<ItemPage />} />
          <Route path={"/cart"} element={<CartPage />} />
          <Route exact path="/signin" element={<SignInPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
        </Routes>
        <FooterSection />
      </AppContext.Provider>
    </div>
  );
}

export default App;
