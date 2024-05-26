import React from "react";

export function useGet(url) {
    const [variable, setVariable] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setVariable(data))
            .finally(() => setLoading(false));
    }, [url]); 

    return { variable, loading };
}