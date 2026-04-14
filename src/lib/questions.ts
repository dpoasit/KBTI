import { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "朋友给你甩来一段 20 秒直拍，你最先被什么拿下？",
    options: [
      { text: "队形、卡点、整齐度，先看舞台有没有交作业", effects: { cb: -1, sm: -2, eq: -1, ai: -1, tn: -1, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 1, niche: 0 } },
      { text: "那张脸和 ending，镜头一切过去我先缴税", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 1, stash: 2, loud: 1, niche: 0 } },
      { text: "成员之间的熟感和互动氛围，比动作更抓我", effects: { cb: -1, sm: 2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "我先想，这个竟然没人发？那我好像更来劲了", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 2,
    text: "新团出道预告来了，哪种最容易让你当场点进去？",
    options: [
      { text: "镜头、造型、封面感很强，我先看颜和星味", effects: { cb: 1, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "概念做得很完整，像一部长篇故事的开头", effects: { cb: -1, sm: 2, eq: 1, ai: -1, tn: 1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 1 } },
      { text: "先看实力向内容，练习室或者 live 最有说服力", effects: { cb: -1, sm: -2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "我先看评论区和热搜，想知道这盘子后面在演什么", effects: { cb: 0, sm: 1, eq: 1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 1, niche: 0 } }
    ]
  },
  {
    id: 3,
    text: "你通常是怎么入坑一个人的？",
    options: [
      { text: "一条直拍、一眼就完蛋，根本来不及思考", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 1, stash: 1, loud: 1, niche: 0 } },
      { text: "先觉得这个团整体做得好，慢慢再偏向其中一个", effects: { cb: -2, sm: -1, eq: 0, ai: -1, tn: -1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "从旧物料一路考古，越翻越上头", effects: { cb: 1, sm: 1, eq: 1, ai: -2, tn: 1, cam: 1, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 2 } },
      { text: "别人都在讨论，我抱着看看也许会懂的心态点进去", effects: { cb: 0, sm: 0, eq: -1, ai: 1, tn: -2, cam: 1, soul: 0, spend: 0, tea: 1, live: 0, stash: 0, loud: 1, niche: 0 } }
    ]
  },
  {
    id: 4,
    text: "回归周你更像哪种人？",
    options: [
      { text: "刷新热帖、搬运物料、像前线战地记者", effects: { cb: -1, sm: -1, eq: -2, ai: 1, tn: -1, cam: 1, soul: 0, spend: 0, tea: 1, live: 0, stash: 1, loud: 3, niche: 0 } },
      { text: "关心制作、舞台、开麦、完成度，像质检员", effects: { cb: -1, sm: -2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "疯狂刷单人切片和神图，我只认最能打的那一秒", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "我最在意的是团综、幕后、成员之间有没有那种熟感", effects: { cb: -1, sm: 2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } }
    ]
  },
  {
    id: 5,
    text: "如果演唱会只给你选一个观看点位，你会选？",
    options: [
      { text: "正中区，必须把全队编排和走位看清", effects: { cb: -2, sm: -2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 1, spend: 2, tea: 0, live: 2, stash: 0, loud: 0, niche: 0 } },
      { text: "能近距离看本命表情管理和饭撒的区域", effects: { cb: 2, sm: 0, eq: -1, ai: 1, tn: -1, cam: 2, soul: 0, spend: 3, tea: 0, live: 3, stash: 1, loud: 1, niche: 0 } },
      { text: "能感受全场合唱和群像情绪的位置", effects: { cb: -1, sm: 2, eq: 0, ai: -1, tn: -1, cam: 0, soul: 2, spend: 2, tea: 0, live: 2, stash: 0, loud: 1, niche: 0 } },
      { text: "无所谓，最好是票没那么难抢但体验还不错的神秘位置", effects: { cb: 0, sm: 1, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 1, tea: 0, live: 1, stash: 0, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 6,
    text: "你收藏夹里最可能爆满的是什么？",
    options: [
      { text: "单人神图、ending、直拍截图", effects: { cb: 2, sm: -1, eq: 0, ai: 1, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 3, loud: 0, niche: 0 } },
      { text: "团综高光、熟人局片段、一起闹腾的证据", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 0 } },
      { text: "练习室、rehearsal、舞台分析向视频", effects: { cb: -1, sm: -2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 2, loud: 0, niche: 0 } },
      { text: "旧采访、旧图、被埋没的小物料", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 3, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 7,
    text: "看到‘张元英 vs 柳智敏’这种热帖，你更接近哪种反应？",
    options: [
      { text: "认真比较镜头、ending、造型完成度，像在做答辩", effects: { cb: 1, sm: -1, eq: -1, ai: 0, tn: -2, cam: 3, soul: 0, spend: 0, tea: 1, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "我会看，但最后还是更在意舞台压制力和状态", effects: { cb: 1, sm: -2, eq: 0, ai: 0, tn: -1, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "我更爱围观热帖怎么吵，公司和法务区在不在后台发力", effects: { cb: 0, sm: 1, eq: 1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "热帖热闹是热闹，但我真正上头的通常不在正中央", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 8,
    text: "你最容易在哪种瞬间突然确定：完了，我喜欢上了？",
    options: [
      { text: "舞台一开，控场感太强，我当场认栽", effects: { cb: 1, sm: -2, eq: -1, ai: 2, tn: -1, cam: 2, soul: 0, spend: 1, tea: 0, live: 2, stash: 1, loud: 1, niche: 0 } },
      { text: "团综里自然接梗、互相拆台，那股熟感太致命", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "一张神图把我拍服了，后面我全是自己补票", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "翻到旧物料，发现原来这个人一直都很有东西", effects: { cb: 1, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 9,
    text: "你心里最神圣的物料类型是？",
    options: [
      { text: "高质量完整舞台，多机位，能让我反复做复盘", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 1, soul: 0, spend: 1, tea: 0, live: 1, stash: 2, loud: 0, niche: 0 } },
      { text: "团综/旅行/幕后，一群人很熟真的比什么都香", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "个人直拍和美图，本命被拍到最好看那几秒最神", effects: { cb: 2, sm: -1, eq: 0, ai: 1, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 3, loud: 0, niche: 0 } },
      { text: "旧采访、消失物料、冷门片段，挖出来就是功德", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 1, live: 0, stash: 3, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 10,
    text: "你更像哪种安利方式？",
    options: [
      { text: "先发高能切片，15 秒之内必须让人懂", effects: { cb: 1, sm: -1, eq: -2, ai: 2, tn: -1, cam: 2, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 3, niche: 0 } },
      { text: "先发团综，让你知道他们为什么让人离不开", effects: { cb: -2, sm: 2, eq: -1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 2, niche: 0 } },
      { text: "先发神图/ending，你先缴完税再说别的", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 2, loud: 2, niche: 0 } },
      { text: "先发一串旧物料时间线，看懂了你就回不来了", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 11,
    text: "你对公司和老板的态度更像？",
    options: [
      { text: "不想看，别耽误我欣赏舞台和作品", effects: { cb: 0, sm: -1, eq: 0, ai: 0, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 0, loud: 0, niche: 0 } },
      { text: "我会看，但主要是为了判断这盘资源和路线", effects: { cb: -1, sm: 0, eq: 1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 2, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "法务区越乱我越来劲，韩娱怎么可能只看歌", effects: { cb: 0, sm: 1, eq: -1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 2, niche: 0 } },
      { text: "热闹是他们的，我比较关心边边角角有没有真宝藏", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 1, live: 0, stash: 1, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 12,
    text: "买周边时你最容易失守在哪？",
    options: [
      { text: "单人小卡和本命封面，命中那一刻我会封神", effects: { cb: 2, sm: 0, eq: -1, ai: 1, tn: -1, cam: 2, soul: 0, spend: 3, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "团体纪念物，我更爱一群人一起留下来的东西", effects: { cb: -2, sm: 1, eq: 0, ai: -1, tn: 0, cam: 0, soul: 2, spend: 2, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "演唱会和线下限定，现场体验才是真正大头", effects: { cb: 0, sm: -1, eq: -1, ai: 1, tn: -1, cam: 0, soul: 1, spend: 3, tea: 0, live: 3, stash: 0, loud: 1, niche: 0 } },
      { text: "冷门旧物、绝版边角料，越难找越刺激", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 0, spend: 2, tea: 0, live: 0, stash: 3, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 13,
    text: "你刷打歌舞台时，最在意什么？",
    options: [
      { text: "整体完成度和是否比昨天更稳", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "本命镜头多少、ending 给没给足", effects: { cb: 2, sm: -1, eq: -1, ai: 1, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "今天团里谁又自然接梗，状态像下班后一样松弛", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "我更关心有没有被埋的好版本，热的不一定最神", effects: { cb: 0, sm: -1, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 14,
    text: "最让你产生‘太会了’感叹的是？",
    options: [
      { text: "一个人知道镜头在拍，所以连呼吸都很会管理", effects: { cb: 2, sm: -1, eq: -1, ai: 1, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "一整个团把编排、节奏和群像配合得像机器一样准", effects: { cb: -2, sm: -2, eq: 0, ai: -1, tn: -1, cam: 1, soul: 1, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "一群人不用演就很熟，那种活人感太值钱了", effects: { cb: -2, sm: 2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "大家没发现的地方居然藏着这么值钱的东西", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 15,
    text: "你通常怎么用社交平台追星？",
    options: [
      { text: "疯狂转发、做嘴替、发尖叫帖", effects: { cb: 0, sm: 0, eq: -2, ai: 1, tn: -1, cam: 1, soul: 0, spend: 0, tea: 1, live: 0, stash: 0, loud: 3, niche: 0 } },
      { text: "不怎么发，但我会默默收藏和截图", effects: { cb: 0, sm: 0, eq: 2, ai: -1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 3, loud: 0, niche: 0 } },
      { text: "爱发长文复盘、考古整理、时间线贴", effects: { cb: 0, sm: 0, eq: 1, ai: -2, tn: 1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 1, niche: 2 } },
      { text: "我的账号更像围观公司热搜和韩娱戏剧现场", effects: { cb: 0, sm: 1, eq: -1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 2, niche: 0 } }
    ]
  },
  {
    id: 16,
    text: "路人问你为什么会喜欢这个人，你最可能回答？",
    options: [
      { text: "他/她一上镜就很不讲道理，我没办法", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "你看久了就知道，这个人是慢慢长出来的", effects: { cb: 2, sm: 1, eq: 1, ai: -2, tn: 1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 1 } },
      { text: "不是一个人，是一群人放在一起的那个味道太难替代", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "热闹的人很多，但能让我一直留下来的不多", effects: { cb: 1, sm: 1, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 17,
    text: "你对‘大势’的态度更像？",
    options: [
      { text: "大势通常有大势的道理，我会先看最热的", effects: { cb: 0, sm: 0, eq: -1, ai: 1, tn: -2, cam: 1, soul: 0, spend: 0, tea: 1, live: 0, stash: 0, loud: 1, niche: 0 } },
      { text: "热不热不重要，真正值钱的东西经常不在主路上", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } },
      { text: "我会看热帖，但主要是为了挑最能打的切片", effects: { cb: 1, sm: -1, eq: -1, ai: 1, tn: -1, cam: 2, soul: 0, spend: 0, tea: 1, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "热搜只是背景板，我真正爱的是自己长期确认过的东西", effects: { cb: 1, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 18,
    text: "你最容易在什么时候突然破防？",
    options: [
      { text: "小卡、签售、盲盒，命运感会让我失去理智", effects: { cb: 2, sm: 0, eq: -1, ai: 1, tn: 0, cam: 1, soul: 0, spend: 3, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "演唱会和线下，我会把钱理解为买体感", effects: { cb: 0, sm: -1, eq: -1, ai: 1, tn: -1, cam: 0, soul: 1, spend: 3, tea: 0, live: 3, stash: 0, loud: 1, niche: 0 } },
      { text: "团体纪念和长期陪伴感相关的东西", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 2, spend: 2, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "绝版旧物和冷门稀有边角料，越难找越刺激", effects: { cb: 0, sm: 0, eq: 1, ai: -2, tn: 2, cam: 0, soul: 0, spend: 2, tea: 0, live: 0, stash: 3, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 19,
    text: "下列哪种内容最容易让你熬夜？",
    options: [
      { text: "高质量舞台复盘，我可以连看十版不睡", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 2, loud: 0, niche: 0 } },
      { text: "本命更新了自拍、泡泡、小作文，我必须立刻看", effects: { cb: 2, sm: 2, eq: -1, ai: 1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "热帖和吃瓜区闹起来了，我得知道在演什么", effects: { cb: 0, sm: 1, eq: -1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 2, niche: 0 } },
      { text: "旧物料时间线翻到深夜，完全没发现天亮了", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 20,
    text: "你的‘理智追星’通常崩在哪一步？",
    options: [
      { text: "我本来只想看看，结果一条直拍就锁死", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 1, stash: 1, loud: 1, niche: 0 } },
      { text: "我本来只打算补一两个物料，结果开始考古编年史", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 2 } },
      { text: "我本来只想买一张，结果开始研究概率学", effects: { cb: 2, sm: 0, eq: -1, ai: 1, tn: 0, cam: 1, soul: 0, spend: 3, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "我本来只想看看颁奖礼，结果把韩娱春节联欢晚会看成连续剧", effects: { cb: -1, sm: 2, eq: 0, ai: 0, tn: -1, cam: 0, soul: 2, spend: 0, tea: 1, live: 0, stash: 1, loud: 0, niche: 0 } }
    ]
  },
  {
    id: 21,
    text: "如果有人说你追星像上班，你觉得你上的是什么班？",
    options: [
      { text: "质检岗，负责舞台和回归验收", effects: { cb: -1, sm: -2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "宣传岗，负责转发、尖叫、让大家都来看", effects: { cb: 0, sm: 0, eq: -2, ai: 1, tn: -1, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 0, loud: 3, niche: 0 } },
      { text: "档案岗，负责截图、备份、整理和存证", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 1, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 3, loud: 0, niche: 1 } },
      { text: "法务旁听岗，负责围观盘子背后都在演什么", effects: { cb: 0, sm: 1, eq: 0, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 1, niche: 0 } }
    ]
  },
  {
    id: 22,
    text: "哪句最像你的追星信条？",
    options: [
      { text: "舞台会说话，别的都可以先放一边", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "人味很值钱，活人感能续命", effects: { cb: 1, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "镜头不是镜头，是命中注定", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "真正值钱的东西经常埋在不热的地方", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 23,
    text: "对你来说，团体最宝贵的是什么？",
    options: [
      { text: "编排和整体完成度，像一个完整机器", effects: { cb: -2, sm: -2, eq: 0, ai: -1, tn: -1, cam: 0, soul: 1, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "熟人感、自然默契、一起长大的痕迹", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "哪怕团里都好，我还是会先被某一个人狠狠干到", effects: { cb: 2, sm: 0, eq: -1, ai: 1, tn: 0, cam: 2, soul: 0, spend: 1, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "我更在意他们有没有被低估，值不值得被重新看见", effects: { cb: -1, sm: 1, eq: 1, ai: -1, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 24,
    text: "你对‘本命’这两个字的理解更像？",
    options: [
      { text: "一眼击中、天选之人、镜头一到直接缴税", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "慢慢看着变强、越陪越深的长期合同", effects: { cb: 2, sm: 1, eq: 1, ai: -2, tn: 1, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 1 } },
      { text: "见到真人就会心空，线上线下完全两种命运", effects: { cb: 2, sm: 1, eq: -1, ai: 1, tn: 0, cam: 1, soul: 0, spend: 2, tea: 0, live: 3, stash: 1, loud: 1, niche: 0 } },
      { text: "不一定是最热的，但一定是我自己认出来的", effects: { cb: 2, sm: 0, eq: 1, ai: -1, tn: 2, cam: 1, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 25,
    text: "哪种评论最容易获得你的点头？",
    options: [
      { text: "这个舞台真的做得很满，一看就不是糊弄人", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "这个人一上镜就很像真正的明星", effects: { cb: 2, sm: -1, eq: -1, ai: 1, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "他们真的很熟，不是演出来的那种熟", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "这人/这团其实一直有东西，只是没被看见", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 26,
    text: "如果让你删掉一种追星方式，你最舍不得删哪种？",
    options: [
      { text: "刷舞台和直拍复盘", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "看团综和熟人局", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "追本命的神图、单人物料和日常投喂", effects: { cb: 2, sm: 1, eq: -1, ai: 1, tn: 0, cam: 2, soul: 0, spend: 1, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "挖旧物料和被埋没的神东西", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 27,
    text: "你最容易在什么时候突然替别人说话、开始做嘴替？",
    options: [
      { text: "舞台被低估的时候，我会立刻出来纠正", effects: { cb: -1, sm: -2, eq: -2, ai: -1, tn: 1, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 0, loud: 3, niche: 1 } },
      { text: "本命被拍得太神的时候，我忍不住要发图", effects: { cb: 2, sm: -1, eq: -2, ai: 1, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 3, niche: 0 } },
      { text: "一群人相处太可爱、太熟的时候，我会想拉人一起看", effects: { cb: -2, sm: 2, eq: -1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 2, niche: 0 } },
      { text: "冷门好东西没人看见的时候，我会很想替它伸冤", effects: { cb: 0, sm: 0, eq: -1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 2, niche: 3 } }
    ]
  },
  {
    id: 28,
    text: "你对‘韩娱像一场连续剧’这句话的理解更接近？",
    options: [
      { text: "主要体现在回归、打歌、舞台升级这条线", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: -1, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "主要体现在团综、关系线和一起长大的痕迹", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "主要体现在公司操作、热搜和法务区每天都有新剧情", effects: { cb: 0, sm: 1, eq: -1, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "主要体现在旧物料串起来以后，前后都能对上", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 1, cam: 0, soul: 1, spend: 0, tea: 1, live: 0, stash: 2, loud: 0, niche: 1 } }
    ]
  },
  {
    id: 29,
    text: "你更想被别人怎么评价你的追星品味？",
    options: [
      { text: "会看舞台，懂完成度，不是只会跟风尖叫", effects: { cb: -1, sm: -2, eq: 1, ai: -1, tn: 1, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 1 } },
      { text: "眼光毒，一眼就能看出谁最有镜头统治力", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "特别会看人与人之间的那种活气和默契", effects: { cb: -1, sm: 2, eq: 1, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "热闹归热闹，但值钱的东西我通常会先看到", effects: { cb: 0, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  },
  {
    id: 30,
    text: "最容易让你破防的不是夸，而是哪种‘证据’？",
    options: [
      { text: "一场舞台做得太完整，像在跟观众认真交代", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "一张图把人拍成神了，我当场没有嘴硬空间", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 2, loud: 1, niche: 0 } },
      { text: "熟人感太自然了，那种一起过了很多年的味道很难装", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "旧物料一翻，发现这个人/团其实一直都很值得", effects: { cb: 0, sm: 1, eq: 1, ai: -2, tn: 2, cam: 0, soul: 1, spend: 0, tea: 0, live: 0, stash: 2, loud: 0, niche: 2 } }
    ]
  },
  {
    id: 31,
    text: "如果测试结果能给你发一张饭圈工牌，你最想拿哪种？",
    options: [
      { text: "舞台质检员", effects: { cb: -1, sm: -2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 0, niche: 0 } },
      { text: "神图纳税人", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 1, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "团综宿管", effects: { cb: -2, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 0 } },
      { text: "法务旁听生", effects: { cb: 0, sm: 1, eq: 0, ai: 0, tn: -1, cam: 0, soul: 0, spend: 0, tea: 3, live: 0, stash: 1, loud: 1, niche: 0 } }
    ]
  },
  {
    id: 32,
    text: "最后一题：下面哪句最像你自己会发的文案？",
    options: [
      { text: "我不是恋爱脑，我只是需要高质量舞台给我做心理复健。", effects: { cb: -1, sm: -2, eq: -1, ai: -1, tn: 0, cam: 1, soul: 0, spend: 0, tea: 0, live: 1, stash: 1, loud: 2, niche: 0 } },
      { text: "不是我浅，是镜头和 ending 先动的手。", effects: { cb: 2, sm: -1, eq: -1, ai: 2, tn: -1, cam: 3, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 2, niche: 0 } },
      { text: "别人追星上头，我追星续命，我需要的是陪伴感供氧。", effects: { cb: -1, sm: 2, eq: 0, ai: -1, tn: 0, cam: 0, soul: 3, spend: 0, tea: 0, live: 0, stash: 1, loud: 1, niche: 0 } },
      { text: "世界热闹是世界的事，我喜欢是我的事。", effects: { cb: 1, sm: 0, eq: 1, ai: -1, tn: 2, cam: 0, soul: 0, spend: 0, tea: 0, live: 0, stash: 1, loud: 0, niche: 3 } }
    ]
  }
];

export const BADGES = [
  {
    id: "ending_tax",
    name: "ending 纳税人",
    condition: "cam >= 75 && ai > 0",
    text: "你不是颜控，你只是对 ending fairy 有稳定纳税义务。"
  },
  {
    id: "law_audit",
    name: "法务旁听席常驻",
    condition: "tea >= 70",
    text: "你追星不止看作品，还稳定围观公司和法务区热闹。"
  },
  {
    id: "once_oxygen",
    name: "团魂供氧机",
    condition: "soul >= 75 && sm > 0",
    text: "你追星需要群像关系感供氧，没有熟人局你会慢慢掉电。"
  },
  {
    id: "pc_gambler",
    name: "概率学受害者",
    condition: "spend >= 75 && cb > 0",
    text: "你和小卡之间不是交易关系，是命运对赌。"
  },
  {
    id: "offline_convert",
    name: "现场皈依体质",
    condition: "live >= 75",
    text: "屏幕前你还能嘴硬，现场里你根本没有胜算。"
  },
  {
    id: "archive_ghost",
    name: "云盘孤魂",
    condition: "stash >= 75",
    text: "别人爱过就算了，你爱过必须有备份。"
  },
  {
    id: "loudspeaker",
    name: "嘴替扩音器",
    condition: "loud >= 75 && eq < 0",
    text: "你不是普通粉丝，你是互联网尖叫喇叭。"
  },
  {
    id: "niche_miner",
    name: "边角料勘探家",
    condition: "niche >= 75 && tn > 0",
    text: "热的不一定值钱，真正能打的东西经常藏在你手里。"
  },
  {
    id: "old_stage_rehab",
    name: "神台养老保险",
    condition: "ai < 0 && sm < 0 && stash >= 60",
    text: "你具备稳定的老舞台复健能力，属于陈年神物指定护工。"
  },
  {
    id: "group_housing",
    name: "宿舍观察员",
    condition: "soul >= 65 && cb < 0 && sm > 0",
    text: "你对一群人像真的住在一起这件事没有任何抵抗力。"
  }
];
