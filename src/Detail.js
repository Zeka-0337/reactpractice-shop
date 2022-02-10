import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// styled-components
import styled from "styled-components";

// New CSS
import "./Detail.scss";

// CSS-Transition
import { CSSTransition } from "react-transition-group";

// styled- components
let 박스 = styled.div`
  padding: 20px;
`;

function Detail(props) {
  // useEffect 훅
  // 컴포넌트가 mount / update 되었을때 특정코드를 실행할 수 있음

  useEffect(() => {
    // setTimeout은 보통 변수에 많이 저장해서 사용
    // 나중에 타이머를 삭제하고 싶을 때...?
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);

    return function 어쩌구() {
      //unMount가 될 때 실행될 코드
      clearTimeout(타이머);
    };
  }, []);
  // alert라는 이름의 state가 변경이 될 때만 업데이트로 치고 실행해주세용

  // 방문 기록 등을 저장해놓는 object
  let history = useHistory();

  // URL의 parameter 값을 사용할 수 있음. useParams 훅
  let { id } = useParams();

  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  let [alert, alert변경] = useState(true);

  let [누른탭, 누른탭변경] = useState(0);

  let [스위치, 스위치변경] = useState(false);

  return (
    <div className="container">
      {alert === true ? (
        <div className="my-alert-red">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(찾은상품.id) + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5 red">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>

          <Info 재고={props.재고[id]}></Info>

          <button
            className="btn btn-danger"
            onClick={() => {
              var new재고 = [...props.재고];
              new재고[id] = new재고[id] - 1;
              props.재고변경(new재고);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              history.goBack();
              // 특정 경로로 이동시킬려면 : history.push('/');
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* in : 애니메이션 동작 스위치, timeout : 얼마에 걸쳐서 될지 */}
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0000</div>;
  } else if (props.누른탭 === 1) {
    return <div>1111</div>;
  } else if (props.누른탭 === 2) {
    return <div>2222</div>;
  }
}

function Info(props) {
  return <p> 재고 : {props.재고}</p>;
}

export default Detail;
