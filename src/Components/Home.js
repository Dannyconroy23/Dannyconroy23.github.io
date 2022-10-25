import * as React from 'react';
import Button from '@mui/material/Button';
import ugly from "./Pictures/ugly.png";
import reactPic from "./Pictures/React.png";
import rubyPic from "./Pictures/Ruby.png";
import csshtmlPic from "./Pictures/csshtml.png";



function Home(){
    return (
        <div>
              <div>
                <img className="uglyPic" alt="ugly" src={ugly}></img>
                </div>
                <div className="homeIntroDiv"> 
                    <div className="homeIntroDivtext">
                        <h4>Hello!</h4>
                        <h1><b>Im Daniel Conroy</b></h1>
                        <h3>A Software Developer </h3>
                        <h5 className="homeParagraph" >My love for software development grows stronger with every line of code. 
                        As a recent graduated of Flatiron School’s software development program, I believe my early exposure can set me up for success and allow me to learn much more. 
                        I am excited to jump into the workforce and start my software engineering career.</h5>
                        <Button style={{marginRight:"15px", backgroundColor:"indianred"}} variant='contained' >Hire Me</Button>
                        <a href="http://localhost:3000/about" style={{textDecoration:"none"}} >
                        <Button style={{backgroundColor:"indianred", textDecoration:"none"}} variant='contained' >Read More</Button>
                        </a>
                    </div>
                </div>
            <div className="contact">
                <div>
                    <div className="contactFirst">
                        <h2 style={{paddingTop:"10px"}}>Want to Contact me or have a Discussion?</h2>
                        <p style={{paddingTop:"10px"}}> Lets Chat</p>
                        <h4 style={{paddingTop:"20px"}}>Email: Dannyconroy23@hotmail.com</h4>
                        <h3 style={{paddingTop:"10px"}}>Phone: 631-678-3339</h3>
                    </div>
                    <div className="contactSecond" >
                        <h1 style={{paddingTop:"10px"}}>About Me</h1>
                        <h4 style={{paddingTop:"10px"}}>Name: Daniel Conroy</h4>
                        <h4 style={{paddingTop:"10px"}}>Email: Dannyconroy23@hotmail.com</h4>
                        <h4 style={{paddingTop:"10px"}}>Website: DanielConroy.com</h4>
                    </div>
                    <div className="contactBottom">
                        <h3 className="bottomHeader">Skills</h3>
                        <p  style={{float:"right"}}className="bottomParagraph">Experienced in Ruby backend development and JavaScript frontend-based programming. I possess strong skills in team
                            building, project management, employee communications, and work ethic that help software engineers like myself prosper 
                            in a creative work environment. I prefer my code to be fluent and readable to create unique ways of solving algorithms.
                        </p> 
                    </div>
                </div>
            </div>
            <div className="allPics">
                        <img  className="reactPic" alt="react"src={reactPic}></img>
                        <img className="csshtmlPic" alt="csshtmlPic" src={csshtmlPic}></img>
                        <img className="rubyPic" alt="ruby" src={rubyPic}></img>
            </div>
        </div>
    )
}

export default Home;