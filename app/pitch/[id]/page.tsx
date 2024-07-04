export default function Pitch ({params}: {params: {id: string}}) {
    return (
        <div className="p-5">Pitch Page For: {params.id}</div>
    )
}