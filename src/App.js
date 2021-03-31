import "./App.css";
import Header from "./components/Header/Header.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faSearch,
	faShoppingCart,
	faHome,
	faStore,
	faPhoneAlt,
	faArrowLeft,
	faTrashAlt,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Store from "./components/pages/Store/Store";
import StoreItem from "./components/pages/StoreItem/StoreItem";
import Cart from "./components/pages/Cart/Cart";
import Checkout from "./components/pages/Checkout/Checkout";
import Contact from "./components/pages/Contact/Contact";
import Order from "./components/pages/Order/Order";

library.add(
	fab,
	faShoppingCart,
	faSearch,
	faHome,
	faStore,
	faPhoneAlt,
	faArrowLeft,
	faTrashAlt,
	faArrowRight
);

function App() {
	return (
		<div className="App">
			<Header backbtn="true" />
			{/* <Header /> */}
			{/* <Home /> */}
			{/* <StoreItem /> */}
			{/* <Store /> */}
			{/* <Cart /> */}
			{/* <Checkout /> */}
			<Order />
			{/* <Contact /> */}
			<Footer />
		</div>
	);
}

export default App;
