import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import "./ProductDetail.css";
import MainPic from "./assets/unsplash_Kf2kr_BhaTk.png";
import star from "./assets/Star 2.png";
import { Footer } from "../Footer/Footer";

export const ProductDetail = () => {
  const [value, setValue] = useState(1);
  const [mainImage, setMainImage] = useState(MainPic);


  const incrementValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrementValue = () => {
    setValue((prevValue) => Math.max(1, prevValue - 1));
  };

  const handleChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  const handleSmallImageClick = (smallImage) => {
    setMainImage(smallImage);
  };

  return (
    <>
      <div className="DetailBody">
        <div className="DetailContainer">
          <div className="DetailInfo">
            <div className="DetailImage">
              <img src={mainImage} alt="img"></img>
              <div className="DetailSmallImg">
                <img
                  src={MainPic}
                  alt="Small Product"
                  onClick={() => handleSmallImageClick(MainPic)}
                />
                <img
                  src={MainPic}
                  alt="Small Product"
                  onClick={() => handleSmallImageClick(MainPic)}
                />
                <img
                  src={MainPic}
                  alt="Small Product"
                  onClick={() => handleSmallImageClick(MainPic)}
                />
                <img
                  src={MainPic}
                  alt="Small Product"
                  onClick={() => handleSmallImageClick(MainPic)}
                />
              </div>
            </div>
            <div className="DetailNameSpec">
              <p className="DetailName">ChatBot</p>
              <p className="DetailSpec1">
                AI-powered chat solution for seamless customer interaction.
              </p>
              <div className="DetailStar">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="DetailSpec2">
                AI-powered chat solution for seamless customer interaction.
              </p>
              <p className="DetailSpec2">
                AI-powered chat solution for seamless customer interaction.
              </p>
              <p className="DetailSpec2">
                AI-powered chat solution for seamless customer interaction.
              </p>
              <div className="DetailPurchase">
                <div className="DetailQuan">
                  <button className="DetailMinus" onClick={decrementValue}>
                    -
                  </button>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={value}
                    onChange={handleChange}
                  />
                  <button className="DetaiPlus" onClick={incrementValue}>
                    +
                  </button>
                </div>
                <button className="DetailBuy">Buy Now</button>
                <button className="DetailCart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="DetailDes">
            <Tab.Container defaultActiveKey="description">
              <Nav className="DetailNav">
                <Nav.Item>
                  <Nav.Link eventKey="description" className="DetailNavLink">Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="specification" className="DetailNavLink">Specification</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" className="DetailNavLink">Reviews</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="description">
                  <p className="DetailContent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae mollitia animi quas sunt ipsa. Exercitationem ducimus atque repellat excepturi animi omnis et? Eum rem, perspiciatis, minus, ipsum natus ad amet assumenda ipsam tempora exercitationem in a eius! Est voluptatum repudiandae tempore consequatur. Repellat delectus architecto in provident possimus expedita. Velit cum sit nam qui illo deserunt adipisci saepe, sequi voluptatum provident delectus est ducimus! Quaerat cumque mollitia aspernatur saepe quasi quis natus est et eveniet unde voluptatum ea, iure porro corporis, totam provident quam, consectetur sapiente dicta culpa! Natus ab possimus quidem amet ipsam dolore, commodi non reiciendis voluptate labore deserunt veniam fugiat dolores vero? Optio debitis illum natus repellendus deserunt in deleniti dignissimos beatae voluptatum, perferendis explicabo cum a at aut. Corrupti repudiandae aperiam sint ex assumenda dignissimos exercitationem nisi minima cum, est saepe neque adipisci nam culpa temporibus laboriosam velit amet, ipsum dolor quibusdam dolorum voluptas! Dolores, aut eum a culpa suscipit doloremque eius tenetur labore eligendi mollitia excepturi, esse ipsum temporibus officiis asperiores voluptatibus in molestiae, voluptate eveniet deleniti quod ut. Dicta, deleniti porro. Dignissimos tenetur, quasi earum amet recusandae quis magnam repudiandae odio qui. Maiores laudantium et aliquid consectetur, numquam, ipsa culpa ipsum impedit, cumque non obcaecati aspernatur quidem fuga necessitatibus dolorum delectus quia vitae? Laboriosam quibusdam architecto pariatur inventore obcaecati impedit sunt vel. Culpa accusamus dolorem nesciunt fugiat nam, voluptatibus laudantium voluptates quia recusandae, quod velit eius nisi quo qui esse. Itaque mollitia quisquam culpa, libero, quasi sapiente molestiae voluptas quam magni vero numquam voluptate voluptatem. Deleniti autem beatae ex doloribus quas. Recusandae, alias consectetur necessitatibus culpa ratione esse rem earum voluptas libero nisi. At amet aliquid natus dolorum, incidunt voluptatem consequuntur fuga itaque, quaerat velit assumenda, quia veniam nemo quisquam a reprehenderit magni ipsa animi harum! Laboriosam nemo repudiandae magnam a ad esse, quisquam quas ab ex maiores ipsum id, doloremque sed excepturi neque nihil dolore rem voluptate officia dolorum nobis sint modi qui temporibus. Vitae possimus distinctio et. Porro tempore vitae error, aliquid odio qui velit eos iste consequatur earum minus autem facilis amet tenetur ab fugit provident. Est consectetur dolore nam minima fugit. Incidunt ipsum eaque laboriosam non eos corrupti? Laboriosam sapiente cum, quisquam voluptate itaque non excepturi voluptatem porro! Odit minima omnis magnam porro aut, alias neque molestiae architecto tenetur animi rerum ducimus cumque eius expedita officiis quos incidunt libero est? Veniam sed perferendis quas pariatur exercitationem maxime vitae soluta? Magnam quidem consectetur quam sit. Corrupti, molestias modi eos rem repellendus quia provident architecto quidem laudantium facere, sequi error ea repellat sed numquam alias cum reiciendis adipisci itaque ab. Nulla voluptatem id fugit dolores corrupti suscipit culpa? Eos vitae minima atque ducimus cupiditate tempora adipisci neque quae at doloribus delectus quaerat debitis ab sed repellat, vel expedita quod itaque! Tenetur facilis dolorum similique, illo officia consequuntur earum aspernatur rerum voluptate voluptatibus excepturi ea qui facere aut? Incidunt quis beatae voluptas? Illum, excepturi eveniet numquam molestiae fugiat sapiente temporibus quibusdam officia quaerat saepe, reiciendis repellendus repudiandae quos vero eos dolorum maxime odit?</p>  
                </Tab.Pane>
                <Tab.Pane eventKey="specification">
                 <p className="DetailContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum amet sint error similique. Dolorem tempore reprehenderit vel dolore neque explicabo aperiam dicta, nam, ullam nemo, quibusdam necessitatibus facilis. Asperiores, dolores dolorem voluptate quam minima temporibus corporis nemo labore vero itaque quae impedit cum similique, ullam tempora atque sapiente ex, sunt pariatur alias architecto voluptates. Vero ratione aspernatur atque, quis dolor inventore tempore recusandae delectus consectetur sapiente, voluptate non! Dolorem repellat rerum nisi voluptatum dolore rem tempore cumque exercitationem facilis laborum aut voluptas, dolor sunt aperiam, hic nihil. Repellat modi iure eaque, nobis libero provident necessitatibus quo sequi facere asperiores optio soluta? Nesciunt, maiores, eius unde debitis ut consequuntur tenetur voluptates maxime ducimus eos soluta aut provident! Veritatis reprehenderit incidunt eveniet, earum neque, ratione atque necessitatibus quos perspiciatis magnam laboriosam nihil voluptate adipisci vero fugit itaque voluptatem, ipsum sapiente quaerat praesentium in soluta repudiandae? Vel molestiae consequatur iste nulla qui consectetur mollitia commodi ratione quod porro. Minus adipisci hic inventore quisquam quod provident voluptatem! Rem libero magni facilis quasi molestiae qui excepturi numquam minima quo omnis velit reprehenderit eveniet vero itaque, quae inventore? Veritatis qui dolores harum similique dignissimos impedit ea earum obcaecati, id magni excepturi tempore debitis aliquid iste omnis labore recusandae aperiam amet odio itaque. Tempora officia similique ipsum quam accusantium ducimus odio modi! Veritatis, neque iure quaerat sunt ut corporis modi explicabo placeat voluptas provident illo corrupti dignissimos pariatur officiis! Vel iusto, ut aliquid maiores a illum debitis deserunt nostrum hic assumenda, quis rerum incidunt repudiandae quod ipsam ratione minus repellat laboriosam rem quidem. Magnam sunt aliquam tenetur ad quibusdam quo in perferendis, sequi iste quisquam illum sapiente quasi similique! Totam pariatur recusandae reprehenderit iusto cupiditate et id rem officiis sit officia, possimus non praesentium omnis velit quidem earum beatae porro numquam ipsam, hic deserunt magnam iste vitae minima? Velit at laborum totam, quisquam quaerat unde asperiores perferendis, beatae pariatur nisi ab accusamus tempore quibusdam reprehenderit. Unde itaque sit qui magnam aspernatur! Odit cum nihil ipsam facere sint doloremque repellendus! Esse, incidunt. Maxime, quis voluptate molestias quisquam architecto iusto voluptates in aut dolor debitis! Dolor soluta, ipsum totam quae doloribus enim voluptates ab suscipit repellat. Amet aliquam libero tempore dolorum cum, fugiat quae ratione iste nihil? A saepe voluptatibus natus voluptatum? Doloribus aut accusamus, inventore deserunt iusto commodi adipisci nihil molestias aspernatur perferendis sit, eveniet voluptate harum unde. Facilis quo mollitia, non excepturi quis obcaecati adipisci exercitationem ipsam, consectetur, rem repudiandae temporibus officiis recusandae delectus reprehenderit sunt aperiam voluptatibus? Rem doloremque laboriosam laborum et molestias, cum explicabo eius possimus a error iste voluptatibus autem vero nam quaerat impedit, consequuntur aspernatur optio. Porro natus excepturi voluptas explicabo dolorem unde reiciendis odit dignissimos nihil, quasi mollitia molestiae dicta dolor autem sapiente consequatur, iure cupiditate et. Ipsa quod temporibus expedita rem magnam nihil velit tenetur labore deleniti doloribus explicabo voluptates dolorem dicta placeat sunt saepe, itaque quis reiciendis molestiae nostrum aperiam, sit iure cupiditate cum. Beatae aperiam repudiandae fugiat eius molestias a possimus, accusamus molestiae tempore quia nemo voluptatibus ab.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="reviews">
                  <p className="DetailContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aspernatur earum fuga fugiat explicabo similique sint unde in iusto doloremque eligendi ex soluta consequuntur facilis vitae cupiditate quae, mollitia quibusdam. Explicabo beatae quisquam perspiciatis eligendi culpa aliquam rerum enim veritatis aut, consequatur deleniti porro dolore incidunt soluta vel facere minima at libero debitis non rem? Quia quod, sit corporis eum cumque nesciunt eligendi quae reiciendis fugiat mollitia sapiente eaque blanditiis nostrum officiis architecto odit laboriosam soluta. Odit fugiat, sit itaque culpa repellendus est adipisci magnam numquam laboriosam voluptatibus voluptas. Eligendi quae qui saepe eveniet minus, sint expedita quia culpa deserunt tenetur necessitatibus nulla labore aspernatur delectus molestiae dolores perferendis enim rerum blanditiis illum modi dolor? Molestiae a consequuntur ipsa velit harum aliquam nostrum fugiat est, earum recusandae quos eveniet mollitia consectetur repudiandae atque id quae culpa nam aspernatur sint ipsam ea quasi. Tenetur cum, quo inventore, temporibus mollitia itaque corrupti nostrum consequuntur officiis voluptas unde hic, nesciunt quisquam voluptatum! Aperiam excepturi officia sit dolores eligendi dignissimos dolorem perferendis voluptatem porro repellat itaque est libero recusandae sed fugit, sint vitae commodi maiores. Omnis enim voluptatem aliquam quae quia cupiditate accusamus culpa modi. Nam, similique libero atque explicabo tempora illum quod, minus animi porro officia, doloremque fugiat ipsa autem voluptate commodi cum ipsum quia! Numquam eos culpa voluptatibus, ea veritatis asperiores dicta quod doloribus non accusantium nisi quidem quam eligendi commodi! Ut quod, fuga quasi voluptate nisi ex minima debitis dicta facilis possimus aliquid eligendi consequuntur assumenda natus velit, numquam quo! Quis, tempore deserunt. Molestias tempora voluptatibus quo. Maiores nemo adipisci omnis, similique ducimus saepe nisi laboriosam deleniti at totam, id eveniet minima? Obcaecati dolor perferendis sequi nihil exercitationem saepe temporibus aliquid, incidunt tempore ea earum sit, quibusdam voluptatibus, ab assumenda quam culpa? Harum nihil, exercitationem reprehenderit, eligendi neque earum ad unde eveniet officiis quibusdam quos! Ipsa deserunt obcaecati at! Ab dolore, beatae vero odio ipsa unde eveniet nostrum minus assumenda quos magni molestias. Quibusdam, doloremque quis. Quia culpa natus doloremque molestias dolores at reprehenderit sed mollitia voluptatibus, laborum perferendis soluta. Delectus, exercitationem. Porro unde eligendi laboriosam tempora quaerat. Hic voluptatem adipisci officiis cupiditate, error repudiandae, commodi consequuntur accusantium doloremque iure odit illo sed iste reprehenderit cumque ratione nam recusandae quisquam labore, magnam beatae similique assumenda atque! Soluta nesciunt quia id aut quibusdam, labore dolor officia fugiat. Corporis commodi corrupti voluptatibus rerum perferendis natus labore odio laborum rem quo neque dolorem provident, illo placeat ducimus in molestiae consequatur quasi ut quod ipsam, veniam laboriosam eveniet! Tenetur sit optio molestiae porro aliquid illum quam? Ad perspiciatis reiciendis, suscipit, nostrum autem explicabo doloremque maiores minus deserunt aliquam dolore velit non deleniti vero minima ipsum necessitatibus est possimus aliquid repellendus omnis? Accusantium corrupti laudantium quasi, ea rem repudiandae perspiciatis, nobis debitis inventore illum error ipsa repellat veritatis sequi accusamus maxime officia laboriosam doloribus ut illo ab! Pariatur totam quas autem? Veniam, earum voluptatum excepturi doloribus aspernatur in a eos. Facilis quam placeat nam labore qui magni obcaecati, distinctio commodi autem expedita, voluptate rem eius? Ipsum.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
          <Footer/>

        </div>
      </div>
    </>
  );
};

