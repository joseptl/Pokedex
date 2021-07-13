import { useState,useEffect } from "react";

export const useFetch = (url)=>{
    const [data, setData]=useState(null);
    const [isPending, setIsPending]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const abortController=new AbortController();
        const signal = abortController.signal
        async function fetchData(){
            try{
                const response = await fetch(url, { signal: signal })
                if(!response.ok){
                    throw{
                        err:true, 
                        status:response.status,
                        statusText:!response.statusText
                        ?"Ocurrió un error"
                        :response.statusText}
                }
                const data = await response.json()

                setIsPending(false);
                setData(data);
                setError({err:false})
            }catch(err){
                setIsPending(true);
                setError(err)
            }
            
                
        }
        return  ()=>abortController.abort()
    },[url])

    return {data, isPending, error}
}