function Validation(values:any) {
    let error:any = {};
    if(values.name === ""){
        error.name = "Name is required";
    }
    else{
        error.name = ""
    }
    if(values.email === ""){
        error.email = "Email is required";
    }
    else{
        error.email = ""
    }
    if(values.message === ""){
        error.message = "Message is required";
    }
    else{
        error.message = ""
    }
    return error
}
export default Validation;