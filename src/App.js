import React from 'react';
import style from './App.module.scss';


function App() {
    return (
        <div className={style.base}>
            <div className={style.title}>Gallery</div>
            <img className={style.image} src={'./img/img1.jpg'}/>
            <div className={style.previewsBlock}>
                <img className={style.Picture1} src={'./img/img1.jpg'} alt={''}/>
                <img className={style.Picture2} src={'./img/img2.jpg'} alt={''}/>
                <img className={style.Picture3} src={'./img/img3.jpg'} alt={''}/>
                <img className={style.Picture4} src={'./img/img4.jpg'} alt={''}/>
                <img className={style.Picture5} src={'./img/img5.jpg'} alt={''}/>
                <img className={style.Picture6} src={'./img/img6.jpg'} alt={''}/>
            </div>
            <div className={style.buttonsBlock}>
                <div className={style.leftButton}>Left</div>
                <div className={style.rightButton}>Right</div>
            </div>
        </div>
    );
}

export default App;


