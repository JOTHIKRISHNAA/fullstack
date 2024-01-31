import CustomNavBar1 from "../components/CustomNavbar1";
import CustomSideNav from "../components/CustomSideNav";

function Addons(){

  return(

    <div style={{display:'flex'}}>

    <CustomSideNav/>
      <main>
        <br></br>
        <div>
        <div style={{backgroundColor:'#f2f2f2',width:500,marginLeft:500,height:480,paddingRight:60}}>
            <div style={{textAlign:'center'}}>
                <h1>ADD-ONS</h1>
            </div>

        <div style={{flexDirection:'row',display:'flex'}}>

          <div style={{width:500,marginLeft:100,marginTop:50}}>
        <form>

          <input style={{height:'40px',width:400,color:'white'}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter Add-ons name"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter the price"
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
          
        
          </form>
          </div>
          </div>
          <br></br>
          <br></br>
          <div style={{textAlign:'center'}}>
        <button style={{backgroundColor:'grey',color:'white',height:50,width:150}}>Add Theme</button>
        </div>
        </div>
        </div>
          </main>
          </div>
    );
}
export default Addons;