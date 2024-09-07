import { handleActions } from "redux-actions";
import * as api from "../lib/api";

import createRequsetThunk from "../lib/createRequsetThunk";

// 로딩 상태, 회원명단 ->
// #1. API 호출
// #2. API 호출 성공
// #3. API 호출 실패

const GET_USERS = "member/GET_USERS";
const GET_USERS_SUCCESS = "member/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "member/GET_USERS_FAILURE";

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const res = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: res.data,
//     }); // 요청성공
//   } catch (err) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: err,
//       error: true,
//     }); // 요청실패 & 에러발생
//     throw err;
//   }
// };

export const getUsers = createRequsetThunk(GET_USERS, api.getUsers);

const initialState = {
  loading: {
    GET_USERS: false,
  },
  users: null,
};

const member = handleActions(
  {
    //map
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        GET_USERS: true,
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        GET_USERS: false,
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state) => ({
      ...state,
      loading: {
        GET_USERS: false,
      },
    }),
  },
  initialState
);
export default member;
