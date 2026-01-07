{
    // Basic Promise

    const firstPromise = () : Promise<string> =>{
        return new Promise<string>((resolve, reject)=>{
            const data : string = "Someting"
            if(data){
                resolve(data)
            }else{
                reject("No Data Found")
            }
        })
    }
    
    const showData = async()=>{
        const result = await firstPromise()
        console.log(result)
    }

    showData()


    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }


    const getTodo = async (): Promise<Todo> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data;
    }

    getTodo();
}