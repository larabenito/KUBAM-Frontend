import React from 'react'

var NetworkList = ({vlans}) => (
  
  <div className="card-body">
    <div className="row">
      <div className="col"></div>
      <div className="col align-self-center">
        <h3 className="lead text-center">UCS Network</h3>
        <p></p>
        <ul className="list-group"> 
        {vlans.map( (vlan, i) => 
              vlan.selected ? 
              <li className="list-group-item active" key={i}>{vlan.name} {vlan.id}</li>
              :
              <li className="list-group-item" key={i}>{vlan.name} {vlan.id}</li>
          )
        }
        </ul>
      </div>
      <div className="col"></div>
    </div>
  </div>
);

export default NetworkList

