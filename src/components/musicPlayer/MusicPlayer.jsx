import React, { useState } from "react";
import AlbumImage from "../../assets/albumImg.png";
import { IconButton } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(38); // seconds
  const duration = 218; // 3:38 in seconds

  // Format seconds to mm:ss
  const formatTime = (s) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`;

  return (
    <footer className=" w-full bg-[#181818] border-t border-[#333] flex items-center px-6 py-3 z-50">
      <img src={AlbumImage} alt="album" className="w-14 h-14 rounded-lg object-cover mr-4" />
      
      <div className="flex flex-col justify-center mr-6">
        <span className="text-white font-semibold leading-tight">Song name</span>
        <span className="text-[#b3b3b3] text-xs">Album name</span>
      </div>


      <div className="flex-1 flex flex-col items-center">
        <IconButton onClick={() => setPlaying((p) => !p)} className="!bg-[#222] !text-white">
          {playing ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
        </IconButton>
        <div className="flex items-center w-[676px] mt-2">
          <span className="text-xs text-white mr-2" style={{ minWidth: 20 }}>{formatTime(progress)}</span>
          <div className="relative w-full h-1 bg-[#333] rounded">
            <div
              className="absolute top-0 left-0 h-1 bg-[#34C94B] rounded"
              style={{ width: `${(progress/duration)*100}%` }}
            />
          </div>
          <span className="text-xs text-white ml-2" style={{ minWidth: 20 }}>{formatTime(duration)}</span>
        </div>
      </div>
    </footer>
  );
};

export default MusicPlayer;
