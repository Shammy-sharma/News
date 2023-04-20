import React, { Component } from 'react'

export class NewsItem extends Component {
   
  render() {
    let {title, descreption, imgUrl,newsurl} = this.props
    return (
      <div>
        <div className="card" >
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="Card-title">{title}</h5>
    <p className="card-text">{descreption}</p>
    <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem