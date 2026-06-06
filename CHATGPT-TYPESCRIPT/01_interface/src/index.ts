interface User{
    name: string,
    email: string,
    password: string
}

interface Student{
    name: string,
    email: string,
    password: string,
    phoneNo: number,
    enrollmentNo: number,
    address: string,
    id: string,
}

type apiRes = {
    success: boolean,
    statusCode: number,
    data: Student,
    message: string,
    status: string,
}