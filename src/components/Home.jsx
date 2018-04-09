import axios from "axios";
import {arr_filter} from "../js/arr_filter.js";
import {arr_extractUnique} from "../js/arr_extractUnique.js";
import {arr_sortValue} from "../js/arr_sortValue.js";
import {search_fuse} from "../js/search_fuse.js";
import Pager from "../js/pager.js";
import {store} from "../js/store.js";

import ApiList_table from "./ApiList_table.jsx";
import CategoryList from "./CategoryList.jsx";
import AuthFilter from "./AuthFilter.jsx";
import HttpsToggle from "./HttpsToggle.jsx";
import PageSelector from "./PageSelector.jsx";
import ItemsPerPage from "./ItemsPerPage.jsx";
import Search from "./Search.jsx";

export default class Rkpi extends React.Component {
    constructor(props) {
      super(props);

      this.API_URL = "https://raw.githubusercontent.com/liquidnuker/public-apis/json/json/entries.json";
      this.BACKUP_URL = "./entries_offline.json";

      this.state = {
        apiListCache: [], // default unfiltered items
        apiTotalCount: "",
        apiListFiltered: [], // filtered items
        apiList: [], // displayed/paginated items

        categoryTypes: [],
        currentCategory: "All",
        authTypes: [],
        authTypeSelected: [], // checkbox
        https: "",

        // paginator
        pager: null,
        currentPage: "",
        totalPages: "",
        pagerButtons: true,
        perPage: 20,
        perPageItems: [10, 20, 40, 60, 100],

        // messages
        status: {
          search: "status.search"
        }
      };

      // binders
      this.filterCategory = this.filterCategory.bind(this);
      this.toggleAuthType = this.toggleAuthType.bind(this);
      this.toggleHttps = this.toggleHttps.bind(this);
      this.showPage = this.showPage.bind(this);
      this.prev = this.prev.bind(this);
      this.next = this.next.bind(this);
      this.setPageItems = this.setPageItems.bind(this);
      this.search = this.search.bind(this);
      this.sortTable = this.sortTable.bind(this);
    }

    // lifecycle hooks
    componentDidMount() {
      // this.getApiData(this.API_URL);
      this.getApiData(this.BACKUP_URL);
    }

    // methods
    getApiData(url) {
      axios.get(url)
        .then((response) => {
          this.setState({
            apiTotalCount: response.data.count,
            apiListCache: response.data.entries,
            apiListFiltered: response.data.entries,
          });
          this.activatePager(this.state.apiListCache);
        })
        .then(() => {
          this.addFiltersList(this.state.apiListCache);
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
      this.pager = new Pager({
        data: data,
        perPage: this.state.perPage
      });

      this.setState(prevState => ({
        apiList: this.pager.page(1),
        currentPage: this.pager.currentPage,
        totalPages: this.pager.getTotalPages(),
        pagerButtons: true
      }));
    }

    addFiltersList(arr) {
      // for authTypes
      let authTemp = arr_extractUnique(arr, "Auth");
      let authTemp2 = [];

      for (let i in authTemp) {
        authTemp2.push({
          authName: authTemp[i],
          checked: true
        });
      }

      this.setState(prevState => ({
        authTypes: authTemp2
      }));

      authTemp = null;
      authTemp2 = null;

      this.toggleAuthTypeCheckbox(true);

      // for categoryTypes
      let temp = arr_extractUnique(arr, "Category");
      let temp2 = [];
      // filter to get length of each item then push
      temp.map((i) => {
        let l = arr_filter(this.state.apiListCache, "Category", i);
        temp2.push({
          catName: i,
          catLength: l.length
        });
      });

      this.setState(prevState => ({
        categoryTypes: temp2
      }));

      temp = null;
      temp2 = null;
    }

    toggleAuthTypeCheckbox(checked) {
      let authTypes = this.state.authTypes;
      let authTypeSelected = this.state.authTypeSelected;

      if (checked) {
        authTypeSelected = [];
        for (let i in authTypes) {
          authTypeSelected.push(authTypes[i].authName);
        }
      } else {
        authTypeSelected = [];
      }

      this.setState(prevState => ({
        authTypeSelected: authTypeSelected,
        // uncheck https checkbox when showing all items
        https: false
      }));
    }

    toggleHttps(checked) {
      checked = !checked;
      this.state.https = checked;
      this.filterAuthType();
    }

    filterCategory(category) {
      this.state.currentCategory = category;
      this.filterAuthType();
    }

    toggleAuthType(index) {
      let authTypes = this.state.authTypes;
      let selectedItems = this.state.authTypeSelected;

      if (authTypes[index].checked) {
        let indexToSplice = selectedItems.indexOf(authTypes[index].authName);
        selectedItems.splice(indexToSplice, 1);
        authTypes[index].checked = false;
      } else {
        selectedItems.push(authTypes[index].authName);
        authTypes[index].checked = true;
      }

      this.setState(prevState => ({
        authTypes: authTypes, // for checked attr
        authTypeSelected: selectedItems
      }));

      this.filterAuthType();
    }

    filterAuthType() {
      let apiListFiltered = this.state.apiListFiltered;
      // this.status.search = "";
      let categoryTemp;

      if (this.state.currentCategory !== "All") {
        categoryTemp = arr_filter(this.state.apiListCache, "Category", this.state.currentCategory);
      } else {
        // to filter authTypes from default items
        categoryTemp = this.state.apiListCache;
      }

      // authType checkbox
      let authTemp = [];
      this.state.authTypeSelected.map((i) => {
        // get items of each authTypeSelected
        let t2 = arr_filter(categoryTemp, "Auth", i);
        authTemp = authTemp.concat(t2);
        t2 = null;
      });

      // HTTPS checkbox
      if (this.state.https) {
        let hTemp = arr_filter(authTemp, "HTTPS", this.state.https);
        apiListFiltered = hTemp;
        hTemp = null;
      } else {
        apiListFiltered = authTemp;
      }

      if (authTemp.length === 0) {
        console.log("no results");
      }

      authTemp = null;
      categoryTemp = null;

      this.setState(prevState => ({
        apiListFiltered: apiListFiltered
      }));

      this.activatePager(apiListFiltered);
    }

    showPage(num) {
      let apiList = this.pager.page(num);
      this.setState(prevState => ({
        apiList: apiList,
        currentPage: num
      }));
    }

    prev() {
      let currentPage = this.state.currentPage;
      let apiList = this.state.apiList;
      
      currentPage = this.pager.prev();
      apiList = this.pager.page(currentPage);      

      this.setState(prevState => ({
        apiList: apiList,
        currentPage: currentPage
      }));
    }

    next() {
      let currentPage = this.state.currentPage;
      let apiList = this.state.apiList;      

      currentPage = this.pager.next();
      apiList = this.pager.page(currentPage); 

      this.setState(prevState => ({
        apiList: apiList,
        currentPage: currentPage
      }));
    }

    setPageItems(perPage) {
      this.state.perPage = perPage;
      this.activatePager(this.state.apiListFiltered);
    }

    search(keyword) {
      let res = search_fuse({
        data: this.state.apiListFiltered,
        value: keyword,
        searchKeys: ["API", "Link"]
      });

      if (res.length === 0) {
        console.log("no results");
      } else {
        console.log(`found ${res.length} items`);
        this.activatePager(res);
        res = null;
      }
    }

    sortTable(sortBy, order) {      
      let apiListFiltered = this.state.apiListFiltered;
      let sorted = arr_sortValue(sortBy, apiListFiltered);

      if (order) {
          apiListFiltered = sorted;
        } else {
          apiListFiltered = sorted.reverse();
      }
      
      sorted = null;

      this.activatePager(apiListFiltered);
    }

  render() {
    return (
      <div>
      <main className="columns is-gapless is-centered">
        <div className="column is-10-desktop">
          <div className="row apilist">
            <div className="col-sm-3">
              {/*category left nav*/}
              <CategoryList 
         pr_categoryTypes={this.state.categoryTypes} 
         pr_apiTotalCount={this.state.apiTotalCount}
         pr_val_filterCategory={this.filterCategory}  /> 
            {/*end category left nav*/}
            </div>
            <div className="col-sm-9">
              {/*begin rightside*/}
              <div className="row col-xs-12 apilist_rightside">
              {/*authfilter_search*/}
              <div className="row col-xs-12 apilist_filtersearch">
                <div className="col-sm-3">
                  {/*authfilter*/}
                  <AuthFilter 
      pr_items={this.state.authTypes} 
      pr_val_toggleAuthType={this.toggleAuthType} />

      <HttpsToggle 
      pr_https={this.state.https}
      pr_val_toggleHttps={this.toggleHttps} />
                {/*end authfilter*/}
                </div>
                <div className="col-sm-9">
                {/*search*/}
                  <Search 
      pr_currentCategory={this.state.currentCategory}
      pr_val_search={this.search}  />
                {/*end search*/}
                </div>
              </div>
              {/*end authfilter_search*/}

            {/*page controls*/}
            <div className="row col-xs-12 apilist_pagecontrols">
              {/*page controls*/}
              <PageSelector 
      pr_currentPage={this.state.currentPage}
      pr_totalPages={this.state.totalPages}
      pr_prev={this.prev} 
      pr_next={this.next}
      pr_val_showPage={this.showPage} />

      <ItemsPerPage 
      pr_perPage={this.state.perPage}
      pr_perPageItems={this.state.perPageItems} 
      pr_val_setPageItems={this.setPageItems} />
            {/*end page controls*/}
            </div>
            {/*end page controls*/}

            {/*main api list*/}
          <div className="row col-xs-12 apilist_main">
              {/*main apilist table*/}
                <ApiList_table 
          pr_items={this.state.apiList} 
          pr_val_filterCategory={this.filterCategory}
          pr_val_sortTable={this.sortTable} />
                 {/*end main apilist table*/}
      
            </div>
          {/*end main api list*/}

              </div>
            {/*end rightside*/}
            </div>
          </div>
        </div>
      </main>      
      </div>
    );
  }
}