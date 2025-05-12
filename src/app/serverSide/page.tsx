import { Metadata } from 'next'
import Link from 'next/link'

type IData = {
    results: {
        name: string;
        status: string;
        id: string;
    }[];
}

export const metadata: Metadata = {
    title: "lista de Personagens RM",
    description: "aplicação teste com consumo de api"
}

const ServerSide = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character/")
    const data: IData = await res.json()

    return(
        <>
        <div>Server side Page Try</div>
        {data?.results.map((item, index) => {
            return(
                <div className='mb-20' key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.id}</h2>
                    <p>{item.status}</p>
                    <Link className="bg-black text-white" href={`/personagem/${item.id}`}>Abrir Detalhes</Link>
                </div>
            )
        })}
        </>
    )
}

export default ServerSide