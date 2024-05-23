import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, date, author } = this.props;
    return (
      <div>
        <div className="card mb-2 my-2" style={{ backgroundColor: "#808080" }}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <i>{description}</i>
            </p>
            <p className="card-text" style={{ color: "darkblue" }}>
              " From {author ? author : "unknown"} at{" "}
              {new Date(date).toLocaleTimeString()} "
            </p>

            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
