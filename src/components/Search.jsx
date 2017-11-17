export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    // binders
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  // hooks
  
  // methods
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  keyPress(event) {
    if(event.keyCode == 13){
      this.setState({
        value: event.target.value
      });

      this.props.pr_val_search(this.state.value);
    }
  }
  
  render() {
    return (
      <div>
      <p>{this.state.value}</p>
      <span class="apilist_search">
      <label for="api_search">Search {this.props.pr_currentCategory}:</label>
      <input type="search" name="api_search" id="api_search" placeholder="Enter keyword/s..."
      value={this.state.value} 
      onChange={this.handleChange}
      onKeyDown={this.keyPress} />
      <button class="btn btn1-01" data-message="Search the api listing" 
      onClick={() => { this.props.pr_val_search(this.state.value) }}>Search</button>
      </span>
      </div>
    );
  }
}