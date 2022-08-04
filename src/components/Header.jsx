import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
// rfc 치면 자동 완성 : 아래와 같이 만들어준다. 되는 방법 찾아보자.
// export default function Header () {
//   return (
//     <div>Header</div>
//   )
// }


const Gnb = styled.nav`
  background-color: #231916;
  height: 38px;
  color: white;
  font-size: 13px;
`
const GnbUl = styled.ul`
  width: 1024px;
  margin: 0 auto;
  text-align: right;
  box-sizing: border-box;
  padding-left: 0;
`
const GnbLi = styled.li`
  display: inline-block;
  line-height: 38px;
  margin-left: 15px;
  &:first-child {margin-left: 0;}
`
const HeaderMid = styled.div`
  width: 1024px;
  height: 125px;
  margin: 0 auto;
  text-align: center;
  padding-top: 22px;
  box-sizing: border-box;
`
const Lnb = styled.nav`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 15px;
`
const LnbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height: 54px;
  margin: 0 auto;
`
const AllCategory = styled.div`
  line-height: 54px;
  font-weight: bold;
  cursor: pointer;
`
const LnbUl = styled.ul`
  box-sizing: border-box;
  padding: 0 0;
`
const LnbLi = styled.li`
  display: inline-block;
  margin-left: 25px;
  font-weight: bold;
  &:first-child {
    margin-left: 0;
  }
`
const Search = styled.input`
  outline: none;
  width: 236px;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: #eee;
  margin: 7px 0;
  padding: 0 20px;
  background: url('/images/search.png') no-repeat center right/30px;
`



export default function Header () {

  const liGnbs = [
    {id: 'gnb-01', gnb: '로그인'},
    {id: 'gnb-02', gnb: '회원가입'},
    {id: 'gnb-03', gnb: '장바구니'}
  ]
  const liLnbs = [
    {id: 'lnb-01', lnb: '베스트상품'},
    {id: 'lnb-02', lnb: '신상품'},
    {id: 'lnb-03', lnb: '기획전'},
    {id: 'lnb-04', lnb: '이벤트/혜택'},
    {id: 'lnb-05', lnb: '금복레시피'},
    {id: 'lnb-06', lnb: '레시피공모전'}
  ]

  return (
    <header className="header">
      <Gnb>
        <GnbUl>
          {// 표현식을 넣을 때는 중괄호 쓰기
            liGnbs.map( (liGnb) => {
              return (
                <GnbLi key={liGnbs.id}>{liGnb.gnb}</GnbLi>
              )
            })
          }
        </GnbUl>
      </Gnb>
      <HeaderMid>
        <img src="/images/logo.jpg" alt="logo" style={{ display: 'block', width: '186px', height: 'auto', margin: '0 auto'}} />
      </HeaderMid>
      <Lnb>
        <LnbContainer>
          <AllCategory><AiOutlineMenu /> 전체카테고리</AllCategory>
          <LnbUl>
            {
              liLnbs.map( (liLnb) => {
                return (
                  <LnbLi key={liLnbs.id}>{liLnb.lnb}</LnbLi>
                )
              })
            }
          </LnbUl>
          <Search></Search>
        </LnbContainer>
      </Lnb>
    </header>
  )
}