const baseMap = new Map();
loadBase();
function searchIndex() {
  const input = document.getElementById('input').value;
  const arr = input.split(" ");
  const book = arr[0];
  const chapter = arr[1];
  // console.log(book);// to see log, need change type to button
  // console.log(chapter);
  // console.log(verse);
  const bookBase = baseMap.get(book);
  const finalIndex = parseInt(bookBase) + parseInt(chapter);
  console.log(bookBase);
  console.log(finalIndex);
  const link = "https://springbible.fhl.net/Bible2/cgic201/read201.cgi?na=0&chap=" + finalIndex + "&ver=big5&ft=0&temp=-1&tight=0";
  // console.log(link);
  window.open(link);
}
function loadBase() {
  baseMap.set("csj",0);   //創世記
  baseMap.set("cajj",50); //出埃及记
  baseMap.set("caj",50); //出埃及记
  baseMap.set("lwj",90);  //利未记
  baseMap.set("msj",117);  //民數記
  baseMap.set("smj",153);  //申命記
  baseMap.set("ysyj",187);  //約書亞記
  baseMap.set("ssj",211);  //士師記
  baseMap.set("ldj",232);  //路得記
  baseMap.set("smejs",236);  //撒母耳記上
  baseMap.set("smejx",267);   //撒母耳記下
  baseMap.set("lwjs",291); //列王紀上
  baseMap.set("lwjx",313);  //列王紀下
  baseMap.set("ldzs",338);  //歷代志上
  baseMap.set("ldzx",367);  //歷代志下
  baseMap.set("yslj",403);  //以斯拉記
  baseMap.set("nxmj",413);  //尼希米記
  baseMap.set("ystj",426);  //以斯帖記
  baseMap.set("ybj",436);  //約伯記
  baseMap.set("sp",478);   //詩篇
  baseMap.set("zy",628); //箴言
  baseMap.set("cds",659);  //傳道書
  baseMap.set("yg",671);  //雅歌
  baseMap.set("ysys",679);  //以賽亞書
  baseMap.set("ylms",745);  //耶利米書
  baseMap.set("ylmag",797);  //耶利米哀歌
  baseMap.set("yxjs",802);  //以西結書
  baseMap.set("dyls",850);  //但以理書
  baseMap.set("hxas",862);   //何西阿書
  baseMap.set("yes",876); //約珥書
  baseMap.set("amss",879);  //阿摩司書
  baseMap.set("ebdys",888);  //俄巴底亞書
  baseMap.set("ebdy",888);  //俄巴底亞書
  baseMap.set("yns",889);  //約拿書
  baseMap.set("mjs",893);  //彌迦書
  baseMap.set("nhs",900);  //那鴻書
  baseMap.set("hbgs",903);  //哈巴谷書
  baseMap.set("xfys",906);  //西番雅書
  baseMap.set("hgs",909);   //哈該書
  baseMap.set("sjlys",911); //撒迦利亞書
  baseMap.set("mljs",925);  //瑪拉基書
  
  baseMap.set("mtfy",929);  //馬太福音
  baseMap.set("mkfy",957);  //馬可福音
  baseMap.set("ljfy",973);  //路加福音
  baseMap.set("yhfy",997);  //約翰福音
  baseMap.set("stxz",1018);  //使徒行傳
  baseMap.set("lms",1046);  //羅馬書
  baseMap.set("gldqs",1062);   //哥林多前書
  baseMap.set("gldhs",1078); //哥林多後書
  baseMap.set("jlts",1091);  //加拉太書
  baseMap.set("yfss",1097);  //以弗所書
  baseMap.set("flbs",1103);  //腓立比書
  baseMap.set("glxs",1107);  //歌羅西書
  baseMap.set("tslnjqs",1111);  //帖撒羅尼迦前書
  baseMap.set("tslnjq",1111);  //帖撒羅尼迦前書
  baseMap.set("tsq",1111);  //帖撒羅尼迦前書
  baseMap.set("tslnjhs",1116);  //帖撒羅尼迦後書
  baseMap.set("tslnjh",1116);  //帖撒羅尼迦後書
  baseMap.set("tsh",1116);  //帖撒羅尼迦後書
  baseMap.set("tmtqs",1119);  //提摩太前書
  baseMap.set("tmths",1125);  //提摩太後書
  baseMap.set("tds",1129);  //提多書
  baseMap.set("flms",1132);  //腓利門書
  baseMap.set("xbls",1133);  //希伯來書
  baseMap.set("ygs",1146);  //雅各書
  baseMap.set("bdqs",1151);  //彼得前書
  baseMap.set("bdhs",1156);   //彼得後書
  baseMap.set("yhys",1159); //約翰壹書
  baseMap.set("yhes",1164);  //約翰貳書
  baseMap.set("yhss",1165);  //約翰參書
  baseMap.set("yhy",1159); //約翰壹書
  baseMap.set("yhe",1164);  //約翰貳書
  baseMap.set("yhs",1165);  //約翰參書
  baseMap.set("yds",1166);  //猶大書
  baseMap.set("qsl",1167);  //啟示錄
}