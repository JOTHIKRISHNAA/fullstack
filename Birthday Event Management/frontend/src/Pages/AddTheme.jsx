
import { useState } from "react";
import CustomSideNav from "../components/CustomSideNav";
import { addtheme } from "../services/auth";


function AddTheme(){

  const[themename,setThemeName]=useState("");
  const[eventname,setEventName]=useState("");
  const[location,setLocation]=useState("");
  const[image,setImage]=useState("");
  const[photographername,setPgname]=useState("");
  const[videographername,setVgname]=useState("");
  const[photographernumber,setPgNumber]=useState("");
  const[videographernumber,setVgNumber]=useState("");
  const[themecost,setThemeCost]=useState("");
  


  const handleAddtheme =(e)=>{

    e.preventDefault();
  const formD = {
    eventname:eventname,
    location:location,
    themename:themename,
    image:image,
    photographername:photographername,
    videographername:videographername,
    photographernumber:photographernumber,
    videographernumber:videographernumber,
    themecost:themecost
  };

  const token = sessionStorage.getItem('token'); // Retrieve token from session storage

  addtheme(formD, token)
    .then((res) => {
      // Handle successful booking
      console.log('Booking success:', res);
      
      setLocation("");
      setThemeName("");
      setEventName("");
      setImage("");
      setPgname("");
      setVgname("");
      setPgNumber("");
      setVgNumber("");
      setThemeCost("");

      
      // // Show alert message
      // alert('Theme added successfully');
      // // Navigate to the dashboard
      // navigate('/admin')

      
    })
    .catch((err) => {
      // Handle booking error
      console.error('Booking failed:', err);
    });
  }

  return(

    <div style={{display:'flex'}}>

      <CustomSideNav/>
      <main>
        <br></br>

        <h1 style={{textAlign:"center"}}>ADD YOUR THEME</h1>

        <div style={{flexDirection:'row',display:'flex'}}>

          <div style={{width:500,marginLeft:100,marginTop:100}}>
        <form>

          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter your Theme name"
            value={themename}
            onChange={(e) => setThemeName(e.target.value)}
          />
         
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="url"
            required
            placeholder="Enter Image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter photographer name"
            value={photographername}
            onChange={(e) => setPgname(e.target.value)}
          />
          <br />
          <br />
          <br />
        
          </form>

        </div>

        <div style={{width:500,marginLeft:200,marginTop:100}}>
        <form>

          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="tel"
            required
            placeholder="Enter videographer number"
            value={videographernumber}
            onChange={(e) => setVgNumber(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="tel"
            required
            placeholder="Enter photographer number"
            value={photographernumber}
            onChange={(e) => setPgNumber(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter videographer name"
            value={videographername}
            onChange={(e) => setVgname(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter theme cost"
            value={themecost}
            onChange={(e) => setThemeCost(e.target.value)}
          />
          
          </form>

        </div>
        </div>
        <br></br>
        <br></br>
        <div style={{textAlign:'center',marginLeft:10}}>
        <button style={{backgroundColor:'grey',color:'white',height:50,width:150}} onClick={handleAddtheme}>Add Theme</button>
        </div>
      </main>
      
      

    </div>
  );
}
export default AddTheme;