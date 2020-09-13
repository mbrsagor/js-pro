import React, { Component } from 'react';

class Output extends Component {
    
    render() { 
        return (
            <div className="sidebar p-3">
                <div className="card p-2">
                    <h5 className="card-title">Output</h5>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            BMR
                            <span className="badge badge-primary badge-pill">3434</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            CALORIES / DAY
                            <span className="badge badge-primary badge-pill">1183</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            CALORIES / DAY
                            <span className="badge badge-primary badge-pill">887</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Cras justo odio
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Output;
