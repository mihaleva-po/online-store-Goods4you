import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface ErrorWithMessage {
    message?: string;
    statusText?: string;
}

export default function ErrorPage() {
    const error = useRouteError();

    // Проверяем, является ли ошибка объектом с типом ошибки маршрута
    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText}</i>
                </p>
            </div>
        );
    }

    // Проверяем, является ли ошибка объектом с сообщением
    const errorWithMessage = error as ErrorWithMessage;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorWithMessage.message || 'Unknown error'}</i>
            </p>
        </div>
    );
}
