import { Panel } from 'rsuite';
import PropTypes  from 'prop-types';
import '../components/card.css';

const Card = ({Image,name,content}) => (
  <Panel  style={{ display: 'inline-block', width: 240,fontWeight:'bolder',fontSize:20}} className='image'>
    <img src={Image} height="240" width="100%" />
    <Panel header={name}>
      <p>
        <small style={{fontSize:15}}>
          {content}
        </small>
      </p>
    </Panel>
  </Panel>
);

Card.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    Image:PropTypes.string.isRequired
}
export default Card;