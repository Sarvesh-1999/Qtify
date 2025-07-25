import React from "react";
import { Button } from "@mui/material";
import style from "./Section.module.css";

const Section = ({ title, showAll, onToggleShowAll, children }) => {
  return (
    <section className={style.section}>
      <header className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <Button
          variant="text"
          className="!text-[#34C94B] !font-bold !capitalize"
          onClick={onToggleShowAll}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </header>
      {children}
    </section>
  );
};

export default Section;
