const AlbumCard = ({ image, title, followers }) => {
  return (
        <div  className="rounded-t-2xl ">
      <div className="">
        <img src={image} alt="album image" className="rounded-t-2xl" />
        <div className="flex p-3 rounded-b-2xl border bg-[var(--color-white)]">
          <div className="bg-[var(--color-black)] rounded-2xl text-sm py-1 px-2">
            {followers}
          </div>
        </div>

        <p className="bg-[var(--color-black)] text-[var(--color-white)] text-[14px] py-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
