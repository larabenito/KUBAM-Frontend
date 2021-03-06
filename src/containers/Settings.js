import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getKUBAMIP, getKeys, getProxy, updateSettings } from '../actions'
import SettingsPanel from '../components/panels/settings/'
import Error from '../components/Error'

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: this.props.keys ,
      kubam_ip: this.props.kubam_ip,
      proxy: this.props.proxy, 
      working: this.props.working,
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateFunc = this.updateFunc.bind(this)
  }

  componentDidMount() {
    this.props.getKUBAMIP()
    this.props.getKeys()
    this.props.getProxy()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      keys: Array.isArray(nextProps.keys) ? nextProps.keys[0] : "",
      kubam_ip: nextProps.kubam_ip,
      proxy: nextProps.proxy, 
      working: nextProps.working,
    })
  }

  handleChange = (event) => {
    const s = this.state
    switch(event.target.id) {
      case "keys":
        s.keys = event.target.value;
        break;
      case "kubam_ip":
        s.kubam_ip = event.target.value;
        break;
      case "proxy":
        s.proxy = event.target.value;
        break;
      default:
      
    }
    this.forceUpdate();
  }

  updateFunc = (event) => {
    // get the ip and the key. 
    // the keys should be in an array.  Right now the interface only allows for one key. 
    this.props.updateSettings(this.state.kubam_ip, [this.state.keys], this.state.proxy);
  }

  render() {
    return (
      <div>
        <Error error={this.props.error} />
        <SettingsPanel working={this.state.working} keys={this.state.keys} proxy={this.state.proxy} kubam_ip={this.state.kubam_ip} onChange={this.handleChange} updateSettingsFunc={this.updateFunc} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  keys: state.settings.keys,
  kubam_ip: state.settings.kubam_ip,
  proxy: state.settings.proxy, 
  working: state.settings.fetching,
  error: state.settings.error, 
})

const mapDispatchToProps = (dispatch)  => ({
  getKUBAMIP: () => dispatch(getKUBAMIP()),
  getKeys: () => dispatch(getKeys()),
  getProxy: () => dispatch(getProxy()),
  updateSettings: (kubam_ip, keys, proxy) => dispatch(updateSettings(kubam_ip, keys, proxy)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Settings)
