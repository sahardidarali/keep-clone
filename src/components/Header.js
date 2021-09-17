import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Navigation from './Navigation'
const Header = (props) => {

    const nav = () => {
        let navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active');
    }
    
    return (
        <div>
            <div className="ui secondary  fixed  pointing menu top-nav">

                <i style={{ padding:"2rem" }} onClick={nav} className="toggle bars large icon"></i>
<img src="keep.png" height="35rem" alt="Keep logo"style={{marginTop:"1.2rem",marginLeft:"0.5rem"}} />
                <Link to="/" className="item" style={{color:"#4d4d4d",fontSize:"1.8rem",marginTop:"0.2rem",marginLeft:"-1rem"}}>
                    Keep
                </Link>
                <div>
                    
                </div>
                <div style={{ margin: "0.5rem", width: "30rem" }} className="ui left icon input">
                    <input type="text" placeholder="Search..." />
                    <i className="search icon"></i>
                </div>
                
                <div className="right  menu" >
                   <img className="ui circular image" src={props.profileImage}  height="50rem" alt="" style={{margin:"0.5rem"}}/>
                </div>

            </div>
           <Navigation/>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        profileImage: state.auth.profileImage,
    }
}


export default connect(mapStateToProps)(Header)
