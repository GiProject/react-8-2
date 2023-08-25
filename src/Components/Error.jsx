import useJsonFetch from '../Hooks/useJsonFetch';

export default function Error() {
    
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error', []);

    return <div>Error: {!!error ? error.status : ''}</div>
}