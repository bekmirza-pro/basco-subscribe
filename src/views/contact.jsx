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

  let medium = new URLSearchParams(window.location.search).get("medium");
  let post_id = new URLSearchParams(window.location.search).get("post_id");
  post_id = Number(post_id);

  console.log(post_id);
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
          medium,
          post_id
        },
        {
          headers: {
            authorization: "Basic bW9iaWw6MTIz",
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
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
        <div>
          <ul className='list-offer'>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>Бир йиллик бeпул техник хизмат.</p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>
                Ҳисоб-китобларни тийин-тийинигача кўриб туриш.
              </p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>Омбордаги маҳсулотларни аниқ билиб туриш.</p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>
                Маҳсулотлар таннархини тўғри ва аниқ ҳисоблаш.
              </p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>Ходимлар иш унумдорлигини ошириш.</p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>
                CRM бўлимида барча мижозлар базасини юритиш.
              </p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>
                Мижозлар билан акт сверкаларни кўриб туриш.
              </p>
            </li>
            <li className='list-item'>
              <img
                src='https://bk.pcg.uz/images/tild3532-3363-4061-b464-633337373235__check_1.png'
                alt=''
                width='20px'
                height='20px'
              />
              <p className='offer'>
                Кунлик фойда-зарарни ҳар кун анализ қила олиш.
              </p>
            </li>
          </ul>
        </div>
        <div className='left'>
          <img
            src={Image}
            className='basco-img'
            alt='basco-images'
            width='290px'
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
            <button type='submit' className='button-form'>
              Юбориш
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
