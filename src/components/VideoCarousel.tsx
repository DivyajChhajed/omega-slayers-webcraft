
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface VideoCarouselProps {
  videos: {
    src: string;
    poster?: string;
    title?: string;
    description?: string;
  }[];
  className?: string;
}

const VideoCarousel = ({ videos, className = "" }: VideoCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      
      // Pause all videos
      videoRefs.current.forEach((video, idx) => {
        if (video) {
          if (idx === newIndex && isPlaying) {
            video.play().catch(err => console.error("Error playing video:", err));
          } else {
            video.pause();
          }
        }
      });
    };
    
    api.on("select", handleSelect);
    
    return () => {
      api.off("select", handleSelect);
    };
  }, [api, isPlaying]);

  const togglePlayPause = () => {
    const video = videoRefs.current[current];
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(err => console.error("Error playing video:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRefs.current[current];
    if (!video) return;
    
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={`relative ${className}`}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                
                {(video.title || video.description) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {video.title && <h3 className="text-white font-bold text-lg">{video.title}</h3>}
                    {video.description && <p className="text-white/80 text-sm">{video.description}</p>}
                  </div>
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-omega-red/80 text-white border-none hover:bg-omega-red" />
        <CarouselNext className="right-4 bg-omega-red/80 text-white border-none hover:bg-omega-red" />
      </Carousel>
      
      <div className="flex justify-center mt-4 gap-6">
        <button
          onClick={togglePlayPause}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-omega-red/80 text-white hover:bg-omega-red transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-omega-red/80 text-white hover:bg-omega-red transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? 'bg-omega-red w-10' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
