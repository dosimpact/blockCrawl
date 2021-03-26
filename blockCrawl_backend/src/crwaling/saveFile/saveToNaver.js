import {
  checkFolder,
  makeNewFolder,
  saveToCSV,
  saveWithImageURL,
} from "./saveUtils";

/* @TODO CheckValid */
const NAVER_HEADER = [
  "상품상태",
  "카테고리ID",
  "상품명",
  "판매가",
  "재고수량",
  "A/S 안내내용",
  "A/S 전화번호",
  "대표 이미지 파일명",
  "추가 이미지 파일명",
  "상세 이미지",
  "판매자",
  "상품코드",
  "판매자",
  "바코드",
  "제조사",
  "브랜드",
  "제조일자",
  "유효일자",
  "부가세",
  "미성년자",
  "구매",
  "구매평",
  "노출여부",
  "원산지",
  "코드",
  "수입사",
  "복수원산지 여부",
  "원산지",
  "직접입력",
  "배송방법",
  "배송비",
  "유형",
  "기본배송비",
  "배송비",
  "결제방식",
  "조건부무료-상품판매가합계",
  "수량별부과-수량",
  "반품배송비",
  "교환배송비",
  "지역별 차등배송비 정보",
  "별도설치비",
  "판매자",
  "특이사항",
  "즉시할인",
  "값",
  "즉시할인",
  "단위",
  "복수구매할인 조건값",
  "복수구매할인",
  "조건 단위",
  "복수구매할인 값",
  "복수구매할인 단위",
  "상품구매시 포인트 지급 값",
  "상품구매시 포인트 지급 단위",
  "구매평 작성시 지급 포인트",
  "프리미엄 구매평 작성시 지급 포인트",
  "스토어찜회원 추가 지급 포인트",
  "무이자 할부 개월",
  "사은품",
  "옵션형태",
  "옵션명",
  "옵션값",
  "옵션가",
  "옵션 재고수량",
  "추가상품명",
  "추가상품값",
  "추가상품가",
  "추가상품",
  "재고수량",
  "상품정보제공고시 품명",
  "상품정보제공고시 모델명",
  "상품정보제공고시",
  "인증허가사항",
  "상품정보제공고시 제조자",
  "스토어찜회원",
  "전용여부",
];

export const saveToNaverFrom = async (headerList, contentList) => {
  const _headerList = [
    "카테고리ID",
    "상품명",
    "판매가",
    "대표 이미지 파일명",
    "대표 이미지 URL",
    "추가 이미지 파일명",
    "추가 이미지 URL",
    "상세 이미지",
    "상세 이미지 URL",
    "판매자 상품코드",
    "옵션명",
    "옵션값",
  ];

  const _contentList = [
    ["1a", "2a", "3a"],
    ["1b", "2b", "3b"],
    ["1c", "2c", "3c"],
  ];
  _contentList.splice(0, 0, _headerList);
  console.log("SAVE > TO CSV", _contentList);
  const str = stringify(_contentList);
  await checkFolder("sample");
  fs.writeFile(`output/sample/${Date.now()}.csv`, str, (e) => {
    if (e) {
      return false;
    }
    console.log("✔ save CSV File");
  });
  return true;
};

export const readCSVFirstHeader = async () => {};
