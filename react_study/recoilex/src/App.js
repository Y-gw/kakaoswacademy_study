// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Counter from './Counter';
// import CharacterCounter from './CharacterCounter';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from "recoil";

import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 26px;
    border-width: 2px;
    border-radius: 8px;
    cursor: pointer;
`;
const StyledTextarea = styled.input`
    width: calc(100% - 100px);
    ${(props) => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

const numState1 = atom({
  key: "numState1",
  default: ""
});
const numState2 = atom({
  key: "numState2",
  default: ""
});
const num1State = selector({
  key: "num1State",
  get: ({get})=>{
      return get(numState1)
  }
});
const num2State = selector({
  key: "num2State",
  get: ({get})=>{
      return get(numState2)
  }
});

function NumInput1() {
  const [num1, setNum1] = useRecoilState(numState1);
  const onChangeNum1 = (event) => {
      setNum1(event.target.value);
  };
  return (
      <div>
          Number1 &nbsp;
          <input type="number" value={num1} onChange={onChangeNum1} />
          <br />
      </div>);
}
function NumInput2() {
  const [num2, setNum2] = useRecoilState(numState2);
  const onChangeNum2 = (event) => {
      setNum2(event.target.value);
  };
  return (
      <div>
          Number2 &nbsp;
          <input type="number" value={num2} onChange={onChangeNum2} />
          <br />
      </div>);
}
function NumAdd() {
  const num1 = useRecoilValue(num1State);
  const num2 = useRecoilValue(num2State);
  return (
      <>
          <StyledTextarea value={Number.parseInt(num1) + Number.parseInt(num2)}></StyledTextarea><br /></>);
}
function NumMinus() {
  const num1 = useRecoilValue(num1State);
  const num2 = useRecoilValue(num2State);
  return (<>
      <StyledTextarea value={Number.parseInt(num1) - Number.parseInt(num2)}></StyledTextarea><br /></>);
}
function NumMulti() {
  const num1 = useRecoilValue(num1State);
  const num2 = useRecoilValue(num2State);
  return (<>
      <StyledTextarea value={Number.parseInt(num1) * Number.parseInt(num2)}></StyledTextarea><br /></>);
}
function NumDivid() {
  const num1 = useRecoilValue(num1State);
  const num2 = useRecoilValue(num2State);
  return (<>
      <StyledTextarea value={Number.parseInt(num1) / Number.parseInt(num2)}></StyledTextarea><br /></>);
}
function NumCal() {
  return (
      <div>
          <table style={{ marginLeft: "auto", marginRight: "auto" }}>
              <thead> <tr>
                  <th><h1>Operator</h1></th>
                  <th><h1>result</h1></th>
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><StyledButton type="button">+</StyledButton></td>
                      <td><NumAdd /></td>
                  </tr>
                  <tr>
                      <td><StyledButton type="button">-</StyledButton></td>
                      <td><NumMinus /> </td>
                  </tr> <tr>
                      <td><StyledButton type="button">*</StyledButton></td>
                      <td><NumMulti /></td>
                  </tr>
                  <tr>
                      <td><StyledButton type="button">/</StyledButton></td>
                      <td><NumDivid /></td>
                  </tr>
              </tbody>
          </table>
      </div>
  );
}

function App() {
  return (
      <RecoilRoot>
          <div className="App" style={{ textAlign: "center" }}>
              <h1 style={{ background: "#f7e600", textAlign: "center" }}>GCU Calculator</h1>
              <NumInput1 />
              <NumInput2 />
              <hr></hr>
              <NumCal />
          </div>
      </RecoilRoot>
  );
}

export default App;
