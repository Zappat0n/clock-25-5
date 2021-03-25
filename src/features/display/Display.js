import { useDispatch, useSelector } from "react-redux"
import { playAsync, changePlaying } from "./displaySlice";


const Display = () => {
  const selectTitle = useSelector(state => state.display.title);
  const selectPlaying = useSelector(state => state.display.playing);
  const selectMins = useSelector(state => state.display.mins);
  const selectSecs = useSelector(state => state.display.secs);
  const dispatch = useDispatch();

  const play = () => {
    dispatch(playAsync(!selectPlaying));
    dispatch(changePlaying());
  }

  return (
    <div className="mainFrame">
      <div className="Display">
        <h3>{selectTitle}</h3>
        <span>{selectMins}:{(selectSecs < 10 ? '0':'')+selectSecs}</span>
      </div>
      <div className="container-icons">
        <div className="icons pointer" onClick={() => play()}>
          <i class="fas fa-play"></i>
          <i class="fas fa-pause"></i>
        </div>
        <i class="icon pointer fas fa-sync-alt"></i>
      </div>

    </div>
  )
}

export default Display;
