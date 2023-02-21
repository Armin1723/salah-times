import React from 'react'
import { UilBookOpen , UilPrevious , UilStepForward } from '@iconscout/react-unicons'
import { DateTime } from 'luxon';

function SalahTime({date, setDate, salah:{Fajr,Dhuhr,Asr,Maghrib,Isha,Sunrise,Sunset,day,mon,year},city}) {


  const calendar=(e)=>{
    setDate(date+ (60*24*60*1000)*e.currentTarget.name);
  }

  return (
    <div className='my-6 sm:my-2 '>
      < div className='flex justify-around media-responsive gap-5 text-md items-center p-3' style={{"fontSize":'3vh'}}>

      <div className='flex flex-col font-serif font-bold items-center justify-around space-y-2'>
            <div>Fajr: {Fajr}</div>
            <div>Dhuhr: {Dhuhr} </div>
            <div>Asr: {Asr}</div>
            <div>Maghrib: {Maghrib}</div>
            <div>Isha: {Isha}</div>
        </div>
    
        <div className='flex flex-col justify-between items-center space-y-2'>
            <UilBookOpen size={100} className='transition text-green-900 ease-out hover:scale-125 hover:text-green-700 '/>
            <div className='text-xl font-extrabold text-black-900 drop-shadow-lg shadow-green-900'>Salah Times</div>
            <div className='text-xl font-extrabold text-green-900'>نماز کے اوقات</div>
            <div className='text-xl font-bold italic capitalize'>{city}</div>
        </div>

        <div className='flex flex-col items-center font-serif font-bold justify-around gap-2 captalize'>
            <div>Date: {day}</div>
            <div>Month: {mon}</div>
            <div>Year: {year}</div>
            <div>Sunrise: {Sunrise}</div>
            <div>Sunset: {Sunset}</div>
        </div>
      </div>


        <div className='flex flex-row items-center text-center justify-center my-3 text-xl space-x-5'>
        <button className='transition hover:scale-125 text-green-900' name='-1' onClick={calendar}>
            <UilPrevious size={50}/>
        </button>
        <div className='font-bold'>{DateTime.fromSeconds(date/1000).toFormat('dd-MM-yyyy')}</div>
        <button className='transition hover:scale-125 text-green-900' name='+1' onClick={calendar}>
            <UilStepForward size={50}/>
        </button>
      </div>

  </div>
  )
}

export default SalahTime;
