
import React, { useState, useEffect } from "react";
import AlbumCard from "../albumCard/AlbumCard";
import { Button } from "@mui/material";
import style from "./NewAlbum.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

const NewAlbums = () => {
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/albums/new")
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        setAlbums([]);
      });
  }, []);

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
              followers={album.follows || album.followers}
              label={album.title}
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
                followers={album.follows || album.followers}
                label={album.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default NewAlbums;
