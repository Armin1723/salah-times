import React, { useState } from 'react'
import { UilSearch , UilMapPin } from '@iconscout/react-unicons'


function Inputs({school,setSchool,city,setCity}) {

  const [selectedCity, setSelectedCity] = useState('');


//eslint-disable-next-line
  const getCity = async({lat,lon})=>{        { /*To fetch city name using lat lon */}
  const url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=en" ;
  const cityData =  await fetch(url).then((res)=>res.json());
  return cityData.city + ',' + cityData.countryCode;
}

const handleSchoolChange=(e)=>{
  const selectedSchool = e.currentTarget.name;
  if(school!==selectedSchool)
    setSchool(selectedSchool);
}
const handleSearch=()=>{
  if(city!== selectedCity){
    setCity(selectedCity);
    
  }
  setSelectedCity('')    
}

const locationClick= async ()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(async(position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      await( getCity({lat,lon})
                .then((data => setCity(data))) );
      console.log(city);
      setSelectedCity('');
    })
  }

}


  return (
    <div className='text-xl inputbox-responsive font-bold py-3 px-5 flex flex-row justify-between ' >
      <div className="flex flex-row items-center justify-between gap-5 w-2/4">
          <input type="text" name="city" onChange={(e)=>setSelectedCity(e.currentTarget.value)} placeholder='search for city...' className='text-md pl-4 font-light w-full h-10 shadow-xl capitalize focus:outline-none border-l-blue-40 rounded-lg border-blue-500 '/>
          <button ><UilSearch size={25} className="text-green-900 transition ease-out hover:scale-125 res" onClick={handleSearch} /></button>
          <button ><UilMapPin size={25} className="text-green-900 transition ease-out hover:scale-125 res" onClick={locationClick}/></button>
      </div>

      <div className='font-bold flex flex-row items-center school-selector-responsiveness justify-around w-1/4'>
        <button name='1' onClick={handleSchoolChange} className="transition ease-out hover:scale-125" >Hanfi</button>
        <p className='font-medium'>|</p>
        <button name='0' onClick={handleSchoolChange} className="transition ease-out hover:scale-125" >Shaifi</button>  
      </div>
      
    </div>
  )
}

export default Inputs
