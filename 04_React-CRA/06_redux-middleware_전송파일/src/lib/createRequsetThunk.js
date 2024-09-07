function createRequsetThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type }); //등록 시작
    try {
      const res = await request(params);
      console.log(res);
      console.log(res.data);

      dispatch({
        type: SUCCESS,
        payload: res.data,
      }); //api의 요청에 대한 성공(응답이 존재)
    } catch (err) {
      dispatch({
        type: FAILURE,
        payload: err,
        error: true,
      }); //api의 요청에 대한 실패(응답이 실패)
      throw err;
    }
  };
}
export default createRequsetThunk;
