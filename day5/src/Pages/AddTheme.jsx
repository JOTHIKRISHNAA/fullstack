import CustomNavBar from "../components/CustomNavBar";
import CustomNavBar1 from "../components/CustomNavbar1";
import CustomSideNav from "../components/CustomSideNav";

function AddTheme(){

  return(

    <div style={{display:'flex'}}>

      <CustomSideNav/>
      <main>
        <br></br>

        <h1 style={{textAlign:"center"}}>ADD YOUR THEME</h1>

        <div style={{flexDirection:'row',display:'flex'}}>

          <div style={{width:500,marginLeft:100,marginTop:100}}>
        <form>

          <input style={{height:'40px',width:400,color:'white'}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter your event name"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter theme name"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="url"
            required
            placeholder="Enter Image url"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter photographer name"
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
            placeholder="Enter videographer name"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="email"
            required
            placeholder="Enter theme return gift"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter theme cost"
          />
          <br />
          <br />
          <br />
          <input style={{height:100,width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Description"
          />
          
          </form>

        </div>
        </div>
        <br></br>
        <br></br>
        <div style={{textAlign:'center',marginLeft:10}}>
        <button style={{backgroundColor:'grey',color:'white',height:50,width:150}}>Add Theme</button>
        </div>
      </main>
      
      

    </div>
  );
}
export default AddTheme;