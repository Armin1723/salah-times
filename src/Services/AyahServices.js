
const getAyah = async(number)=>{
    const URL = 'https://api.alquran.cloud/v1/ayah/' + number;
    return await (fetch(URL).then((res)=> res.json()));
}

const getAyahTranslation = async(surahNumber , ayahNo, language)=>{
    const translationURl = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/" + language + "/" + surahNumber + "/" + ayahNo + ".json";
    return await (fetch(translationURl).then((res)=> res.json())); 
}

const getAyahDetails=(data)=>{
    const {data:{text,
                surah:{name , number:surahNumber},
                numberInSurah,
                juz,
                ruku, 
                number
                },

} = data;
const surahName = name;
const ayahNo = numberInSurah;
// console.log({text,ayahNo,surahName,juz,ruku});


return {text,surahName,ayahNo,juz,ruku,number,surahNumber};
}

const formatAyahTranslation=(data)=>{
    let {text : formattedAyahTranslation} = data;

    return formattedAyahTranslation;
}


const getAllAyahDetails =async(number,language)=>{
    const ayahDetails = await (getAyah(number).then(getAyahDetails));
    let { surahNumber , ayahNo } = ayahDetails;
    const ayahTranslation = await (getAyahTranslation(surahNumber,ayahNo,language).then(formatAyahTranslation));
    const audioURL = "https://cdn.islamic.network/quran/audio/128/ar.alafasy/" + number + ".mp3"

    
    return {...ayahDetails, audioURL,ayahTranslation};
};

export default getAllAyahDetails