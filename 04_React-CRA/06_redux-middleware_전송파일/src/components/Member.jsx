import styled from "@emotion/styled/macro";

const UserLists = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  padding: 0 10px;
`;
const UserList = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  h4 {
    min-width: 35%;
    padding: 0 10px;
  }
  div {
    text-align: left;
    border-left: 1px solid #eee;
    padding: 0 10px;
    color: #555;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    p {
      margin: 0;
    }
  }
`;

const Member = ({ usersProp, loadingUsersProp }) => {
  console.log(usersProp);
  return (
    <section>
      <h3>회원명단</h3>
      {loadingUsersProp && "로딩 중..."}
      {!loadingUsersProp && usersProp && (
        <UserLists>
          {usersProp.map((user) => (
            <UserList key={user.id}>
              <h4>{user.name}</h4>
              <div>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            </UserList>
          ))}
        </UserLists>
      )}
      <div></div>
    </section>
  );
};
export default Member;
