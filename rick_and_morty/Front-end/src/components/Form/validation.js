import Form from "./Form";
const validation = (data) => {
    const errors = {};
    const regexemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const regexpassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;


    if(!data.email) {
        errors.e1 = 'No puede estar vacio'
    }
    if(!regexemail.test(data.email)){
        errors.e2 = 'Debe ser un mail valido'
    }
    if(data.email.length > 35) {
        errors.e3 = 'Debe tener menos de 25 caracteres'
    }

    if(!regexpassword.test(data.password)){ 
        errors.e4 = 'Debe tener un numero, una mayuscula, y entre 8 y 16 caracteres'
    }

    return errors;

}

export default validation