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
      <button onClick={() => { this.props.pr_next() }}>nextPage</button>
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
      <button onClick={() => { this.props.pr_prev() }}>prevPage</button>
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
  createOptions() {
     let items = [];         
     for (let i = 1; i <= this.props.pr_totalPages; i++) {             
          items.push(<option onClick={() => 
            { this.props.pr_showPage(i) }} key={i} value={i}>{i}</option>);   
      }
     return items;
 }    
  // methods
    
  render() {
    return (
      <div>
      <PrevButton 
      pr_prev={this.props.pr_prev} />

      page <select value={this.props.pr_currentPage} >
       {this.createOptions()}
      </select> of {this.props.pr_totalPages}

      <NextButton 
      pr_next={this.props.pr_next} />
      </div>
    );
  }
}