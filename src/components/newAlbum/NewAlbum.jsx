
import React, { useState } from "react";
import AlbumCard from "../albumCard/AlbumCard";
import AlbumImage from "../../assets/albumImg.png";
import { Button } from "@mui/material";
import style from "./NewAlbum.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const NewAlbums = () => {
  const [showAll, setShowAll] = useState(false);
  // Dummy data for demonstration
  const albums = [
    {
      id: 1,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 2,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 3,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 4,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 5,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 6,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 7,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
    {
      id: 8,
      image: AlbumImage,
      title: "New English Songs",
      followers: 100,
    },
  ];

  return (
    <section className={style.newAlbums}>
      <header className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-white font-bold text-lg">New Albums</h2>
        <Button
          variant="text"
          className="!text-[#34C94B] !font-bold !capitalize"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </header>

      {showAll ? (
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 px-2">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              followers={album.followers}
              label="New English Songs"
            />
          ))}
        </article>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={6}
          className="px-2"
        >
          {albums.map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard
                image={album.image}
                title={album.title}
                followers={album.followers}
                label="New English Songs"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default NewAlbums;
