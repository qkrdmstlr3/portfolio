import { useRecoilState } from 'recoil';
import { CHANGE_SCREEN_SECOND } from '../constants/variables';
import { screenState, ScreenType, ScreenStateType } from '../recoil/screen/atom';

interface UseScreenProps {
  screenWantedToChange?: ScreenType;
}

interface UseScreenTypes {
  screen: ScreenStateType;
  changeScreen: () => void;
}

function useScreen({ screenWantedToChange }: UseScreenProps): UseScreenTypes {
  const [screen, setScreen] = useRecoilState(screenState);

  const changeScreen = () => {
    if (!screenWantedToChange || screen.changing) return;
    setScreen({
      changing: true,
      currentScreen: screen.currentScreen === screenWantedToChange ? 'main' : screenWantedToChange,
    });

    setTimeout(() => {
      setScreen({
        currentScreen: screen.currentScreen === screenWantedToChange ? 'main' : screenWantedToChange,
        changing: false,
      });
    }, CHANGE_SCREEN_SECOND * 1000);
  };

  return {
    screen,
    changeScreen,
  };
}

export default useScreen;
