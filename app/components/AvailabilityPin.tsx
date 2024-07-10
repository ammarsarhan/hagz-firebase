export default function AvailabilityPin ({available} : {available: boolean}) {
    return (
        <span className="mb-4 text-sm flex items-center">
            <div className={"ml-1 mr-4 " + (available ? "pulsating-green" : "pulsating-red")}></div>
            {available ? "" : "Not"} Available @ Specified Time
        </span>
    )
}