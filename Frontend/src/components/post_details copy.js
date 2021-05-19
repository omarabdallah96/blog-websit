import { Component } from "react";
import "./Details.css";

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
        <tr>
          <td>
            <div>{Blogs.name}</div>
          </td>
          <td>
            <div>{Blogs.created_at}</div>
          </td>
        </tr>
       

        <div></div>
        <div>{Blogs.category}</div>
        <div>{Blogs.title}</div>
        <div>
          <img src={Blogs.picture} alt="" />
          <tr>
          <td>email:</td>
          <td>{Blogs.email}</td>
        </tr>
        </div>


        <div class="container">
      <div class="post">
        <div class="post__header header">
          <div class="header__left">
            <a href="#">
              <img src="./images/author-pic.jpg" class="post__author-pic" />
            </a>
            <div class="post__author author">
              <span class="author__name">
                <a href="#">Mark Zuckerberg</a>
              </span>
              <i class="author__verified"></i>
            </div>
            <span class="post__date">
              <a href="#">October 13, 2020</a>
            </span>
            <span class="post__date-privacy-separator">&nbsp;·</span>
            <i class="post__privacy"></i>
          </div>
          <div class="header__right">
            <div class="post__options options">
              <i class="options__icon"></i>
            </div>
          </div>
        </div>
        <div class="post__content content">
          <p class="content__paragraph">
            Facebook's Oculus Quest 2 starts shipping today! It's another big
            step forward for VR. I've been using mine all summer and I'm looking
            forward to more of you experiencing this.
          </p>
          <img src="images/post-pic.jpg" class="content__image" />
        </div>
        <div class="post__footer footer">
          
           
          </div>
          <div class="footer__buttons buttons">
            <span class="buttons__like like">
              <i class="like__icon"></i>Like
            </span>
            <span class="buttons__comment comment"
              ><i class="comment__icon"></i>Comment</span
            >
            
            
          </div>
         
          </div>
        </div>
     
      </div>
    );
  }
}
