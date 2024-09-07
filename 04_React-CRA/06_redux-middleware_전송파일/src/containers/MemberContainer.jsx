import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Member from "../components/Member";
import { getUsers } from "../modules/member";

const MemberContainer = ({ users, loadingUsers, getUsers }) => {
  console.log(users);
  console.log(loadingUsers);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h2>MemberContainer</h2>
      <Member usersProp={users} loadingUsersProp={loadingUsers} />
    </>
  );
};
export default connect(
  ({ member }) => ({
    users: member.users,
    loadingUsers: member.loading.GET_USERS,
  }),
  {
    getUsers,
  }
)(MemberContainer);
