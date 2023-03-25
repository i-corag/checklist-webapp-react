// CUSTOM HOOK FOR LOCAL STORAGE (data persistence)

import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {

    //HOOK DE REACT PARA SETAR EL ESTADO DE LA DATA INICIAL
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        //usamos un setTimeOut para simular un delay que ocurriria si hicieramos la consulta a una API
        setTimeout(() => {
            try {
                // va a traer del localStorage el elemento que se pase como argumento del hook
                const localStorareItem = localStorage.getItem('itemName');
                let parsedItem;

                // verifica si el elemento existe, lo parsea y lo guarda. Si no existe crea un initialValue
                if (localStorareItem) {
                    parsedItem = JSON.parse(localStorareItem);
                } else {
                    localStorage.setItem('itemName', JSON.stringify(initialValue));
                    parsedItem = initialValue;
                }

                setItem(parsedItem); // actualiza el estado del item con el "verdadero" valor que estaba en localStorage
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }

        }, 1500)

    }, [])


    //FUNCION PARA ACTUALIZAR EL ESTADO DE LA DATA, (no esta dentro useEffect porque no se ejecuta en automatico, NO TRAE LA INFO SINO QUE LA ACTUALIZA)
    const saveItem = (newItem) => {
        try {
            localStorage.setItem('itemName', JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return { item, saveItem, loading, error };

};

export { useLocalStorage };
