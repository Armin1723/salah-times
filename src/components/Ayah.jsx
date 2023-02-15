import React from 'react'
import { UilRedo, UilPlay } from '@iconscout/react-unicons'

function Ayah({ayah:{juz,ruku,surahName,ayahTranslation, ayahAudio, text, ayahNo, number},setNum}) {
  const nextClick=()=>{
      setNum(number + Math.floor(Math.random()*1000));
  }

  let isPlaying= false;
  let audio = new Audio(ayahAudio);
  const playAudio=()=>{
    isPlaying ? audio.pause() : audio.play();
  }
  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  };

  return (
    <div className='flex flex-col items-center text-center space-y-5 my-2 py-3'>
        <div className='font-bold text-3xl'>Ayah of the day</div>
        <div className='font-extrabold text-3xl'>
            <button className='text-green-900 px-3 font-bold transition ease-out hover:scale-125' name='Next Ayah' onClick={nextClick} aria-details='Next Ayah'>
                <UilRedo size={22} style={{filter: "drop-shadow(5px 5px 5px #666666)"}} />
            </button>
            <span className=' drop-shadow-lg shadow-green-800'>{text}</span>
        </div>
        <div className="font-medium flex flex-row items-center text-center justify-center space-x-8  ">
            <p>Surah : {surahName} </p> 
            <p> Juz : {juz} | Ayah : {ayahNo} | Ruku : {ruku}</p>
            <button className='text-green-900 px-3 font-bold transition ease-out hover:scale-125 rounded-lg border-2 border-green-900 ' onClick={playAudio}>
                    <UilPlay size={25} />
            </button>
        </div>
        <div className='font-2xl px-5 font-bold'>{ayahTranslation}</div>
      
    </div>
  )
}

export default Ayah
