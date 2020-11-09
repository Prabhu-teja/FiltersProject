import React from "react";
import "./styles.css";
import {
  ReactiveBase,
  DataSearch,
  MultiDropdownList,
  SingleDataList,
  ReactiveList,
  SingleList
} from "@appbaseio/reactivesearch";
import usa from "./usa.png";
import uk from "./uk.png";
import germany from "./germany.png";
import japan from "./japan.png";
import france from "./france.png";
import australia from "./australia.png";
import india from "./india.png";
import russia from "./russia.png";
function rating(noOfRating) {
  var a = "";
  for (let i = 0; i < noOfRating; i++) {
    a += "⭐";
  }
  return a;
}
function flag(countryName) {
  if (countryName === "uk") {
    return uk;
  } else if (countryName === "us") {
    return usa;
  } else if (countryName === "germany") {
    return germany;
  } else if (countryName === "france") {
    return france;
  } else if (countryName === "australia") {
    return australia;
  } else if (countryName === "india") {
    return india;
  } else if (countryName === "russia") {
    return russia;
  } else {
    return japan;
  }
}
function format(a) {
  let b = a.split(" ");
  return parseInt(b[0], 10) + "/" + b[1] + "/" + parseInt(b[2], 10);
}
export default function App() {
  var sortByAsc = true;

  function reverse() {
    sortByAsc = !sortByAsc;
  }
  return (
    <div className="App">
      <ReactiveBase
        app="project"
        credentials="sNK48Rq5f:2a371dbd-06fe-46fa-84ab-1e6519ed2fe6"
      >
        <div className="searchBox"></div>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light top">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navfilter"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navfilter">
              <ul className="nav top-header">
                <li className="nav-item top-content-1">
                  <div className="d-block">
                    <div>select products</div>
                    <div className="w-75">
                      <MultiDropdownList
                        componentId="appName"
                        dataField="appID.keyword"
                        sortBy="asc"
                        defaultValue={["com.amazon"]}
                      />
                    </div>
                  </div>
                </li>
                <li className="nav-item top-content-2">
                  <div className="d-block">
                    <div>sorting</div>
                    <div className="w-75">
                      <select defaultValue="new" onChange={reverse}>
                        <option value="new">Newest First</option>
                        <option value="old">Oldest First</option>
                      </select>
                    </div>
                  </div>
                </li>
                <li className="nav-item top-content-2">
                  <div className="d-block">
                    <div>translation</div>
                    <div className="w-75">
                      <div className="btn-group">
                        <button
                          className="btn border border-dark-0 h-100 dropdown-toggle btn-block"
                          data-toggle="dropdown"
                        >
                          English
                        </button>
                        <div className="dropdown-menu bg-light">
                          <button className="btn btn-light btn-block">
                            English
                          </button>
                          <button className="btn btn-light btn-block">
                            More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="body border border-dark-0">
            <nav className="navbar navbar-expand-sm navbar-light bg-light filters">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#filter"
              >
                <span className="fas fa-filter"></span>
              </button>
              <div id="filter" className="collapse navbar-collapse">
                <ul className="nav sidebar">
                  <li className="filter">
                    <DataSearch
                      componentId="searchName"
                      placeholder="Search"
                      dataField="reviewHeading"
                      searchInputId="NameSearch"
                      react={{
                        and: [
                          "appName",
                          "appRating",
                          "appVersion",
                          "appCountry",
                          "searchName"
                        ]
                      }}
                    />
                    <div className="input-group m-0">
                      <div className="btn-group w-100">
                        <button
                          className="btn border border-dark-0 text-left h-100 dropdown-toggle btn-block"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-calendar-alt"></i>
                          &nbsp; &nbsp; all time
                        </button>
                        <div className="dropdown-menu bg-light">
                          <button className="btn btn-light btn-block">
                            all time
                          </button>
                          <button className="btn btn-light btn-block">
                            This year
                          </button>
                          <button className="btn btn-light btn-block">
                            This month
                          </button>
                          <button className="btn btn-light btn-block">
                            This week
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="filter">
                    <button
                      className="input-group border border-0"
                      data-target="#rating"
                      data-toggle="collapse"
                    >
                      <div className="input-group-prepend">
                        <span className="icon input-group-text">
                          <i className="fas fa-caret-down"></i>
                        </span>
                      </div>
                      <p className="form-control filter-text text-left">
                        Filter by Rating
                      </p>
                    </button>
                    <div className="w-100 collapse show" id="rating">
                      <div className="d-flex">
                        <SingleDataList
                          componentId="appRating"
                          data={[
                            {
                              label: "⭐⭐⭐⭐⭐",
                              value: "5"
                            },
                            {
                              label: "⭐⭐⭐⭐",
                              value: "4"
                            },
                            {
                              label: "⭐⭐⭐",
                              value: "3"
                            },
                            {
                              label: "⭐⭐",
                              value: "2"
                            },
                            {
                              label: "⭐",
                              value: "1"
                            }
                          ]}
                          dataField="rating.keyword"
                          renderItem={(label, count, isSelected, value) => (
                            <div style={{ display: "flex", width: "100%" }}>
                              {label}
                              <div className="d-flex justify-content-end ratings my-auto w-100">
                                <div style={{ width: "10%" }}></div>
                                <div
                                  className="progress"
                                  style={{
                                    width: "120px",
                                    height: "13px",
                                    position: "absolute",
                                    right: "40px"
                                  }}
                                >
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: (count / 361) * 100 + "%"
                                    }}
                                  ></div>
                                </div>
                                <div className="ml-3">{count}</div>
                              </div>
                            </div>
                          )}
                          showSearch={false}
                          style={{ display: "flex", width: "100%" }}
                          showRadio={false}
                          react={{
                            and: [
                              "appName",
                              "appVersion",
                              "appCountry",
                              "searchName"
                            ]
                          }}
                          showCount={true}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="filter">
                    <button
                      className="input-group border border-0"
                      data-target="#version"
                      data-toggle="collapse"
                    >
                      <div className="input-group-prepend">
                        <span className="icon input-group-text">
                          <i className="fas fa-caret-down"></i>
                        </span>
                      </div>
                      <p className="form-control filter-text text-left">
                        Filter by Version
                      </p>
                    </button>
                    <div className="w-100 collapse show" id="version">
                      <SingleList
                        componentId="appVersion"
                        dataField="version.keyword"
                        showRadio={false}
                        className="list"
                        react={{
                          and: [
                            "appName",
                            "appRating",
                            "appCountry",
                            "searchName"
                          ]
                        }}
                        showCount={true}
                      />
                    </div>
                  </li>
                  <li className="filter">
                    <button
                      className="input-group border border-0"
                      data-target="#country"
                      data-toggle="collapse"
                    >
                      <div className="input-group-prepend">
                        <span className="icon input-group-text">
                          <i className="fas fa-caret-down"></i>
                        </span>
                      </div>
                      <p className="form-control filter-text text-left">
                        Filter by Country
                      </p>
                    </button>
                    <div className="w-100 collapse" id="country">
                      <SingleList
                        componentId="appCountry"
                        dataField="countryName.keyword"
                        showRadio={false}
                        showCount={true}
                        showSearch={false}
                        react={{
                          and: [
                            "appName",
                            "appRating",
                            "appVersion",
                            "searchName"
                          ]
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="results-body mt-2 w-100">
              <ReactiveList
                componentId="resultList"
                dataField="reviewDate.keyword"
                react={{
                  and: [
                    "appName",
                    "appRating",
                    "appVersion",
                    "appCountry",
                    "searchName"
                  ]
                }}
                pagination={true}
                pages={10}
                size={10}
                className="resultsList"
                style={{ width: "70%" }}
                sortBy={sortByAsc === true ? "asc" : "desc"}
                renderItem={(res) => (
                  <div className="app">
                    <div className="appDetails d-flex w-100">
                      <button className="appDetail btn btn-secondary">
                        {res.appStoreName.toLowerCase() === "google"
                          ? "Play"
                          : res.appStoreName}
                      </button>
                      <h5 className="appDetail">{res.reviewHeading}</h5>
                      <div className="appDetail">{rating(res.rating)}</div>
                    </div>
                    <div className="appDetails d-flex w-100">
                      <div
                        className="appDetail"
                        style={{ textAlign: "justify" }}
                      >
                        {res.reviewText}
                      </div>
                    </div>
                    <div className="appDetails d-flex w-100">
                      <div className="appDetail" style={{ fontWeight: "900" }}>
                        by {res.reviewUserName}
                      </div>
                      <div className="appDetail">{format(res.reviewDate)}</div>
                      <div className="appDetail">{res.version}</div>
                      &nbsp;&nbsp;
                      <img
                        src={flag(res.countryName.toLowerCase())}
                        alt={res.countryName}
                        className="countryFlagIcon"
                      />
                      <div className="appDetail">{res.countryName}</div>
                      <div
                        className="d-flex justify-content-end"
                        style={{ position: "absolute", right: "31%" }}
                      >
                        <a
                          className="link-item mr-2"
                          href="#reply"
                          style={{ lineHeight: "200%" }}
                        >
                          reply
                        </a>
                        <div className="dropdown">
                          <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                          >
                            share
                            <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu">
                            <li className="link-item">
                              <a href="#shareinwhatsapp">Share on Whatsapp</a>
                            </li>
                            <li className="link-item">
                              <a href="#shareinfacebook">Share on Facebook</a>
                            </li>
                            <li className="link-item">
                              <a href="#shareinmail">Share as Mail</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                renderResultStats={(stats) => {
                  return (
                    <div className="row resultDetails">
                      <div className="col-sm-6">
                        `Viewing {stats.currentPage * 10 + 1}
                        {"-"}
                        {(stats.currentPage + 1) * stats.displayedResults} of
                        total {stats.numberOfResults} Reviews`
                      </div>
                      <div className="col-sm-3">
                        <button className="btn btn-light">
                          <i className="fas fa-bell mr-3"></i>Create Alert
                        </button>
                      </div>
                      <div className="col-sm-3">
                        <button className="btn btn-light">
                          <i className="fas fa-wifi"></i>
                        </button>
                        <button className="btn btn-light text-black">
                          {"{ }"}
                        </button>
                        <button className="btn btn-light">
                          <i className="fas fa-download"></i>
                        </button>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
}
