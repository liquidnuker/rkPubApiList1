export default class ItemsPerPage extends React.Component {
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
      Items per page: <select value={this.props.pr_perPage} >
      {this.props.pr_perPageItems.map((i) =>
        <option onClick={() => 
          { this.props.pr_val_setPageItems(i) }} key={i} value={i}>{i}</option>
      )}
      </select> 
      </div>
    );
  }
}