import React from "react";
import { useNavigate } from "react-router-dom";

const MiniProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mx-3">
      <div
        className="
          bg-[#e8ebf0] dark:bg-slate-800 rounded-2xl shadow hover:shadow-lg transition cursor-pointer
          flex items-center justify-center
          w-[180px] h-[200px]        // Mobile size
          sm:w-[180px] sm:h-[220px]  // Small screen
          md:w-[220px] md:h-[280px]  // Desktop size
        "
        style={{
          boxSizing: "border-box",
          overflow: "hidden",
        }}
        onClick={() => navigate(`/build/mini/${project._id}`)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      {/* Title */}
      <div
        className="mt-4 text-center font-medium text-black dark:text-white"
        style={{
          fontSize: "1.0rem",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.2px",
        }}
      >
        {project.title}
      </div>
    </div>
  );
};

export default MiniProjectCard;
