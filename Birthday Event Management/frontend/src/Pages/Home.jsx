import CustomNavBar from "../components/CustomNavBar";
import Footer from "../components/Footer/Footer";
// import CustomSideNav from "../components/CustomSideNav";
import { Carousel } from "rsuite";
import Card4 from "../components/Card4"
import Card5 from "../components/Card5"
import Image1 from "../Images/img1.avif"
import Image2 from "../Images/img2.avif"
import Image3 from "../Images/img3.jpeg"
import { useSpring, animated } from 'react-spring';

function Home(){

    const fadeInAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }, // Adjust duration as needed
      });
    

    return(
        <div >
            <header >
                <CustomNavBar/>
                <br></br>
            </header>
            <main>
            <div>
            <Carousel style={{height:"600px",borderRadius:"25px"}} autoplay  className="custom-slider">
    <img src={Image1}  />
    <img src={Image2}  />
    <img src={Image3}  />
  </Carousel>
            </div>
              <div>
                <div style={{flexDirection:'row',display:'flex'}}>

                  <div style={{justifyContent: 'space-between',width: '50%',marginTop: '3em',height: '100%',textAlign:'center'}}>

                    <h1 style={{color:'blue',fontSize:30,textAlign:'center',textTransform:'uppercase'}}>MAKE YOUR CHILD BIRTHDAY SPECIAL!</h1>
                    <br></br>
                    <p style={{fontSize:20,textAlign:'justify',marginLeft:60}}><b>MAKE MY EVENT </b> is a professional birthday party decorator in Delhi – NCR offering complete event planning services for a birthday. Our team of professionals will analyze your requirements and provide birthday ideas to suit your needs and budget. Either your birthday party budget is small or big, we handle all kinds of party works for all budgets. Let us handle the birthday party and you just enjoy your memorable moments, make your guests surprise by your best birthday bash in the town. We have made many parents happy with our birthday party decorations.</p>
                    <p style={{fontSize:20,textAlign:'justify',marginLeft:60}}>We have a privilege of organizing birthday parties of celebrity kids and prominent businessman of India.</p>

                  </div>
                  <div style={{justifyContent: 'space-between',width: '40%',marginTop: '3em',marginLeft:'5em',height: '100%',}}>
                 <img
                  style={{ width: '100%', height: '50%' }}
                  src='https://3.imimg.com/data3/GW/GP/MY-10424193/17-500x500.jpg'
                  alt='Car and coins'
                />
                </div>
                </div>
                <br></br>
                <div style={{flexDirection:'row',display:'flex',backgroundColor:"#dedede"}}>
                  <animated.div style={fadeInAnimation}>
                    <h1 style={{marginLeft:'3em',fontFamily:'Kaushan Script',textTransform: 'capitalize',fontWeight:'bolder'}}>Plan A Memorable Birthday!</h1>
                  </animated.div >
                  <animated.div style={fadeInAnimation}>
                    <h1 style={{marginLeft:'8em',fontFamily:'Kaushan Script',textTransform: 'capitalize',fontWeight:'bolder'}}>Stress-Free!</h1>
                    </animated.div>
                </div> 
                </div>
                <br></br>
                <br></br>
                <h1 style={{textAlign:'center',color:'black'}}>WHY MAKE MY EVENT</h1>

                <br></br>
                <br></br>

                <div style={{ flexDirection: 'row', display: 'flex',marginLeft:30 }}>
          <div style={{ marginLeft: 50 }}>
            <Card5  name='APPROACH' content='We take an inclusive approach to helping our clients succeed, we work with clients over cumulative ideas and will shape thoughts into the unforgettable plan and event. Providing effective and creative designs and solid executions of events.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='QUALITY' content='We are focused on addressing our clients needs & necessities and devoted to ceaselessly enhancing the viability of our nature of Events. We are proactive, dependable accomplices with our clients, their fulfilment is imperative to our prosperity.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='EXCELLENCE' content='We are focused on addressing our clients needs & necessities and devoted to ceaselessly enhancing the viability of our nature of Events. We are proactive, dependable accomplices with our clients, their fulfilment is imperative to our prosperity.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='COST-EFFECTIVE' content='Your money is important to you as well as for us. We ensure cost-effective service, accountability and flexibility. Most of all, we treat your event like it is ours. Whatever your budget, we have solutions you will not find elsewhere.' />
          </div>
        </div>


            </main>
            <br></br>
            <br></br>
            <br></br>
            <footer>
              <Footer/>
            </footer>
        </div>
    )
}
export default Home;