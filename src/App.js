import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./global/NavigationBar";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import LandingPage from "./pages/landingPage/LandingPage";
import { useEffect } from "react";
import { useApiHelper } from "./global/apiHelper";
import { useDispatch } from "react-redux";
import { GET_USER_URL } from "./URLS";
import { userAction } from "./store/userSlice";
import StockDashboard from "./pages/stockDashboard/StockDashboard";
import StockPage from "./pages/stockPage/StockPage";
import Loading from "./global/LoadingSpinners";
import { stockAction } from "./store/stockSlice";

function App() {
  const dispatch = useDispatch();
  const { handleApiCall } = useApiHelper();
  const getUser = () => {
    handleApiCall(
      "GET",
      GET_USER_URL,
      {},
      (data) => {
        dispatch(userAction.setUser(data.user));
        dispatch(stockAction.setMyStocks(data.user.myStocks));
        //navigate("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<StockDashboard />} />
        <Route path="/auth/:status" element={<Auth />} />
        <Route path="/stockPage/:symbol" element={<StockPage />} />
      </Routes>
      <Loading />
    </div>
  );
}

export default App;
