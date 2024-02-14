
import CustomSideNav from "../components/CustomSideNav";
import { useState } from "react";
import { addon } from "../services/user";
import { useNavigate } from "react-router-dom";

function Addons(){

  const[addonName,setAddonName]=useState("");
  const[addoneDescription,setAddonDescription]=useState("");
  const[addonPrice,setPrice]=useState("");
  const navigate=useNavigate();
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
        const response = await addon({ addonName,addoneDescription,addonPrice});
        if (response.status === 202) {
          navigate('/');
        }
    
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  // const handleAddon =(e)=>{

  //   e.preventDefault();
  // const formD = {
  //   addonName:addonName,
  //   addoneDescription:addoneDescription,
  //   addonPrice:addonPrice
   
  // };

  // const token = sessionStorage.getItem('token'); // Retrieve token from session storage

  // addon(formD, token)
  //   .then((res) => {
  //     // Handle successful booking
  //     console.log('Booking success:', res);
      
  //    setAddonName("");
  //    setAddonDescription("");
  //    setPrice("");
      
  //   })
  //   .catch((err) => {
  //     // Handle booking error
  //     console.error('Booking failed:', err);
  //   });
  // }



  
  return(

    <div style={{display:'flex'}}>

    <CustomSideNav/>
      <main>
        <br></br>
        <div>
        <div style={{backgroundColor:'#f2f2f2',width:500,marginLeft:500,height:480,paddingRight:60,marginTop:100,marginRight:150}}>
            <div style={{textAlign:'center'}}>
                <h1>ADD-ONS</h1>
            </div>

        <div style={{flexDirection:'row',display:'flex'}}>

          <div style={{width:500,marginLeft:100,marginTop:50}}>
        <form>

          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter Add-ons name"
            value={addonName}
            onChange={(e) => setAddonName(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter the price"
            value={addonPrice}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="url"
            required
            placeholder="Enter Image url"
            value={addoneDescription}
            onChange={(e) => setAddonDescription(e.target.value)}

          />
          
        
          </form>
          </div>
          </div>
          <br></br>
          <br></br>
          <div style={{textAlign:'center'}}>
        <button style={{backgroundColor:'grey',color:'white',height:50,width:150}} onClick={handleSubmit}>Add Theme</button>
        </div>
        </div>
        </div>
          </main>
          </div>
    );
}
export default Addons;