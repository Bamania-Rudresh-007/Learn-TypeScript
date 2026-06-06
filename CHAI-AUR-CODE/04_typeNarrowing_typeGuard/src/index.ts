function subjectCode(subject: string | number): string | number{
    if(typeof subject === "string"){
        return `SubCode is: ${subject}`;
    }
    else{
        return subject;
    }
}

type get = {
    type: "get",
}

type post = {
    type: "post",
    data: "string"
}

type deleteR = {
    type: "delete"
}

type request = get | post | deleteR;

function makeRequest(req: request){
    switch (req.type) {
        case "get":
            console.log("Its a get request");
            break;
        case "post":
            console.log("Its a post request");
            break;
        case "delete":
            console.log("Its a delete request"); 
            break;
    }
}

type  Admin = {
    name: string,
    role: string
}
type User = {
    name: string,
    occupation: string
} 

function isAdmin(account: Admin | User): account is Admin{
    return "role" in account;
}

function getAccountType(account: Admin | User){
    if(isAdmin(account)){
        console.log(`Admin with role: ${account.role}`);
    }
    else{
        console.log(`User with occupation: ${account.occupation}`);
    }
}