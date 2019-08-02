// img import
import {
  anseongtangmyeon,
  buldalgbokk_eummyeon,
  chamkkaelamyeon,
  dosilag,
  ganjjamppong,
  jinjjamppong,
  jinlamyeon,
  jjajjaloni,
  jjapageti,
  kkokkomyeon,
  neoguli,
  paldobibimmyeon,
  sam_yanglamyeon,
  seunaegmyeon,
  sinlamyeon,
  wangttukkeong
} from "../images/index";

// 액션 정의
const TOGGLE_CHECK = "check/TOGGLE_CHECK";

// 액션 생성함수 정의
export const toggleCheck = name => ({ type: TOGGLE_CHECK, payload: name });

// 초기상태 설정
const initialState = {
  item: [
    { name: "간짬뽕", img: ganjjamppong, price: 4400, checked: false },
    { name: "꼬꼬면", img: kkokkomyeon, price: 5500, checked: false },
    { name: "너구리", img: neoguli, price: 6600, checked: false },
    { name: "도시락", img: dosilag, price: 4400, checked: false },
    {
      name: "불닭볶음면",
      img: buldalgbokk_eummyeon,
      price: 5500,
      checked: false
    },
    { name: "삼양라면", img: sam_yanglamyeon, price: 6600, checked: false },
    { name: "스낵면", img: seunaegmyeon, price: 4400, checked: false },
    { name: "신라면", img: sinlamyeon, price: 5500, checked: false },
    { name: "안성탕면", img: anseongtangmyeon, price: 6600, checked: false },
    { name: "왕뚜껑", img: wangttukkeong, price: 4400, checked: false },
    { name: "진라면", img: jinlamyeon, price: 5500, checked: false },
    { name: "진짬뽕", img: jinjjamppong, price: 6600, checked: false },
    { name: "짜짜로니", img: jjajjaloni, price: 4400, checked: false },
    { name: "짜파게티", img: jjapageti, price: 5500, checked: false },
    { name: "참깨라면", img: chamkkaelamyeon, price: 6600, checked: false },
    { name: "팔도비빔면", img: paldobibimmyeon, price: 4400, checked: false }
  ],
  check: {
    checkCount: 0,
    checkPrice: 0
  }
};

const itemChoice = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECK:
      return {
        ...state,
        item: state.item.map(product => {
          if (product.name === action.payload) {
            product.checked = !product.checked;
            if (product.checked) {
              state.check.checkCount += 1;
              state.check.checkPrice += product.price;
            } else {
              state.check.checkCount -= 1;
              state.check.checkPrice -= product.price;
            }
          }
          return null;
        })
      };
    default:
      return state;
  }
};

export default itemChoice;
