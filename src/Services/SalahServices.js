import { DateTime } from "luxon";


const formattedDate=(date)=>{
    return DateTime.fromSeconds(date/1000).toFormat('yy-MM-dd');
}


const getSalahData = async (date, city, school)=>{
    const salahURL = 'https://api.aladhan.com/v1/timingsByAddress/' + formattedDate(date) + '?address=' + city + '&school=' + school + '&method=3&tune=0,0,0,0,0,3,0,0,0';
    return await fetch(salahURL).then((res) => res.json());
};

const formatSalahData = (data)=>{
    
    const { data:{ timings:{Fajr, Sunrise, Dhuhr, Asr, Maghrib, Sunset, Isha },
            date: { hijri:{day, month:{ar},year,holidays}} }
        } =  data ;
                    const mon = ar;
                    const holiday = holidays[0];

    return {
            Fajr,
            Sunrise,
            Dhuhr,
            Asr,
            Maghrib,
            Sunset,
            Isha,
            day,
            mon,
            year,
            holiday        
    };
}

const getFormattedSalahData = async (date,city,school)=>{
    const formattedSalahData = await  getSalahData(date,city,school).then(formatSalahData);

    return formattedSalahData;
    // console.log(formattedSalahData);


};


export default getFormattedSalahData;
export { formattedDate };



