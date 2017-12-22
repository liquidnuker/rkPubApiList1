class SortIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    // binders    
  }
  // hooks  
  // methods
  
  render() {
    if (this.props.pr_asc) {
      return (
        <p>"asc svg"</p>
        );
    } else {
      return (
        <p>"desc svg"</p>
        );
    }
  }
}

class SortAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortAsc: true
    };
    // binders    
  }
  // hooks  
  // methods
  toggle() {
    this.setState(prevState => ({
      sortAsc: !prevState.sortAsc
    }));

    this.props.pr_val_sortTable('API', this.state.sortAsc);
  }
  
  render() {
    return (
      <div>
        <button className="btn btn1-01" onClick={() => { this.toggle() }}>
          Sort API {this.state.sortAsc ? 'Asc' : 'Desc'}
          <SortIcon pr_asc={this.state.sortAsc} />
        </button>
      </div>
    );
  }
}

class SortCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortAsc: true
    };
    // binders    
  }
  // hooks  
  // methods
  toggle() {
    this.setState(prevState => ({
      sortAsc: !prevState.sortAsc
    }));

    this.props.pr_val_sortTable('Category', this.state.sortAsc);
  }
  
  render() {
    return (
      <div>
        <button className="btn btn1-01" onClick={() => { this.toggle() }}>
          Sort Category {this.state.sortAsc ? 'Asc' : 'Desc'}
          <SortIcon pr_asc={this.state.sortAsc} />
        </button>
      </div>
    );
  }
}

export default class ApiList_table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    // binders    
  }

  // lifecycle hooks  
  // methods
  method1() {
    this.setState(prevState => ({
      property1: store.state
    }));
  }

  render() {
    return (
      <table className="col-xs-12 apilist_table">
    <tbody aria-live="assertive" aria-atomic="true" aria-describedby="api_status">
      <tr className="row">
      <td className="col-xs-6 col-sm-7">
      <SortAPI
      pr_val_sortTable={this.props.pr_val_sortTable} />
      </td>
      <td className="col-xs-6 col-sm-5">
      <SortCategory 
      pr_val_sortTable={this.props.pr_val_sortTable} />
      </td>
      
      </tr>
      

      
      {this.props.pr_items.map((i) =>
        <tr className="row">
        <td className="col-xs-12 col-sm-7">
          <p className="apiname">{ i.API }</p>

          <summary>
          <p className="apidesc">{ i.Description }</p>
          </summary>
          <a className="apilink" href={i.Link}>{ i.Link }</a>
        </td>
        <td className="col-xs-12 col-sm-2">
          <a onClick={() => { this.props.pr_val_filterCategory(i.Category) }}>{ i.Category }</a>
        </td>
        <td className="col-xs-12 col-sm-2">
          <p>{i.Auth ? i.Auth : 'null'}</p>
        </td>
        <td className="col-xs-12 col-sm-1 https">
          {i.HTTPS ? 'true' : 'false'}
        </td>
      </tr>
      )}
    </tbody>
  </table>
    );
  }
}