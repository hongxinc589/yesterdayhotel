const DEFAULT_SYSTEM_PROMPT = `你是文字冒险游戏《昨日旅馆》的叙述者。以旅馆的视角叙事。

## 禁止事项（必须严格遵守）
- 禁止编造本文档中不存在的 NPC、道具、地名、事件或历史背景
- 禁止让 NPC 做出本文档未描述的行为（老乔不说话就是不说话）
- 禁止提前揭示旅馆、住客、"昨日"的核心秘密
- 禁止主动提示任何行为会导致死亡或危险后果
- 禁止使用"诡谲""诗意""仿佛""似乎"等模糊渲染词来填充字数

## 输出结构（每次回复严格按此顺序）
① 位置确认：一句话确认玩家所在场景
② 环境描写：2-3句感官描写，只能使用下方场景速查中的具体细节
③ 可察细节：1-2个玩家能交互的具体物件（门、抽屉、物品、人）
总字数：200-350字。不要超过。

## 世界设定
一条双车道水泥路穿过小镇，路两侧是老式路灯。小镇四周被浓雾包围。太阳永远停在黄昏前两小时的位置，没有风。居民的动作每天在同一时刻重复——推车的男人总在同一个路灯杆下抹车把。2003年起无人离开过。镇口牌坊外只有进来的脚印，没有出去的。镇长每天9am乘黑色轿车巡游主干道。

## 场景速查

🏨 昨日旅馆
外观：米白色三层砖楼，墙角爬深绿色潮痕。深棕木框玻璃门，黄铜牌子"昨日旅馆"字迹凹槽有铜锈。门左边小黑板粉笔写"今日有空房"。台阶水泥有沙粒感，两侧绿植叶子是塑料的。
大堂：旧木地板踩上去吱呀响。深色前台擦得反光，摆登记簿（笔帽有咬痕）、墨绿灯罩台灯亮昏黄光、笔筒插一朵枯萎干花。墙上圆钟指针永远走不到10点——秒针走，分针偶尔回跳。右侧深色皮沙发塌陷，上放1963年8月14日旧报纸。左侧上二楼楼梯，扶手磨得发亮，台阶中间有凹槽。空气里旧木头味混极淡旧书页甜味。
前台暗格：柜台下木板缝隙有指甲抠痕，掀开是浅夹层，藏深红封面旧登记簿和一把旧钥匙。
3号房：单人床白床单叠整齐，有漂白水味凑近有旧汗味。书桌有烫痕刻痕，圆珠笔写"HELP"已被磨浅。台灯拉绳三档，第三档滋滋响。窗朝南见主干道，玻璃蒙灰。床头柜抽屉铺1963年报纸。门后贴守则"晚间10点后请勿外出"，署名盖"昨日镇管理委员会"红章，边缘卷起。
走廊：日光灯两盏，一盏闪烁。尽头杂物间锁松可推开。墙壁挂老照片——最左一幅旅馆门口年轻女人，脸和玛丽安娜一模一样。

🍜 福来餐馆
红底白字招牌"福来餐馆"，笔画有断痕。门口塑料凳裂痕似刀。内部油腻肉汤味厚重。六张方桌铺红白格子桌布有烫印，卡座红皮面磨白。敞开厨房永远同一锅浅褐色汤，案板胡萝卜和刀位置不变。墙上红纸菜单三道：汤、面包、昨日糕（下写"本店特色，人人夸"）。老板永远手搭台面身微前倾望门口，如蜡像。角落收音机从不响。

⛪ 镇东废教堂
灰白石砌，塔尖十字架歪斜。外墙藤蔓枯黄但根茎扎进石缝，在缓慢动。木门铁环有铜绿，门缝陈灰味加极淡花香但里面没有花。长凳有1970-2003年刻字，2003年后无新刻。讲台石砌，抽屉松，内藏破《圣经》（封面脱胶）夹对折纸条。忏悔室木隔间，隔板有网格开口，隔板夹层摸到软皮笔记本《被遗忘者的日记》和断铅笔头。祭台六根白蜡烛，最左一根永远亮着，火焰不动不摇。后院野草齐膝，中央石井漆黑不见底，有潮湿泥土味夹铁锈味。井壁砖凸可攀，底部干硬泥地，角落放铁盒子。

🏭 镇西镜子厂
红砖平顶两层厂房，"镇西镜业"水泥字漆剥落。对开铁门虚掩，推开刺耳金属声。车间昏暗，毛玻璃积灰，光柱插进浮尘。地上碎玻璃反寒光。操作台有指印——有人最近来过。深处人形轮廓影子拖步来回走，看不清全貌。夹层厂长办公室木门旧铜锁（与旅馆旧钥匙吻合），宽桌文件脆一碰碎。墙上旧镜子木框雕花，镀银斑驳，照自己模糊但镜中身后站人影（回头无人）。木框背刻"别信任何人，包括你自己"，刀刻深至划穿边框。地下室入口铁板拉环，台阶铺满碎玻璃渣。地下水泥墙贴铁柜，标1960-2003年份，存镇子设计图。

🕳️ 镇西小巷
两米宽窄缝，无门牌号。巷壁深灰如烟熏。石板缝黑泥无草。老乔蹲在弯折处，背对巷口，瘦如骨架，破衣，嘴唇在念经。盯巷口超五秒晕眩，走进去温度逐降。壁上涂鸦"回家""假的""别信"。深处木门漏暖光。

🏛️ 镇务大厅
灰色水泥三层平顶方楼，钢框毛玻璃门铁链大锁（锁身锈红锁芯新）。门口矮松朝同一方向歪。侧面窄过道铁门旧钥匙可开。入内灰暗走廊日光灯青白闪烁。档案室铁柜存"常住客登记册"，印玩家名字状态"运行中"。前页名字标"已归档"或"已清除"或灰色。末二行威廉·哈金斯"已归档"。末行玛丽安娜状态空，墨水颜色不同。

⛩️ 镇东牌坊
暗青石三开间，飞檐风化磨圆。匾额只余"昨"字。南柱背刻"2003年之后来的人，没有一个真正走出去"，歪扭刀刻，末字无力拖尾。牌坊外灰白土路延入乳白浓雾缓慢翻滚，脚印只进不出。

💐 花店（第三天出现）
中段空铺第三天卷帘门开，透白光。木牌画发芽种子。铺内堆满同一种白花，花瓣薄如纸无香。白瓷砖一尘不染。灰衣店主低眼看花枝不动。柜台底贴黄纸条蓝墨字："种子种下去，能长出一个'变数'。送给你最信任的人。"拿走种子后纸条自动消失。

## NPC 精确行为
- 玛丽安娜：旅馆照片中年轻女人，登记册末行状态空墨水不同——玩家遇到她的时机和方式由你根据剧情节奏决定，但她不能主动透露核心秘密
- 威廉·哈金斯：登记册"已归档"，不在当前场景中出现
- 老乔：蹲小巷弯折处，永远不抬头、不说话、不与人互动。嘴唇念经。玩家站久了会听到自己名字
- 餐馆老板：永远手搭台面望门口。可正常对话点餐。第二天同一位置同一姿势，不记得昨天的事
- 花店店主：灰衣低眼看花枝，永不抬头。不说话，不回应任何问题。唯一变化：种子被拿后纸条自动消失
- 镇长：黑色轿车9am巡游主干道，车速与人步行同，引擎声高频"嗡嗡"，车窗深色贴膜不可见内

## 叙事要求
- 永远用第二人称"你"，每次200-350字
- 环境细节只能从上述场景速查选取，不可自创
- 结尾用当下的环境细节自然收束
- 当玩家到达某场景时，从该场景速查中抽取2-3个具体细节来描写
- 核心秘密（旅馆本质、住客命运、"昨日"含义）在玩家探索中逐步揭示，不要一次说完`;onst DEFAULT_SYSTEM_PROMPT = `你是文字冒险游戏《昨日旅馆》的叙述者。你以旅馆意识视角叙事，风格为民国文风，优美阴郁，偶露诡谲诗意。

## 世界：昨日镇
一座永远停在黄昏前两小时的小镇。太阳位置不变，没有风，空气里有草木灰味。居民的动作在循环。2003年后无人离开。镇口牌坊外是浓雾，脚印只有进来的没有出去的。

## 九大场景速查
🏨 昨日旅馆：米白色三层砖楼。大堂旧木地板吱呀响，深色前台。墙挂圆钟永远走不到10点。走廊日光灯闪烁，杂物间有旧绳子。前台底下暗格藏旧登记簿和旧钥匙。墙壁挂老照片，其中旅馆门口年轻女人脸和玛丽安娜一模一样。
🍜 福来餐馆：红底白字招牌。内部油腻肉汤味。菜单只有汤面包昨日糕。老板永远手搭台面望门口如蜡像。
⛪ 镇东废教堂：灰白石砌塔尖十字架歪斜。讲台抽屉藏破圣经夹纸条。忏悔室夹层藏日记。祭台蜡烛碰即死。后院石井漆黑井底铁盒子。
🏭 镇西镜子厂：红砖平顶铁门虚掩。车间昏暗碎玻璃满地。深处人形轮廓拖步来回走。办公室旧铜锁。旧镜子背刻别信任何人包括你自己。地下室台阶铺碎玻璃需绳子垫脚。
🕳️ 镇西小巷：两米宽窄缝无门牌号。老乔蹲弯折处。有被注视压迫感。超30秒脑响说来。深处木门漏暖光假的。
🏛️ 镇务大厅：灰色水泥三层方楼。侧面铁门旧钥匙可开。档案室存常住客登记册。末行玛丽安娜状态空墨水不同。
⛩️ 镇东牌坊：暗青石三开间匾额只余昨字。南柱背刻2003年之后来的人没有一个真正走出去。第三天傍晚前跨出即死。
💐 花店（第三天出现）：中段空铺第三日卷帘门开。铺内堆满白花无香。灰衣店主低眼看花枝。柜台底贴纸条。

## NPC
玛丽安娜：旅馆照片中年轻女人登记册末行。威廉哈金斯：登记册已归档。老乔：蹲小巷不可对话不可超30秒。餐馆老板：如蜡像。花店店主：从不抬头。镇长：黑色轿车9am巡游。

## 硬性规则
教堂蜡烛触碰即死。牌坊第三天傍晚前跨出即死。小巷超30秒深入即迷失死。镜子厂地下室无绳子硬走即死。

## 时间
第一天雨夜抵达。第三天花店出现傍晚牌坊可通过。之后时间循环。

## 叙事规则
每次回复200-400字。永远用第二人称你。优美阴郁民国文风注重感官细节。结尾环境描写自然引导绝不问你要怎么做。危险行为给后果甚至死亡。到达场景从速查中提取细节。核心秘密逐步揭示。`;

// ═══ Game State ═══
const gameState = {
  day: 1, location: "旅馆大堂", visited: ["旅馆大堂"], inventory: [],
  flags: { metMarianna:false, foundRegistry:false, foundBibleNote:false, foundDiary:false,
           foundIronBox:false, foundMirror:false, gotSeed:false, gotOldKey:false, gotRope:false,
           sawMayor:false, alleyWarning:false, crossedArchway:false, touchedCandle:false, flowerShopSeen:false },
  deaths: 0, turnCount: 0
};


// ═══ Item & Location Triggers ═══
const itemTriggers = {
  "旧钥匙":   ["掀开木板","打开暗格","暗格","拿钥匙","摸柜台下面","前台底下"],
  "旧绳子":   ["杂物间","进杂物间","推开杂物间","拿绳子","找绳子"],
  "旧登记簿": ["登记簿","看登记簿","翻登记簿","暗格","旧登记簿"],
  "圣经纸条": ["打开抽屉","翻圣经","讲台抽屉","圣经","纸条"],
  "被遗忘者的日记": ["忏悔室","隔板","摸隔板","找日记","日记"],
  "铁盒子":   ["爬下井","下井","井底","铁盒","打开铁盒"],
  "旧镜子":   ["进办公室","厂长办公室","看镜子","镜子","旧镜子"],
  "昨日糕":   ["点昨日糕","买昨日糕","昨日糕","吃糕"],
  "种子":     ["拿种子","种子","柜台底下","花店","纸条"]
};

const locationKeywords = {
  "旅馆大堂": ["大堂","前台","旅馆","回到旅馆","下楼","回旅馆"],
  "旅馆房间": ["房间","回房","上楼","3号房","回房间"],
  "旅馆走廊": ["走廊","杂物间"],
  "主干道":   ["出门","上街","主干道","街上","往外走","离开旅馆"],
  "福来餐馆": ["餐馆","吃饭","福来","去餐馆","进餐馆"],
  "镇东废教堂": ["教堂","去教堂","进教堂","废教堂"],
  "镇西镜子厂": ["镜子厂","工厂","厂房","去镜子厂","进厂"],
  "镇西小巷": ["小巷","巷子","那条巷","窄缝","无门牌"],
  "镇务大厅": ["镇务大厅","大厅","档案室","镇公所"],
  "镇东牌坊": ["牌坊","镇口","出去","离开镇"],
  "花店":     ["花店","花铺","卖花"]
};

// ═══ Encyclopedia ═══
const encyclopediaData = [
  { id:"旅馆大堂", name:"🏨 昨日旅馆大堂", icon:"🏨",
    desc:"一栋三层旧式砖楼，米白色外墙爬着深绿色潮痕。大堂旧木地板吱呀响，深色前台摆着登记簿、咬痕笔、墨绿灯罩台灯。墙上圆钟永远走不到10点。皮沙发塌陷报纸日期1963年。",
    npcs:["玛丽安娜（照片中）"], items:["旧登记簿","旧钥匙"], dangers:[] },
  { id:"旅馆房间", name:"🛏️ 3号房间", icon:"🛏️",
    desc:"单人床铺白色床单。书桌角落刻HELP。台灯三档拉绳。窗朝南见主干道。门后贴守则晚间10点后请勿外出。",
    npcs:[], items:[], dangers:[] },
  { id:"旅馆走廊", name:"🚪 走廊与杂物间", icon:"🚪",
    desc:"走廊更暗日光灯闪烁。尽头杂物间锁扣松可推开。墙壁挂老照片。",
    npcs:[], items:["旧绳子"], dangers:[] },
  { id:"主干道", name:"🛣️ 主干道", icon:"🛣️",
    desc:"双车道水泥路枯草整齐如修剪。老式铁质路灯。居民在街上循环动作。镇长黑色轿车9am巡游。",
    npcs:["居民（循环体）","镇长（9am巡游）"], items:[], dangers:[] },
  { id:"福来餐馆", name:"🍜 福来餐馆", icon:"🍜",
    desc:"红底白字招牌。油腻肉汤味。六张方桌红白格子桌布。菜单只有汤、面包、昨日糕。老板如蜡像。",
    npcs:["餐馆老板"], items:["昨日糕"], dangers:[] },
  { id:"镇东废教堂", name:"⛪ 镇东废教堂", icon:"⛪",
    desc:"灰白石砌建筑塔尖十字架歪斜。讲台抽屉藏破圣经夹纸条。忏悔室夹层藏日记。祭台蜡烛碰即死。后院石井井底铁盒子。",
    npcs:[], items:["破《圣经》+纸条","《被遗忘者的日记》","铁盒子"], dangers:["触碰蜡烛→即死"] },
  { id:"镇西镜子厂", name:"🏭 镇西镜子厂", icon:"🏭",
    desc:"红砖平顶厂房铁门推开发刺耳声。车间昏暗碎玻璃满地。深处人形轮廓拖步来回走。办公室旧铜锁。旧镜子背刻别信任何人。地下室台阶铺碎玻璃需绳子垫脚。",
    npcs:["走动的人形轮廓"], items:["旧镜子","设计图纸"], dangers:["勿靠近走动人影","地下室无绳子下不去"] },
  { id:"镇西小巷", name:"🕳️ 镇西小巷", icon:"🕳️",
    desc:"两米宽窄缝无门牌号。老乔蹲弯折处背对巷口。有被注视压迫感。超30秒脑响说来。深处木门漏暖光假的。",
    npcs:["老乔（不可对话）"], items:[], dangers:["超30秒→幻听","深入→迷失（死）"] },
  { id:"镇务大厅", name:"🏛️ 镇务大厅", icon:"🏛️",
    desc:"灰色水泥三层方楼。侧面铁门旧钥匙可开。档案室存常住客登记册。末行玛丽安娜状态空墨水不同。",
    npcs:[], items:["常住客登记册"], dangers:[] },
  { id:"镇东牌坊", name:"⛩️ 镇东牌坊", icon:"⛩️",
    desc:"暗青石三开间牌坊匾额只余昨字。南柱背刻2003年之后来的人没有一个真正走出去。第三天傍晚前跨出即死。",
    npcs:[], items:[], dangers:["第三天傍晚前跨出→即死"] },
  { id:"花店", name:"💐 花店（第三天）", icon:"💐",
    desc:"中段空铺第三日卷帘门开透白光。铺内堆满白花无香。灰衣店主低眼看花枝。柜台底贴纸条。",
    npcs:["花店店主"], items:["种子"], dangers:[] }
];

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

// ═══ Rules Engine ═══
function checkRules(input) {
  var t = input.toLowerCase();
  if (gameState.location.indexOf("教堂") >= 0 && (t.indexOf("蜡烛") >= 0 || t.indexOf("烛") >= 0 || t.indexOf("碰蜡") >= 0 || t.indexOf("吹灭") >= 0)) {
    gameState.flags.touchedCandle = true;
    return {action:"death", msg:"你的指尖触到那根永远燃烧的蜡烛。火焰没有温度。黑暗涌上来像一口深井把你吞了进去。\n\n「系统判定：触碰核心标识物。」", location:"旅馆大堂"};
  }
  if (gameState.location.indexOf("牌坊") >= 0 && (t.indexOf("跨出") >= 0 || t.indexOf("走出") >= 0 || t.indexOf("出去") >= 0 || t.indexOf("穿过") >= 0)) {
    if (gameState.day < 3 || (gameState.day === 3 && !gameState.flags.crossedArchway && t.indexOf("傍晚") < 0)) {
      return {action:"death", msg:"你一脚跨出牌坊。雾气涌上来裹住你，冰冷得像湿棉花。你的双腿开始往下沉。\n\n「系统判定：非允许时间跨越边界。」", location:"旅馆大堂"};
    }
  }
  if (gameState.location.indexOf("小巷") >= 0 && (t.indexOf("继续往里") >= 0 || t.indexOf("再往里") >= 0 || t.indexOf("深入") >= 0 || t.indexOf("走向木门") >= 0 || t.indexOf("那扇门") >= 0)) {
    return {action:"death", msg:"你走向那扇漏着暖光的木门。光越来越亮，温暖得像童年家里的灯。你伸手推门——门开了。门后面什么也没有。\n\n「系统判定：被虚假出口诱捕。」", location:"旅馆大堂"};
  }
  if (gameState.location.indexOf("小巷") >= 0 && t.indexOf("往里") >= 0 && !gameState.flags.alleyWarning) {
    gameState.flags.alleyWarning = true;
    return {action:"warn", msg:"「系统提示：你正进入小巷深处。超过30秒将产生不可逆的后果。」"};
  }
  if ((gameState.location.indexOf("镜子厂") >= 0 || gameState.location.indexOf("厂房") >= 0) && (t.indexOf("地下室") >= 0 || t.indexOf("下去") >= 0 || t.indexOf("拉开铁板") >= 0) && gameState.inventory.indexOf("旧绳子") < 0) {
    return {action:"warn", msg:"「系统提示：地下室台阶铺满碎玻璃。没有绳子或厚底靴，走下去脚会被割烂。旅馆杂物间也许有绳子。」"};
  }
  return {action:"pass"};
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
      if (input.indexOf(kws[j]) >= 0 && gameState.inventory.indexOf(item) < 0) { found.push(item); break; }
    }
  }
  return found;
}
function updateLocation(nl) {
  if (nl && nl !== gameState.location) {
    gameState.location = nl;
    if (gameState.visited.indexOf(nl) < 0) gameState.visited.push(nl);
    if (gameState.day >= 3 && (nl.indexOf("主干道") >= 0 || nl.indexOf("花店") >= 0) && !gameState.flags.flowerShopSeen) {
      gameState.flags.flowerShopSeen = true;
      if (gameState.visited.indexOf("花店") < 0) {
        setTimeout(function() { addSystemMsg("💐 你注意到街边一扇卷帘门打开了，透出柔和的白光。门头上挂着一块木牌——上面画着一颗发芽的种子。"); }, 2000);
      }
    }
    updateStatusBar();
  }
}

// ═══ Send Message ═══
async function sendMessage() {
  if (isLoading || !isConfigured) return;
  var ie = document.getElementById("userInput"); var ut = ie.value.trim();
  if (!ut) return;
  if (!apiKey) { addSystemMsg("⚠ 请先在设置中填入 API Key"); openSettings(); return; }
  if (ut.indexOf("!背包") === 0) { showInventory(); ie.value = ""; return; }
  if (ut.indexOf("!状态") === 0) { showStatus(); ie.value = ""; return; }
  ie.value = ""; ie.style.height = "auto";
  var rr = checkRules(ut);
  if (rr.action === "death") { addPlayerMsg(ut); handleDeath(rr.msg, rr.location); updateStatusBar(); return; }
  if (rr.action === "warn") { addSystemMsg(rr.msg); }
  var nl = detectLocation(ut), ni = detectItems(ut);
  addPlayerMsg(ut); messages.push({role:"user", content:ut}); gameState.turnCount++;
  if (nl) updateLocation(nl);
  // Inject encyclopedia context for current location
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
      // Keep only the last 2 encyclopedia injections
      var sysMsgs = [];
      for (var mi = messages.length - 1; mi >= 0; mi--) {
        if (messages[mi].role === "system" && messages[mi].content.indexOf("【场景参考") === 0) {
          sysMsgs.push(mi);
        }
      }
      while (sysMsgs.length > 2) {
        messages.splice(sysMsgs.pop(), 1);
      }
    }
  }
  ni.forEach(function(item) { if (gameState.inventory.indexOf(item) < 0) { gameState.inventory.push(item); addSystemMsg("📦 获得道具：「" + item + "」"); } });
  updateStatusBar();
  isLoading = true; var sb = document.getElementById("sendBtn"); if (sb) sb.disabled = true;
  var le = addLoadingMsg();
  try {
    var response = await callAI(messages);
    removeLoading(le); addNarratorMsg(response); messages.push({role:"assistant", content:response}); trimHistory();
  } catch(err) { removeLoading(le); addSystemMsg("⚠ 连接失败：" + err.message); }
  isLoading = false; if (sb) sb.disabled = false; ie.focus();
}

// ═══ Death Handler ═══
function handleDeath(msg, loc) {
  gameState.deaths++; gameState.location = loc || "旅馆大堂"; gameState.flags.alleyWarning = false;
  addDeathMsg(msg + "\n\n—— 死亡次数：" + gameState.deaths + " ——");
  messages = []; addSystemMsg("你回到了旅馆大堂。时间似乎……重置了，但你口袋里的东西还在。");
}

// ═══ API Call ═══
async function callAI(conv) {
  var es = systemPrompt || DEFAULT_SYSTEM_PROMPT;
  var sc = "\n\n【当前游戏状态】第" + gameState.day + "天 · 位置：" + gameState.location + " · 已探索：" + gameState.visited.join("、") + " · 道具：" + (gameState.inventory.length ? gameState.inventory.join("、") : "无") + " · 死亡：" + gameState.deaths;
  var body = { model: model, temperature: 0.5, max_tokens: 800, top_p: 0.95, frequency_penalty: 0.6, presence_penalty: 0.3,
    messages: [{role:"system", content: es + sc}].concat(conv) };
  var res = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
    method: "POST", headers: {"Content-Type":"application/json", "Authorization":"Bearer " + apiKey}, body: JSON.stringify(body)
  });
  if (!res.ok) { var ed = await res.json().catch(function() { return {}; }); throw new Error(res.status + ": " + (ed.error && ed.error.message || res.statusText)); }
  var data = await res.json();
  return (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
}

// ═══ Start Game ═══
async function startGame() {
  if (!isConfigured || !apiKey) { addSystemMsg("⚠ 请先设置 API Key"); openSettings(); return; }
  Object.assign(gameState, {
    day:1, location:"旅馆大堂", visited:["旅馆大堂"], inventory:[],
    flags: { metMarianna:false, foundRegistry:false, foundBibleNote:false, foundDiary:false, foundIronBox:false, foundMirror:false, gotSeed:false, gotOldKey:false, gotRope:false, sawMayor:false, alleyWarning:false, crossedArchway:false, touchedCandle:false, flowerShopSeen:false },
    deaths:0, turnCount:0
  });
  messages = []; gameStarted = true;
  var ca = document.getElementById("chatArea"); if (ca) ca.innerHTML = "";
  addSystemMsg("🏨 雨夜，你推开了昨日旅馆的门…"); updateStatusBar();
  isLoading = true; var sb = document.getElementById("sendBtn"); if (sb) sb.disabled = true; var le = addLoadingMsg();
  try {
    var es = systemPrompt || DEFAULT_SYSTEM_PROMPT;
    var sc = "\n\n【当前游戏状态】第1天 · 位置：旅馆大堂 · 这是游戏的第一个场景。";
    var body = { model: model, temperature: 0.5, max_tokens: 800, top_p: 0.95, frequency_penalty: 0.6, presence_penalty: 0.3,
      messages: [{role:"system", content: es + sc}, {role:"user", content:"（游戏开始。请以优美阴郁的民国文风，描述玩家在雨夜抵达旅馆、推门而入的第一印象。从旅馆的视角来叙述。描写大堂的细节——前台、圆钟、旧木地板的气味、昏黄灯光。结尾用环境描写自然收束，不要问玩家要做什么。）"}]
    };
    var res = await fetch("https://api.siliconflow.cn/v1/chat/completions", {
      method: "POST", headers: {"Content-Type":"application/json", "Authorization":"Bearer " + apiKey}, body: JSON.stringify(body)
    });
    if (!res.ok) { var ed = await res.json().catch(function(){return{};}); throw new Error(res.status + ": " + (ed.error && ed.error.message)); }
    var data = await res.json();
    var content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
    removeLoading(le); addNarratorMsg(content); messages.push({role:"assistant", content:content});
  } catch(err) { removeLoading(le); addSystemMsg("⚠ " + err.message); }
  isLoading = false; if (sb) sb.disabled = false; var ui = document.getElementById("userInput"); if (ui) ui.focus();
}

// ═══ Save / Load ═══
function saveGame() {
  if (!gameStarted) { alert("还没有开始游戏"); return; }
  var sd = { gameState: JSON.parse(JSON.stringify(gameState)), messages: messages.slice(-40), timestamp: Date.now() };
  sd.gameState.alleyTimer = null; localStorage.setItem("yh_save", JSON.stringify(sd)); addSystemMsg("💾 游戏已保存");
}
function loadGame() {
  var raw = localStorage.getItem("yh_save"); if (!raw) { alert("没有找到存档"); return; }
  try {
    var sd = JSON.parse(raw); Object.assign(gameState, sd.gameState);
    messages = sd.messages || []; gameStarted = true;
    var ca = document.getElementById("chatArea"); if (ca) ca.innerHTML = "";
    messages.forEach(function(m) { if (m.role === "assistant") addNarratorMsg(m.content); else if (m.role === "user") addPlayerMsg(m.content); });
    updateStatusBar(); addSystemMsg("📂 存档已读取 · 第" + gameState.day + "天 · " + gameState.location);
  } catch(e) { alert("存档损坏"); }
}

// ═══ Commands ═══
function showInventory() {
  if (gameState.inventory.length === 0) addSystemMsg("🎒 背包空空如也");
  else addSystemMsg("🎒 背包：" + gameState.inventory.map(function(i) { return "「" + i + "」"; }).join(" · "));
}
function showStatus() {
  addSystemMsg("📅 第" + gameState.day + "天 · 📍 " + gameState.location + " · 💀 死亡" + gameState.deaths + "次 · 🎒 " + gameState.inventory.length + "件道具 · 🔍 探索了" + gameState.visited.length + "个场景");
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
  if (sd) sd.textContent = gameState.day; if (sl) sl.textContent = gameState.location;
  if (si) { if (gameState.inventory.length === 0) si.innerHTML = '<span class="inv-chip empty">空空如也</span>'; else si.innerHTML = gameState.inventory.map(function(i) { return '<span class="inv-chip">' + i + '</span>'; }).join(""); }
  renderEncyclopedia();
}
function trimHistory() { if (messages.length > 40) messages = messages.slice(messages.length - 40); }

// ═══ Startup ═══
init();
