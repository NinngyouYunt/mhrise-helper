const HR = 4;

const QuestType = {
  HUNT: "狩猎",
  CAPTURE: "捕获",
  MULTI: "连续狩猎",
  DEFEND: "百龙夜行",
  FREE: "探索"
};

const questList = [
  { star: 1, name: "废神社的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 1, name: "冰封群岛的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 2, name: "沙原的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 2, name: "水没林的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 3, name: "熔岩洞的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 2, name: "百龙夜行，来袭", type: QuestType.DEFEND, targets: [] },
  { star: 1, name: "唐伞妖怪", type: QuestType.HUNT, targets: ["伞鸟"] },
  { star: 1, name: "半夜三更击退搔鸟", type: QuestType.HUNT, targets: ["搔鸟"] },
  { star: 1, name: "冰封群岛的镰鼬", type: QuestType.HUNT, targets: ["镰鼬龙王"] },
  { star: 1, name: "眠狗龙王，现身冰封群岛", type: QuestType.HUNT, targets: ["眠狗龙王"] },
  { star: 1, name: "请小心迫近的雪球", type: QuestType.HUNT, targets: ["白兔兽"] },
  { star: 1, name: "奔跑于废神社的毒狗龙王", type: QuestType.HUNT, targets: ["毒狗龙王"] },
  { star: 1, name: "蜂蜜争夺战！", type: QuestType.HUNT, targets: ["青熊兽"] },
  { star: 1, name: "还废神社以夜晚的宁静", type: QuestType.HUNT, targets: [] },
  { star: 1, name: "最近成为话题的麻烦家伙", type: QuestType.HUNT, targets: [] },
  { star: 2, name: "用尾巴转圈圈", type: QuestType.HUNT, targets: ["天狗兽"] },
  { star: 2, name: "认真观察毒妖鸟", type: QuestType.HUNT, targets: ["毒妖鸟"] },
  { star: 2, name: "水没林被水淹没", type: QuestType.HUNT, targets: ["水兽"] },
  { star: 2, name: "土砂龙的硬脑袋", type: QuestType.HUNT, targets: ["土砂龙"] },
  { star: 2, name: "迫近的白影", type: QuestType.HUNT, targets: ["奇怪龙"] },
  { star: 2, name: "沙原中滚动的赤甲兽", type: QuestType.HUNT, targets: ["赤甲兽"] },
  { star: 2, name: "回头一看是岩龙", type: QuestType.HUNT, targets: ["岩龙"] },
  { star: 2, name: "成为女王的方法", type: QuestType.HUNT, targets: ["雌火龙"] },
  { star: 2, name: "鲸吞力士", type: QuestType.HUNT, targets: ["河童蛙"] },
  { star: 2, name: "我也是冠突龙？", type: QuestType.HUNT, targets: [] },
  { star: 2, name: "皮・皮・皮！", type: QuestType.HUNT, targets: [] },
  { star: 2, name: "兔与蛙的相扑练习", type: QuestType.MULTI, targets: ["白兔兽", "河童蛙"] },
  { star: 2, name: "水之兽与火之龙", type: QuestType.MULTI, targets: ["水兽", "雌火龙"] },
  { star: 3, name: "请君入梦", type: QuestType.HUNT, targets: ["人鱼龙"] },
  { star: 3, name: "冰雪斗士", type: QuestType.HUNT, targets: ["雪鬼兽"] },
  { star: 3, name: "飞龙，跃动于地面", type: QuestType.HUNT, targets: ["飞雷龙"] },
  { star: 3, name: "泥，泥泞，泥翁龙", type: QuestType.HUNT, targets: ["泥翁龙"] },
  { star: 3, name: "熔岩洞的暴徒", type: QuestType.HUNT, targets: ["蛮颚龙"] },
  { star: 3, name: "暗夜中疾驰的双星", type: QuestType.HUNT, targets: ["迅龙"] },
  { star: 3, name: "为泡狐所吸引", type: QuestType.HUNT, targets: ["泡狐龙"] },
  { star: 3, name: "王者，降临熔岩洞", type: QuestType.HUNT, targets: ["火龙"] },
  { star: 3, name: "水月雷鸣", type: QuestType.HUNT, targets: ["雷狼龙"] },
  { star: 3, name: "白骑士", type: QuestType.HUNT, targets: ["冰牙龙"] },
  { star: 3, name: "冲向伙伴的咆哮", type: QuestType.HUNT, targets: ["轰龙"] },
  { star: 3, name: "请小心尖锐的角", type: QuestType.HUNT, targets: ["角龙"] },
  { star: 3, name: "鬼火", type: QuestType.HUNT, targets: ["怨虎龙"] },
  { star: 3, name: "尾巴×尾巴", type: QuestType.MULTI, targets: ["天狗兽", "泥翁龙"] },
  { star: 3, name: "狂暴者", type: QuestType.MULTI, targets: ["轰龙", "雪鬼兽"] },
  { star: 3, name: "灾祸中也要保持美丽", type: QuestType.MULTI, targets: ["土砂龙", "飞雷龙", "怨虎龙"] },
  { star: 4, name: "废神社的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 4, name: "冰封群岛的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 5, name: "沙原的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 5, name: "水没林的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 6, name: "熔岩洞的探索之旅", type: QuestType.FREE, targets: [] },
  { star: 4, name: "青色霸主", type: QuestType.DEFEND, targets: [] },
  { star: 4, name: "包围而来的旋风", type: QuestType.HUNT, targets: ["镰鼬龙王"] },
  { star: 4, name: "怪物美食家", type: QuestType.MULTI, targets: ["青熊兽", "搔鸟"] },
  { star: 4, name: "冰天雪地打瞌睡", type: QuestType.MULTI, targets: ["眠狗龙王", "眠狗龙王"] },
  { star: 4, name: "伞鸟圆舞", type: QuestType.HUNT, targets: ["伞鸟"] },
  { star: 4, name: "相扑大赛・冰封群岛", type: QuestType.HUNT, targets: ["河童蛙"] },
  { star: 4, name: "可爱的东西也有尖牙", type: QuestType.HUNT, targets: ["白兔兽"] },
  { star: 4, name: "身披剧毒锦缎", type: QuestType.HUNT, targets: ["毒狗龙王"] },
  { star: 4, name: "某夜，狩猎奇怪龙", type: QuestType.HUNT, targets: ["奇怪龙"] },
  { star: 4, name: "“守护通往兔团子的道路”之卷", type: QuestType.HUNT, targets: [] },
  { star: 4, name: "“蛋团子争夺战！”之卷", type: QuestType.MULTI, targets: ["搔鸟", "搔鸟"] },
  { star: 4, name: "掌握吧！单手剑之型", type: QuestType.CAPTURE, targets: ["伞鸟"] },
  { star: 4, name: "理解吧！狩猎笛之型", type: QuestType.MULTI, targets: ["河童蛙"] },
  { star: 4, name: "变幻吧！剑斧之型", type: QuestType.MULTI, targets: ["白兔兽", "奇怪龙"] },
  { star: 4, name: "学习吧！轻弩之型", type: QuestType.MULTI, targets: ["眠狗龙王", "毒狗龙王"] },
  { star: 4, name: "慎重派与冲锋派", type: QuestType.HUNT, targets: [] },
  { star: 4, name: "圆滚滚的可爱青熊兽", type: QuestType.CAPTURE, targets: ["青熊兽"] },
  { star: 5, name: "与水共存之物", type: QuestType.HUNT, targets: ["水兽"] },
  { star: 5, name: "在泥沼中跌倒也要爬起来", type: QuestType.HUNT, targets: ["土砂龙"] },
  { star: 5, name: "请小心沙原的魔球", type: QuestType.MULTI, targets: ["赤甲兽", "赤甲兽"] },
  { star: 5, name: "一柿入魂", type: QuestType.HUNT, targets: ["天狗兽"] },
  { star: 5, name: "其能成为营养亦可化作剧毒", type: QuestType.HUNT, targets: ["毒妖鸟"] },
  { star: 5, name: "滴水穿岩", type: QuestType.HUNT, targets: ["岩龙"] },
  { star: 5, name: "为女王所吸引", type: QuestType.HUNT, targets: ["雌火龙"] },
  { star: 5, name: "沼中危影", type: QuestType.HUNT, targets: ["泥鱼龙"] },
  { star: 5, name: "看清吧！大剑之型", type: QuestType.MULTI, targets: ["天狗兽", "天狗兽"] },
  { star: 5, name: "用身体记住吧！大锤之型", type: QuestType.MULTI, targets: ["毒妖鸟", "土砂龙"] },
  { star: 5, name: "领会吧！长枪之型", type: QuestType.CAPTURE, targets: ["雌火龙"] },
  { star: 5, name: "融为一体吧！盾斧之型", type: QuestType.MULTI, targets: ["水兽", "泥鱼龙"] },
  { star: 5, name: "击穿吧！重弩之型", type: QuestType.MULTI, targets: ["岩龙", "赤甲兽"] },
  { star: 5, name: "最近成为话题的坚硬家伙", type: QuestType.HUNT, targets: [] },
  { star: 5, name: "水没林的扰人群体", type: QuestType.HUNT, targets: [] },
  { star: 5, name: "吞噬寒地之影", type: QuestType.MULTI, targets: ["奇怪龙", "河童蛙"] },
  { star: 6, name: "风神", type: QuestType.DEFEND, targets: ["风神龙"] },
  { star: 6, name: "山河一闪，雷鸣响彻", type: QuestType.HUNT, targets: ["雷狼龙"] },
  { star: 6, name: "邀往冥府的歌声", type: QuestType.HUNT, targets: ["人鱼龙"] },
  { star: 6, name: "打磨琥珀色的牙", type: QuestType.HUNT, targets: ["冰牙龙"] },
  { star: 6, name: "飞跃头顶的威胁", type: QuestType.HUNT, targets: ["飞雷龙"] },
  { star: 6, name: "穷追猛打蛮颚龙", type: QuestType.HUNT, targets: ["蛮颚龙"] },
  { star: 6, name: "赤红双眸，斩断暗夜", type: QuestType.HUNT, targets: ["迅龙"] },
  { star: 6, name: "绽放于天际的红莲", type: QuestType.HUNT, targets: ["火龙"] },
  { star: 6, name: "妖艳之舞", type: QuestType.HUNT, targets: ["泡狐龙"] },
  { star: 6, name: "“赛跑泥巴大骚动！”之卷", type: QuestType.MULTI, targets: ["迅龙", "泥鱼龙"] },
  { star: 6, name: "磨砺吧！太刀之型", type: QuestType.MULTI, targets: ["雷狼龙", "泡狐龙"] },
  { star: 6, name: "撕裂吧！双剑之型", type: QuestType.MULTI, targets: ["蛮颚龙", "雌火龙"] },
  { star: 6, name: "磨炼吧！铳枪之型", type: QuestType.CAPTURE, targets: ["冰牙龙"] },
  { star: 6, name: "修炼吧！操虫棍之型", type: QuestType.MULTI, targets: ["人鱼龙", "伞鸟"] },
  { star: 6, name: "锻炼吧！弓之型", type: QuestType.MULTI, targets: ["飞雷龙", "飞雷龙"] },
  { star: 6, name: "熔岩洞扫荡战", type: QuestType.HUNT, targets: [] },
  { star: 6, name: "英雄豪杰", type: QuestType.MULTI, targets: ["雷狼龙", "泡狐龙"] },
  { star: 7, name: "雪鬼兽来了", type: QuestType.HUNT, targets: ["雪鬼兽"] },
  { star: 7, name: "身缠鬼火者", type: QuestType.HUNT, targets: ["怨虎龙"] },
  { star: 7, name: "招往泥海", type: QuestType.HUNT, targets: ["泥翁龙"] },
  { star: 7, name: "奔驰于地底的角龙", type: QuestType.HUNT, targets: ["角龙"] },
  { star: 7, name: "轰隆隆的咆哮", type: QuestType.HUNT, targets: ["轰龙"] },
  { star: 7, name: "妖魔鬼怪", type: QuestType.HUNT, targets: ["金狮子"] },
  { star: 7, name: "吹火贵妇", type: QuestType.HUNT, targets: ["妃蜘蛛"] },
  { star: 7, name: "雷神", type: QuestType.HUNT, targets: ["雷神龙"] },
  { star: 7, name: "“注意火候！紫炎与火球”之卷", type: QuestType.MULTI, targets: ["火龙", "怨虎龙"] },
  { star: 7, name: "“刺穿兔团子的四根角！”之卷", type: QuestType.MULTI, targets: ["角龙", "角龙"] },
  { star: 8, name: "烈焰与阔步横行的强者们", type: QuestType.MULTI, targets: ["雌火龙", "轰龙", "妃蜘蛛"] },
  { star: 8, name: "烈焰啊，平息怒发吧", type: QuestType.CAPTURE, targets: ["金狮子"] },
  { star: 7, name: "废神社大骚动", type: QuestType.MULTI, targets: ["泥翁龙", "泡狐龙"] },
  { star: 7, name: "勇猛之力宛如大地", type: QuestType.MULTI, targets: ["雪鬼兽", "河童蛙"] },
  { star: 7, name: "激战・激烈・激励之乱", type: QuestType.MULTI, targets: ["角龙", "蛮颚龙"] },
  { star: 7, name: "请小心暴徒", type: QuestType.MULTI, targets: ["金狮子", "雷狼龙"] },
  { star: 7, name: "四处逼近的威胁", type: QuestType.MULTI, targets: ["妃蜘蛛", "奇怪龙"] },
  { star: 7, name: "疾风怒涛的大舞台", type: QuestType.MULTI, targets: ["飞雷龙", "迅龙", "轰龙"] },
  { star: 8, name: "远古幻影", type: QuestType.HUNT, targets: ["霞龙"] },
  { star: 8, name: "风暴之黑影", type: QuestType.HUNT, targets: ["钢龙"] },
  { star: 8, name: "炎国之王", type: QuestType.HUNT, targets: ["炎王龙"] },
  { star: 8, name: "倾泻而下的爆鳞箭矢", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "爆鳞龙，再现", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "爆鳞龙，再现", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "爆鳞龙，再现", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "爆鳞龙，再现", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "爆鳞龙，再现", type: QuestType.HUNT, targets: ["爆鳞龙"] },
  { star: 8, name: "暴饮暴食，霸主・青熊兽", type: QuestType.HUNT, targets: ["霸主 青熊兽"] },
  { star: 8, name: "优美高妙，霸主・雌火龙", type: QuestType.HUNT, targets: ["霸主 雌火龙"] },
  { star: 8, name: "万紫千红，霸主・泡狐龙", type: QuestType.HUNT, targets: ["霸主 泡狐龙"] },
  { star: 8, name: "倪泰教官的挑战书・其一", type: QuestType.MULTI, targets: ["泥翁龙", "雷狼龙"] },
  { star: 8, name: "倪泰教官的挑战书・其二", type: QuestType.MULTI, targets: ["雪鬼兽", "金狮子"] },
  { star: 8, name: "倪泰教官的挑战书・其三", type: QuestType.MULTI, targets: ["怨虎龙", "迅龙"] },
];

export const QuestInfo = {
  questList,
  HR,
  QuestType
};