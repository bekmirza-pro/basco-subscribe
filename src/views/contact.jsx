import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ZayavkaFinder from "../apis/api";
import Image from "../Assets/Images/LOGO-WHITE-GOLD.png";

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
      const response = await ZayavkaFinder.post(
        "/zayavka",
        {
          name,
          telefon: tell,
          faoliyat: priceRange,
          izoh: message,
          utm: buttonId
        },
        {
          headers: {
            authorization: "Basic bW9iaWw6MTIz",
            "Content-Type": "application/json"
          }
        }
      );
      // fetch("http://31.42.189.4:16333/webcabinet/hs/webcab/zayavka", {
      //   method: "POST",
      //   headers: {
      //     authorization: "Basic bW9iaWw6MTIz",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     name,
      //     telefon: tell,
      //     faoliyat: priceRange,
      //     izoh: message,
      //     utm: buttonId
      //   })
      // }).then((res) => res.json());

      if (response) {
        history.push("/thanks");
      }
    } catch (error) {
      history.push("/error");
      console.log(error);
    }
  };

  return (
    <>
      <div className='container'>
        {/* <div className='right' /> */}
        <div className='left'>
          <img
            src={Image}
            className='basco-img'
            alt='basco-images'
            width='320px'
          />
          <div className='header'>
            <h2 className='welcome'>
              Қуйида ўз маълумотларингизни қолдиринг, тез орада сиз билан
              алоқага чиқамиз
            </h2>
            {/* <h4 className='a2'>Sign up and grow your business with us</h4> */}
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              className='form-field'
              type='text'
              placeholder='Исмингизни киритинг'
              required
            />
            <input
              onChange={(e) => setTell(e.target.value)}
              className='form-field'
              type='number'
              placeholder='Тел'
              required
            />
            <select
              className='form-field'
              required
              onChange={(e) => setPriceRange(e.target.value)}>
              <option className='option' value='Улгуржи савдо'>
                Улгуржи савдо
              </option>
              <option className='option' value='Чакана савдо'>
                Чакана савдо
              </option>
              <option className='option' value='Хизмат кўрсатиш'>
                Хизмат кўрсатиш
              </option>
              <option className='option' value='Ишлаб чиқариш'>
                Ишлаб чиқариш
              </option>
            </select>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className='form-text'
              type='text'
              placeholder='Изоҳлар учун'
              required
            />
            <button type='submit' className='animation a6'>
              Юбориш
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
