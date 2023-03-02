import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    const {status, statusText} = error;

    {
        /**
         * or we can destructure on the fly
         * i.e const {status, statusText} = useRouteError();
         */
    }
    console.log(error);
  return (
    <div>
        <h1>Something went wrong</h1>
        <span>{status} : {statusText}</span>
    </div>
  );
}

export default Error;