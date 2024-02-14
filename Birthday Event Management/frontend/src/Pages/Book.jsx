import CustomNavBar from "../components/CustomNavBar";

function Book(){

  

  return(

    <div style={{backgroundColor: '#f2f2f2' }}>

      <header>

        <CustomNavBar/>
        <br></br>

      </header>
      <main>
        <br></br>

        <h1 style={{textAlign:"center"}}>BOOK YOUR EVENT</h1>

        <div style={{flexDirection:'row',display:'flex',backgroundColor: '#f2f2f2' }}>

          <div style={{width:500,marginLeft:300,marginTop:100}}>
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
            placeholder="Enter your event loacation"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter applicant name here"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="date"
            required
            placeholder="Enter date of the event"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter number of people"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type=""
            required
            placeholder="Enter quantity of Veg items"
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
            placeholder="Enter applicant mobile number"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="email"
            required
            placeholder="Enter applicant E-mail id"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter applicant address"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="time"
            required
            placeholder="Enter event time"
          />
          <br />
          <br />
          <br />
          <input style={{height:'40px',width:400}}
            id="usrnm"
            type="text"
            required
            placeholder="Enter quantity of Non-veg items"
          />
          <br />
          <br />
          <br />
          <select style={{height:'40px',width:400}}
          name="Enter the category">
            <option value="">Select </option>
            <option value="">Select </option>
            <option value="">Select </option>
            <option value="">Select </option>
            <option value="">Select </option>
          </select>
          <br />
          <br />
          <br />
          </form>

        </div>
        </div>
      </main>
        <div style={{textAlign:'center',marginLeft:140}}>
        <button style={{backgroundColor:'green',color:'white',height:50,width:150}}>Book Event</button>
        </div>
      

    </div>
  );
}
export default Book;