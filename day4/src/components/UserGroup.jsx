
import CustomSideNav from "../components/CustomSideNav";
import NewTable from "./NewTable";


function UserGroup(){

    return(

        <div style={{display:'flex'}}>

            <CustomSideNav/>
        
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <br/><br/>
            <h1 style={{color:'blue'}}> USER GROUP</h1>
            
            <br/><br/>
            <NewTable/>
        </div>
        </div>
    );
}
export default UserGroup;