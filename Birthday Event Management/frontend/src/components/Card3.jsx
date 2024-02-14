import { Panel } from 'rsuite';
import PropTypes  from 'prop-types';

const Card3 = ({Image,name,content}) => (
  <Panel  style={{ display: 'inline-block', width: 240,fontWeight:'bolder',fontSize:20}}>
    <img src={Image} style={{borderRadius:'50% 50% 50% 50%',width:'170px',marginTop:10,marginLeft:20}}/>
    <Panel header={name}>
      <p>
        <small style={{fontSize:15}}>
          {content}
        </small>
      </p>
    </Panel>
  </Panel>
);

Card3.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired
}
export default Card3;