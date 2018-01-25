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
        // up
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
        );
    } else {
      return (
        // down
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </svg>
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
        <button className="btn btn1-01 btn_sort" onClick={() => { this.toggle() }}>
          API<SortIcon pr_asc={this.state.sortAsc} />
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
        <button className="btn btn1-01 btn_sort" onClick={() => { this.toggle() }}>
          Category<SortIcon pr_asc={this.state.sortAsc} />
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