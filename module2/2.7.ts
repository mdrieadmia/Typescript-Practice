{
    //Generic Constraint With keyof Operator

    type Veichle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship';

    type Owner2 = keyof Veichle;

    const getCarValue =<X, Y extends keyof X> (obj:X , key:Y)=>{
        return obj[key]
    }
    
    const car1 = {
        name: "Toyota",
        model: "XS",
        year: 2002
    }

    const result = getCarValue(car1, 'name')


}