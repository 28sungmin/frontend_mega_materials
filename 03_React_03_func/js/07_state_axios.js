const root = document.querySelector("#root");

const url = "https://jsonplaceholder.typicode.com/users/";
class App extends React.Component {
  state = {
    idx: 1,
    users: [],
  };
  getData = async (_idx) => {
    console.log("#2. 데이터 가져오기 함수 싫행");
    const { data } = await axios.get(url + _idx);
    console.log(data);
    return data;
  };
  getUser = async () => {
    console.log("#1. 버튼 클릭~!");
    // 기존 state.idx의 값을 변경해준다.
    const idx = this.state.idx + 1;
    const user = await this.getData(idx);
    // [...]은 기존에 있는 것에 계속 붙이겠다는 의미
    // 기존의 state.users를 배열 데이터에 새로 받은 회원을 추가한다.
    const users = [...this.state.users, user];
    console.log(users);
    this.setState({ idx, users });
  };

  // componentDidMount()  // 최초 한 번
  // componentDidUpdate() // render()가 실행될 때마다
  // componentWillUnmount() // component가 화면에서 퇴장할 때(페이지 전환)

  componentWillUnmount() {
    console.log("Unmount");
  }

  componentDidUpdate() {
    console.log("Update");
  }

  // 최초 Component가 생성될 때 한 번 실행된다.
  async componentDidMount() {
    console.log("mount");
    const user = await this.getData(this.state.idx);
    this.setState({
      users: [user],
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Users</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-3 text-center">
          <button className="btn btn-primary" onClick={this.getUser}>
            회원 가져오기
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, root);

////////////////////////////////////////////////

const { useState, useEffect } = React;
const rootHook = document.querySelector("#root-hook");

// url은 상단의 선언된 값과 동일하게 사용한다.
const AppHook = () => {
  // 대규모 프로젝트에서 객체화를 통해서 초기 상태값을 구성할 수 있음
  //   const [indata, setInData] = useState({
  //     idx: 1,
  //     users: [],
  //     ...
  //   });
  const [idx, setIdx] = useState(1);
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const { data } = await axios.get(url + idx);
    console.log(data);
    setIdx(idx + 1);
    setUsers([...users, data]);
  };

  //   최초 Component가 생성될 때 한 번 실행된다. 의존성 []의 값이 없을 경우
  useEffect(getUser, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-3 text-center">
        <button className="btn btn-primary" onClick={getUser}>
          회원 가져오기
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<AppHook />, rootHook);
