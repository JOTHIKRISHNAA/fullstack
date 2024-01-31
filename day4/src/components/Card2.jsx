import { Panel } from 'rsuite';
import PropTypes  from 'prop-types';
import '../components/card.css';

const Card2 = ({Image,name}) => (
  <Panel  style={{ display: 'inline-block', width: 400,fontWeight:'bolder',fontSize:20,}} className='image'>
    <img src={Image} height="240" width= "400" 
    className='imageZoom'/>
    <Panel header={name} style={{textAlign:'center'}}></Panel>

  </Panel>
);

Card2.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired
}
export default Card2;