let object=[
    {"person":"John","age":30,"company":"Google"},
    {"person":"Mohn","age":37,"company":"Flipkart"},
    {"person":"Kohn","age":38,"company":"Amazon"},
    {"person":"Sohan","age":40,"company":"Myntra"},
    {"person":"Jenny","age":70,"company":"Apple"},
]

for(var a=0;a<object.length; a++)
{
    console.log(object[a].person)
}

for(let human of object)
{
    console.log(human.age)
}

for(let sapien in object){
    console.log(object[sapien].company)
}


//Resume as JSON object

let resume={
    "Name":"Mahesh Rajan",
    "E-mail":"sendmailtomahesh@gmail.com",
    "Address":"1, 2nd street, 3rd nagar, Chennai-600001",
    "Contact":"9583934858",
    "Introduction":"Highly synergic, enthusiastic, and do it now guy. Looking forward to work in a web development role and contribute my best to the company and learn as much as possible simultaneously, so that I can use that I can do better than ever.",
    "Qualification":"B-Tech Cyber Security",
    "Experience":"Fresher, worked on some dummy projects",
    "Project experience":"Did penetration testing and Abibaba and Gululu, found and reported bugs",
    "Hobbies":"Badminton, TV shows, reading books"
    
}