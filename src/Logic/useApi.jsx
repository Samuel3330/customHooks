import { useState, useEffect } from "react"
const useApi = (url) => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))

    }, [])

    return { data, url }
}

export default useApi