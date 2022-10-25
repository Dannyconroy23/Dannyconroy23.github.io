import Button from '@mui/material/Button';

function Blog(){
    return(
        <div>
            <h1>Blogs</h1>
            <div className="allBlogs">
                <div className="blog1">
                    <h2>Is Coding for You?</h2>
                    <p>Today, I am taking classes at flatiron school, 
                    where they teach me about software development and computer science. 
                    However, about a year ago I was finishing up my associates degree in psychology. 
                    Completely different career paths and completely different skills were needed to even begin to think about coding. 
                    I asked different people that I know in the industry 
                    if it would be a good choice to pursue a career in software development,
                    I believe they tried to scare me out of it. For some reason I wasn't, 
                    I was actually more motivated to do something that somebody said I couldn't
                    and decided to look into different paths to become fluent in code.
                    </p>
                    <a style={{textDecorationLine: 'none'}} target="_blank" rel="noreferrer" href="https://medium.com/@dannyconroy23/is-coding-for-you-4329214f7ea6"> 
                    <Button  style={{backgroundColor:"indianred", marginTop:"15px"}} variant='contained' >Read More</Button >
                    </a>
                </div>
                <div className="blog2">
                    <h2>How to create an API using Rails</h2>
                    <p>API stands for “Application Programming Interface.” When developing a program, APIs make creating and sending data possible.
                         Which unless you are making a “Hello World” application, you are most likely going to need. Similarly, 
                        an API lists a bunch of operations that developers can use, along with a description of what they do.
                    </p>
                    <a style={{textDecorationLine: 'none'}} target="_blank" rel="noreferrer" href="https://medium.com/@dannyconroy23/how-to-create-an-api-using-rails-f7dd2d89eb13"> 
                    <Button style={{backgroundColor:"indianred", marginTop:"15px"}} variant='contained' >Read More</Button>
                    </a>
                </div>
                <div className="blog3">
                    <h2>useEffect in React</h2>
                    <p>
                        Before you actually write any code you want to understand what you are writing. 
                        UseEffect is a react hook that was added to the library in 2018. The term ‘Effect’, refers to a functional programming term called a “side effect”. 
                        Side effects are used throughout your code in different ways, 
                        however these are a couple of examples which you may have already completed.
                    </p>
                    <a style={{textDecorationLine: 'none'}} target="_blank" rel="noreferrer" href="https://medium.com/@dannyconroy23/useeffect-in-react-ae83f3cdc67"> 
                    <Button style={{backgroundColor:"indianred", marginTop:"15px"}} variant='contained' >Read More</Button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Blog;