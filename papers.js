const categories=[['ms','手稿','Manuscripts'],['loose','散页','Loose Leaves'],['notes','便笺','Notes'],['letters','信笺','Letters'],['drafts','草稿','Drafts']];
const entries=[];function add(cat,date,body,title='',en=''){entries.push({cat,date,body,title,en,id:'entry-'+entries.length});}
add('letters','2025.11.30',`My place was never in this world. I sought and longed for something I could not quite name, but in you, I found it. To be lost and to be found — that is the lifespan of love, and in its brevity, in its tragedy, it has been made eternal.`);
add('loose','2026.08.30',`我最常做的主题是恐惧，而最令我恐惧的是死亡。死是什么？是漩涡、黑洞和宇宙。是有强引力的灵体拖着我陷入恐慌的情绪。对于死，我其实没什么好说的。无非就是害怕和无法接受。这种单一单薄的情绪没什么好浓墨重彩去描写的，没人能改变，又有谁能逃避。我烦透了这些无休止的恐慌，又无法从根源上解决。我感到恐慌无助，每次尝试感受自己时的恐惧，心慌，焦虑，我到底是谁，我从何而来？我到底是什么？没有了我？我不想消失，我渴望创作一些作品，但我和其他人不一样的是，我从一开始就没想过要把什么留下来，从构思之前就默认这是个短暂的玩意，我记性不错，但想法过多，一个又一个的灵感挤出脑子，我留不住什么东西，它们溜出我意识的那一瞬间就不再属于我了。我创作的目的在于发泄恐惧和让自己脱离恐惧的牢笼，而不是出人头地或在世界上留下属于自己的痕迹。`,'创作与恐惧','On Creation and Fear');
add('loose','2026.07.16',`在朋友圈里认出经历过类似创伤的人很简单，即使双方都没有想认或谈论过往伤痛的念头。 经历过的人一下就能理解对方的所作所为与言行举止，甚至在对方没有开口的情况下就能感受到对方的情绪与心理状态。 这就是为什么我从不相信未经历过的人能理解我，甚至是我的父母血亲。正因他们从未经历过类似的创伤， 他们无法理解我们所经历的痛苦与挣扎。当然，我对我父母的过去不感兴趣，或者说已经过了对他们感兴趣的年龄。 种种的傲慢与遮掩，仿佛不到在这世间存活的18年整的那一瞬间前，我都是个未曾注入灵魂，无法独立思考，没有理性与情感的婴儿。 我不认为我能充分的理解他们的伤痛，但至少我会尝试共情。而他们呢？凭借着年龄和长辈的身份， 认为自身有资格去评判他者的行为与心理状态。这无疑是愚蠢且傲慢的。有些人活得再久也是几年的无用功，甚至十年百年， 不见得活得越久思考得越多。我的傲慢是基于他人对我的轻视而生，我厌倦了不被尊重，也懒得再望向那些我一下就能理解的人。`,'关于创伤...','On Trauma…');
add('loose','2026.07.10',`我最恐惧的是死亡。死是什么？是漩涡、黑洞和宇宙。是有强引力的灵体拖着我陷入恐慌的情绪。 对于死，我没什么好说的。无非就是害怕和无法接受。这种单一单薄的情绪没什么好浓墨重彩去描写的， 没人能改变，又有谁能逃避。我烦透了这些无休止的恐慌，又无法从根源上解决。我感到恐慌无助， 每次尝试感受自己时的恐惧，心慌，焦虑，我到底是谁，我从何而来？我到底是什么？没有了我？我不想消失，不要 一提到死，我会被黑暗包裹。我尝试了一次又一次往下坠，一直下坠、一直感知恐慌，这大抵是个无底洞吧， 我唯一能做的就是听从重力一直往下坠。我恨意识
我和其他人不一样的是，我从一开始就没想过要把什么留下来，从构思之前就默认这是个短暂的玩意，我记性不错， 但想法过多，一个又一个的灵感挤出脑子，我留不住什么东西，它们溜出我意识的那一瞬间就不再属于我了。
母亲生了重病，病情严重到可以直观地看到，母亲的恐慌我也知道。我不想说，我也不敢说。 我对死亡的恐惧已经贯彻了我17年，我只是想知道这份意识消散后名为我的东西又该何去何从？ 我又在掉眼泪了。`,'关于死亡...','On Death…');
add('drafts','2026.11.24',`把我现在拥有的木盒子切掉，切成长方体，金属盒子放在里面：01. 编号尸体 / Inventory of the Dead
制作类似停尸柜或档案柜的金属盒子。外部只有编号，没有姓名，内部留下象征人体存在的痕迹。
探讨个体死亡如何被社会转化为统计数据。`,'编号尸体','Inventory of the Dead');
add('drafts','2026.11.24','然后再制作第三个项目的盒子，分三个，做成名片夹一样的东西，自我真我本我');
add('ms','2026.07.29',`狂热者和正直家是一对朋友，狂热者缄默傲慢，正直家高昂冲动。

某天他们谈起与众不同：狂热者渴望改变，我渴求新的造型与以往不同的形象。正直家表示赞同，因为我们有着相同的审美爱好。而程度是个问题，他者的注目更是个难关。狂热者习惯于独自钻研热爱的事物，用近乎疯狂的执着去拥护自我之爱。而正直家享受被人追捧，渴望永远站在聚光灯下聆听喝彩。

正直家问：鲜艳和个性不好么？我的表现欲溢于言表！

狂热者答：你没有足够的资质维持美丽！比起异类，我选择当个隐秘的反叛者。只有完美的你才配站在阳光下。

正直家说：拥有追随者就拥有入场券，我的每一面都有不同的人爱着，正因我被支持，我就有能力在灯下畅谈。灯的颜色也五彩斑斓。而你，无人知晓你的意图，所谓的正常人把你视作怪人，异类把你看作弄巧成拙的小丑！零与一百，你无法选择中间的任何数字！

狂热者回：零有追随者，一百同理。为何你的每一面有对应的拥护者，身为夹缝中的老鼠就无法寻到同类？你很矛盾！这世间没有任何绝对单一，甚至灰色的面积比黑与白更广阔。即使明度不同，合群的界限变得模糊，我的主张却得到了更广泛的传播。你在渴望一个能够完全理解你，和你严丝合缝的人吗？

正直家道：不要讽刺我的追求！我唾弃你的懦弱！从我们诞生的那一刻起你就明白，我们与常人不同，你与我都对这庸俗不屑，甚至厌恶那些无法描述的普通。你没有举起抗旗的勇气，你也不爱革命！你从不主动展露你的观点，总是停留在你所安置的灰色地带，你觉得你真的安稳吗？无法行动，那就磨练能力；没有能力，那就拥有勇气；没有勇气，那就产生念头；而连念头都不愿意去构思的人，存在又有什么意义？我鄙夷连想都不敢想的人。妄想和欲望是构成人的基本物质，这些不可控的存在正是反抗的原初！

狂热者说：我不屑于去为无知者传教。我也向来不爱做无意义的事，包括出生，成长，每个人的肉体最终都将归于尘土，意识也将消散在宇宙。拼命想要留下些什么痕迹？留下的痕迹是何物？无疑是父母赐予的名字流传后世，但这有意义吗？你所拥有的成就和旗帜，终将在你死后那消失。没有为什么，你也清楚，我也可以说你死后我也不复存在，你眼中再无我，我的一切都是由你来搭建支撑，反之亦然。这个世界从头到尾只有我们二者！我自然有欲望，是人就拥有欲念。但身处于社会中，或者说，经历过规训的你和我，自然是要压低声音以逃避肉体之罚。保全载体才是行船之关键，没有庸人愿意相信因肉体而发狂的疯子之言。

最终正直家赞同道：可我们接收到的教义过于烈艳，同类的教唆又太过刺耳。为了合群与表面的和谐，那就用流水冲洗鲜艳吧！时光会让万物褪色，万物终将归于虚无。我认可你的观点!`,'狂热者与正直家','The Zealot and the Righteous');
add('loose','2026.07.10',`吗的写这种东西是一定要看阶段的 现在人不在这种情绪里也就没编辑的兴趣了呀 但人咋可能说要什么都进入什么 每次都特么以年起步 总有人在浪费我的时间而我又是特别害怕时间流逝的人我真想活得久点啊 我他妈真想永生 活着太好太幸福了`);
add('loose','2026.07.07',`唉每次想做点什么有代表性的可以介绍这个名字的就犯怵呀。感觉个人想法太龌龊没啥能拿得出手的而且很多完成度也不高没法展现我的能力，稿件不想发不是自己的想法也没投入感情创作。长线叙事坚持不下来新想法太多精彩转头就忘了主线呀，合作歧议太多了懒得解释也不想控制合作方。最大阻碍还是觉得没人能理解我呀，觉得被同位者解读很恶心被误解又会心慌，我也没兴趣迎合大众或者做所谓无意义的小创作 一想到要为了一些在我眼里轻而易举的事去对着可能根本无法欣赏和尊重我的人开屏让我很反胃，而且我就是觉得画完自己的想法还要给人看并且解释自我的这件事很尴尬呀。`);
for(const [d,t] of [
['2026.11.19','我在这世界上只爱一个人，他是阿贝多。\n我在这世界上只恨一个人，那是我自己。'],['2026.11.10','进食与呕吐，爱与恨，生存与恐惧'],['','活着除了让我感受到不甘和屈辱以外一无所获'],['','我这么蔑视规则的人也有今天'],['','我给很多人太高期望了竟然妄想能够被理解'],['','属于我的自由又在哪'],['','爱恨是同位体'],['2026.10.28','失去了恐惧就得到了一切'],['','我太痛苦了'],['','有的人活着就是浪费资源'],['','那些不知道择取是非对错的更是'],['','我只为我心中的正直善良而奋斗'],['2026.11.05','遵守规则'],['2026.11.03','只画感兴趣的东西'],['2026.08.22','恐惧我们拥有并且习以为常的一切\n保持恐惧 对你熟知的一切'],['2026.08.17','污垢的过去和无垢的未来'],['2026.07.28','比起异类我还是更喜欢当反叛者'],['2026.07.28','我爱文字胜过图画，因为言语可以被诉说'],['2026.07.28','一堆模仿者，一群别扭的人，不喜欢做作的的人，我操。'],['2026.05.27','幸福不是单一时刻，而是由各种因素组合成的共同时刻'],['2026.07.26','我嘴上说着讨厌巧克力实际上每天不知道吃了有多少就像我无法控制地爱上其实很恨的人'],['2026.07.20','303.345不要对命定的循环感到恐惧'],['2026.07.20','滥情是好词呀 我能记住的话就是还爱着好不'],['2026.07.10','你有你的痛苦我也有我的不幸，我不知道为什么我们要相互折磨，我们做好属于自己的心理疏导就可以了好不好'],['2026.07.10','你自己面对吧！毕竟在不久的将来我也会落得这个下场 而不论好与坏 是否有人在我身边都不一定'],['2026.07.06','太尴尬太诡异了我觉得把自己展现给大众就是件难以接受的事'],['2026.06.23','我每次发现我在意的立体人们身上细微的共同点我就心里一紧我想死'],['2026.07.20','我的画是在转述而不是创作，真正创作的是我的脑子和文字']])add('notes',d,t);
add('loose','2026.05.27',`你最喜欢什么时候的自己
1.无法入睡的自我
想法最多最广，时间流逝的最快，可惜记忆力奇差
2.刚刚睡醒的自我
徘徊在梦境与现实之间，还在回忆眼角的泪水为何而流，还能想起前一晚的想法么`);
add('loose','2026.11.01',`我不擅长记忆过去，儿时的回忆不多，我也不会记住美好的过去。相反的，在每个我曾经生活过的地方都有令我讨厌的地方。小学是我一切情感的起点，我在学校里懂得了恨和愤怒，也曾经梦见过这个校园。我的小学在北京。我一直记得进入校门铁栅栏前要通过一条狭隘的胡同路，那是侧边的路，正路两侧有大树和珠宝大厦，夏天全是绿荫，很美。我曾和同学去学校周围的楼里逛过，有和田玉，价格是天文数字。那是小时候的我觉得最气派的道路。校园里没什么好说的，一是我记不得，二是我根本就不喜欢学校。我在上课时总想着冲出校门，但等父母来接我回家的等待总是很长，课后兴趣小组我向来是不爱参加的，我觉得没什么好和这群小孩们一起玩的，我也讨厌老师，我的班主任对我很差，每每想到只能归结于她心理有问题。我永远在下午四点准时站在铁栅栏前，那时栅栏已经被保安打开了，露出那条宽广繁华的大路。我等妈妈开车来接。等啊等，有时候等得过于久了，天色暗下来，保安室的座机也打不通母亲电话的时候，喉咙里和鼻腔中会翻涌上来咸涩的泪水。我记不住家里的车长什么样子，只能等到妈妈摇下车窗喊我的小名。上车后也鲜少开向大路，因为那条路和我家不顺路。想要快速回家只能从胡同堵着离开。`,'下午四点','Four in the Afternoon');
const titles={1:['谈到恐惧...','On Fear'],2:['关于创伤...','On Trauma'],3:['关于死亡...','On Death'],4:['编号尸体','Inventory of the Dead'],5:['自我 · 真我 · 本我','Self'],7:['时效','Time'],8:['囧','囧']};
for(const [i,t] of Object.entries(titles)){entries[i].title=t[0];entries[i].en=t[1]}
// Merge the two versions, retaining the unique passages and both dates.
const fear=entries[1],death=entries[3];
fear.body=fear.body.replace('我不想消失，我渴望创作一些作品','我不想消失，不要 一提到死，我会被黑暗包裹。我尝试了一次又一次往下坠，一直下坠、一直感知恐慌，这大抵是个无底洞吧， 我唯一能做的就是听从重力一直往下坠。我恨意识\n\n我渴望创作一些作品')+'\n\n'+death.body.slice(death.body.indexOf('母亲生了重病'));
fear.date='2026.08.30';fear.originalDates='2026.07.10 / 2026.08.30';
entries.splice(entries.indexOf(death),1);
const findNote=t=>entries.find(e=>e.cat==='notes'&&e.body===t);
function pair(a,b){const first=findNote(a),second=findNote(b);first.body+='\n'+second.body;first.plain=true;first.date='2026.11.05';entries.splice(entries.indexOf(second),1);}
pair('有的人活着就是浪费资源','那些不知道择取是非对错的更是');
pair('我给很多人太高期望了竟然妄想能够被理解','我只为我心中的正直善良而奋斗');
const rule=findNote('遵守规则'),defy=findNote('我这么蔑视规则的人也有今天');rule.edge=-1;defy.edge=1;rule.plain=defy.plain=true;defy.date='2026.11.05';
for(const e of entries)if(e.cat==='notes'&&!e.date)e.date='2026.11.05';
// Reclassify without changing original text or IDs.
for(const e of entries){
 if(e.body.startsWith('My place was never')){e.cat='loose';e.title='My place was never in this world...';e.en=e.title;}
 else if(e.body==='进食与呕吐，爱与恨，生存与恐惧'){e.cat='ms';e.title=e.body;e.en='Eating and Vomiting, Love and Hate, Life and Fear';}
 else if(e.body==='只画感兴趣的东西'||e.body.startsWith('我在这世界上只爱一个人，他是阿贝多')){e.cat='letters';e.title=e.body==='只画感兴趣的东西'?e.body:'我在这世界上只爱一个人';e.en=e.title;}
 else if(e.title==='囧'||e.title==='时效'||e.title==='关于创伤...'||e.body.startsWith('你最喜欢什么时候的自己')){e.cat='notes';if(e.title==='囧'||e.title==='关于创伤...')e.plain=false;}
}

const byTitle=t=>entries.find(e=>e.title===t), byBody=t=>entries.find(e=>e.body.startsWith(t));
byTitle('关于创伤...').cat='loose';
function revise(prefix,body){byBody(prefix).body=body;}
revise('一堆模仿者','一堆模仿者，一群别扭的人，不喜欢做作的人。');
revise('我嘴上说着','我嘴上说着讨厌巧克力，实际上每天不知道吃了多少。就像我无法控制地爱上一个其实很恨的人。');
revise('滥情是好词','滥情是好词呀 留在我记忆里就是爱的证明。');
let mutual=byBody('你有你的痛苦');mutual.body=mutual.body.replace('好不好','。');
let awkward=byTitle('囧'),extra=byBody('太尴尬太诡异');awkward.body=awkward.body.replaceAll('呀','')+'\n\n'+extra.body+'。';awkward.originalDates='2026.07.06 / 2026.07.07';entries.splice(entries.indexOf(extra),1);
byBody('我每次发现').body=byBody('我每次发现').body.replace('立体人们','人们');
let happy=byBody('幸福不是'),self=byBody('你最喜欢什么时候');happy.body+='。\n\n'+self.body;entries.splice(entries.indexOf(self),1);
add('letters','', '', '', '');let beloved=entries.at(-1);beloved.id='entry-beloved';beloved.imageOnly=true;
const statementZH=`我并不认为这部视频已经充分完成。创作过程中不断涌现出新的想法，但由于时间有限，我没能将它们全部融入作品。

对我而言，《In the Cafe》像是一个关于渴望、等待与期盼的爱情故事。因此，我最初想以我与恋人之间的关系为主题创作这部视频。但随着构思的深入，我逐渐意识到，这段爱情叙事已经不再契合我真正想探讨的内容，于是最终舍弃了他的形象，将视线转向自我。

黑裙与红裙都是我内在思想的具象化。

我时常感到无比恐惧，对自己熟知的一切感到陌生与恐慌，也不断怀疑自身对美的追求。我坚信人是由两个极端构成的：血腥与暴力，温婉与眷恋。

社会所塑造的爱与根植于本能的暴力欲望不断拉扯着我，然而社会的教养与道德观念，最终只会使这把利剑转而刺向自我。我所坚守的正直与善良，与他人背离这些准则的行径之间的冲突，令我作呕。

进食与呕吐。\n爱与恨。\n生存与恐惧。\n美与丑。\n暴力与温柔。

这些看似对立的概念，在我的意识中始终相互纠缠，彼此依存。

恐惧让我感到自己活着，然而在社会生活中，失去了恐惧似乎就能得到一切。摆脱恐惧，你便可以去做任何想做的事；但倘若失去了恐惧，又该如何证明自己活着？

于我而言，唯一的方法便是与恐惧共生。吞下你所爱的恐惧，成为令他人恐惧的存在。纵使有千百个不愿，也要为自我筑起一道名为自私的壁垒。

因为在这世上，「我」最重要。`;
const statementEN=`I do not consider this video fully finished. New ideas continued to emerge throughout the creative process, but due to time constraints, I was unable to incorporate all of them into the work.

To me, In the Cafe feels like a love story about longing, waiting, and hoping for something. Initially, I intended this video to be about my beloved and me. However, as my ideas developed, I gradually realized that this romantic narrative no longer aligned with what I truly wanted to explore. Ultimately, I left him out and turned my attention inward.

Both the black dress and the red dress are manifestations of my inner thoughts.

I often experience an overwhelming sense of fear. Even the things I am most familiar with can suddenly become strange and terrifying. I also find myself constantly questioning my own pursuit of beauty.

I firmly believe that human beings are composed of two extremes: bloodshed and brutality, tenderness and attachment.

I am constantly pulled between the love shaped by society and the desire for violence rooted in human instinct. Yet social conditioning and morality ultimately turn the blade inward, against the self. The conflict between my own principles of integrity and kindness and the actions of those who violate them makes me nauseous.

Eating and vomiting.\nLove and hate.\nSurvival and fear.\nBeauty and ugliness.\nViolence and tenderness.

These seemingly opposing concepts are perpetually intertwined and interdependent within my consciousness.

Fear makes me feel alive. Yet within society, it seems that by losing fear, one can gain everything. Once liberated from fear, you are free to do whatever you desire. But without fear, how can you prove that you are alive?

For me, the only answer is coexistence with fear. Devour the fear you love, and become a presence that others fear. However reluctant you may be, you must erect a barrier of selfishness around the self.

Because in this world, the “I” matters most.`;
const noteEN=[['遵守规则','Obey the rules'],['活着除了','Being alive has given me nothing but resentment and humiliation.'],['我给很多人','I expected too much of so many people, foolishly imagining I could be understood.\nI fight only for the integrity and kindness I believe in.'],['属于我的自由','Where is the freedom that belongs to me?'],['爱恨是同位体','Love and hate are isotopes.'],['我太痛苦','I am in so much pain.'],['有的人活着','Some people waste resources simply by being alive.\nEspecially those who cannot distinguish right from wrong.'],['失去了恐惧','Lose fear and gain everything.'],['恐惧我们','Fear everything we possess and take for granted.\nRemain afraid of everything familiar.'],['污垢的过去','A sullied past and an unsullied future.'],['比起异类','I would rather be a rebel than an outsider.'],['我爱文字','I love words more than pictures, because words can be spoken.'],['一堆模仿者','A pile of imitators, a crowd of awkward people. I dislike pretentious people.'],['我嘴上说着','I say I hate chocolate, yet I have no idea how much I eat every day. Just as I cannot help loving someone I actually hate.'],['303.345','303.345 Do not fear the cycle ordained by fate.'],['滥情是好词','Being lavish with love is a good thing. Remaining in my memory is proof of love.'],['我的画是在','My drawings are retellings, not creation. The true creation happens in my mind and my words.'],['吗的写','Damn, writing things like this depends on the phase I am in. Now that I am no longer in that emotional state, I have no interest in editing. But how the hell can anyone enter a state at will? It always takes years. People keep wasting my time, and I am terrified of time passing. I want to live longer. I fucking want to live forever. Being alive is so wonderful, so happy.'],['你有你的痛苦','You have your pain and I have my misfortune. I do not know why we must torment each other. We can each take care of our own emotional well-being.'],['你自己面对','Face it yourself! Before long I will meet the same fate, and whether it is good or bad, I may or may not have anyone beside me.'],['唉每次','Whenever I try to make something representative of this name, I hesitate. My thoughts feel too sordid to present, and much of my work is too unfinished to demonstrate my abilities. I do not want to post commissions because they are not my own ideas and I have not invested my emotions in them. I cannot sustain long narratives; new ideas arrive so quickly that I forget the main story. Collaborations bring too many disagreements, and I neither want to explain nor control my collaborators. My greatest obstacle is feeling that nobody understands me. Being interpreted by people in the same position disgusts me, while being misunderstood makes me anxious. I have no interest in catering to the public or making meaningless little works. The thought of showing off things I find easy to people who may not appreciate or respect me makes me nauseous. I find it embarrassing to draw my own ideas, show them to others, and explain myself.\n\nIt is so awkward and strange. I find exposing myself to the public difficult to accept.'],['我每次发现','Whenever I notice subtle similarities among people I care about, my heart tightens and I want to die.'],['幸福不是','Happiness is not a single moment, but a shared moment composed of many factors.\n\nWhen do you like yourself most?\n1. The sleepless self\nMy thoughts are most numerous and expansive, and time passes fastest, but my memory is terrible.\n2. The newly awakened self\nBetween dream and reality, still recalling why tears fell from my eyes. Can I remember what I thought the night before?'],['我这么蔑视','Even someone who despises rules as much as I do has come to this.'],['只画感兴趣','I only draw what interests me.'],['我在这世界','There is only one person I love in this world: Albedo.\nThere is only one person I hate in this world: myself.'],['进食与呕吐','Eating and vomiting, love and hate, survival and fear.']];
for(const [prefix,en] of noteEN){let e=byBody(prefix);if(e)e.bodyEN=en;}
byTitle('囧').en='Awkward';byTitle('时效').en='Time';byTitle('只画感兴趣的东西').en='I only draw what interests me';byTitle('我在这世界上只爱一个人').en='There is only one person I love';
byBody('My place was never').bodyEN=byBody('My place was never').body;byBody('My place was never').bodyZH='我的归处从来不在这个世界。我寻找、渴望着某种无法确切命名的事物，却在你身上找到了它。迷失与寻获——这便是爱的寿命；在它的短暂与悲剧之中，它成为了永恒。';
function bodyText(e){return lang==='en'?(e.bodyEN||e.body):(e.bodyZH||e.body)}
function formatted(e){let t=esc(bodyText(e));if(e.body==='我太痛苦了')t=t.replace(lang==='en'?'pain':'痛苦',m=>`<span class="soft-blur">${m}</span>`);if(e.title==='时效')t=t.replace(lang==='en'?/Damn|hell|fucking/g:/吗的|特么|他妈/g,m=>`<span class="strong-blur">${m}</span>`);return t;}
function media(e){if(e.body==='进食与呕吐，爱与恨，生存与恐惧')return '<video class="paper-media" controls playsinline preload="metadata" src="assets/food-love.mp4"></video><div class="reading-text statement">'+esc(tr(statementZH,statementEN)).replace(tr('我与恋人之间的关系','my beloved and me'),m=>`<a class="cross-reference" href="#entry-beloved" onclick="rememberReturn()">${m} ↗</a>`)+'</div>';if(e.body==='只画感兴趣的东西')return '<a href="assets/albedo.png" target="_blank" rel="noopener"><img class="paper-media" src="assets/albedo.png" alt="阿贝多插画" loading="lazy"></a>';return '';}
function paperLabel(e){return e.title?tr(e.title,e.en||e.title):e.body;}
function art(e,i){let g='',type=e.cat,b=e.body;const text=(x,y,t,size=14,extra='')=>`<text x="${x}" y="${y}" font-size="${size}" ${extra}>${esc(t)}</text>`;const path=(d,extra='')=>`<path d="${d}" ${extra}/>`;const circle=(x,y,r)=>`<circle cx="${x}" cy="${y}" r="${r}"/>`;let cls='';
if(type==='ms'){for(let j=0;j<30;j++)g+=`<ellipse cx="180" cy="95" rx="${35+j*2.4}" ry="${14+j*.9}" transform="rotate(${j*13} 180 95)"/>`;g+=circle(180,95,100)}
else if(type==='letters'){for(let j=0;j<24;j++)g+=path(`M${65+Math.sin(j)*20} ${75+Math.cos(j)*20} C${240-j*3} ${-20+j*4} ${120+j*3} ${200-j*4} ${295+Math.sin(j)*20} ${115+Math.cos(j)*20}`);g+=text(180,165,'To be lost and to be found',13,'text-anchor="middle"')}
else if(type==='drafts'){for(let j=0;j<8;j++)g+=path(`M${65+j*9} ${40+j*5} L${280-j*5} ${25+j*7} L${300-j*6} ${140-j*4} L${85+j*5} ${165-j*4}`);g+=text(20,180,'FIG. '+(i+1),10)}
else if(type==='loose'){if(e.title.includes('死亡')){let d='M180 12 C310 12 310 180 180 180 C75 180 75 35 180 35 C260 35 260 155 180 155 C120 155 120 60 180 60 C225 60 225 130 180 130 C150 130 150 85 180 85';g+=`<path id="p${e.id}" d="${d}"/><text font-size="11"><textPath href="#p${e.id}">一直下坠　一直感知恐慌　这大抵是个无底洞吧</textPath></text>`;g+=circle(180,95,2)}else if(e.title.includes('四点')){g+=path('M70 45H290 M70 125H290');for(let j=0;j<14;j++)g+=path(`M${70+j*16} 45V125`);g+=text(180,153,'等啊等',14,'text-anchor="middle"')}else if(e.title.includes('恐惧')){['我到底是谁','我从何而来','我到底是什么','我'].forEach((t,j)=>g+=text(65+j*32,45+j*33,t,17,`opacity="${1-j*.2}"`));}else if(e.title.includes('创伤')){for(let j=0;j<5;j++)g+=path(`M25 ${45+j*9} C110 ${-15+j*10} 125 ${155-j*5} 180 95 S255 ${15+j*8} 335 ${45+j*9}`);g+=circle(180,95,3)}else{g+=path('M35 40L120 110L205 55L310 145','stroke-dasharray="2 5"');[ [35,40],[120,110],[205,55],[310,145]].forEach(p=>g+=circle(...p,2));g+=text(45,28,e.title||'自我',18);}}
else {if(b.includes('同位体')){g+=`<ellipse cx="145" cy="85" rx="85" ry="38" transform="rotate(-28 145 85)"/><ellipse cx="215" cy="85" rx="85" ry="38" transform="rotate(28 215 85)"/>`;g+=text(115,94,'爱',30,'class="leftword"')+text(235,94,'恨',30,'class="rightword"')+text(180,90,'是',12,'text-anchor="middle"')+text(180,155,'同位体',18,'text-anchor="middle"');cls='poem'}else if(b.includes('303.345')){g+=`<circle id="p${e.id}" cx="180" cy="95" r="72" stroke-dasharray="1 5"/><text font-size="12"><textPath href="#p${e.id}">不要对命定的循环感到恐惧　不要对命定的循环感到恐惧</textPath></text>`+text(180,100,'303.345',20,'text-anchor="middle"');cls='poem'}else if(b.includes('失去了恐惧')){g+=text(45,55,'失去了',20)+text(112,55,'恐惧',20,'class="vanish"')+text(145,98,'就得到了',20)+text(235,145,'一切',38);cls='poem'}else if(b.includes('污垢的过去')){g+=text(25,80,'污垢的过去',19)+path('M130 85H225','stroke-dasharray="2 6"')+text(225,80,'无垢的未来',19);for(let j=0;j<6;j++)g+=text(145+j*12,65+Math.sin(j*3)*35,'垢',9,'class="vanish"');cls='poem'}else if(b.includes('属于我的自由')){let words=['属于','我的','自由','又在','哪'];g+=path('M35 65L105 115L175 45L245 115L315 65');words.forEach((w,j)=>{let x=35+j*70,y=[65,115,45,115,65][j];g+=circle(x,y,2)+text(x,y-12,w,18,'text-anchor="middle"')});cls='poem'}else if(b.length<=32){let words=b.split(/[，。\n]/).filter(Boolean);if(words.length>1){words.forEach((w,j)=>g+=text(180,50+j*37,w,Math.min(21,300/w.length),'text-anchor="middle"'));}else{g+=text(180,95,b,Math.min(22,300/b.length),'text-anchor="middle"');g+=path('M145 120H215','stroke-dasharray="1 5"')}cls='poem'}else{for(let j=0;j<19;j++)g+=circle(180+Math.sin(j*2.3)*85,85+Math.cos(j*3.2)*45,j%5===0?2:.7);g+=text(180,90,'✧',22,'text-anchor="middle"')}}
return `<svg class="folio-art ${cls}" viewBox="0 0 360 190" aria-hidden="true"><g class="breathing" fill="none" stroke="currentColor" stroke-width=".65">${g}</g></svg>`;}
function originalPaperPage(route){let c=categories.find(x=>route==='cat-'+x[0]),e=entries.find(x=>x.id===route);if(route==='papers')return nav+`<small>04 / MANUSCRIPTS & MARGINALIA</small><h1>${tr('手稿与随笔','Manuscripts & Marginalia')}</h1><div class="paper-cats">${categories.map((x,i)=>`<a href="#cat-${x[0]}"><span>0${i+1}</span><strong>${tr(x[1],x[2])}</strong><small>${tr(x[2],x[1])}</small></a>`).join('')}</div>`;if(c){let list=entries.filter(x=>x.cat===c[0]).sort((a,b)=>(a.edge||0)-(b.edge||0)||b.date.localeCompare(a.date));return nav+`<p><a href="#papers">← ${tr('手稿与随笔','Manuscripts & Marginalia')}</a></p><h1>${tr(c[1],c[2])}</h1><div class="folio-grid ${c[0]}">${list.map((x,i)=>{let label=x.title?paperLabel(x):x.cat==='letters'?'Lost & Found':x.body.length>32?(['巧克力','滥情','相互折磨','自我展露'].find(t=>x.body.includes(t))||''):'';return `<a class="folio-piece ${x.edge?'note-edge':''}" href="#${x.id}" aria-label="${esc(label||x.body)}" style="--phase:${-i*1.7}s">${(x.plain||lang==='en'||x.body==='我太痛苦了'||x.title==='时效')?`<div class="plain-note">${formatted(x)}</div>`:art(x,i)}<div class="folio-index">${label?`<strong>${esc(label)}</strong>`:''}<small>${esc(x.date)}</small></div></a>`}).join('')}</div>`;}if(e)return nav+`<p><a href="#cat-${e.cat}">← ${tr(categories.find(x=>x[0]===e.cat)[1],categories.find(x=>x[0]===e.cat)[2])}</a></p><article class="paper-reading"><small>${esc(e.originalDates||e.date)}</small>${e.title?`<h1>${esc(paperLabel(e))}</h1>`:''}<div class="reading-art">${art(e,0)}</div><div class="reading-text">${formatted(e)}</div>${media(e)}<div class="reading-end">✧</div></article>`;return null;}
let letterMode='desk', letterIndex=0, returnPoint=null;
function rememberReturn(){returnPoint={hash:location.hash,y:scrollY};}
function letterList(){return entries.filter(e=>e.cat==='letters');}
function letterPage(route){let list=letterList(), e=list.find(x=>x.id===route);if(e){letterIndex=list.indexOf(e);letterMode='read';}let current=list[letterIndex]||list[0];let back=`<p><a href="#papers">← ${tr('手稿与随笔','Manuscripts & Marginalia')}</a></p>`;let controls=`<div class="letter-controls"><button onclick="letterMode='read';render()">${tr('逐页阅读','Read letters')}</button><button onclick="letterMode='desk';location.hash='cat-letters';render()">${tr('摊开信笺','Spread letters')}</button><button onclick="letterMode='desk';location.hash='cat-letters';render()">${tr('返回桌面','Back to desk')}</button></div>`;if(letterMode==='closed')return nav+back+`<h1>${tr('信笺','Letters')}</h1><section class="letter-stage"><button class="envelope" onclick="openEpistles()"><span class="envelope-back"></span><span class="envelope-paper"></span><span class="envelope-front"></span><span class="envelope-flap"></span><span class="envelope-seal">✦</span><span class="envelope-address">To my beloved.</span></button></section>`;if(letterMode==='desk')return nav+back+controls+`<div class="epistle-desk">${list.map((x,i)=>`<a href="#${x.id}" class="epistle-sheet" style="--tilt:${i%2?5:-4}deg">${x.imageOnly?'<img src="assets/beloved.jpeg" alt="My beloved and me">':x.body==='只画感兴趣的东西'?'<img src="assets/albedo.png" alt="Albedo">':`<p>${formatted(x)}</p>`}<small>${esc(x.date)}</small></a>`).join('')}</div>`;return nav+back+controls+`<article class="epistle-sheet epistle-reading">${current.imageOnly?'<a href="assets/beloved.jpeg" target="_blank"><img src="assets/beloved.jpeg" alt="My beloved and me"></a>':`<small>${esc(current.date)}</small><div class="reading-text">${formatted(current)}</div>${media(current)}`} </article><div class="letter-controls"><button ${letterIndex===0?'disabled':''} onclick="turnLetter(-1)">← ${tr('上一页','Previous')}</button><span>${letterIndex+1} / ${list.length}</span><button ${letterIndex===list.length-1?'disabled':''} onclick="turnLetter(1)">${tr('下一页','Next')} →</button></div>${returnPoint?`<button onclick="returnToStatement()">← ${tr('返回作品阐述','Return to statement')}</button>`:''}`;}
function openEpistles(){document.querySelector('.letter-stage')?.classList.add('opening');setTimeout(()=>{letterMode='read';render()},650)}
function turnLetter(d){letterIndex+=d;location.hash=letterList()[letterIndex].id;}
function returnToStatement(){let p=returnPoint;returnPoint=null;if(p){location.hash=p.hash;setTimeout(()=>scrollTo(0,p.y),180)}}
function paperPage(route){if(route==='cat-letters'||letterList().some(e=>e.id===route))return letterPage(route);let e=entries.find(x=>x.id===route);if(e?.cat==='notes')return noteReader(e);return originalPaperPage(route)}

const draftItems=entries.filter(e=>e.cat==='drafts');if(draftItems.length===2){let [a,b]=draftItems;a.body+='\n\n'+b.body;a.bodyZH=a.body;a.bodyEN=(a.bodyEN||'Cut the wooden box into a rectangular form and place the metal box inside: 01. Inventory of the Dead. Create a metal box resembling a morgue or filing cabinet, numbered without names, with traces of human presence inside. Explore how society reduces individual deaths to statistics.')+'\n\n'+(b.bodyEN||'Then create the box for the third project, divided into three parts like business card holders: ego, true self, and id.');entries.splice(entries.indexOf(b),1)}
function noteList(){return entries.filter(x=>x.cat==='notes').sort((a,b)=>(a.edge||0)-(b.edge||0)||b.date.localeCompare(a.date))}
function noteReader(e){let list=noteList(),i=list.indexOf(e);return nav+`<p><a href="#cat-notes">← ${tr('返回便笺','Back to notes')}</a></p><article class="note-reader"><small>${esc(e.date)}</small><div class="note-reader-row"><button aria-label="Previous" onclick="turnNote(-1)" ${i===0?'disabled':''}>‹</button><div class="reading-text">${e.title?`<h2>${esc(paperLabel(e))}</h2>`:''}${formatted(e)}</div><button aria-label="Next" onclick="turnNote(1)" ${i===list.length-1?'disabled':''}>›</button></div><small>${i+1} / ${list.length}</small></article>`}
function turnNote(d){let list=noteList(),i=list.findIndex(x=>'#'+x.id===location.hash);if(i>=0&&list[i+d])location.hash=list[i+d].id}
