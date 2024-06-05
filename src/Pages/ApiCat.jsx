import useApi from "../Logic/useApi"

const ApiCat = () => {
    const Api1 = useApi('https://catfact.ninja/fact')
    const Api2 = useApi('https://cataas.com/cat?json=true')

    return (
        <>
            {Api1.data && Api1.data.fact}

            <br />
            {Api2.data && Api2.data.size}
        </>
    )
}

export default ApiCat