import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faStar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import MenuContext from './MenuContext';

const MainPage = () => {

  const [workersData, setWorkersData] = useState([]);
  const { userData, getUserData } = useContext(MenuContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWorkers, setFilteredWorkers] = useState(workersData);
  const token = localStorage.getItem('jwtToken');
  const headers = { 'Authorization': `Bearer ${token}` };

  console.log(userData);

  const fetchWorkersData = async () => {
    try {
      const response = await fetch('http://localhost:8080/allUsers', { headers });
      if (response.ok) {
        const data = await response.json();
        setWorkersData(data);
      } else {
        console.error('Failed to fetch workers data:', response.statusText);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };

  useEffect(() => {
    fetchWorkersData();
  }, []);

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, [userData]);

  useEffect(() => {
    setFilteredWorkers(
      workersData.filter((worker) =>
        Object.values(worker)
          .join(' ')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, workersData]);

  return (
    <div>
      <Header />
      <SideMenu />
      <div className="main-content">
        <div className="user-info-block">
          <h2>User Information</h2>
          {userData ? (
            <>
              <p>Name: {userData.firstName}</p>
              <p>Surname: {userData.lastName}</p>
              <p>Expertise: {userData.expertis}</p>
              <p>Position: {userData.position}</p>
              <p>Department: {userData.department}</p>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>

        <div className="workers-list">
          <h2>Workers</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className='table-wrapper'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Expertise</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredWorkers.map((worker) => (
                  <tr key={worker.expertis}>
                    <td>{worker.firstName}</td>
                    <td>{worker.lastName}</td>
                    <td>{worker.expertis}</td>
                    <td>{worker.department}</td>
                    <td>{worker.position}</td>
                    <td>
                      <button className="action-btn">
                        <Link to={`/edit/${worker.expertis}`}>
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                      </button>
                      <button className="action-btn">
                        <Link to={`/evaluate/${worker.expertis}`}>
                          <FontAwesomeIcon icon={faStar} />
                        </Link>
                      </button>
                      <button className="action-btn">
                        <Link to={`/performance/${worker.expertis}`}>
                          <FontAwesomeIcon icon={faChartLine} />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
