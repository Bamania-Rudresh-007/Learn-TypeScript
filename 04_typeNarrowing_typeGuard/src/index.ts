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

function makeRequest(req: get | post | deleteR){
    if(req.type === "get"){
        return `Its get request`;
    }
    if(req.type === "post"){
        return `Its post request`;
    }
    if(req.type === "delete"){
        return `Its deleee request`;
    }
}