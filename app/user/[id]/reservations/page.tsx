export default function Reservations ({params}: {params: {id: string}}) {
    return (
        <div className="p-5 text-sm">Reservations for UID: {params.id}</div>
    )
}