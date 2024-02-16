import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index/Index";
import WorkDraft from "./Drafts/WorkDraft";
import GalleryDraft from "./Drafts/GalleryDraft";
import ShopDraft from "./Drafts/ShopDraft";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
          <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/workdraft247fhgihq87f2" element={<WorkDraft/>}/>
              <Route path="/gallerydraft981u39hddh" element={<GalleryDraft/>}/>
              <Route path="/shopdraft37shj821jadj8" element={<ShopDraft/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
