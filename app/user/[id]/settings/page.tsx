export default function Settings ({params}: {params: {id: string}}) {
    return (
        <div className="p-5 text-sm">Settings for UID: {params.id}</div>
    )
}