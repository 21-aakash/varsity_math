"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Socials() {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col space-y-1.5 p-1.5 bg-white/90 shadow-lg rounded-l-xl">
      
      {/* YouTube */}
      <a
        href="https://youtube.com/@varsitymath1057?si=0U9Tc4v5jHuEPTVs"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
      >
        <YouTubeIcon fontSize="small" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/varsity_math_?utm_source=qr&igsh=aW5pbWs0OG81djl6"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gradient-to-tr from-pink-500 to-purple-500 text-white rounded-full hover:opacity-90 transition"
      >
        <InstagramIcon fontSize="small" />
      </a>

      <a
  href="https://api.whatsapp.com/send?phone=917852059628&text=Hello%20Varsity%20Math!"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
>
  <WhatsAppIcon fontSize="small" />
</a>

    </div>
  );
}
