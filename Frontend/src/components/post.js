import React from "react";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
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
    const url = "http://localhost:8000/dashboard";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ post: data.result });
    this.setState({ post: data.result, loading: false });
  };

  async componentDidMount() {
    this.getpost();
  }

  render() {
    return (
      <div>
        <table>
          <thead>
          <th>category</th>

          <th>status</th>
          <th>view post</th>

          {this.state.post.map((post) => (
            <tr key={post.id}>
              <td>{post.category}</td>

              <td>{post.status}</td>

              <td className="links">
                <button><Link to={`/post/${post.id}`}>
                    <img src="https://img.icons8.com/wired/24/000000/visible.png" />
                </Link></button>
                

                <button onClick={() => this.acceptpost(post.id)}>
                  <img src="https://img.icons8.com/24/000000/ok/" />
                </button>

                <button onClick={() => this.deletepost(post.id)}>
                  <img src="https://img.icons8.com/24/000000/delete/" />
                </button>
              </td>
            </tr>
          ))}
          </thead>
        </table>
      </div>
    );
  }
}
