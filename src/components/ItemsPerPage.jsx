export default class ItemsPerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // binders    
    this.handleChange = this.handleChange.bind(this);
  }
  // hooks
  
  // methods
  handleChange(event) {
    this.props.pr_val_setPageItems(event.target.value);
  }
    
  render() {
    return (
      <span class="pg_holder">
      <p>Items per page:&nbsp;</p> 
      <select className="pg_select" 
      value={this.props.pr_perPage} onChange={this.handleChange}>
      {this.props.pr_perPageItems.map((i) =>
        <option onClick={() => 
          { this.props.pr_val_setPageItems(i) }} key={i} value={i}>{i}</option>
      )}
      </select> 
      </span>
    );
  }
}