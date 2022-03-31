import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Display';

function App() {
  let [data, setData] = useState([]);
  let [tmp, setTmp] = useState([]);
  useEffect(() => {
    console.log("EFFECT!");
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(res => {
        console.log("get the data!");
        setData(res.data);
      })
  }, [])
  let changeHandle = (event) => {
    let str = event.target.value;
    if (str.length === 0) {
      setTmp([]);
    }
    else {
      // 使用正则表达式匹配不区分大小写的字符串
      let reg = new RegExp('('+str+')',"ig");
      let tmp = data.filter(item => {
        return reg.test(item.name.common);
      });
      setTmp(tmp);
    }
  }
  return (
    <>
    <label>find countries</label>
    <input type="text" name="find_countries" onChange={changeHandle}></input>
    <Display val={tmp}></Display>
    </>
  );
}

export default App;
