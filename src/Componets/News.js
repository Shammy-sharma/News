import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general"

    }
    static propsTypes = {
        country: PropTypes.string,
        category: PropTypes.string,

    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.props.category}- News`
    }

    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5190e53ec2940b8af2121b785f91d7c`
        let data = await fetch(url)
        let passeddata = await data.json();
        this.setState({ articles: passeddata.articles })
        this.props.setProgress(100)
    }
    privious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5190e53ec2940b8af2121b785f91d7c${this.state.page - 1}`;
        let data = await fetch(url)
        let passeddata = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: passeddata.articles
        })
    }
    next = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b5190e53ec2940b8af2121b785f91d7c${this.state.page + 1}`;
        let data = await fetch(url)
        let passeddata = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: passeddata.articles
        })
    }

    render() {
        return (
            <div className='container my-3' >
                <h2 className="text-center" style={{ marginTop: "80px" }}>News Top Headline </h2>

                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} descreption={element.description ? element.description : ""} imgUrl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}

                </div>
                <footer>
                    <h5 className="text-center">&copy;Shammy sharma</h5>
                </footer>
            </div >

        )
    }
}

export default News