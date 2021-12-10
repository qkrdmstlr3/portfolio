import { useEffect, useRef, useState } from 'react';

interface UseAudioType {
  playing: boolean;
  muted: boolean;
  togglePlaying: () => void;
  toggleMute: () => void;
}

const useAudio = (url: string): UseAudioType => {
  const audio = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audio.current = new Audio(url);
  }, [url]);

  useEffect(() => {
    if (playing) {
      audio.current.play();
      return;
    }
    audio.current.pause();
  }, [playing]);

  useEffect(() => {
    audio.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    audio.current.addEventListener('ended', () => setPlaying(false));
    return () => audio.current.removeEventListener('ended', () => setPlaying(false));
  }, [audio]);

  useEffect(() => {
    audio.current = new Audio(url);
    return () => audio.current.pause();
  }, []);

  const togglePlaying = () => setPlaying(!playing);
  const toggleMute = () => setMuted(!muted);

  return { playing, muted, togglePlaying, toggleMute };
};

export default useAudio;
