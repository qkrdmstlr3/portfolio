import { useEffect, useRef, useState } from 'react';

interface UseAudioType {
  playing: boolean;
  muted: boolean;
  changeMusic: (url: string) => void;
  togglePlaying: () => void;
  toggleMute: () => void;
}

const useAudio = (url: string): UseAudioType => {
  const audio = useRef<HTMLAudioElement>();
  const [link, setLink] = useState(url);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!audio.current) {
      audio.current = new Audio(link);
      return;
    }
    audio.current.pause();
    audio.current = new Audio(link);
    audio.current.play();
    setPlaying(true);
  }, [link]);

  useEffect(() => {
    if (!audio) return;
    if (playing) {
      audio.current.play();
      return;
    }
    audio.current.pause();
  }, [playing]);

  useEffect(() => {
    if (!audio) return;
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
  const changeMusic = (url: string) => setLink(url);

  return { playing, changeMusic, muted, togglePlaying, toggleMute };
};

export default useAudio;
