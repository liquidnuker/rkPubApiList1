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
        <button onClick={() => { this.toggle() }}>
          Sort API {this.state.sortAsc ? 'Asc' : 'Desc'}
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
        <button onClick={() => { this.toggle() }}>
          Sort Category {this.state.sortAsc ? 'Asc' : 'Desc'}
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
      <table class="col-xs-12 apilist_table">
    <tbody aria-live="assertive" aria-atomic="true" aria-describedby="api_status">
      <SortCategory 
      pr_val_sortTable={this.props.pr_val_sortTable} />

      <SortAPI
      pr_val_sortTable={this.props.pr_val_sortTable} />

      {this.props.pr_items.map((i) =>
        <tr class="row">
        <td class="col-xs-12 col-sm-7">
          <p class="apiname">{ i.API }</p>

          <summary>
          <p class="apidesc">{ i.Description }</p>
          </summary>
          <a class="apilink" href="i.Link">{ i.Link }</a>
        </td>
        <td class="col-xs-12 col-sm-2">
          <a onClick={() => { this.props.pr_val_filterCategory(i.Category) }}>{ i.Category }</a>
        </td>
        <td class="col-xs-12 col-sm-2">
          <p>{i.Auth ? i.Auth : 'null'}</p>
        </td>
        <td class="col-xs-12 col-sm-1 https">
          {i.HTTPS ? 'true' : 'false'}
        </td>
      </tr>
      )}
    </tbody>
  </table>
    );
  }
}