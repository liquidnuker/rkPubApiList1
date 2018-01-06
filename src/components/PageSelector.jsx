class NextButton extends React.Component {
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
      <button className="btn btn1-01 btn_next" onClick={() =>
       { this.props.pr_next() }}>
       Next
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
       <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
       </svg>
       </button>
    );
  }
}

class PrevButton extends React.Component {
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
      <button className="btn btn1-01 btn_prev" onClick={() =>
       { this.props.pr_prev() }}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
       Prev
       </button>
    );
  }
}

export default class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // binders  
    this.handleChange = this.handleChange.bind(this);  
  }
  // hooks
  // methods
  createOptions() {
     let items = [];         
     for (let i = 1; i <= this.props.pr_totalPages; i++) {             
          items.push(<option onClick={() => 
            { this.props.pr_val_showPage(i) }} key={i} value={i}>{i}</option>);   
      }
     return items;
 }    
 
 handleChange(event) {
    this.props.pr_val_showPage(event.target.value);
  } 
    
  render() {
    return (
      <span className="pg_holder">
      <PrevButton 
      pr_prev={this.props.pr_prev} />

      <p>&nbsp;Page&nbsp;</p>
      <select className="pg_perpage" value={this.props.pr_currentPage}
      onChange={this.handleChange} >
       {this.createOptions()}
      </select>
      <p>&nbsp;of&nbsp;{this.props.pr_totalPages}&nbsp;</p>

      <NextButton 
      pr_next={this.props.pr_next} />
      </span>
    );
  }
}