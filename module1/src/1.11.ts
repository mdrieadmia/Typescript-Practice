{
    const age: number = 20;
    if(age >=18){
        console.log('Adult');
    } else{
        console.log("Not Adult")

    }

    const isAdult = age >= 27 ? 'Adult' : 'Not Adult';
    console.log(isAdult)

    // Nullish coalescing operator

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "Guest" 
    const result2 = isAuthenticated ? isAuthenticated : 'Guest' 

    console.log({result1}, {result2})


    type User  = {
        name: string,
        address: {
            city: string,
            road: string,
            presentAddress: string,
            parmanentAddress?: string,
        }
    }

    const user1: User ={
        name: "Riead",
        address:{
            city: "Dhaka",
            road: "5",
            presentAddress: "Banasree",
            parmanentAddress: "Rangpur"
        }
    }

}