import useJsonFetch from '../Hooks/useJsonFetch';

export default function Loading() {
    
    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading', []);

    return <div>Loading: {!!loading ? '...' : ''}</div>
}