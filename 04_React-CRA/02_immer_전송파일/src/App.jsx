import React, { useRef, useState } from "react";
import { Immer } from "immer";
import { produce } from "immer";
import styled from "@emotion/styled/macro";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;

  .insert-part {
    width: 100%;
    padding: 10px;
    background-color: #edefed;
    display: flex;
    column-gap: 10px;
    .input-line {
      width: 100%;
      flex: 1;
      height: 40px;
      display: flex;
      column-gap: 10px;
      .input-box {
        border: none;
        background-color: f9f9f9;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 18px;
      }
    }
    button {
      border-radius: 4px;
      background-color: #0847be;
      color: #fff;
      font-size: 18px;
      border: none;
      cursor: pointer;
    }
  }
  .lists {
    width: 100%;
    ul {
      list-style: none;
      li {
        background-color: #edefed;
        height: 32px;
        &:nth-of-type(even) {
          background-color: #cdcfcd;
        }
      }
    }
  }
`;

function App() {
  // console.log(Immer);
  // console.log(produce);
  const nextId = useRef(1);
  const [form, setForm] = useState({
    date: "",
    list: "",
  });
  const [data, setData] = useState({
    array: [],
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    // setForm({
    //   ...form,
    //   [name]: [value],
    // });
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      id: nextId.current,
      date: form.date,
      list: form.list,
    };
    // setData({
    //   ...data,
    //   array: data.array.concat(info),
    // });
    setData(
      produce(data, (draft) => {
        draft.array.push(info);
      })
    );
    nextId.current += 1;
  };

  return (
    <div className="App">
      <Wrapper>
        <form onSubmit={onSubmit}>
          <div className="insert-part">
            <div className="input-line">
              <input
                name="date"
                className="input-box"
                type="date"
                onChange={onChange}
                value={form.date}
              />
              <input
                name="list"
                className="input-box"
                type="text"
                placeholder="계획 세부사항"
                onChange={onChange}
                value={form.list}
              />
            </div>
            <button type="submit">등록</button>
          </div>
        </form>
        <div className="lists">
          <ul>
            {data.array.map((d) => (
              <li key={d.id}>
                ({d.id}) {d.date} : {d.list}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
