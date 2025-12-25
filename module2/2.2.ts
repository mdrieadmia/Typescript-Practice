{

    //Interface

    type User1 = {
        name: string;
        age: number;
    }

    type NewUser = User1 & {role : string}

    const user: NewUser ={
        name: "Riead",
        age: 25,
        role: "Developer"
    }

    interface User2  {
        name: string,
        age: number, 
    }

    interface UserWithRole extends User2 {
        role: string,
    }

    const user2: UserWithRole ={
        name: "Rifat",
        age: 20,
        role: "New Developer",
    }

    type Roll1= number []

    const rollNumber : Roll1
}