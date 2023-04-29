import Navbars from "./components/Navbar/Navbar";
import HomeHeader from "./components/HomeHeader/HomeHeader"

import BillingPayment from "./components/BillingPayment/BillingPayment";
import Accelerate from "./components/Accelerate/Accelerate";
import Serivces from "./components/serivces/Serivces";
import NextGen from "./components/NextGen/NextGen";
import BoxAnim from "./components/box-animation/box-animation/BoxAnim";
import Heathcare from "./components/healthcare/Heathcare";
import OpenAi from "./components/openAI/OpenAi";
import DynamicUser from "./components/DynamicUser/DynamicUser";
import Add3d from "./components/Add-3D/Add3d";
import FreeConsultation from "./components/FreeConsultation/FreeConsultation";
import OurTrack from "./components/ourtrack/OurTrack";
import Idcare from "./components/Id care/Idcare";
import Clients from "./components/Clients/Clients";
import OverviewAccordion from "./components/OverviewAccordion/OverviewAccordion";
import ClientSlider from "./components/ClientSlider/ClientSlider";
import BuildStrategic from "./components/BuildStrategic/BuildStrategic";

function App() {
  return (
    <>
     <Navbars />
     <HomeHeader />
     <Accelerate />
     <Serivces />
     <BillingPayment />
     <NextGen />
     <BoxAnim />
     <Heathcare />
     <OpenAi />
     <DynamicUser />
     <Add3d />
          <FreeConsultation />
          <OurTrack />
          <Idcare />
     <Clients />
     <OverviewAccordion />
     <ClientSlider />
     <BuildStrategic />

    </>
  );
}

export default App;
