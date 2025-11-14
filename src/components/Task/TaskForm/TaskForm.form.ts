import * as Yup from 'yup'

export function initialValues(){
    return{
        task:''
    }
}

export function validationschema(){
    return Yup.object({
        task:Yup.string().required('danger')
    })
}