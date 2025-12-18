import style from "./home.module.css";
import Journal from '../../components/Journal/Journal'

export default function Home () {
    return(
      <div className = {style.container}>
        <Journal />
      </div>
    );
}