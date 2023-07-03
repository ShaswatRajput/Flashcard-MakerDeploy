import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/HomePageComponents/Navbar";

import Heading from "./components/HomePageComponents/Heading";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TabButtons from "./components/HomePageComponents/TabMenu";

import CreatePage from "./components/HomePageComponents/CreationPage";
import MyGroupPage from "./components/SecondaryPages/MyGroupPage";
import { useSelector } from "react-redux/es/hooks/useSelector";
import FlashCards from "./components/SecondaryPages/FlashCards";

function App() {
  const currentCard = useSelector((state) => state.groupsReducer.currentCard);
  return (
    <>
      {/* BrowserRouter for Wrapping all routers */}
      <BrowserRouter>
      
        <Navbar />

        <Heading />
        <TabButtons />
        {/* All routes are contained here */}
        <Routes>
          <Route exact path="/" element={<CreatePage />} />
          <Route exact path="/myflash" element={<MyGroupPage />} />
          <Route
            exact
            path={`/myflash/Flashcard${currentCard}`}
            element={<FlashCards />}
          />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
