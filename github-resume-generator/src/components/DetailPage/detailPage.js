import React from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './detailPage.css'
import { AiOutlineMail } from 'react-icons/ai';
import {GrOrganization} from 'react-icons/gr';
import {GoLocation} from 'react-icons/go';
import {MdDateRange} from 'react-icons/md';
import {FaInternetExplorer} from 'react-icons/fa'

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

    const getDate=()=>{
        let date = created_at;
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
                <p className='sub__name'>@{login}</p>
                
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
                
                <section className='personal-info__container'>
                    <div className="info__container">
                        <span>
                            <p className='info__title'><AiOutlineMail/>Email</p>
                            <p>{(email)? email : 'NULL'}</p>
                            <p className='info__title'><GoLocation/>Location</p>
                            <p>{(location.state.location)?location.state.location: 'Nepal'}</p>
                            <p className='info__title'>Twiteer</p>
                            <p>{(twiteer_username)?twiteer_username:login}</p>
                        </span>
                        <span>
                            <p className='info__title'><GrOrganization/>Orgainzation</p>
                            <p>{(company)?company: 'NULL'}</p>
                            <p className='info__title'><MdDateRange/>Joined Date</p>
                            <p className='info__title'>{getDate()}</p>
                            <p className='info__title'><FaInternetExplorer/>Website</p>
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
