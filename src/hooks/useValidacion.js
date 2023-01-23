import React, { useEffect, useState } from 'react'




export const useValidacion = (stateInicial, validar, fn) => {

    const [valores, setvalores] = useState(stateInicial);
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if (noErrores) {
                fn(); // fn => funcion que se ejecuta en el componente
            }

            setSubmitForm(true)
        }
    }, [])

    //Funcion que se ejecuta conforme el usuario escribe algo
    const handleChange = () => {
        setvalores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    //Funcion que se ejecuta cuando el user hace el submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(true)
    }

    return{
        valores,
        errores,
        submitForm,
        handleSubmit,
        handleChange
    }



    return (

        <div>useValidacion</div>
    )
}
