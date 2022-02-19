import React, {useEffect, useState} from "react";


export default {
    title: "useEffect demo"
}


export const SimpleExample1 = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)
    console.log("SimpleExample1")

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()

    })
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)")
        document.title = counter.toString()

    }, [])
    useEffect(() => {
        console.log("useEffect  first render and every counter change")
        document.title = counter.toString()

    }, [counter])

    return <>
        Hello,

        <button onClick={() => setFake(fake + 1)}>fake +</button>
        {fake}
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
        {counter}

    </>
}

export const SetTimeoutExample = () => {
    let [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SimpleExample1")

    // useEffect(() => {
    //     console.log("useEffect every render")
    //     document.title = counter.toString()
    // })

    useEffect(() => {
        setInterval(() => {
          setCounter((state) => state + 1)
        }, 1000)

    }, []) // не забывать про зависимости, могут приходить из пропсов

    return <>
        <div>  Timer, counter: {counter} - fake: {fake} </div>
        Hello,

        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        {/*{fake}*/}
        {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
        {/*{counter}*/}

    </>
}

