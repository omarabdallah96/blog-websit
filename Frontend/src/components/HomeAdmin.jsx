import React, { Component } from "react";

class HomeAdmin extends Component {
  state = {
    post: [],
  };

  async deletepost(id) {
    const response = await fetch(`//localhost:8000/dashboard/delete/${id}`);

    console.log("ok");
    let stateContacts = [...this.state.post].filter((post) => post.id != id);
    this.setState({ post: stateContacts });
  }

  acceptpost = async (id, status) => {
    let url = `//localhost:8000/dashboard/accept/${id}`;

    const response = await fetch(url);
    const result = await response.json();
    this.getpost();
  };
  getpost = async () => {
    const url = "http://localhost:8000/dashboard/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ post: data.result });
    this.setState({ post: data.result, loading: false });
  };

  async componentDidMount() {
    this.getpost();
  }

  render() {
    let { post } = this.state;
    return (
      <div>
        {this.state.post.map((post) => (
          <tr key={post.id}>
            <div key={post.id}>
              <div className="container">
                <div className="post">
                  <div className="post__header header">
                    <div className="header__left">
                      <a href="#"></a>
                      <div className="post__author author">
                        <span className="author__name">
                          <img
                            src={post.picture}
                            className="post__author-pic"
                          />
                          <a className="author__name" href="#">
                            {post.name}
                          </a>
                        </span>
                        <i className="author__verified"></i>
                      </div>
                      <span className="post__date">
                        <a href="#">{post.created_at}</a>
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
                    <p className="content__paragraph">{post.content}</p>
                    <img src={post.picture} className="content__image" />
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
          </tr>
        ))}
      </div>
    );
  }
}

export default HomeAdmin;
