import { useEffect, useRef, useState } from 'react';

interface UseAudioType {
  playing: boolean;
  muted: boolean;
  changeMusicWithStart: (link: string) => void;
  changeMusicWithStop: (link: string) => void;
  togglePlaying: () => void;
  toggleMute: () => void;
}

const useAudio = (url: string): UseAudioType => {
  const audio = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!audio.current) return;
    if (playing) {
      audio.current.play();
      return;
    }
    audio.current.pause();
  }, [playing]);

  useEffect(() => {
    if (!audio.current) return;
    audio.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (audio.current) audio.current.addEventListener('ended', () => setPlaying(false));
    return () => audio.current.removeEventListener('ended', () => setPlaying(false));
  }, [audio]);

  useEffect(() => {
    audio.current = new Audio(url);
    return () => audio.current.pause();
  }, []);

  const togglePlaying = () => setPlaying(!playing);
  const toggleMute = () => setMuted(!muted);
  const changeMusicWithStart = (link: string) => {
    if (!audio.current) return;
    audio.current.pause();
    audio.current = new Audio(link);
    audio.current.play();
    setPlaying(true);
  };

  const changeMusicWithStop = (link: string) => {
    if (!audio.current) return;
    audio.current.pause();
    audio.current = new Audio(link);
    setPlaying(false);
  };

  return { playing, changeMusicWithStart, changeMusicWithStop, muted, togglePlaying, toggleMute };
};

export default useAudio;
