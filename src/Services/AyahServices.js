
const getAyah = async(number)=>{
    const URL = 'https://api.alquran.cloud/v1/ayah/' + number;
    return await (fetch(URL).then((res)=> res.json()));
}

const getAyahData =async(number,call)=>{
    const ayahURL = "https:/api.alquran.cloud/v1/ayah/" + number +'/' + call;
    return await (fetch(ayahURL).then((res) =>res.json()));
}

const getAyahDetails=(data)=>{
    const {data:{text,
                surah:{name},
                numberInSurah,
                juz,
                ruku, 
                number
                },

} = data;
const surahName = name;
const ayahNo = numberInSurah;
// console.log({text,ayahNo,surahName,juz,ruku});


return {text,surahName,ayahNo,juz,ruku,number};
}

const getAyahTranslation=(data)=>{
    const { data:{text} } = data;
    const ayahTranslation = text;
    // console.log(ayahTranslation)
    return ayahTranslation;
}

const getAyahAudio =async (data) =>{
    const {data:{audio}} = await data;
    const ayahAudio = audio;
    // console.log(ayahAudio)
    return ayahAudio;
}

const getAllAyahDetails =async(number)=>{
    const ayahDetails = await (getAyah(number).then(getAyahDetails));
    const ayahTranslation = await (getAyahData(number,'en.asad').then(getAyahTranslation));
    const ayahAudio = await (getAyahData(number,'ar.alafasy').then(getAyahAudio));
    
    return {...ayahDetails,ayahTranslation,ayahAudio};
};

export default getAllAyahDetails