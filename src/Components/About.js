
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pic1 from "./Pictures/IMG_6443.png";
import Pic2 from "./Pictures/IMG_6442.jpg";
import Pic3 from "./Pictures/IMG_6444.PNG";
import Pic4 from "./Pictures/IMG_6446.PNG";
import Pic5 from "./Pictures/IMG_6447.PNG";
import Pic6 from "./Pictures/IMG_6448.PNG";
import Pic7 from "./Pictures/IMG_6449.PNG";
import Pic8 from "./Pictures/IMG_6445.PNG";
import Pic9 from "./Pictures/IMG_6453.PNG";
import Pic10 from "./Pictures/IMG_6452.PNG";
import Pic11 from "./Pictures/IMG_6451.PNG";
import Pic12 from "./Pictures/IMG_6450.PNG";


function StandardImageList() {

  const icon = (
    <div>
    <img style={{marginBottom:"20px"}} alt="HSW" className='schoolImages' src="http://smithtownrobotics.com/wp-content/uploads/2017/08/cropped-Transparent.png"></img>
    <img style={{marginLeft:"320px", marginBottom:"30px"}} alt="Flatiron" className="schoolImages" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/FS_wiki.png/640px-FS_wiki.png"></img>
    <img style={{marginLeft:"340px",}} alt="Suffolk" className="schoolImages" src="https://cdn.prestosports.com/action/cdn/logos/id/rn3we5yttt1jd6yp.png"></img>
    
    </div>
    
  );

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

 
  
  return (
    <div className="aboutDiv">
      <div>
       <Card className="cssCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://th.bing.com/th/id/R.af44e470253784a97bcae1b97c571954?rik=80u2ZRCYDhk18Q&riu=http%3a%2f%2fwww.xhtmljunction.com%2fblog%2fwp-content%2fuploads%2f2018%2f02%2fhtml5-css3.png&ehk=k3fb7DfpkTK6ND8lS2w9AB3sdPc8Bp655RBs%2bK1EmC4%3d&risl=&pid=ImgRaw&r=0"
              alt="css"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Css and HTML
              </Typography>
              <Typography variant="body2" color="text.secondary">
              HTML is the language for describing the structure of Web pages.
               The elements of the language label pieces of content such as “paragraph,” “list,” “table,” and so on. However, CSS is the language for describing the presentation of Web pages, 
              including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. 
               </Typography>
            </CardContent>
            </Card>
       </div>
      <div>
        <Card className="rubyCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.worldwebtechnology.com/wp-content/uploads/2016/12/Ruby.jpg"
              alt="ruby"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ruby
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. 
              It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types.
               It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
               </Typography>
            </CardContent>
            </Card>
         </div>
        <div className="pictureList" style={{borderBottom: "5px solid black"}}>
            <ImageList className="pictureList" sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                varient="quilted"
                loading="lazy"
              />
            </ImageListItem>
            ))}
            </ImageList>
        </div>
        <div>
        <Card className="reactCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://res.cloudinary.com/practicaldev/image/fetch/s--PpuN8gtN--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/iiqa6yhcaptvq15jo5mg.jpg"
              alt="react"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. 
                It is an open-source, component-based, front-end library responsible only for the application’s 
                view layer. In Model View Controller (MVC) architecture,
                the view layer is responsible for how the app looks and feels.
              </Typography>
            </CardContent>
            </Card>
         </div>
         <div className="hobbies">
            <h1>Hobbies</h1>
            <h5>While I do love creating programs and applications on my computer, my other hobbies include:</h5>
            <li>Spending time with friends and family</li>
            <li>Exercising</li>
            <li>Sight-seeing</li>
            <li>Basketball</li>
            <li>Video games</li>
            </div>
            <div className="skills">
            <h1>Skills</h1>
            <h5>My skills in programming are continuing to expand, but these are a few of my other skills:</h5>
            <li>Good socialization</li>
            <li>Solving problems</li>
            <li>Team work and Team building</li>
            <li>Creative Mindset</li>
         </div>
         <div className="education">
          <h1 style={{paddingBottom:"20px"}}>Education</h1>
          <Box sx={{ height: 180 }}>
            <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
            />
            <Box sx={{ display: 'flex' }}>
              <Fade in={checked}>{icon}</Fade>
            </Box>
          </Box>
            <Accordion style={{backgroundColor: 'antiquewhite'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography>Smithtown High School West</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After four years at Smithtown High School West, I recieved my diploma in 2018. Joining many clubs, 
                such as the robotics club, and playing for the junior varsity basketball
                program I am proud to call myself a graduate of Smithtown.
              </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion style={{backgroundColor: 'antiquewhite'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
            >
              <Typography>Suffolk County Community College</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After one year of studying criminal justice with the hoped of becomming a police officer i quickly changed my mind to become a psychologist.
                After two years I recieved my associates degree in psychology with tons of knowledge I havent had before.
              </Typography>
            </AccordionDetails>
            </Accordion>
            <Accordion style={{backgroundColor: 'antiquewhite'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
            >
              <Typography>Flatiron School</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Everyday at a coding bootcamp is stressful but very worth it in the end. A test on a different language every couple of weeks, 
              as well as a complete web application made studying all day everyday a necessity.
              Learning what I have in such a small amount of time has me intrigued to learn more and excited to do so.
              </Typography>
            </AccordionDetails>
            </Accordion>
         </div>
    </div>
  );
}

export default StandardImageList;

const itemData = [
  {
    img: Pic1,
    title: 'Breakfast',
  },
  {
    img: Pic2,
    title: 'Burger',
  },
  {
    img: Pic3,
    title: 'Camera',
  },
  {
    img: Pic4,
    title: 'Coffee',
  },
  {
    img: Pic5,
    title: 'Hats',
  },
  {
    img: Pic6,
    title: 'Honey',
  },
  {
    img: Pic7,
    title: 'Basketball',
  },
  {
    img: Pic8,
    title: 'Fern',
  },
  {
    img: Pic9,
    title: 'Mushrooms',
  },
  {
    img: Pic10,
    title: 'Tomato basil',
  },
  {
    img: Pic11,
    title: 'Sea star',
  },
  {
    img: Pic12,
    title: 'Bike',
  },
];

