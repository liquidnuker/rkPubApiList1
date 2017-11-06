import axios from "axios";
import {arr_filter} from "../js/arr_filter.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_sortValue} from "../js/arr_sortValue.js";
import {search_fuse} from "../js/search_fuse.js";
import Paginate from "../js/vendor/Paginate.js";
import {store} from "../js/store.js";

import ApiList_table from "./ApiList_table.jsx";

export default class ComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API_URL: "https://raw.githubusercontent.com/toddmotto/public-apis/master/json/entries.json",
      BACKUP_URL: "./entries_offline.json",

      apiListCache: [], // default unfiltered items
      apiTotalCount: "",
      apiListFiltered: "", // filtered items
      apiList: [], // displayed/paginated items

      categoryTypes: [],
      currentCategory: "All",
      authTypes: "",
      authTypeselected: [], // checkbox
      https: "",

      // paginator
      pager: null,
      currentPage: "",
      totalPages: "",
      pagerButtons: true,
      perPage: 20,
      perPageItems: [10, 20, 40, 60, 100],

      sortAsc: true,

      // messages
      status: {
        search: "status.search"
      }
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
          this.setState({
            apiTotalCount: response.data.count,
            apiListCache: response.data.entries,
            apiListFiltered: this.apiListCache,            
          }); 
          this.activatePager(this.state.apiListCache);
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

    activatePager(data) {
      this.pager = null;
      this.pager = new Paginate(data, this.state.perPage);
      
      this.setState(prevState => ({
        apiList: this.pager.page(0),
        currentPage: this.pager.currentPage,
        totalPages: this.pager.totalPages,
        pagerButtons: true
      }));
    }

  render() {
    const apiList = this.state.apiList;
    return (
      <div>
      {this.state.apiList.length}
      <br />
      {this.state.totalPages} {this.state.currentPage}

      <br />
      <br />

      <ApiList_table pr_items={this.state.apiList} />
      </div>
    );
  }
}