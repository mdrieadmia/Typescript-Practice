{
    //Type Assertion

    let anything :any = "Dhaka";
    anything = 150;
    (anything as number)

    const kgToGm = (value: string | number) =>{
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value);
            return `The converted value is : ${convertedValue * 1000}}`;
        }
        if(typeof value === 'number'){
            return value*1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string

    type CustomError = {
        message: string;
    }

    try{

    }catch(error){
        console.log((error as CustomError).message)
    }

}