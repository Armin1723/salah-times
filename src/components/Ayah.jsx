import React from 'react'
import { UilRedo, UilPlay } from '@iconscout/react-unicons'

function Ayah({ayah:{juz,ruku,surahName,ayahTranslation, audioURL, text, ayahNo, number}, setNum , setLanguage , language }) {
  const nextClick=()=>{
      setNum(number + Math.floor(Math.random()*1000));
      if(isPlaying)
      {
        audio.pause();
        isPlaying = false;
      }
  }

  const handleLanguageChange=(e)=>{
    const selectedLanguage = e.currentTarget.name;
    if(selectedLanguage !== language)
      setLanguage(selectedLanguage);
  }

  let isPlaying= false;
  let audio = new Audio(audioURL);
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
        <div className='flex flex-row items-center justify-around text-xl space-x-4 width-1/3'>
          <button name="eng-drlalehbakhtiar" className='transition ease-out hover:scale-110 hover:font-bold' onClick={handleLanguageChange}>English</button>
          <p>|</p>
          <button name="urd-muhammadjunagar" className='transition ease-out hover:scale-110 hover:font-bold' onClick={handleLanguageChange}>Urdu</button>
        </div>
        <div className='text-xl px-5'>{ayahTranslation}</div>
      
    </div>
  )
}

export default Ayah
