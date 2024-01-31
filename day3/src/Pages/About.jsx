import CustomNavBar from "../components/CustomNavBar"
import Card3 from "../components/Card3"
import Image12 from '../Pages/aimg1.jpeg'
import Image13 from '../Pages/aimg3.jpeg'
import Image14 from '../Pages/aimg3.jpg'
import Image15 from '../Pages/aimg4.jpg'
import { Link } from "react-router-dom"
import '../components/card.css';

const About = ()=>{

    return(
        <div >
            <header>

                <CustomNavBar/>
            </header>
            <main>
                <div>
                    <div style={{paddingTop:100,paddingBottom:125}} className="event1">
                        <h2 style={{color:"white",marginLeft:"2em",fontWeight:800,textTransform:"uppercase"}}>ABOUT US</h2>
                    </div>
                </div>
                <div style={{flexDirection:'row',display:'flex',paddingRight:100,paddingLeft:150}}>
                    <div style={{flexDirection:'row',display:'flex',}}>
                        <div style={{justifyContent: 'space-between',width: '33%',marginTop: '3em',height: '100%', textAlign:'center'}}>
                            <h2 style={{color:"orange"}}>OUR COMPANY</h2>
                            <br></br>
                            <p style={{textAlign:'justify',fontWeight:'bolder',fontSize:'20px'}}>MAKE MY EVENT is a full-service event management company in Delhi dedicated to quality and excellence. Since our establishment, we have continuously strived towards the flawless execution of events and planning. We manage events across all major cities in India.</p>
                        </div>                     
                        <div style={{justifyContent: 'space-between',width: '33%',marginTop: '3em',height: '100%', textAlign:'center',marginLeft:"18em"}} >
                            <h2 style={{color:"orange"}}>MISSION</h2>
                            <br></br>
                            <p style={{textAlign:'justify',fontWeight:'bolder',fontSize:'20px'}}>No matter what your requirement may be, our priority lies in gaining an in-depth understanding of how your business works, what you hope to achieve, and what we can do to deliver results that exceed all expectations. We believe in flexibility with the clients.</p>
                        </div>
                        <div style={{justifyContent: 'space-between',width: '33%',marginTop: '3em',height: '100%', textAlign:'center',marginLeft:"18em"}} >
                            <h2 style={{color:"orange"}}>PASSION</h2>
                            <br></br>
                            <p style={{textAlign:'justify',fontWeight:'bolder',fontSize:'20px'}}>World of event management has changed tremendously in the last few years. We are a team of creative and innovative, passionate and enthusiastic with great interpersonal skills. We always ready to serve clients, best in the industries with good time management skills.</p>
                        </div>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{flexDirection:'row',display:'flex',backgroundColor:'#f2f2f2'}}>
                <div style={{justifyContent: 'space-between',width: '50%',height: 450,}}>
                 <img
                  style={{ width: '90%', height: '100%' }}
                  src='https://web3.career/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBak5WIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc176cdaace795ccd8f5c1990d489bdf07d0d26b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjkwYjE5bWFXeHNXd2hwQWlBRGFRS1FBWHNHT2d4bmNtRjJhWFI1U1NJTFEyVnVkR1Z5QmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--eaf3bab6192315a5a85ecfb6b365816a1fae5de3/scott-graham-5fNmWej4tAA-unsplash.jpg'
                  alt='Car and coins'
                />
                </div>

                  <div style={{justifyContent: 'space-between',width: '50%',height: '100%',textAlign:'center',marginRight:20}}>

                    <h1 style={{color:'yellow',fontSize:30,textAlign:'center',textTransform:'uppercase',fontWeight:'bolder'}}>OUR STORY AND WORK</h1>
                    <br></br>
                    <p style={{fontSize:20,textAlign:'justify'}}>We are a full administration office in Delhi, giving experiential showcasing and excitement services for both public and private elements by following a comprehensive advertising approach. Our system depends on conceptualization, improvement, high-quality generation that perceive their broadness and bury conditions.</p>
                    <p style={{fontSize:20,textAlign:'justify'}}>The mystery of our office is a sound methodology, careful thoughtfulness regarding venture arranging and execution detail, and above all, an inventive choice of different showcasing strategies and techniques intended to achieve the most prospects in the most practical way.</p>
                    <p style={{fontSize:20,textAlign:'justify'}}>We are a notable occasion coordinator in Delhi, India to encourage our administrations to our customers crosswise over and outside the country. Our young and dynamic group is fit enough to deal with tasks with the most extreme empathy and duty creating the best quality undertakings of global norms.</p>
                  </div>
                </div>
                
        
        <div style={{backgroundColor: '#f2f2f2', width:'100%',flexDirection: 'row', display: 'flex', marginRight: 100,paddingTop:130}}>

          <div style={{ marginLeft: 200,}}>
            <Card3 Image={Image12} name='Kellie Boone' content='Two decades working at the pinnacle of creative events and communications.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card3 Image={Image13} name='Wayne Carlson' content='3 years designing and producing world-class events throughout the Asia Pacific Region.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card3 Image={Image14}name='Clint Burns' content='Over six years of management experience producing high-quality event experiences.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card3 Image={Image15}name='Bernice Bates' content='Three years working in a market-leading corporate event management agency.' />
          </div>
        </div>
        <div>
                    <div style={{paddingTop:100,paddingBottom:70}} className="event">
                        <h2 style={{color:"black",textAlign:'center',fontWeight:800,textTransform:"uppercase"}}>Get Plans For All Your Requirements!</h2>
                        <br></br>
                        <br></br>
                        <p style={{color:"black",fontSize:'17px',marginLeft:100,fontWeight:'bolder'}}>At MAKE MY EVENT, your money is important to you and us. We ensure cost-effective service, accountability and flexibility. Most of all, we treat your event like it</p>
                        <p style={{color:"black",fontSize:'17px',marginLeft:400,fontWeight:'bolder'}}>is ours. Whatever your budget, we have solutions you will not find elsewhere.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to={'/event'}><button style={{marginLeft:650,width:200,height:40,borderRadius:"50% 50% 50% 50%",color:'blue',backgroundColor:"yellow"}}>ENQUIRE NOW</button></Link>
                    </div>
                </div>
            </main>
        </div>

    )
}
export default About