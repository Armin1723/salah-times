import Header from './components/Header';
import Inputs from './components/Inputs';
import React, { useEffect, useState } from 'react';
import SalahTime from './components/SalahTime';
import Ayah from './components/Ayah';
import Holiday from './components/Holiday';
import Footer from './components/Footer';
import getFormattedSalahData from './Services/SalahServices';
import getAllAyahDetails from './Services/AyahServices';
import './App.css';

function App() {
  const d = new Date();
  const [salah,setSalah] = useState(null);
  const [school,setSchool] = useState('1');
  const [city,setCity] = useState('lucknow');
  const [date,setDate] = useState(d.getTime());

  const [ayah,setAyah] = useState(null);
  const [num,setNum] = useState(d.getDate()*d.getMonth()*3);

  useEffect(()=> {
    const salahData = async() =>{
      const formattedSalahData = await getFormattedSalahData(date,city,school);
      await setSalah(formattedSalahData);
    }
    salahData();
  },[school,city,date]);

  useEffect(()=>{
    const ayahDetail = async() =>{
        const allAboutAyah = await getAllAyahDetails(num);
        setAyah(allAboutAyah);
    }
    ayahDetail();
  },[num]);
  return (
    <div className='h-fit max-w-screen-lg mx-auto flex flex-col text-green-pre px-10 shadow-lg shadow-gray-500 bg-gradient-to-br from-green-900 to-gray-300 '>
          <Header/>
          <Inputs school={school} setSchool={setSchool} city={city} setCity={setCity}/>
          {salah && 
            <>
              <SalahTime date={date} setDate={setDate} salah={salah} city={city}/>
              {ayah && <Ayah ayah={ayah} setNum={setNum} num={num}/>}
              <Holiday salah={salah}/>
            </>
          }
          
          <Footer/>
    </div>
  );
}

export default App;
