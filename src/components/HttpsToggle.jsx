export default class HttpsToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // binders    
  }
  // hooks
  
  // methods
  
  render() {
    return (
      <div>
      <input type="checkbox" id="checkbox" checked={this.props.pr_https} 
      onClick={() => { this.props.pr_val_toggleHttps(this.props.pr_https)}}/>
      <label tabIndex="0" htmlFor="checkbox">HTTPS only</label>
      </div>
    );
  }
}