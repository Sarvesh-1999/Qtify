const AlbumCard = ({ image, title, followers }) => {
  return (
    <div  className="rounded-t-2xl ">
      <div className="">
        <img src={image} alt="album image" className="rounded-t-2xl" />
        <div className="flex p-3 rounded-b-2xl border bg-[var(--white)]">
          <div className="bg-[var(--black)] rounded-2xl text-sm py-1 px-2">
            {followers}
          </div>
        </div>

        <p className="bg-[var(--black)] text-[var(--white)] text-[14px] py-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
