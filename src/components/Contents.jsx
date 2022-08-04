import React, { useState } from "react";
import styled from "styled-components";
import "./contents.css";
import { FaShoppingCart } from "react-icons/fa";



const CenterAlignSection = styled.section`
  width: 1024px;
  margin: 0 auto;
  padding: 70px 0 0 0;
  text-align: center;
`
const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 30px;
`
const More = styled.a`
  position: absolute;
  top: 20px; right: 0;
  font-size: 13px;
  color: #aaa;
  text-decoration: none;
  :hover {
    color: #222;
  }
`
const ItemsUl = styled.ul`
  padding: 0;
`
const ItemsLi = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`
const Items = styled.div`
  display: block;
  width: 241px;
  color: black;
  text-align: left;
  text-decoration: none;
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
`
const ItemImgBox = styled.div`
  width: 241px;
  height: 241px;
  text-align: left;
  overflow: hidden;
`
const ItemImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: all .3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  :hover {
    transform: scale(115%);
  }
`
const ItemDesc = styled.p`
  font-size: 12px;
  margin: 20px 20px 0 20px;
`
const ItemName = styled.h4`
  font-size: 16px;
  margin: 5px 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const ItemPriceContainer = styled.div`
  margin: 10px 20px 20px 20px;
`
const ItemPriceOrigin = styled.del`
  font-size: 14px;
  color: #aaa;
  margin-right: 10px;
`
const ItemPrice = styled.span`
  font-size: 16px;
  color: #ED5C22;
  font-weight: bold;
`
const ItemBtns = styled.div`
  display: flex;
  height: 40px;
`
const ItemBtn = styled.button`
  border: 1px solid #ddd;
  flex: 1;
  color: #aaa;
  cursor: pointer;
  :hover {
    background-color: #222;
    border: 1px solid #222;
    color: white;
  }
`


export default function Contents () {

  const bests = [
    {
      id: 'best-01',
      image: '/images/best_01.png',
      desc: '쫄깃하고 탱글탱글한 식감이 일품!',
      title: '캠핑어묵탕(순한맛)',
      priceOrigin: '8,900원',
      price: '7,100'
    },
    {
      id: 'best-02',
      image: '/images/best_02.png',
      desc: '간편하게 어묵탕을 만드는 모듬어묵',
      title: '어묵탕모듬어묵 플러스',
      price: '19,000'
    },
    {
      id: 'best-03',
      image: '/images/best_03.png',
      desc: '시장에서 맛보았던 추억의 어묵 모듬',
      title: '[삼진어묵 창립 69주년 행사상품]',
      priceOrigin: '23,500원',
      price: '19,900'
    },
    {
      id: 'best-04',
      image: '/images/best_04.png',
      desc: '인기 고급제품으로 구성된 선물세트',
      title: '1953세트 2호',
      price: '36,000'
    },
    {
      id: 'best-05',
      image: '/images/best_05.png',
      desc: '팔도비빔장으로 어묵볶음을 간편하게',
      title: '딱한끼 볶음요리용(팔도)',
      price: '4,980'
    },
    {
      id: 'best-06',
      image: '/images/best_06.png',
      desc: '가정에서 소량으로 즐기는 꼬치어묵',
      title: '[냉동]딱한끼 사각꼬치',
      priceOrigin: '6,990원',
      price: '5,500'
    },
    {
      id: 'best-07',
      image: '/images/best_07.png',
      desc: '어묵 고유의 탱글하고 담백한 맛',
      title: '[딱한끼 어묵탕(순한맛)]',
      price: '4,000'
    },
    {
      id: 'best-08',
      image: '/images/best_08.png',
      desc: '간식어묵 6종을 한번에 즐길 제품',
      title: '어부의바 6종 세트',
      priceOrigin: '13,000원',
      price: '9,900'
    }
  ]

  const recommends = [
    {
      id: 'recommend_01',
      image: '/images/recommend_01.jpg',
      desc: '팔도x상진 신제품 기념 이벤트',
      title: '팔도 딱한끼 볶음어묵 2종 세트 묶음',
      priceOrigin: '8,900원',
      price: '8,900'
    },
    {
      id: 'recommend_02',
      image: '/images/recommend_02.png',
      desc: '탱글한 식감이 일품인 모듬어묵',
      title: '특선 모듬어묵',
      price: '16,000'
    },
    {
      id: 'recommend_03',
      image: '/images/recommend_03.png',
      desc: '팔도x상진 콜라보 사각어묵',
      title: '딱한끼 볶음사각(팔도)',
      price: '3,980'
    },
    {
      id: 'recommend_04',
      image: '/images/recommend_04.png',
      desc: '고소하고 담백한 사각어묵',
      title: '담백한 사각어묵',
      price: '2,700'
    },
    {
      id: 'recommend_05',
      image: '/images/recommend_05.jpg',
      desc: '잘게 썬 당면이 가득 담겨 탱글한 어묵',
      title: '삼각당면(진공)',
      price: '4,980'
    },
    {
      id: 'recommend_06',
      image: '/images/recommend_06.jpg',
      desc: '오징어를 듬뿍 넣어 감칠맛이 좋은 어묵',
      title: '오징어땡소(진공)',
      price: '3,480'
    },
    {
      id: 'recommend_07',
      image: '/images/recommend_07.png',
      desc: '매콤한 김치와 어묵이 어우러진 볶음밥',
      title: '[냉동]김치어묵볶음밥',
      priceOrigin: '9,980원',
      price: '7,900'
    },
    {
      id: 'recommend_08',
      image: '/images/recommend_08.png',
      desc: '신선한 새우가 가득 들어있는 어묵볶음',
      title: '[냉동]새우어묵볶음',
      priceOrigin: '10,980원',
      price: '8,700'
    }
  ]

  const [count, setCount] = useState([0,0,0,0,0,0,0,0])


  return (
    <>
      <section className="visual-main">
        <img src="/images/visual_main_01.jpg" alt="visual_main_01" />
        {/* <img src={process.env.PUBLIC_URL+"/images/visual_main_01.jpg"} alt="visual_main_01" /> */}
      </section>

      <CenterAlignSection>
        <TitleContainer>
          <h2 className="best__title">삼진어묵 베스트</h2>
          <More href="#!">더보기 &gt;</More>
        </TitleContainer>
        <ItemsUl>
          <ItemsLi>
            {
              bests.map( (best, i) => {
                return (
                  <Items href="#!" key={best.id}>
                    <ItemImgBox>
                      <ItemImg src={best.image} alt="best_image_01" />
                    </ItemImgBox>
                    <ItemDesc>{best.desc}</ItemDesc>
                    <ItemName>{best.title}</ItemName>
                    <ItemPriceContainer>
                      <span>{best.priceOrigin?<ItemPriceOrigin>{best.priceOrigin}</ItemPriceOrigin>:null}</span>
                      <ItemPrice><strong>{best.price}</strong>원</ItemPrice>
                    </ItemPriceContainer>
                    <ItemBtns>
                      <ItemBtn onClick={() => {
                        let countCopy = [...count]
                        countCopy[i] += 1
                        setCount(countCopy)
                      }}>❤ 찜하기{count[i]}</ItemBtn>
                      <ItemBtn><FaShoppingCart /> 장바구니</ItemBtn>
                    </ItemBtns>
                  </Items>
                )
              })
            }
          </ItemsLi>
        </ItemsUl>
      </CenterAlignSection>

      <CenterAlignSection>
        <TitleContainer>
          <h2 className="best__title">삼진어묵 베스트</h2>
          <More href="#!">더보기 &gt;</More>
        </TitleContainer>
        <ItemsUl>
          <ItemsLi>
            {
              recommends.map( (recommend, i) => {
                return (
                  <Items href="#!" key={recommend.id}>
                    <ItemImgBox>
                      <ItemImg src={recommend.image} alt="recommend_image_01" />
                    </ItemImgBox>
                    <ItemDesc>{recommend.desc}</ItemDesc>
                    <ItemName>{recommend.title}</ItemName>
                    <ItemPriceContainer>
                    <span>{recommend.priceOrigin?<ItemPriceOrigin>{recommend.priceOrigin}</ItemPriceOrigin>:null}</span>
                      <ItemPrice><strong>{recommend.price}</strong>원</ItemPrice>
                    </ItemPriceContainer>
                    <ItemBtns>
                      <ItemBtn onClick={() => {
                        let countCopy = [...count]
                        countCopy[i] += 1
                        setCount(countCopy)
                      }}>❤ 찜하기{count[i]}</ItemBtn>
                      <ItemBtn>🛒 장바구니</ItemBtn>
                    </ItemBtns>
                  </Items>
                )
              })
            }
          </ItemsLi>
        </ItemsUl>
      </CenterAlignSection>

    </>
  )
}