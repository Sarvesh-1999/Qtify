
import React, { useState, useEffect } from "react";
import AlbumCard from "../albumCard/AlbumCard";
import style from "./TopAlbum.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Section from "../Section";
import axios from "axios";

const TopAlbums = () => {
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        setAlbums([]);
      });
  }, []);

  return (
    <Section
      title="Top Albums"
      showAll={showAll}
      onToggleShowAll={() => setShowAll((prev) => !prev)}
    >
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
          slidesPerView={7}
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
    </Section>
  );
};

export default TopAlbums;
