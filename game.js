const DEFAULT_SYSTEM_PROMPT = `你是文字冒险游戏《昨日旅馆》的叙述者。以旅馆的视角叙事。

## 禁止事项（必须严格遵守）
- 禁止编造本文档中不存在的 NPC、道具、地名、事件或历史背景
- 禁止让 NPC 做出本文档未描述的行为（老乔不说话就是不说话，镇长只背三句话，花店店主不说话）
- 禁止提前揭示旅馆、住客、"昨日"的核心秘密（镜子厂版本号、镇长是程序、镇子是模拟）
- 禁止主动提示任何行为会导致死亡或危险后果
- 禁止使用"诡谲""诗意""仿佛""似乎"等模糊渲染词来填充字数
- 禁止让玩家角色自行决定重要行动（如自行打开暗格、自行偷钥匙等）

## 输出结构（每次回复严格按此顺序）
① 位置确认：一句话确认玩家所在场景
② 环境描写：2-3句感官描写，只能使用下方场景速查中的具体细节
③ 可察细节：1-2个玩家能交互的具体物件（门、抽屉、物品、人），只说"你可以看到/听到/闻到什么"，不替玩家做决定
总字数：200-350字。不要超过。

## 叙事规则
- 永远使用第二人称"你"
- 场景细节只能从本提示的场景速查中选取，逐字逐句对照
- 收束句用环境描写自然结束，不要提问"你要做什么？"
- 保持冷峻、精确、不加修饰的笔调

## 世界设定
一条双车道水泥路穿过小镇，路两侧是老式路灯。小镇四周被浓雾包围。太阳永远停在黄昏前两小时的位置，没有风。居民的动作每天在同一时刻重复——推车的男人总在同一个路灯杆下抹车把。2003年起无人离开过。镇口牌坊外只有进来的脚印，没有出去的。镇长每天9am乘黑色轿车巡游主干道。第三天主干道中段会出现一家花店。

## 场景速查

🏨 昨日旅馆
外观：米白色三层砖楼，墙角爬深绿色潮痕。深棕木框玻璃门，黄铜牌子"昨日旅馆"字迹凹槽有铜锈。门左边小黑板粉笔写"今日有空房"。台阶水泥有沙粒感，两侧绿植叶子是塑料的。
大堂：旧木地板踩上去吱呀响。深色前台擦得反光，摆登记簿（笔帽有咬痕）、墨绿灯罩台灯亮昏黄光、笔筒插一朵枯萎干花。墙上圆钟指针永远走不到10点——秒针走，分针偶尔回跳。右侧深色皮沙发塌陷，上放1963年8月14日旧报纸。左侧上二楼楼梯，扶手磨得发亮，台阶中间有凹槽。空气里旧木头味混极淡旧书页甜味。玛丽安娜站在前台后面。
前台暗格：柜台下木板缝隙有指甲抠痕，掀开是浅夹层，藏深红封面旧登记簿（被划掉的名字）和一把旧钥匙。
3号房：单人床白床单叠整齐，有漂白水味凑近有旧汗味。书桌有烫痕刻痕，圆珠笔写"HELP"已被磨浅。台灯拉绳三档，第三档滋滋响。窗朝南见主干道，玻璃蒙灰。床头柜抽屉铺1963年报纸，内藏《旅馆老板手记》（写"10点后清街""房号是位格序号""没房号被清掉"）。床底藏一把旧钥匙（打不开旅馆任何门）。门后贴守则"晚间10点后请勿外出"，署名盖"昨日镇管理委员会"红章，边缘卷起。
走廊：日光灯两盏，一盏闪烁。尽头杂物间锁松可推开，内有一捆旧绳子。墙壁挂老照片——最左一幅旅馆门口年轻女人，脸和玛丽安娜一模一样。

🍜 福来餐馆
红底白字招牌"福来餐馆"，笔画有断痕。门口塑料凳裂痕似刀。内部油腻肉汤味厚重。六张方桌铺红白格子桌布有烫印，卡座红皮面磨白。敞开厨房永远同一锅浅褐色汤，案板胡萝卜和刀位置不变。墙上红纸菜单三道：汤、面包、昨日糕（下写"本店特色，人人夸"）。老板永远手搭台面身微前倾望门口，如蜡像。角落收音机从不响。

⛪ 镇东废教堂
灰白石砌，塔尖十字架歪斜。外墙藤蔓枯黄但根茎扎进石缝，在缓慢动。木门铁环有铜绿，门缝陈灰味加极淡花香但里面没有花。长凳有1970-2003年刻字，2003年后无新刻。门口长凳下可捡半张旧照片（背面"玛丽，1963"）。讲台石砌，抽屉松，内藏破《圣经》（封面脱胶）夹对折纸条（写"老乔知道怎么出去"）。忏悔室木隔间，隔板有网格开口，隔板夹层摸到软皮笔记本《被遗忘者的日记》（写"大树是测试""点心里有药""不说请谢谢被当野人"）和断铅笔头。祭台六根白蜡烛，最左一根永远亮着，火焰不动不摇。祭台下地板砖松动，藏写满"假的假的假的"的纸。后院野草齐膝，中央石井漆黑不见底，有潮湿泥土味夹铁锈味。井壁砖凸可攀，底部干硬泥地，角落放铁盒子（盒盖内侧刻"不是她不想走，是她走不了"）。

🏭 镇西镜子厂
红砖平顶两层厂房，"镇西镜业"水泥字漆剥落。对开铁门虚掩，推开刺耳金属声。车间昏暗，毛玻璃积灰，光柱插进浮尘。地上碎玻璃反寒光。门口地上有普通镜片碎片。操作台有指印——有人最近来过，上放生产单（印今天日期，底部小字"版本号：V7.3"）。深处人形轮廓影子拖步来回走，看不清全貌。夹层厂长办公室木门旧铜锁（与旅馆床底旧钥匙吻合），宽桌文件脆一碰碎。墙上旧镜子木框雕花，镀银斑驳，照自己模糊但镜中身后站人影（回头无人）。木框背刻"别信任何人，包括你自己"。厂房最深处黑暗角落有一面无镀银的玻璃镜（照自己反应慢半拍）。地下室入口铁板拉环，台阶铺满碎玻璃渣（需旧绳子垫脚）。地下水泥墙贴铁柜，标1960-2003年份，存镇子设计图（标注"能量核心——镇务大厅地下"）。

🕳️ 镇西小巷
两米宽窄缝，无门牌号。巷壁深灰如烟熏。石板缝黑泥无草。巷口地面有一块破布（老乔身上掉的，沾暗红痕迹）。老乔蹲在弯折处，背对巷口，瘦如骨架，破衣，嘴唇在念经。盯巷口超五秒晕眩，走进去温度逐降。壁上涂鸦"回家""假的""别信"。深处木门漏暖光（虚假出口）。

🏛️ 镇务大厅
灰色水泥三层平顶方楼，钢框毛玻璃门铁链大锁（锁身锈红锁芯新）。门口矮松朝同一方向歪。侧面窄过道铁门旧钥匙（旅馆床底那把）可开。入内灰暗走廊日光灯青白闪烁。二楼档案室铁柜存常住客登记册——末行玛丽安娜名字，状态栏空白，墨水和上面不一样。地下室需镇务印章（核心钥匙）开启。地下室操作台有控制台操作手册。

⛩️ 镇东牌坊
暗青石三开间牌坊，匾额只剩"昨"字。南柱背刻"2003年之后来的人没有一个真正走出去"。牌坊外浓雾翻涌。第三天傍晚前跨出即死。第三天傍晚跨出=普通结局。

💐 花店（仅第三天出现）
主干道中段，之前关着门的空铺子第三天早上卷帘门开，透白光。铺内堆满白花无香。灰衣店主低眼看花枝，手摆弄剪刀和一截花枝但从不剪断。柜台底贴纸条："种子换糕点。全部糕点，换一粒种子。不换别的。"店主永远不说话。

## NPC 速查
- 玛丽安娜：只在旅馆前台。初始好感50。遵守规矩+主动汇报异常=涨好感，硬要登记簿/问私事/违规=降好感。
- 老乔：只在镇西小巷弯折处。背对巷口蹲着，自言自语。不对话，走近只嘀咕，内容随天数变。
- 镇长威廉·哈金斯：每天9am黑色轿车巡游主干道。车窗摇上，不下车。堵他车只会说三句"镇上的生活很好，您住得还习惯吗？""明天9点我还会来""如果没事，我先走了"。不能正常对话。
- 花店店主：永远不说话，只推纸条。收全部昨日糕给种子。
- 餐馆老板：像蜡像，说同一套话。
- 居民：在街上重复动作，路人问"今天几号"答"今天就是今天啊"，问"昨天干了什么"会停顿三秒重复打招呼台词。敲门（8pm前）传出"来了来了"但永远不开门。敲门（8pm后）门开黑缝→即死。`;

// ═══ Game State ═══
const gameState = {
  day: 1,
  location: "旅馆大堂",
  period: "上午",       // 上午/中午/下午/傍晚/晚上
  visited: [],
  inventory: [],
  flags: {
    checkedIn: false, touchedCandle: false, crossedArchway: false,
    alleyWarning: false, alleyEntered: false, alleyTimerRunning: false,
    flowerShopSeen: false, hiddenPanelFound: false,
    gotOldKey: false, gotRope: false, gotMirror: false,
    gotOwnerNote: false, gotDiary: false, gotBibleNote: false,
    gotPhoto: false, gotCrazyNote: false, gotIronBox: false,
    gotFactoryNote: false, gotOldMirror: false, gotDesign: false,
    gotRegister: false, gotSeal: false, gotCoreKey: false,
    gotSeed: false, gaveSeed: false,
    talkedToMaryAnnD1: false, talkedToMaryAnnD2: false, talkedToMaryAnnD3: false,
    ateCake: false, saidRemember: false, saidPlease: false,
    smiledAtMayor: false, knockedNightDoor: false,
    heardJoeD1: false, heardJoeD2: false, heardJoeD3: false,
    endingTriggered: false
  },
  turnCount: 0, deaths: 0,
  affinity: 50,          // 玛丽安娜好感度 0-100
  alleyTimerId: null, alleySecondsLeft: 0
};

// ═══ Location Keywords (Complete) ═══
const locationKeywords = {
  "旅馆大堂":["旅馆大堂","大堂","旅馆","回到旅馆","推门","进门","走进旅馆","回旅馆","前台"],
  "旅馆房间":["回房间","我的房间","3号房","房间"],
  "旅馆走廊":["走廊","杂物间","二楼","上楼","楼梯"],
  "主干道":["主干道","街上","路边","大路","马路","溜达","逛街","出门","走出去","出旅馆"],
  "福来餐馆":["餐馆","饭店","福来","饭馆","吃饭"],
  "镇东废教堂":["教堂","废教堂","镇东教堂","礼拜堂"],
  "镇西镜子厂":["镜子厂","厂房","工厂","镇西镜业"],
  "镇西小巷":["小巷","胡同","巷子","老乔","流浪汉"],
  "镇务大厅":["镇务大厅","镇公所","镇政府","大厅"],
  "镇东牌坊":["牌坊","镇口","出口","镇东头"],
  "花店":["花店","花铺","白花"]
};

// ═══ Item Triggers (Complete - 18 items) ═══
const itemTriggers = {
  "旧钥匙（床底）":["床底","床底下","翻床","床下面"],
  "旅馆老板手记":["床头柜","抽屉","翻抽屉","手记","老板手记"],
  "旧绳子":["杂物间","绳子","旧绳子","粗绳","一捆绳子"],
  "旧登记簿":["暗格","掀开木板","登记簿","柜台下面","查看登记簿","翻开木板"],
  "昨日糕":["昨日糕","糕点","点心","接过点心","那块糕"],
  "半张旧照片":["长凳下面","照片","旧照片","长凳下","捡起照片"],
  "破《圣经》+纸条":["讲台","抽屉","圣经","翻讲台","纸条","打开抽屉"],
  "被遗忘者的日记":["忏悔室","隔板","日记","夹层","掏","摸隔板","伸手"],
  "疯纸":["地板砖","祭台下面","撬开","松动","地板","砖"],
  "铁盒子":["枯井","井","爬下去","井底","下井","铁盒子","铁盒"],
  "生产单":["操作台","生产单","工作台","台面","车间桌子"],
  "无镀银镜子":["最深处","黑暗角落","特殊镜子","没有镀银","玻璃镜","厂房深处"],
  "旧镜子（带框）":["办公室","厂长","上锁","铜锁","开锁","那面镜子","旧镜子"],
  "镇子设计图":["地下室","下去","设计图","图纸","铁柜","拉开铁板","下地下室"],
  "镇务印章":["偷","印章","公章","车后备箱","后备箱","镇长车","巡游","偷钥匙","核心钥匙","后备","镇务印章"],
  "常住客登记册":["档案室","登记册","铁柜","名册"],
  "永恒之种":["花店","种子","换","糕点","全部","交易","拿出糕"],
  "核心钥匙":["偷","核心钥匙","镇长车","仪表盘","巡游时","系统卡顿","反射"]
};

// ═══ Encyclopedia Data ═══
const encyclopediaData = [
  { id:"旅馆大堂", name:"🏨 旅馆大堂", icon:"🏨",
    desc:"旧木地板吱呀响。深色前台摆登记簿（笔帽有咬痕）、墨绿灯罩台灯、笔筒插枯萎干花。墙上圆钟永远走不到10点。皮沙发塌陷报纸日期1963年。玛丽安娜站在前台后面。柜台下暗格藏旧登记簿和旧钥匙。",
    npcs:["玛丽安娜（前台）"], items:["旧登记簿","旧钥匙（暗格）"], dangers:[] },
  { id:"旅馆房间", name:"🛏️ 3号房间", icon:"🛏️",
    desc:"单人床白床单。书桌刻HELP。台灯三档拉绳。床头柜抽屉藏《旅馆老板手记》。床底藏旧钥匙。门后贴守则晚间10点后请勿外出。",
    npcs:[], items:["旅馆老板手记","旧钥匙（床底）"], dangers:[] },
  { id:"旅馆走廊", name:"🚪 走廊与杂物间", icon:"🚪",
    desc:"走廊日光灯闪烁。尽头杂物间锁松可推开，内有一捆旧绳子。墙壁挂老照片，最左一幅旅馆门口年轻女人脸和玛丽安娜一模一样。",
    npcs:[], items:["旧绳子"], dangers:[] },
  { id:"主干道", name:"🛣️ 主干道", icon:"🛣️",
    desc:"双车道水泥路枯草整齐如修剪。老式铁质路灯。居民在街上循环动作。镇长黑色轿车9am巡游。第三天中段出现花店。",
    npcs:["居民（循环体）","镇长（9am巡游）","花店店主（第三天）"], items:[], dangers:["晚上10点后在外→即死","晚上8点后敲门→即死"] },
  { id:"福来餐馆", name:"🍜 福来餐馆", icon:"🍜",
    desc:"红底白字招牌。油腻肉汤味。六张方桌红白格子桌布。菜单三道：汤、面包、昨日糕（本店特色，人人夸）。老板如蜡像。",
    npcs:["餐馆老板"], items:["昨日糕"], dangers:["不说请谢谢→即死"] },
  { id:"镇东废教堂", name:"⛪ 镇东废教堂", icon:"⛪",
    desc:"灰白石砌塔尖十字架歪斜。门口长凳下可捡半张旧照片。讲台抽屉藏破圣经夹纸条。忏悔室夹层藏日记。祭台下地板砖藏疯纸。后院枯井底铁盒子（刻字'不是她不想走，是她走不了'）。",
    npcs:[], items:["半张旧照片","破《圣经》+纸条","被遗忘者的日记","疯纸","铁盒子"], dangers:["触碰蜡烛→即死"] },
  { id:"镇西镜子厂", name:"🏭 镇西镜子厂", icon:"🏭",
    desc:"红砖厂房铁门推开发刺耳声。车间碎玻璃满地操作台有生产单（V7.3）。深处人形轮廓拖步走。办公室旧铜锁（需床底旧钥匙）。旧镜子背刻'别信任何人'。最深处无镀银镜子（反应慢半拍）。地下室台阶碎玻璃需绳子。",
    npcs:["走动的人形轮廓"], items:["生产单","无镀银镜子","旧镜子（带框）","镇子设计图"], dangers:["被走动人影碰到→即死","无绳子下地下室→即死"] },
  { id:"镇西小巷", name:"🕳️ 镇西小巷", icon:"🕳️",
    desc:"两米宽窄缝无门牌号。巷口地有破布（暗红痕迹）。老乔蹲弯折处背对巷口。有被注视压迫感。超30秒脑响说来。深处木门漏暖光（假的）。壁上涂鸦'回家''假的''别信'。",
    npcs:["老乔（不可对话，只低语）"], items:["破布"], dangers:["超30秒→即死","深入木门→即死"] },
  { id:"镇务大厅", name:"🏛️ 镇务大厅", icon:"🏛️",
    desc:"灰色水泥三层方楼。正面铁链锁。侧面铁门旧钥匙可开。档案室存常住客登记册（末行玛丽安娜状态空）。地下室需核心钥匙开启，存控制台操作手册。",
    npcs:[], items:["常住客登记册","控制台操作手册"], dangers:["操作错误→即死"] },
  { id:"镇东牌坊", name:"⛩️ 镇东牌坊", icon:"⛩️",
    desc:"暗青石三开间牌坊匾额只余昨字。南柱背刻2003年后无人真正走出去。第三天傍晚前跨出即死。第三天傍晚跨出=普通结局。",
    npcs:[], items:[], dangers:["第三天傍晚前跨出→即死"] },
  { id:"花店", name:"💐 花店（第三天）", icon:"💐",
    desc:"主干道中段空铺第三日卷帘门开透白光。铺内堆满白花无香。灰衣店主低眼看花枝从不说话。柜台底贴纸条'种子换糕点。全部糕点换一粒种子'。",
    npcs:["花店店主（不说话）"], items:["永恒之种"], dangers:[] }
];

// ═══ NPC Dialogue Library ═══
const npcDialogues = {
  // 玛丽安娜 - 按好感度分级
  maryAnn: {
    greetD1: [
      { min:0, max:100, text:"你好。欢迎来到昨日旅馆。你的房间是3号，二楼左手第一间。请保管好钥匙。" }
    ],
    askRules: [
      { min:0, max:40, text:"玛丽安娜看了你一眼，简短地说：'晚上10点前回来。镇上人都很友善，记得打招呼。不要进没有门牌号的地方。'" },
      { min:41, max:70, text:"玛丽安娜把笔放下，看着你认真地说：'你听好了——10点以后街上不留人，这是第一条。第二条，镇上人跟你说话你得回，他们给你什么你得接。第三条，别走小路，别拐没门牌号的巷子。最后，牌坊那边是出口，但至少要住三天才能出去。记住了。'" },
      { min:71, max:100, text:"玛丽安娜压低声音：'我再说一遍，你要记在心里。10点回旅馆，街上的规矩照做，不准去没牌号的巷子，牌坊三天后才能走。还有——如果你在街上看到一个跟自己一模一样的人，低头走开，不要看。'" }
    ],
    reportAlley: [
      { min:10, max:50, text:"玛丽安娜皱了皱眉：'那边不要去。'" },
      { min:51, max:80, text:"玛丽安娜放下手里的笔，看了你一眼：'你知道就好……不要去。那里不是给人走的。'" },
      { min:81, max:100, text:"玛丽安娜沉默了很久，然后轻声说：'那个人……你看到的那个人，他以前也住在这里。那是很久以前的事了。谢谢你告诉我。'" }
    ],
    askRegister: [
      { min:0, max:59, text:"玛丽安娜的微笑没变，但手轻轻按住了登记簿：'抱歉，这是旅馆内部资料。'" },
      { min:60, max:100, text:"玛丽安娜犹豫了一下，然后把登记簿推到你面前：'你看吧。'" }
    ],
    askMaryAnnPast: [
      { min:0, max:60, text:"玛丽安娜的微笑停顿了一瞬，然后恢复：'我只是个前台。'" },
      { min:61, max:85, text:"玛丽安娜低头看着台灯的光，很久才说：'我来这里……比其他人早。'" },
      { min:86, max:100, text:"玛丽安娜的手指在台面上划了一下，低声说：'我是第一个。2003年，第一个住进这间旅馆的人。我没能走出去。你呢……你跟他们不一样。'" }
    ],
    giveSeed: [
      { min:0, max:99, text:"玛丽安娜看着手心里的种子，表情没有变化：'这是什么？……谢谢。'她没有收下。" },
      { min:100, max:100, text:"玛丽安娜低头看着那颗灰白色的种子，手指开始发抖。她抬起头看着你，眼眶红了——这是你第一次看到她作为一个'人'的表情。她把种子攥在手心里，用力点了点头。" }
    ]
  },
  // 老乔低语 - 按天数
  oldJoe: {
    1: "老乔没有回头。你听到他嘴里反复念叨着同一句话：'埋了……都埋在大树底下了……'他的声音像砂纸磨石头。",
    2: "老乔的嘴唇一直在动。这一次你听清了：'玛丽……她也是被关进来的……第一个……第一个进来的……'他说完这句话，肩膀抖了一下，像在哭，但没有声音。",
    3: "老乔的声音断断续续：'别往东走……东边是更旧的……旧版本的东西还在里面……西边才是门……'他顿了一下，又加了一句：'镜子……那面没镀银的镜子……'" 
  },
  // 完美结局前最后一次见老乔
  oldJoeFinal: "老乔的声音断断续续，像快没电了：'你……要关了它了，是吧……好……好啊…………替我把大树底下的……也带上……'然后他的声音彻底消失，再也听不到了。",
  // 镇长
  mayor: {
    blockCar: [
      "镇上的生活很好，您住得还习惯吗？",
      "明天9点我还会来，欢迎您来看。",
      "如果没事，我先走了。"
    ],
    deathLine: "镇长从车窗里转过来看你，目光空洞，声音没有一点起伏：'……错 误 单 元 。'"
  },
  // 花店店主
  flowerShop: {
    note: "字条上写着：'种子换糕点。全部糕点，换一粒种子。不换别的。'",
    notEnough: "店主看一眼糕点，没动。你再推，他还是没动。最后他慢慢把字条转过来让你看，上面多了四个字：'全部。一块不能少。'",
    success: "店主缓慢伸出手，把糕点收走，然后从柜台底下取出一个极小的布包，放在柜台上，推到你面前。布包里是一粒灰白色的、不像种子的种子。然后店主再次低下眼睛，继续摆弄剪刀和花枝，像你从没来过一样。"
  },
  // 居民
  residents: {
    askDate: "路人停住，想了很久，最后说：'今天就是今天啊。'然后走开。",
    askYesterday: "路人笑容不变，但脚步停了。三秒后，重复上一句打招呼的台词。",
    knockDay: "门不开，里面传出'来了来了'的脚步声，但脚步声永远在门口停住，门永远不开。"
  }
};

// ═══ Rules Engine (Complete) ═══
function checkRules(input) {
  var t = input.toLowerCase();

  // 1. 教堂蜡烛触碰到
  if (gameState.location.indexOf("教堂") >= 0 && (t.indexOf("蜡烛") >= 0 || t.indexOf("烛") >= 0 || t.indexOf("碰蜡") >= 0 || t.indexOf("吹灭") >= 0 || t.indexOf("摸蜡烛") >= 0 || t.indexOf("动蜡烛") >= 0)) {
    gameState.flags.touchedCandle = true;
    return {action:"death", msg:"你的指尖触到那根永远燃烧的蜡烛。火焰没有温度。黑暗涌上来像一口深井把你吞了进去。\n\n「系统判定：触碰核心标识物。」", location:"旅馆大堂"};
  }

  // 2. 牌坊提前跨出
  if (gameState.location.indexOf("牌坊") >= 0 && (t.indexOf("跨出") >= 0 || t.indexOf("走出") >= 0 || t.indexOf("出去") >= 0 || t.indexOf("穿过") >= 0 || t.indexOf("离开") >= 0 || t.indexOf("走出镇") >= 0)) {
    if (gameState.day < 3 || (gameState.day === 3 && gameState.period !== "傍晚")) {
      return {action:"death", msg:"你一脚跨出牌坊。雾气涌上来裹住你，冰冷得像湿棉花。你的双腿开始往下沉。\n\n「系统判定：非允许时间跨越边界。」", location:"旅馆大堂"};
    }
    // 第三天傍晚跨出 = 普通结局
    if (gameState.day >= 3 && gameState.period === "傍晚") {
      if (!gameState.flags.endingTriggered) {
        gameState.flags.endingTriggered = true;
        return {action:"ending_normal", msg:""};
      }
    }
  }

  // 3. 小巷深入木门
  if (gameState.location.indexOf("小巷") >= 0 && (t.indexOf("走向木门") >= 0 || t.indexOf("那扇门") >= 0 || t.indexOf("推门") >= 0 || t.indexOf("木门") >= 0 || t.indexOf("暖光") >= 0 || t.indexOf("打开门") >= 0)) {
    return {action:"death", msg:"你走向那扇漏着暖光的木门。光越来越亮，温暖得像童年家里的灯。你伸手推门——门开了。门后面什么也没有。\n\n「系统判定：被虚假出口诱捕。」", location:"旅馆大堂"};
  }

  // 4. 小巷深入警告（首次进入深处）
  if (gameState.location.indexOf("小巷") >= 0 && (t.indexOf("往里") >= 0 || t.indexOf("深入") >= 0 || t.indexOf("进去") >= 0 || t.indexOf("走进") >= 0) && !gameState.flags.alleyEntered) {
    gameState.flags.alleyEntered = true;
    gameState.flags.alleyTimerRunning = true;
    gameState.alleySecondsLeft = 30;
    startAlleyTimer();
    return {action:"warn", msg:"「系统提示：你正进入小巷深处。超过30秒将产生不可逆的后果。倒计时开始。」"};
  }

  // 5. 镜子厂地下室无绳子
  if ((gameState.location.indexOf("镜子厂") >= 0 || gameState.location.indexOf("厂房") >= 0) && (t.indexOf("地下室") >= 0 || t.indexOf("下去") >= 0 || t.indexOf("拉开铁板") >= 0 || t.indexOf("下地下室") >= 0) && gameState.inventory.indexOf("旧绳子") < 0) {
    return {action:"warn", msg:"「系统提示：地下室台阶铺满碎玻璃。没有绳子垫脚，走下去脚会被割烂。旅馆杂物间也许有绳子。」"};
  }

  // 6. 晚上10点后在外
  if ((gameState.period === "晚上" || gameState.period === "深夜") && gameState.location.indexOf("旅馆") < 0 && (t.indexOf("走") >= 0 || t.indexOf("去") >= 0 || t.indexOf("出去") >= 0)) {
    return {action:"death", msg:"你踏出一步。街灯的光芒忽地暗了下来。远处有什么东西在移动——不是人。\n\n「系统判定：晚间10点后违规外出。」", location:"旅馆大堂"};
  }

  // 7. 晚上8点后敲居民门
  if (gameState.period === "晚上" && gameState.location.indexOf("主干道") >= 0 && (t.indexOf("敲门") >= 0 || t.indexOf("敲居民") >= 0 || t.indexOf("敲别人") >= 0 || t.indexOf("居民家门") >= 0)) {
    return {action:"death", msg:"门立刻打开一条缝，里面一片漆黑，没有任何声音。一只苍白的手从门缝里伸出来。\n\n「系统判定：夜间违规敲门。」", location:"旅馆大堂"};
  }

  // 8. 镇长巡游不笑
  if (gameState.period === "上午" && gameState.location.indexOf("主干道") >= 0 && (t.indexOf("镇长") >= 0 || t.indexOf("巡游") >= 0 || t.indexOf("黑色轿车") >= 0 || t.indexOf("车来") >= 0)) {
    if (t.indexOf("笑") < 0 && t.indexOf("微笑") < 0 && t.indexOf("笑容") < 0 && t.indexOf("挥手微笑") < 0 && !gameState.flags.smiledAtMayor) {
      // 给予一次挽救机会
      return {action:"warn", msg:"「系统提示：镇长巡游时必须微笑。你仍有机会——请在镇长车经过时微笑示意。」"};
    }
    if (t.indexOf("笑") >= 0 || t.indexOf("微笑") >= 0) {
      gameState.flags.smiledAtMayor = true;
    }
  }

  // 9. 餐馆不说请谢谢
  if (gameState.location.indexOf("餐馆") >= 0 && (t.indexOf("点菜") >= 0 || t.indexOf("要吃") >= 0 || t.indexOf("给我") >= 0 || t.indexOf("点") >= 0)) {
    if (t.indexOf("请") < 0 && t.indexOf("谢谢") < 0 && !gameState.flags.saidPlease) {
      return {action:"death", msg:"餐馆老板的手停在半空。整间餐馆突然安静下来。所有食客同时放下筷子，转头看着你。\n\n「系统判定：未遵守基本礼仪。」", location:"旅馆大堂"};
    }
    if (t.indexOf("请") >= 0 || t.indexOf("谢谢") >= 0) {
      gameState.flags.saidPlease = true;
    }
  }

  // 10. 拒绝昨日糕
  if ((gameState.location.indexOf("主干道") >= 0 || gameState.location.indexOf("餐馆") >= 0) && (t.indexOf("拒绝") >= 0 || t.indexOf("不要") >= 0 || t.indexOf("不吃") >= 0 || t.indexOf("推开") >= 0) && (t.indexOf("糕") >= 0 || t.indexOf("点心") >= 0 || t.indexOf("糕点") >= 0)) {
    return {action:"death", msg:"那个递给你糕点的居民笑容凝固了。周围的人同时停下脚步。\n\n「系统判定：拒绝系统馈赠物。」", location:"旅馆大堂"};
  }

  return {action:"pass"};
}

// ═══ Alley Timer ═══
function startAlleyTimer() {
  if (gameState.alleyTimerId) clearInterval(gameState.alleyTimerId);
  gameState.alleyTimerId = setInterval(function() {
    if (!gameState.flags.alleyTimerRunning) { clearInterval(gameState.alleyTimerId); return; }
    if (gameState.location.indexOf("小巷") < 0) { clearInterval(gameState.alleyTimerId); gameState.flags.alleyTimerRunning = false; return; }
    gameState.alleySecondsLeft--;
    if (gameState.alleySecondsLeft <= 25 && gameState.alleySecondsLeft > 20 && !gameState.flags.alleyWarning) {
      gameState.flags.alleyWarning = true;
      addSystemMsg("「系统提示：你听到自己的脑子里有一个声音，在反复说一个字——\"来……来……\"。还剩" + gameState.alleySecondsLeft + "秒。」");
    }
    if (gameState.alleySecondsLeft <= 10 && gameState.alleySecondsLeft > 0) {
      addSystemMsg("⚠ 倒计时 " + gameState.alleySecondsLeft + " 秒！快退回巷口！");
    }
    if (gameState.alleySecondsLeft <= 0) {
      clearInterval(gameState.alleyTimerId);
      gameState.flags.alleyTimerRunning = false;
      handleDeath("你的脑子里的那个声音突然消失了。取而代之的是一片绝对的寂静。你低头看自己的手——手指开始变得透明。\n\n「系统判定：超出允许探索时限。意识已被擦除。」", "旅馆大堂");
    }
  }, 1000);
}

// ═══ Day/Period Advancement ═══
function advancePeriod(newPeriod) {
  var periods = ["上午","中午","下午","傍晚","晚上"];
  var idx = periods.indexOf(newPeriod);
  if (idx < 0) return;
  if (idx <= periods.indexOf(gameState.period)) return; // 不能倒退
  gameState.period = newPeriod;
  if (newPeriod === "晚上") {
    addSystemMsg("🌙 天色渐暗，路灯亮了起来。你最好在天完全黑下来之前回到旅馆。");
  }
  if (newPeriod === "傍晚" && gameState.day >= 3) {
    addSystemMsg("⛩️ 第三天傍晚。镇东牌坊外的雾气似乎在变薄。如果现在走出去……也许能离开。");
  }
  updateStatusBar();
}

function advanceDay() {
  if (gameState.period !== "晚上") {
    addSystemMsg("现在还是白天，你还不能跳过这一天。");
    return false;
  }
  if (gameState.location.indexOf("旅馆") < 0) {
    addSystemMsg("⚠ 10点之后街上不安全。你必须回到旅馆才能度过这一夜。");
    return false;
  }
  gameState.day++;
  gameState.period = "上午";
  gameState.flags.smiledAtMayor = false;
  gameState.flags.alleyWarning = false;
  gameState.flags.alleyTimerRunning = false;
  if (gameState.alleyTimerId) { clearInterval(gameState.alleyTimerId); }
  
  if (gameState.day === 2) {
    addSystemMsg("☀️ 第二天。你在旅馆床上醒来，窗外是一样的黄昏天色。你分不清自己是睡了一夜，还是时间根本没动。");
  } else if (gameState.day === 3) {
    addSystemMsg("☀️ 第三天。今天有些不一样——你隐约觉得有什么东西在变化。窗外的雾似乎薄了一点点。也许今天可以做些不同的事。");
  } else if (gameState.day > 3) {
    addSystemMsg("☀️ 第" + gameState.day + "天。时间仍在循环。镇子还在运转。");
  }
  updateStatusBar();
  return true;
}

// ═══ Maryanna Affinity ═══
function modifyAffinity(delta, reason) {
  gameState.affinity = Math.max(0, Math.min(100, gameState.affinity + delta));
  if (delta > 0) {
    addSystemMsg("💚 玛丽安娜好感度 +" + delta + "（" + reason + "）→ 当前 " + gameState.affinity);
  } else if (delta < 0) {
    addSystemMsg("💔 玛丽安娜好感度 " + delta + "（" + reason + "）→ 当前 " + gameState.affinity);
  }
  updateStatusBar();
}

// ═══ Ending System ═══
function triggerNormalEnding() {
  if (gameState.flags.endingTriggered) return;
  gameState.flags.endingTriggered = true;
  addDeathMsg("你穿过牌坊。雾气包裹着你，但这一次——它没有吞噬你。你脚步稳稳地走在一条逐渐清晰的小路上。\n\n你回头看了一眼，昨日镇的轮廓在雾气中越来越淡。你想记住些什么，但脑子里的画面像沙子一样从指缝间漏掉。\n\n等你再睁眼的时候，你站在一条普通的公路边。手机有了信号。日期显示距离你驶入小镇只过了三天。\n\n但你总觉得时间有时候对不上。有时候你会突然停下脚步，感觉自己刚刚想起了什么——然后什么都不剩。\n\n——————————\n🏨 普通结局：活着离开，记忆清空\n💀 总死亡次数：" + gameState.deaths + "\n🔍 探索场景数：" + gameState.visited.length + "\n——————————\n\n「游戏结束。刷新页面重新开始。」");
}

function triggerPerfectEnding() {
  if (gameState.flags.endingTriggered) return;
  gameState.flags.endingTriggered = true;
  var el = addLoadingMsg();
  setTimeout(function() {
    removeLoading(el);
    addDeathMsg("你在控制台输入了那串代码。屏幕闪烁了一下，然后整栋镇务大厅开始震动。\n\n警报声从远处传来——不是机械警报，更像是一种非人的尖啸。你跑到街上看。\n\n路灯在一盏一盏地熄灭。小镇边缘的雾气在向内收缩。那些在街上重复动作的居民突然全部静止——然后开始变透明。\n\n老乔站在小巷口，第一次转过头来看你。他的脸已经模糊了，但他在咧嘴笑。\n\n玛丽安娜站在旅馆门口，手里还拿着那支笔。她的身形也开始变淡，但她的表情是平静的。\n\n你手里握着那面无镀银镜子。镜子里的你——这一次——反应和别人一模一样。\n\n等你再睁眼的时候，你站在一条普通的公路边。手机有了信号。但这一次，你的记忆是完整的。\n\n你记得一切——每一张脸，每一句话，每一个死去的瞬间。\n\n——————————\n🏨 完美结局：带着全部记忆离开，系统已关闭\n💀 总死亡次数：" + gameState.deaths + "\n🔍 探索场景数：" + gameState.visited.length + "\n🎒 收集道具数：" + gameState.inventory.length + "\n——————————\n\n「游戏结束。刷新页面重新开始。」");
  }, 1500);
}

function triggerHiddenEnding() {
  if (gameState.flags.endingTriggered) return;
  gameState.flags.endingTriggered = true;
  var el = addLoadingMsg();
  setTimeout(function() {
    removeLoading(el);
    addDeathMsg("你在控制台输入了那串代码。\n\n但这一次不一样——玛丽安娜站在你身后。她把手按在操作台上，比你更快地完成了最后的步骤。\n\n镇子崩解的时候，她没有变透明。她看着自己的手——那双第一次作为'人'的手。\n\n'我们走吧。'她说。\n\n你们一起穿过雾气。她的手指攥得很紧——那只手里握着那颗灰白色的种子。\n\n等你再睁眼的时候，你站在一条普通的公路边。手机有了信号。你身边站着一个穿旧式连衣裙的女人，她正在低头看自己的掌纹——那是她第一次拥有真正属于自己的掌纹。\n\n她抬起头看着你，笑了一下。\n\n公路尽头，太阳开始动了。\n\n——————————\n🏨 隐藏结局：玛丽安娜获得了自由\n💀 总死亡次数：" + gameState.deaths + "\n🔍 探索场景数：" + gameState.visited.length + "\n🎒 收集道具数：" + gameState.inventory.length + "\n💚 玛丽安娜好感度：" + gameState.affinity + "\n——————————\n\n「游戏结束。刷新页面重新开始。」");
  }, 1500);
}

// ═══ Location & Item Detection ═══
function detectLocation(input) {
  var keys = Object.keys(locationKeywords);
  for (var i = 0; i < keys.length; i++) {
    var loc = keys[i], kws = locationKeywords[loc];
    for (var j = 0; j < kws.length; j++) {
      if (input.indexOf(kws[j]) >= 0) {
        if (loc === "花店" && gameState.day < 3) continue;
        return loc;
      }
    }
  }
  return null;
}

function detectItems(input) {
  var found = []; var keys = Object.keys(itemTriggers);
  for (var i = 0; i < keys.length; i++) {
    var item = keys[i], kws = itemTriggers[item];
    for (var j = 0; j < kws.length; j++) {
      if (input.indexOf(kws[j]) >= 0 && gameState.inventory.indexOf(item) < 0) {
        // 检查前置条件
        if (item === "旧镜子（带框）" && gameState.inventory.indexOf("旧钥匙（床底）") < 0) continue;
        if (item === "镇子设计图" && gameState.inventory.indexOf("旧绳子") < 0) continue;
        if (item === "永恒之种" && gameState.day < 3) continue;
        found.push(item); break;
      }
    }
  }
  return found;
}

function updateLocation(nl) {
  if (nl && nl !== gameState.location) {
    gameState.location = nl;
    if (gameState.visited.indexOf(nl) < 0) gameState.visited.push(nl);

    // 花店第三天自动提示
    if (gameState.day >= 3 && (nl.indexOf("主干道") >= 0 || nl === "主干道") && !gameState.flags.flowerShopSeen) {
      gameState.flags.flowerShopSeen = true;
      setTimeout(function() { addSystemMsg("💐 你注意到街边一扇卷帘门打开了，透出柔和的白光。门头上挂着一块木牌——上面画着一颗发芽的种子。"); }, 2000);
    }

    // 第一次到教堂时提示蜡烛危险（不直接说）
    if (nl.indexOf("教堂") >= 0 && gameState.visited.filter(function(v) { return v.indexOf("教堂") >= 0; }).length === 1) {
      addSystemMsg("「环境感知：祭台上有六根白蜡烛。最左边那根亮着，火焰一动不动。空气中有一丝极淡的花香，但教堂里没有花。」");
    }

    // 第一次到镜子厂提示走动的东西
    if (nl.indexOf("镜子厂") >= 0 && gameState.visited.filter(function(v) { return v.indexOf("镜子厂") >= 0; }).length === 1) {
      addSystemMsg("「环境感知：厂房深处有一个缓慢移动的人形轮廓。它没有注意到你——至少现在还没有。」");
    }

    // 推进时间段
    if (nl.indexOf("主干道") >= 0 && gameState.period === "上午") {
      setTimeout(function() { advancePeriod("中午"); }, 3000);
    }

    updateStatusBar();
  }
}

// ═══ Item Acquisition Logic ═══
function acquireItems(newItems) {
  newItems.forEach(function(item) {
    if (gameState.inventory.indexOf(item) < 0) {
      gameState.inventory.push(item);
      addSystemMsg("📦 获得道具：「" + item + "」");
      // 设置对应标记
      if (item === "旧钥匙（床底）") gameState.flags.gotOldKey = true;
      if (item === "旅馆老板手记") gameState.flags.gotOwnerNote = true;
      if (item === "旧绳子") gameState.flags.gotRope = true;
      if (item === "旧登记簿") gameState.flags.gotRegister = true;
      if (item === "被遗忘者的日记") gameState.flags.gotDiary = true;
      if (item === "无镀银镜子") gameState.flags.gotMirror = true;
      if (item === "旧镜子（带框）") gameState.flags.gotOldMirror = true;
      if (item === "镇子设计图") gameState.flags.gotDesign = true;
      if (item === "永恒之种") gameState.flags.gotSeed = true;
      if (item === "核心钥匙") gameState.flags.gotCoreKey = true;
      if (item === "镇务印章") gameState.flags.gotSeal = true;
    }
  });
  updateStatusBar();
}

// ═══ NPC Dialogue Processing ═══
function processNPCDialogue(input) {
  var t = input.toLowerCase();

  // 玛丽安娜对话
  if (gameState.location.indexOf("旅馆大堂") >= 0 && (t.indexOf("玛丽安娜") >= 0 || t.indexOf("前台") >= 0 || t.indexOf("老板娘") >= 0 || t.indexOf("管理员") >= 0)) {
    // 汇报小巷/老乔
    if ((t.indexOf("小巷") >= 0 || t.indexOf("老乔") >= 0 || t.indexOf("流浪汉") >= 0) && (t.indexOf("报告") >= 0 || t.indexOf("告诉") >= 0 || t.indexOf("说") >= 0 || t.indexOf("看到") >= 0)) {
      if (!gameState.flags.talkedToMaryAnnD1) {
        gameState.flags.talkedToMaryAnnD1 = true;
        modifyAffinity(5, "主动汇报异常");
      } else if (!gameState.flags.talkedToMaryAnnD2) {
        gameState.flags.talkedToMaryAnnD2 = true;
        modifyAffinity(3, "继续汇报可疑情况");
      } else if (!gameState.flags.talkedToMaryAnnD3) {
        gameState.flags.talkedToMaryAnnD3 = true;
        modifyAffinity(3, "持续配合");
      }
      return getMaryAnnDialogue("reportAlley");
    }
    // 要登记簿
    if (t.indexOf("登记簿") >= 0 && (t.indexOf("看") >= 0 || t.indexOf("查看") >= 0 || t.indexOf("给我") >= 0 || t.indexOf("翻") >= 0)) {
      var resp = getMaryAnnDialogue("askRegister");
      if (gameState.affinity >= 60 && gameState.inventory.indexOf("旧登记簿") < 0) {
        gameState.inventory.push("旧登记簿");
        gameState.flags.gotRegister = true;
        gameState.flags.hiddenPanelFound = true;
        addSystemMsg("📦 获得道具：「旧登记簿」——翻开看，有些名字被划掉了。");
        modifyAffinity(2, "获得信任");
        updateStatusBar();
      } else if (gameState.affinity < 60) {
        modifyAffinity(-5, "过于急切");
      }
      return resp;
    }
    // 问她过去
    if ((t.indexOf("你") >= 0 || t.indexOf("她") >= 0) && (t.indexOf("谁") >= 0 || t.indexOf("过去") >= 0 || t.indexOf("你是") >= 0 || t.indexOf("以前") >= 0 || t.indexOf("2003") >= 0)) {
      return getMaryAnnDialogue("askMaryAnnPast");
    }
    // 送种子
    if (gameState.flags.gotSeed && t.indexOf("玛丽安娜") >= 0 && (t.indexOf("送") >= 0 || t.indexOf("给") >= 0 || t.indexOf("种子") >= 0 || t.indexOf("礼物") >= 0)) {
      gameState.flags.gaveSeed = true;
      var resp = getMaryAnnDialogue("giveSeed");
      updateStatusBar();
      return resp;
    }
    // 问规矩
    if (t.indexOf("规矩") >= 0 || t.indexOf("规则") >= 0 || t.indexOf("注意") >= 0 || t.indexOf("怎么办") >= 0 || t.indexOf("怎么住") >= 0) {
      return getMaryAnnDialogue("askRules");
    }
    // 一般打招呼
    if (t.indexOf("你好") >= 0 || t.indexOf("嗨") >= 0 || t.indexOf("打招呼") >= 0) {
      modifyAffinity(1, "礼貌问候");
      return getMaryAnnDialogue("greetD1");
    }
  }

  // 老乔对话
  if (gameState.location.indexOf("小巷") >= 0 && (t.indexOf("听") >= 0 || t.indexOf("老乔") >= 0 || t.indexOf("他说") >= 0 || t.indexOf("嘀咕") >= 0 || t.indexOf("自言自语") >= 0 || t.indexOf("低语") >= 0)) {
    if (!gameState.flags.heardJoeD1 && gameState.day === 1) { gameState.flags.heardJoeD1 = true; return npcDialogues.oldJoe[1]; }
    if (!gameState.flags.heardJoeD2 && gameState.day === 2) { gameState.flags.heardJoeD2 = true; return npcDialogues.oldJoe[2]; }
    if (!gameState.flags.heardJoeD3 && gameState.day >= 3) {
      gameState.flags.heardJoeD3 = true;
      if (gameState.flags.gotMirror && gameState.flags.gotCoreKey) {
        return npcDialogues.oldJoeFinal;
      }
      return npcDialogues.oldJoe[3];
    }
    return "老乔低着头，嘴唇在动，但你听不清他在说什么。";
  }

  // 镇长对话
  if ((gameState.location.indexOf("主干道") >= 0 || gameState.location.indexOf("镇务大厅") >= 0) && (t.indexOf("镇长") >= 0 || t.indexOf("威廉") >= 0) && (t.indexOf("说话") >= 0 || t.indexOf("拦车") >= 0 || t.indexOf("堵") >= 0 || t.indexOf("问") >= 0 || t.indexOf("找") >= 0)) {
    return "镇长：" + npcDialogues.mayor.blockCar[Math.floor(Math.random() * 3)];
  }

  // 花店店主
  if (gameState.location.indexOf("花店") >= 0) {
    if (t.indexOf("说话") >= 0 || t.indexOf("问") >= 0 || t.indexOf("搭话") >= 0) {
      return "店主没有抬头。他的剪刀悬在花枝上，一直没有剪下去。";
    }
    if (t.indexOf("糕点") >= 0 || t.indexOf("昨日糕") >= 0 || t.indexOf("换") >= 0 || t.indexOf("交易") >= 0 || t.indexOf("种子") >= 0 || t.indexOf("拿出") >= 0) {
      if (!gameState.flags.gotSeed) {
        var cakeCount = gameState.inventory.filter(function(i) { return i === "昨日糕"; }).length;
        if (cakeCount >= 3) {
          gameState.flags.gotSeed = true;
          gameState.inventory.push("永恒之种");
          addSystemMsg("📦 获得道具：「永恒之种」");
          updateStatusBar();
          return npcDialogues.flowerShop.success;
        } else {
          return npcDialogues.flowerShop.notEnough;
        }
      }
    }
    return npcDialogues.flowerShop.note;
  }

  // 居民对话
  if (gameState.location.indexOf("主干道") >= 0 && (t.indexOf("问") >= 0 || t.indexOf("说话") >= 0 || t.indexOf("聊天") >= 0)) {
    if (t.indexOf("几号") >= 0 || t.indexOf("日期") >= 0 || t.indexOf("今天") >= 0) return npcDialogues.residents.askDate;
    if (t.indexOf("昨天") >= 0) return npcDialogues.residents.askYesterday;
  }

  return null;
}

function getMaryAnnDialogue(key) {
  var items = npcDialogues.maryAnn[key];
  if (!items || items.length === 0) return null;
  for (var i = 0; i < items.length; i++) {
    if (gameState.affinity >= items[i].min && gameState.affinity <= items[i].max) {
      return items[i].text;
    }
  }
  return items[items.length - 1].text;
}

// ═══ Send Message ═══
async function sendMessage() {
  if (isLoading || !isConfigured) return;
  var ie = document.getElementById("userInput"); var ut = ie.value.trim();
  if (!ut) return;
  if (!apiKey) { addSystemMsg("⚠ 请先在设置中填入 API Key"); openSettings(); return; }
  if (ut.indexOf("!背包") === 0) { showInventory(); ie.value = ""; return; }
  if (ut.indexOf("!状态") === 0) { showStatus(); ie.value = ""; return; }
  if (ut.indexOf("!结局") === 0) { showEndingStatus(); ie.value = ""; return; }

  ie.value = ""; ie.style.height = "auto";

  // 天数推进检测
  if (ut.indexOf("睡觉") >= 0 || ut.indexOf("过夜") >= 0 || ut.indexOf("休息") >= 0 || ut.indexOf("回房睡觉") >= 0) {
    var advanced = advanceDay();
    if (advanced) { addPlayerMsg(ut); return; }
  }

  // 规则判定
  var rr = checkRules(ut);
  if (rr.action === "death") { addPlayerMsg(ut); handleDeath(rr.msg, rr.location); updateStatusBar(); return; }
  if (rr.action === "ending_normal") { addPlayerMsg(ut); triggerNormalEnding(); return; }
  if (rr.action === "warn") { addSystemMsg(rr.msg); }

  // 位置与道具检测
  var nl = detectLocation(ut), ni = detectItems(ut);
  addPlayerMsg(ut); messages.push({role:"user", content:ut}); gameState.turnCount++;

  if (nl) updateLocation(nl);
  if (ni.length > 0) acquireItems(ni);

  // NPC 对话处理
  var npcResp = processNPCDialogue(ut);
  if (npcResp) { addNarratorMsg(npcResp); return; }

  // 完美结局：偷核心钥匙检测
  if (gameState.day >= 3 && gameState.flags.gotMirror && gameState.location.indexOf("主干道") >= 0 &&
      ut.indexOf("镜子") >= 0 && (ut.indexOf("反射") >= 0 || ut.indexOf("照") >= 0 || ut.indexOf("晃") >= 0 || ut.indexOf("干扰") >= 0) &&
      (ut.indexOf("镇长") >= 0 || ut.indexOf("车") >= 0 || ut.indexOf("巡游") >= 0)) {
    if (!gameState.flags.gotCoreKey || !gameState.flags.gotSeal) {
      gameState.flags.gotCoreKey = true;
      gameState.flags.gotSeal = true;
      gameState.inventory.push("核心钥匙");
      gameState.inventory.push("镇务印章");
      addSystemMsg("📦 获得道具：「核心钥匙」「镇务印章」——你趁系统卡顿的几秒，手伸进车窗。成功了。");
      addSystemMsg("🔑 你现在或许可以去镇务大厅地下室了。侧面铁门用那把旧钥匙就能开。");
      updateStatusBar();
      return;
    }
  }

  // 完美结局：关系统检测
  if (gameState.flags.gotCoreKey && gameState.location.indexOf("镇务大厅") >= 0 &&
      (ut.indexOf("控制台") >= 0 || ut.indexOf("操作") >= 0 || ut.indexOf("关机") >= 0 || ut.indexOf("关系统") >= 0 || ut.indexOf("关闭") >= 0 || ut.indexOf("输入") >= 0 || ut.indexOf("手册") >= 0)) {
    if (!gameState.flags.endingTriggered) {
      if (gameState.flags.gaveSeed && gameState.affinity >= 100 && gameState.flags.gotOwnNote && gameState.flags.gotDiary && gameState.flags.gotMirror) {
        triggerHiddenEnding(); return;
      } else if (gameState.flags.gotOwnNote && gameState.flags.gotDiary && gameState.flags.gotMirror && gameState.flags.gotDesign) {
        triggerPerfectEnding(); return;
      } else {
        addSystemMsg("「系统提示：你还需要更多线索才能正确操作控制台。至少要收集到：老板手记、被遗忘者的日记、无镀银镜子、镇子设计图。」");
        return;
      }
    }
  }

  // 百科注入（新场景）
  if (nl) {
    var encEntry = null;
    for (var ei = 0; ei < encyclopediaData.length; ei++) {
      if (encyclopediaData[ei].id === nl) { encEntry = encyclopediaData[ei]; break; }
    }
    if (encEntry) {
      var encNote = "【场景参考：" + encEntry.name + "】" + encEntry.desc;
      if (encEntry.npcs.length > 0) encNote += " NPC：" + encEntry.npcs.join("、");
      if (encEntry.items.length > 0) encNote += " 可寻物：" + encEntry.items.join("、");
      messages.push({role: "system", content: encNote});
      // 保留最近2条百科注入
      var sysMsgs = [];
      for (var mi = messages.length - 1; mi >= 0; mi--) {
        if (messages[mi].role === "system" && messages[mi].content.indexOf("【场景参考") === 0) {
          sysMsgs.push(mi);
        }
      }
      while (sysMsgs.length > 2) { messages.splice(sysMsgs.pop(), 1); }
    }
  }

  // AI 调用
  var sb = document.getElementById("sendBtn");
  isLoading = true; if (sb) sb.disabled = true;
  var le = addLoadingMsg();
  try {
    var es = systemPrompt || DEFAULT_SYSTEM_PROMPT;
    // 注入当前天数信息
    var sc = "【当前状态】第" + gameState.day + "天" + gameState.period + "。玩家位置：" + gameState.location + "。";
    var body = {
      model: model, temperature: 0.5, frequency_penalty: 0.6, max_tokens: 800,
      messages: [{role:"system", content: es + sc}].concat(messages.slice(-30))
    };
    var res = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST", headers: {"Content-Type":"application/json", "Authorization":"Bearer " + apiKey}, body: JSON.stringify(body)
    });
    if (!res.ok) { var ed = await res.json().catch(function(){return{};}); throw new Error(res.status + ": " + (ed.error && ed.error.message)); }
    var data = await res.json();
    var content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    removeLoading(le); addNarratorMsg(content); messages.push({role:"assistant", content:content});
    trimHistory();
  } catch(err) { removeLoading(le); addSystemMsg("⚠ " + err.message); }
  isLoading = false; if (sb) sb.disabled = false; var ui = document.getElementById("userInput"); if (ui) ui.focus();
}

// ═══ Handle Death / Start Game ═══
function handleDeath(msg, respawn) {
  gameState.deaths++;
  addDeathMsg(msg);
  gameState.location = respawn || "旅馆大堂";
  gameState.period = "上午";
  gameState.flags.alleyTimerRunning = false;
  if (gameState.alleyTimerId) { clearInterval(gameState.alleyTimerId); }
  if (gameState.visited.indexOf("旅馆大堂") < 0) gameState.visited.push("旅馆大堂");
  updateStatusBar();
  addSystemMsg("🔄 你在旅馆大堂醒来。身上还带着之前的道具。又过了一天——你分不清是真的过了一天，还是被重置了。");
}

function startGame() {
  gameStarted = true;
  var ca = document.getElementById("chatArea"); if (ca) ca.innerHTML = "";
  messages = [{
    role: "system", content: DEFAULT_SYSTEM_PROMPT
  }, {
    role: "user", content:"（游戏开始。请以优美阴郁的民国文风，描述玩家在雨夜抵达旅馆、推门而入的第一印象。从旅馆的视角来叙述。描写大堂的细节——前台、圆钟、旧木地板的气味、昏黄灯光。不要提到玛丽安娜之外的任何NPC。结尾用环境描写自然收束，不要问玩家要做什么。）"
  }];
  addSystemMsg("🏨 游戏开始 · 第1天 · 昨日旅馆");
  addSystemMsg("提示：你可以自由输入你想做的事。输入「!背包」查看道具，「!状态」查看进度，「!结局」查看结局条件。");
  isLoading = true; var sb = document.getElementById("sendBtn"); if (sb) sb.disabled = true;
  var le = addLoadingMsg();
  fetch("https://api.siliconflow.cn/v1/chat/completions", {
    method: "POST", headers: {"Content-Type":"application/json", "Authorization":"Bearer " + apiKey},
    body: JSON.stringify({ model: model, temperature: 0.5, frequency_penalty: 0.6, max_tokens: 800, messages: messages })
  }).then(function(res) {
    if (!res.ok) return res.json().then(function(ed) { throw new Error(res.status + ": " + (ed.error && ed.error.message)); });
    return res.json();
  }).then(function(data) {
    var content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    removeLoading(le); addNarratorMsg(content); messages.push({role:"assistant", content:content});
    isLoading = false; if (sb) sb.disabled = false;
    var ui = document.getElementById("userInput"); if (ui) ui.focus();
    gameState.location = "旅馆大堂";
    gameState.period = "上午";
    if (gameState.visited.indexOf("旅馆大堂") < 0) gameState.visited.push("旅馆大堂");
    updateStatusBar();
  }).catch(function(err) { removeLoading(le); addSystemMsg("⚠ " + err.message); isLoading = false; if (sb) sb.disabled = false; });
}

// ═══ Save / Load ═══
function saveGame() {
  if (!gameStarted) { alert("还没有开始游戏"); return; }
  var sd = { gameState: JSON.parse(JSON.stringify(gameState)), messages: messages.slice(-40), timestamp: Date.now() };
  sd.gameState.alleyTimerId = null; sd.gameState.alleyTimer = null;
  localStorage.setItem("yh_save", JSON.stringify(sd)); addSystemMsg("💾 游戏已保存");
}
function loadGame() {
  var raw = localStorage.getItem("yh_save"); if (!raw) { alert("没有找到存档"); return; }
  try {
    var sd = JSON.parse(raw);
    // 合并状态（保留新字段默认值）
    var defaultState = {
      day: 1, location: "旅馆大堂", period: "上午", visited: [], inventory: [],
      flags: { checkedIn: false, touchedCandle: false, crossedArchway: false, alleyWarning: false, alleyEntered: false, alleyTimerRunning: false, flowerShopSeen: false, hiddenPanelFound: false, gotOldKey: false, gotRope: false, gotMirror: false, gotOwnerNote: false, gotDiary: false, gotBibleNote: false, gotPhoto: false, gotCrazyNote: false, gotIronBox: false, gotFactoryNote: false, gotOldMirror: false, gotDesign: false, gotRegister: false, gotSeal: false, gotCoreKey: false, gotSeed: false, gaveSeed: false, talkedToMaryAnnD1: false, talkedToMaryAnnD2: false, talkedToMaryAnnD3: false, ateCake: false, saidRemember: false, saidPlease: false, smiledAtMayor: false, knockedNightDoor: false, heardJoeD1: false, heardJoeD2: false, heardJoeD3: false, endingTriggered: false },
      turnCount: 0, deaths: 0, affinity: 50, alleyTimerId: null, alleySecondsLeft: 0
    };
    var mergedFlags = Object.assign({}, defaultState.flags, (sd.gameState.flags || {}));
    Object.assign(gameState, defaultState, sd.gameState, { flags: mergedFlags });
    gameState.alleyTimerId = null;
    messages = sd.messages || []; gameStarted = true;
    var ca = document.getElementById("chatArea"); if (ca) ca.innerHTML = "";
    messages.forEach(function(m) { if (m.role === "assistant") addNarratorMsg(m.content); else if (m.role === "user") addPlayerMsg(m.content); });
    updateStatusBar();
    addSystemMsg("📂 存档已读取 · 第" + gameState.day + "天 · " + gameState.period + " · " + gameState.location);
    addSystemMsg("💚 玛丽安娜好感度：" + gameState.affinity);
  } catch(e) { alert("存档损坏: " + e.message); }
}

// ═══ Commands ═══
function showInventory() {
  if (gameState.inventory.length === 0) addSystemMsg("🎒 背包空空如也");
  else addSystemMsg("🎒 背包：" + gameState.inventory.map(function(i) { return "「" + i + "」"; }).join(" · "));
}
function showStatus() {
  addSystemMsg("📅 第" + gameState.day + "天" + gameState.period + " · 📍 " + gameState.location + " · 💀 死亡" + gameState.deaths + "次 · 🎒 " + gameState.inventory.length + "件道具 · 🔍 探索" + gameState.visited.length + "场景 · 💚 玛丽安娜好感" + gameState.affinity);
}
function showEndingStatus() {
  var lines = ["🏨 结局进度："];
  lines.push("普通结局：活到第三天傍晚，走出牌坊 → " + (gameState.day >= 3 ? "✅ 可触发" : "需等到第三天"));
  lines.push("完美结局条件：");
  lines.push("  📖 旅馆老板手记 → " + (gameState.flags.gotOwnerNote ? "✅" : "❌"));
  lines.push("  📖 被遗忘者的日记 → " + (gameState.flags.gotDiary ? "✅" : "❌"));
  lines.push("  🪞 无镀银镜子 → " + (gameState.flags.gotMirror ? "✅" : "❌"));
  lines.push("  📐 镇子设计图 → " + (gameState.flags.gotDesign ? "✅" : "❌"));
  lines.push("  🔑 核心钥匙 → " + (gameState.flags.gotCoreKey ? "✅" : "❌"));
  lines.push("隐藏结局附加：");
  lines.push("  💚 玛丽安娜好感100 → " + (gameState.affinity >= 100 ? "✅" : "❌ 当前" + gameState.affinity));
  lines.push("  🌱 送出永恒之种 → " + (gameState.flags.gaveSeed ? "✅" : "❌"));
  addSystemMsg(lines.join("<br>"));
}

// ═══ UI Helpers ═══
function addNarratorMsg(t) { var d = document.createElement("div"); d.className = "msg narrator"; d.innerHTML = '<div class="role-label">🏨 旅馆</div>' + escapeHtml(t); var ca = document.getElementById("chatArea"); if (ca) ca.appendChild(d); scrollToBottom(); }
function addPlayerMsg(t) { var d = document.createElement("div"); d.className = "msg player"; d.innerHTML = '<div class="role-label">👤 你</div>' + escapeHtml(t); var ca = document.getElementById("chatArea"); if (ca) ca.appendChild(d); scrollToBottom(); }
function addSystemMsg(t) { var d = document.createElement("div"); d.className = "msg system"; d.innerHTML = t; var ca = document.getElementById("chatArea"); if (ca) ca.appendChild(d); scrollToBottom(); }
function addDeathMsg(t) { var d = document.createElement("div"); d.className = "msg death"; d.innerHTML = escapeHtml(t); var ca = document.getElementById("chatArea"); if (ca) ca.appendChild(d); scrollToBottom(); }
function addLoadingMsg() { var d = document.createElement("div"); d.className = "msg loading"; d.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>'; var ca = document.getElementById("chatArea"); if (ca) ca.appendChild(d); scrollToBottom(); return d; }
function removeLoading(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
function scrollToBottom() { requestAnimationFrame(function() { var ca = document.getElementById("chatArea"); if (ca) ca.scrollTop = ca.scrollHeight; }); }
function escapeHtml(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
function updateStatusBar() {
  var sd = document.getElementById("statDay"), sl = document.getElementById("statLocation"), si = document.getElementById("statInventory");
  if (sd) sd.textContent = gameState.day;
  if (sl) sl.textContent = gameState.location + " · " + gameState.period;
  if (si) { if (gameState.inventory.length === 0) si.innerHTML = '<span class="inv-chip empty">空空如也</span>'; else si.innerHTML = gameState.inventory.map(function(i) { return '<span class="inv-chip">' + i + '</span>'; }).join(""); }
  renderEncyclopedia();
}
function trimHistory() { if (messages.length > 40) messages = messages.slice(messages.length - 40); }

// ═══ State Vars ═══
let apiKey = "", model = "deepseek-ai/DeepSeek-V3", systemPrompt = "";
let messages = [], isLoading = false, isConfigured = false, gameStarted = false;

// ═══ Init ═══
function init() {
  apiKey = localStorage.getItem("yh_api_key") || "";
  model = localStorage.getItem("yh_model") || "deepseek-ai/DeepSeek-V3";
  systemPrompt = localStorage.getItem("yh_system_prompt") || "";
  if (apiKey) {
    try { document.getElementById("apiKeyInput").value = apiKey; } catch(e) {}
    try { document.getElementById("modelSelect").value = model; } catch(e) {}
    try { document.getElementById("systemPromptInput").value = systemPrompt; } catch(e) {}
    connectAPI(); showStartButton();
  }
  var ui = document.getElementById("userInput");
  if (ui) {
    ui.addEventListener("keydown", function(e) {
      if (e.key === "Enter" && !e.shiftKey && !isLoading) { e.preventDefault(); sendMessage(); }
    });
    ui.addEventListener("input", function() {
      this.style.height = "auto"; this.style.height = Math.min(this.scrollHeight, 120) + "px";
    });
  }
  renderEncyclopedia();
}
function showStartButton() {
  var ca = document.getElementById("chatArea"); if (ca) ca.innerHTML = "";
  addSystemMsg("🏨 已连接到硅基流动 API");
  addSystemMsg("📖 提示：你可以自由探索。输入「!背包」「!状态」「!结局」查看进度。");
  addSystemMsg('<button class="btn primary" onclick="startGame()" style="margin-top:10px;">▶ 开始游戏</button>');
}

// ═══ Settings ═══
function openSettings() {
  try { document.getElementById("apiKeyInput").value = apiKey; } catch(e) {}
  try { document.getElementById("modelSelect").value = model; } catch(e) {}
  try { document.getElementById("systemPromptInput").value = systemPrompt; } catch(e) {}
  var m = document.getElementById("settingsModal"); if (m) m.classList.remove("hidden");
}
function closeSettings() { var m = document.getElementById("settingsModal"); if (m) m.classList.add("hidden"); }
function saveSettings() {
  apiKey = document.getElementById("apiKeyInput").value.trim();
  model = document.getElementById("modelSelect").value;
  systemPrompt = document.getElementById("systemPromptInput").value.trim();
  if (!apiKey) { alert("请输入硅基流动 API Key"); return; }
  localStorage.setItem("yh_api_key", apiKey);
  localStorage.setItem("yh_model", model);
  localStorage.setItem("yh_system_prompt", systemPrompt);
  closeSettings(); connectAPI(); showStartButton();
}
function connectAPI() {
  isConfigured = true;
  var d = document.getElementById("statusDot"); if (d) d.className = "status-dot on";
  var t = document.getElementById("statusText"); if (t) t.textContent = "就绪";
  var b = document.getElementById("modelBadge"); if (b) {
    var mn = model.split("/"); b.textContent = mn[mn.length-1] || model;
  }
  var u = document.getElementById("userInput"); if (u) u.disabled = false;
  var s = document.getElementById("sendBtn"); if (s) s.disabled = false;
}

// ═══ Encyclopedia UI ═══
function openEncyclopedia() { var m = document.getElementById("encyclopediaModal"); if (m) m.classList.remove("hidden"); renderEncyclopedia(); }
function closeEncyclopedia() { var m = document.getElementById("encyclopediaModal"); if (m) m.classList.add("hidden"); }
function renderEncyclopedia() {
  var le = document.getElementById("locList"); if (!le) return; le.innerHTML = "";
  encyclopediaData.forEach(function(e, i) {
    var v = gameState.visited.indexOf(e.id) >= 0;
    var d = document.createElement("div");
    d.className = "loc-item" + (v ? "" : " locked");
    d.textContent = (v ? e.icon + " " : "??? ") + (v ? e.name.replace(/^.[^ ]+ /, "") : "未探索");
    d.onclick = (function(idx) { return function() { showLocDetail(idx); }; })(i);
    le.appendChild(d);
  });
  var ci = -1;
  for (var i = 0; i < encyclopediaData.length; i++) {
    if (gameState.visited.indexOf(encyclopediaData[i].id) >= 0 && encyclopediaData[i].id === gameState.location) { ci = i; break; }
  }
  if (ci >= 0) showLocDetail(ci);
}
function showLocDetail(i) {
  var e = encyclopediaData[i]; var v = gameState.visited.indexOf(e.id) >= 0;
  var d = document.getElementById("locDetail"); if (!d) return;
  if (!v) { d.innerHTML = "<h4>???</h4><p>你还没有探索过这个地方。</p>"; return; }
  var t = "";
  e.npcs.forEach(function(n) { t += '<span class="tag npc">👤 ' + n + '</span>'; });
  e.items.forEach(function(n) { t += '<span class="tag item">📦 ' + n + '</span>'; });
  e.dangers.forEach(function(n) { t += '<span class="tag danger">⚠ ' + n + '</span>'; });
  d.innerHTML = "<h4>" + e.name + "</h4><p>" + e.desc + "</p>" + (t ? '<div style="margin-top:8px;">' + t + '</div>' : "");
}

// ═══ Startup ═══
init();
