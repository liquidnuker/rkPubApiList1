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
      <button className="btn btn1-01" onClick={() => { this.props.pr_next() }}>nextPage</button>
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
      <button className="btn btn1-01" onClick={() => { this.props.pr_prev() }}>prevPage</button>
    );
  }
}

export default class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // binders    
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
  // methods
    
  render() {
    return (
      <span className="pg_holder">
      <PrevButton 
      pr_prev={this.props.pr_prev} />

      <p>&nbsp;Page&nbsp;</p>
      <div className="custom-select pg_totalpages">
      <select value={this.props.pr_currentPage} >
       {this.createOptions()}
      </select>
      </div>
      <p>&nbsp;of&nbsp;{this.props.pr_totalPages}&nbsp;</p>

      <NextButton 
      pr_next={this.props.pr_next} />
      </span>
    );
  }
}