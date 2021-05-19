import React from "react";

export default class Message extends React.Component {

  state = {
    loading: true,
    post: [],
    id:this.props
  };
  async componentDidMount() {
    const url = "http://localhost:8000/dashboard/messages";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ post: data.result, loading: false });
  };
  
  
  render() {
    return (
      <div className="grid-item">
        <div>
          <table>
            <th>username</th>
            <th>email</th>
            <th>message</th>
            {this.state.post.map((post) => (
              <tr key={post.id}>
                <td>{post.username}</td>
                <a href={`mailto:${post.email}`}>{post.email}</a>


                <td>{post.message}</td>
               
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
;
