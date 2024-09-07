import { handleActions } from "redux-actions";
import * as api from "../lib/api";

import createRequsetThunk from "../lib/createRequsetThunk";

//액션 타입에 대한 정의(하나의 구성당 세 가지 필요)

const GET_POST = "article/GET_POST"; // 진행(요청)
const GET_POST_SUCCESS = "article/GET_POST_SUCCESS"; //원하는 데이터를 가져왔을 때(응답 성공)
const GET_POST_FAILURE = "article/GET_POST_FAILURE"; //진행상 에러 발생(응답 실패)

export const getPost = (id) => async (dsipatch) => {
  dsipatch({ type: GET_POST }); //요청의 시작
  try {
    const res = await api.getPost(id);
    if (res) {
      console.log(res);
    }
    dsipatch({
      type: GET_POST_SUCCESS,
      payload: res.data,
    }); //요청에 의한 응답 성공
  } catch (err) {
    dsipatch({
      type: GET_POST_FAILURE,
      payload: err,
      error: true,
    }); //요청에 의한 응답 실패
    throw err; //화면단에서 에러 세부항목을 볼 수 있음
  }
};

const initialState = {
  loading: {
    GET_POST: false,
  },
  post: null,
};
console.log(initialState);

const article = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true, //요청 시작(로딩바가 나오면 사용자 입장에서는 기다린다.)
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //요청에 대한 응답 완료(로딩바가 사라져야 사용자가 다음 동작을 수행할 수 있음)
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //요청에 대한 응답 실패(로딩바가 사라져야 사용자가 다음 동작을 수행할 수 있음) -> 사용자 입장에서는 불쾌감을 주지 않은 모달 팝업창을 띄우면 된다.
      },
    }),
  },
  initialState
);

export default article;
