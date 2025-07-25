
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import TopAlbums from "./components/topAlbums/TopAlbums";
import NewAlbums from "./components/newAlbum/NewAlbum";
import SongsSection from "./components/songsSection/SongsSection";
import FAQSection from "./components/faqSection/FAQSection";
import MusicPlayer from "./components/musicPlayer/MusicPlayer";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <main>
        <Hero />
        <TopAlbums />
        <NewAlbums />
        <SongsSection />
        <FAQSection />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default App;
