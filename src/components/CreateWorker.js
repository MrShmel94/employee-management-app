// CreateWorker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import SideMenu from './SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const CreateWorker = () => {

    const [departments, setDepartments] = useState([]);
    const [shifts, setShifts] = useState([]);
    const [positions, setPositions] = useState([]);
    const [groups, setGroups] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [dateOfHiring, setDateOfHiring] = useState('');
    const [dateOfDismissal, setDateOfDismissal] = useState('');
    const [employeeId, setEmployeeId] = useState(null);
    const token = localStorage.getItem('jwtToken');
    const headers = { 'Authorization': `Bearer ${token}` };

    const handleDateOfHiringChange = (event) => {
        setDateOfHiring(event.target.value);
    }

    const handleDateOfDismissalChange = (event) => {
        const newDate = event.target.value;
        if (newDate > dateOfHiring) {
            setDateOfDismissal(newDate);
        } else {
            alert('Dismissal date must be later than hiring date');
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const expertis = event.target.elements.expertise.value;
        const supervisorExpertis = event.target.elements.expertiseSupervisor.value;
        const firstName = event.target.elements.name.value;
        const lastName = event.target.elements.surname.value;
        const department = event.target.elements.department.value;
        const shift = event.target.elements.shift.value;
        const position = event.target.elements.position.value;
        const team = event.target.elements.group.value;
        const gender = event.target.elements.gender.value;
        const dateOfHiring = event.target.elements.dateOfHiring.value;
        const dateOfDismissal = event.target.elements.dateOfDismissal.value;

        const workerData = {
            id: employeeId,
            expertis,
            supervisorExpertis,
            firstName,
            lastName,
            department,
            shift,
            position,
            team,
            gender,
            dateOfHiring,
            dateOfDismissal
        };

        try {
            let response;
            if (isEditMode) {
                response = await axios.put('http://localhost:8080/updateEmployee', workerData, { headers });
            } else {
                response = await axios.post('http://localhost:8080/createEmployee', workerData, { headers });
            }
    
            if (response.status === 201 || response.status === 200) {
                setIsLoading(false);
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error posting data:', error);
            setIsLoading(false);
        }
    }

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    const handleExpertiseBlur = async (event) => {
        const expertise = event.target.value;

        if (event.target.value.trim() !== '') {
            setIsLoading(true);

            try {
                const response = await axios.get(`http://localhost:8080/employeeByExpertise/${expertise}`, { headers })
                    .then((response) => {
                        const { data } = response;
                        console.log(data);
                        setEmployeeId(data.id); 
                        console.log(new Date(data.dateOfHiring).toISOString().substr(0, 10));
                        document.querySelector('#expertise').value = data.expertis || '';
                        document.querySelector('#expertiseSupervisor').value = data.supervisorExpertis || '';
                        document.querySelector('#name').value = data.firstName || '';
                        document.querySelector('#surname').value = data.lastName || '';
                        document.querySelector('#dateOfHiring').value = new Date(data.dateOfHiring).toISOString().substr(0, 10).replace(/-/g, '') || '';
                        document.querySelector('#dateOfDismissal').value = data.dateOfDismissal || '';
                        document.querySelector('#department').value = data.department || '';
                        document.querySelector('#shift').value = data.shift || '';
                        document.querySelector('#position').value = data.position || '';
                        document.querySelector('#group').value = data.team || '';
                        document.querySelector('#gender').value = data.gender || '';
                        setIsLoading(false);
                    }
                    ).catch((error) => {
                        if (error.response && error.response.status === 403) {
                            setIsLoading(false);
                            alert("You don't have permission to access this resource.");
                        } else {
                            console.error('Error fetching data:', error);
                        }
                    });
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }
    };

    const handleModalChoice = (choice) => {
        if (choice === 'addAnother') {
            document.querySelector('.worker-form').reset();
            setShowModal(false);
        } else {
            window.location.href = '/main';
        }
    };

    useEffect(() => {
        console.log("response");
        const fetchData = async () => {
            console.log("fetching data");
            try {
                const value = await axios.get('http://localhost:8080/createEmployee', { headers });
                setDepartments(value.data.depatments);
                setShifts(value.data.shifts);
                setPositions(value.data.positions);
                setGroups(value.data.teams);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <SideMenu />
            {showModal && (
                <div className="modal-background">
                    <div className="modal">
                        <h2>Employee added successfully</h2>
                        <p>Do you want to add another employee or go to the main page?</p>
                        <button onClick={() => handleModalChoice('addAnother')}>Add another employee</button>
                        <button onClick={() => handleModalChoice('mainPage')}>Go to main page</button>
                    </div>
                </div>
            )}
            <div className="main-content">
                {isLoading && <div className="loader"></div>}
                <form className="worker-form" onSubmit={handleSubmit}>
                    <div className="toggle-switch">
                        <label className={isEditMode ? '' : 'active'} htmlFor="addUser">Add User</label>
                        <FontAwesomeIcon
                            icon={isEditMode ? faToggleOff : faToggleOn}
                            id="toggleSwitch"
                            onClick={() => setIsEditMode(!isEditMode)}
                            style={{ cursor: 'pointer' }}
                            rotation={180}
                            size="2xl"
                        />
                        <label className={isEditMode ? 'active' : ''} htmlFor="editUser">Edit User</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="expertise">Expertise:</label>
                        <span
                            className="exclamation-mark"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            !
                            {showTooltip && (
                                <span className="tooltip-text">
                                    Expertise must start with 3 and be at least 5 digits long
                                </span>
                            )}
                        </span>
                        <input
                            type="text"
                            id="expertise"
                            name="expertise"
                            pattern="^3\d{4,}$"
                            required
                            onBlur={isEditMode ? handleExpertiseBlur : null}
                            disabled={isLoading}
                        />
                    </div>
                    {isEditMode && (
                        <>
                            <div className="form-group">
                                <label htmlFor="additionalField">Additional Field:</label>
                                <input type="text" id="additionalField" name="additionalField" disabled={isEditMode && !isLoading} />
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <label htmlFor="expertiseSupervisor">Expertise TL:</label>
                        <input type="text"
                            id="expertiseSupervisor"
                            name="expertiseSupervisor"
                            pattern="^3\d{4,}$"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            pattern="[A-Za-z]{3,}"
                            title="Must be 3 or more characters."
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname:</label>
                        <input type="text"
                            id="surname"
                            name="surname"
                            pattern="[A-Za-z]{3,}"
                            title="Must be 3 or more characters."
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfHiring">dateOfHiring:</label>
                        <input type="date"
                            id="dateOfHiring"
                            name="dateOfHiring"
                            value={dateOfHiring}
                            onChange={handleDateOfHiringChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfDismissal">dateOfDismissal:</label>
                        <input type="date"
                            id="dateOfDismissal"
                            name="dateOfDismissal"
                            value={dateOfDismissal}
                            onChange={handleDateOfDismissalChange}
                            disabled={!dateOfHiring} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select id="department" name="department" required>
                            {departments.map((dept) => (
                                <option key={dept.id} value={dept.value}>
                                    {dept.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="shift">Shift:</label>
                        <select id="shift" name="shift" required>
                            {shifts.map((shif) => (
                                <option key={shif.id} value={shif.value}>
                                    {shif.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position:</label>
                        <select id="position" name="position" required>
                            {positions.map((posit) => (
                                <option key={posit.id} value={posit.value}>
                                    {posit.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="group">Group:</label>
                        <select id="group" name="group" required>
                            {groups.map((tem) => (
                                <option key={tem.id} value={tem.value}>
                                    {tem.value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" required>
                            <option value="Famely">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateWorker;
