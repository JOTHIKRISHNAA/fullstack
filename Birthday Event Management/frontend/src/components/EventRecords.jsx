
import CustomSideNav from "../components/CustomSideNav";
import Table1 from "../components/Table1";


function EventRecords(){

    return(

        <div style={{display:'flex'}}>

            <CustomSideNav/>
        
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/><br/>
            <h1 style={{color:'blue'}}> EVENT RECORDS</h1>
            
            <br/><br/>
            <Table1/>
        </div>
        </div>
    );
}
export default EventRecords;