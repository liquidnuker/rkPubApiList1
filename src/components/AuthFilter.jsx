export default class AuthFilter extends React.Component {
  // methods
      
  render() {
    return (
      <ul>
      {this.props.pr_items.map((i, index) =>
        <li>
        <input type="checkbox" value={i.authName} checked={i.checked} 
        onClick={() => { this.props.pr_toggleAuthType(index)}} />
        <label tabIndex="0">{ i.authName }</label>
        </li>
      )}
      </ul>      
    );
  }
}