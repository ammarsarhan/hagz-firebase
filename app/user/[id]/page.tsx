export default function Profile ({params}: {params: {id: string}}) {
    return (
        <div className="p-5 text-sm">Profile Page: {params.id}</div>
    )
}