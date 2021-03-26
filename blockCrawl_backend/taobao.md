# API Example

- STEP1.
- 상품 카테고리를 shop에서 크롤링 합니다.

```js
POST:  http://localhost:4000/api/crawl/taobao/taobaoShopCategory
REQUEST_BODY:
{
    "url": "https://designerclub.taobao.com/search.htm?spm=a1z10.1-c-s.w5003-22438209067.1.1d143958XpFpWF&search=y&scene=taobao_shop"
}
RES:

{
    "result": {
        "url": "https://designerclub.taobao.com/search.htm?spm=a1z10.1-c-s.w5003-22438209067.1.1d143958XpFpWF&search=y&scene=taobao_shop",
        "catagoryResult": [
            {
                "innerText": "d+ 自制款",
                "href": "https://designerclub.taobao.com/category-1110466958.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=d%2B+%D7%D4%D6%C6%BF%EE#bd"
            },
            {
                "innerText": "设计工作室 订单款",
                "href": "https://designerclub.taobao.com/category-1338288009.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C9%E8%BC%C6%B9%A4%D7%F7%CA%D2+%B6%A9%B5%A5%BF%EE#bd"
            },
            {
                "innerText": "复古新篇",
                "href": "https://designerclub.taobao.com/category-1402989176.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%B8%B4%B9%C5%D0%C2%C6%AA#bd"
            },
            {
                "innerText": "街头型录",
                "href": "https://designerclub.taobao.com/category-1402989177.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BD%D6%CD%B7%D0%CD%C2%BC#bd"
            },
            {
                "innerText": "极简主义",
                "href": "https://designerclub.taobao.com/category-1402989178.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BC%AB%BC%F2%D6%F7%D2%E5#bd"
            },
            {
                "innerText": "摩登概念",
                "href": "https://designerclub.taobao.com/category-1402989179.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C4%A6%B5%C7%B8%C5%C4%EE#bd"
            },
            {
                "innerText": "少女臆想",
                "href": "https://designerclub.taobao.com/category-1402989180.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C9%D9%C5%AE%D2%DC%CF%EB#bd"
            },
            {
                "innerText": "独立宣言",
                "href": "https://designerclub.taobao.com/category-1402989181.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%B6%C0%C1%A2%D0%FB%D1%D4#bd"
            },
            {
                "innerText": "日常装置",
                "href": "https://designerclub.taobao.com/category-1402989182.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C8%D5%B3%A3%D7%B0%D6%C3#bd"
            },
            {
                "innerText": "恒久丹宁",
                "href": "https://designerclub.taobao.com/category-1402989183.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BA%E3%BE%C3%B5%A4%C4%FE#bd"
            },
            {
                "innerText": "2020 / 09.21",
                "href": "https://designerclub.taobao.com/category-1554937827.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.21#bd"
            },
            {
                "innerText": "2020 / 09.15",
                "href": "https://designerclub.taobao.com/category-1554120227.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.15#bd"
            },
            {
                "innerText": "2020 / 09.09",
                "href": "https://designerclub.taobao.com/category-1551577772.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.09#bd"
            },
            {
                "innerText": "2020 / 08.31",
                "href": "https://designerclub.taobao.com/category-1551577773.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.31#bd"
            },
            {
                "innerText": "2020 / 08.25",
                "href": "https://designerclub.taobao.com/category-1548732440.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.25#bd"
            },
            {
                "innerText": "2020 / 08.18",
                "href": "https://designerclub.taobao.com/category-1547916265.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.18#bd"
            },
            {
                "innerText": "2020 / 08.16",
                "href": "https://designerclub.taobao.com/category-1547916266.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.16#bd"
            },
            {
                "innerText": "2020 / 08.10",
                "href": "https://designerclub.taobao.com/category-1545711484.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.10#bd"
            },
            {
                "innerText": "2020 / 08.04",
                "href": "https://designerclub.taobao.com/category-1545711480.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.04#bd"
            },
            {
                "innerText": "2020 / 08.02",
                "href": "https://designerclub.taobao.com/category-1545713310.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.02#bd"
            },
            {
                "innerText": "2020 / 07.31",
                "href": "https://designerclub.taobao.com/category-1543127434.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.31#bd"
            },
            {
                "innerText": "2020 / 07.28",
                "href": "https://designerclub.taobao.com/category-1543127435.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.28#bd"
            },
            {
                "innerText": "2020 / 07.24",
                "href": "https://designerclub.taobao.com/category-1542773785.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.24#bd"
            },
            {
                "innerText": "2020 / 07.21",
                "href": "https://designerclub.taobao.com/category-1542205569.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.21#bd"
            },
            {
                "innerText": "2020 / 07.19",
                "href": "https://designerclub.taobao.com/category-1542205570.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.19#bd"
            },
            {
                "innerText": "2020 / 07.13",
                "href": "https://designerclub.taobao.com/category-1539682803.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.13#bd"
            },
            {
                "innerText": "2020 / 07.07",
                "href": "https://designerclub.taobao.com/category-1539682804.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.07#bd"
            },
            {
                "innerText": "2020 / 07.05",
                "href": "https://designerclub.taobao.com/category-1539682805.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.05#bd"
            },
            {
                "innerText": "2020 / 07.03",
                "href": "https://designerclub.taobao.com/category-1539682806.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.03#bd"
            },
            {
                "innerText": "2020 / 06.30",
                "href": "https://designerclub.taobao.com/category-1537922032.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.30#bd"
            },
            {
                "innerText": "2020 / 06.28",
                "href": "https://designerclub.taobao.com/category-1537918388.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.28#bd"
            },
            {
                "innerText": "2020 / 06.26",
                "href": "https://designerclub.taobao.com/category-1537920931.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.26#bd"
            },
            {
                "innerText": "2020 / 06.23",
                "href": "https://designerclub.taobao.com/category-1537843481.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.23#bd"
            },
            {
                "innerText": "2020 / 06.20",
                "href": "https://designerclub.taobao.com/category-1537028325.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.20#bd"
            },
            {
                "innerText": "2020 / 06.16",
                "href": "https://designerclub.taobao.com/category-1535332117.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.16#bd"
            },
            {
                "innerText": "2020 / 06.08",
                "href": "https://designerclub.taobao.com/category-1533859633.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.08#bd"
            },
            {
                "innerText": "2020 / 06.01",
                "href": "https://designerclub.taobao.com/category-1532782421.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.01#bd"
            },
            {
                "innerText": "2020 / 05.26",
                "href": "https://designerclub.taobao.com/category-1531615859.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.26#bd"
            },
            {
                "innerText": "2020 / 05.24",
                "href": "https://designerclub.taobao.com/category-1530807913.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.24#bd"
            },
            {
                "innerText": "2020 / 05.22",
                "href": "https://designerclub.taobao.com/category-1530804391.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.22#bd"
            },
            {
                "innerText": "2020 / 05.20",
                "href": "https://designerclub.taobao.com/category-1530804392.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.20#bd"
            },
            {
                "innerText": "2020 / 05.18",
                "href": "https://designerclub.taobao.com/category-1530804393.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.18#bd"
            },
            {
                "innerText": "2020 / 05.11",
                "href": "https://designerclub.taobao.com/category-1527889169.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.11#bd"
            },
            {
                "innerText": "2020 / 05.05",
                "href": "https://designerclub.taobao.com/category-1524570594.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.05#bd"
            },
            {
                "innerText": "2020 / 04.28",
                "href": "https://designerclub.taobao.com/category-1522912525.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.28#bd"
            },
            {
                "innerText": "2020 / 04.26",
                "href": "https://designerclub.taobao.com/category-1522912526.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.26#bd"
            },
            {
                "innerText": "2020 / 04.24",
                "href": "https://designerclub.taobao.com/category-1522912527.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.24#bd"
            },
            {
                "innerText": "2020 / 04.21",
                "href": "https://designerclub.taobao.com/category-1522184682.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.21#bd"
            },
            {
                "innerText": "2020 / 04.15",
                "href": "https://designerclub.taobao.com/category-1518008414.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.15#bd"
            },
            {
                "innerText": "2020 / 04.07",
                "href": "https://designerclub.taobao.com/category-1519002965.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.07#bd"
            },
            {
                "innerText": "2020 / 04.03",
                "href": "https://designerclub.taobao.com/category-1518008415.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.03#bd"
            },
            {
                "innerText": "2019 \\ NEW",
                "href": "https://designerclub.taobao.com/category-1291555411.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2019+%5C+NEW#bd"
            },
            {
                "innerText": "衬衫/Shirt",
                "href": "https://designerclub.taobao.com/category-687654774.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B3%C4%C9%C0%2FShirt#bd"
            },
            {
                "innerText": "T恤/T-shirt",
                "href": "https://designerclub.taobao.com/category-687654772.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=T%D0%F4%2FT-shirt#bd"
            },
            {
                "innerText": "卫衣/Hoodie",
                "href": "https://designerclub.taobao.com/category-790773611.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CE%C0%D2%C2%2FHoodie#bd"
            },
            {
                "innerText": "打底衫/背心/吊带/文胸",
                "href": "https://designerclub.taobao.com/category-808158905.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B4%F2%B5%D7%C9%C0%2F%B1%B3%D0%C4%2F%B5%F5%B4%F8%2F%CE%C4%D0%D8#bd"
            },
            {
                "innerText": "皮衣",
                "href": "https://designerclub.taobao.com/category-1364449620.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C6%A4%D2%C2#bd"
            },
            {
                "innerText": "外套/Coat",
                "href": "https://designerclub.taobao.com/category-687654773.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CD%E2%CC%D7%2FCoat#bd"
            },
            {
                "innerText": "西装",
                "href": "https://designerclub.taobao.com/category-1473651706.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CE%F7%D7%B0#bd"
            },
            {
                "innerText": "风衣/Windbreaker",
                "href": "https://designerclub.taobao.com/category-1354225166.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B7%E7%D2%C2%2FWindbreaker#bd"
            },
            {
                "innerText": "针织衫/Knitwear",
                "href": "https://designerclub.taobao.com/category-1253923760.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D5%EB%D6%AF%C9%C0%2FKnitwear#bd"
            },
            {
                "innerText": "蕾丝衫/雪纺衫",
                "href": "https://designerclub.taobao.com/category-763801749.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C0%D9%CB%BF%C9%C0%2F%D1%A9%B7%C4%C9%C0#bd"
            },
            {
                "innerText": "马甲/Vest",
                "href": "https://designerclub.taobao.com/category-808158906.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C2%ED%BC%D7%2FVest#bd"
            },
            {
                "innerText": "套装/Suit",
                "href": "https://designerclub.taobao.com/category-763801748.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CC%D7%D7%B0%2FSuit#bd"
            },
            {
                "innerText": "皮毛一体/Fur body",
                "href": "https://designerclub.taobao.com/category-1354226907.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C6%A4%C3%AB%D2%BB%CC%E5%2FFur+body#bd"
            },
            {
                "innerText": "毛呢外套/Woolen coat",
                "href": "https://designerclub.taobao.com/category-1354226906.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%AB%C4%D8%CD%E2%CC%D7%2FWoolen+coat#bd"
            },
            {
                "innerText": "羽绒服/Jacket",
                "href": "https://designerclub.taobao.com/category-1354226908.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D3%F0%C8%DE%B7%FE%2FJacket#bd"
            },
            {
                "innerText": "棉衣/Cotton",
                "href": "https://designerclub.taobao.com/category-1354226909.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%DE%D2%C2%2FCotton#bd"
            },
            {
                "innerText": "羊羔毛/派克服",
                "href": "https://designerclub.taobao.com/category-1495873379.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D1%F2%B8%E1%C3%AB%2F%C5%C9%BF%CB%B7%FE#bd"
            },
            {
                "innerText": "毛衣/Sweater",
                "href": "https://designerclub.taobao.com/category-790773612.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%AB%D2%C2%2FSweater#bd"
            },
            {
                "innerText": "短裤/Shorts",
                "href": "https://designerclub.taobao.com/category-687654777.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%B6%CC%BF%E3%2FShorts#bd"
            },
            {
                "innerText": "牛仔裤",
                "href": "https://designerclub.taobao.com/category-687654776.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%C5%A3%D7%D0%BF%E3#bd"
            },
            {
                "innerText": "连体裤/Jumpsuit",
                "href": "https://designerclub.taobao.com/category-1253923761.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%C1%AC%CC%E5%BF%E3%2FJumpsuit#bd"
            },
            {
                "innerText": "打底裤/Render",
                "href": "https://designerclub.taobao.com/category-808978386.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%B4%F2%B5%D7%BF%E3%2FRender#bd"
            },
            {
                "innerText": "休闲裤／西装裤",
                "href": "https://designerclub.taobao.com/category-1366463551.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%D0%DD%CF%D0%BF%E3%A3%AF%CE%F7%D7%B0%BF%E3#bd"
            },
            {
                "innerText": "短裙/Short Skirt",
                "href": "https://designerclub.taobao.com/category-687654778.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%B6%CC%C8%B9%2FShort+Skirt#bd"
            },
            {
                "innerText": "半身裙/Skirts",
                "href": "https://designerclub.taobao.com/category-763801750.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%B0%EB%C9%ED%C8%B9%2FSkirts#bd"
            },
            {
                "innerText": "连衣裙/The Dress",
                "href": "https://designerclub.taobao.com/category-687654779.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%C1%AC%D2%C2%C8%B9%2FThe+Dress#bd"
            },
            {
                "innerText": "文胸/Bras",
                "href": "https://designerclub.taobao.com/category-1500989282.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CE%C4%D0%D8%2FBras#bd"
            },
            {
                "innerText": "围巾/Scarf",
                "href": "https://designerclub.taobao.com/category-808978387.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CE%A7%BD%ED%2FScarf#bd"
            },
            {
                "innerText": "眼镜/Glasses",
                "href": "https://designerclub.taobao.com/category-883450364.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%D1%DB%BE%B5%2FGlasses#bd"
            },
            {
                "innerText": "袜子/Socks",
                "href": "https://designerclub.taobao.com/category-782395170.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CD%E0%D7%D3%2FSocks#bd"
            },
            {
                "innerText": "方巾/Kerchief",
                "href": "https://designerclub.taobao.com/category-1370106860.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%B7%BD%BD%ED%2FKerchief#bd"
            },
            {
                "innerText": "包包/Bag",
                "href": "https://designerclub.taobao.com/category-699463585.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%B0%FC%B0%FC%2FBag#bd"
            },
            {
                "innerText": "50元以下小配饰",
                "href": "https://designerclub.taobao.com/category-1500992215.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=50%D4%AA%D2%D4%CF%C2%D0%A1%C5%E4%CA%CE#bd"
            },
            {
                "innerText": "圣诞款",
                "href": "https://designerclub.taobao.com/category-1502815314.htm?search=y&parentCatId=1502815313&parentCatName=%CA%A5%B5%AE%D7%A8%C7%F8&catName=%CA%A5%B5%AE%BF%EE#bd"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1110466958.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=d%2B+%D7%D4%D6%C6%BF%EE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1338288009.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C9%E8%BC%C6%B9%A4%D7%F7%CA%D2+%B6%A9%B5%A5%BF%EE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989176.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%B8%B4%B9%C5%D0%C2%C6%AA"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989177.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BD%D6%CD%B7%D0%CD%C2%BC"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989178.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BC%AB%BC%F2%D6%F7%D2%E5"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989179.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C4%A6%B5%C7%B8%C5%C4%EE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989180.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C9%D9%C5%AE%D2%DC%CF%EB"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989181.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%B6%C0%C1%A2%D0%FB%D1%D4"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989182.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%C8%D5%B3%A3%D7%B0%D6%C3"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1402989183.htm?search=y&parentCatId=687648884&parentCatName=%B5%EA%B3%A4%CD%C6%BC%F6&catName=%BA%E3%BE%C3%B5%A4%C4%FE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1554937827.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.21"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1554120227.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.15"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1551577772.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+09.09"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1551577773.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.31"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1548732440.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.25"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1547916265.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.18"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1547916266.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.16"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1545711484.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.10"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1545711480.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.04"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1545713310.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+08.02"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1543127434.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.31"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1543127435.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.28"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1542773785.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.24"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1542205569.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.21"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1542205570.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.19"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1539682803.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.13"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1539682804.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.07"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1539682805.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.05"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1539682806.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+07.03"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1537922032.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.30"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1537918388.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.28"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1537920931.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.26"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1537843481.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.23"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1537028325.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.20"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1535332117.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.16"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1533859633.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.08"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1532782421.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+06.01"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1531615859.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.26"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1530807913.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.24"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1530804391.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.22"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1530804392.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.20"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1530804393.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.18"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1527889169.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.11"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1524570594.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+05.05"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1522912525.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.28"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1522912526.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.26"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1522912527.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.24"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1522184682.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.21"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1518008414.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.15"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1519002965.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.07"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1518008415.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2020+%2F+04.03"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1291555411.htm?search=y&parentCatId=687648887&parentCatName=NEW&catName=2019+%5C+NEW"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654774.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B3%C4%C9%C0%2FShirt"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654772.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=T%D0%F4%2FT-shirt"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-790773611.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CE%C0%D2%C2%2FHoodie"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-808158905.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B4%F2%B5%D7%C9%C0%2F%B1%B3%D0%C4%2F%B5%F5%B4%F8%2F%CE%C4%D0%D8"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1364449620.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C6%A4%D2%C2"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654773.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CD%E2%CC%D7%2FCoat"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1473651706.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CE%F7%D7%B0"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1354225166.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%B7%E7%D2%C2%2FWindbreaker"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1253923760.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D5%EB%D6%AF%C9%C0%2FKnitwear"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-763801749.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C0%D9%CB%BF%C9%C0%2F%D1%A9%B7%C4%C9%C0"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-808158906.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C2%ED%BC%D7%2FVest"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-763801748.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%CC%D7%D7%B0%2FSuit"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1354226907.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C6%A4%C3%AB%D2%BB%CC%E5%2FFur+body"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1354226906.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%AB%C4%D8%CD%E2%CC%D7%2FWoolen+coat"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1354226908.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D3%F0%C8%DE%B7%FE%2FJacket"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1354226909.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%DE%D2%C2%2FCotton"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1495873379.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%D1%F2%B8%E1%C3%AB%2F%C5%C9%BF%CB%B7%FE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-790773612.htm?search=y&parentCatId=617710072&parentCatName=Tops&catName=%C3%AB%D2%C2%2FSweater"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654777.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%B6%CC%BF%E3%2FShorts"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654776.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%C5%A3%D7%D0%BF%E3"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1253923761.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%C1%AC%CC%E5%BF%E3%2FJumpsuit"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-808978386.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%B4%F2%B5%D7%BF%E3%2FRender"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1366463551.htm?search=y&parentCatId=620162064&parentCatName=Bottoms&catName=%D0%DD%CF%D0%BF%E3%A3%AF%CE%F7%D7%B0%BF%E3"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654778.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%B6%CC%C8%B9%2FShort+Skirt"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-763801750.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%B0%EB%C9%ED%C8%B9%2FSkirts"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-687654779.htm?search=y&parentCatId=617710079&parentCatName=Dresses&catName=%C1%AC%D2%C2%C8%B9%2FThe+Dress"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1500989282.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CE%C4%D0%D8%2FBras"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-808978387.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CE%A7%BD%ED%2FScarf"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-883450364.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%D1%DB%BE%B5%2FGlasses"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-782395170.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%CD%E0%D7%D3%2FSocks"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1370106860.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%B7%BD%BD%ED%2FKerchief"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-699463585.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=%B0%FC%B0%FC%2FBag"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1500992215.htm?search=y&parentCatId=699463584&parentCatName=Accessories&catName=50%D4%AA%D2%D4%CF%C2%D0%A1%C5%E4%CA%CE"
            },
            {
                "innerText": "",
                "href": "https://designerclub.taobao.com/category-1502815314.htm?search=y&parentCatId=1502815313&parentCatName=%CA%A5%B5%AE%D7%A8%C7%F8&catName=%CA%A5%B5%AE%BF%EE"
            }
        ]
    },
    "success": true
}
```

- STEP2.
- 상품 리스트를 페이지에서 크롤링 합니다.

```js
POST : http://localhost:4000/api/crawl/taobao/taobaoList

REQUEST_BODY:
{
    "url": "https://designerclub.taobao.com/category-687648887.htm?spm=a1z10.5-c-s.w4002-17136297524.92.1d73f85cEVQ0UW&_ksTS=1599810800385_212&callback=jsonp213&mid=w-17136297524-0&wid=17136297524&path=%2Fcategory-687648887.htm&search=y&catName=NEW&catId=687648887&pageNo=1#anchor",
    "itemtag":"a.item-name.J_TGoldData"
}

RES :
{
    "result": {
        "url": "https://designerclub.taobao.com/category-687648887.htm?spm=a1z10.5-c-s.w4002-17136297524.92.1d73f85cEVQ0UW&_ksTS=1599810800385_212&callback=jsonp213&mid=w-17136297524-0&wid=17136297524&path=%2Fcategory-687648887.htm&search=y&catName=NEW&catId=687648887&pageNo=1#anchor",
        "itemtag": "a.item-name.J_TGoldData",
        "itemtagResult": [
            {
                "innerText": "Designer Plus 束脚工装裤子女2020秋装宽松bf显瘦高腰cargo长裤",
                "href": "https://item.taobao.com/item.htm?id=601988445577"
            },
            {
                "innerText": "Designer Plus 黑色法式小西装外套2020新款女复古英伦风收腰西服",
                "href": "https://item.taobao.com/item.htm?id=599671596479"
            },
            {
                "innerText": "【9折狂欢价】绿色风衣女2020秋季新款中长款双排扣气质流行外套",
                "href": "https://item.taobao.com/item.htm?id=625110567253"
            },
            {
                "innerText": "Designer Plus 秋装阔腿裤套装女披肩衬衫洋气高腰休闲裤子三件套",
                "href": "https://item.taobao.com/item.htm?id=624459190489"
            },
            {
                "innerText": "Designer Plus 设计感高腰卷边牛仔直筒裤女2020秋宽松显瘦阔腿裤",
                "href": "https://item.taobao.com/item.htm?id=625110231825"
            },
            {
                "innerText": "Designer Plus 春秋韩版宽松皮夹克oversize机车PU皮BF皮衣女外套",
                "href": "https://item.taobao.com/item.htm?id=547284152812"
            },
            {
                "innerText": "Designer Plus 牛仔裤女秋2020新款宽松百搭高腰显瘦九分萝卜裤子",
                "href": "https://item.taobao.com/item.htm?id=578098927335"
            },
            {
                "innerText": "Designer Plus 格子西装外套女秋法式小众洋气复古修身西服送腰带",
                "href": "https://item.taobao.com/item.htm?id=610191904039"
            },
            {
                "innerText": "Designer Plus2020春秋坑条小吊带背心+印花缎面衬衫时尚套装女潮",
                "href": "https://item.taobao.com/item.htm?id=602676014896"
            },
            {
                "innerText": "Designer Plus撞色拼接牛仔春秋外套女2020新款短款百搭夹克潮ins",
                "href": "https://item.taobao.com/item.htm?id=602156311076"
            },
            {
                "innerText": "【9折狂欢/现货】西装外套女设计感小众早秋交叉绑带休闲薄款西服",
                "href": "https://item.taobao.com/item.htm?id=623407428167"
            },
            {
                "innerText": "【9折狂欢价】减龄时尚套装女秋格子衬衫+披肩+吊带套装裙三件套",
                "href": "https://item.taobao.com/item.htm?id=625042362765"
            },
            {
                "innerText": "Designer Plus 炸街小西装外套女春秋设计感系带宽松休闲蓝色西服",
                "href": "https://item.taobao.com/item.htm?id=623867984385"
            },
            {
                "innerText": "Designer Plus 减龄显瘦套装女初秋时髦针织开衫洋气束脚裤两件套",
                "href": "https://item.taobao.com/item.htm?id=624743295711"
            },
            {
                "innerText": "Designer Plus 纯棉短袖网红t恤女夏宽松ins超火高腰露脐白色上衣",
                "href": "https://item.taobao.com/item.htm?id=614358545521"
            },
            {
                "innerText": "Designer Plus 丝巾西装外套女秋装2020新款韩版宽松拼接系带西服",
                "href": "https://item.taobao.com/item.htm?id=624729538809"
            },
            {
                "innerText": "Designer Plus 牛仔裤女紧身小脚2020秋款显瘦百搭弹力毛边长裤子",
                "href": "https://item.taobao.com/item.htm?id=565309871355"
            },
            {
                "innerText": "Designer Plus 衬衫连衣裙套装女宽松显瘦中长款外搭披肩两件套秋",
                "href": "https://item.taobao.com/item.htm?id=603148198154"
            },
            {
                "innerText": "Designer Plus 撞色系飘带白衬衫女2020秋季新款复古港味雪纺上衣",
                "href": "https://item.taobao.com/item.htm?id=599760474550"
            },
            {
                "innerText": "Designer Plus 港味高腰牛仔裤女2020新款韩版宽松百搭休闲老爹裤",
                "href": "https://item.taobao.com/item.htm?id=594801305156"
            }
        ]
    },
    "success": true
}

```

- STEP3.
- 디테일 상품 페이지를 크롤링 합니다.
- tagsImgs 에 해당하는 부분을 이미지로 저장합니다.
- 폴더명은 output/[상품ID] 입니다.

```js

POST : http://localhost:4000/api/basecrawlsaved/urlNTagNImg
REQUEST_BODY:

{
  "url": "https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-17136297531.10.5d5f3ae4qm5s0x&id=601988445577",
    "tagsName":[
        "상품명",
        "가격",
        "사이즈",
        "상세설명"
    ],
    "tags": [
        "#J_Title > h3",
        "#J_StrPrice > em.tb-rmb-num",
        "#J_isku > div > dl.J_Prop.J_TMySizeProp.tb-prop.tb-clear.J_Prop_measurement > dd > ul",
        "#description"
    ],
    "tagsImgs": [
        "#detail > div.tb-detail-bd.tb-clear > div.tb-summary.tb-clear > div > div.tb-item-info-l > div.tb-gallery > div",
        "#J_UlThumb",
        "#J_DivItemDesc"
    ]
}
```

```js

POST : http://localhost:4000/api/basecrawlsaved/urlNTagNImg

BODY :

{
    "url": "https://item.taobao.com/item.htm?spm=a21wu.241046-kr.4691948847.5.7db5b6cbn7M5XT&scm=1007.15423.84311.100200300000001&id=559337978737&pvid=fdb9d6ca-f0a6-4b80-aea5-d0fb06218613",
    "tagsName":[
        "상품명",
        "가격",
        "사이즈",
        "상세설명"
    ],
    "tags": [
        "#J_Title > h3",
        "#J_StrPrice > em.tb-rmb-num",
        "#J_isku > div > dl.J_Prop.J_TMySizeProp.tb-prop.tb-clear.J_Prop_measurement > dd > ul",
        "#description"
    ],
    "tagsImgs": [
        "#detail > div.tb-detail-bd.tb-clear > div.tb-summary.tb-clear > div > div.tb-item-info-l > div.tb-gallery > div",
        "#J_UlThumb",
        "#J_DivItemDesc"
    ]
}
```

- STEP4.
- csv 파일들을 Xlsx 로 병합을 시도 합니다.

```js

```

- STEP5.
- Xlsx 파일들을 네이버 폼에 맞게 변경합니다. ( 수동 조작 recommanded )

```js

```
