import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (<div className={"App"}>

            <Rating
                value={ratingValue}
                onClick={setRatingValue}/>


            <Accordion
                titleValue={"Menu"}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
            />
            <UncontrolledOnOff onChange = {setSwitchOn}/> {switchOn.toString()}

            <UncontrolledAccordion titleValue={"BlaBla"}/>
{/*
            <OnOff
                on={switchOn}
                onChange={(on) => {
                    setSwitchOn(on)
                }}
            />*/}


            {/*

            <UncontrolledRating/>
*/}


            {/*
            <input/>
            <input value={"yo"} type={"password"}/>

            <PageTitle title = {"This is App Component"}/>
            <PageTitle title = {"My friends"}/>
            Article 1


            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>


            <UncontrolledRating/>


            <UncontrolledAccordion titleValue={"Meeeei"}/>

            <UncontrolledAccordion titleValue={"Uses"}/>


*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {

    console.log("PageTitel rendering")
    return <h1>{props.title}</h1>
}

export default App;
