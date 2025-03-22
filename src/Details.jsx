import { memo } from "react"

function InitialDetails({ details, handleLoading}) {
    return (
        <>
            <h1>{details.title}</h1>
            <div>{details.description}</div>
            <button onClick={handleLoading}>{details.buttonText}</button>
        </>
    )
}

export const Details = memo(InitialDetails)