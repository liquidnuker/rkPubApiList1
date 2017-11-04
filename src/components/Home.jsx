export default class ComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property1: ""
    };

    // 
    this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("insert ajax");
  }
  
  // methods
  method1() {
    this.setState(prevState => ({
      property1: store.state
    }));
  }

  render() {
    return (
      <div onClick={this.method1}></div>
    );
  }
}