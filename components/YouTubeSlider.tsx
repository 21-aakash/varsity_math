
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface YouTubeApiSnippet {
  title: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
}

interface YouTubeApiItem {
  id: { videoId: string };
  snippet: YouTubeApiSnippet;
}

const YouTubeSlider = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // const API_KEY = process.env.NEXT_PUBLIC_YT_API_KEY; // put key in env
  // const CHANNEL_ID = "UCqu5x5i3wvkmR_ES6aMgRTw";

    const API_KEY = "AIzaSyAlENY77RdoQEK_dR1H41VtRqZzeukqSbM"; // replace with your API key
  const CHANNEL_ID = "UCqu5x5i3wvkmR_ES6aMgRTw"; // VarsityMath channel ID

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
        );
        const data = res.data.items.map((item: YouTubeApiItem) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(data);
      } catch (err) {
        console.error("YouTube Fetch Error:", err);
      }
    };

    fetchVideos();
  }, []);

  const itemsPerPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    if (currentIndex < videos.length - itemsPerPage) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (

    <>
    
    
  
   


<div className="w-full px-4 py-8 relative bg-slate-100 ">

<h2 className="flex items-center justify-center gap-3 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 relative">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/824px-Youtube_shorts_icon.svg.png"
    alt="YouTube Shorts"
    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
  />
  <span className="truncate">Latest Videos</span>
  <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-orange-500 rounded-full"></span>
</h2>




      {/* Slider container */}
      <div className="overflow-hidden p-6">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="px-3 flex-shrink-0"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div
                className="  relative bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div className="p-3 ">
                  <p className="font-medium text-sm md:text-base text-gray-800 line-clamp-2">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        disabled={currentIndex >= videos.length - itemsPerPage}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
      >
        <ChevronRight />
      </button>

      {/* Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden">
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>


      </>
  );
};

export default YouTubeSlider;
