export default function User ({params}: {params: {id: string}}) {
    return (
        <div className="p-5">
            User Profile for ID: {params.id}
        </div>
    )
}