interface IPersonagens{
    params: {
        id: string;
        gender: string;
        species: string;
        status: string;
    }
}

interface IDataStaticIndex{
    results: {
        id: number;
    }[]
}


const Personagens = async ({params: {id}} : IPersonagens) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.gender}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
        </div>
    )
}

export default Personagens

export async function generateStaticParams(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data: IDataStaticIndex = await res.json()

    return data.results.map((item) => ({
        id: item.id.toString()
    }))
}