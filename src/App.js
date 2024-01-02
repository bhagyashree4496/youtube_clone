import React from "react";
import { AppContext } from "./context/apiContext";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./routes/SearchResults";
import VideoDetails from "./routes/VideoDetails";
import LeftBar from "./components/LeftBar";
import Feed from "./routes/Feed";
export default function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header></Header>
        <div className="flex bg-black">
          <LeftBar></LeftBar>

          <Routes>
            <Route path="/" exact element={<Feed></Feed>}></Route>
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults></SearchResults>}
            ></Route>
            <Route
              path="/video/:id"
              element={<VideoDetails></VideoDetails>}
            ></Route>
          </Routes>
        </div>
      </AppContext>
    </BrowserRouter>
  );
}
