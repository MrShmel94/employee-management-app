import React, { useState, useEffect, useContext } from 'react';
import MenuContext from './MenuContext';
import Header from './Header';
import SideMenu from './SideMenu';

const EmployeePerformance = () => {

    const { menuVisible } = useContext(MenuContext);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [markedEmployees, setMarkedEmployees] = useState(new Set());
    const [showOnlyMarked, setShowOnlyMarked] = useState(false);
    const [sort, setSort] = useState({ key: null, direction: 1 });
    const [filter, setFilter] = useState({ key: null, value: null });

    const handleSubmit = () => {
        // Send request to the server with the selected date range
    };

    // Test data for the table
    const employees = [
        {
            id: 1,
            expertis: 12345,
            name: 'Vlad',
            surname: 'Shumchenia',
            processes: [
                { key: 'process0', uph: 10, qlPacked: 50, time: 3000 },
                { key: 'process1', uph: 15, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        {
            id: 2,
            expertis: 123456,
            name: 'Stella',
            surname: 'Shumchenia',
            processes: [
                { key: 'process0', uph: 100, qlPacked: 50, time: 300 },
                { key: 'process1', uph: 150, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        }, {
            id: 3,
            expertis: 123457,
            name: 'Paula',
            surname: 'Paczka',
            processes: [
                { key: 'process0', uph: 1000, qlPacked: 50, time: 3500 },
                { key: 'process1', uph: 1500, qlPacked: 45, time: 200 },
                // ...
            ],
        },
        // ...
    ];


    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const toggleEmployeeMark = (id) => {
        const newMarkedEmployees = new Set(markedEmployees);
        if (newMarkedEmployees.has(id)) {
            newMarkedEmployees.delete(id);
        } else {
            newMarkedEmployees.add(id);
        }
        setMarkedEmployees(newMarkedEmployees);
    };

    const [processedEmployees, setProcessedEmployees] = useState([...employees]);


    const requiredUPH = [10, 15];

    const handleSort = (key) => {
        if (sort.key === key) {
            setSort({ key, direction: -1 * sort.direction });
        } else {
            setSort({ key, direction: 1 });
        }
    };

    const handleFilter = (e) => {
        setFilter({ ...filter, key: e.target.value });
    };

    const handleFilterValue = (e) => {
        setFilter({ ...filter, value: parseInt(e.target.value) });
    };

    const getCellColor = (uph, processIndex) => {
        const required = requiredUPH[processIndex];
        return uph >= required ? "green" : "red";
    };

    useEffect(() => {
        let updatedEmployees = [...employees];

        // Filter employees based on the search input
        if (searchInput) {
            updatedEmployees = updatedEmployees.filter((employee) => {
                return (
                    employee.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                    employee.surname.toLowerCase().includes(searchInput.toLowerCase()) ||
                    String(employee.expertis).includes(searchInput)
                );
            });
        }

        // Filter marked employees if the toggle switch is on
        if (showOnlyMarked) {
            updatedEmployees = updatedEmployees.filter((employee) => markedEmployees.has(employee.id));
        }

        if (filter.key) {
            updatedEmployees = updatedEmployees.map((employee) => {
                const newProcesses = employee.processes.map((process) => {
                    if (process.key === filter.key && process.time < filter.value) {
                        return null;
                    }
                    return process;
                });
                return { ...employee, processes: newProcesses };
            });
        }

        if (sort.key) {
            updatedEmployees.sort((a, b) => {
                const aValue = a.processes.find((p) => p && p.key === sort.key) || { uph: -Infinity };
                const bValue = b.processes.find((p) => p && p.key === sort.key) || { uph: -Infinity };

                if (aValue.uph === -Infinity && bValue.uph === -Infinity) {
                    return 0;
                }
                if (aValue.uph === -Infinity) {
                    return 1;
                }
                if (bValue.uph === -Infinity) {
                    return -1;
                }

                return sort.direction * (aValue.uph - bValue.uph);
            });
        }

        setProcessedEmployees(updatedEmployees);
    }, [sort, filter, searchInput, markedEmployees, showOnlyMarked]);

    return (
        <div
            className={`employee-performance${menuVisible ? ' with-menu' : ' without-menu '}`}
        >
            <Header />
            <SideMenu />
            <div className="date-inputs">
                <label htmlFor="start-date">From:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />

                <label htmlFor="end-date">To:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />

                <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className='performanceEmployees'>

                <div className="search-input">
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        id="search"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </div>

                <div className="toggle-marked">
                    <input
                        type="checkbox"
                        id="toggle-marked"
                        checked={showOnlyMarked}
                        onChange={(e) => setShowOnlyMarked(e.target.checked)}
                    />
                    <label htmlFor="toggle-marked">Show only marked employees</label>
                </div>

                <div className="filter-inputs">
                <label htmlFor="filter-key">Filter by process:</label>
                <select id="filter-key" onChange={handleFilter}>
                    <option value="">Select a process</option>
                    {employees[0].processes.map((_, index) => (
                        <option key={index} value={`process${index}`}>
                            Process {index + 1}
                        </option>
                    ))}
                </select>
                <label htmlFor="filter-value">Time less than:</label>
                <input type="number" id="filter-value" onChange={handleFilterValue} />
            </div>
            
                <div className='tablePerformance'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '30px', textAlign: 'center' }}>✓</th>
                                <th>Expertis</th>
                                <th>Name</th>
                                <th>Surname</th>
                                {employees[0].processes.map((_, index) => (
                                    <th key={index} onClick={() => handleSort(`process${index}`)}>
                                        Process {index + 1}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {processedEmployees.map((employee) => (
                                <tr key={employee.id}>
                                    <td style={{ width: '30px', textAlign: 'center' }}>
                                        <input
                                            type="checkbox"
                                            checked={markedEmployees.has(employee.id)}
                                            onChange={() => toggleEmployeeMark(employee.id)}
                                        />
                                    </td>
                                    <td>{employee.expertis}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.surname}</td>
                                    {employee.processes.map((process, index) => (
                                        <td key={index}>
                                            {process && (
                                                <>
                                                    <div>
                                                        UPH:{" "}
                                                        <span
                                                            style={{
                                                                backgroundColor: getCellColor(process.uph, index),
                                                            }}
                                                        >
                                                            {process.uph}
                                                        </span>
                                                    </div>
                                                    <div>QL Packed: {process.qlPacked}</div>
                                                    <div>Time: {process.time}</div>
                                                </>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeePerformance;
