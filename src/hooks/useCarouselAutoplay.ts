
import { useState, useEffect, useCallback } from "react";

interface CarouselApi {
  scrollNext: () => void;
}

interface UseCarouselAutoplayOptions {
  interval?: number;
  initialAutoPlay?: boolean;
}

export function useCarouselAutoplay(
  api: CarouselApi | null,
  options: UseCarouselAutoplayOptions = {}
) {
  const { interval = 5000, initialAutoPlay = true } = options;
  const [autoPlay, setAutoPlay] = useState(initialAutoPlay);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    let intervalId: number;
    
    if (autoPlay && api) {
      intervalId = setInterval(scrollNext, interval) as unknown as number;
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, api, scrollNext, interval]);

  const pauseAutoplay = useCallback(() => setAutoPlay(false), []);
  const resumeAutoplay = useCallback(() => setAutoPlay(true), []);

  return {
    autoPlay,
    setAutoPlay,
    pauseAutoplay,
    resumeAutoplay
  };
}
