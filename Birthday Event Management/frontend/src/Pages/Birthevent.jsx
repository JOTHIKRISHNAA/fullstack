import React, { useState } from 'react';
import CustomNavBar from '../components/CustomNavBar';
import Card from '../components/Card';
import Image1 from '../Pages/birth.webp'
import Image2 from '../Pages/birth1.jpeg'
import Image3 from '../Pages/birth2.jpeg'
import Image4 from '../Pages/birth3.jpeg'
import Image5 from '../Pages/birth4.jpeg'
import Image6 from '../Pages/birth5.jpeg'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Birthevent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchInput(searchTerm);

    // Filter names based on the search input
    const filteredResults = names.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredNames(filteredResults);
  };

  // Assuming you have a list of names as follows
  const names = [
    'Coimbatore','Trichy','Chennai','Madurai','Karur','Erode','Salem','Tirupur'
  ];

  return (
    <>
        <header>
            <CustomNavBar/>
            <br></br>
        </header>
    <div id="container" style={{ padding: '20px', fontFamily: 'Roboto, sans-serif', backgroundColor: '#f2f2f2' }}>
      <div id="search" style={{ marginBottom: '15px', textAlign: 'center' }}>
        <label htmlFor="searchInput" style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Search Locations</label>
        <input
          id="searchInput"
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <ul id="results" style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexWrap: 'wrap' }}>
        {filteredNames.map((name, index) => (
          <li key={index} className="name" style={{ margin: '5px', padding: '15px', border: '2px solid #666', borderRadius: '8px', backgroundColor: '#fff', color: '#333' }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
    <br></br>
    <br></br>
    <div>
        <div style={{flexDirection:'row',display:'flex',marginLeft:50,marginRight:50}}>
          <div style={{marginLeft:100}}>
          <Link to={'/details'}><Card Image={Image1} name='SK Birthday events' content='Place: Gandhipuram'/></Link>
          </div>
          <div style={{marginLeft:100}}>
          <Link to={'/details'}><Card Image={Image2} name='JK Birthday events' content='Place: RS Puram'/></Link>
          </div>
          <div style={{marginLeft:100}}>
          <Link to={'/deatils'}><Card Image={Image3} name='Sakthi Birthday events' content='Place: Saibaba Colony'/></Link>
          </div>
          <div style={{marginLeft:100}}>
          <Link to={'/deatils'}><Card Image={Image3} name='Sakthi Birthday events' content='Place: Saibaba Colony'/></Link>
          </div>
        </div>
        <br></br>
        <br></br>
        <div style={{flexDirection:'row',display:'flex',marginLeft:50,marginRight:50}}>
          <div style={{marginLeft:100}}>
            <Link to={'/deatils'}><Card Image={Image4} name='GO Birthday events' content='Place: Ukkadam'/></Link>
          </div>
          <div style={{marginLeft:100}}>
            <Link to={'/details'}><Card Image={Image5} name='KR Birthday events' content='Place: Mettupalayam'/></Link>
          </div>
          <div style={{marginLeft:100}}>
            <Link to={'/details'}><Card Image={Image6} name='KT Birthday events' content='Place: Singanallur'/></Link>
          </div>
          <div style={{marginLeft:100}}>
            <Link to={'/details'}><Card Image={Image6} name='KT Birthday events' content='Place: Singanallur'/></Link>
          </div>
        </div>
        
    </div>
    <br></br>
    <br></br>
        <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Birthevent;
