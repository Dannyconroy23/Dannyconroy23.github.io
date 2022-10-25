import image from "./Pictures/twitter.png";
import images from "./Pictures/linkedin.png";
import image3 from "./Pictures/github.png";
import { Timeline } from 'react-twitter-widgets';
import React, { useEffect } from 'react'
import Pic1 from "./Pictures/monster.png";


function Links(){
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    

    return(
        <div>
            <div className="linksPage">
                <div className="links">
                    <div className="twitterDiv">
                        <h1>Twitter</h1>
                        <a href="https://twitter.com/Software__Dan" target="_blank" rel="noreferrer">
                            <img alt="twitter" className="twitterImg" src={image}></img>
                        </a>
                    </div>
                    <div className="linkDiv">
                    <h1>LinkedIn</h1>
                    <a href="https://www.linkedin.com/in/daniel-conroy-profile/" target="_blank" rel="noreferrer">
                        <img alt="linkedin" className="linkImg"src={images}></img>
                    </a>
                    </div>
                    <div className="gitDiv">
                    <h1>Github</h1>
                    <a href="https://github.com/Dannyconroy23" target="_blank" rel="noreferrer">
                        <img alt="github" className="gitImg"src={image3}></img>
                    </a>
                 </div>
                    </div>
                    <div style={{marginLeft:"590px" ,float:"left", textDecoration:"none",}} class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="daniel-conroy-profile" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/daniel-conroy-profile?trk=profile-badge"></a></div>
                    <div className="timeline">
                    <Timeline 
                    dataSource={{ sourceType: "profile", screenName: "software__dan" }}
                    options={{ dnt: true, width: "400", height: "600" }}
                    />
                </div>
                <div>
                <h1 className="sinatras" >Sinatra's</h1>
                    <h3 className="sinatras" > This project is based around a fake restaurant that me and a few classmates created at Flatiron School.
                        For the backend of the project we used Ruby on Rails, and for the front-end of the project we used React.
                        For most of the styling in our website we used a React component libaray called MUI which was very accessible.
                    </h3>
                </div>
                <div >
                    <iframe className= "demoVid" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6946956641116274688" height="500" width="500" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>

            </div>
            
        </div>
    )
              
}

export default Links;