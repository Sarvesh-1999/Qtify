import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../albumCard/AlbumCard";
import AlbumImage from "../../assets/albumImg.png";

const categories = ["All", "Rock", "Pop", "Jazz", "Blues"];

// Dummy data for demonstration
const allSongs = [
  {
    id: 1,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 2,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 3,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 4,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 5,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 6,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 7,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
  {
    id: 8,
    image: AlbumImage,
    title: "New English Songs",
    likes: 100,
    label: "New English Songs",
  },
];

const SongsSection = () => {
  const [tab, setTab] = useState(0);

  // Filter logic can be added here based on tab/category
  const filteredSongs = allSongs; // For now, all songs for every tab

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
