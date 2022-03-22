import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [priceRange, setPriceRange] = useState("Ulgurji savdo");
  const [message, setMessage] = useState("Message");
  const [buttonId] = useState("1234");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("http://31.42.189.4:16333/webcabinet/hs/webcab/zayavka", {
        method: "POST",
        headers: {
          authorization: "Basic bW9iaWw6MTIz",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          telefon: tell,
          faoliyat: priceRange,
          izoh: message,
          utm: buttonId
        })
      }).then((res) => res.json());

      history.push("/thanks");
    } catch (error) {
      history.push("/error");
      console.log(error);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='right' />
        <div className='left'>
          <div className='header'>
            <h2 className='welcome'>Welcome To BASCO</h2>
            <h4 className='a2'>Sign up and grow your business with us</h4>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              className='form-field'
              type='text'
              placeholder='Enter name'
              required
            />
            <input
              onChange={(e) => setTell(e.target.value)}
              className='form-field'
              type='number'
              placeholder='Tell'
              required
            />
            <select
              className='form-field'
              required
              onChange={(e) => setPriceRange(e.target.value)}>
              <option className='option' value='Ulgurji savdo'>
                Ulgurji savdo
              </option>
              <option className='option' value='Chakana savdo'>
                Chakana savdo
              </option>
              <option className='option' value='Xizmat ko`rsatish'>
                Xizmat ko'rsatish
              </option>
              <option className='option' value='Ishlab chiqarish'>
                Ishlab chiqarish
              </option>
            </select>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='form-text'
              type='text'
              placeholder='Messages'
              required
            />
            <button type='submit' className='animation a6'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
