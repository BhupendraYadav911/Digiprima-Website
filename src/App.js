import Navbars from "./components/Navbar/Navbar";
import HomeHeader from "./components/HomeHeader/HomeHeader"

import BillingPayment from "./components/BillingPayment/BillingPayment";
import Accelerate from "./components/Accelerate/Accelerate";
import Serivces from "./components/serivces/Serivces";

function App() {
  return (
    <>
     <Navbars />
     <HomeHeader />
     <Accelerate />
     <Serivces />
     <BillingPayment />
    </>
  );
}

export default App;
