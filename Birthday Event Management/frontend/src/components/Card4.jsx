import { Panel } from 'rsuite';
import PropTypes  from 'prop-types';


const Card1 = ({name,content}) => (
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,fontWeight:'bolder',fontSize:20,height:450}}>
    
    <Panel style={{textAlign:'center',fontWeight:200,fontSize:29,fontFamily:'bold',color:'black'}}>
        <p>
            {name}
        </p>
    </Panel>
    <Panel>
      <p>
        <small style={{fontSize:22}}>
          {content}
        </small>
      </p>
    </Panel>
  </Panel>
);

Card1.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired
}
export default Card1;