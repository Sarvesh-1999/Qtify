import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../albumCard/AlbumCard";
import axios from "axios";

const categories = ["All", "Rock", "Pop", "Jazz", "Blues"];

const SongsSection = () => {
  const [tab, setTab] = useState(0);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        setSongs([]);
      });
  }, []);

  // Filter logic can be added here based on tab/category
  const filteredSongs = songs; // For now, all songs for every tab

  return (
    <section className="w-full my-8">
      <header className="mb-2 px-2">
        <h2 className="text-white font-bold text-lg mb-2">Songs</h2>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          textColor="inherit"
          TabIndicatorProps={{ style: { background: '#34C94B', height: 3 } }}
          sx={{
            minHeight: 0,
            '& .MuiTab-root': { color: '#fff', fontWeight: 600, minHeight: 0, minWidth: 60 },
            '& .Mui-selected': { color: '#34C94B' },
          }}
        >
          {categories.map((cat, idx) => (
            <Tab key={cat} label={cat} />
          ))}
        </Tabs>
      </header>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={6}
        className="px-2"
      >
        {filteredSongs.map((song) => (
          <SwiperSlide key={song.id}>
            <AlbumCard
              image={song.image}
              title={song.title}
              followers={song.likes}
              label={song.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SongsSection;
