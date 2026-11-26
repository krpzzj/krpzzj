const worlds=[
{id:'poliphili',no:'03.01',title:'玻利菲洛的爱梦',en:'Hypnerotomachia Poliphili',tags:'波利菲洛 玻利菲洛 梦 爱 lana 拉娜 阿贝多 albedo',branches:[{id:'pol-main',title:'玻利菲洛的爱梦',en:'Hypnerotomachia Poliphili'},{id:'regency',title:'永恒的平行线',en:'Eternal Parallel Lines',tags:'摄政 Regency 插画 OTOMEROID'}]},
{id:'hogwarts',no:'03.03',title:'霍格沃茨',en:'Hogwarts',tags:'hp 魔法 霍格沃茨 lana 拉娜 阿贝多 albedo nigel hypatia leko 奈哲尔 海帕夏 雷克 fork cake',branches:[{id:'hog-main',title:'霍格沃茨',en:'Hogwarts',tags:'霍格沃茨 hp'},{id:'fork',title:'Fork & Cake',tags:'fork cake 食人'}]},
{id:'highschool',no:'03.04',title:'现代美国高中',en:'American High School',tags:'美高 高中 校园 lana 拉娜 阿贝多 albedo nigel hypatia leko 奈哲尔 海帕夏 雷克 同校 异校 仅你我之间',branches:[{id:'same',title:'在时间之内',en:'Within Time',tags:'同校 社区',desc:'五人自小学起生活在同一社区；正式故事从高中开始。'},{id:'between',title:'仅你我之间',en:'Between You and Me',tags:'异校 林登 圣奥古斯汀 仅你我之间',desc:'林登与圣奥古斯汀的双校世界线。'}]},
{id:'tower',no:'03.05',title:'白塔与黑色宫殿',en:'The White Tower and the Black Palace',tags:'哨向 哨兵 向导 战争 lana 拉娜 阿贝多 albedo 卡门 卢西恩'},
{id:'philosophy',no:'03.06',title:'「我」如是说',en:'Thus Spoke “I”',tags:'哲学 爱 死亡 恐惧 存在 lana 拉娜 阿贝多 albedo'}];
const papers=[];

worlds.forEach((w,i)=>w.no=['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ'][i]);
worlds.find(w=>w.id==='highschool').branches.reverse();

const collections=[
{id:'albedo',title:'我的我和他',en:'Me, myself & him',tags:'阿贝多 albedo 垩岚 同人 AU',no:'Ⅰ'},
{id:'originals',title:'她们于我',en:'They for Me',tags:'OC 原创角色 original characters',no:'Ⅱ'},
{id:'practice',title:'艺术实践',en:'Art Practice',tags:'现实 作品 艺术 作品集 portfolio',no:'Ⅲ'},
{id:'other',title:'其他创作',en:'Other Works',tags:'其他 创作',no:'Ⅳ'}];
