import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";


function App() {

    return (<div>

         <input/>
             <input value={"yo"} type={"password"}/>

             <PageTitle title = {"This is App Component"}/>
             <PageTitle title = {"My friends"}/>
             Article 1
            <Rating value={2} onClick={value => value}/>


         </div>
     );
 }

type PageTitlePropsType = {
    title : string
}
function PageTitle( props : PageTitlePropsType) {

    console.log("PageTitel rendering")
    return <h1>{ props.title }</h1>
}

export default App;
