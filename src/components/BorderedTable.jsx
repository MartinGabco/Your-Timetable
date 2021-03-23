import React from 'react';

const BorderedTable = () => {
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
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr>
                    <th scope="row">Tuesday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                    
                </tr>   
                <tr>
                    <th scope="row">Wednesday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                    
                </tr>  
                <tr>
                    <th scope="row">Thursday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                    
                </tr>   
                <tr>
                    <th scope="row">Friday</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                    
                </tr>                                                                              
            </tbody>
        </table>
    );
}
 
export default BorderedTable;