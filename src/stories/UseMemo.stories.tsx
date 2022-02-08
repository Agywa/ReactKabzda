import React, {useMemo, useState} from "react";


export default {
    title: "Use.memo demo"
}


export const DifficultCountExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(3)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>

    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("users")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") >= 1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={() => addUser()}>addUser</button>

        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const addBook = () => {
        const newBooks = [...books, "Angular " + new Date().getTime()]
        setBooks(newBooks)
    }
    const memoizedAddBook = useMemo(() => {
        return addBook
    },[books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}



        <Book
            addBook={memoizedAddBook}/>
    </>
}

type BookSecretPropsType = {

    addBook: () => void
}


const BooksSecret = (props: BookSecretPropsType) => {
    console.log("users")
    return <div>
        <button onClick={() => props.addBook()}>addBook</button>

    </div>
}
const Book = React.memo(BooksSecret)