import { useRouteError } from "react-router-dom";

export function ErrorPage () {
    const error = useRouteError()

    console.log(error)

    return (
        <div className="error-page-container">
            <h1>Ops!</h1>
            <p>Temos um problema</p>
            <p>{error.statusText}</p>            
            <p>{error.message}</p>
        </div>
    )
}