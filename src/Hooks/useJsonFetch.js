import {useState, useEffect} from "react";

export default function useJsonFetch(url, opts) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(
        () => {
            (async () => {
                setIsLoading(true);
                try {
                    let response = await fetch(url, opts);
                    let result = await response.json();
                    if(response.ok){
                        setData(result);
                    } else {
                        setError(result);
                        throw new Error(result);
                    }
                } catch(e) {
                    console.log(e);
                } finally {
                    setIsLoading(false);
                }       
            })()
        }
    , [])

    return [data, {loading: isLoading}, error]    

}