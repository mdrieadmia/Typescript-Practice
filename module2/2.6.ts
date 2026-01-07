{
    // Constraints

    const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) =>{
        const course = "Web Development"
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 12,
        name: "Riead",
        email: "mdriead.bd@gmail.com"
    })

    const student2 = addCourseToStudent({
        id: 123,
        name: "Rony",
        email: "roni.bd@gmail.com"
    })

    const student3 = addCourseToStudent({
        id: 123,
        name: "Rony",
        email: "roni.bd@gmail.com"
    })
     
}