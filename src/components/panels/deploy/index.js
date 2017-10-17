import React from 'react'

var DeployPanel = ({working, keys, kubam_ip, onChange, deployFunc, destroyFunc}) => (

  <div className="card-body">
    <div className="row">
      <div className="col">
        <h1 className="">Deploy</h1>
        <p className="small text-muted">Finalize the settings to deploy the UCS servers.</p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <hr/>
        <h4>Finalize Settings</h4>
        <p className="small text-muted">Please enter the IP address of the KUBAM server.  This is probably the same IP address as the one in the browser window. </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <form className="form">
          <div className="form-group row">
            <label htmlFor="kubam_ip" className="col-sm-2 col-form-label">KUBAM IP address</label>
            <div className="col-sm-6">
              <input type="text" onChange={onChange} className="form-control" id="kubam_ip" value={kubam_ip} />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p className="small text-muted">Please enter a public key so you can log into the servers after they are installed. </p>
        <form className="form">
          <div className="form-group row">
            <label htmlFor="key" className="col-sm-2 col-form-label">Public Key</label>
            <div className="col-sm-6">
              <textarea type="text" rows="10" onChange={onChange} className="form-control" id="keys" value={keys} />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row">
      <div className="col text-center">
        <br/>
        <hr/>
        { working ? 
        <button onClick={(e) => deployFunc(e)} className="btn btn-lg btn-primary" disabled>
          <i className="fa fa-cog fa-spin"></i> Working</button>
        :
        <button onClick={(e) => deployFunc(e)} className="btn btn-lg btn-primary">Deploy</button>
        }
        <hr/>
        <div className="alert alert-danger">
          <div className="small text-red">
            Warning: Pressing the button below will delete the entire cluster from UCS.  There is no going back.
          </div>
          <p></p>
          { working ? 
            <button onClick={(e) => destroyFunc(e)} className="btn btn-lg btn-danger" disabled>
            <i className="fa fa-cog fa-spin"></i>  Working</button>
            :
            <button onClick={(e) => destroyFunc(e)} className="btn btn-lg btn-danger">Destroy</button>
          }
        </div>
      </div>
    </div>
  </div>
  
);

export default DeployPanel

