{
    // type frontentDeveloper = 'Fakibaz Developer' | 'Junior Developer'
    // type fullStackDeveloper = 'Fakibaz Developer' | 'Expert Developer'
    // type Developer = frontentDeveloper | fullStackDeveloper

    // const newDeveloper:frontentDeveloper = "Junior Developer"

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup : "B+" | "A+" | "O+"
    }

    const user1 : User = {
        name: "Riead",
        gender: "male",
        bloodGroup: "B+"
    }


    type FrontedDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullStackDeveloper = FrontedDeveloper & BackendDeveloper

    const newDeveloper: FullStackDeveloper ={
        skills : ["HTML", "CSS", "React"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }

    
}