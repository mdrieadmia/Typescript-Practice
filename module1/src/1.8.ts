const user = {
    id: 30,
    name:{
        firstName: "MD",
        middleName: "Riead",
        lastName: "Mia"
    },
    contactNo: "01863831220",
    address: "Dhaka"
}

const {contactNo, name : { middleName : midname }} = user;


// Array Distructuring

const myFriends = ['Rashed', 'Robin', 'Ridoy', 'Rahim']

const [a, b, bestFriend] = myFriends
