import React from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './detailPage.css'
import backImg from '../../images/backArrow.png'

function DetailPage() {
    const  location = useLocation();
    const history = useHistory();    
    
    let {
        avatar_url,
        name, login,
        bio, created_at,
        twiteer_username, 
        company, 
        public_repos, email, 
        followers, following} = location.state

    console.log("->",company);

    const getDate=()=>{
        var date = created_at;
        date = date.substring(0,10);
        let day = date.substring(8,10);
        let year = date.substring(0,4);
        let month = date.substring(5,7);
        date = day+"-"+month+"-"+year;

        return date;
    }

    const showHireHandler=()=>{
        if(company === null){
            return true
        }
        else{
            return false
        }
    }

    return (
        <div className="details__container">
            <nav>
                <figure className='back__image' onClick={()=> history.goBack()}>
                    <img src={backImg} alt="backButton" />
                </figure>
                {
                    (showHireHandler())
                        ? <button className='hire__button'>Hire Me</button>
                        : ''
                }
            </nav>
            
            <main className="detail__container">
                <figure className='avatar__image'>
                    <img src={avatar_url} alt="avatar" />
                </figure>
                <h1 className='name'>{(name)? name: login}</h1>
                <p>@{login}</p>
                <section className="followers__section">
                    <span>
                        <p>{followers}</p>
                        <p className="button">Followers</p>
                    </span>
                    <span>
                        <p>{following}</p>
                        <p className="button">Following</p>
                    </span>
                    <span>
                        <p>{public_repos}</p>
                        <p className="button">Repositories</p>
                    </span>
                </section>
                
                <section className='abc'>
                    <div className="info__container">
                        <span>
                            <p className='info__title'>Email</p>
                            <p>{(email)? email : 'xyz@gmail.ccom'}</p>
                            <p className='info__title'>Location</p>
                            <p>{(location.state.location)?location.state.location: 'Nepal'}</p>
                            <p className='info__title'>Twiteer</p>
                            <p>{(twiteer_username)?twiteer_username:login}</p>
                        </span>
                        <span>
                            <p className='info__title'>Orgainzation</p>
                            <p>{(company)?company: 'NULL'}</p>
                            <p className='info__title'>Joined Date</p>
                            <p className='info__title'>{getDate()}</p>
                            <p className='info__title'>Website</p>
                            <p className='info__title'>github.com</p>
                        </span>
                    </div>
                    
                    <aside className='bio'>
                        <p className='bio__title'>Bio</p>
                        <p>{
                            (bio)
                                ? bio 
                                : " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." }</p>
                    </aside>
                </section>                    
                
            </main>
           
        </div>
    )
}

export default DetailPage
