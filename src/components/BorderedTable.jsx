import React from 'react';      

import '../styles/BorderedTable.css';

const BorderedTable = props => {
    const { sorted_time, sorted_time_2 } = props;

    return (  
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Day</th>
                    <th scope="col">08:00:00 AM</th>
                    <th scope="col">09:00:00 AM</th>
                    <th scope="col">10:00:00 AM</th>
                    <th scope="col">11:00:00 AM</th>
                    <th scope="col">12:00:00 PM</th>
                    <th scope="col">01:00:00 PM</th>
                    <th scope="col">02:00:00 PM</th>
                </tr>            
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Monday</th>
                    <td></td>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 1).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>                                       
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 2).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 3).map(myType_1 => (
                         <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                         </div>
                    ))}</td>
                    <td></td>
                    <td>{sorted_time_2.filter(myType_2 => myType_2.id === 14).map(myType_2 => (
                         <div className="first" style={{ background: myType_2.color }}>
                            <p><b>{myType_2.name}</b></p>
                            <p>{myType_2.place}</p>
                         </div>
                    ))}</td>                    
                    <td></td>                    
                </tr>
                <tr>
                    <th scope="row">Tuesday</th>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 4).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>                        
                        </div>
                    ))}</td>                   
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 5).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>                   
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 6).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>                    
                    <td></td>  
                    <td></td>
                    <td>{sorted_time_2.filter(myType_2 => myType_2.id === 15).map(myType_2 => (
                         <div className="first" style={{ background: myType_2.color }}>
                            <p><b>{myType_2.name}</b></p>
                            <p>{myType_2.place}</p>
                         </div>
                    ))}</td> 
                    <td></td>                                    
                </tr>
                <tr>
                    <th scope="row">Wednesday</th>
                    <td></td>                        
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 7).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 8).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 9).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td></td>      
                    <td>{sorted_time_2.filter(myType_2 => myType_2.id === 16).map(myType_2 => (
                         <div className="first" style={{ background: myType_2.color }}>
                            <p><b>{myType_2.name}</b></p>
                            <p>{myType_2.place}</p>
                         </div>
                    ))}</td> 
                    <td></td>                                                                      
                </tr>
                <tr>
                    <th scope="row">Thursday</th>
                    <td></td>                          
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 10).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 11).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>
                        </div>
                    ))}</td>
                    <td>{sorted_time_2.filter(myType_2 => myType_2.id === 17).map(myType_2 => (
                         <div className="first" style={{ background: myType_2.color }}>
                            <p><b>{myType_2.name}</b></p>
                            <p>{myType_2.place}</p>
                         </div>
                    ))}</td> 
                    <td></td>      
                    <td></td> 
                    <td></td>                                                                 
                </tr>
                <tr>
                    <th scope="row">Friday</th>
                    <td></td> 
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 12).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>                        
                        </div>
                    ))}</td>                       
                    <td>{sorted_time.filter(myType_1 => myType_1.id === 13).map(myType_1 => (
                        <div className="first" style={{ background: myType_1.color }}>
                            <p><b>{myType_1.name}</b></p>
                            <p>{myType_1.place}</p>                        
                        </div>
                    ))}</td>  
                    <td>{sorted_time_2.filter(myType_2 => myType_2.id === 18).map(myType_2 => (
                         <div className="first" style={{ background: myType_2.color }}>
                            <p><b>{myType_2.name}</b></p>
                            <p>{myType_2.place}</p>
                         </div>
                    ))}</td> 
                    <td></td>      
                    <td></td>      
                    <td></td>                                                                                                      
                </tr>
            </tbody>
        </table>
    );
}

export default BorderedTable;