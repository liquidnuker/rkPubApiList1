import axios from "axios";

export default class ComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    API_URL: "https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json",
      BACKUP_URL: "./entries_offline.json",
    };

    // binders
  }

  // lifecycle hooks
  componentDidMount() {
    this.getApiData(this.state.BACKUP_URL);
  }
  
  // methods
  getApiData(url) {
      axios.get(url)
        .then((response) => {
          //   this.apiTotalCount = response.data.count;
          //     this.apiListCache = response.data.entries;
          //     this.apiListFiltered = this.apiListCache;
          //     this.activatePager(this.apiListCache);
          console.log(response.data.entries);
        })
        .then(() => {

        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js

          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }

  render() {
    return (
      <div onClick={this.method1}></div>
    );
  }
}