import useJsonFetch from '../Hooks/useJsonFetch';

export default function Data() {
    
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data', []);

    return <div>Data: {!!data ? data.status : ''}</div>
}