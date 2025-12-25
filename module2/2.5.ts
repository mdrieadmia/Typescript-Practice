{
    //  Functions with Generics


    const createArray = (param: string) : string[] =>{
        return[param]
    }
    const createArrayWithGeneric = <T>(param: T) : T[] =>{
        return[param]
    }

    createArray('Hello Bangladesh')
    const newArray = createArrayWithGeneric<boolean>(true)
    const newArray2 = createArrayWithGeneric<string>("Hello")
    const newArray3 = createArrayWithGeneric<{id: number, name: string}>({id: 1, name: "Riead"})
}