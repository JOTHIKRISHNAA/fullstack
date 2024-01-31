import React from 'react';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Image1 from '../Pages/image11.jpg';
import Image2 from '../Pages/image12.jpg';
import Image3 from '../Pages/image13.jpg';
import Img1 from '../Pages/img1.jpg';
import Img2 from '../Pages/img2.jpg';
import Img3 from '../Pages/img3.jpg';
import Img4 from '../Pages/img4.jpg';
import Img5 from '../Pages/img5.jpg';
import Img6 from '../Pages/img6.jpg';
import Img7 from '../Pages/img7.jpg';
import Img8 from '../Pages/img8.jpg';
import Img9 from '../Pages/img9.jpg';
import CustomNavBar from '../components/CustomNavBar';
import Footer from '../components/Footer/Footer';
import '../components/card.css';

function Services() {
  return (
    <div>
      <header >
        <CustomNavBar/>
      </header>
      <main>
                   <div style={{paddingTop:100,paddingBottom:125}} className='service'>
                        <h2 style={{color:"white",marginLeft:"2em",fontWeight:800,textTransform:"uppercase"}} >OUR SERVICES</h2>
                    </div>
                    <br></br>
                    <h2 style={{textAlign:'center',color:'black',fontSize:45}}>BIRTHDAY THEMES</h2>
                    <br></br>
                    <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
          <div style={{ marginLeft: 50 }}>
            <Card1 Image={Image1} name='2D THEMES' content='We provide high-quality 2D Themes for all Birthday Party needs. We have varieties of 2D themes for kids, girls and boys and also have concept based themes to make your birthday party decorations unique and customized. 2D Themes for birthdays are the most cost-effective and affordable way of decorations.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card1 Image={Image2} name='3D THEMES' content='Why just celebrate in a simple way, do it in a very dreamful way and plan it by your way. We are here only for you. MAKE MY EVENT organises the cradle ceremony in whatever way you need. We organise your Birthday Party in the cutest styles and themes to make it memorable for your child and for you' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card1 Image={Image3} name='BALOON THEMES' content='We offer a wide range of balloon decorations for Birthday Parties. We can design the balloon themes as per your choice, colours and requirements. Our balloon decorations include balloon arches, balloon twisters, balloon walls, balloon pillars and many custom designs using balloons.' />
          </div>
        </div>
        <br></br>
        <br></br>
        <h2 style={{textAlign:'center',color:'black',fontSize:45}}>BIRTHDAY ESSENTIALS</h2>
        <br></br>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img1} name='ANCHOR ARTST' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img2} name='BOUNCY CASTLE' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img3} name='CHOCLATE FOUNDATION' />
          </div>
        </div>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img4} name='DANCING FLOOR' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img5} name='DJ SOUND' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img6} name='MAGICIANS' />
          </div>
        </div>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 100, marginRight: 100 }}>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img7} name='POP CORN MACHINE' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img8} name='TATOO ARTIST' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card2 Image={Img9} name='MIMICRY ARTIST' />
          </div>
        </div>
        <br></br>
        <br></br>

        
      
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
};

export default Services;
