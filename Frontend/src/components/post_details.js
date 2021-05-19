import { Component } from "react";

export default class Post_details extends Component {
  state = {
    Blogs: [],
  };
  async componentDidMount() {
    const url = `http://localhost:8000/posts/${this.props.match.params.id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ Blogs: data.result[0] });
    console.log(data.result[0].id);
  }
  render() {
    let { Blogs } = this.state;
    return (
      <div key={Blogs.id}>
        <div className="container">
          <div className="post">
            <div className="post__header header">
              <div className="header__left">
                <a href="#"></a>
                <div className="post__author author">
                  <span className="author__name">
                    
                    <img src={Blogs.picture} className="post__author-pic" />
                    <a className="author__name" href="#">
                      {Blogs.name}
                    </a>
                  </span>
                  <i className="author__verified"></i>
                </div>
                <span className="post__date">
                  <a href="#">{Blogs.created_at}</a>
                </span>
                <i className="post__privacy"></i>
              </div>
              <div className="header__right">
                <div className="post__options options">
                  <i className="options__icon"></i>
                </div>
              </div>
            </div>
            <div className="post__content content">
              <p className="content__paragraph">{Blogs.content}</p>
              <img src={Blogs.picture} className="content__image" />
            </div>
            <div className="post__footer footer"></div>
            <div className="footer__buttons buttons">
              <span className="buttons__like like">
                <i className="like__icon"></i>Accept
              </span>
              <span className="buttons__comment comment">
                <i className="comment__icon"></i>Delete
              </span>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}
