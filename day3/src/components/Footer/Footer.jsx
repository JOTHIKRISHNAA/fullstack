import { footer } from "../Data"
import "./footer.css"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container' style={{marginBottom:20}} >
          <div className='box' style={{marginLeft:100}}>
            <div className='logo'>
              
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals,sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button style={{marginLeft:40,padding:'15px',backgroundColor:"red",borderRadius:'5px'}}>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box' style={{marginRight:100}}> 
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      
    </>
  )
}


export default Footer