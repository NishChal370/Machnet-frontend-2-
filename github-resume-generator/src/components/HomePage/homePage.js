import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import useData from '../DataFetching/dataFetching';

import './homePage.css'

function HomePage() {
    const [input, setInput] = useState('');
    const [userData, setUserName] = useData();
    let [checkInput, setCheckInput] = useState({empty:false, color: ''});
    
    let history = useHistory();

    const inputChangeHandler=(e)=>{
        let value = (e.target.value).trim();
        setInput(value);
        setUserName(value);
    }

    const searchHandler=()=>{
        if((input).length >=1 && input.match('^[A-Za-z0-9@_-]*$')){
            history.push({pathname: "/detail", state: userData});
            checkInput={
                empty: false,
                color: ''
            }

            setCheckInput({...checkInput});
        }
        else{
            checkInput={
                empty: true,
                color: 'red'
            }
            alert("Wrong input");
            setCheckInput(checkInput);
        }
    }

    return (
        <main className="home__container">
            <section>
                <h1 className="home__title">Github Profile</h1>
                <p>Generate your Github Profile</p>
            </section>

            <section className="input__section">
                <aside>
                    <label>Github Username</label>
                    <input type="text" value={input} onChange={inputChangeHandler} style={{borderColor: checkInput.color}}/>
                </aside>
                <button className="generate__button" onClick={searchHandler}>Generate</button>
            </section>
        </main>
    )
}

export default HomePage
