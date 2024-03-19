import React  from 'react'
import { useUser } from '../context/Context'
import style from '../componantStyle/EnglishAndArabic.module.css';
export default function EnglishAndArabic() {
    const { english, arabic, direction } = useUser();
  return (
    <div className={style.EnglishAndArabic}>
      <span
        onClick={() => english()}
        className={direction === "EN" ? style.activedir : ""}
      >
        EN
      </span>
      <span
        onClick={() => arabic()}
        className={direction === "AR" ? style.activedir : ""}
      >
        AR
      </span>
    </div>
  );
}
