import React, { useCallback, useState   } from "react";

const App = (props : { message: string }) => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((count) => count + 1);
    }, [count]);
    return (
        <div>
            <h1>{props.message}</h1>
            <h2>Count : {count}</h2>
            <button onClick={increment}>increment</button>
        </div>
    );
}

export default App; // <--- Asegúrate de que esta línea exista