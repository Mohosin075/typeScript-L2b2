{
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching...");
    } else {
      console.log("there is nothing to search.");
    }
  };

  searchName(null);

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedValue = (value * 1000) / 3600;
      console.log(`the speed is ${convertedValue} ms^-1`);
    }
    else if(typeof value === 'string'){
        const [result, unit] = value.split(' ');
        const convertedValue = (parseFloat(result) * 1000) / 3600
        console.log(`the speed is ${convertedValue} ms^-1`);
    }else{
        console.log("wrong value");
    }
  };

  getSpeedInMeterPerSecond('1000 kmh^-1');


  const throwError =(msg : string) : never =>{
    throw new Error(msg)
  }

  throwError('mushkil se error ho gaya')








}
