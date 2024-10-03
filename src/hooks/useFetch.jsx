import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState(null)
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const RequestConfig = (data, method)=>{
        if (method ===  'POST'){
            setConfig({
                method,
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(data)
            })
    
            setMethod(method)
        }
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                setLoading(true)
                const res = await fetch(url)
                const json = await res.json()
                setLoading(false)
                setData(json)                
            } catch (error) {
                console.log(error.message)
                setError('Houve algum erro ao carregar os dados!')
            }
        }
        fetchData()
    }, [url, callFetch])

    useEffect(()=>{
        const Request = async () => {
            let json

            if (method === 'POST'){

                setLoading(true)

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                json = await res.json()

                setLoading(false)

            }
            setCallFetch(json)
        }

        Request()
    }, [url, config, method])

    return { data, RequestConfig, loading, error }
}