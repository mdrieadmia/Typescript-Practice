{
    //Nullable Types

    const searchName = (value:string | null)=>{
        if(value){
            console.log('Searching');
        }else{
            console.log('There are nothing to search');
        }
    }

    searchName(null)


    const getSpeedMeterPerSecond = (value: unknown)=>{
        if(typeof value === 'number'){
            const convertedSpeed = (value*1000)/3600;
            console.log(`This is the speed ${convertedSpeed} ms^-s`)
        }
    }

    getSpeedMeterPerSecond(1000);
}