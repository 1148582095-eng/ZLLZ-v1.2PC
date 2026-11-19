var defaultNotes={
  "todo-img-009":[
    {author:"武甲",unit:"台湾省网信办",time:"2026-09-14 11:30:22",text:"已协调情指中心值班员完成初步数据汇总，正在导出重点账号分析报表。"},
    {author:"齐杰",unit:"指挥中心",time:"2026-09-14 09:15:08",text:"已接收日报研判任务，数据核查范围已锁定，请台湾省专班加快溯源进度。"}
  ],
  "todo-img-011":[
    {author:"武乙",unit:"台湾省网信办",time:"2026-09-15 16:20:45",text:"已调取涉事直播录像并固定电子证据，涉事人员身份信息正在依法核实。"}
  ],
  "todo-img-006":[
    {author:"武甲",unit:"台湾省网信办",time:"2026-09-14 09:00:15",text:"值班备勤排班表已初步核对，各区县值班骨干名单已汇编完毕。"}
  ],
  "todo-returned":[
    {author:"武甲",unit:"台湾省网信办",time:"2026-08-17 15:40:12",text:"收到退回意见，正在补充第三方权威鉴定材料与传播溯源截图。"}
  ],
  "todo-1":[
    {author:"李明峰",unit:"综合宣传处",time:"2026-08-17 10:12:30",text:"该词条热度趋稳，未见规模化不良言论聚集，保持例行巡查。"}
  ]
};
var draftRows=[
  {
    key:"draft-1",
    id:"CG-20260914-001",
    title:"关于对涉突发网络舆情开展常态化监测研判的指令",
    template:"舆情处置-限时回执",
    time:"2026-09-14 11:20:00",
    receiver:"齐杰、李明峰",
    sender:"武丁",
    processor:"-",
    req:"限时回执",
    status:"草稿",
    origin:"草稿",
    deadline:"2026-09-15 18:00:00",
    description:"草稿说明：拟结合本级巡查与研判成果，对涉突发舆情重点账号实施核查，待核对名单后下发。"
  },
  {
    key:"draft-2",
    id:"CG-20260912-002",
    title:"关于排查重点自媒体违规炒作虚假涉汛信息的专项通知",
    template:"舆情处置-回执",
    time:"2026-09-12 16:45:10",
    receiver:"各区县网信办",
    sender:"武丁",
    processor:"-",
    req:"回执",
    status:"草稿",
    origin:"草稿",
    deadline:"2026-09-13 18:00:00",
    description:"草稿说明：拟督促各辖区网信工作机构对相关网络不良账号进行逐一摸底核实。"
  },
  {
    key:"draft-3",
    id:"CG-20260911-003",
    title:"2026年第三季度涉政公文规范表述与错别字排查通报",
    template:"错误表述-仅阅读",
    time:"2026-09-11 14:15:30",
    receiver:"全省直属网信机构",
    sender:"武丁",
    processor:"-",
    req:"仅阅读",
    status:"草稿",
    origin:"草稿",
    deadline:"2026-09-12 18:00:00",
    description:"草稿说明：整理近期政务公众号常见领导人职务表述与错别字清单供查阅对照。"
  },
  {
    key:"draft-4",
    id:"CG-20260910-004",
    title:"关于重点门户网站政务公开栏目严重错别字纠错整改指令",
    template:"错误表述-限时回执",
    time:"2026-09-10 09:30:22",
    receiver:"技术保障与应急响应组",
    sender:"武丁",
    processor:"-",
    req:"限时回执",
    status:"草稿",
    origin:"草稿",
    deadline:"2026-09-11 12:00:00",
    description:"草稿说明：监测到部分栏目用词不严谨，拟下发限时整改指令并在完成修正后提交回执截图。"
  }
];
var systemSettings = {
  activeTab: "transfer", // "transfer" | "subtask"
  searchKw: "",
  transferReasons: [
    { id: "tr-1", name: "跨部门协同办理", code: "CROSS_DEPT", enabled: true, count: 48, desc: "涉及其他处室、警种或外单位主管业务范围需移交并联协同", updatedAt: "2026-09-14 10:30" },
    { id: "tr-2", name: "非本单位管辖职责", code: "NON_JURISDICTION", enabled: true, count: 32, desc: "涉事主体、域名或物理服务器不属于本级/本辖区管辖范畴", updatedAt: "2026-09-12 16:45" },
    { id: "tr-3", name: "专业技术支援处置", code: "TECH_SUPPORT", enabled: true, count: 25, desc: "需网安逆向溯源、电子证据固化、渗透反制或专业技术研判", updatedAt: "2026-09-10 09:15" },
    { id: "tr-4", name: "涉法涉诉专班移交", code: "LEGAL_CASE", enabled: true, count: 19, desc: "转交涉法涉诉专班、法制部门或综合行政执法支队立案处理", updatedAt: "2026-09-08 14:20" },
    { id: "tr-5", name: "属地区县下沉核查", code: "LOCAL_DISTRICT", enabled: true, count: 14, desc: "分派给属地区县网信办或现场值班骨干开展线下走访核实", updatedAt: "2026-09-05 11:00" },
    { id: "tr-6", name: "其他专项转派", code: "OTHER", enabled: true, count: 8, desc: "领导临时交办、值班人员交接班或其它专项流转事务", updatedAt: "2026-09-01 08:30" }
  ],
  subtaskReasons: [
    { id: "sr-1", name: "多主体协同处置", code: "MULTI_ENTITY", enabled: true, count: 56, desc: "需多部门、多处室多岗协同并行推进处置工作", updatedAt: "2026-09-14 09:20" },
    { id: "sr-2", name: "多平台交叉溯源", code: "MULTI_PLATFORM", enabled: true, count: 42, desc: "涉及微博、抖音、快手、微信多平台需要分路并行排查", updatedAt: "2026-09-13 15:10" },
    { id: "sr-3", name: "专项取证任务下发", code: "FORENSIC_TASK", enabled: true, count: 38, desc: "派发电子证据固化、区块链存证及后台调证等专业子任务", updatedAt: "2026-09-11 11:40" },
    { id: "sr-4", name: "区县属地同步核验", code: "DISTRICT_VERIFY", enabled: true, count: 29, desc: "属地线下走访、涉事单位或涉事主体现场核验排查", updatedAt: "2026-09-09 17:05" },
    { id: "sr-5", name: "宣传引导与管控分流", code: "PUBLICITY_GUIDE", enabled: true, count: 21, desc: "正面评论引导、热搜降温控评与网络舆论良性疏导", updatedAt: "2026-09-06 13:50" },
    { id: "sr-6", name: "其他子任务拆分", code: "OTHER_SUBTASK", enabled: true, count: 12, desc: "其他工作分解、资料调取与阶段性协同事项", updatedAt: "2026-09-02 10:15" }
  ],
  rejectReasons: [
    { id: "rj-1", name: "佐证材料不充分", code: "INSUFFICIENT_EVIDENCE", enabled: true, count: 22, desc: "回执缺少账号溯源、下架凭证或现场核验照片等关键佐证", updatedAt: "2026-09-14 11:20" },
    { id: "rj-2", name: "处置结论不完整", code: "INCOMPLETE_CONCLUSION", enabled: true, count: 16, desc: "核查结论过于简略，未说明舆情走势、整改措施及后续管控安排", updatedAt: "2026-09-12 15:40" },
    { id: "rj-3", name: "责任主体认定有误", code: "WRONG_SUBJECT", enabled: true, count: 11, desc: "涉事主体、属地或平台认定错误，需重新厘清责任后报送", updatedAt: "2026-09-09 10:05" },
    { id: "rj-4", name: "时限内未按要求办结", code: "OVERDUE_UNFINISHED", enabled: true, count: 9, desc: "限时任务未在规定时限内完成闭环，或延期说明缺失", updatedAt: "2026-09-07 16:30" },
    { id: "rj-5", name: "其他驳回重办", code: "OTHER_REJECT", enabled: true, count: 6, desc: "领导审核退回、格式不规范或其它需补充完善后重报的情形", updatedAt: "2026-09-03 09:18" }
  ]
};
function getSettingReasonList(type){
  if(type === "subtask") return systemSettings.subtaskReasons;
  if(type === "reject"){
    if(!systemSettings.rejectReasons) systemSettings.rejectReasons = [];
    return systemSettings.rejectReasons;
  }
  return systemSettings.transferReasons;
}
function getSettingReasonLabel(type){
  if(type === "subtask") return "生成子单原因分类";
  if(type === "reject") return "驳回原因分类";
  return "转办原因分类";
}
function closeNavSettingsMenu(){
  var drop = document.getElementById("nav-settings-dropdown");
  var trig = document.getElementById("nav-settings-trigger");
  if(drop) drop.classList.remove("show");
  if(trig) trig.classList.remove("open");
}
function toggleNavSettingsMenu(){
  var drop = document.getElementById("nav-settings-dropdown");
  var trig = document.getElementById("nav-settings-trigger");
  if(!drop) return;
  var willOpen = !drop.classList.contains("show");
  drop.classList.toggle("show", willOpen);
  if(trig) trig.classList.toggle("open", willOpen);
}
function openSettingsSection(menu){
  state.page = "settings";
  state.settingsMenu = menu === "storage" ? "storage" : "dict";
  closeNavSettingsMenu();
  render();
  window.scrollTo(0, 0);
}

var issueTemplates = [
  {
    id: "TPL202602110001",
    name: "舆情处置-限时回执",
    category: "舆情处置",
    requirement: "限时回执",
    scope: "通用",
    version: "v2.1",
    usedCount: 1420,
    desc: "适用于突发敏感舆情处置指令下发，包含精准溯源字段、整改要求及严格的倒计时回执与审批闭环。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "deadline", label: "限时时间", type: "datetime", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "舆情来源", type: "text", required: true, default: "" },
      { key: "url", label: "舆情链接", type: "text", required: false, default: "" },
      { key: "description", label: "舆情说明", type: "textarea", required: true, default: "" }
    ]
  },
  {
    id: "TPL202602110002",
    name: "舆情处置-回执",
    category: "舆情处置",
    requirement: "回执",
    scope: "通用",
    version: "v2.0",
    usedCount: 890,
    desc: "常态化舆情处置协同指令，支持多附件上传与结构化处置报告回执提报，无需设置硬性倒计时要求。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "舆情来源", type: "text", required: true, default: "" },
      { key: "url", label: "舆情链接", type: "text", required: false, default: "" },
      { key: "description", label: "舆情说明", type: "textarea", required: true, default: "" },
      { key: "note", label: "备注", type: "textarea", required: false, default: "" }
    ]
  },
  {
    id: "TPL202602110003",
    name: "舆情处置-仅阅读",
    category: "舆情处置",
    requirement: "仅阅读",
    scope: "通用",
    version: "v1.8",
    usedCount: 654,
    desc: "适用于舆情通报、风险提示与工作周知类指令，接收人点击阅读后系统自动更新已读状态，免填回执表单。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "发布渠道", type: "text", required: true, default: "" },
      { key: "description", label: "通报正文", type: "textarea", required: true, default: "" },
      { key: "note", label: "阅读要求", type: "textarea", required: false, default: "" }
    ]
  },
  {
    id: "TPb40f9649f7f24043a6ce69d81e0e7",
    name: "文件测试模板（机构专版）",
    category: "舆情处置",
    requirement: "回执",
    scope: "机构",
    version: "v3.0",
    usedCount: 312,
    desc: "机构自定义多模态附件模板，支持专项大文件、音视频采样包上传及自定义流转审批链条。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "信息源", type: "text", required: true, default: "" },
      { key: "description", label: "指令描述", type: "textarea", required: true, default: "" },
      { key: "note", label: "保密提示", type: "textarea", required: false, default: "" }
    ]
  },
  {
    id: "TPL202602110004",
    name: "错误表述-限时回执",
    category: "错误表述",
    requirement: "限时回执",
    scope: "通用",
    version: "v2.2",
    usedCount: 528,
    desc: "专用于政务新媒体、官方网站等严重错别字、不当用语与违规涉政表述快速纠错与限时改版下架。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "deadline", label: "整改时限", type: "datetime", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "刊载平台", type: "text", required: true, default: "" },
      { key: "description", label: "错误表述及修改建议", type: "textarea", required: true, default: "" },
      { key: "note", label: "复核要求", type: "textarea", required: false, default: "" }
    ]
  },
  {
    id: "TPL202602110005",
    name: "错误表述-仅阅读",
    category: "错误表述",
    requirement: "仅阅读",
    scope: "通用",
    version: "v1.5",
    usedCount: 280,
    desc: "违规词汇库更新提示及政务发文高频错词周知，供各级审校人员查阅与对照防范。",
    fields: [
      { key: "title", label: "指令标题", type: "text", required: true, default: "" },
      { key: "urgency", label: "紧急程度", type: "select", required: true, default: "" },
      { key: "source", label: "编制单位", type: "text", required: true, default: "" },
      { key: "description", label: "通报摘要", type: "textarea", required: true, default: "" },
      { key: "note", label: "学习提示", type: "textarea", required: false, default: "" }
    ]
  }
];

function getTemplateById(id){
  return issueTemplates.filter(function(t){return t.id===id})[0] || issueTemplates[0];
}

var state={
  page:"todo",
  mySubPage:"todo",
  detailSource:"todo",
  detailKey:"todo-img-009",
  annotations:{},
  settingsTab:"transfer",
  settingsSearchKw:"",
  issueTplCat:"全部",
  issueTplKw:"",
  listTabs:{todo:"全部",sent:"全部",read:"全部",done:"全部",draft:"全部","sent-mgmt":"全部"},
  pageSizes:{todo:10,sent:10,read:10,done:10,draft:10,"sent-mgmt":10,external:10},
  pageNumbers:{todo:1,sent:1,read:1,done:1,draft:1,"sent-mgmt":1,external:1},
  extGroupId:"all",
  extStatusTab:"all",
  extStatusPick:["normal","disabled"],
  extStatusDraft:["normal","disabled"],
  extStatusOpen:false,
  extKw:"",
  extAddingParentId:null,
  extRenamingId:null,
  extPhoneReveal:{},
  extWxReveal:{},
  extEditingId:null,
  extSelected:{},
  extExpanded:{},
  quickFlags:{todayDue:false,overdue:false,onlyMine:false},
  issueDraftView:false,
  filterQuery:{
    todo:{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"},
    sent:{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"},
    read:{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"},
    done:{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"},
    draft:{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"},
    "sent-mgmt":{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部"}
  },
  selectedSent:{},
  statsDrilldown:null,
  stats2Filter:{
    template:"全部",
    urgency:"全部",
    source:"全部",
    measure:"全部",
    timePeriod:"近30天",
    dateRange:"近30天",
    orgKw:"",
    searchKw:"",
    activeTab:"overview"
  },
  stats2SelectedRecord:null,
  stats2OrgTab:"ext-org",
  stats2ExpandedOrgs:{},
  stats2AllOrgsExpanded:false,
  stats2SelectedReasonType:null,
  stats2SelectedReasonTitle:null,
  viewMode:{todo:"table",sent:"table",done:"table"},
  acceptedMap:{"todo-img-009":true,"todo-img-011":true},
  detailTab:"notes",
  flowViewMode:"table",
  showNoteEditor:false,
  notes:defaultNotes
};
var currentUser="武甲";
function switchDemoUser(userName){
  currentUser=userName;
  var avatarEl=document.getElementById("top-user-avatar");
  var nameEl=document.getElementById("top-user-name");
  if(avatarEl) avatarEl.textContent=userName;
  if(nameEl) nameEl.innerHTML=escapeHtml(userName)+'<i data-lucide="chevron-down" width="14" height="14"></i>';
  document.querySelectorAll("[data-action='switch-demo-user']").forEach(function(btn){
    btn.classList.toggle("active", btn.dataset.user===userName);
  });
  var userDrop = document.getElementById("user-profile-dropdown");
  var userTrig = document.getElementById("user-profile-trigger");
  if(userDrop) userDrop.classList.remove("show");
  if(userTrig) userTrig.classList.remove("active");
  if(state.page==="detail"){
    state.page="todo";
  }
  if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
  state.pageNumbers.todo=1;
  state.pageNumbers.sent=1;
  state.pageNumbers.done=1;
  state.pageNumbers["sent-mgmt"]=1;
  showToast("已切换当前演示用户为【"+userName+"】");
  render();
  if(window.lucide) lucide.createIcons();
}
var _countdownOffsetMap={
  "todo-img-009": 19 * 3600 * 1000,
  "todo-img-011": 4 * 3600 * 1000,
  "todo-img-012": 6.5 * 3600 * 1000,
  "todo-3": 7 * 3600 * 1000 + 59 * 60 * 1000 + 16 * 1000,
  "todo-transfer": 28 * 3600 * 1000 + 45 * 60 * 1000,
  "todo-returned": -15 * 3600 * 1000,
  "sent-1": 18 * 3600 * 1000,
  "transfer-child": 26 * 3600 * 1000
};
var _countdownBaseTime=Date.now();
function getRowTargetMs(row){
  if(!row)return Date.now();
  if(!row._targetMs){
    var offset=_countdownOffsetMap[row.key];
    if(offset!==undefined){
      row._targetMs=_countdownBaseTime+offset;
    }else if(row.deadline){
      var parsed=new Date(row.deadline.replace(/-/g,"/")).getTime();
      row._targetMs=isNaN(parsed)?(_countdownBaseTime+8*3600*1000):parsed;
    }else{
      row._targetMs=_countdownBaseTime+8*3600*1000;
    }
  }
  return row._targetMs;
}
function formatDeadlineDate(ms){
  var d=new Date(ms),pad=function(n){return String(n).padStart(2,"0")};
  return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+" "+pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds());
}
function getRowDeadlineStr(row){
  return formatDeadlineDate(getRowTargetMs(row));
}
function getCountdownData(targetMs){
  var diff=targetMs-Date.now();
  if(diff<=0){
    var passed=Math.abs(diff);
    var d=Math.floor(passed/86400000);
    var h=Math.floor((passed%86400000)/3600000);
    var m=Math.floor((passed%3600000)/60000);
    var s=Math.floor((passed%60000)/1000);
    return {
      overdue:true,
      days:d,
      hours:h,
      minutes:m,
      seconds:s,
      html:(d>0?"<b>"+d+"</b>天 ":"")+"<b>"+String(h).padStart(2,"0")+"</b>时<b>"+String(m).padStart(2,"0")+"</b>分<b>"+String(s).padStart(2,"0")+"</b>秒"
    };
  }
  var d=Math.floor(diff/86400000);
  var h=Math.floor((diff%86400000)/3600000);
  var m=Math.floor((diff%3600000)/60000);
  var s=Math.floor((diff%60000)/1000);
  return {
    overdue:false,
    days:d,
    hours:h,
    minutes:m,
    seconds:s,
    html:(d>0?"<b>"+d+"</b>天 ":"")+"<b>"+String(h).padStart(2,"0")+"</b>时<b>"+String(m).padStart(2,"0")+"</b>分<b>"+String(s).padStart(2,"0")+"</b>秒"
  };
}
function updateAllCountdowns(){
  document.querySelectorAll("[data-countdown-key]").forEach(function(badge){
    var key=badge.dataset.countdownKey;
    var row=taskRows.filter(function(r){return r.key===key})[0];
    if(!row)return;
    var cd=getCountdownData(getRowTargetMs(row));
    var digits=badge.querySelector("[data-digits-key]");
    if(digits)digits.innerHTML=cd.html;
    var label=badge.querySelector(".countdown-label");
    if(label)label.textContent=cd.overdue?"已超时":"剩余";
    badge.className="countdown-badge "+(cd.overdue?"overdue":(cd.days===0&&cd.hours<2?"urgent":"active"));
  });
  var detailWrap=document.querySelector("[data-detail-countdown-target]");
  if(detailWrap){
    var target=Number(detailWrap.dataset.detailCountdownTarget);
    var cd=getCountdownData(target);
    var elDay=detailWrap.querySelector("[data-cd-day]");
    var elHour=detailWrap.querySelector("[data-cd-hour]");
    var elMin=detailWrap.querySelector("[data-cd-min]");
    var elSec=detailWrap.querySelector("[data-cd-sec]");
    if(elDay)elDay.textContent=cd.days;
    if(elHour)elHour.textContent=String(cd.hours).padStart(2,"0");
    if(elMin)elMin.textContent=String(cd.minutes).padStart(2,"0");
    if(elSec)elSec.textContent=String(cd.seconds).padStart(2,"0");
  }
}
setInterval(updateAllCountdowns,1000);
var taskRows=[
  // === 武甲工单数据 ===
  {
    key:"todo-wj-approve",
    id:"YQCZ1924020260914092015",
    idShort:"015",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:20",
    urgency:"特急",
    categoryTag:"核查·审核",
    direction:"我下发",
    title:"关于对涉台虚假信息恶意编造源头查证与协同管控报告",
    template:"重大舆情回执审核模板",
    path:"指令流转 > 涉台舆情核查",
    time:"2026-09-14 09:20:00",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 18:00:00",
    source:"专网监测调度平台",
    description:"请核查境外推手操纵涉台虚假信息恶意煽动对立的信源矩阵，查清账号归属及资金链，并限时报送落地取证处置结论供审核。",
    images:2,
    files:["涉网虚假信息传播链条图谱.pdf"],
    receipt:{
      processor:"武乙",
      time:"2026-09-14 11:20:00",
      duration:"1小时15分",
      note:"专班已查实涉案3个重点引流境外虚假信源矩阵，掌握境内推手2人真实身份信息，已完成电子取证固化并同步下发属地网络安全支队采取关停封堵措施，处置闭环。",
      images:2,
      files:["涉案账号矩阵溯源证据链.pdf","属地网络安全协同拦截表.xlsx"]
    }
  },
  {
    key:"todo-wj-approve-wd",
    id:"YQCZ1924020260914111500",
    idShort:"500",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:10",
    urgency:"加急",
    categoryTag:"商誉·阻断",
    direction:"我下发",
    title:"涉重点涉企虚假商誉侵害舆情快速阻断及属地核查结报",
    template:"涉企侵权快速处置模板",
    path:"指令流转 > 涉企维权",
    time:"2026-09-14 09:10:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 17:00:00",
    source:"涉企网络侵权举报专区",
    description:"某自媒体集中发布不实虚假言论侵害重点龙头企业商誉，请武丁同志限时查证首发账号并协调平台阻断处置，报送结报审批。",
    receipt:{
      processor:"武丁",
      time:"2026-09-14 11:15:00",
      duration:"2小时05分",
      note:"已会同市场监管部门与平台风控中心对涉事3个首发黑产账号实施永久封禁，累计清理违规短视频240余条，阻断次生舆情扩散。",
      images:2,
      files:["首发账号侵权取证报告.pdf","平台处置封禁公函.pdf"]
    }
  },
  {
    key:"todo-wj-accept",
    id:"YQCZ1924020260914083000",
    idShort:"448",
    type:"待办",
    senderOrg:"省委办公厅情指中心",
    sender:"张伟",
    senderTime:"08:30",
    urgency:"平急",
    categoryTag:"固定·日报",
    direction:"发给我",
    title:"【每日固定】全市涉网重点要素与舆情态势每日研判日报 (9月14日)",
    template:"涉网要素研判日报模板",
    path:"指令流转 > 每日研判",
    time:"2026-09-14 08:30:00",
    receiver:"武甲",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-14 17:00:00",
    responseCountdown:"00小时25分",
    source:"专网情指指挥调度平台",
    description:"请各值班专班结合各区县网络巡查数据，汇总今日涉网重点要素动态、热点舆情趋势及境外炒作苗头，于当日17:00前完成研判日报报送。",
    images:2,
    files:["全市重点网络要素监测表.xlsx","日报格式规范要求.pdf"]
  },
  {
    key:"todo-wj-handling",
    id:"YQCZ1924020260914091522",
    idShort:"815",
    type:"待办",
    senderOrg:"市公安局指挥情报处",
    sender:"李明峰",
    senderTime:"09:15",
    urgency:"加急",
    categoryTag:"突发·执法",
    direction:"发给我",
    title:"关于某短视频平台假冒公安交警执法直播落地查证与行政处罚处置",
    template:"突发警情处置回执模板",
    path:"指令流转 > 执法协查",
    time:"2026-09-14 09:15:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 20:00:00",
    handleCountdown:"03小时45分",
    source:"短视频平台巡查",
    description:"接群众举报，某短视频账号假冒公安执法交警开展直播带货涉嫌招摇撞骗。请立即配合属地交警与网信执法支队开展人员身份核查、涉事直播间电子取证，并在规定时限内反馈拟处罚处置情况。",
    images:3,
    files:["涉事直播间取证录屏.mp4","网民举报线索登记表.docx"]
  },
  {
    key:"todo-wj-rejected",
    id:"YQCZ1924020260913164012",
    idShort:"902",
    type:"待办",
    senderOrg:"市公安局网安总队",
    sender:"陈默",
    senderTime:"16:40",
    urgency:"加急",
    categoryTag:"逆向·技术",
    direction:"发给我",
    title:"涉网重点黑灰产诈骗引流通道技术逆向分析专项报告",
    template:"技术逆向核验模板",
    path:"指令流转 > 技术对抗",
    time:"2026-09-13 16:40:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    rejected:true,
    rejectReason:"涉诈IP归属地技术反查证据不充分，未附带网络服务商节点反查指纹及跳板路由链路，请补齐后重新提交审核。",
    deadline:"2026-09-15 15:00:00",
    handleCountdown:"02小时30分",
    source:"网安情报感知系统",
    description:"针对近期利用伪装短链接引流境外涉诈博彩平台的异常行为开展技术逆向溯源，摸排落地反制措施。",
    files:["涉诈引流样本特征库.pcap"]
  },
  {
    key:"todo-wj-resp-gt1d",
    id:"YQCZ1924020260914101001",
    idShort:"001",
    type:"待办",
    senderOrg:"省网络与信息安全应急指挥中心",
    sender:"张伟",
    senderTime:"10:00",
    urgency:"平急",
    categoryTag:"安全·巡检",
    direction:"发给我",
    title:"全省重要政务云基础设施例行网络安全加固自查",
    template:"舆情处置-限时回执",
    path:"指令流转 > 安全巡检",
    time:"2026-09-14 10:00:00",
    receiver:"武甲",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-17 18:00:00",
    responseCountdown:"01天18小时",
    source:"网络安全监测平台",
    description:"请各节点责任人对辖区政务云主机进行例行防病毒与安全补丁自查并反馈。"
  },
  {
    key:"todo-wj-hand-gt1d",
    id:"YQCZ1924020260914101002",
    idShort:"002",
    type:"待办",
    senderOrg:"省委网信办综合处",
    sender:"李明峰",
    senderTime:"09:30",
    urgency:"加急",
    categoryTag:"合规·排查",
    direction:"发给我",
    title:"关于重点新媒体账号运营主体资质合规性专项核查",
    template:"错误表述-限时回执",
    path:"指令流转 > 专项核查",
    time:"2026-09-14 09:30:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-18 12:00:00",
    handleCountdown:"02天10小时",
    source:"新媒体监管系统",
    description:"核查重点新媒体账号主体备案信息，完善台账并提交核验回执。"
  },
  {
    key:"todo-wj-resp-overdue",
    id:"YQCZ1924020260914101003",
    idShort:"003",
    type:"待办",
    senderOrg:"网安监察支队指挥中心",
    sender:"齐杰",
    senderTime:"08:15",
    urgency:"特急",
    categoryTag:"突发·预警",
    direction:"发给我",
    title:"涉嫌非法数据跨境传输风险异常IP溯源与紧急封堵",
    template:"舆情处置-限时回执",
    path:"指令流转 > 应急阻断",
    time:"2026-09-14 08:15:00",
    receiver:"武甲",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-14 10:00:00",
    handleOverdue:"02小时15分",
    source:"数据安全监测中心",
    description:"监测到异常大流量数据跨境传输，请紧急核查并采取近源封堵策略。"
  },
  {
    key:"todo-wj-hand-overdue",
    id:"YQCZ1924020260914101004",
    idShort:"004",
    type:"待办",
    senderOrg:"技术保障与应急响应组",
    sender:"谭星",
    senderTime:"07:45",
    urgency:"特急",
    categoryTag:"漏洞·整改",
    direction:"发给我",
    title:"核心政务数据库高危0day漏洞应急复测与加固结报",
    template:"错误表述-限时回执",
    path:"指令流转 > 漏洞整改",
    time:"2026-09-13 18:00:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-14 08:00:00",
    handleOverdue:"05小时30分",
    source:"国家网络安全通报中心",
    description:"请复测0day漏洞修复补丁安装效果，完成渗透测试并提交加固结报。"
  },
  {
    key:"todo-wj-submitted",
    id:"YQCZ1924020260914101088",
    idShort:"088",
    type:"待办",
    senderOrg:"省直机关工委",
    sender:"张伟",
    senderTime:"08:00",
    urgency:"加急",
    categoryTag:"攻防·演练",
    direction:"发给我",
    title:"省直机关网络安全攻防演练复盘整改与应急加固汇报",
    template:"错误表述-限时回执",
    path:"指令流转 > 演练复盘",
    time:"2026-09-14 08:00:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 17:00:00",
    source:"攻防演练指挥部",
    description:"武甲同志已完成演练攻防靶标加固与防守整改复盘，已提交办理回执，等待下发人张伟审批。",
    receipt:{
      processor:"武甲",
      time:"2026-09-14 10:10:00",
      duration:"2小时10分",
      note:"演练期间发现的3处弱口令与中间件漏洞均已打齐补丁，完成WAF动态规则加固并接入全天候流量探针，已由经办人武甲报请主管领导审批。",
      images:2,
      files:["演练整改加固报告.pdf","漏洞复验测试截图.png"]
    }
  },
  {
    key:"todo-wj-read-notice",
    id:"YQCZ1924020260914081010",
    idShort:"101",
    type:"通知",
    readType:"通知",
    senderOrg:"台湾省网信办秘联处",
    sender:"武丁",
    senderTime:"08:10",
    urgency:"平急",
    categoryTag:"公文·通知",
    direction:"发给我",
    title:"【公文通知】关于做好重阳节期间全省网信系统网络值守保障的通知",
    template:"公文通知模板",
    path:"公文流转 > 值守通知",
    time:"2026-09-14 08:10:00",
    receiver:"武甲",
    processor:"-",
    req:"仅阅读",
    status:"待处理",
    origin:"下发",
    source:"党政内网公文系统",
    description:"各处室、直属事业单位：请做好节日期间24小时应急值班带班工作，确保网络与信息安全，遇突发重大敏感事件第一时间报送。",
    files:["节日期间网络值班表.pdf"]
  },
  {
    key:"todo-wj-read-circulate",
    id:"YQCZ1924020260914095033",
    idShort:"033",
    type:"传阅",
    readType:"传阅",
    senderOrg:"网络传播与应急管理处",
    sender:"武丁",
    senderTime:"09:50",
    urgency:"平急",
    categoryTag:"公文·传阅",
    direction:"发给我",
    title:"【工单传阅】关于全省政务新媒体健康运行季度监测抽查情况的通报",
    template:"工作通报传阅模板",
    path:"公文流转 > 传阅阅知",
    time:"2026-09-14 09:50:00",
    receiver:"武甲",
    processor:"-",
    req:"仅阅读",
    status:"待阅",
    origin:"下发",
    source:"新媒体监测监管平台",
    description:"【传阅批注】请武甲同志审阅第三季度全省政务公众号、政务抖音账号更新频率与合规率抽查数据。\n【原件摘要】抽查总体合格率达98.2%，个别僵尸账号与未规范备案账号已限期完成注销清理。",
    files:["三季度政务新媒体抽查通报.pdf"]
  },
  {
    key:"sent-wj-unaccepted",
    id:"YQCZ1924020260914103055",
    idShort:"055",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"10:30",
    urgency:"特急",
    categoryTag:"热点·辟谣",
    direction:"我下发",
    title:"关于涉台民生热点谣言查证与辟谣通稿发布协同指令",
    template:"网络辟谣协同模板",
    path:"指令流转 > 辟谣协同",
    time:"2026-09-14 10:30:00",
    receiver:"武乙",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 16:00:00",
    responseCountdown:"00小时30分",
    source:"舆情监测预警系统",
    description:"请武乙同志组织有关市县网信办，针对网络热传的虚假涉汛救灾谣言进行查证核实，并起草权威辟谣通稿。",
    files:["涉谣信息监测截图.zip"]
  },
  {
    key:"sent-wj-handling",
    id:"YQCZ1924020260914094520",
    idShort:"520",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:45",
    urgency:"加急",
    categoryTag:"巡查·阻断",
    direction:"我下发",
    title:"关于开展辖区网络直播违规营销专项清理整治行动指令",
    template:"专项治理通知模板",
    path:"指令流转 > 专项治理",
    time:"2026-09-14 09:45:00",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 17:00:00",
    handleCountdown:"05小时15分",
    source:"直播巡查监测平台",
    description:"重点打击未成年人直播打赏诱导及虚假夸大宣传，已转入处置办理中，请各组加速摸排。",
    files:["专项治理任务分解表.xlsx"]
  },

  // === 武乙工单数据 ===
  {
    key:"todo-wy-submitted-approve",
    id:"YQCZ1924020260914092015",
    idShort:"015",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:20",
    urgency:"特急",
    categoryTag:"核查·审核",
    direction:"发给我",
    title:"关于对涉台虚假信息恶意编造源头查证与协同管控报告",
    template:"舆情处置-限时回执",
    path:"指令流转 > 涉台舆情核查",
    time:"2026-09-14 09:20:00",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 18:00:00",
    source:"专网监测调度平台",
    description:"武乙同志已完成核查处置并提交工单回执，等待主管领导武甲审批。处理人视角不能显示审批类按钮，只展示传阅按钮。",
    images:2,
    files:["涉网虚假信息传播链条图谱.pdf"],
    receipt:{
      processor:"武乙",
      time:"2026-09-14 11:20:00",
      duration:"1小时15分",
      note:"专班已查实涉案3个重点引流境外虚假信源矩阵，掌握境内推手2人真实身份信息，已完成电子取证固化并同步下发属地网络安全支队采取关停封堵措施，处置闭环。",
      images:2,
      files:["涉案账号矩阵溯源证据链.pdf","属地网络安全协同拦截表.xlsx"]
    }
  },
  {
    key:"todo-wy-accept",
    id:"YQCZ1924020260914100022",
    idShort:"022",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"10:00",
    urgency:"特急",
    categoryTag:"重点·线索",
    direction:"发给我",
    title:"关于重点网络群组涉枪涉爆违法有害信息核查与处置的紧急指令",
    template:"重大涉网线索协查模板",
    path:"指令流转 > 紧急线索",
    time:"2026-09-14 10:00:00",
    receiver:"武乙",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 14:00:00",
    responseCountdown:"00小时12分",
    source:"部级线索交办通知",
    description:"接公安部网安局通报线索，某小众即时通信群组内疑似有人发布非法涉爆管制违禁品兜售信息，请火速核实群组主导人员信息并跟进平台阻断。",
    files:["涉案违法群组线索材料.pdf"]
  },
  {
    key:"todo-wy-handling",
    id:"YQCZ1924020260914093018",
    idShort:"318",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:30",
    urgency:"加急",
    categoryTag:"钓鱼·欺诈",
    direction:"发给我",
    title:"关于对假冒省网信办官网钓鱼欺诈域名的技术阻断协办指令",
    template:"技术阻断模板",
    path:"指令流转 > 仿冒阻断",
    time:"2026-09-14 09:30:00",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 12:00:00",
    handleCountdown:"06小时20分",
    source:"网络仿冒巡检平台",
    description:"监测发现境外服务器解析出仿冒省网信办域名的钓鱼站点，请立即协调域名注册商与DNS解析机构进行域名关停与解析污染清洗。",
    files:["仿冒域名WHOIS信息.txt"]
  },
  {
    key:"todo-wy-rejected",
    id:"YQCZ1924020260913150019",
    idShort:"519",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"15:00",
    urgency:"平急",
    categoryTag:"涉台·经贸",
    direction:"发给我",
    title:"关于境外炒作涉台经贸热点舆情落地核查与正面引导结报",
    template:"境外舆情处置模板",
    path:"指令流转 > 境外研判",
    time:"2026-09-13 15:00:00",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    rejected:true,
    rejectReason:"核查结论偏简略，缺少属地主流媒体正面跟进通稿发布链接及舆论降温评估指标，请补充后重新提交。",
    deadline:"2026-09-14 18:00:00",
    handleOverdue:"18小时30分",
    overdueHours:"18小时30分",
    source:"海外社交平台监测",
    description:"境外多账号集中发布唱衰海峡两岸经贸合作假消息，请组织属地媒体矩阵发布权威反驳事实并评估引导成效。"
  },
  {
    key:"todo-wy-approve",
    id:"YQCZ1924020260914104510",
    idShort:"772",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"10:15",
    urgency:"加急",
    categoryTag:"安全·漏洞",
    direction:"我下发",
    title:"区县网络安全应急漏洞排查处置专报",
    template:"文件测试模板（机构专版）",
    path:"指令流转 > 漏洞排查",
    time:"2026-09-14 10:15:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 17:00:00",
    source:"漏洞预警共享平台",
    description:"请武丙专员跟进全省32个二级系统应急漏洞复测加固情况，形成技术结报。",
    receipt:{
      processor:"武丙",
      time:"2026-09-14 10:45:00",
      duration:"45分钟",
      note:"已对指定32个区县二级域名系统进行全面渗透排查，累计修复漏洞5处，均已完成加固与补丁升级，防护策略已部署到位。",
      images:1,
      files:["漏洞排查及安全加固报告.pdf"]
    }
  },
  {
    key:"todo-wy-read-notice",
    id:"YQCZ1924020260914090000",
    idShort:"601",
    type:"通知",
    readType:"通知",
    senderOrg:"省网安中心",
    sender:"武甲",
    senderTime:"09:00",
    urgency:"平急",
    categoryTag:"公文·通知",
    direction:"发给我",
    title:"【公文通知】全省网络辟谣优秀典型工作案例汇编学习材料",
    template:"业务通报公文模板",
    path:"公文流转 > 案例汇编",
    time:"2026-09-14 09:00:00",
    receiver:"武乙",
    processor:"-",
    req:"仅阅读",
    status:"待处理",
    origin:"下发",
    source:"网信工作通报平台",
    description:"汇总近期全省涉疫情、涉灾情、涉民生重大网络辟谣成功案例，供各工作站参考借鉴。请确认阅知。",
    files:["辟谣典型案例汇编(2026版).pdf"]
  },
  {
    key:"todo-wy-read-circulate",
    id:"YQCZ1924020260914101244",
    idShort:"244",
    type:"传阅",
    readType:"传阅",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    senderTime:"10:12",
    urgency:"加急",
    categoryTag:"公文·传阅",
    direction:"发给我",
    title:"【工单传阅】关于重要网络信息系统安全风险提示函",
    template:"风险提示传阅模板",
    path:"公文流转 > 传阅阅知",
    time:"2026-09-14 10:12:00",
    receiver:"武乙",
    processor:"-",
    req:"仅阅读",
    status:"待阅",
    origin:"下发",
    source:"国家网络安全通报中心",
    description:"【传阅批注】请武乙同志知悉国家通报的最新Apache Log4j衍生组件漏洞利用特征，做好业务系统监测协同。\n【原件摘要】近期境外黑客组织利用新型反序列化链对国内公网应用实施扫描探测，请各单位加强WAF策略防范。",
    files:["系统安全风险提示函(2026第18期).pdf"]
  },
  {
    key:"sent-wy-unaccepted",
    id:"YQCZ1924020260914101530",
    idShort:"530",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"10:15",
    urgency:"特急",
    categoryTag:"安全·排查",
    direction:"我下发",
    title:"全省关键信息基础设施网络安全防护巡检协查指令",
    template:"基础设施巡检模板",
    path:"指令流转 > 设施巡检",
    time:"2026-09-14 10:15:00",
    receiver:"武丙",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 15:00:00",
    responseCountdown:"00小时20分",
    source:"安全态势感知平台",
    description:"请武丙同志对重点电力、交通调度节点开展内网安全扫描并反馈巡检基线清单。",
    files:["巡检指标指引.pdf"]
  },
  {
    key:"sent-wy-handling",
    id:"YQCZ1924020260914091012",
    idShort:"012",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"09:10",
    urgency:"加急",
    categoryTag:"应用·封堵",
    direction:"我下发",
    title:"关于对违规涉诈恶意小程序批量下架与域名封堵的指令",
    template:"恶意程序处置模板",
    path:"指令流转 > 应用封堵",
    time:"2026-09-14 09:10:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 11:30:00",
    handleCountdown:"04小时50分",
    source:"移动安全检测中心",
    description:"目前正由武丙协调各大平台技术后台实施黑名单阻断。",
    files:["涉诈小程序特征清单.csv"]
  },

  // === 武丙工单数据 ===
  {
    key:"todo-wb-submitted-approve",
    id:"YQCZ1924020260914104510",
    idShort:"772",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"10:15",
    urgency:"加急",
    categoryTag:"安全·漏洞",
    direction:"发给我",
    title:"区县网络安全应急漏洞排查处置专报",
    template:"文件测试模板（机构专版）",
    path:"指令流转 > 漏洞排查",
    time:"2026-09-14 10:15:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 17:00:00",
    source:"漏洞预警共享平台",
    description:"武丙专员已提交漏洞修复加固报告，正在等待下发人武乙审批。处理人视角不能显示审批类按钮，只展示传阅按钮。",
    receipt:{
      processor:"武丙",
      time:"2026-09-14 10:45:00",
      duration:"45分钟",
      note:"已对指定32个区县二级域名系统进行全面渗透排查，累计修复漏洞5处，均已完成加固与补丁升级，防护策略已部署到位。",
      images:1,
      files:["漏洞排查及安全加固报告.pdf"]
    }
  },
  {
    key:"todo-wb-accept",
    id:"YQCZ1924020260914102000",
    idShort:"881",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"10:20",
    urgency:"加急",
    categoryTag:"水军·溯源",
    direction:"发给我",
    title:"关于属地论坛某热点帖文异常流量与水军刷量技术溯源协查",
    template:"水军刷量研判模板",
    path:"指令流转 > 流量对抗",
    time:"2026-09-14 10:20:00",
    receiver:"武丙",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 15:30:00",
    responseCountdown:"00小时18分",
    source:"论坛内容监控系统",
    description:"监测发现某本地论坛热帖短时间内被刷量转发超过2万次，IP高度集聚在同一代理池，请调取访问日志核实水军自动化脚本特征。",
    files:["异常访问日志采样.log"]
  },
  {
    key:"todo-wb-handling",
    id:"YQCZ1924020260914085000",
    idShort:"554",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"08:50",
    urgency:"平急",
    categoryTag:"涉诈·APP",
    direction:"发给我",
    title:"重点违规涉诈APP安装包签名比对与下架溯源协查",
    template:"移动应用合规核查",
    path:"指令流转 > 应用巡查",
    time:"2026-09-14 08:50:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 18:00:00",
    handleCountdown:"14小时20分",
    source:"移动应用安全检测平台",
    description:"排查3款披着兼职外皮实为刷单返利的涉诈APK文件，提取后台服务器IP并提请各大应用商店封禁下架。",
    files:["涉诈APP样本包.zip"]
  },
  {
    key:"todo-wb-rejected",
    id:"YQCZ1924020260913170025",
    idShort:"025",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"17:00",
    urgency:"加急",
    categoryTag:"代码·审计",
    direction:"发给我",
    title:"省直属事业单位网站开源组件反序列化漏洞修复与复查",
    template:"安全漏洞加固模板",
    path:"指令流转 > 漏洞排查",
    time:"2026-09-13 17:00:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    rejected:true,
    rejectReason:"修复补丁未完成沙箱回归验证，发现仍存在侧信道绕过可能，请重新复测加固。",
    deadline:"2026-09-15 11:00:00",
    handleCountdown:"01小时50分",
    source:"漏洞应急通报",
    description:"排查全省28个政务网站第三方组件漏洞补丁，确保安全可控。",
    files:["复查漏洞PoC采样.txt"]
  },
  {
    key:"todo-wb-read-notice",
    id:"YQCZ1924020260914073000",
    idShort:"210",
    type:"通知",
    readType:"通知",
    senderOrg:"台湾省网信办应急指挥处",
    sender:"武丁",
    senderTime:"07:30",
    urgency:"平急",
    categoryTag:"公文·通知",
    direction:"发给我",
    title:"【公文通知】国庆网络应急值守通信联络机制与值班纪律要求",
    template:"应急联络机制通知",
    path:"公文流转 > 值班通报",
    time:"2026-09-14 07:30:00",
    receiver:"武丙",
    processor:"-",
    req:"仅阅读",
    status:"待处理",
    origin:"下发",
    source:"应急指挥系统",
    description:"严格落实领导带班和专人24小时值班制度，通信工具保持24小时畅通，重大突发事件15分钟内电话报告、30分钟内书面报告。请确认阅知。",
    files:["值守通信录表.xlsx"]
  },
  {
    key:"todo-wb-read-circulate",
    id:"YQCZ1924020260914103512",
    idShort:"512",
    type:"传阅",
    readType:"传阅",
    senderOrg:"技术中心安全实验室",
    sender:"武丁",
    senderTime:"10:35",
    urgency:"平急",
    categoryTag:"公文·传阅",
    direction:"发给我",
    title:"【工单传阅】关于典型网络攻击对抗防御技术白皮书",
    template:"技术文献传阅模板",
    path:"公文流转 > 传阅阅知",
    time:"2026-09-14 10:35:00",
    receiver:"武丙",
    processor:"-",
    req:"仅阅读",
    status:"待阅",
    origin:"下发",
    source:"技术中心技术库",
    description:"【传阅批注】请武丙同志参考白皮书中的网络反爬虫与自动化水军对抗章节，优化当前论坛防护规则。\n【原件摘要】白皮书汇总了2026年最新AI对抗流量特征与主动防御方案。",
    files:["网络攻击对抗防御技术白皮书.pdf"]
  },
  {
    key:"todo-wb-approve",
    id:"YQCZ1924020260914110500",
    idShort:"905",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"09:50",
    urgency:"特急",
    categoryTag:"应急·封堵",
    direction:"我下发",
    title:"台湾省网信办重点云主机防勒索病毒专项应急阻断与处置专报",
    template:"应急处置模板",
    path:"指令流转 > 病毒防御",
    time:"2026-09-14 09:50:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 18:00:00",
    source:"主机安全EDR系统",
    description:"武丁专员已配合协调全省政务云主机查杀加密勒索进程，已提交处置结果供武丙审核。",
    receipt:{
      processor:"武丁",
      time:"2026-09-14 11:05:00",
      duration:"1小时15分",
      note:"已配合政务云机房完成全量主机快照回滚与隔离杀毒，受影响节点恢复常态，病毒特征已下发全网阻断。",
      images:2,
      files:["勒索病毒查杀阻断结报.pdf"]
    }
  },
  {
    key:"sent-wb-unaccepted",
    id:"YQCZ1924020260914105018",
    idShort:"518",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"10:50",
    urgency:"加急",
    categoryTag:"网络·巡检",
    direction:"我下发",
    title:"关于市县政务内网终端补丁升级合规率摸底自查指令",
    template:"合规排查模板",
    path:"指令流转 > 终端合规",
    time:"2026-09-14 10:50:00",
    receiver:"武丁",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 17:30:00",
    responseCountdown:"00小时40分",
    source:"内网安全管理平台",
    description:"自查全省政务终端操作系统补丁更新情况，督促尽快修复高危漏洞。"
  },
  {
    key:"sent-wb-handling",
    id:"YQCZ1924020260914083500",
    idShort:"350",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"08:35",
    urgency:"平急",
    categoryTag:"日志·审计",
    direction:"我下发",
    title:"涉网重点系统堡垒机运维日志审计与异地备份协查指令",
    template:"日志审计模板",
    path:"指令流转 > 运维审计",
    time:"2026-09-14 08:35:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 18:00:00",
    handleCountdown:"08小时10分",
    source:"堡垒机监控告警",
    description:"目前由武丁专员调取近期30天特权账号登录与操作审计日志归档。",
    files:["堡垒机日志归档规范.pdf"]
  },

  // === 武丁工单数据 ===
  {
    key:"todo-wd-submitted-approve",
    id:"YQCZ1924020260914111500",
    idShort:"500",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:10",
    urgency:"加急",
    categoryTag:"商誉·阻断",
    direction:"发给我",
    title:"涉重点涉企虚假商誉侵害舆情快速阻断及属地核查结报",
    template:"舆情处置-回执",
    path:"指令流转 > 涉企维权",
    time:"2026-09-14 09:10:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 17:00:00",
    source:"涉企网络侵权举报专区",
    description:"武丁专员已完成属地核查与侵权账号封禁阻断并提交结报，正等待主管领导武甲审批。处理人提交工单后，不显示审批类按钮，只展示传阅按钮。",
    receipt:{
      processor:"武丁",
      time:"2026-09-14 11:15:00",
      duration:"2小时05分",
      note:"已会同市场监管部门与平台风控中心对涉事3个首发黑产账号实施永久封禁，累计清理违规短视频240余条，阻断次生舆情扩散。",
      images:2,
      files:["首发账号侵权取证报告.pdf","平台处置封禁公函.pdf"]
    }
  },
  {
    key:"todo-wd-submitted-wb",
    id:"YQCZ1924020260914110500",
    idShort:"905",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"09:50",
    urgency:"特急",
    categoryTag:"应急·封堵",
    direction:"发给我",
    title:"台湾省网信办重点云主机防勒索病毒专项应急阻断与处置专报",
    template:"舆情处置-限时回执",
    path:"指令流转 > 病毒防御",
    time:"2026-09-14 09:50:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 18:00:00",
    source:"主机安全EDR系统",
    description:"武丁专员已配合完成病毒查杀与主机加固并提交办理回执，正在等待下发人武丙审批。处理人视角不能显示审批类按钮，只展示传阅按钮。",
    receipt:{
      processor:"武丁",
      time:"2026-09-14 11:05:00",
      duration:"1小时15分",
      note:"已配合政务云机房完成全量主机快照回滚与隔离杀毒，受影响节点恢复常态，病毒特征已下发全网阻断。",
      images:2,
      files:["勒索病毒查杀阻断结报.pdf"]
    }
  },
  {
    key:"todo-wd-accept",
    id:"YQCZ1924020260914104019",
    idShort:"019",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"10:40",
    urgency:"加急",
    categoryTag:"月度·自查",
    direction:"发给我",
    title:"关于开展全省重点行业网络安全自查自纠月度摸排指令",
    template:"行业安全自查模板",
    path:"指令流转 > 行业自查",
    time:"2026-09-14 10:40:00",
    receiver:"武丁",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 16:30:00",
    responseCountdown:"00小时35分",
    source:"行业自律协调小组",
    description:"请武丁专员汇总金融、能源、交通等重点行业关键系统自查自纠自评清单，并在规定时限内完成回执提交。",
    files:["行业网络安全自查自纠表.xlsx"]
  },
  {
    key:"todo-wd-handling",
    id:"YQCZ1924020260914090510",
    idShort:"510",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"09:05",
    urgency:"平急",
    categoryTag:"新媒体·自审",
    direction:"发给我",
    title:"涉重点政务新媒体敏感词汇过滤与信息安全自审指令",
    template:"新媒体内容合规模板",
    path:"指令流转 > 内容合规",
    time:"2026-09-14 09:05:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 17:00:00",
    handleCountdown:"07小时50分",
    source:"内容合规监测云",
    description:"目前正由武丁专员对政务新媒体矩阵近期发布的图文视频进行全量敏感词自动化扫描与人工复审。",
    files:["内容合规巡检词库.xlsx"]
  },
  {
    key:"todo-wd-rejected",
    id:"YQCZ1924020260913161040",
    idShort:"040",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"16:10",
    urgency:"加急",
    categoryTag:"公共·大屏",
    direction:"发给我",
    title:"重点商圈公共大屏网络播发系统信息安全加固报告",
    template:"公共显示安全模板",
    path:"指令流转 > 大屏管控",
    time:"2026-09-13 16:10:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    rejected:true,
    rejectReason:"未提供大屏终端物联卡实名制绑定及控制主机离网物理隔离照片，请补充佐证后重新报送。",
    deadline:"2026-09-14 19:00:00",
    handleCountdown:"03小时10分",
    source:"公共大屏巡查监管",
    description:"针对重点商圈户外LED大屏联网播发控制主机开展防黑客篡改应急演练与安全加固。"
  },
  {
    key:"todo-wd-approve",
    id:"YQCZ1924020260914112000",
    idShort:"200",
    type:"待办",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    senderTime:"09:30",
    urgency:"平急",
    categoryTag:"ICP·清理",
    direction:"我下发",
    title:"全省重点网站备案核查及违规ICP清理结报",
    template:"舆情处置-回执",
    path:"指令流转 > 备案核查",
    time:"2026-09-14 09:30:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待审批",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-15 18:00:00",
    source:"省通信管理局通报",
    description:"请武丙专员跟进已注销ICP主体未关停网站排查，武丙已报送回执供武丁审核。",
    receipt:{
      processor:"武丙",
      time:"2026-09-14 11:20:00",
      duration:"1小时50分",
      note:"累计核查空壳主体域名142个，关停解析异常站点38处，下发整改通知书15份，已全部归档。",
      images:1,
      files:["空壳网站核查清理清册.xlsx"]
    }
  },
  {
    key:"todo-wd-read-notice",
    id:"YQCZ1924020260914080015",
    idShort:"015",
    type:"通知",
    readType:"通知",
    senderOrg:"防汛抗旱应急指挥部",
    sender:"武甲",
    senderTime:"08:00",
    urgency:"特急",
    categoryTag:"公文·通知",
    direction:"发给我",
    title:"【公文通知】关于加强涉汛突发预警信息互通与值班联动机制的通知",
    template:"防汛应急通知模板",
    path:"公文流转 > 防汛应急",
    time:"2026-09-14 08:00:00",
    receiver:"武丁",
    processor:"-",
    req:"仅阅读",
    status:"待处理",
    origin:"下发",
    source:"气象与水利联合预警",
    description:"各单位值班人员须严格关注气象红色暴雨预警，做好网络宣传正面发声与突发汛情网上舆情引导。请确认阅知。",
    files:["防汛应急联动工作指引.pdf"]
  },
  {
    key:"todo-wd-read-circulate",
    id:"YQCZ1924020260914102500",
    idShort:"250",
    type:"传阅",
    readType:"传阅",
    senderOrg:"网络安全协调处",
    sender:"武乙",
    senderTime:"10:25",
    urgency:"平急",
    categoryTag:"公文·传阅",
    direction:"发给我",
    title:"【工单传阅】关于全省公共场所Wi-Fi热点安全认证合规排查通报",
    template:"Wi-Fi合规排查模板",
    path:"公文流转 > 传阅阅知",
    time:"2026-09-14 10:25:00",
    receiver:"武丁",
    processor:"-",
    req:"仅阅读",
    status:"待阅",
    origin:"下发",
    source:"网安执法支队",
    description:"【传阅批注】请武丁专员查阅火车站、商场等重点公共场所免费Wi-Fi实名认证率与日志留存达标情况。\n【原件摘要】排查公共热点320处，整体合规率94.6%，责令限期整改17家。",
    files:["公共场所WiFi排查通报.pdf"]
  },
  {
    key:"sent-wd-unaccepted",
    id:"YQCZ1924020260914101030",
    idShort:"030",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    senderTime:"10:10",
    urgency:"加急",
    categoryTag:"安全·汇总",
    direction:"我下发",
    title:"关于开展全省网信系统网络安全自查自评月度汇总指令",
    template:"自评汇总模板",
    path:"指令流转 > 自查自评",
    time:"2026-09-14 10:10:00",
    receiver:"武丙",
    processor:"-",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:false,
    deadline:"2026-09-15 16:00:00",
    responseCountdown:"00小时45分",
    source:"省委网信办秘书处",
    description:"请武丙专员牵头收集各科室自评报表并起草月度网络安全总体评估。"
  },
  {
    key:"sent-wd-handling",
    id:"YQCZ1924020260914084500",
    idShort:"450",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    senderTime:"08:45",
    urgency:"平急",
    categoryTag:"宣传周·答题",
    direction:"我下发",
    title:"关于组织开展网络安全宣传周线上答题活动方案实施指令",
    template:"宣传活动方案模板",
    path:"指令流转 > 宣传周",
    time:"2026-09-14 08:45:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"待处理",
    origin:"下发",
    accepted:true,
    deadline:"2026-09-16 18:00:00",
    handleCountdown:"09小时30分",
    source:"网络宣传处",
    description:"由武丙专员对接线上答题系统云服务器并配置高并发防刷策略，进行中。",
    files:["答题活动技术方案.docx"]
  },

  // === 退回待重新派发工单 ===
  {
    key:"sent-wj-redispatch-01",
    id:"YQCZ1924020260914112000",
    idShort:"200",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"11:20",
    urgency:"加急",
    categoryTag:"舆情·退回",
    direction:"我下发",
    title:"涉重点短视频平台不实民生舆情核实管控指令",
    template:"通用舆情研判处置模板",
    path:"指令流转 > 舆情研判",
    time:"2026-09-14 11:20:00",
    receiver:"武乙",
    processor:"武甲",
    req:"限时回执",
    status:"待重新派发",
    origin:"下发",
    returnedBy:"武乙",
    returnedTime:"2026-09-14 11:35:10",
    deadline:"2026-09-15 18:00:00",
    source:"抖音热点监控",
    url:"https://www.douyin.com/video/728192837491",
    description:"涉事短视频在区域内引发部分网民热议并产生误导，请迅速核实信源真实性，联合有关属地部门开展落地管控与澄清引导。",
    files:["涉案短视频取证及传播链条.pdf"]
  },

  // === 历史已归档办结工单 ===
  {
    key:"archived-wj-01",
    id:"YQCZ1924020260814174727",
    idShort:"727",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    senderTime:"17:47",
    urgency:"平急",
    categoryTag:"热点·周报",
    direction:"我下发",
    title:"舆情处置：速览｜北下关热点周报（8.7-8.13）",
    template:"热点周报模板",
    path:"指令流转 > 舆情处置",
    time:"2026-08-14 17:47:27",
    receiver:"武乙",
    processor:"武乙",
    req:"限时回执",
    status:"已归档",
    storageMb:180,
    origin:"下发",
    handled:"2026-08-14 17:55:22",
    source:"微信公众号巡查",
    description:"热点周报内容已核校，涉事舆情跟踪总结完毕并通过归档审核。",
    receipt:{
      processor:"武乙",
      time:"2026-08-14 17:54:26",
      duration:"6分钟",
      note:"热点周报内容已核校，涉事舆情跟踪总结完毕并通过归档审核。",
      images:1,
      files:["北下关热点周报最终版.pdf"]
    }
  },
  {
    key:"archived-wy-sent-01",
    id:"YQCZ1924020260814080000",
    idShort:"559",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    senderTime:"08:00",
    urgency:"平急",
    categoryTag:"协同·排查",
    direction:"我下发",
    title:"涉重要网络安全活动保障多部门协同排查与实地督查",
    template:"舆情处置-回执",
    path:"谛听预警 > 实时监测",
    time:"2026-08-14 08:00:00",
    receiver:"武丙",
    processor:"武丙",
    req:"回执",
    status:"已归档",
    storageMb:220,
    origin:"下发",
    handled:"2026-08-14 16:00:00",
    source:"内网协同通报",
    description:"涉重要网络安全活动保障多部门协同排查及处置。",
    receipt:{
      processor:"武丙",
      time:"2026-08-14 16:00:00",
      duration:"8小时",
      note:"多方核实完毕，涉及各属地网信支队均已完成排查，未见异常蔓延，予以办结归档。",
      images:0,
      files:["多方协同排查结论表.xlsx"]
    }
  },
  {
    key:"archived-wb-sent-01",
    id:"YQCZ1924020260813100000",
    idShort:"332",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    senderTime:"10:00",
    urgency:"特急",
    categoryTag:"防御·清洗",
    direction:"我下发",
    title:"某政务云节点DDoS流量攻击防御与应急清洗报告",
    template:"舆情处置-限时回执",
    path:"指令流转 > 应急响应",
    time:"2026-08-13 10:00:00",
    receiver:"武丁",
    processor:"武丁",
    req:"限时回执",
    status:"已归档",
    storageMb:160,
    origin:"下发",
    handled:"2026-08-13 14:20:00",
    source:"云防护告警",
    description:"节点遭受瞬时超大带宽SYN Flood流量冲击，已启动近源黑洞牵引与高防清洗中心清洗。",
    receipt:{
      processor:"武丁",
      time:"2026-08-13 14:10:00",
      duration:"4小时",
      note:"高防清洗策略生效，攻击流量回落至常态水平，核心政务业务系统零中断，阻断报告已归档。",
      images:1,
      files:["流量清洗曲线与攻击源分析.pdf"]
    }
  },
  {
    key:"archived-wd-01",
    id:"YQCZ1924020260812093000",
    idShort:"190",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    senderTime:"09:30",
    urgency:"平急",
    categoryTag:"应急·辟谣",
    direction:"我下发",
    title:"关于某突发交通管制网络舆情快速溯源及辟谣通报",
    template:"舆情辟谣结案模板",
    path:"指令流转 > 辟谣结案",
    time:"2026-08-12 09:30:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"已归档",
    storageMb:140,
    origin:"下发",
    handled:"2026-08-12 11:45:00",
    source:"微博网络巡查",
    description:"网络传播关于市区主干道实施全封闭交通管制的虚假不实传言已完成联合澄清与账号取证。",
    receipt:{
      processor:"武甲",
      time:"2026-08-12 11:40:00",
      duration:"2小时10分",
      note:"市交管局官方微博已第一时间发布权威通告辟谣，各主流媒体同步转发，网络舆情已平息归档。",
      images:1,
      files:["官方辟谣微博发布记录.pdf"]
    }
  },
  {
    key:"archived-old-3m",
    id:"YQCZ1924020260620112000",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    title:"属地论坛不实贴文溯源核查与账号处置归档",
    path:"指令流转 > 舆情处置",
    time:"2026-06-20 11:20:00",
    receiver:"武丙",
    processor:"武丙",
    req:"回执",
    status:"已归档",
    storageMb:30,
    origin:"下发",
    handled:"2026-06-20 18:00:00"
  },
  {
    key:"archived-old-6m",
    id:"YQCZ1924020260315090000",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丙",
    title:"政务新媒体评论区集中投诉线索核查办结",
    path:"指令流转 > 舆情处置",
    time:"2026-03-15 09:00:00",
    receiver:"武丁",
    processor:"武丁",
    req:"回执",
    status:"已归档",
    storageMb:30,
    origin:"下发",
    handled:"2026-03-16 10:20:00"
  },
  {
    key:"archived-old-1y",
    id:"YQCZ1924020250901083000",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武丁",
    title:"跨区域不实信息联动辟谣专报年度归档",
    path:"指令流转 > 辟谣结案",
    time:"2025-09-01 08:30:00",
    receiver:"武甲",
    processor:"武甲",
    req:"限时回执",
    status:"已归档",
    storageMb:30,
    origin:"下发",
    handled:"2025-09-01 16:40:00"
  },
  {
    key:"wh-yq-01",
    id:"YQCZ1924020251218162000",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武甲",
    title:"2025年度网络舆情态势研判专报",
    path:"指令流转 > 舆情处置",
    time:"2025-12-18 16:20:00",
    receiver:"武乙",
    processor:"武乙",
    req:"回执",
    status:"已归档",
    storageMb:96,
    inWarehouse:true,
    warehouseGroupId:"wh_yq",
    origin:"下发",
    handled:"2025-12-19 11:00:00"
  },
  {
    key:"wh-yj-01",
    id:"YQCZ1924020260122091000",
    type:"下发",
    senderOrg:"台湾省网信办",
    sender:"武乙",
    title:"重大活动网络安全应急演练复盘归档",
    path:"指令流转 > 应急响应",
    time:"2026-01-22 09:10:00",
    receiver:"武丙",
    processor:"武丙",
    req:"限时回执",
    status:"已归档",
    storageMb:88,
    inWarehouse:true,
    warehouseGroupId:"wh_yj",
    origin:"下发",
    handled:"2026-01-22 20:00:00"
  }
];
var BUSINESS_APPS = ["谛听预警", "指令流转", "全网搜"];
(function seedTaskApplications(){
  taskRows.forEach(function(row, i){
    var parts = String(row.path || "指令流转 > 业务办理").split(" > ");
    var module = (parts[1] || "业务办理").trim();
    var prefix = (row.application || parts[0] || "指令流转").trim();
    var app = "指令流转";
    if(prefix === "谛听预警" || prefix === "全网搜" || prefix === "指令流转"){
      app = prefix;
    } else if(prefix === "公文流转"){
      app = i % 2 === 0 ? "谛听预警" : "全网搜";
    }
    if(app === "指令流转"){
      if(i % 6 === 2) app = "谛听预警";
      else if(i % 6 === 5) app = "全网搜";
    }
    row.application = app;
    row.path = app + " > " + module;
  });
})();
function ico(name,size){return '<i data-lucide="'+name+'" width="'+(size||16)+'"></i>'}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,function(ch){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]})}
function highlightUser(value){if(Array.isArray(value))return value.map(highlightUser).join("、");var text=value==null||value===""?"-":String(value);return '<span class="'+(text===currentUser?"current-user":"")+'">'+escapeHtml(text)+'</span>'}
function plainPeople(value){return Array.isArray(value)?value.join("、"):(value||"-")}
function selectedSentCount(){return Object.keys(state.selectedSent).filter(function(k){return state.selectedSent[k]}).length}
function showToast(message){var node=document.getElementById("toast");node.textContent=message;node.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(function(){node.classList.remove("show")},2200)}
var STORAGE_TOTAL_MB = 2048;
var STORAGE_BASE_MB = 10;
var STORAGE_ISSUE_COST_MB = 24;
var STORAGE_NOW_MS = Date.parse("2026/10/10 12:00:00");
var STORAGE_DAY_MS = 86400000;
var warehouseGroups = [
  { id: "wh_default", name: "默认分组" },
  { id: "wh_yq", name: "舆情专题库" },
  { id: "wh_yj", name: "应急案例库" }
];
function isWarehouseStored(row){
  return !!(row && row.inWarehouse);
}
function getArchivedTasks(){
  return taskRows.filter(function(r){ return r.status === "已归档" && !isWarehouseStored(r); });
}
function getWarehouseTasks(){
  return taskRows.filter(function(r){ return r.status === "已归档" && isWarehouseStored(r); });
}
function getTaskCreatedMs(row){
  if(!row || !row.time) return 0;
  var ms = Date.parse(String(row.time).replace(/-/g, "/"));
  return isNaN(ms) ? 0 : ms;
}
function getStorageAgeCutoff(filter){
  if(filter === "3m") return STORAGE_NOW_MS - 90 * STORAGE_DAY_MS;
  if(filter === "6m") return STORAGE_NOW_MS - 182 * STORAGE_DAY_MS;
  if(filter === "1y") return STORAGE_NOW_MS - 365 * STORAGE_DAY_MS;
  return null;
}
function getFilteredArchivedTasks(){
  var filter = state.storageAgeFilter || "all";
  var cutoff = getStorageAgeCutoff(filter);
  var list = getArchivedTasks();
  if(!cutoff) return list;
  return list.filter(function(r){ return getTaskCreatedMs(r) > 0 && getTaskCreatedMs(r) <= cutoff; });
}
function getWarehouseGroup(id){
  return warehouseGroups.filter(function(g){ return g.id === id; })[0] || warehouseGroups[0];
}
function getArchivedTaskSizeMb(row){
  if(row && Number(row.storageMb)) return Number(row.storageMb);
  var s = String((row && (row.key || row.title)) || "");
  var n = 0;
  for(var i=0;i<s.length;i++) n += s.charCodeAt(i);
  return 24 + (n % 72);
}
function getStorageUsedMb(){
  var archived = getArchivedTasks().reduce(function(sum, r){ return sum + getArchivedTaskSizeMb(r); }, 0);
  var base = typeof state.storageBaseMb === "number" ? state.storageBaseMb : STORAGE_BASE_MB;
  return Math.min(STORAGE_TOTAL_MB, base + archived);
}
function getStorageTotalMb(){ return STORAGE_TOTAL_MB; }
function isStorageFull(){ return getStorageUsedMb() >= getStorageTotalMb(); }
function assertCanIssue(){
  if(!isStorageFull()) return true;
  showToast("存储空间已满，无法下发指令，请先清理已归档任务");
  return false;
}
function consumeIssueStorage(){
  var base = typeof state.storageBaseMb === "number" ? state.storageBaseMb : STORAGE_BASE_MB;
  state.storageBaseMb = Math.min(STORAGE_TOTAL_MB, base + STORAGE_ISSUE_COST_MB);
}
function pageHead(title,desc,action){return '<div class="page-head"><h1>'+title+'</h1><p>'+desc+'</p>'+(action||"")+'</div>'}
function footer(){return '<div class="footer">© 2013–2026 康奈网络. 保留所有权利</div>'}
function pageLinksHtml(totalPages,current){
  var pages=[];if(totalPages<=5){for(var i=1;i<=totalPages;i++)pages.push(i)}else if(current<=3){pages=[1,2,3,4,"…",totalPages]}else if(current>=totalPages-2){pages=[1,"…",totalPages-3,totalPages-2,totalPages-1,totalPages]}else{pages=[1,"…",current-1,current,current+1,"…",totalPages]}
  return '<button class="page-link" data-page-step="prev" '+(current===1?"disabled":"")+'>‹</button>'+pages.map(function(p){return p==="…"?'<span class="page-ellipsis">…</span>':'<button class="page-link '+(p===current?"active":"")+'" data-page-number="'+p+'">'+p+'</button>'}).join("")+'<button class="page-link" data-page-step="next" '+(current===totalPages?"disabled":"")+'>›</button>'
}
function pageSizeControl(size){
  size=Number(size)||10;
  return '<div class="page-size-select"><button type="button" class="page-size-trigger" data-page-size-trigger><span data-page-size-value>'+size+'条/页</span><span class="page-size-arrow">'+ico("chevron-down",14)+'</span></button><div class="page-size-menu">'+[10,20,50,100].map(function(n){return '<div class="page-size-option '+(n===size?"selected":"")+'" data-page-size-option="'+n+'">'+n+'条/页</div>'}).join("")+'</div></div>';
}
function pagination(total,size,current,mode,extraStyle){
  size=Number(size)||10;
  current=Number(current)||1;
  var totalPages=Math.max(1,Math.ceil(total/size));
  if(current>totalPages) current=totalPages;
  return '<div class="pagination" data-pagination data-total="'+total+'" data-current-page="'+current+'" data-page-size="'+size+'" data-mode="'+(mode||"todo")+'"'+(extraStyle?' style="'+extraStyle+'"':"")+'><div class="pagination-left"><span>共 '+total+' 条</span>'+pageSizeControl(size)+'</div><div class="pagination-pages" data-page-links>'+pageLinksHtml(totalPages,current)+'</div><div class="pagination-jump"><span>跳转至</span><input class="page-jump-input" data-page-jump value="'+current+'" inputmode="numeric"></div></div>';
}
function isItemOverdue(r){
  if(r.status==="已归档" || r.status==="待重新派发") return false;
  if(r.handleOverdue || r.overdueHours) return true;
  return false;
}
function isItemTodayDue(r){
  if(r.status==="已归档" || r.status==="待重新派发") return false;
  if(isItemOverdue(r)) return false;
  if(r.handleCountdown && !r.handleCountdown.includes("天")) return true;
  return false;
}
function isItemMine(r){
  if(!r) return false;
  var displayStatus = r.status === "已退回" ? "待处理" : r.status;
  var receivers = [];
  if(Array.isArray(r.receiver)){
    receivers = r.receiver;
  } else if(typeof r.receiver === "string" && r.receiver.trim()){
    receivers = r.receiver.split(/[、,，\s]+/).filter(function(n){ return n.length > 0; });
  }
  if(!receivers.length) receivers = ["武乙"];

  if(displayStatus === "已归档"){
    var processorName = (r.receipt && r.receipt.processor) || r.processor;
    if(!processorName){
      processorName = Array.isArray(r.receiver) ? r.receiver.join("、") : (r.receiver || "");
    }
    return processorName === currentUser;
  }
  if(displayStatus === "待处理" && receivers.length > 1){
    return receivers.indexOf(currentUser) > -1;
  }
  if(displayStatus === "待审批"){
    return (r.sender || "") === currentUser;
  }
  if(displayStatus === "待重新派发"){
    return (r.sender || "") === currentUser;
  }
  var handlerName = (r.processor && r.processor !== "-") ? r.processor : receivers[0];
  return handlerName === currentUser;
}
function setPaginationPage(root,page){
  var mode=root.dataset.mode||state.page;
  var totalPages=Math.max(1,Math.ceil(Number(root.dataset.total)/Number(root.dataset.pageSize)));
  page=Math.max(1,Math.min(totalPages,Number(page)||1));
  if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1};
  state.pageNumbers[mode]=page;
  render();
}
function statusClass(s){
  if(s==="已归档") return "archived";
  if(s==="待审批") return "approval";
  if(s==="已退回" || s==="待重新派发") return "returned";
  if(s==="待阅") return "read";
  return "pending";
}
function taskHtml(row,mode){
  var origin=mode==="sent"?'<span class="tag '+(row.origin==="转办"?"transfer":"origin")+'">'+row.origin+'</span>':"";
  var transferredTag=row.transferred&&row.childKey?'<span class="tag transferred-list-tag">已转办</span>':"";
  var hasHandled=row.handled||row.status==="已归档";
  var countdownBadge=(row.req==="限时回执"&&!hasHandled)?(function(){
    var target=getRowTargetMs(row);
    var cd=getCountdownData(target);
    return '<div class="countdown-badge '+(cd.overdue?"overdue":(cd.days===0&&cd.hours<2?"urgent":"active"))+'" data-countdown-key="'+row.key+'" style="margin-top:4px">'+ico("timer",12)+'<span class="countdown-label">'+(cd.overdue?"已超时":"剩余")+'</span><span class="countdown-digits" data-digits-key="'+row.key+'">'+cd.html+'</span></div>';
  })():"";
  var timing=row.deadline&&!hasHandled?'<span class="deadline">'+row.deadline+'</span>':"";
  var handled=row.handled?'<div class="handled-time">处理时间: '+row.handled+'</div>':row.status==="已归档"?'<div class="handled-time"><span class="overdue">超时</span>处理时间: 2026-08-14 17:55:22</div>':"";
  var showProcessor=mode==="sent"||(mode==="todo"&&row.status==="已退回")||mode==="done";
  var processorMeta=showProcessor?'<span class="processor">| 处理人：'+highlightUser(row.status==="待处理"?"-":row.processor||"-")+'</span>':"";
  return '<div class="task-row" data-action="detail" data-detail-key="'+row.key+'" data-detail-source="'+mode+'"><div class="task-title">'+origin+'<span class="tag '+statusClass(row.status)+'">'+row.status+'</span><span class="task-title-text">'+row.title+'</span>'+ico("external-link",13)+'</div><div class="meta"><span class="tag category">舆情处置</span><span>'+row.path+'</span><span class="meta-spaced">下发信息：<b>'+highlightUser(row.sender||"齐杰")+'</b></span><span>| 台湾省网信办</span><span>| '+row.time+'</span><span class="meta-spaced">接收人：</span><span class="receiver">内 '+highlightUser(row.receiver)+'</span>'+processorMeta+'</div><div class="req-side">'+transferredTag+'<span class="req-tag '+(row.req==="限时回执"?"limit":"")+'">'+(row.req==="限时回执"?ico("clock-3",12):"")+row.req+'</span>'+timing+countdownBadge+handled+'</div></div>'
}
function renderUnifiedCountdownChip(type, timeStr, isOverdue){
  if(type === "response") return "";
  var cleanTime=String(timeStr||"").replace(/剩余|已超时|响应|处理/g,"").trim();
  var isOver1Day=cleanTime.indexOf("天")>-1;
  var hMatch=cleanTime.match(/(\d+)\s*小时/);
  if(hMatch&&parseInt(hMatch[1],10)>=24){
    var totalH=parseInt(hMatch[1],10);
    var days=Math.floor(totalH/24);
    var remH=totalH%24;
    cleanTime=String(days).padStart(2,"0")+"天"+String(remH).padStart(2,"0")+"小时";
    isOver1Day=true;
  }
  if(!isOver1Day){
    var mSecMatch=cleanTime.match(/(\d+)分(?:(\d+)秒)?/);
    if(mSecMatch&&cleanTime.indexOf("小时")===-1){
      var m=parseInt(mSecMatch[1],10);
      cleanTime="00小时"+String(m).padStart(2,"0")+"分";
    }
    if(cleanTime.indexOf("小时")>-1&&cleanTime.indexOf("分")===-1){
      cleanTime=cleanTime.replace(/(\d+)小时/,function(match,p){
        return String(p).padStart(2,"0")+"小时00分";
      });
    }
    cleanTime=cleanTime.replace(/\d+秒/g,"").trim();
  }

  var colorClass=isOverdue?"cd-red":(isOver1Day?"cd-green":"cd-orange");
  var label=isOverdue?"处理已超时：":"处理倒计时：";
  var icon=isOverdue?ico("alert-octagon",12):(isOver1Day?ico("clock-3",12):ico("timer",12));

  return '<span class="countdown-chip '+colorClass+'">'+icon+' '+label+escapeHtml(cleanTime)+'</span>';
}

function isCurrentUserHandler(row){
  if(!row) return false;
  var displayStatus = row.status;
  if(row.status === "已退回"){
    displayStatus = "待处理";
  }

  if(displayStatus === "已归档") return false;

  var isCirculate = row.type === "传阅" || row.readType === "传阅" || (row.categoryTag && row.categoryTag.includes("传阅"));
  var isNotice = (row.type === "通知" || row.readType === "通知" || (row.categoryTag && row.categoryTag.includes("通知")) || row.req === "仅阅读" || row.status === "待阅") && !isCirculate;

  if(displayStatus === "待阅" || row.req === "仅阅读"){
    if(isCirculate) return false; // 传阅类操作依然是详情
    if(isNotice) return true;     // 通知类的操作是去处理
  }

  if(displayStatus === "待审批"){
    var approver = row.sender || "武甲";
    return approver === currentUser;
  }

  if(displayStatus === "待重新派发"){
    return (row.sender === currentUser) || (row.processor === currentUser);
  }

  if(row.processor && row.processor !== "-"){
    return row.processor === currentUser;
  }

  var receivers = [];
  if(Array.isArray(row.receiver)){
    receivers = row.receiver;
  } else if(typeof row.receiver === "string" && row.receiver.trim()){
    receivers = row.receiver.split(/[、,，\s]+/).filter(function(n){ return n.length > 0; });
  }
  return receivers.includes(currentUser);
}

function isTaskActionHandle(row, source){
  if(!row) return false;
  if(source === "done" || source === "read") return false;
  if(row.status === "已归档") return false;

  var isCirculate = row.type === "传阅" || row.readType === "传阅" || (row.categoryTag && row.categoryTag.includes("传阅"));
  var isNotice = (row.type === "通知" || row.readType === "通知" || (row.categoryTag && row.categoryTag.includes("通知")) || row.req === "仅阅读" || row.status === "待阅") && !isCirculate;

  if(row.status === "待阅" || row.req === "仅阅读"){
    if(isCirculate) return false; // 待阅类演示数据中，传阅类操作依然是详情
    if(isNotice) return true;     // 待阅类演示数据中，通知类的操作是去处理
  }

  if(row.status === "待审批"){
    var approver = row.sender || "武甲";
    return approver === currentUser;
  }

  if(source === "todo") return true;
  if(source === "sent" || source === "sent-mgmt"){
    return isCurrentUserHandler(row);
  }
  return isCurrentUserHandler(row);
}

function renderArchivedProcessorCell(row){
  var processorName = (row.receipt && row.receipt.processor) || row.processor;
  if(!processorName){
    if(Array.isArray(row.receiver)){
      processorName = row.receiver.join("、");
    } else {
      processorName = row.receiver || "武乙";
    }
  }
  var isMe = (processorName === currentUser);
  var processorHtml = isMe
    ? '<span class="handler-primary-name is-current-user" title="处理人：' + escapeHtml(processorName) + '（当前登录人）">' + escapeHtml(processorName) + '</span><span class="handler-me-tag">我的</span>'
    : '<span class="handler-primary-name">' + escapeHtml(processorName) + '</span>';
  return '<div class="handler-cell-container"><div class="handler-name-row">' + processorHtml + '</div></div>';
}

function renderCurrentHandlerCell(row){
  var displayStatus = row.status;
  if(row.status === "已退回"){
    displayStatus = "待处理";
  }

  // 4、如果是已办结，不用显示当前处理人，只用显示已归档的tag和状态列同样
  if(displayStatus === "已归档"){
    return '<span class="status-col-badge archived">已归档</span>';
  }

  // 提取并规整接收人列表
  var receivers = [];
  if(Array.isArray(row.receiver)){
    receivers = row.receiver;
  } else if(typeof row.receiver === "string" && row.receiver.trim()){
    receivers = row.receiver.split(/[、,，\s]+/).filter(function(n){ return n.length > 0; });
  }
  if(!receivers.length){
    receivers = ["武乙"];
  }

  // 协同处理多人：太多的以...展示，鼠标移入可气泡查看详情，突出当前登录人
  if(displayStatus === "待处理" && receivers.length > 1){
    var total = receivers.length;
    var isMeInReceivers = receivers.includes(currentUser);
    var nameText = "";
    if(isMeInReceivers){
      nameText = escapeHtml(currentUser) + "（我）等" + total + "人";
    } else if(total > 2){
      nameText = escapeHtml(receivers[0]) + "、" + escapeHtml(receivers[1]) + "...";
    } else {
      nameText = escapeHtml(receivers.join("、"));
    }
    var tagsHtml = receivers.map(function(r){
      var isMe = (r === currentUser);
      return '<span class="handler-pop-tag ' + (isMe ? 'is-me' : '') + '">' + ico("user", 11) + escapeHtml(r) + (isMe ? '（我）' : '') + '</span>';
    }).join("");

    var popoverHtml = '<div class="handler-popover">' +
      '<div class="handler-pop-title"><span>协同处理人员名单</span><b>共 ' + total + ' 人</b></div>' +
      '<div class="handler-pop-tags">' + tagsHtml + '</div>' +
      '<div class="handler-pop-note">注：多人协同指令，责任人可直接推进处置办理。</div>' +
    '</div>';

    var nameHtml = isMeInReceivers
      ? '<span class="handler-primary-name is-current-user" title="' + escapeHtml(receivers.join("、")) + '">' + escapeHtml(currentUser) + '</span><span class="handler-me-tag">我的</span>'
      : '<span class="handler-primary-name" title="' + escapeHtml(receivers.join("、")) + '">' + nameText + '</span>';

    return '<div class="handler-cell-container">' +
      '<div class="handler-name-row">' +
        nameHtml +
        '<span class="handler-more-badge">' + total + '人</span>' +
      '</div>' +
      popoverHtml +
    '</div>';
  }

  // 待审批节点：当前处理责任人展示审批人姓名（即指令下发人），若为当前登录人则高亮突出
  if(displayStatus === "待审批"){
    var approverName = row.sender || currentUser || "齐杰";
    var isMe = (approverName === currentUser);
    var approverHtml = isMe
      ? '<span class="handler-primary-name is-current-user" title="当前处理人：' + escapeHtml(approverName) + '（当前登录人）">' + escapeHtml(approverName) + '</span><span class="handler-me-tag">我的</span>'
      : '<span class="handler-primary-name">' + escapeHtml(approverName) + '</span>';
    return '<div class="handler-cell-container"><div class="handler-name-row">' + approverHtml + '</div></div>';
  }

  // 待重新派发节点：当前处理责任人展示发起人姓名，若为当前登录人则高亮突出
  if(displayStatus === "待重新派发"){
    var redispatchUser = row.sender || currentUser || "武甲";
    var isMe = (redispatchUser === currentUser);
    var userHtml = isMe
      ? '<span class="handler-primary-name is-current-user" title="当前处理人：' + escapeHtml(redispatchUser) + '（当前登录人）">' + escapeHtml(redispatchUser) + '</span><span class="handler-me-tag">我的</span>'
      : '<span class="handler-primary-name">' + escapeHtml(redispatchUser) + '</span>';
    return '<div class="handler-cell-container"><div class="handler-name-row">' + userHtml + '</div></div>';
  }

  // 其余在办状态（待处理等）：若为当前登录人则高亮突出
  var handlerName = (row.processor && row.processor !== "-") ? row.processor : receivers[0];
  var isHandlerMe = (handlerName === currentUser);
  var singleHtml = isHandlerMe
    ? '<span class="handler-primary-name is-current-user" title="当前处理人：' + escapeHtml(handlerName) + '（当前登录人）">' + escapeHtml(handlerName) + '</span><span class="handler-me-tag">我的</span>'
    : '<span class="handler-primary-name">' + escapeHtml(handlerName) + '</span>';
  return '<div class="handler-cell-container"><div class="handler-name-row">' + singleHtml + '</div></div>';
}

function getTaskApplication(row){
  if(row && row.application && BUSINESS_APPS.indexOf(row.application) > -1) return row.application;
  var parts = ((row && row.path) || "指令流转 > 业务办理").split(" > ");
  var prefix = (parts[0] || "").trim();
  if(BUSINESS_APPS.indexOf(prefix) > -1) return prefix;
  return "指令流转";
}
function getTaskSource(row){
  if(row && row.source) return row.source;
  return "专网指挥调度系统";
}
function pad2(n){
  n = String(n == null ? "" : n);
  return n.length < 2 ? "0" + n : n;
}
function formatDispatchTimeShort(raw){
  var s = String(raw || "").trim();
  var m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{2})(?::\d{2})?)?/);
  if(!m) return s || "-";
  return m[1] + "-" + pad2(m[2]) + "-" + pad2(m[3]) + " " + pad2(m[4] || "00") + ":" + pad2(m[5] || "00");
}
function getTaskInstrType(row){
  if(row && row.instrType) return row.instrType;
  if(row && row.category && ["舆情处置","错误表述","通知通报","业务协同"].indexOf(row.category) > -1) return row.category;
  var tpl = String((row && (row.template || row.path)) || "");
  if(tpl.indexOf("错误表述") > -1) return "错误表述";
  if(tpl.indexOf("通知") > -1 || tpl.indexOf("通报") > -1) return "通知通报";
  if(tpl.indexOf("协同") > -1) return "业务协同";
  return "舆情处置";
}
function instrTypeTagClass(name){
  if(name === "错误表述") return "cw";
  if(name === "通知通报") return "tz";
  if(name === "业务协同") return "xt";
  return "yq";
}

function taskTableRowHtml(row,mode,rowIndex){
  var hasHandled=row.handled||row.status==="已归档";
  var transferredTag=row.transferred&&row.childKey?'<span class="tag transferred-list-tag" style="margin-left:4px">已转办</span>':"";
  
  var isCirculate = isCirculateTask(row);
  var isNotice = (row.type === "通知" || row.readType === "通知" || (row.categoryTag && String(row.categoryTag).indexOf("通知") > -1) || (row.title && (String(row.title).indexOf("【通知】") > -1 || String(row.title).indexOf("【公文通知】") > -1))) && !isCirculate;

  // 3、增宽指令ID列，单号一行展示，禁止换行；类型标签【待办】【通知】【传阅】放在ID正上方，左端对齐
  var idFull=escapeHtml(row.id||"YQCZ1924020260911132448");
  var idTagText = isCirculate ? "传阅" : (isNotice ? "通知" : "待办");
  var idTagCls = isCirculate ? "circulate" : (isNotice ? "notice" : "todo");
  var idCell='<div class="id-cell-vertical"><div class="id-tag-row"><span class="id-type-tag '+idTagCls+'">'+idTagText+'</span></div><div class="id-code-row"><span class="id-code-text" title="'+idFull+'">'+idFull+'</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="'+idFull+'" title="复制ID">'+ico("copy",12)+'</button></div></div>';
  var dispatchTimeCn = formatDispatchTimeShort(row.time || row.sentTime);
  var instrTypeName = getTaskInstrType(row);
  var idCellMy='<div class="id-cell-vertical"><div class="id-tag-row"><span class="id-type-tag '+instrTypeTagClass(instrTypeName)+'">'+escapeHtml(instrTypeName)+'</span></div><div class="id-code-row"><span class="id-code-text" title="'+idFull+'">'+idFull+'</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="'+idFull+'" title="复制ID">'+ico("copy",12)+'</button></div></div>';
  var seqTd = '<td class="col-seq my-instr-seq">' + ((typeof rowIndex === "number" ? rowIndex : 0) + 1) + '</td>';

  var senderOrg=escapeHtml(row.senderOrg||"市公安局情指中心");
  var senderUser=escapeHtml(row.sender||"张伟");
  var senderCell='<div class="sender-cell-wrap"><div class="sender-user-line" title="'+senderUser+'"><span>'+senderUser+'</span></div><div class="sender-org-line" title="'+senderOrg+'"><span>'+senderOrg+'</span></div></div>';

  // 1、平级加急特级，采用不同颜色的icon标识。
  var urgencyVal=row.urgency||"平急";
  var urgencyCls=urgencyVal==="特急"?"super-urgent":urgencyVal==="加急"?"urgent":"normal";
  var urgencyIcon=urgencyVal==="特急"?"flame":urgencyVal==="加急"?"alert-circle":"clock-3";
  var urgencyBadge='<span class="tag-urgency '+urgencyCls+'">'+ico(urgencyIcon,12)+urgencyVal+'</span>';

  // 2、去除平级，加急标签后的所有内容。
  // 3、状态去除已退回，已退回的状态也为待处理。这种被退回的在平级等标签后增加【驳回重办】的tag
  var isReturned = (row.status==="已退回" || !!row.rejected || row.key==="todo-returned");
  var rejectedTag = isReturned ? '<span class="tag-rejected">'+ico("rotate-ccw",11)+'驳回重办</span>' : '';
  var badgesHtml='<div class="title-badges-row">'+urgencyBadge+rejectedTag+'</div>';

  var displayStatus=row.status;
  if(row.status==="已退回"){
    displayStatus="待处理";
  }else if(isNotice && row.status==="待阅"){
    displayStatus="待处理";
  }else if(mode==="read"){
    displayStatus=row.status==="已归档"?"已阅":"待阅";
  }

  var countdownBoxHtml="";
  var skipCountdown = row.status==="待阅" || row.req==="仅阅读" || row.status==="待审批" || row.status==="已归档" || row.status==="待重新派发" || displayStatus==="待重新派发";
  var hasDeadline = !!(row.deadline || (row.req==="限时回执"));
  var chipHtml="";
  if(!skipCountdown && hasDeadline){
    if(row.handleOverdue || row.overdueHours){
      chipHtml=renderUnifiedCountdownChip("handle", row.handleOverdue||row.overdueHours, true);
    }else{
      chipHtml=renderUnifiedCountdownChip("handle", row.handleCountdown||"03小时59分", false);
    }
  }
  if(mode === "sent-mgmt"){
    var sentTime=row.time||row.sentTime||"-";
    var sourcePart='<span class="todo-source-compact todo-sent-time" title="下发时间：'+escapeHtml(sentTime)+'">下发时间：'+escapeHtml(sentTime)+'</span>';
    countdownBoxHtml='<div class="todo-compact-meta-row">'+sourcePart+chipHtml+'</div>';
  } else {
    var dispatchPart='<span class="todo-dispatch-time" title="下发时间">下发时间 '+escapeHtml(dispatchTimeCn)+'</span>';
    countdownBoxHtml='<div class="todo-compact-meta-row">'+dispatchPart+chipHtml+'</div>';
  }

  // 5、标题下发去除发文模板。
  var titleCell='<div class="todo-title-wrap">'+badgesHtml+'<span class="todo-title-link" title="'+escapeHtml(row.title)+'">'+escapeHtml(row.title)+'</span>'+countdownBoxHtml+'</div>';

  var statusColBadgeCls=statusClass(displayStatus);
  var statusCol='<div class="status-col-inner"><span class="status-col-badge '+statusColBadgeCls+'">'+displayStatus+'</span></div>';

  // 8、操作列按钮逻辑：
  // 1. 在我的指令-待办中，操作列的按钮，统一为去处理。
  // 2. 在我的指令-下发中，操作列按钮，应判定当前处理人是否为当前登录用户，如果为当前登录用户，在当前处理人列中突出当前登录人的名字。且操作应该为去处理，否则为详情。
  // 3. 在已办列表中，操作列为详情。
  var isSentMgmt = mode==="sent-mgmt" || mode==="sent";
  var isHandleBtn = isTaskActionHandle(row, mode);
  var actionBtnText = isHandleBtn ? "去处理" : "详情";

  var btnCls = isHandleBtn ? "btn-action-handle" : "btn-action-detail";
  var actionBtnStyle = isHandleBtn ? "" : "padding:0 12px;height:26px;font-size:12px;font-weight:600";
  var actionCell='<div class="table-row-actions"><button class="btn '+btnCls+'" data-action="detail" data-detail-key="'+row.key+'" data-detail-source="'+mode+'" style="'+actionBtnStyle+'">'+actionBtnText+'</button></div>';

  // 4、在列表页，增加进去详情的热区，点击某一项列表，即可进入详情。
  if(mode === "sent-mgmt"){
    var activeTab = (state.listTabs && state.listTabs[mode]) || "全部";
    var senderTd = '<td class="col-sender"><div class="handler-cell-container"><div class="handler-name-row"><span class="handler-primary-name">' + escapeHtml(row.sender || "张伟") + '</span></div></div></td>';
    var handlerTd = (activeTab === "已归档")
      ? '<td class="col-handler">' + renderArchivedProcessorCell(row) + '</td>'
      : '<td class="col-handler">' + renderCurrentHandlerCell(row) + '</td>';

    var seqNo = (typeof rowIndex === "number" ? rowIndex : 0) + 1;
    var appName = getTaskApplication(row);
    var appTd = '<td class="col-app"><span class="tag category" title="'+escapeHtml(appName)+'">'+escapeHtml(appName)+'</span></td>';
    var seqTd = '<td class="col-seq sent-mgmt-seq">'+seqNo+'</td>';
    return '<tr class="task-table-row">'+seqTd+'<td class="col-id">'+idCellMy+'</td><td class="col-title">'+titleCell+'</td><td class="col-status">'+statusCol+'</td>'+appTd+senderTd+handlerTd+'<td class="col-action">'+actionCell+'</td></tr>';
  } else if(mode === "sent"){
    var handlerTd = '<td class="col-handler">' + renderCurrentHandlerCell(row) + '</td>';
    return '<tr class="task-table-row" data-action="detail" data-detail-key="'+row.key+'" data-detail-source="'+mode+'">'+seqTd+'<td class="col-id">'+idCellMy+'</td><td class="col-title">'+titleCell+'</td><td class="col-status">'+statusCol+'</td>'+handlerTd+'<td class="col-action">'+actionCell+'</td></tr>';
  } else if(mode === "todo"){
    return '<tr class="task-table-row" data-action="detail" data-detail-key="'+row.key+'" data-detail-source="'+mode+'">'+seqTd+'<td class="col-id">'+idCellMy+'</td><td class="col-title">'+titleCell+'</td><td class="col-status">'+statusCol+'</td><td class="col-sender">'+senderCell+'</td><td class="col-action">'+actionCell+'</td></tr>';
  }

  return '<tr class="task-table-row" data-action="detail" data-detail-key="'+row.key+'" data-detail-source="'+mode+'">'+seqTd+'<td class="col-id">'+idCellMy+'</td><td class="col-sender">'+senderCell+'</td><td class="col-title">'+titleCell+'</td><td class="col-status">'+statusCol+'</td><td class="col-action">'+actionCell+'</td></tr>';
}

function renderEmptyStateHtml(title, sub){
  title = title || "暂无符合条件的指令";
  sub = sub || "您可以尝试调整上方筛选条件或重置查询";
  return '<div class="custom-empty-state-wrap">' +
    '<div class="empty-state-illu">' +
      '<svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<defs>' +
          '<filter id="emptySoftShadow" x="-10%" y="-10%" width="130%" height="130%">' +
            '<feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#0f172a" flood-opacity="0.06"/>' +
          '</filter>' +
        '</defs>' +
        '<!-- 浮动小方块装饰 -->' +
        '<rect x="24" y="28" width="8" height="8" rx="2" fill="#e2e8f0" transform="rotate(22 28 32)" />' +
        '<rect x="188" y="24" width="7" height="7" rx="1.5" fill="#e2e8f0" transform="rotate(35 191 27)" />' +
        '<rect x="198" y="85" width="9" height="9" rx="2" fill="#cbd5e1" transform="rotate(12 202 89)" />' +
        '<rect x="180" y="145" width="6" height="6" rx="1.5" fill="#e2e8f0" transform="rotate(45 183 148)" />' +
        '<!-- 底部投影 -->' +
        '<ellipse cx="140" cy="162" rx="46" ry="7" fill="#f1f5f9" />' +
        '<ellipse cx="70" cy="162" rx="36" ry="7" fill="#f1f5f9" />' +
        '<!-- 剪贴板文件板 -->' +
        '<g filter="url(#emptySoftShadow)">' +
          '<rect x="92" y="22" width="102" height="136" rx="10" fill="#cfd8dc" stroke="#b0bec5" stroke-width="1.5" />' +
          '<rect x="100" y="32" width="86" height="118" rx="6" fill="#ffffff" />' +
          '<rect x="112" y="52" width="46" height="5" rx="2.5" fill="#e2e8f0" />' +
          '<rect x="112" y="66" width="62" height="5" rx="2.5" fill="#e2e8f0" />' +
          '<rect x="112" y="80" width="54" height="5" rx="2.5" fill="#e2e8f0" />' +
          '<rect x="112" y="94" width="58" height="5" rx="2.5" fill="#e2e8f0" />' +
          '<rect x="112" y="108" width="40" height="5" rx="2.5" fill="#e2e8f0" />' +
          '<rect x="127" y="13" width="32" height="18" rx="4" fill="#94a3b8" />' +
          '<circle cx="143" cy="20" r="3.5" fill="#f8fafc" />' +
          '<rect x="118" y="22" width="50" height="13" rx="3.5" fill="#64748b" />' +
        '</g>' +
        '<!-- 可爱小白狗与放大镜 (图2) -->' +
        '<g filter="url(#emptySoftShadow)">' +
          '<ellipse cx="68" cy="126" rx="26" ry="25" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<ellipse cx="54" cy="154" rx="9" ry="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<ellipse cx="80" cy="154" rx="9" ry="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<ellipse cx="48" cy="120" rx="7" ry="6" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<circle cx="68" cy="78" r="30" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<ellipse cx="36" cy="74" rx="10" ry="17" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" transform="rotate(-15 36 74)" />' +
          '<ellipse cx="100" cy="74" rx="10" ry="17" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" transform="rotate(15 100 74)" />' +
          '<circle cx="57" cy="75" r="3.8" fill="#1e293b" />' +
          '<circle cx="55.8" cy="73.5" r="1.3" fill="#ffffff" />' +
          '<circle cx="79" cy="75" r="3.8" fill="#1e293b" />' +
          '<circle cx="77.8" cy="73.5" r="1.3" fill="#ffffff" />' +
          '<ellipse cx="68" cy="83" rx="4.2" ry="3" fill="#1e293b" />' +
          '<ellipse cx="67" cy="82" rx="1.2" ry="0.8" fill="#ffffff" opacity="0.6" />' +
          '<path d="M 64.5 86 C 66 88 70 88 71.5 86" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round" fill="none" />' +
          '<path d="M 66 87 C 66 90.5 70 90.5 70 87 Z" fill="#f43f5e" />' +
          '<line x1="84" y1="120" x2="101" y2="99" stroke="#334155" stroke-width="5" stroke-linecap="round" />' +
          '<ellipse cx="85" cy="118" rx="7.5" ry="6.5" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />' +
          '<circle cx="112" cy="86" r="18" fill="none" stroke="#1e293b" stroke-width="4.5" />' +
          '<circle cx="112" cy="86" r="15" fill="#bae6fd" fill-opacity="0.38" />' +
          '<path d="M 102 78 A 12 12 0 0 1 121 75" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" fill="none" />' +
        '</g>' +
      '</svg>' +
    '</div>' +
    '<div class="empty-state-title">' + escapeHtml(title) + '</div>' +
    '<div class="empty-state-desc">' + escapeHtml(sub) + '</div>' +
  '</div>';
}

function taskTableHtml(rows,mode,startIndex){
  startIndex = startIndex || 0;
  if(!rows||!rows.length){
    return renderEmptyStateHtml("暂无符合条件的指令", "您可以尝试调整上方筛选条件或重置查询");
  }
  if(mode==="sent-mgmt"){
    var activeTab = (state.listTabs && state.listTabs[mode]) || "全部";
    var handlerHeader = activeTab === "已归档" ? "处理人" : "当前处理人";
    return '<div class="task-table-wrap"><table class="task-table sent-mgmt-table"><colgroup>' +
      '<col style="width:44px">' +
      '<col style="width:220px">' +
      '<col>' +
      '<col style="width:118px">' +
      '<col style="width:128px">' +
      '<col style="width:100px">' +
      '<col style="width:148px">' +
      '<col style="width:100px">' +
    '</colgroup><thead><tr>' +
      '<th class="col-seq">序号</th>' +
      '<th class="col-id">ID</th>' +
      '<th class="col-title">指令标题</th>' +
      '<th class="col-status">状态</th>' +
      '<th class="col-app">业务应用</th>' +
      '<th class="col-sender">下发人</th>' +
      '<th class="col-handler">' + handlerHeader + '</th>' +
      '<th class="col-action">操作</th>' +
    '</tr></thead><tbody>' +
      rows.map(function(r, idx){return taskTableRowHtml(r,mode,startIndex + idx)}).join("") +
    '</tbody></table></div>';
  }
  var titleHeader = mode === "read" ? "待阅标题" : "指令标题";
  var colgroup = "";
  var thead = "";
  if(mode === "todo"){
    colgroup =
      '<col style="width:52px">' +
      '<col style="width:210px">' +
      '<col>' +
      '<col style="width:118px">' +
      '<col style="width:128px">' +
      '<col style="width:96px">';
    thead = '<th class="col-seq">序号</th><th class="col-id">ID</th><th class="col-title">指令标题</th><th class="col-status">状态</th><th class="col-sender">下发人</th><th class="col-action">操作</th>';
  } else if(mode === "sent"){
    colgroup =
      '<col style="width:52px">' +
      '<col style="width:210px">' +
      '<col>' +
      '<col style="width:118px">' +
      '<col style="width:130px">' +
      '<col style="width:96px">';
    thead = '<th class="col-seq">序号</th><th class="col-id">ID</th><th class="col-title">指令标题</th><th class="col-status">状态</th><th class="col-handler">当前处理人</th><th class="col-action">操作</th>';
  } else {
    colgroup =
      '<col style="width:52px">' +
      '<col style="width:210px">' +
      '<col style="width:128px">' +
      '<col>' +
      '<col style="width:118px">' +
      '<col style="width:96px">';
    thead = '<th class="col-seq">序号</th><th class="col-id">ID</th><th class="col-sender">下发人</th><th class="col-title">'+titleHeader+'</th><th class="col-status">状态</th><th class="col-action">操作</th>';
  }
  return '<div class="task-table-wrap"><table class="task-table my-instr-table"><colgroup>' + colgroup +
  '</colgroup><thead><tr>' + thead +
  '</tr></thead><tbody>' +
    rows.map(function(r, idx){return taskTableRowHtml(r,mode,startIndex + idx)}).join("") +
  '</tbody></table></div>';
}
function draftTableRowHtml(row, rowIndex){
  var seqNo = (typeof rowIndex === "number" ? rowIndex : 0) + 1;
  var idFull=escapeHtml(row.id||"CG-20260914-001");
  var idCell='<span class="id-code-text" title="'+idFull+'">'+idFull+'</span>';
  var titleCell='<div class="todo-title-wrap"><span class="todo-title-link" title="'+escapeHtml(row.title)+'" style="cursor:default">'+escapeHtml(row.title)+'</span></div>';
  var templateCell='<span class="draft-template-tag">'+ico("file-text",13)+escapeHtml(row.template||"舆情处置-限时回执")+'</span>';
  var timeCell='<span class="draft-time-text">'+escapeHtml(row.time||"2026-09-14 11:20:00")+'</span>';
  var actionCell='<div class="table-row-actions draft-actions">' +
    '<button type="button" class="draft-action-link" data-action="edit-draft" data-draft-key="'+row.key+'">编辑</button>' +
    '<span class="draft-action-divider">|</span>' +
    '<button type="button" class="draft-action-link" data-action="copy-draft" data-draft-key="'+row.key+'">复制</button>' +
    '<span class="draft-action-divider">|</span>' +
    '<button type="button" class="draft-action-link danger" data-action="delete-draft" data-draft-key="'+row.key+'">删除</button>' +
  '</div>';
  return '<tr class="task-table-row">'+
    '<td class="col-seq sent-mgmt-seq">'+seqNo+'</td>'+
    '<td class="col-id">'+idCell+'</td>'+
    '<td class="col-title">'+titleCell+'</td>'+
    '<td class="col-tpl">'+templateCell+'</td>'+
    '<td class="col-time">'+timeCell+'</td>'+
    '<td class="col-action">'+actionCell+'</td>'+
  '</tr>';
}

function draftTableHtml(rows, startIndex){
  startIndex = startIndex || 0;
  if(!rows||!rows.length){
    return renderEmptyStateHtml("暂无草稿记录", "暂无保存的指令草稿，支持随时新建并保存草稿");
  }
  return '<div class="task-table-wrap"><table class="task-table draft-box-table"><colgroup>' +
    '<col style="width:48px">' +
    '<col style="width:168px">' +
    '<col>' +
    '<col style="width:210px">' +
    '<col style="width:148px">' +
    '<col style="width:200px">' +
  '</colgroup><thead><tr>' +
    '<th class="col-seq">序号</th>' +
    '<th class="col-id">草稿ID</th>' +
    '<th class="col-title">指令标题</th>' +
    '<th class="col-tpl">指令模板</th>' +
    '<th class="col-time">更新时间</th>' +
    '<th class="col-action">操作</th>' +
  '</tr></thead><tbody>'+rows.map(function(r, idx){return draftTableRowHtml(r, startIndex + idx)}).join("")+'</tbody></table></div>';
}

function simpleFilterOptions(options,selectedVal){
  selectedVal=selectedVal||"全部";
  var allOpt='<div class="filter-option '+(selectedVal==="全部"?"selected":"")+'" data-filter-option="全部">全部</div>';
  return allOpt+options.map(function(value){return '<div class="filter-option '+(value===selectedVal?"selected":"")+'" data-filter-option="'+value+'">'+value+'</div>'}).join("");
}
function filterSelect(key,label,options,extraClass,withInfo,selectedVal){
  selectedVal=selectedVal||"全部";
  return '<div class="filter-select '+(extraClass||"")+'" data-filter="'+key+'"><button type="button" class="filter-trigger"><b>'+label+(withInfo?ico("info",12):"")+'</b><span class="select-value">'+selectedVal+'</span><span class="select-arrow">'+ico("chevron-down",15)+'</span></button><div class="filter-menu '+(key==="receiver"?"receiver-menu":"")+'">'+simpleFilterOptions(options,selectedVal)+'</div></div>';
}

function searchableFilterSelect(key, label, options, extraClass, selectedVal, placeholder){
  selectedVal = selectedVal || "全部";
  placeholder = placeholder || "搜索" + label + "...";
  var allOpt = '<div class="filter-option ' + (selectedVal === "全部" ? "selected" : "") + '" data-filter-option="全部">全部</div>';
  var optionsHtml = allOpt + options.map(function(opt){
    var val = typeof opt === "string" ? opt : opt.value;
    var display = typeof opt === "string" ? opt : opt.label;
    var isSel = (val === selectedVal);
    return '<div class="filter-option ' + (isSel ? "selected" : "") + '" data-filter-option="' + escapeHtml(val) + '" title="' + escapeHtml(display) + '">' + escapeHtml(display) + '</div>';
  }).join("");

  return '<div class="filter-select ' + (extraClass || "") + '" data-filter="' + key + '">' +
    '<button type="button" class="filter-trigger">' +
      '<b>' + label + '</b>' +
      '<span class="select-value" title="' + escapeHtml(selectedVal) + '">' + escapeHtml(selectedVal) + '</span>' +
      '<span class="select-arrow">' + ico("chevron-down", 15) + '</span>' +
    '</button>' +
    '<div class="filter-menu searchable-menu">' +
      '<div class="filter-search-box">' +
        '<span class="filter-search-icon">' + ico("search", 13) + '</span>' +
        '<input type="text" class="filter-search-input" placeholder="' + escapeHtml(placeholder) + '" onclick="event.stopPropagation()">' +
      '</div>' +
      '<div class="filter-options-scroll">' +
        optionsHtml +
      '</div>' +
    '</div>' +
  '</div>';
}

function filterBar(mode,total){
  var f=(state.filterQuery&&state.filterQuery[mode])||{category:"全部",module:"全部",content:"",requirement:"全部",sender:"全部",senderOrg:"全部",processor:"全部",status:"全部",template:"全部"};
  var contentVal=escapeHtml(f.content||"");
  var counterVal=(f.content||"").length+" / 100";

  var isToday = (state.quickFlag === "todayDue") || (!state.quickFlag && state.quickFlags && state.quickFlags.todayDue);
  var isOverdue = (state.quickFlag === "overdue") || (!state.quickFlag && state.quickFlags && state.quickFlags.overdue);
  var isOnlyMine = !!(state.quickFlags && state.quickFlags.onlyMine);

  var filterInputsHtml = "";

  if(mode === "draft"){
    // 草稿箱中，上方筛选条件改为指令模板和内容
    var templateOptions = [
      "舆情处置-限时回执",
      "舆情处置-回执",
      "舆情处置-仅阅读",
      "错误表述-限时回执",
      "错误表述-仅阅读",
      "文件测试模板（机构专版）"
    ];
    var tplFilter = searchableFilterSelect("template", "指令模板", templateOptions, "template-select", f.template || "全部", "搜索指令模板...");
    filterInputsHtml = tplFilter +
      '<div class="filter-content"><b>内容</b><input data-filter-content maxlength="100" placeholder="请输入指令标题/草稿ID/内容" value="' + contentVal + '"><span class="counter">' + counterVal + '</span></div>';
  } else if(mode === "sent"){
    var typeOptions = ["舆情处置", "错误表述", "通知通报", "业务协同"];
    var typeFilter = searchableFilterSelect("category", "指令类型", typeOptions, "category-select", f.category || "全部", "搜索指令类型...");

    var processorOptions = ["武乙", "武丙", "武甲", "齐杰", "谭星", "张伟", "李明峰", "技术保障组", "各市县网信办"];
    var processorFilter = searchableFilterSelect("processor", "当前处理人", processorOptions, "processor-select", f.processor || "全部", "搜索处理人...");

    var contentInput = '<div class="filter-content"><b>内容</b><input data-filter-content maxlength="100" placeholder="请输入指令标题/表单ID/内容" value="' + contentVal + '"><span class="counter">' + counterVal + '</span></div>';

    filterInputsHtml = typeFilter + processorFilter + contentInput;
  } else if(mode === "sent-mgmt"){
    var activeTab = (state.listTabs && state.listTabs[mode]) || "全部";
    var statusOptions = ["待处理", "待审批", "已归档"];
    var statusFilter = filterSelect("status", "状态", statusOptions, "status-select", false, f.status || "全部");

    var senderPersonOptions = ["武甲", "张伟", "李明峰", "齐杰", "谭星", "陈默", "武丁"];
    var senderFilter = searchableFilterSelect("sender", "下发人", senderPersonOptions, "sender-select", f.sender || "全部", "搜索下发人...");

    var processorOptions = ["武乙", "武丙", "武甲", "齐杰", "谭星", "张伟", "李明峰", "技术保障组", "各市县网信办"];
    var processorFilter = searchableFilterSelect("processor", "当前处理人", processorOptions, "processor-select", f.processor || "全部", "搜索处理人...");

    var contentInput = '<div class="filter-content"><b>内容</b><input data-filter-content maxlength="100" placeholder="请输入指令标题/表单ID/内容" value="' + contentVal + '"><span class="counter">' + counterVal + '</span></div>';

    filterInputsHtml = senderFilter + processorFilter + contentInput;
  } else if(mode === "todo"){
    var typeOptions = ["舆情处置", "错误表述", "通知通报", "业务协同"];
    var typeFilter = searchableFilterSelect("category", "指令类型", typeOptions, "category-select", f.category || "全部", "搜索指令类型...");
    var senderPersonOptions = ["武甲", "张伟", "李明峰", "陈默", "武丁", "谭星", "齐杰"];
    var senderFilter = searchableFilterSelect("sender", "下发人", senderPersonOptions, "person-select", f.sender || "全部", "搜索下发人...");
    filterInputsHtml = typeFilter + senderFilter +
      '<div class="filter-content"><b>内容</b><input data-filter-content maxlength="100" placeholder="请输入指令标题/表单ID/内容" value="' + contentVal + '"><span class="counter">' + counterVal + '</span></div>';
  } else {
    // 待阅/已办：指令类型 + 下发单位 + 下发人 + 内容
    var typeOptions = ["舆情处置", "错误表述", "通知通报", "业务协同"];
    var typeFilter = searchableFilterSelect("category", "指令类型", typeOptions, "category-select", f.category || "全部", "搜索指令类型...");
    var orgOptions = [
      "中共省委网络安全和信息化委员会办公室",
      "省网络与信息安全应急指挥中心",
      "省政务服务和数字化建设管理局",
      "网络传播与舆情应急处",
      "技术保障与应急响应组",
      "网安监察支队指挥中心",
      "各市州网信工作协同中心"
    ];
    var orgFilter = searchableFilterSelect("senderOrg", "下发单位", orgOptions, "org-select", f.senderOrg || "全部", "搜索下发单位...");

    var senderPersonOptions = [
      "武甲 (中共省委网络安全和信息化委员会办公室)",
      "张伟 (省网络与信息安全应急指挥中心)",
      "李明峰 (网络传播与舆情应急处)",
      "陈默 (省网络与信息安全应急指挥中心)",
      "武丁 (省委网信办秘书处)",
      "谭星 (技术保障与应急响应组)",
      "齐杰 (网安监察支队指挥中心)"
    ];
    var senderFilter = searchableFilterSelect("sender", "下发人", senderPersonOptions, "person-select", f.sender || "全部", "搜索下发人(带单位)...");

    filterInputsHtml = typeFilter + orgFilter + senderFilter +
      '<div class="filter-content"><b>内容</b><input data-filter-content maxlength="100" placeholder="请输入指令标题/表单ID/内容" value="' + contentVal + '"><span class="counter">' + counterVal + '</span></div>';
  }

  var hideQuickFlags = false;
  if(mode === "done" || mode === "draft"){
    hideQuickFlags = true;
  }
  if(mode === "sent-mgmt"){
    hideQuickFlags = false;
  }

  var onlyMineHtml = mode === "sent-mgmt"
    ? '<label class="quick-flag-item '+(isOnlyMine?'active':'')+'" data-action="toggle-flag" data-flag="onlyMine" style="cursor:pointer;display:inline-flex;align-items:center;gap:6px;user-select:none">' +
        '<span class="fake-check '+(isOnlyMine?'on':'')+'">'+(isOnlyMine?'✓':'')+'</span> 只看我的' +
      '</label>'
    : "";
  var quickFlagsHtml = "";
  if(!hideQuickFlags){
    quickFlagsHtml = '<div class="quick-flags">' +
      onlyMineHtml +
      '<label class="quick-flag-item '+(isToday?'active':'')+'" data-action="toggle-flag-radio" data-flag="todayDue" style="cursor:pointer;display:inline-flex;align-items:center;gap:6px;user-select:none">' +
        '<span class="fake-radio '+(isToday?'on':'')+'"></span> 今日到期' +
      '</label>' +
      '<label class="quick-flag-item '+(isOverdue?'active':'')+'" data-action="toggle-flag-radio" data-flag="overdue" style="cursor:pointer;display:inline-flex;align-items:center;gap:6px;user-select:none">' +
        '<span class="fake-radio danger '+(isOverdue?'on':'')+'"></span> 已超时' +
      '</label>' +
    '</div>';
  }

  return '<div class="filter-single-row task-filters" data-filter-mode="'+mode+'">' +
    '<div class="filter-inputs-row">' +
      filterInputsHtml +
      '<div class="filter-btns-wrap">' +
        '<button type="button" class="btn primary" data-action="filter-query" data-mode="'+mode+'">'+ico("search",14)+'查询</button>' +
        '<button type="button" class="btn" data-action="filter-reset" data-mode="'+mode+'">'+ico("rotate-ccw",14)+'重置</button>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="table-info-strip">' +
    '<div class="summary-badge"><span class="summary-check-icon">✓</span>当前筛选条件，共有 <strong>'+total+'</strong> 条数据</div>' +
    quickFlagsHtml +
  '</div>';
}

function isCirculateTask(r){
  if(!r) return false;
  return r.type === "传阅" ||
         r.readType === "传阅" ||
         (r.categoryTag && String(r.categoryTag).indexOf("传阅") > -1) ||
         r.origin === "传阅" ||
         r.template === "公文协同传阅" ||
         (r.template && String(r.template).indexOf("传阅") > -1) ||
         (r.title && (String(r.title).indexOf("【传阅】") > -1 || String(r.title).indexOf("【工单传阅】") > -1));
}

function renderMyInstructions(){
  var subPage=state.mySubPage||"todo";
  if(subPage==="read"){
    subPage="todo";
    state.mySubPage="todo";
  }

  // 根据当前演示用户（武甲/武乙/武丙）动态过滤属于该用户的真实数据
  var userTodoRows = taskRows.filter(function(r){
    // 已归档不属于待办
    if(r.status === "已归档") {
      return false;
    }
    // 传阅类数据单独划归【待阅】子页面，不出现在【待办】中
    if(isCirculateTask(r)) {
      return false;
    }
    // 如果是待审批单子，归下发人（当前用户）审批
    if(r.status === "待审批") {
      return r.sender === currentUser;
    }
    // 普通待办/办理中/通知类：接收人包含当前用户
    if(Array.isArray(r.receiver)) {
      return r.receiver.includes(currentUser);
    }
    return r.receiver === currentUser || r.processor === currentUser;
  });

  var userReadRows = taskRows.filter(function(r){
    if(!isCirculateTask(r)) {
      return false;
    }
    if(Array.isArray(r.receiver)) {
      return r.receiver.includes(currentUser);
    }
    return r.receiver === currentUser || r.processor === currentUser || r.sender === currentUser;
  });

  var userSentRows = taskRows.filter(function(r){
    return r.sender === currentUser && !isCirculateTask(r);
  });

  var userDoneRows = taskRows.filter(function(r){
    return r.status === "已归档" && (r.sender === currentUser || r.receiver === currentUser || (r.receipt && r.receipt.processor === currentUser));
  });

  var draftBaseRows=draftRows;

  var todoBaseRows=userTodoRows;
  var sentBaseRows=userSentRows;
  var readBaseRows=userReadRows;
  var doneBaseRows=userDoneRows;

  var todoCounts={
    "全部": todoBaseRows.length,
    "待处理": todoBaseRows.filter(function(r){return r.status==="待处理"||r.status==="已退回"||r.status==="待阅"||r.req==="仅阅读"}).length,
    "待审批": todoBaseRows.filter(function(r){return r.status==="待审批"}).length
  };

  // 左侧侧边栏：下发指令、待办、下发、待阅（传阅数据）、已办、草稿箱
  var sidebarHtml='<aside class="list-sidebar">'+
    '<div class="sidebar-action-wrap">'+
      '<button type="button" class="sidebar-action-btn" data-action="go-issue-dispatch" title="'+(isStorageFull()?"存储空间已满，无法下发指令":"前往下发指令")+'"'+(isStorageFull()?' style="opacity:.55;cursor:not-allowed"':'')+'>'+
        '<span class="sidebar-action-btn-left">'+
          '<span class="sidebar-action-icon">'+ico("send",17)+'</span>'+
          '<span class="sidebar-action-label">下发指令</span>'+
        '</span>'+
        '<span class="sidebar-action-arrow">'+ico("chevron-right",15)+'</span>'+
      '</button>'+
    '</div>'+
    '<nav class="sidebar-nav">'+
      '<button type="button" class="sidebar-item '+(subPage==="todo"?"active":"")+'" data-action="switch-my-subpage" data-subpage="todo">'+
        '<span class="sidebar-item-left">'+ico("inbox",16)+'<span>我的待办</span></span>'+
        '<span class="sidebar-badge">'+todoBaseRows.length+'</span>'+
      '</button>'+
      '<button type="button" class="sidebar-item '+(subPage==="sent"?"active":"")+'" data-action="switch-my-subpage" data-subpage="sent">'+
        '<span class="sidebar-item-left">'+ico("send",16)+'<span>我下发的</span></span>'+
        '<span class="sidebar-badge">'+sentBaseRows.length+'</span>'+
      '</button>'+
      // 暂隐「我的待阅/传阅」菜单
      // '<button type="button" class="sidebar-item '+(subPage==="read"?"active":"")+'" data-action="switch-my-subpage" data-subpage="read">'+
      //   '<span class="sidebar-item-left">'+ico("book-open",16)+'<span>我的待阅</span></span>'+
      //   '<span class="sidebar-badge">'+readBaseRows.length+'</span>'+
      // '</button>'+
      '<button type="button" class="sidebar-item '+(subPage==="done"?"active":"")+'" data-action="switch-my-subpage" data-subpage="done">'+
        '<span class="sidebar-item-left">'+ico("check-circle-2",16)+'<span>我的已办</span></span>'+
        '<span class="sidebar-badge">'+doneBaseRows.length+'</span>'+
      '</button>'+
      '<button type="button" class="sidebar-item '+(subPage==="draft"?"active":"")+'" data-action="switch-my-subpage" data-subpage="draft">'+
        '<span class="sidebar-item-left">'+ico("file-edit",16)+'<span>草稿箱</span></span>'+
        '<span class="sidebar-badge">'+draftBaseRows.length+'</span>'+
      '</button>'+
    '</nav>'+
  '</aside>';

  var currentMode=subPage;
  var rows = subPage==="todo"?todoBaseRows:subPage==="sent"?sentBaseRows:subPage==="read"?readBaseRows:subPage==="done"?doneBaseRows:draftBaseRows;

  var pillsBarHtml="";
  if(subPage==="todo"){
    var currentTab=state.listTabs.todo||"全部";
    var pillItems=[
      {key:"全部",label:"全部",count:todoCounts["全部"]},
      {key:"待处理",label:"待处理",count:todoCounts["待处理"]},
      {key:"待审批",label:"待审批",count:todoCounts["待审批"]}
    ];
    pillsBarHtml='<div class="todo-pills-bar"><div class="todo-pills-wrap">'+pillItems.map(function(item){
      var active=item.key===currentTab?"active":"";
      return '<button type="button" class="todo-pill-item '+active+'" data-action="list-tab" data-list-mode="todo" data-list-tab="'+item.key+'">'+
        '<span>'+item.label+'</span>'+
        '<span class="pill-count-badge">'+item.count+'</span>'+
      '</button>';
    }).join("")+'</div></div>';

    if(currentTab==="待处理"){
      rows=rows.filter(function(r){return r.status==="待处理"||r.status==="已退回"||r.status==="待阅"||r.req==="仅阅读"});
    }else if(currentTab!=="全部"){
      rows=rows.filter(function(r){return r.status===currentTab});
    }
  }else if(subPage==="sent"){
    var sentTab=state.listTabs.sent||"全部";
    var sentCounts={
      "全部": sentBaseRows.length,
      "待处理": sentBaseRows.filter(function(r){return r.status==="待处理"||r.status==="已退回"}).length,
      "待审批": sentBaseRows.filter(function(r){return r.status==="待审批"}).length,
      "待重新派发": sentBaseRows.filter(function(r){return r.status==="待重新派发"}).length,
      "已归档": sentBaseRows.filter(function(r){return r.status==="已归档"}).length
    };
    var sentPills=[
      {key:"全部",label:"全部",count:sentCounts["全部"]},
      {key:"待处理",label:"待处理",count:sentCounts["待处理"]},
      {key:"待审批",label:"待审批",count:sentCounts["待审批"]},
      {key:"待重新派发",label:"待重新派发",count:sentCounts["待重新派发"]},
      {key:"已归档",label:"已归档",count:sentCounts["已归档"]}
    ];
    pillsBarHtml='<div class="todo-pills-bar"><div class="todo-pills-wrap">'+sentPills.map(function(item){
      var active=item.key===sentTab?"active":"";
      return '<button type="button" class="todo-pill-item '+active+'" data-action="list-tab" data-list-mode="sent" data-list-tab="'+item.key+'">'+
        '<span>'+item.label+'</span>'+
        '<span class="pill-count-badge">'+item.count+'</span>'+
      '</button>';
    }).join("")+'</div></div>';

    if(sentTab==="待处理"){
      rows=rows.filter(function(r){return r.status==="待处理"||r.status==="已退回"});
    }else if(sentTab!=="全部"){
      rows=rows.filter(function(r){return r.status===sentTab});
    }
  }

  var isRadioToday = (state.quickFlag === "todayDue") || (!state.quickFlag && state.quickFlags && state.quickFlags.todayDue);
  var isRadioOverdue = (state.quickFlag === "overdue") || (!state.quickFlag && state.quickFlags && state.quickFlags.overdue);
  if(subPage !== "done" && subPage !== "draft"){
    if(isRadioToday){
      rows=rows.filter(isItemTodayDue);
    } else if(isRadioOverdue){
      rows=rows.filter(isItemOverdue);
    }
  }

  var q=state.filterQuery&&state.filterQuery[currentMode];
  if(q){
    if(q.category&&q.category!=="全部"){
      var cKw=q.category.trim();
      rows=rows.filter(function(r){ return getTaskInstrType(r) === cKw; });
    }
    if(q.template&&q.template!=="全部"){
      var tKw=q.template.trim();
      rows=rows.filter(function(r){
        return (r.template&&r.template.indexOf(tKw)>-1);
      });
    }
    if(q.senderOrg&&q.senderOrg!=="全部"){
      var oKw=q.senderOrg.trim();
      rows=rows.filter(function(r){
        return (r.senderOrg&&r.senderOrg.indexOf(oKw)>-1);
      });
    }
    if(q.sender&&q.sender!=="全部"){
      var sKw=q.sender.trim();
      var pureName = sKw.split(/[\s(（]/)[0].trim();
      rows=rows.filter(function(r){
        return (r.sender&&r.sender.indexOf(pureName)>-1)||
               (r.senderOrg&&r.senderOrg.indexOf(pureName)>-1);
      });
    }
    if(q.status&&q.status!=="全部"){
      if(q.status==="待处理"){
        rows=rows.filter(function(r){ return r.status==="待处理"||r.status==="已退回"; });
      } else {
        rows=rows.filter(function(r){ return r.status===q.status; });
      }
    }
    if(q.processor&&q.processor!=="全部"){
      var pKw=q.processor.trim();
      rows=rows.filter(function(r){
        return (r.processor&&r.processor.indexOf(pKw)>-1)||
               (r.receiver&&String(r.receiver).indexOf(pKw)>-1)||
               (r.status==="待审批"&&r.sender&&r.sender.indexOf(pKw)>-1);
      });
    }
    if(q.requirement&&q.requirement!=="全部"){
      rows=rows.filter(function(r){return r.req===q.requirement});
    }
    if(q.content&&q.content.trim()){
      var kw=q.content.trim().toLowerCase();
      rows=rows.filter(function(r){
        return (r.title&&r.title.toLowerCase().indexOf(kw)>-1)||
               (r.id&&r.id.toLowerCase().indexOf(kw)>-1)||
               (r.template&&r.template.toLowerCase().indexOf(kw)>-1)||
               (r.receiver&&String(r.receiver).toLowerCase().indexOf(kw)>-1)||
               (r.description&&r.description.toLowerCase().indexOf(kw)>-1)||
               (r.content&&r.content.toLowerCase().indexOf(kw)>-1);
      });
    }
  }

  var selectedTotal=rows.length;
  var pageSize=(state.pageSizes&&state.pageSizes[currentMode])||10;
  var totalPages=Math.max(1,Math.ceil(selectedTotal/pageSize));
  var currentPage=(state.pageNumbers&&state.pageNumbers[currentMode])||1;
  if(currentPage>totalPages) currentPage=totalPages;
  if(currentPage<1) currentPage=1;
  if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,read:1,done:1,draft:1};
  state.pageNumbers[currentMode]=currentPage;

  var startIndex=(currentPage-1)*pageSize;
  var pageRows=rows.slice(startIndex,startIndex+pageSize);

  var tableContentHtml = subPage==="draft" ? draftTableHtml(pageRows, startIndex) : taskTableHtml(pageRows, currentMode, startIndex);
  var mainHtml='<main class="list-main"><section class="list-content-card">'+pillsBarHtml+filterBar(currentMode,selectedTotal)+tableContentHtml+pagination(selectedTotal,pageSize,currentPage,currentMode)+'</section></main>';

  var pageTitle="我的指令";
  var subTitle=subPage==="todo"?"办理与查阅派发至我的各项指令，支持在线快速处置与回执填报":subPage==="sent"?"查看并跟踪我发出的指令流转进度与回执状态":subPage==="read"?"查阅传阅派发至我的公文及工单通报，支持点击详情随时查阅知悉":subPage==="done"?"查阅历史已办结指令档案及处置成果":"暂存尚未正式下发的指令草稿，支持随时继续编辑与派发";
  var topAction="";

  return '<div class="page">'+pageHead(pageTitle,subTitle,topAction)+'<div class="list-layout">'+sidebarHtml+mainHtml+'</div>'+footer()+'</div>';
}

function renderSentManagement(){
  var baseRows=taskRows.filter(function(r){
    return !isCirculateTask(r);
  });
  var counts={
    "全部": baseRows.length,
    "待处理": baseRows.filter(function(r){return r.status==="待处理"||r.status==="已退回"||r.status==="待重新派发"}).length,
    "待审批": baseRows.filter(function(r){return r.status==="待审批"}).length,
    "已归档": baseRows.filter(function(r){return r.status==="已归档"}).length
  };

  var selected=state.listTabs["sent-mgmt"]||"全部";

  var statusCards=[
    {
      key: "全部",
      title: "全部指令",
      subTag: "全量监管",
      icon: "layers",
      count: counts["全部"],
      colorTheme: "all",
      desc: "全域指令流转监管与全链路监控"
    },
    {
      key: "待处理",
      title: "待处理",
      subTag: "处置办理中",
      icon: "clock-3",
      count: counts["待处理"],
      colorTheme: "handling",
      desc: "对口单位核查处置，待填报回执"
    },
    {
      key: "待审批",
      title: "待审批",
      subTag: "回执待审核",
      icon: "check-square",
      count: counts["待审批"],
      colorTheme: "approval",
      desc: "回执已上报，待主管复核办结"
    },
    {
      key: "已归档",
      title: "已归档",
      subTag: "全链路办结",
      icon: "archive",
      count: counts["已归档"],
      colorTheme: "archived",
      desc: "处置合格凭证齐全，已归档入库"
    }
  ];

  var rows=baseRows;
  if(selected==="待处理"){
    rows=rows.filter(function(r){return r.status==="待处理"||r.status==="已退回"||r.status==="待重新派发"});
  }else if(selected!=="全部"){
    rows=rows.filter(function(r){return r.status===selected});
  }

  var isRadioToday = (state.quickFlag === "todayDue") || (!state.quickFlag && state.quickFlags && state.quickFlags.todayDue);
  var isRadioOverdue = (state.quickFlag === "overdue") || (!state.quickFlag && state.quickFlags && state.quickFlags.overdue);
  if(state.quickFlags && state.quickFlags.onlyMine){
    rows=rows.filter(isItemMine);
  }
  if(selected !== "待审批" && selected !== "已归档"){
    if(isRadioToday){
      rows=rows.filter(isItemTodayDue);
    } else if(isRadioOverdue){
      rows=rows.filter(isItemOverdue);
    }
  }

  var q=state.filterQuery&&state.filterQuery["sent-mgmt"];
  if(q){
    if(q.status&&q.status!=="全部"){
      if(q.status==="待处理"){
        rows=rows.filter(function(r){ return r.status==="待处理"||r.status==="已退回"||r.status==="待重新派发"; });
      } else {
        rows=rows.filter(function(r){ return r.status===q.status; });
      }
    }
    if(q.processor&&q.processor!=="全部"){
      var pKw=q.processor.trim();
      rows=rows.filter(function(r){
        return (r.processor&&r.processor.indexOf(pKw)>-1)||
               (r.receiver&&String(r.receiver).indexOf(pKw)>-1)||
               (r.status==="待审批"&&r.sender&&r.sender.indexOf(pKw)>-1);
      });
    }
    if(q.requirement&&q.requirement!=="全部"){
      rows=rows.filter(function(r){return r.req===q.requirement});
    }
    if(q.sender&&q.sender!=="全部"){
      rows=rows.filter(function(r){return (r.sender&&r.sender.indexOf(q.sender)>-1)||(r.receiver&&String(r.receiver).indexOf(q.sender)>-1)});
    }
    if(q.content&&q.content.trim()){
      var kw=q.content.trim().toLowerCase();
      rows=rows.filter(function(r){
        return (r.title&&r.title.toLowerCase().indexOf(kw)>-1)||
               (r.id&&r.id.toLowerCase().indexOf(kw)>-1)||
               (r.template&&r.template.toLowerCase().indexOf(kw)>-1)||
               (r.content&&r.content.toLowerCase().indexOf(kw)>-1);
      });
    }
  }

  var selectedTotal=rows.length;
  var pageSize=(state.pageSizes&&state.pageSizes["sent-mgmt"])||10;
  var totalPages=Math.max(1,Math.ceil(selectedTotal/pageSize));
  var currentPage=(state.pageNumbers&&state.pageNumbers["sent-mgmt"])||1;
  if(currentPage>totalPages) currentPage=totalPages;
  if(currentPage<1) currentPage=1;
  if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,"sent-mgmt":1};
  state.pageNumbers["sent-mgmt"]=currentPage;

  var startIndex=(currentPage-1)*pageSize;
  var pageRows=rows.slice(startIndex,startIndex+pageSize);

  var topAction='<div class="head-actions" style="display:flex;gap:10px">' +
    '<button type="button" class="btn light" data-action="bulk-export">'+ico("download",15)+'批量导出</button>' +
  '</div>';

  var cardsHtml='<div class="sent-mgmt-cards-grid">' +
    statusCards.map(function(card){
      var isActive=card.key===selected;
      var activeClass=isActive?" active":"";
      return '<div class="sent-mgmt-card theme-'+card.colorTheme+activeClass+'" data-action="list-tab" data-list-mode="sent-mgmt" data-list-tab="'+card.key+'" role="button" tabindex="0">' +
        '<div class="card-head">' +
          '<div class="card-icon-bubble theme-'+card.colorTheme+'">'+ico(card.icon,18)+'</div>' +
          '<div class="card-meta">' +
            '<span class="card-title">'+card.title+'</span>' +
            '<span class="card-tag theme-'+card.colorTheme+'">'+card.subTag+'</span>' +
          '</div>' +
          (isActive?'<span class="card-active-pill">'+ico("check",12)+' 筛选中</span>':'<span class="card-radio-dot"></span>') +
        '</div>' +
        '<div class="card-body">' +
          '<div class="card-count-row">' +
            '<span class="card-count">'+card.count+'</span>' +
            '<span class="card-unit">件</span>' +
          '</div>' +
          '<div class="card-desc">'+card.desc+'</div>' +
        '</div>' +
      '</div>';
    }).join("") +
  '</div>';

  var mainHtml='<div class="sent-mgmt-view">' +
    cardsHtml +
    '<section class="list-content-card sent-mgmt-content-card">' +
      filterBar("sent-mgmt",selectedTotal) +
      taskTableHtml(pageRows,"sent-mgmt",startIndex) +
      pagination(selectedTotal,pageSize,currentPage,"sent-mgmt") +
    '</section>' +
  '</div>';

  return '<div class="page">'+pageHead("指令监控","全量下发指令全景监控与流转处置督办，点击上方状态卡片快捷筛选，掌握各部门节点回执进度",topAction)+mainHtml+footer()+'</div>';
}
var statsNodes=[
  {key:"todo-1",person:"武丁",group:"台湾省网信办",done:false,pending:true,overdue:false,current:"武丁"},
  {key:"todo-2",person:"武丁",group:"台湾省网信办",done:false,pending:true,overdue:false,current:"武丁"},
  {key:"todo-3",person:"武丁",group:"台湾省网信办",done:false,pending:true,overdue:true,current:"武丁"},
  {key:"todo-returned",person:"武丁",group:"台湾省网信办",done:true,pending:false,overdue:true,current:"武丁"},
  {key:"todo-approval",person:"齐杰",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"武丁"},
  {key:"todo-transfer",person:"齐杰",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"谭星"},
  {key:"transfer-child",person:"谭星",group:"R&D",done:false,pending:true,overdue:false,current:"谭星"},
  {key:"archived-1",person:"齐杰",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"齐杰"},
  {key:"sent-multi",person:"武丁",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"武丁"},
  {key:"sent-multi",person:"谭星",group:"R&D",done:false,pending:false,overdue:false,current:"武丁",valid:false},
  {key:"returned-1",person:"齐杰",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"齐杰"},
  {key:"approval-1",person:"武丁",group:"台湾省网信办",done:true,pending:false,overdue:false,current:"齐杰"},
  {key:"sent-1",person:"谭星",group:"R&D",done:false,pending:true,overdue:false,current:"谭星"},
  {key:"todo-approval",person:"杨欢",group:"SD",done:true,pending:false,overdue:false,current:"杨欢"},
  {key:"todo-2",person:"张启帆",group:"综合科",done:false,pending:true,overdue:false,current:"张启帆"},
  {key:"todo-3",person:"杨福宾",group:"舆情科",done:false,pending:true,overdue:true,current:"杨福宾"}
];
function statRows(scope,entity,metric){
  return statsNodes.filter(function(node){
    if(node.valid===false)return false;
    if((scope==="分组"?node.group:node.person)!==entity)return false;
    if(metric==="已办指令数")return node.done;
    if(metric==="待办指令数")return node.pending;
    if(metric==="超时数")return node.overdue;
    return true
  })
}
function statCount(scope,entity,metric){return statRows(scope,entity,metric).length}
function statsMetricLink(scope,entity,metric){return '<button type="button" class="stats-drill-link" data-action="stats-drill" data-stats-scope="'+scope+'" data-stats-entity="'+entity+'" data-stats-metric="'+metric+'">'+statCount(scope,entity,metric)+'</button>'}
function statsTable(grouped){
  var scope=grouped?"分组":"人员",names=grouped?["台湾省网信办","SD","R&D","综合科","舆情科"]:["齐杰","武丁","谭星","杨欢","张启帆","杨福宾"];
  return '<table class="table stats-table"><thead><tr><th>用户信息</th><th class="num">指令数 <span class="sort">◆</span></th><th class="num">已办指令数 <span class="sort">◆</span></th><th class="num">待办指令数 <span class="sort">◆</span></th><th class="num">超时数 <span class="sort">◆</span></th><th class="num">完成率</th><th class="num">超时率</th><th class="num">平均耗时(小时)</th></tr></thead><tbody>'+names.map(function(n,i){var total=statCount(scope,n,"指令数"),done=statCount(scope,n,"已办指令数"),late=statCount(scope,n,"超时数"),rate=total?(done/total*100).toFixed(2):"0.00",lateRate=total?(late/total*100).toFixed(2):"0.00";return '<tr><td>'+(grouped?"›　<b>"+n+"</b>":'<div class="user-cell"><span class="mini-avatar">'+n.slice(-1)+'</span><div><b>'+n+'</b><small>'+(i===0?"☺":i===1?"Shaw":"用户昵称")+'</small></div></div>')+'</td><td class="num">'+statsMetricLink(scope,n,"指令数")+'</td><td class="num">'+statsMetricLink(scope,n,"已办指令数")+'</td><td class="num">'+statsMetricLink(scope,n,"待办指令数")+'</td><td class="num">'+statsMetricLink(scope,n,"超时数")+'</td><td class="num">'+rate+'%</td><td class="num">'+lateRate+'%</td><td class="num">'+(total?(0.7+i*.45).toFixed(1):"0")+'小时</td></tr>'}).join("")+'</tbody></table>'
}
function statsDrillTaskRow(node){
  var row=taskRows.filter(function(r){return r.key===node.key})[0]||{},status=row.status||"-",deadline=row.deadline||"-",receiver=plainPeople(row.receiver||"-"),processor=status==="待处理"?"-":(row.processor||"-"),current=node.current||"-",isLate=node.overdue?"是":"否";
  return '<tr><td><button type="button" class="instruction-link" data-action="stats-detail" data-detail-key="'+node.key+'" title="'+escapeHtml(row.title||"-")+'">'+escapeHtml(row.title||"-")+'</button></td><td><span class="tag '+statusClass(status)+'">'+status+'</span></td><td>'+highlightUser(row.sender||"-")+'</td><td>'+receiver+'</td><td>'+highlightUser(processor)+'</td><td>'+highlightUser(current)+'</td><td>'+escapeHtml(row.req||"-")+'</td><td>'+deadline+'</td><td>'+(node.overdue?'<span style="color:#ef5148">是</span>':'否')+'</td></tr>'
}
function renderStatsDrilldown(){
  var d=state.statsDrilldown||{scope:"人员",entity:"齐杰",metric:"指令数"},rows=statRows(d.scope,d.entity,d.metric),label=d.scope==="人员"?"人员统计":"分组统计",count=rows.length;
  return '<div class="page"><div class="detail-breadcrumb"><span class="link stats-drill-back" data-action="back-stats">'+ico("circle-chevron-left",16)+'统计</span><span>/</span><span>'+label+'</span><span>/</span><b>'+d.entity+' · '+d.metric+'</b></div>'+pageHead(d.entity+' · '+d.metric,'查看该统计对象在当前筛选范围内的有效指令节点明细','')+'<section class="card stats-drill-section"><div class="stats-drill-summary"><span class="stats-drill-scope">统计对象</span><b>'+d.entity+'</b><span class="drill-sep">｜</span><span class="stats-drill-scope">统计维度</span><b>'+d.metric+'</b><span class="drill-sep">｜</span><span class="stats-drill-scope">统计周期</span><b>'+statsDateStart+' 至 '+statsDateEnd+'</b><span class="drill-sep">｜</span><span class="stats-drill-scope">明细数量</span><b>'+count+' 条</b></div><div class="stats-drill-note">统计口径：仅统计有效的直接接收节点；已被其他接收人处理而失效的协同节点不计入指令数、待办及超时数据。</div><h2>指令明细</h2>'+(rows.length?'<div class="table-wrap" style="padding:0"><table class="table stats-drill-table"><thead><tr><th>指令标题</th><th>状态</th><th>下发人</th><th>接收人</th><th>处理人</th><th>当前责任人</th><th>指令要求</th><th>截止时间</th><th>是否超时</th></tr></thead><tbody>'+rows.map(statsDrillTaskRow).join("")+'</tbody></table>'+pagination(rows.length,10)+'</div>':'<div class="stats-drill-empty">当前统计维度下暂无有效指令节点</div>')+'</section>'+footer()+'</div>'
}
var statsDateStart="2026-08-11",statsDateEnd="2026-08-17",statsPickingStart=true;
function calendarMonth(year,month){
  var first=new Date(year,month-1,1),last=new Date(year,month,0),prevLast=new Date(year,month-1,0).getDate(),cells=[],i;
  for(i=first.getDay()-1;i>=0;i--)cells.push({d:prevLast-i,m:month-1,muted:true});for(i=1;i<=last.getDate();i++)cells.push({d:i,m:month,muted:false});for(i=1;cells.length<42;i++)cells.push({d:i,m:month+1,muted:true});
  var days=cells.map(function(c){var date=year+'-'+String(c.m).padStart(2,'0')+'-'+String(c.d).padStart(2,'0'),selected=date===statsDateStart||date===statsDateEnd,inRange=date>statsDateStart&&date<statsDateEnd;return '<div class="calendar-day '+(c.muted?'muted ':'')+(selected?'selected ':'')+(inRange&&!c.muted?'in-range':'')+'" data-stats-day="'+date+'"><span>'+c.d+'</span></div>'}).join('');
  return '<div class="calendar-month"><div class="calendar-title"><span class="calendar-nav">'+(month===8?ico('chevrons-left',15)+ico('chevron-left',15):'')+'</span><span>'+year+' 年　'+month+' 月</span><span class="calendar-nav">'+(month===9?ico('chevron-right',15)+ico('chevrons-right',15):'')+'</span></div><div class="calendar-week"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div class="calendar-days">'+days+'</div></div>'
}
function statsShortcutHtml(){return ['近1天','近3天','近7天','近15天','近30天','近60天','近一季度','近半年','近一年'].map(function(s){return '<div class="date-shortcut" data-date-shortcut="'+s+'">'+s+'</div>'}).join('')}
function statsFilters(){return '<div class="card stats-filters"><div class="filter-row"><div class="stats-app-select" data-stats-app><button class="stats-filter-trigger" data-stats-app-trigger><span data-stats-app-value>全部业务应用</span>'+ico('chevron-down',15)+'</button><div class="stats-app-menu"><div class="stats-app-option" data-stats-app-option="谛听预警">谛听预警</div><div class="stats-app-option" data-stats-app-option="指令流转">指令流转</div><div class="stats-app-option" data-stats-app-option="全网搜">全网搜</div></div></div><div class="stats-date-select" data-stats-date><button class="stats-filter-trigger" data-stats-date-trigger><span class="stats-date-value" data-stats-date-value>'+statsDateStart+'　-　'+statsDateEnd+'</span><span class="stats-date-clear">×</span></button><div class="stats-date-picker"><div class="date-shortcuts">'+statsShortcutHtml()+'</div>'+calendarMonth(2026,8)+calendarMonth(2026,9)+'</div></div><div style="flex:1"></div><button class="btn primary">'+ico("search",15)+'查询</button><button class="btn" data-stats-reset>'+ico("rotate-ccw",15)+'重置</button></div></div>'}
function refreshStatsDatePicker(){var owner=document.querySelector('[data-stats-date]');if(!owner)return;owner.querySelector('[data-stats-date-value]').textContent=statsDateStart+'　-　'+statsDateEnd;owner.querySelector('.stats-date-picker').innerHTML='<div class="date-shortcuts">'+statsShortcutHtml()+'</div>'+calendarMonth(2026,8)+calendarMonth(2026,9);if(window.lucide)lucide.createIcons()}
function enhanceStatsFilters(){var old=document.querySelector('.page>.card.filters');if(old)old.outerHTML=statsFilters()}
function renderStats(){
  var metrics=[["指令总数","28","clipboard-list"],["已办","13","notebook-tabs"],["待办","15","inbox"],["完成率","46.43%","box"],["超时率","7.69%","clock-3"],["平均耗时","1.9 h","timer"]];
  return '<div class="page">'+pageHead("统计","多维度数据统计，全面掌握指令流转效果","")+'<div class="section-tabs"><button class="section-tab active">舆情处置</button><button class="section-tab">错误表述</button></div><div class="card filters"><div class="filter-row"><div class="control">全部业务应用⌄</div><div class="control" style="width:300px">2026-08-11　-　2026-08-17　'+ico("calendar-days",14)+'</div><div style="flex:1"></div><button class="btn primary">'+ico("search",15)+'查询</button><button class="btn">'+ico("rotate-ccw",15)+'重置</button></div></div><div class="metric-row">'+metrics.map(function(m){return '<div class="metric card"><span class="metric-icon">'+ico(m[2],23)+'</span><div><label>'+m[0]+'</label><strong>'+m[1]+'</strong></div></div>'}).join("")+'</div><div class="grid-2"><div class="card chart-card"><div class="chart-head"><span>'+ico("chart-no-axes-combined",17)+' 指令数量趋势</span></div><div id="trend" class="chart"></div></div><div class="card chart-card"><div class="chart-head"><span>'+ico("circle-dot",17)+' 状态占比</span></div><div id="statusChart" class="chart"></div></div><div class="card chart-card"><div class="chart-head"><span>'+ico("clock-3",17)+' 耗时占比</span></div><div id="timeChart" class="chart"></div></div><div class="card chart-card"><div class="chart-head"><span>'+ico("history",17)+' 超时占比</span></div><div id="lateChart" class="chart"></div></div></div><section class="card stats-section"><div class="stats-title"><span>人员统计</span><button class="btn primary small">'+ico("file-down",14)+'导出</button></div><div class="section-tabs"><button class="section-tab active">机构用户</button><button class="section-tab">外部联系人</button></div>'+statsTable(false)+pagination(93,10)+'</section><section class="card stats-section"><div class="stats-title"><span>分组统计</span><button class="btn primary small">'+ico("file-down",14)+'导出</button></div><div class="section-tabs"><button class="section-tab active">机构用户分组</button><button class="section-tab">外部联系人分组</button></div>'+statsTable(true)+pagination(5,10)+'</section>'+footer()+'</div>'
}

/* =========================================================
   统计2: 表单元素与业务效能看板数据模型与渲染
   ========================================================= */
var statsDynamicData = {
  "近7天": {
    dates: ["周一 (08-04)", "周二 (08-05)", "周三 (08-06)", "周四 (08-07)", "周五 (08-08)", "周六 (08-09)", "周日 (08-10)"],
    dateRange: { start: "2026/08/04", end: "2026/08/10" },
    kpis: {
      total: "412",
      archived: "385",
      passRate: "95.2%",
      avgHours: "1.8",
      yoyTotal: "+11.8%",
      momTotal: "+6.5%",
      archiveRate: "93.4%",
      yoyArchived: "+15.2%",
      momArchived: "+7.8%",
      rejects: "19",
      yoyPass: "+2.1%",
      momPass: "-0.4%",
      onTimeRate: "98.1%",
      yoyOnTime: "+2.4%",
      momOnTime: "+0.9%",
      yoyAvg: "-0.5h",
      momAvg: "-0.3h",
      benchmarkDiff: "优于基准 2.2h"
    },
    trend: {
      sent: [280, 310, 412, 360, 420, 290, 320],
      archived: [260, 295, 385, 340, 400, 275, 305],
      rejects: [18, 14, 19, 16, 17, 12, 14],
      passRate: [93.6, 95.5, 95.4, 95.6, 96.0, 95.9, 95.6],
      finishRate: [92.9, 95.2, 93.4, 94.4, 95.2, 94.8, 95.3]
    },
    sources: [
      { name: "微博平台", count: 135, pct: "32.8%", color: "#e11d48" },
      { name: "微信公众号", count: 96, pct: "23.3%", color: "#16a34a" },
      { name: "抖音短视频", count: 78, pct: "18.9%", color: "#0f172a" },
      { name: "重点新闻网", count: 52, pct: "12.6%", color: "#0284c7" },
      { name: "贴吧论坛", count: 29, pct: "7.0%", color: "#f59e0b" },
      { name: "报料与热线", count: 22, pct: "5.4%", color: "#8b5cf6" }
    ],
    templates: {
      totalSent: 412,
      opinionTotal: 280,
      opinionPct: "68.0%",
      opinionAvgHours: 2.0,
      errorTotal: 132,
      errorPct: "32.0%",
      errorAvgHours: 1.2,
      opinionList: [
        { name: "突发敏感舆情处置模板 (限时回执)", count: 170, pct: "41.3%", avgHours: "1.9h" },
        { name: "常规舆情处置排查与汇报模板 (限时回执)", count: 72, pct: "17.5%", avgHours: "3.2h" },
        { name: "舆情风险防范与工作通报模板 (仅阅读)", count: 38, pct: "9.2%", avgHours: "0.6h" }
      ],
      errorList: [
        { name: "政务发文规范表述紧急纠错模板 (限时回执)", count: 85, pct: "20.6%", avgHours: "1.1h" },
        { name: "涉政重要政策表述规范排查模板 (限时回执)", count: 32, pct: "7.8%", avgHours: "1.8h" },
        { name: "常用错别字与表述失当预警模板 (仅阅读)", count: 15, pct: "3.6%", avgHours: "0.4h" }
      ]
    },
    reasons: {
      transfer: {
        total: 31,
        items: [
          { name: "非本单位职责管辖范畴", count: 12, pct: "38.7%" },
          { name: "需属地市州网信机构核查", count: 8, pct: "25.8%" },
          { name: "涉及多部门联合处置执法", count: 5, pct: "16.1%" },
          { name: "案情疑难复杂提级办理", count: 3, pct: "9.7%" },
          { name: "线索发生地异地管辖移交", count: 2, pct: "6.5%" },
          { name: "行业监管资质权责交接", count: 1, pct: "3.2%" }
        ],
        footer: "近7天累计转办 31 件 · 平均转办响应 14 分钟"
      },
      coop: {
        total: 42,
        items: [
          { name: "技术支撑与电子取证溯源", count: 15, pct: "35.7%" },
          { name: "涉及多区县跨地域联动处置", count: 11, pct: "26.2%" },
          { name: "需公安网安协同侦办落地查人", count: 8, pct: "19.0%" },
          { name: "行业主管部门业务政策会商", count: 4, pct: "9.5%" },
          { name: "重点互联网平台专项协同下架", count: 3, pct: "7.1%" },
          { name: "涉外与跨境舆情协同研判", count: 1, pct: "2.5%" }
        ],
        footer: "近7天累计协同 42 件 · 多方协同闭环率 98.6%"
      },
      reject: {
        total: 19,
        items: [
          { name: "佐证凭证不齐（缺断链截图或公函）", count: 7, pct: "36.8%" },
          { name: "处置说明过简未阐明落实成果", count: 5, pct: "26.3%" },
          { name: "衍生帖文清理不彻底残留隐患", count: 3, pct: "15.8%" },
          { name: "填报回执格式错误或未按期整改", count: 2, pct: "10.5%" },
          { name: "处置时限超时且未附延期说明", count: 1, pct: "5.3%" },
          { name: "填报责任人资质信息不相符", count: 1, pct: "5.3%" }
        ],
        footer: "近7天累计驳回 19 件 · 二次提交通过率 97.2%"
      }
    }
  },
  "近30天": {
    dates: ["周一 (08-04)", "周二 (08-05)", "周三 (08-06)", "周四 (08-07)", "周五 (08-08)", "周六 (08-09)", "周日 (08-10)"],
    dateRange: { start: "2025/02/10", end: "2025/03/12" },
    kpis: {
      total: "1,650",
      archived: "1,490",
      passRate: "94.6%",
      avgHours: "2.1",
      yoyTotal: "+14.2%",
      momTotal: "+8.6%",
      archiveRate: "90.3%",
      yoyArchived: "+18.5%",
      momArchived: "+9.2%",
      rejects: "110",
      yoyPass: "+2.4%",
      momPass: "-0.5%",
      onTimeRate: "97.4%",
      yoyOnTime: "+2.1%",
      momOnTime: "+0.8%",
      yoyAvg: "-0.4h",
      momAvg: "-0.2h",
      benchmarkDiff: "优于基准 1.9h"
    },
    trend: {
      sent: [1260, 1380, 1650, 1540, 1780, 1300, 1410],
      archived: [1120, 1260, 1490, 1390, 1620, 1160, 1240],
      rejects: [95, 102, 110, 98, 115, 88, 92],
      passRate: [74.5, 76.2, 78.4, 77.8, 79.5, 76.8, 77.9],
      finishRate: [88.9, 91.3, 90.3, 90.3, 91.0, 89.2, 87.9]
    },
    sources: [
      { name: "微博平台", count: 542, pct: "32.8%", color: "#e11d48" },
      { name: "微信公众号", count: 385, pct: "23.3%", color: "#16a34a" },
      { name: "抖音短视频", count: 312, pct: "18.9%", color: "#0f172a" },
      { name: "重点新闻网", count: 210, pct: "12.7%", color: "#0284c7" },
      { name: "贴吧论坛", count: 115, pct: "7.0%", color: "#f59e0b" },
      { name: "报料与热线", count: 86, pct: "5.2%", color: "#8b5cf6" }
    ],
    templates: {
      totalSent: 1650,
      opinionTotal: 1120,
      opinionPct: "67.9%",
      opinionAvgHours: 2.4,
      errorTotal: 530,
      errorPct: "32.1%",
      errorAvgHours: 1.5,
      opinionList: [
        { name: "突发敏感舆情处置模板 (限时回执)", count: 680, pct: "41.2%", avgHours: "2.1h" },
        { name: "常规舆情处置排查与汇报模板 (限时回执)", count: 290, pct: "17.6%", avgHours: "3.8h" },
        { name: "舆情风险防范与工作通报模板 (仅阅读)", count: 150, pct: "9.1%", avgHours: "0.8h" }
      ],
      errorList: [
        { name: "政务发文规范表述紧急纠错模板 (限时回执)", count: 340, pct: "20.6%", avgHours: "1.3h" },
        { name: "涉政重要政策表述规范排查模板 (限时回执)", count: 130, pct: "7.9%", avgHours: "2.0h" },
        { name: "常用错别字与表述失当预警模板 (仅阅读)", count: 60, pct: "3.6%", avgHours: "0.5h" }
      ]
    },
    reasons: {
      transfer: {
        total: 125,
        items: [
          { name: "非本单位职责管辖范畴", count: 48, pct: "38.4%" },
          { name: "需属地市州网信机构核查", count: 34, pct: "27.2%" },
          { name: "涉及多部门联合处置执法", count: 21, pct: "16.8%" },
          { name: "案情疑难复杂提级办理", count: 11, pct: "8.8%" },
          { name: "线索发生地异地管辖移交", count: 7, pct: "5.6%" },
          { name: "行业监管资质权责交接", count: 4, pct: "3.2%" }
        ],
        footer: "近30天累计转办 125 件 · 平均转办响应 18 分钟"
      },
      coop: {
        total: 168,
        items: [
          { name: "技术支撑与电子取证溯源", count: 58, pct: "34.5%" },
          { name: "涉及多区县跨地域联动处置", count: 44, pct: "26.2%" },
          { name: "需公安网安协同侦办落地查人", count: 33, pct: "19.6%" },
          { name: "行业主管部门业务政策会商", count: 18, pct: "10.7%" },
          { name: "重点互联网平台专项协同下架", count: 10, pct: "6.0%" },
          { name: "涉外与跨境舆情协同研判", count: 5, pct: "3.0%" }
        ],
        footer: "近30天累计协同 168 件 · 多方协同闭环率 98.2%"
      },
      reject: {
        total: 110,
        items: [
          { name: "佐证凭证不齐（缺断链截图或公函）", count: 44, pct: "40.0%" },
          { name: "处置说明过简未阐明落实成果", count: 28, pct: "25.5%" },
          { name: "衍生帖文清理不彻底残留隐患", count: 17, pct: "15.5%" },
          { name: "填报回执格式错误或未按期整改", count: 11, pct: "10.0%" },
          { name: "处置时限超时且未附延期说明", count: 6, pct: "5.5%" },
          { name: "填报责任人资质信息不相符", count: 4, pct: "3.6%" }
        ],
        footer: "近30天累计驳回 110 件 · 二次提交通过率 96.4%"
      }
    }
  },
  "本季度": {
    dates: ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周", "第7周"],
    dateRange: { start: "2025/01/01", end: "2025/03/31" },
    kpis: {
      total: "4,890",
      archived: "4,450",
      passRate: "93.8%",
      avgHours: "2.3",
      yoyTotal: "+12.8%",
      momTotal: "+7.9%",
      archiveRate: "91.0%",
      yoyArchived: "+16.3%",
      momArchived: "+7.5%",
      rejects: "302",
      yoyPass: "+1.5%",
      momPass: "-0.6%",
      onTimeRate: "96.8%",
      yoyOnTime: "+1.8%",
      momOnTime: "+0.6%",
      yoyAvg: "-0.3h",
      momAvg: "-0.2h",
      benchmarkDiff: "优于基准 1.7h"
    },
    trend: {
      sent: [680, 720, 810, 750, 890, 760, 680],
      archived: [620, 660, 735, 680, 815, 690, 620],
      rejects: [45, 48, 52, 47, 56, 44, 40],
      passRate: [93.4, 93.3, 93.6, 93.7, 93.7, 94.2, 94.1],
      finishRate: [91.2, 91.7, 90.7, 90.7, 91.6, 90.8, 91.2]
    },
    sources: [
      { name: "微博平台", count: 1610, pct: "32.9%", color: "#e11d48" },
      { name: "微信公众号", count: 1140, pct: "23.3%", color: "#16a34a" },
      { name: "抖音短视频", count: 920, pct: "18.8%", color: "#0f172a" },
      { name: "重点新闻网", count: 620, pct: "12.7%", color: "#0284c7" },
      { name: "贴吧论坛", count: 350, pct: "7.2%", color: "#f59e0b" },
      { name: "报料与热线", count: 250, pct: "5.1%", color: "#8b5cf6" }
    ],
    templates: {
      totalSent: 4890,
      opinionTotal: 3310,
      opinionPct: "67.7%",
      opinionAvgHours: 2.6,
      errorTotal: 1580,
      errorPct: "32.3%",
      errorAvgHours: 1.6,
      opinionList: [
        { name: "突发敏感舆情处置模板 (限时回执)", count: 2010, pct: "41.1%", avgHours: "2.3h" },
        { name: "常规舆情处置排查与汇报模板 (限时回执)", count: 860, pct: "17.6%", avgHours: "4.1h" },
        { name: "舆情风险防范与工作通报模板 (仅阅读)", count: 440, pct: "9.0%", avgHours: "0.8h" }
      ],
      errorList: [
        { name: "政务发文规范表述紧急纠错模板 (限时回执)", count: 1010, pct: "20.7%", avgHours: "1.4h" },
        { name: "涉政重要政策表述规范排查模板 (限时回执)", count: 390, pct: "8.0%", avgHours: "2.2h" },
        { name: "常用错别字与表述失当预警模板 (仅阅读)", count: 180, pct: "3.7%", avgHours: "0.5h" }
      ]
    },
    reasons: {
      transfer: {
        total: 370,
        items: [
          { name: "非本单位职责管辖范畴", count: 142, pct: "38.4%" },
          { name: "需属地市州网信机构核查", count: 102, pct: "27.6%" },
          { name: "涉及多部门联合处置执法", count: 62, pct: "16.8%" },
          { name: "案情疑难复杂提级办理", count: 32, pct: "8.6%" },
          { name: "线索发生地异地管辖移交", count: 21, pct: "5.7%" },
          { name: "行业监管资质权责交接", count: 11, pct: "3.0%" }
        ],
        footer: "本季度累计转办 370 件 · 平均转办响应 20 分钟"
      },
      coop: {
        total: 495,
        items: [
          { name: "技术支撑与电子取证溯源", count: 172, pct: "34.7%" },
          { name: "涉及多区县跨地域联动处置", count: 128, pct: "25.9%" },
          { name: "需公安网安协同侦办落地查人", count: 98, pct: "19.8%" },
          { name: "行业主管部门业务政策会商", count: 52, pct: "10.5%" },
          { name: "重点互联网平台专项协同下架", count: 31, pct: "6.3%" },
          { name: "涉外与跨境舆情协同研判", count: 14, pct: "2.8%" }
        ],
        footer: "本季度累计协同 495 件 · 多方协同闭环率 98.0%"
      },
      reject: {
        total: 302,
        items: [
          { name: "佐证凭证不齐（缺断链截图或公函）", count: 122, pct: "40.4%" },
          { name: "处置说明过简未阐明落实成果", count: 77, pct: "25.5%" },
          { name: "衍生帖文清理不彻底残留隐患", count: 48, pct: "15.9%" },
          { name: "填报回执格式错误或未按期整改", count: 30, pct: "9.9%" },
          { name: "处置时限超时且未附延期说明", count: 15, pct: "5.0%" },
          { name: "填报责任人资质信息不相符", count: 10, pct: "3.3%" }
        ],
        footer: "本季度累计驳回 302 件 · 二次提交通过率 96.1%"
      }
    }
  },
  "本年": {
    dates: ["1-2月", "3-4月", "5-6月", "7-8月", "9-10月", "11-12月", "年终冲刺"],
    dateRange: { start: "2025/01/01", end: "2025/12/31" },
    kpis: {
      total: "18,620",
      archived: "17,210",
      passRate: "92.5%",
      avgHours: "2.5",
      yoyTotal: "+18.8%",
      momTotal: "+11.2%",
      archiveRate: "92.4%",
      yoyArchived: "+20.7%",
      momArchived: "+10.4%",
      rejects: "1,280",
      yoyPass: "+3.1%",
      momPass: "-0.8%",
      onTimeRate: "95.9%",
      yoyOnTime: "+1.5%",
      momOnTime: "+0.5%",
      yoyAvg: "-0.2h",
      momAvg: "-0.1h",
      benchmarkDiff: "优于基准 1.5h"
    },
    trend: {
      sent: [2400, 2650, 2900, 2750, 3100, 2720, 2100],
      archived: [2210, 2450, 2690, 2540, 2870, 2520, 1930],
      rejects: [175, 185, 205, 190, 215, 182, 128],
      passRate: [92.7, 92.5, 92.9, 93.1, 93.1, 93.3, 93.9],
      finishRate: [92.1, 92.5, 92.8, 92.4, 92.6, 92.6, 91.9]
    },
    sources: [
      { name: "微博平台", count: 6120, pct: "32.9%", color: "#e11d48" },
      { name: "微信公众号", count: 4340, pct: "23.3%", color: "#16a34a" },
      { name: "抖音短视频", count: 3510, pct: "18.8%", color: "#0f172a" },
      { name: "重点新闻网", count: 2360, pct: "12.7%", color: "#0284c7" },
      { name: "贴吧论坛", count: 1320, pct: "7.1%", color: "#f59e0b" },
      { name: "报料与热线", count: 970, pct: "5.2%", color: "#8b5cf6" }
    ],
    templates: {
      totalSent: 18620,
      opinionTotal: 12620,
      opinionPct: "67.8%",
      opinionAvgHours: 2.8,
      errorTotal: 6000,
      errorPct: "32.2%",
      errorAvgHours: 1.8,
      opinionList: [
        { name: "突发敏感舆情处置模板 (限时回执)", count: 7650, pct: "41.1%", avgHours: "2.4h" },
        { name: "常规舆情处置排查与汇报模板 (限时回执)", count: 3280, pct: "17.6%", avgHours: "4.3h" },
        { name: "舆情风险防范与工作通报模板 (仅阅读)", count: 1690, pct: "9.1%", avgHours: "0.8h" }
      ],
      errorList: [
        { name: "政务发文规范表述紧急纠错模板 (限时回执)", count: 3840, pct: "20.6%", avgHours: "1.5h" },
        { name: "涉政重要政策表述规范排查模板 (限时回执)", count: 1480, pct: "7.9%", avgHours: "2.3h" },
        { name: "常用错别字与表述失当预警模板 (仅阅读)", count: 680, pct: "3.7%", avgHours: "0.5h" }
      ]
    },
    reasons: {
      transfer: {
        total: 1420,
        items: [
          { name: "非本单位职责管辖范畴", count: 550, pct: "38.7%" },
          { name: "需属地市州网信机构核查", count: 390, pct: "27.5%" },
          { name: "涉及多部门联合处置执法", count: 240, pct: "16.9%" },
          { name: "案情疑难复杂提级办理", count: 125, pct: "8.8%" },
          { name: "线索发生地异地管辖移交", count: 75, pct: "5.3%" },
          { name: "行业监管资质权责交接", count: 40, pct: "2.8%" }
        ],
        footer: "本年累计转办 1,420 件 · 平均转办响应 22 分钟"
      },
      coop: {
        total: 1910,
        items: [
          { name: "技术支撑与电子取证溯源", count: 665, pct: "34.8%" },
          { name: "涉及多区县跨地域联动处置", count: 495, pct: "25.9%" },
          { name: "需公安网安协同侦办落地查人", count: 380, pct: "19.9%" },
          { name: "行业主管部门业务政策会商", count: 205, pct: "10.7%" },
          { name: "重点互联网平台专项协同下架", count: 115, pct: "6.0%" },
          { name: "涉外与跨境舆情协同研判", count: 50, pct: "2.6%" }
        ],
        footer: "本年累计协同 1,910 件 · 多方协同闭环率 97.9%"
      },
      reject: {
        total: 1280,
        items: [
          { name: "佐证凭证不齐（缺断链截图或公函）", count: 515, pct: "40.2%" },
          { name: "处置说明过简未阐明落实成果", count: 325, pct: "25.4%" },
          { name: "衍生帖文清理不彻底残留隐患", count: 205, pct: "16.0%" },
          { name: "填报回执格式错误或未按期整改", count: 130, pct: "10.2%" },
          { name: "处置时限超时且未附延期说明", count: 65, pct: "5.1%" },
          { name: "填报责任人资质信息不相符", count: 40, pct: "3.1%" }
        ],
        footer: "本年累计驳回 1,280 件 · 二次提交通过率 95.8%"
      }
    }
  }
};

// 保持对旧代码引用的向后兼容
var stats2PeriodData = {
  "本月": { kpis: statsDynamicData["近30天"].kpis },
  "近30天": { kpis: statsDynamicData["近30天"].kpis },
  "近7天": { kpis: statsDynamicData["近7天"].kpis },
  "本季度": { kpis: statsDynamicData["本季度"].kpis },
  "本年": { kpis: statsDynamicData["本年"].kpis },
  "本年度": { kpis: statsDynamicData["本年"].kpis }
};

var stats2FormData = {
  kpis: [
    { title: "指令下发总量", value: "306 件", icon: "send" },
    { title: "办结归档总量", value: "287 件", icon: "archive" },
    { title: "平均处置整改耗时", value: "2.4 h", icon: "clock-3" },
    { title: "回执一次审核通过率", value: "93.8%", icon: "shield-check" }
  ],
  templates: [
    { name: "突发敏感舆情处置模板", count: 142, pct: 46.4, avgHours: "2.1h", evidenceRate: "96.5%", color: "#ef4444" },
    { name: "政务发文规范表述紧急纠错模板", count: 88, pct: 28.8, avgHours: "1.3h", evidenceRate: "98.8%", color: "#f59e0b" },
    { name: "常规舆情处置排查与汇报模板", count: 44, pct: 14.4, avgHours: "4.2h", evidenceRate: "88.6%", color: "#009893" },
    { name: "舆情风险防范与工作通报模板", count: 21, pct: 6.9, avgHours: "0.8h", evidenceRate: "85.7%", color: "#3b82f6" },
    { name: "专项排查多模态资料下发模板", count: 11, pct: 3.6, avgHours: "6.5h", evidenceRate: "100%", color: "#8b5cf6" }
  ],
  sources: [
    { name: "微博平台", count: 116, pct: 37.9, icon: "globe", color: "#e11d48" },
    { name: "抖音短视频", count: 82, pct: 26.8, icon: "video", color: "#0f172a" },
    { name: "微信公众号", count: 52, pct: 17.0, icon: "message-square", color: "#16a34a" },
    { name: "专网监测预警平台", count: 34, pct: 11.1, icon: "shield", color: "#009893" },
    { name: "小红书/快手/政务门户", count: 22, pct: 7.2, icon: "share-2", color: "#f97316" }
  ],
  urgencyMatrix: [
    { name: "特急（2h完成）", count: 58, pct: 19.0, avgResp: "-", avgDone: "1.4 h", onTimeRate: "96.6%", color: "#ef4444" },
    { name: "加急（4h完成）", count: 174, pct: 56.9, avgResp: "-", avgDone: "2.8 h", onTimeRate: "94.8%", color: "#f59e0b" },
    { name: "平急（24h完成）", count: 74, pct: 24.1, avgResp: "-", avgDone: "18.6 h", onTimeRate: "90.5%", color: "#009893" }
  ],
  measures: [
    { name: "涉政表述修正/改版发布", count: 98, pct: 32.0, color: "#009893", desc: "在官方网站或新媒体对领导人表述、敏感政策措辞完成修订" },
    { name: "违规有害信息断链下架", count: 86, pct: 28.1, color: "#ef4444", desc: "协同平台对涉稳、煽动对立不良帖文予以阻断删除" },
    { name: "官方澄清辟谣与跟评引导", count: 55, pct: 18.0, color: "#3b82f6", desc: "发布辟谣声明或矩阵跟评置顶，对冲虚假言论" },
    { name: "落地核实排查并出具公函", count: 42, pct: 13.7, color: "#f59e0b", desc: "组织执法大队或属地科室实地调查取证形成书面结案档案" },
    { name: "约谈主体与技术封堵管控", count: 25, pct: 8.2, color: "#8b5cf6", desc: "警示约谈涉案机构账号主体，采取限流或拉黑处置" }
  ],
  evidenceCoverage: [
    { name: "双证齐全 (现场截图+盖章公函)", count: 210, pct: "68.6%", status: "full", tag: "合规优选", desc: "整改前后照片/网页快照与处室盖章公函齐备" },
    { name: "仅截图凭证 (修改截图/断链快照)", count: 81, pct: "26.5%", status: "single", tag: "单据有效", desc: "上传了整改截图，适合轻微纠错等免公函场景" },
    { name: "纯文字描述 (无任何佐证附件)", count: 15, pct: "4.9%", status: "none", tag: "质检警示", desc: "缺少实物佐证，将列入质检与领导抽查关注清单" }
  ],
  rejectReasons: [
    { reason: "佐证凭证不齐全（缺改版截图或公函）", pct: 48, count: 9 },
    { reason: "整改措施不彻底（仍留存衍生链接）", pct: 32, count: 6 },
    { reason: "回执表述不规范（缺少时间与责任人）", pct: 20, count: 4 }
  ],
  rankings: [
    { org: "网络安全协调处专班", count: 186, respRate: "98.5%", finishRate: "96.8%", docRate: "98.4%", passRate: "97.3%", rejectCount: 2, avgResp: "11 min", avgHandle: "1.8 h", grade: "S", gradeText: "卓越" },
    { org: "市公安局情指网安支队", count: 162, respRate: "97.1%", finishRate: "95.1%", docRate: "96.9%", passRate: "95.7%", rejectCount: 3, avgResp: "14 min", avgHandle: "2.1 h", grade: "S", gradeText: "卓越" },
    { org: "教育系统网络应急专班", count: 145, respRate: "94.2%", finishRate: "92.4%", docRate: "91.7%", passRate: "93.1%", rejectCount: 5, avgResp: "19 min", avgHandle: "2.7 h", grade: "A", gradeText: "良好" },
    { org: "卫健疾控网络突发应急处置组", count: 132, respRate: "95.0%", finishRate: "93.2%", docRate: "92.4%", passRate: "94.7%", rejectCount: 4, avgResp: "18 min", avgHandle: "2.5 h", grade: "A", gradeText: "良好" },
    { org: "应急管理与防汛抗旱信息专班", count: 118, respRate: "93.8%", finishRate: "91.5%", docRate: "90.7%", passRate: "92.4%", rejectCount: 6, avgResp: "22 min", avgHandle: "2.9 h", grade: "A", gradeText: "良好" },
    { org: "住建与城市更新工作组", count: 98, respRate: "91.5%", finishRate: "88.8%", docRate: "87.8%", passRate: "89.8%", rejectCount: 8, avgResp: "25 min", avgHandle: "3.2 h", grade: "B", gradeText: "关注" },
    { org: "文旅政务新媒体中心", count: 92, respRate: "89.7%", finishRate: "87.0%", docRate: "84.8%", passRate: "86.9%", rejectCount: 9, avgResp: "28 min", avgHandle: "3.5 h", grade: "B", gradeText: "关注" },
    { org: "市场监管执法网络维权支队", count: 85, respRate: "90.2%", finishRate: "88.2%", docRate: "85.9%", passRate: "87.1%", rejectCount: 7, avgResp: "26 min", avgHandle: "3.4 h", grade: "B", gradeText: "关注" },
    { org: "交通运输综合行政调度中心", count: 74, respRate: "88.4%", finishRate: "86.5%", docRate: "83.8%", passRate: "85.1%", rejectCount: 10, avgResp: "31 min", avgHandle: "3.8 h", grade: "B", gradeText: "关注" },
    { org: "重点属地区县网信联络办", count: 68, respRate: "85.7%", finishRate: "82.4%", docRate: "79.4%", passRate: "80.9%", rejectCount: 13, avgResp: "38 min", avgHandle: "4.6 h", grade: "C", gradeText: "督办" }
  ],
  externalOrgs: [
    {
      id: "ext-org-1",
      org: "市公安局系统",
      count: 228,
      archivedCount: 222,
      passRate: "96.5%",
      onTimeRate: "97.4%",
      avgHandle: "1.9 小时",
      children: [
        { subId: "ext-org-1-1", org: "情指网安协同调度支队", count: 162, archivedCount: 158, passRate: "95.7%", onTimeRate: "96.8%", avgHandle: "2.1 小时" },
        { subId: "ext-org-1-2", org: "涉网电子取证与落地研判专班", count: 66, archivedCount: 64, passRate: "98.4%", onTimeRate: "98.8%", avgHandle: "1.5 小时" }
      ]
    },
    {
      id: "ext-org-2",
      org: "市教育局系统",
      count: 195,
      archivedCount: 184,
      passRate: "93.8%",
      onTimeRate: "94.6%",
      avgHandle: "2.5 小时",
      children: [
        { subId: "ext-org-2-1", org: "教育系统网络应急突发处置专班", count: 145, archivedCount: 138, passRate: "93.1%", onTimeRate: "94.2%", avgHandle: "2.7 小时" },
        { subId: "ext-org-2-2", org: "属地高校及中职网络联络办公室", count: 50, archivedCount: 46, passRate: "96.0%", onTimeRate: "95.8%", avgHandle: "2.0 小时" }
      ]
    },
    {
      id: "ext-org-3",
      org: "市卫生健康委员会",
      count: 182,
      archivedCount: 174,
      passRate: "95.1%",
      onTimeRate: "96.2%",
      avgHandle: "2.3 小时",
      children: [
        { subId: "ext-org-3-1", org: "卫健疾控网络突发应急处置组", count: 132, archivedCount: 126, passRate: "94.7%", onTimeRate: "95.9%", avgHandle: "2.5 小时" },
        { subId: "ext-org-3-2", org: "直属医疗卫生机构信息发布监测处", count: 50, archivedCount: 48, passRate: "96.0%", onTimeRate: "97.0%", avgHandle: "1.8 小时" }
      ]
    },
    {
      id: "ext-org-4",
      org: "市应急管理局指挥系统",
      count: 168,
      archivedCount: 158,
      passRate: "93.5%",
      onTimeRate: "94.0%",
      avgHandle: "2.6 小时",
      children: [
        { subId: "ext-org-4-1", org: "防汛抗旱与自然灾害信息专班", count: 118, archivedCount: 111, passRate: "92.4%", onTimeRate: "93.6%", avgHandle: "2.9 小时" },
        { subId: "ext-org-4-2", org: "安全生产与应急救援调度中心", count: 50, archivedCount: 47, passRate: "96.0%", onTimeRate: "95.0%", avgHandle: "2.0 小时" }
      ]
    },
    {
      id: "ext-org-5",
      org: "市住房和城乡建设局",
      count: 142,
      archivedCount: 130,
      passRate: "90.8%",
      onTimeRate: "91.5%",
      avgHandle: "3.0 小时",
      children: [
        { subId: "ext-org-5-1", org: "住建与城市更新综合应急工作组", count: 98, archivedCount: 90, passRate: "89.8%", onTimeRate: "90.8%", avgHandle: "3.2 小时" },
        { subId: "ext-org-5-2", org: "房地产及物业纠纷舆情联络处", count: 44, archivedCount: 40, passRate: "93.2%", onTimeRate: "93.2%", avgHandle: "2.5 小时" }
      ]
    },
    {
      id: "ext-org-6",
      org: "市市场监督管理局",
      count: 135,
      archivedCount: 124,
      passRate: "88.9%",
      onTimeRate: "89.6%",
      avgHandle: "3.2 小时",
      children: [
        { subId: "ext-org-6-1", org: "市场监管执法网络维权支队", count: 85, archivedCount: 78, passRate: "87.1%", onTimeRate: "88.2%", avgHandle: "3.4 小时" },
        { subId: "ext-org-6-2", org: "网络交易监管与消保应急专班", count: 50, archivedCount: 46, passRate: "92.0%", onTimeRate: "92.0%", avgHandle: "2.8 小时" }
      ]
    },
    {
      id: "ext-org-7",
      org: "市文化广电和旅游局",
      count: 126,
      archivedCount: 114,
      passRate: "88.1%",
      onTimeRate: "88.9%",
      avgHandle: "3.3 小时",
      children: [
        { subId: "ext-org-7-1", org: "文旅政务新媒体中心", count: 92, archivedCount: 83, passRate: "86.9%", onTimeRate: "87.8%", avgHandle: "3.5 小时" },
        { subId: "ext-org-7-2", org: "重点景区文旅突发舆情应对室", count: 34, archivedCount: 31, passRate: "91.2%", onTimeRate: "91.8%", avgHandle: "2.7 小时" }
      ]
    },
    {
      id: "ext-org-8",
      org: "市交通运输局运行调度系统",
      count: 110,
      archivedCount: 98,
      passRate: "86.4%",
      onTimeRate: "87.3%",
      avgHandle: "3.6 小时",
      children: [
        { subId: "ext-org-8-1", org: "交通运输综合行政调度中心", count: 74, archivedCount: 66, passRate: "85.1%", onTimeRate: "86.5%", avgHandle: "3.8 小时" },
        { subId: "ext-org-8-2", org: "城市公共交通与轨道应急联络室", count: 36, archivedCount: 32, passRate: "88.9%", onTimeRate: "88.9%", avgHandle: "3.1 小时" }
      ]
    },
    {
      id: "ext-org-9",
      org: "属地区县网信联络体系",
      count: 98,
      archivedCount: 84,
      passRate: "82.7%",
      onTimeRate: "83.7%",
      avgHandle: "4.2 小时",
      children: [
        { subId: "ext-org-9-1", org: "城东新区融媒体应急处置小组", count: 52, archivedCount: 45, passRate: "84.6%", onTimeRate: "85.0%", avgHandle: "3.9 小时" },
        { subId: "ext-org-9-2", org: "高新技术开发区网信联络专班", count: 46, archivedCount: 39, passRate: "80.4%", onTimeRate: "82.2%", avgHandle: "4.5 小时" }
      ]
    }
  ],
  internalOrgs: [
    {
      id: "int-org-1",
      org: "网络安全协调处",
      count: 248,
      archivedCount: 242,
      passRate: "97.5%",
      onTimeRate: "98.0%",
      avgHandle: "1.6 小时",
      children: [
        { subId: "int-org-1-1", org: "舆情研判与应急协调小组", count: 160, archivedCount: 156, passRate: "96.9%", onTimeRate: "97.5%", avgHandle: "1.8 小时" },
        { subId: "int-org-1-2", org: "关键信息基础设施防护组", count: 88, archivedCount: 86, passRate: "98.6%", onTimeRate: "98.9%", avgHandle: "1.2 小时" }
      ]
    },
    {
      id: "int-org-2",
      org: "综合处指挥调度中心",
      count: 215,
      archivedCount: 206,
      passRate: "95.8%",
      onTimeRate: "96.5%",
      avgHandle: "1.9 小时",
      children: [
        { subId: "int-org-2-1", org: "全天候综合值班调度席", count: 135, archivedCount: 130, passRate: "95.2%", onTimeRate: "96.0%", avgHandle: "2.1 小时" },
        { subId: "int-org-2-2", org: "指令流转质检与督办室", count: 80, archivedCount: 76, passRate: "96.8%", onTimeRate: "97.4%", avgHandle: "1.6 小时" }
      ]
    },
    {
      id: "int-org-3",
      org: "网络内容建设与传播处",
      count: 178,
      archivedCount: 168,
      passRate: "94.4%",
      onTimeRate: "95.2%",
      avgHandle: "2.3 小时",
      children: [
        { subId: "int-org-3-1", org: "正向引导与议题策划组", count: 108, archivedCount: 102, passRate: "93.8%", onTimeRate: "94.6%", avgHandle: "2.5 小时" },
        { subId: "int-org-3-2", org: "新媒体端权威发布矩阵组", count: 70, archivedCount: 66, passRate: "95.3%", onTimeRate: "96.1%", avgHandle: "2.0 小时" }
      ]
    },
    {
      id: "int-org-4",
      org: "网络执法与监督处",
      count: 152,
      archivedCount: 142,
      passRate: "92.8%",
      onTimeRate: "93.4%",
      avgHandle: "2.7 小时",
      children: [
        { subId: "int-org-4-1", org: "涉网线索核查与行政执法专班", count: 96, archivedCount: 89, passRate: "91.7%", onTimeRate: "92.7%", avgHandle: "2.9 小时" },
        { subId: "int-org-4-2", org: "属地平台约谈与合规督查组", count: 56, archivedCount: 53, passRate: "94.6%", onTimeRate: "94.6%", avgHandle: "2.3 小时" }
      ]
    },
    {
      id: "int-org-5",
      org: "技术保障与大数据应用处",
      count: 136,
      archivedCount: 128,
      passRate: "94.1%",
      onTimeRate: "95.0%",
      avgHandle: "2.4 小时",
      children: [
        { subId: "int-org-5-1", org: "舆情态势大数据监测系统组", count: 86, archivedCount: 81, passRate: "93.5%", onTimeRate: "94.2%", avgHandle: "2.6 小时" },
        { subId: "int-org-5-2", org: "专网安全与数据中台保障班", count: 50, archivedCount: 47, passRate: "95.1%", onTimeRate: "96.4%", avgHandle: "2.0 小时" }
      ]
    }
  ],
  externalUsers: [
    {
      id: "ext-usr-1",
      org: "市公安局系统 / 情指网安支队",
      name: "张警官",
      role: "外部联络员",
      count: 88,
      archivedCount: 86,
      passRate: "97.7%",
      onTimeRate: "98.9%",
      avgHandle: "1.7 小时",
      lastActive: "10分钟前"
    },
    {
      id: "ext-usr-2",
      org: "市教育局系统 / 网络应急专班",
      name: "李主任",
      role: "专班负责人",
      count: 76,
      archivedCount: 72,
      passRate: "94.7%",
      onTimeRate: "96.1%",
      avgHandle: "2.2 小时",
      lastActive: "25分钟前"
    },
    {
      id: "ext-usr-3",
      org: "市卫健委 / 疾控网络应急组",
      name: "王处长",
      role: "外部联络员",
      count: 69,
      archivedCount: 66,
      passRate: "95.7%",
      onTimeRate: "97.1%",
      avgHandle: "2.1 小时",
      lastActive: "1小时前"
    },
    {
      id: "ext-usr-4",
      org: "市应急管理局 / 调度指挥中心",
      name: "刘工",
      role: "技术值班员",
      count: 64,
      archivedCount: 60,
      passRate: "93.8%",
      onTimeRate: "95.3%",
      avgHandle: "2.4 小时",
      lastActive: "40分钟前"
    },
    {
      id: "ext-usr-5",
      org: "市住建局 / 综合应急工作组",
      name: "陈科长",
      role: "外部承办人",
      count: 58,
      archivedCount: 53,
      passRate: "91.4%",
      onTimeRate: "93.1%",
      avgHandle: "2.9 小时",
      lastActive: "2小时前"
    },
    {
      id: "ext-usr-6",
      org: "市市监局 / 网络维权支队",
      name: "赵队长",
      role: "外部承办人",
      count: 52,
      archivedCount: 48,
      passRate: "88.5%",
      onTimeRate: "90.4%",
      avgHandle: "3.2 小时",
      lastActive: "3小时前"
    },
    {
      id: "ext-usr-7",
      org: "市文旅局 / 政务新媒体中心",
      name: "周编辑",
      role: "外部联络员",
      count: 46,
      archivedCount: 42,
      passRate: "89.1%",
      onTimeRate: "91.3%",
      avgHandle: "3.4 小时",
      lastActive: "15分钟前"
    },
    {
      id: "ext-usr-8",
      org: "市交通局 / 运行调度中心",
      name: "孙主管",
      role: "外部承办人",
      count: 42,
      archivedCount: 38,
      passRate: "85.7%",
      onTimeRate: "88.1%",
      avgHandle: "3.7 小时",
      lastActive: "5小时前"
    }
  ],
  internalUsers: [
    {
      id: "int-usr-1",
      org: "综合处 · 指挥调度",
      name: "武甲",
      role: "主管 / 下发调度",
      count: 142,
      archivedCount: 138,
      passRate: "97.2%",
      onTimeRate: "98.6%",
      avgHandle: "1.4 小时",
      lastActive: "当前在线"
    },
    {
      id: "int-usr-2",
      org: "网络安全处 · 应急专班",
      name: "武乙",
      role: "专班经办 / 处置",
      count: 126,
      archivedCount: 122,
      passRate: "96.8%",
      onTimeRate: "97.6%",
      avgHandle: "1.6 小时",
      lastActive: "当前在线"
    },
    {
      id: "int-usr-3",
      org: "网络安全处 · 技术科",
      name: "武丙",
      role: "安全技术 / 研判",
      count: 98,
      archivedCount: 95,
      passRate: "98.0%",
      onTimeRate: "99.0%",
      avgHandle: "1.2 小时",
      lastActive: "5分钟前"
    },
    {
      id: "int-usr-4",
      org: "值班室 · 综合值班",
      name: "武丁",
      role: "值班调度 / 督办",
      count: 85,
      archivedCount: 81,
      passRate: "95.3%",
      onTimeRate: "96.5%",
      avgHandle: "2.0 小时",
      lastActive: "当前在线"
    },
    {
      id: "int-usr-5",
      org: "网络内容处 · 传播组",
      name: "张若英",
      role: "内容研判员",
      count: 74,
      archivedCount: 70,
      passRate: "94.6%",
      onTimeRate: "95.9%",
      avgHandle: "2.3 小时",
      lastActive: "30分钟前"
    },
    {
      id: "int-usr-6",
      org: "执法监督处 · 执法专班",
      name: "谭星",
      role: "执法督办员",
      count: 65,
      archivedCount: 61,
      passRate: "93.8%",
      onTimeRate: "95.4%",
      avgHandle: "2.6 小时",
      lastActive: "1小时前"
    },
    {
      id: "int-usr-7",
      org: "技术保障处 · 大数据班",
      name: "吴鑫",
      role: "数据工程师",
      count: 58,
      archivedCount: 55,
      passRate: "96.6%",
      onTimeRate: "96.6%",
      avgHandle: "2.1 小时",
      lastActive: "2小时前"
    }
  ],
  records: [
    {
      id: "YQCZ20260914015",
      title: "关于对涉台虚假信息恶意编造源头查证与协同管控报告",
      template: "突发敏感舆情处置模板",
      urgency: "特急",
      responseTimeReq: "15分钟内",
      deadlineReq: "2小时内 (2026-09-14 11:20)",
      source: "专网监测调度平台",
      url: "https://monitor.wxb.cn/alert/20260914-089",
      senderOrg: "台湾省网信办",
      sender: "武甲",
      receiverOrg: "网络安全协调处专班",
      receiver: "武乙",
      description: "请核查境外推手操纵涉台虚假信息恶意煽动对立的信源矩阵，查清账号归属及资金链，并限时报送落地取证处置结论供审核。",
      respTimeActual: "8分钟 (准时)",
      handleDuration: "1小时15分 (准时)",
      measure: "违规有害信息断链下架",
      receiptNote: "专班已查实涉案3个重点引流境外虚假信源矩阵，掌握境内推手2人真实身份信息，已完成电子取证固化并采取关停封堵措施，处置闭环。",
      imagesCount: 2,
      filesCount: 2,
      filesList: ["涉案账号矩阵溯源证据链.pdf", "属地网络安全协同拦截表.xlsx"],
      evidenceGrade: "双证齐全",
      auditResult: "一次性通过",
      auditComment: "证据确凿，响应迅速，整改彻底，同意归档入库。"
    },
    {
      id: "YQCZ20260914500",
      title: "涉重点涉企虚假商誉侵害舆情快速阻断及属地核查结报",
      template: "突发敏感舆情处置模板",
      urgency: "加急",
      responseTimeReq: "30分钟内",
      deadlineReq: "4小时内 (2026-09-14 13:10)",
      source: "微博平台",
      url: "https://weibo.com/detail/5078129381273912",
      senderOrg: "台湾省网信办",
      sender: "武甲",
      receiverOrg: "市公安局情指网安支队",
      receiver: "武丁",
      description: "微博话题#涉台龙头企业违规排污传言#发酵迅速，经初核为恶意捏造，请立即锁定发帖人并下架造谣博文。",
      respTimeActual: "15分钟 (准时)",
      handleDuration: "2小时10分 (准时)",
      measure: "违规有害信息断链下架",
      receiptNote: "已督促新浪微博官方对造谣主帖实施断链下架，发帖人IP已锁定并移交属地公安约谈诫勉，网络热度已消退。",
      imagesCount: 3,
      filesCount: 1,
      filesList: ["微博断链下架存证快照.pdf"],
      evidenceGrade: "双证齐全",
      auditResult: "一次性通过",
      auditComment: "下架时效达标，属地取证完整，准予办结。"
    },
    {
      id: "YQCZ20260914301",
      title: "官方门户网站重要政策新闻领导人职务表述错误紧急订正",
      template: "政务发文规范表述紧急纠错模板",
      urgency: "特急",
      responseTimeReq: "15分钟内",
      deadlineReq: "1小时内 (2026-09-14 10:30)",
      source: "政务官方门户",
      url: "https://gov.tw.cn/news/20260914/001.html",
      senderOrg: "台湾省网信办",
      sender: "张伟",
      receiverOrg: "文旅政务新媒体中心",
      receiver: "武乙",
      description: "网信办AI审校系统扫描发现该文第三段出现国家机关领导人职务名称错漏，属于严重表述差错，须立即修正！",
      respTimeActual: "6分钟 (准时)",
      handleDuration: "25分钟 (准时)",
      measure: "涉政表述修正/改版发布",
      receiptNote: "已在后台内容管理系统中修正涉事段落领导人标准职务全称，全站静态页面已刷新缓存，排查未见其他表述错误。",
      imagesCount: 2,
      filesCount: 0,
      filesList: [],
      evidenceGrade: "仅截图凭证",
      auditResult: "一次性通过",
      auditComment: "修正及时，快照核验无误。"
    },
    {
      id: "YQCZ20260913098",
      title: "关于某高校学生涉嫌集体食物中毒网络传言澄清辟谣通报",
      template: "突发敏感舆情处置模板",
      urgency: "加急",
      responseTimeReq: "30分钟内",
      deadlineReq: "4小时内 (2026-09-13 18:00)",
      source: "微信公众号",
      url: "https://mp.weixin.qq.com/s/sample098877",
      senderOrg: "台湾省网信办",
      sender: "武甲",
      receiverOrg: "教育系统网络应急专班",
      receiver: "陈乾喜",
      description: "微信朋友圈疯传某大学200余名师生食物中毒入院抢救，请教育厅会同卫健委立即核查并在校方公众号发布权威澄清！",
      respTimeActual: "22分钟 (准时)",
      handleDuration: "3小时10分 (准时)",
      measure: "官方澄清辟谣与跟评引导",
      receiptNote: "校方实地核查仅3人因季节性肠胃炎就诊并已出院，网传200人纯属造谣。校方官方微信已发布权威事实通报并控评置顶引导。",
      imagesCount: 2,
      filesCount: 1,
      filesList: ["高校官方通报及卫健委核查说明.pdf"],
      evidenceGrade: "双证齐全",
      auditResult: "一次性通过",
      auditComment: "通报口径统一，有效阻断谣言蔓延。"
    },
    {
      id: "YQCZ20260913045",
      title: "抖音短视频平台摆拍涉民生虚假悲情短视频核查处置",
      template: "突发敏感舆情处置模板",
      urgency: "加急",
      responseTimeReq: "30分钟内",
      deadlineReq: "4小时内 (2026-09-13 16:00)",
      source: "抖音短视频",
      url: "https://v.douyin.com/idk93821/",
      senderOrg: "台湾省网信办",
      sender: "武甲",
      receiverOrg: "重点属地区县网信联络办",
      receiver: "太空人",
      description: "抖音账号“乡情实录”摆拍虚假孤寡老人乞讨视频骗取打赏，引发不良社会影响，请落地查人并处置账号。",
      respTimeActual: "42分钟 (超时)",
      handleDuration: "4小时30分 (超时)",
      measure: "约谈主体与技术封堵管控",
      receiptNote: "属地派出所已传唤短视频创作者，其承认脚本摆拍吸粉事实，已责令删除全部系列视频并作具结悔过书。",
      imagesCount: 1,
      filesCount: 0,
      filesList: [],
      evidenceGrade: "仅截图凭证",
      auditResult: "驳回重办",
      auditComment: "仅附一张笔录照片，缺少当事人账号处置处罚凭证与悔过公函，退回属地补全凭证材料。"
    },
    {
      id: "YQCZ20260912112",
      title: "关于某市政燃气管网泄漏险情不实视频的落地排查回执",
      template: "常规舆情处置排查与汇报模板",
      urgency: "平急",
      responseTimeReq: "1小时内",
      deadlineReq: "12小时内 (2026-09-12 20:00)",
      source: "小红书平台",
      url: "https://xiaohongshu.com/discovery/item/66e0129",
      senderOrg: "台湾省网信办",
      sender: "武丙",
      receiverOrg: "住建与城市更新工作组",
      receiver: "谭星",
      description: "小红书有博主发帖称某主干道燃气管道泄漏已造成人员伤亡，请住建市政部门紧急拉网式排查并报送现场安全结论。",
      respTimeActual: "35分钟 (准时)",
      handleDuration: "4小时50分 (准时)",
      measure: "落地核实排查并出具公函",
      receiptNote: "市政燃气抢修大队现场全段红外检漏检测，压力数值正常无任何泄漏，博主实为截取往年消防演练画面移花接木，已出具安全通报。",
      imagesCount: 4,
      filesCount: 1,
      filesList: ["市政燃气管网现场红外检测合规证明.pdf"],
      evidenceGrade: "双证齐全",
      auditResult: "一次性通过",
      auditComment: "检测数据严密，佐证完整规范。"
    }
  ]
};

function renderStats2Filters(){
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var d = statsDynamicData[curPeriod];
  var dateStart = d.dateRange.start;
  var dateEnd = d.dateRange.end;

  var periods = ["近7天", "近30天", "本季度", "本年"];

  return '<div class="card stats-filter-bar">' +
    '<div class="stats-filter-left">' +
      '<div class="stats-filter-date-group">' +
        '<span class="stats-filter-label">' +
          ico("calendar", 16) +
          '<span>统计时间区间：</span>' +
        '</span>' +
        '<div class="stats-period-buttons">' +
          periods.map(function(p){
            var isActive = (curPeriod === p);
            return '<button type="button" class="stats-period-btn ' + (isActive ? 'active' : '') + '" data-action="stats2-change-period" data-period="' + p + '">' + p + '</button>';
          }).join("") +
        '</div>' +
        '<div class="stats-custom-date-box">' +
          '<input type="text" class="stats-custom-date-val" value="' + dateStart + '" readonly />' +
          ico("calendar", 14) +
          '<span class="stats-custom-date-sep">至</span>' +
          '<input type="text" class="stats-custom-date-val" value="' + dateEnd + '" readonly />' +
          ico("calendar", 14) +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="stats-filter-right">' +
      '<button type="button" class="stats-reset-filter-btn" data-action="stats2-reset">' +
        ico("rotate-ccw", 14) +
        '<span>重置筛选</span>' +
      '</button>' +
    '</div>' +
  '</div>';
}

function renderStats2TrendBadge(label, valText){
  if(!valText) return "";
  var isDown = valText.indexOf("-") !== -1 || valText.indexOf("↓") !== -1 || valText.indexOf("降") !== -1;
  var cls = isDown ? "down" : "up";
  var arrow = isDown ? "↓" : "↑";
  var clean = valText.replace(/[↑↓]/g, "").trim();
  return '<span class="trend-badge ' + cls + '">' + label + ' ' + clean + ' ' + arrow + '</span>';
}

function renderStats2Kpis(){
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var d = statsDynamicData[curPeriod];
  var k = d.kpis;

  return '<div class="stats2-kpi-grid-5">' +
    // 卡片1: 指令下发总量
    '<div class="stats2-kpi-card-opt">' +
      '<div class="kpi-head">' +
        '<span class="kpi-title">指令下发总量</span>' +
        '<span class="kpi-icon-bubble" style="background:#eff6ff;color:#2563eb">' + ico("send", 16) + '</span>' +
      '</div>' +
      '<div class="kpi-val-row">' +
        '<span class="kpi-val">' + k.total + '</span>' +
        '<span class="kpi-unit">件</span>' +
      '</div>' +
      '<div class="kpi-bottom-row">' +
        renderStats2TrendBadge("同比", k.yoyTotal) +
        '<span style="color:#cbd5e1">·</span>' +
        renderStats2TrendBadge("环比", k.momTotal) +
      '</div>' +
    '</div>' +

    // 卡片2: 办结归档总量
    '<div class="stats2-kpi-card-opt">' +
      '<div class="kpi-head">' +
        '<span class="kpi-title">办结归档总量</span>' +
        '<span class="kpi-icon-bubble" style="background:#ecfdf5;color:#10b981">' + ico("archive", 16) + '</span>' +
      '</div>' +
      '<div class="kpi-val-row">' +
        '<span class="kpi-val">' + k.archived + '</span>' +
        '<span class="kpi-unit">件</span>' +
      '</div>' +
      '<div class="kpi-bottom-row">' +
        '<span style="font-weight:600;color:#059669">归档率 ' + k.archiveRate + '</span>' +
        '<span style="color:#cbd5e1">·</span>' +
        renderStats2TrendBadge("同比", k.yoyArchived) +
      '</div>' +
    '</div>' +

    // 卡片3: 一次审核通过率
    '<div class="stats2-kpi-card-opt">' +
      '<div class="kpi-head">' +
        '<span class="kpi-title">一次审核通过率</span>' +
        '<span class="kpi-icon-bubble" style="background:#f5f3ff;color:#8b5cf6">' + ico("shield-check", 16) + '</span>' +
      '</div>' +
      '<div class="kpi-val-row">' +
        '<span class="kpi-val">' + k.passRate + '</span>' +
      '</div>' +
      '<div class="kpi-bottom-row">' +
        renderStats2TrendBadge("同比", k.yoyPass) +
        '<span style="color:#cbd5e1">·</span>' +
        renderStats2TrendBadge("环比", k.momPass) +
      '</div>' +
    '</div>' +

    // 卡片4: 准时完成率 (新增在平均处置耗时前面)
    '<div class="stats2-kpi-card-opt">' +
      '<div class="kpi-head">' +
        '<span class="kpi-title">准时完成率</span>' +
        '<span class="kpi-icon-bubble" style="background:#ecfeff;color:#0891b2">' + ico("timer", 16) + '</span>' +
      '</div>' +
      '<div class="kpi-val-row">' +
        '<span class="kpi-val">' + k.onTimeRate + '</span>' +
      '</div>' +
      '<div class="kpi-bottom-row">' +
        renderStats2TrendBadge("同比", k.yoyOnTime) +
        '<span style="color:#cbd5e1">·</span>' +
        renderStats2TrendBadge("环比", k.momOnTime) +
      '</div>' +
    '</div>' +

    // 卡片5: 平均处置耗时
    '<div class="stats2-kpi-card-opt">' +
      '<div class="kpi-head">' +
        '<span class="kpi-title">平均处置耗时</span>' +
        '<span class="kpi-icon-bubble" style="background:#fffbeb;color:#d97706">' + ico("clock-3", 16) + '</span>' +
      '</div>' +
      '<div class="kpi-val-row">' +
        '<span class="kpi-val">' + k.avgHours + '</span>' +
        '<span class="kpi-unit">小时</span>' +
      '</div>' +
      '<div class="kpi-bottom-row">' +
        renderStats2TrendBadge("同比", k.yoyAvg) +
        '<span style="color:#cbd5e1">·</span>' +
        renderStats2TrendBadge("环比", k.momAvg) +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderStats2DynamicTrendCard(){
  return '<div class="stats2-trend-card">' +
    '<div class="stats2-trend-head">' +
      '<div class="stats2-trend-title">' +
        ico("trending-up", 18) +
        '<span>指令下发的动态趋势图</span>' +
      '</div>' +
      '<div class="stats2-trend-legend-inline" id="stats2-trend-legend-inline">' +
        '<div class="stats2-legend-item" data-series="下发总量" title="点击切换显隐">' +
          '<span class="stats2-legend-symbol"><span class="stats2-legend-line" style="background:#009893"></span><span class="stats2-legend-dot" style="background:#009893"></span></span>' +
          '<span class="stats2-legend-text">下发总量</span>' +
        '</div>' +
        '<div class="stats2-legend-item" data-series="归档总量" title="点击切换显隐">' +
          '<span class="stats2-legend-symbol"><span class="stats2-legend-line" style="background:#10b981"></span><span class="stats2-legend-dot" style="background:#10b981"></span></span>' +
          '<span class="stats2-legend-text">归档总量</span>' +
        '</div>' +
        '<div class="stats2-legend-item" data-series="一次审核通过率" title="点击切换显隐">' +
          '<span class="stats2-legend-symbol"><span class="stats2-legend-line" style="background:#f59e0b"></span><span class="stats2-legend-dot" style="background:#f59e0b"></span></span>' +
          '<span class="stats2-legend-text">一次审核通过率</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div id="stats2-chart-trend" class="stats2-trend-chart-box"></div>' +
  '</div>';
}

function renderStats2MidSection(){
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var d = statsDynamicData[curPeriod];
  var sources = d.sources;

  // 左侧卡片 (占比50%): 舆情来源分布饼图 (优化整体卡片UI，包含数量，百分比)
  var leftCard = '<div class="stats2-mid-card">' +
    '<div class="stats2-card-head">' +
      '<div class="stats2-card-title">' +
        ico("pie-chart", 17) +
        '<span>舆情来源分布</span>' +
      '</div>' +
      '<span class="stats2-card-badge">全网信源矩阵监测</span>' +
    '</div>' +
    '<div class="stats2-source-inner">' +
      '<div id="stats2-chart-source" class="stats2-pie-box"></div>' +
      '<div class="stats2-source-list">' +
        sources.map(function(s){
          return '<div class="stats2-source-item">' +
            '<span class="stats2-source-label">' +
              '<span class="stats2-source-dot" style="background:' + s.color + '"></span>' +
              '<span>' + s.name + '</span>' +
            '</span>' +
            '<div class="stats2-source-stats">' +
              '<span class="stats2-source-count">' + s.count + ' 条</span>' +
              '<span class="stats2-source-pct">' + s.pct + '</span>' +
            '</div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="stats2-card-insight-bar">' +
      ico("info", 13) +
      '<span>核心信源聚焦于主流社交平台与政务两微，移动短视频类线索协同闭环率达 98.4%</span>' +
    '</div>' +
  '</div>';

  // 右侧卡片 (占比50%): 指令模板使用情况 (双柱状：柱状显示下发数，柱状显示平均处置耗时，按指令分类，右上角图例取代双柱对比标签)
  var rightCard = '<div class="stats2-mid-card">' +
    '<div class="stats2-card-head">' +
      '<div class="stats2-card-title">' +
        ico("layout-template", 17) +
        '<span>指令模板使用情况</span>' +
      '</div>' +
      '<div class="stats2-tpl-legend-inline">' +
        '<div class="stats2-tpl-legend-item">' +
          '<span class="stats2-tpl-legend-bar" style="background:#009893"></span>' +
          '<span>下发数</span>' +
        '</div>' +
        '<div class="stats2-tpl-legend-item">' +
          '<span class="stats2-tpl-legend-bar" style="background:#e2e8f0;border:1px solid #cbd5e1"></span>' +
          '<span>平均处置耗时</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div id="stats2-chart-template-mixed" class="stats2-tpl-chart-box"></div>' +
  '</div>';

  return '<div class="stats2-mid-grid">' + leftCard + rightCard + '</div>';
}

function renderStats2ReasonsSection(){
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var r = statsDynamicData[curPeriod].reasons;

  var colors = {
    transfer: "#2563eb",
    coop: "#7c3aed",
    reject: "#dc2626"
  };

  function renderReasonCard(title, icon, tag, color, dataObj, reasonType){
    var items = (dataObj && dataObj.items) ? dataObj.items : [];
    var displayItems = items.slice(0, 4);
    var hasMore = items.length > 4;

    return '<div class="stats2-reason-card">' +
      '<div class="stats2-reason-head">' +
        '<div class="stats2-reason-title">' +
          ico(icon, 16) +
          '<span>' + title + '</span>' +
        '</div>' +
        '<div class="stats2-reason-head-right" style="display:flex;align-items:center;gap:8px">' +
          '<span class="stats2-reason-tag" style="background:' + color + '15;color:' + color + ';font-weight:700">累计 ' + dataObj.total + ' 件</span>' +
          (hasMore ? '<button type="button" class="stats2-reason-view-btn" data-action="stats2-view-reason-detail" data-reason-type="' + reasonType + '" data-reason-title="' + escapeHtml(title) + '">' + ico("external-link", 12) + '<span>查看</span></button>' : '') +
        '</div>' +
      '</div>' +
      '<div class="stats2-reason-list">' +
        displayItems.map(function(item){
          return '<div class="stats2-reason-item">' +
            '<div class="stats2-reason-row">' +
              '<span class="stats2-reason-name" title="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + '</span>' +
              '<span class="stats2-reason-count">' + item.count + ' 件 <span style="color:#64748b;font-weight:normal;font-size:11px">(' + item.pct + ')</span></span>' +
            '</div>' +
            '<div class="stats2-reason-bar">' +
              '<div class="stats2-reason-bar-fill" style="width:' + item.pct + ';background:' + color + '"></div>' +
            '</div>' +
          '</div>';
        }).join("") +
      '</div>' +
      '<div class="stats2-reason-footer">' +
        ico("info", 13) +
        '<span>' + dataObj.footer + '</span>' +
      '</div>' +
    '</div>';
  }

  return '<div class="stats2-reasons-grid">' +
    renderReasonCard("转办原因统计分析", "git-fork", "流转异动", colors.transfer, r.transfer, "transfer") +
    renderReasonCard("协办原因统计分析", "users", "多方协同", colors.coop, r.coop, "coop") +
    renderReasonCard("驳回原因统计分析", "rotate-ccw", "质检把控", colors.reject, r.reject, "reject") +
  '</div>';
}

function renderStats2OrgSection(){
  var activeTab = state.stats2OrgTab || "ext-org";
  var kw = (state.stats2Filter.orgKw || "").trim().toLowerCase();
  if(!state.stats2ExpandedOrgs){
    state.stats2ExpandedOrgs = { "ext-org-1": true, "ext-org-2": true, "int-org-1": true, "int-org-2": true };
  }

  // 4个 Tab 配置
  var tabs = [
    { id: "ext-org", label: "外部组织节点数据统计", icon: "building-2", count: (stats2FormData.externalOrgs || []).length },
    { id: "int-org", label: "机构组织数据统计", icon: "network", count: (stats2FormData.internalOrgs || []).length },
    { id: "ext-user", label: "外部用户数据统计", icon: "user-check", count: (stats2FormData.externalUsers || []).length },
    { id: "int-user", label: "机构用户使用数据", icon: "users", count: (stats2FormData.internalUsers || []).length }
  ];

  var tabsNavHtml = '<div class="stats2-org-tabs-bar">' +
    tabs.map(function(t){
      var isActive = (activeTab === t.id);
      return '<button type="button" class="stats2-org-tab-item ' + (isActive ? 'active' : '') + '" data-action="stats2-change-org-tab" data-tab="' + t.id + '">' +
        ico(t.icon, 15) +
        '<span class="stats2-tab-label">' + t.label + '</span>' +
        '<span class="stats2-tab-badge">' + t.count + '</span>' +
      '</button>';
    }).join("") +
  '</div>';

  var subDesc = "";
  var searchPlaceholder = "";
  var tableHtml = "";

  if(activeTab === "ext-org"){
    subDesc = "外部对口承办单位与下级层级节点指令执行负荷、办结归档量及限时履约全量透视";
    searchPlaceholder = "搜索外部组织节点...";
    var extList = stats2FormData.externalOrgs || [];
    var rowsHtml = extList.map(function(r, idx){
      var isExpanded = state.stats2AllOrgsExpanded ? true : (state.stats2ExpandedOrgs && state.stats2ExpandedOrgs[r.id]);
      var hasChildren = r.children && r.children.length > 0;
      if(kw){
        var pMatch = r.org.toLowerCase().indexOf(kw) !== -1;
        var cMatch = hasChildren && r.children.some(function(c){ return c.org.toLowerCase().indexOf(kw) !== -1; });
        if(!pMatch && !cMatch) return "";
        if(cMatch) isExpanded = true;
      }

      var parentRow = '<tr class="stats2-org-parentrow" data-org-id="' + r.id + '">' +
        '<td style="text-align:center"><span style="font-weight:700;color:' + (idx<3?"#d97706":"#64748b") + '">' + (idx+1) + '</span></td>' +
        '<td>' +
          '<div style="display:flex;align-items:center">' +
            (hasChildren ?
              '<button type="button" class="stats2-tree-btn ' + (isExpanded ? "expanded" : "") + '" data-action="stats2-toggle-org-tree" data-org-id="' + r.id + '" title="' + (isExpanded ? "收起下级" : "展开下级") + '">' +
                '<svg class="stats2-tree-arrow" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
              '</button>' :
              '<span style="display:inline-block;width:24px"></span>'
            ) +
            '<span style="display:inline-flex;align-items:center;gap:6px;cursor:pointer" data-action="stats2-toggle-org-tree" data-org-id="' + r.id + '">' +
              '<span style="color:#009893">' + ico("building-2", 15) + '</span>' +
              '<b style="font-size:13.5px;color:#0f172a">' + escapeHtml(r.org) + '</b>' +
              (hasChildren ? '<span class="stats2-tree-tag">' + r.children.length + ' 个下级节点</span>' : '') +
            '</span>' +
          '</div>' +
        '</td>' +
        '<td style="text-align:right"><b style="font-size:13.5px;color:#0f172a">' + r.count + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
        '<td style="text-align:right"><b style="font-size:13.5px;color:#059669">' + r.archivedCount + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
        '<td style="text-align:center"><span style="font-weight:700;color:#0284c7">' + r.passRate + '</span></td>' +
        '<td style="text-align:center"><span style="font-weight:700;color:#10b981">' + r.onTimeRate + '</span></td>' +
        '<td style="text-align:center"><span style="font-weight:600;color:#475569">' + r.avgHandle + '</span></td>' +
      '</tr>';

      var subRowsHtml = "";
      if(hasChildren){
        subRowsHtml = r.children.map(function(sub, sIdx){
          if(kw && r.org.toLowerCase().indexOf(kw) === -1 && sub.org.toLowerCase().indexOf(kw) === -1){
            return "";
          }
          return '<tr class="stats2-org-subrow" data-parent-id="' + r.id + '" style="' + (isExpanded ? '' : 'display:none') + '">' +
            '<td style="text-align:center;color:#94a3b8;font-size:12px">' + (idx+1) + '-' + (sIdx+1) + '</td>' +
            '<td style="padding-left:36px">' +
              '<div style="display:flex;align-items:center;gap:6px">' +
                '<span class="stats2-tree-branch">└─</span>' +
                '<span style="color:#64748b">' + ico("network", 14) + '</span>' +
                '<span class="stats2-child-node-name">' + escapeHtml(sub.org) + '</span>' +
              '</div>' +
            '</td>' +
            '<td style="text-align:right;color:#334155;font-size:12.5px">' + sub.count + ' 件</td>' +
            '<td style="text-align:right;color:#059669;font-size:12.5px">' + sub.archivedCount + ' 件</td>' +
            '<td style="text-align:center;color:#0284c7;font-size:12.5px">' + sub.passRate + '</td>' +
            '<td style="text-align:center;color:#10b981;font-size:12.5px">' + sub.onTimeRate + '</td>' +
            '<td style="text-align:center;color:#64748b;font-size:12.5px">' + sub.avgHandle + '</td>' +
          '</tr>';
        }).join("");
      }

      return parentRow + subRowsHtml;
    }).join("");

    tableHtml = '<table class="stats2-org-table">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:70px;text-align:center">序号</th>' +
          '<th style="min-width:280px">组织节点</th>' +
          '<th style="text-align:right">承办总量</th>' +
          '<th style="text-align:right">办结归档量</th>' +
          '<th style="text-align:center">一次性审核通过率</th>' +
          '<th style="text-align:center">限时完成率</th>' +
          '<th style="text-align:center">平均办结耗时</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        (extList.length === 0 ? '<tr><td colspan="7" style="text-align:center;padding:30px;color:#94a3b8">未找到匹配的外部组织节点</td></tr>' : rowsHtml) +
      '</tbody>' +
    '</table>';
  } else if(activeTab === "int-org"){
    subDesc = "省网信办内部职能处室与业务专班的指令承接、统筹研判与限时办结效能监测";
    searchPlaceholder = "搜索机构组织处室...";
    var intList = stats2FormData.internalOrgs || [];
    var intRowsHtml = intList.map(function(r, idx){
      var isExpanded = state.stats2AllOrgsExpanded ? true : (state.stats2ExpandedOrgs && state.stats2ExpandedOrgs[r.id]);
      var hasChildren = r.children && r.children.length > 0;
      if(kw){
        var pMatch = r.org.toLowerCase().indexOf(kw) !== -1;
        var cMatch = hasChildren && r.children.some(function(c){ return c.org.toLowerCase().indexOf(kw) !== -1; });
        if(!pMatch && !cMatch) return "";
        if(cMatch) isExpanded = true;
      }

      var parentRow = '<tr class="stats2-org-parentrow" data-org-id="' + r.id + '">' +
        '<td style="text-align:center"><span style="font-weight:700;color:' + (idx<3?"#d97706":"#64748b") + '">' + (idx+1) + '</span></td>' +
        '<td>' +
          '<div style="display:flex;align-items:center">' +
            (hasChildren ?
              '<button type="button" class="stats2-tree-btn ' + (isExpanded ? "expanded" : "") + '" data-action="stats2-toggle-org-tree" data-org-id="' + r.id + '" title="' + (isExpanded ? "收起下级" : "展开下级") + '">' +
                '<svg class="stats2-tree-arrow" viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
              '</button>' :
              '<span style="display:inline-block;width:24px"></span>'
            ) +
            '<span style="display:inline-flex;align-items:center;gap:6px;cursor:pointer" data-action="stats2-toggle-org-tree" data-org-id="' + r.id + '">' +
              '<span style="color:#0284c7">' + ico("network", 15) + '</span>' +
              '<b style="font-size:13.5px;color:#0f172a">' + escapeHtml(r.org) + '</b>' +
              (hasChildren ? '<span class="stats2-tree-tag">' + r.children.length + ' 个下属组</span>' : '') +
            '</span>' +
          '</div>' +
        '</td>' +
        '<td style="text-align:right"><b style="font-size:13.5px;color:#0f172a">' + r.count + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
        '<td style="text-align:right"><b style="font-size:13.5px;color:#059669">' + r.archivedCount + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
        '<td style="text-align:center"><span style="font-weight:700;color:#0284c7">' + r.passRate + '</span></td>' +
        '<td style="text-align:center"><span style="font-weight:700;color:#10b981">' + r.onTimeRate + '</span></td>' +
        '<td style="text-align:center"><span style="font-weight:600;color:#475569">' + r.avgHandle + '</span></td>' +
      '</tr>';

      var subRowsHtml = "";
      if(hasChildren){
        subRowsHtml = r.children.map(function(sub, sIdx){
          if(kw && r.org.toLowerCase().indexOf(kw) === -1 && sub.org.toLowerCase().indexOf(kw) === -1){
            return "";
          }
          return '<tr class="stats2-org-subrow" data-parent-id="' + r.id + '" style="' + (isExpanded ? '' : 'display:none') + '">' +
            '<td style="text-align:center;color:#94a3b8;font-size:12px">' + (idx+1) + '-' + (sIdx+1) + '</td>' +
            '<td style="padding-left:36px">' +
              '<div style="display:flex;align-items:center;gap:6px">' +
                '<span class="stats2-tree-branch">└─</span>' +
                '<span style="color:#64748b">' + ico("users", 14) + '</span>' +
                '<span class="stats2-child-node-name">' + escapeHtml(sub.org) + '</span>' +
              '</div>' +
            '</td>' +
            '<td style="text-align:right;color:#334155;font-size:12.5px">' + sub.count + ' 件</td>' +
            '<td style="text-align:right;color:#059669;font-size:12.5px">' + sub.archivedCount + ' 件</td>' +
            '<td style="text-align:center;color:#0284c7;font-size:12.5px">' + sub.passRate + '</td>' +
            '<td style="text-align:center;color:#10b981;font-size:12.5px">' + sub.onTimeRate + '</td>' +
            '<td style="text-align:center;color:#64748b;font-size:12.5px">' + sub.avgHandle + '</td>' +
          '</tr>';
        }).join("");
      }

      return parentRow + subRowsHtml;
    }).join("");

    tableHtml = '<table class="stats2-org-table">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:70px;text-align:center">序号</th>' +
          '<th style="min-width:280px">机构组织处室</th>' +
          '<th style="text-align:right">承办总量</th>' +
          '<th style="text-align:right">办结归档量</th>' +
          '<th style="text-align:center">一次性审核通过率</th>' +
          '<th style="text-align:center">限时完成率</th>' +
          '<th style="text-align:center">平均办结耗时</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        (intList.length === 0 ? '<tr><td colspan="7" style="text-align:center;padding:30px;color:#94a3b8">未找到匹配的机构组织</td></tr>' : intRowsHtml) +
      '</tbody>' +
    '</table>';
  } else if(activeTab === "ext-user"){
    subDesc = "外部协作单位具体联络经办人员的指令接收、执行回执质效与活跃度穿透";
    searchPlaceholder = "搜索外部用户姓名或单位...";
    var extUsers = stats2FormData.externalUsers || [];
    var filteredUsers = extUsers.filter(function(u){
      if(!kw) return true;
      return u.name.toLowerCase().indexOf(kw) !== -1 || u.org.toLowerCase().indexOf(kw) !== -1 || u.role.toLowerCase().indexOf(kw) !== -1;
    });

    tableHtml = '<table class="stats2-org-table">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:70px;text-align:center">序号</th>' +
          '<th style="min-width:220px">用户姓名 / 角色</th>' +
          '<th style="min-width:240px">所属外部单位与节点</th>' +
          '<th style="text-align:right">经办总量</th>' +
          '<th style="text-align:right">办结归档量</th>' +
          '<th style="text-align:center">一次性审核通过率</th>' +
          '<th style="text-align:center">限时完成率</th>' +
          '<th style="text-align:center">平均办结耗时</th>' +
          '<th style="text-align:center">最近活跃</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        (filteredUsers.length === 0 ? '<tr><td colspan="9" style="text-align:center;padding:30px;color:#94a3b8">未找到匹配的外部用户</td></tr>' :
        filteredUsers.map(function(u, idx){
          return '<tr>' +
            '<td style="text-align:center"><span style="font-weight:700;color:' + (idx<3?"#d97706":"#64748b") + '">' + (idx+1) + '</span></td>' +
            '<td>' +
              '<div style="display:flex;align-items:center;gap:10px">' +
                '<span class="mini-avatar" style="width:28px;height:28px;font-size:12px;background:#e0f2fe;color:#0284c7;font-weight:700;border-radius:50%;display:inline-flex;align-items:center;justify-content:center">' + u.name.slice(0,1) + '</span>' +
                '<div>' +
                  '<b style="font-size:13.5px;color:#0f172a">' + escapeHtml(u.name) + '</b>' +
                  '<span style="margin-left:6px;font-size:11px;color:#64748b;background:#f1f5f9;padding:1px 6px;border-radius:3px">' + escapeHtml(u.role) + '</span>' +
                '</div>' +
              '</div>' +
            '</td>' +
            '<td><span style="color:#475569;font-size:13px">' + escapeHtml(u.org) + '</span></td>' +
            '<td style="text-align:right"><b style="font-size:13.5px;color:#0f172a">' + u.count + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
            '<td style="text-align:right"><b style="font-size:13.5px;color:#059669">' + u.archivedCount + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
            '<td style="text-align:center"><span style="font-weight:700;color:#0284c7">' + u.passRate + '</span></td>' +
            '<td style="text-align:center"><span style="font-weight:700;color:#10b981">' + u.onTimeRate + '</span></td>' +
            '<td style="text-align:center"><span style="font-weight:600;color:#475569">' + u.avgHandle + '</span></td>' +
            '<td style="text-align:center"><span style="color:#64748b;font-size:12px">' + escapeHtml(u.lastActive) + '</span></td>' +
          '</tr>';
        }).join("")) +
      '</tbody>' +
    '</table>';
  } else if(activeTab === "int-user"){
    subDesc = "省网信办内部调度人、研判员及值班员的指令全生命周期处理实绩与履约画像";
    searchPlaceholder = "搜索机构用户姓名或处室...";
    var intUsers = stats2FormData.internalUsers || [];
    var filteredIntUsers = intUsers.filter(function(u){
      if(!kw) return true;
      return u.name.toLowerCase().indexOf(kw) !== -1 || u.org.toLowerCase().indexOf(kw) !== -1 || u.role.toLowerCase().indexOf(kw) !== -1;
    });

    tableHtml = '<table class="stats2-org-table">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:70px;text-align:center">序号</th>' +
          '<th style="min-width:220px">用户姓名 / 岗位职责</th>' +
          '<th style="min-width:240px">所属机构处室与席位</th>' +
          '<th style="text-align:right">调度/处理总量</th>' +
          '<th style="text-align:right">办结归档量</th>' +
          '<th style="text-align:center">一次性审核通过率</th>' +
          '<th style="text-align:center">限时完成率</th>' +
          '<th style="text-align:center">平均办结耗时</th>' +
          '<th style="text-align:center">当前状态</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' +
        (filteredIntUsers.length === 0 ? '<tr><td colspan="9" style="text-align:center;padding:30px;color:#94a3b8">未找到匹配的机构用户</td></tr>' :
        filteredIntUsers.map(function(u, idx){
          var isOnline = u.lastActive === "当前在线";
          return '<tr>' +
            '<td style="text-align:center"><span style="font-weight:700;color:' + (idx<3?"#d97706":"#64748b") + '">' + (idx+1) + '</span></td>' +
            '<td>' +
              '<div style="display:flex;align-items:center;gap:10px">' +
                '<span class="mini-avatar" style="width:28px;height:28px;font-size:12px;background:#ecfdf5;color:#059669;font-weight:700;border-radius:50%;display:inline-flex;align-items:center;justify-content:center">' + u.name.slice(0,1) + '</span>' +
                '<div>' +
                  '<b style="font-size:13.5px;color:#0f172a">' + escapeHtml(u.name) + '</b>' +
                  '<span style="margin-left:6px;font-size:11px;color:#009893;background:#e6f5f4;padding:1px 6px;border-radius:3px;font-weight:600">' + escapeHtml(u.role) + '</span>' +
                '</div>' +
              '</div>' +
            '</td>' +
            '<td><span style="color:#475569;font-size:13px">' + escapeHtml(u.org) + '</span></td>' +
            '<td style="text-align:right"><b style="font-size:13.5px;color:#0f172a">' + u.count + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
            '<td style="text-align:right"><b style="font-size:13.5px;color:#059669">' + u.archivedCount + '</b> <span style="font-size:11.5px;color:#64748b">件</span></td>' +
            '<td style="text-align:center"><span style="font-weight:700;color:#0284c7">' + u.passRate + '</span></td>' +
            '<td style="text-align:center"><span style="font-weight:700;color:#10b981">' + u.onTimeRate + '</span></td>' +
            '<td style="text-align:center"><span style="font-weight:600;color:#475569">' + u.avgHandle + '</span></td>' +
            '<td style="text-align:center">' +
              (isOnline ?
                '<span style="display:inline-flex;align-items:center;gap:4px;color:#059669;font-weight:600;font-size:12px"><span style="width:6px;height:6px;border-radius:50%;background:#10b981"></span> 在线</span>' :
                '<span style="color:#64748b;font-size:12px">' + escapeHtml(u.lastActive) + '</span>'
              ) +
            '</td>' +
          '</tr>';
        }).join("")) +
      '</tbody>' +
    '</table>';
  }

  var isOrgTreeTab = (activeTab === "ext-org" || activeTab === "int-org");

  return '<div class="stats2-org-card">' +
    tabsNavHtml +
    '<div class="stats2-org-head">' +
      '<div>' +
        '<div class="stats2-org-title">' +
          ico(activeTab === "ext-org" ? "building-2" : activeTab === "int-org" ? "network" : activeTab === "ext-user" ? "user-check" : "users", 18) +
          '<span>' + (activeTab === "ext-org" ? "外部组织节点数据统计" : activeTab === "int-org" ? "机构组织数据统计" : activeTab === "ext-user" ? "外部用户数据统计" : "机构用户使用数据") + '</span>' +
        '</div>' +
        '<div class="stats2-org-sub">' + subDesc + '</div>' +
      '</div>' +
      '<div class="stats2-org-actions">' +
        '<input type="text" id="stats2-org-search-input" class="stats2-org-search" placeholder="' + searchPlaceholder + '" value="' + escapeHtml(state.stats2Filter.orgKw || "") + '" />' +
        (isOrgTreeTab ?
          '<button type="button" class="btn small" data-action="stats2-toggle-expand-all" style="background:#f8fafc;color:#334155;border-color:#cbd5e1;font-weight:600">' +
            ico("chevrons-up-down", 13) + ' <span class="toggle-label">' + (state.stats2AllOrgsExpanded ? "全部收起" : "全部展开") + '</span>' +
          '</button>' : ''
        ) +
        '<button type="button" class="btn small" data-action="stats2-export" style="background:#009893;color:#ffffff;border-color:#009893;font-weight:600">' +
          ico("file-spreadsheet", 13) + ' 导出报表' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="stats2-org-table-wrap">' +
      tableHtml +
    '</div>' +
  '</div>';
}


function renderStats2IssuanceView(){
  return '<div class="stats2-grid-2">' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("file-text",17)+'<span>指令模板要素填报深度剖析</span></div>' +
        '<span class="stats2-panel-tip">各表单模板使用频次与平均处置时效</span>' +
      '</div>' +
      '<div style="padding-top:6px">' +
        stats2FormData.templates.map(function(t){
          return '<div class="stats2-progress-item">' +
            '<div class="stats2-prog-meta">' +
              '<span class="prog-name">'+t.name+'</span>' +
              '<span class="prog-stat"><b>'+t.count+' 件</b> ('+t.pct+'%) ｜ 平均耗时: <b>'+t.avgHours+'</b> ｜ 凭证率: <b>'+t.evidenceRate+'</b></span>' +
            '</div>' +
            '<div class="stats2-prog-bar"><div class="stats2-prog-fill" style="width:'+t.pct+'%;background:'+t.color+'"></div></div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("siren",17)+'<span>紧急程度与时限要求分布矩阵</span></div>' +
        '<span class="stats2-panel-tip">管理者监控：避免特急泛滥，确保基层SLA精准落地</span>' +
      '</div>' +
      '<div id="stats2-chart-urgency" class="stats2-chart-box"></div>' +
    '</div>' +
  '</div>' +
  '<div class="stats2-grid-2">' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("link",17)+'<span>舆情溯源链接与事实说明填报质量</span></div>' +
        '<span class="stats2-panel-tip">下发端输入要素标准化评估</span>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:12px;padding-top:4px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;background:#f8fafc;padding:12px 16px;border-radius:6px;border:1px solid #e2e8f0">' +
          '<div><b>有效原帖链接提供率</b><p style="font-size:12px;color:#64748b;margin:2px 0 0">附带精准网页/博文URL，一线直接点击核验</p></div>' +
          '<div style="font-size:20px;font-weight:800;color:#059669">89.4% <span style="font-size:12px;color:#64748b;font-weight:normal">(274/306)</span></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;background:#f8fafc;padding:12px 16px;border-radius:6px;border:1px solid #e2e8f0">' +
          '<div><b>舆情事实详实描述率 (>50字)</b><p style="font-size:12px;color:#64748b;margin:2px 0 0">说明字段充分描述事件经过、涉案账号及处置重点</p></div>' +
          '<div style="font-size:20px;font-weight:800;color:#059669">94.8% <span style="font-size:12px;color:#64748b;font-weight:normal">(290/306)</span></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;background:#f8fafc;padding:12px 16px;border-radius:6px;border:1px solid #e2e8f0">' +
          '<div><b>下发端线索佐证图片附带率</b><p style="font-size:12px;color:#64748b;margin:2px 0 0">下发人随单上传原始舆情截图或传播证据</p></div>' +
          '<div style="font-size:20px;font-weight:800;color:#0284c7">82.4% <span style="font-size:12px;color:#64748b;font-weight:normal">(252/306)</span></div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("share-2",17)+'<span>舆情信源渠道矩阵构成</span></div>' +
        '<span class="stats2-panel-tip">各信源渠道发令体量与平均处置时效</span>' +
      '</div>' +
      '<div style="padding-top:6px">' +
        stats2FormData.sources.map(function(s){
          return '<div class="stats2-progress-item">' +
            '<div class="stats2-prog-meta">' +
              '<span class="prog-name">'+ico(s.icon,14)+' '+s.name+'</span>' +
              '<span class="prog-stat"><b>'+s.count+' 条</b> ('+s.pct+'%)</span>' +
            '</div>' +
            '<div class="stats2-prog-bar"><div class="stats2-prog-fill" style="width:'+s.pct+'%;background:'+s.color+'"></div></div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderStats2ReceiptView(){
  return '<div class="stats2-grid-2">' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("check-circle-2",17)+'<span>处置措施与整改方式深度透视</span></div>' +
        '<span class="stats2-panel-tip">回执表单中选定的具体处置整改措施分布</span>' +
      '</div>' +
      '<div style="padding-top:4px">' +
        stats2FormData.measures.map(function(m){
          return '<div style="margin-bottom:12px;padding:10px 14px;background:#f8fafc;border-radius:6px;border-left:4px solid '+m.color+'">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">' +
              '<span style="font-weight:700;color:#1e293b;font-size:13.5px">'+m.name+'</span>' +
              '<span style="font-weight:800;color:'+m.color+';font-size:14px">'+m.count+' 件 ('+m.pct+'%)</span>' +
            '</div>' +
            '<div style="font-size:12px;color:#64748b;line-height:1.4">'+m.desc+'</div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("paperclip",17)+'<span>佐证材料凭证规范与合规分布</span></div>' +
        '<span class="stats2-panel-tip">回执附件（整改对比图+官方公函）质量达标监控</span>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:12px;padding-top:4px">' +
        stats2FormData.evidenceCoverage.map(function(ec){
          var pillClass = ec.status==="full"?"full":ec.status==="single"?"single":"none";
          return '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:12px 16px;box-shadow:0 1px 2px rgba(0,0,0,0.02)">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
              '<span style="font-weight:700;color:#1e293b;font-size:13.5px">'+ec.name+'</span>' +
              '<span class="evidence-pill '+pillClass+'">'+ec.tag+' ｜ '+ec.count+' 件 ('+ec.pct+')</span>' +
            '</div>' +
            '<div style="font-size:12px;color:#64748b">'+ec.desc+'</div>' +
          '</div>';
        }).join("") +
        '<div style="margin-top:6px;background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:10px 14px;display:flex;align-items:center;gap:10px">' +
          ico("alert-triangle",18) +
          '<div style="font-size:12px;color:#991b1b;line-height:1.5"><b>管理者提醒：</b>当前共有 <b>15 件</b> 办理回执未上传任何现场截图或公函凭证，已被列入督办质检待抽查清单。</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<div class="stats2-grid-2">' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("rotate-ccw",17)+'<span>回执复核审批与驳回主因分析</span></div>' +
        '<span class="stats2-panel-tip">累计驳回重办 19 次，主要退回修改原因构成</span>' +
      '</div>' +
      '<div style="padding-top:6px">' +
        stats2FormData.rejectReasons.map(function(rr){
          return '<div class="stats2-progress-item">' +
            '<div class="stats2-prog-meta">' +
              '<span class="prog-name">'+rr.reason+'</span>' +
              '<span class="prog-stat"><b>'+rr.count+' 次</b> ('+rr.pct+'%)</span>' +
            '</div>' +
            '<div class="stats2-prog-bar"><div class="stats2-prog-fill" style="width:'+rr.pct+'%;background:#ef4444"></div></div>' +
          '</div>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="stats2-panel">' +
      '<div class="stats2-panel-head">' +
        '<div class="stats2-panel-title">'+ico("git-fork",17)+'<span>流转异动与协同指标</span></div>' +
        '<span class="stats2-panel-tip">转办、退回与二次流转控制</span>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-top:4px">' +
        '<div style="background:#f8fafc;padding:14px;border-radius:6px;border:1px solid #e2e8f0;text-align:center">' +
          '<div style="font-size:12px;color:#64748b">权责不符申请转办率</div>' +
          '<div style="font-size:22px;font-weight:800;color:#d97706;margin:6px 0">3.6%</div>' +
          '<div style="font-size:11.5px;color:#94a3b8">累计 11 件跨单位转办</div>' +
        '</div>' +
        '<div style="background:#f8fafc;padding:14px;border-radius:6px;border:1px solid #e2e8f0;text-align:center">' +
          '<div style="font-size:12px;color:#64748b">回执首次审核通过率</div>' +
          '<div style="font-size:22px;font-weight:800;color:#059669;margin:6px 0">93.8%</div>' +
          '<div style="font-size:11.5px;color:#94a3b8">287 件一次过审归档</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderStats2RankingView(){
  return '<div class="stats2-panel">' +
    '<div class="stats2-panel-head">' +
      '<div class="stats2-panel-title">'+ico("award",18)+'<span>各对口承办单位表单履约与质效全量红黄榜</span></div>' +
      '<span class="stats2-panel-tip">考核维度：承办负荷、回执准时率、凭证齐全率、一次通过率与督导评级</span>' +
    '</div>' +
    '<div class="table-wrap" style="padding:0">' +
      '<table class="table">' +
        '<thead><tr><th>考核排名</th><th>承办对口单位 / 科室</th><th class="num">承办指令数</th><th class="num">办结回执准时率</th><th class="num">凭证佐证齐全率</th><th class="num">一次性过审率</th><th class="num">审核驳回次数</th><th>平均办结耗时</th><th>综合履约评级</th><th>督办动作</th></tr></thead>' +
        '<tbody>' +
          stats2FormData.rankings.map(function(r, idx){
            var bClass = r.grade==="S"?"rank-badge-s":r.grade==="A"?"rank-badge-a":r.grade==="B"?"rank-badge-b":"rank-badge-c";
            return '<tr>' +
              '<td><b>#'+(idx+1)+'</b></td>' +
              '<td><b>'+r.org+'</b></td>' +
              '<td class="num"><b>'+r.count+'</b> 件</td>' +
              '<td class="num"><span style="color:#059669;font-weight:700">'+r.finishRate+'</span></td>' +
              '<td class="num"><span style="color:#0284c7;font-weight:700">'+r.docRate+'</span></td>' +
              '<td class="num"><span style="color:#059669;font-weight:700">'+r.passRate+'</span></td>' +
              '<td class="num">'+(r.rejectCount>2?'<span style="color:#ef4444;font-weight:700">'+r.rejectCount+' 次</span>':r.rejectCount+' 次')+'</td>' +
              '<td>'+r.avgHandle+'</td>' +
              '<td><span class="rank-badge '+bClass+'">'+r.grade+' 级 · '+r.gradeText+'</span></td>' +
              '<td><button class="btn small '+(r.grade==="C"?"danger":"")+'" data-action="stats2-urge" data-org="'+escapeHtml(r.org)+'">'+ico("bell-ring",13)+(r.grade==="C"?"重点督办":"督导提醒")+'</button></td>' +
            '</tr>';
          }).join("") +
        '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>';
}

function renderStats2RecordsView(){
  var records = stats2FormData.records;
  var f = state.stats2Filter;
  if(f.template!=="全部") records = records.filter(function(r){ return r.template === f.template; });
  if(f.urgency!=="全部") records = records.filter(function(r){ return r.urgency === f.urgency; });
  if(f.source!=="全部") records = records.filter(function(r){ return r.source === f.source; });
  if(f.measure!=="全部") records = records.filter(function(r){ return r.measure === f.measure; });

  return '<div class="stats2-panel">' +
    '<div class="stats2-panel-head">' +
      '<div class="stats2-panel-title">'+ico("table-properties",18)+'<span>指令表单全要素穿透台账 (已筛选 '+records.length+' 条真实工单)</span></div>' +
      '<span class="stats2-panel-tip">管理者穿透核查：点击行末“查看表单数据”可调阅下发端与回执端完整字段键值对照</span>' +
    '</div>' +
    '<div class="table-wrap" style="padding:0">' +
      '<table class="table">' +
        '<thead><tr><th>工单编号</th><th>指令标题</th><th>业务模板</th><th>紧急程度</th><th>舆情信源</th><th>原帖URL</th><th>承办单位 / 责任人</th><th>填报处置整改措施</th><th>佐证凭证</th><th>处置耗时</th><th>审核结论</th><th>表单穿透操作</th></tr></thead>' +
        '<tbody>' +
          records.map(function(r){
            var uColor = r.urgency==="特急"?"#ef4444":r.urgency==="加急"?"#f59e0b":"#009893";
            var evPill = r.evidenceGrade==="双证齐全"?"full":r.evidenceGrade==="仅截图凭证"?"single":"none";
            return '<tr>' +
              '<td><span style="font-family:monospace;font-weight:700;color:#64748b">'+r.id.slice(-6)+'</span></td>' +
              '<td><span style="font-weight:600;color:#0f172a" title="'+escapeHtml(r.title)+'">'+escapeHtml(r.title.slice(0, 18))+'...</span></td>' +
              '<td><span style="font-size:12px;color:#475569">'+r.template.replace("模板","")+'</span></td>' +
              '<td><span style="color:'+uColor+';font-weight:700">'+r.urgency+'</span></td>' +
              '<td><span style="font-size:12px;color:#334155">'+r.source+'</span></td>' +
              '<td>'+(r.url?'<a href="'+r.url+'" target="_blank" class="link" style="font-size:12px">'+ico("external-link",12)+' 链接</a>':'<span style="color:#94a3b8">-</span>')+'</td>' +
              '<td><div style="font-size:12px"><b>'+r.receiverOrg+'</b><br><span style="color:#64748b">'+r.receiver+'</span></div></td>' +
              '<td><span style="font-size:12px;color:#0f172a;font-weight:600">'+r.measure+'</span></td>' +
              '<td><span class="evidence-pill '+evPill+'">'+r.evidenceGrade+' ('+r.imagesCount+'图/'+r.filesCount+'函)</span></td>' +
              '<td><span style="font-size:12px">'+r.handleDuration+'</span></td>' +
              '<td>'+(r.auditResult==="一次性通过"?'<span style="color:#059669;font-weight:700">✓ 一次通过</span>':'<span style="color:#ef4444;font-weight:700">✕ 驳回重办</span>')+'</td>' +
              '<td><button class="btn small primary" data-action="stats2-view-form" data-record-id="'+r.id+'">'+ico("eye",13)+' 查看表单数据</button></td>' +
            '</tr>';
          }).join("") +
        '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>';
}

function renderStats2(){
  var topAction = '<div class="head-actions" style="display:flex;gap:10px">' +
    '<button class="btn" style="background:#009893;color:#fff;border-color:#009893;font-weight:700" data-action="stats2-export">' +
      ico("file-spreadsheet",15) + '导出当前全部数据' +
    '</button>' +
  '</div>';

  return '<div class="page">' +
    pageHead("统计管理", "深度量化指令下发输入字段与回执填报要素，提供面向管理决策层的全链路闭环质效洞察", topAction) +
    renderStats2Filters() +
    renderStats2Kpis() +
    renderStats2DynamicTrendCard() +
    renderStats2MidSection() +
    renderStats2ReasonsSection() +
    renderStats2OrgSection() +
    footer() +
  '</div>';
}

function drawStats2Charts(){
  if(!window.echarts) return;
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var d = statsDynamicData[curPeriod];

  // 1. 指令下发的动态趋势图 (占比100%，无小字，右上角无数量)
  var trendEl = document.getElementById("stats2-chart-trend");
  if(trendEl){
    var trendChart = echarts.getInstanceByDom(trendEl) || echarts.init(trendEl);
    trendChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: { color: "#999" }
        },
        formatter: function(params){
          var res = '<div style="font-weight:700;margin-bottom:6px">' + params[0].name + '</div>';
          params.forEach(function(item){
            var unit = item.seriesName.indexOf("率") !== -1 ? "%" : " 件";
            res += '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:12.5px;margin:2px 0">' +
              '<span>' + item.marker + item.seriesName + '</span>' +
              '<b style="font-weight:700">' + item.value + unit + '</b>' +
            '</div>';
          });
          return res;
        }
      },
      legend: {
        show: false,
        selected: { "下发总量": true, "归档总量": true, "一次审核通过率": true }
      },
      grid: {
        left: "16px",
        right: "16px",
        bottom: "12px",
        top: "32px",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        boundaryGap: false,
        data: d.dates,
        axisTick: { alignWithLabel: true },
        axisLine: { lineStyle: { color: "#cbd5e1" } },
        axisLabel: { color: "#64748b", fontSize: 12 }
      }],
      yAxis: [
        {
          type: "value",
          name: "总量 (件)",
          nameTextStyle: { color: "#64748b", fontSize: 11.5, padding: [0, 0, 4, 0] },
          axisLabel: { color: "#64748b", fontSize: 11.5, margin: 10 },
          splitLine: { lineStyle: { type: "dashed", color: "#f1f5f9" } }
        },
        {
          type: "value",
          name: "通过率 (%)",
          nameTextStyle: { color: "#64748b", fontSize: 11.5, padding: [0, 0, 4, 0] },
          min: 60,
          max: 100,
          axisLabel: { color: "#64748b", fontSize: 11.5, formatter: "{value}%", margin: 10 },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "下发总量",
          type: "line",
          smooth: false,
          showSymbol: true,
          symbolSize: 6,
          itemStyle: { color: "#009893" },
          lineStyle: { width: 2.5, color: "#009893" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(0, 152, 147, 0.22)" },
              { offset: 1, color: "rgba(0, 152, 147, 0.02)" }
            ])
          },
          data: d.trend.sent
        },
        {
          name: "归档总量",
          type: "line",
          smooth: false,
          showSymbol: true,
          symbolSize: 6,
          itemStyle: { color: "#10b981" },
          lineStyle: { width: 2.5, color: "#10b981" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(16, 185, 129, 0.18)" },
              { offset: 1, color: "rgba(16, 185, 129, 0.02)" }
            ])
          },
          data: d.trend.archived
        },
        {
          name: "一次审核通过率",
          type: "line",
          yAxisIndex: 1,
          smooth: false,
          showSymbol: true,
          symbolSize: 7,
          itemStyle: { color: "#f59e0b" },
          lineStyle: { width: 2.5, color: "#f59e0b" },
          data: d.trend.passRate
        }
      ]
    });
  }

  // 2. 舆情来源分布环形饼图 (优化UI，带有内环数值居中展示)
  var srcEl = document.getElementById("stats2-chart-source");
  if(srcEl){
    var srcChart = echarts.getInstanceByDom(srcEl) || echarts.init(srcEl);
    srcChart.setOption({
      title: {
        text: d.kpis.total + '件',
        subtext: '信源总量',
        left: '49%',
        top: '41%',
        textAlign: 'center',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#0f172a'
        },
        subtextStyle: {
          fontSize: 11,
          color: '#64748b'
        }
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: <b>{c} 条</b> ({d}%)"
      },
      color: d.sources.map(function(s){ return s.color; }),
      series: [{
        name: "舆情信源渠道",
        type: "pie",
        radius: ["54%", "78%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: "#ffffff",
          borderWidth: 2
        },
        label: { show: false },
        emphasis: {
          scale: true,
          scaleSize: 6,
          label: {
            show: false
          }
        },
        data: d.sources.map(function(s){
          return { name: s.name, value: s.count };
        })
      }]
    });
  }

  // 3. 指令模板使用情况 (双柱状：柱状显示下发数，柱状显示平均处置耗时，按指令分类，极简配色与顶部同行图例)
  var tplMixedEl = document.getElementById("stats2-chart-template-mixed");
  if(tplMixedEl){
    var tplChart = echarts.getInstanceByDom(tplMixedEl) || echarts.init(tplMixedEl);
    var tpls = d.templates;
    tplChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        formatter: function(params){
          var res = '<div style="font-weight:700;margin-bottom:6px">' + params[0].name + '类指令</div>';
          params.forEach(function(item){
            var unit = item.seriesName === "平均处置耗时" ? " 小时" : " 件";
            res += '<div style="display:flex;align-items:center;justify-content:space-between;gap:16px;font-size:12px;margin:2px 0">' +
              '<span>' + item.marker + item.seriesName + '</span>' +
              '<b style="font-weight:700">' + item.value + unit + '</b>' +
            '</div>';
          });
          return res;
        }
      },
      legend: {
        show: false
      },
      grid: {
        left: "2%",
        right: "3%",
        bottom: "8%",
        top: "14%",
        containLabel: true
      },
      xAxis: [{
        type: "category",
        data: ["舆情处置", "错误表述"],
        axisTick: { alignWithLabel: true },
        axisLine: { lineStyle: { color: "#cbd5e1" } },
        axisLabel: { color: "#334155", fontSize: 13, fontWeight: "600" }
      }],
      yAxis: [
        {
          type: "value",
          name: "下发数 (件)",
          nameTextStyle: { color: "#64748b", fontSize: 11.5, padding: [0, 0, 4, 0] },
          axisLabel: { color: "#64748b", fontSize: 11.5, margin: 8 },
          max: function(v){ return Math.ceil(v.max * 1.25); },
          splitLine: { lineStyle: { type: "dashed", color: "#f1f5f9" } }
        },
        {
          type: "value",
          name: "平均耗时 (h)",
          nameTextStyle: { color: "#64748b", fontSize: 11.5, padding: [0, 0, 4, 0] },
          axisLabel: { color: "#64748b", fontSize: 11.5, formatter: "{value}h", margin: 8 },
          max: function(v){ return +(v.max * 1.35).toFixed(1); },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "下发数",
          type: "bar",
          barWidth: 26,
          barGap: "30%",
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: "#009893"
          },
          label: {
            show: true,
            position: "top",
            distance: 6,
            formatter: "{c} 件",
            fontWeight: "600",
            fontSize: 12,
            color: "#007874"
          },
          data: [tpls.opinionTotal, tpls.errorTotal]
        },
        {
          name: "平均处置耗时",
          type: "bar",
          yAxisIndex: 1,
          barWidth: 26,
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: "#e2e8f0"
          },
          label: {
            show: true,
            position: "top",
            distance: 6,
            formatter: "{c}h",
            fontWeight: "600",
            fontSize: 12,
            color: "#475569"
          },
          data: [tpls.opinionAvgHours, tpls.errorAvgHours]
        }
      ]
    });
  }

  window.addEventListener("resize", function(){
    if(trendEl && echarts.getInstanceByDom(trendEl)) echarts.getInstanceByDom(trendEl).resize();
    if(srcEl && echarts.getInstanceByDom(srcEl)) echarts.getInstanceByDom(srcEl).resize();
    if(tplMixedEl && echarts.getInstanceByDom(tplMixedEl)) echarts.getInstanceByDom(tplMixedEl).resize();
  });
}

function renderStats2FormDetailModal(){
  var r = state.stats2SelectedRecord || stats2FormData.records[0];
  var uColor = r.urgency==="特急"?"#ef4444":r.urgency==="加急"?"#f59e0b":"#009893";
  var body = '<div class="stats2-detail-modal-inner" style="max-height:75vh;overflow-y:auto;padding-right:6px">' +
    '<div class="stats2-field-section">' +
      '<div class="stats2-section-head">'+ico("file-input",16)+'<span>一、指令下发端 · 表单录入要素</span><span style="margin-left:auto;font-size:12px;font-weight:normal;color:#64748b">工单编号: <b>'+r.id+'</b></span></div>' +
      '<div class="stats2-kv-grid">' +
        '<span class="stats2-kv-label">指令标题:</span><span class="stats2-kv-value" style="font-weight:700;color:#0f172a">'+escapeHtml(r.title)+'</span>' +
        '<span class="stats2-kv-label">业务模板:</span><span class="stats2-kv-value">'+escapeHtml(r.template)+'</span>' +
        '<span class="stats2-kv-label">紧急程度:</span><span class="stats2-kv-value"><b style="color:'+uColor+'">'+r.urgency+'</b></span>' +
        '<span class="stats2-kv-label">完成时限:</span><span class="stats2-kv-value">'+r.deadlineReq+'</span>' +
        '<span class="stats2-kv-label">舆情来源:</span><span class="stats2-kv-value"><b>'+r.source+'</b></span>' +
        '<span class="stats2-kv-label">原信息链接:</span><span class="stats2-kv-value">'+(r.url?'<a href="'+r.url+'" target="_blank" class="link">'+r.url+'</a>':'无')+'</span>' +
        '<span class="stats2-kv-label">下发人/单位:</span><span class="stats2-kv-value">'+r.senderOrg+' · '+r.sender+'</span>' +
        '<span class="stats2-kv-label">舆情说明正文:</span><span class="stats2-kv-value" style="grid-column:2/5;background:#ffffff;padding:8px 12px;border-radius:4px;border:1px solid #e2e8f0;line-height:1.5">'+escapeHtml(r.description)+'</span>' +
      '</div>' +
    '</div>' +
    '<div class="stats2-field-section">' +
      '<div class="stats2-section-head">'+ico("clipboard-check",16)+'<span>二、现场承办回执端 · 表单填报要素</span><span style="margin-left:auto;font-size:12px;font-weight:normal;color:#64748b">承办责任人: <b>'+r.receiverOrg+' · '+r.receiver+'</b></span></div>' +
      '<div class="stats2-kv-grid">' +
        '<span class="stats2-kv-label">处置总耗时:</span><span class="stats2-kv-value"><b style="color:#059669">'+r.handleDuration+'</b></span>' +
        '<span class="stats2-kv-label">整改处置手段:</span><span class="stats2-kv-value" style="grid-column:2/5"><span class="tag" style="background:#f0fdf4;color:#166534;font-size:13px;padding:3px 10px;font-weight:700">'+r.measure+'</span></span>' +
        '<span class="stats2-kv-label">处置结果结论:</span><span class="stats2-kv-value" style="grid-column:2/5;background:#ffffff;padding:8px 12px;border-radius:4px;border:1px solid #e2e8f0;line-height:1.5">'+escapeHtml(r.receiptNote)+'</span>' +
        '<span class="stats2-kv-label">佐证照片数量:</span><span class="stats2-kv-value"><b>'+r.imagesCount+' 张</b> (整改前后现场对比截图)</span>' +
        '<span class="stats2-kv-label">结案公函附件:</span><span class="stats2-kv-value">'+(r.filesList.length?r.filesList.map(function(f){return '<span class="link" style="display:inline-flex;align-items:center;gap:3px;margin-right:8px">'+ico("file-text",13)+' '+f+'</span>';}).join(""): '无')+'</span>' +
      '</div>' +
    '</div>' +
    '<div class="stats2-field-section" style="margin-bottom:0">' +
      '<div class="stats2-section-head">'+ico("shield-check",16)+'<span>三、领导复核审批与归档结论</span></div>' +
      '<div class="stats2-kv-grid">' +
        '<span class="stats2-kv-label">审核结果:</span><span class="stats2-kv-value">'+(r.auditResult==="一次性通过"?'<span style="color:#059669;font-weight:700">✓ 一次性审核通过归档</span>':'<span style="color:#ef4444;font-weight:700">✕ 审核驳回退回整改</span>')+'</span>' +
        '<span class="stats2-kv-label">审批领导意见:</span><span class="stats2-kv-value" style="color:#334155">'+escapeHtml(r.auditComment)+'</span>' +
      '</div>' +
    '</div>' +
  '</div>';
  return modalFrame("表单要素全链路穿透卡 · " + r.id, body, "stats2-detail-modal", false);
}

function renderStats2ReasonDetailModal(){
  var curPeriod = state.stats2Filter.timePeriod || "近30天";
  if(!statsDynamicData[curPeriod]) curPeriod = "近30天";
  var r = statsDynamicData[curPeriod].reasons;
  var reasonType = state.stats2SelectedReasonType || "transfer";
  var title = state.stats2SelectedReasonTitle || (reasonType==="transfer"?"转办原因统计分析":reasonType==="coop"?"协办原因统计分析":"驳回原因统计分析");

  var color = reasonType==="transfer" ? "#2563eb" : reasonType==="coop" ? "#7c3aed" : "#dc2626";
  var dataObj = (r && r[reasonType]) ? r[reasonType] : r.transfer;
  var items = (dataObj && dataObj.items) ? dataObj.items : [];

  var tableRows = items.map(function(item, idx){
    return '<tr>' +
      '<td style="text-align:center;font-weight:700;color:' + (idx < 3 ? color : '#64748b') + '">#' + (idx + 1) + '</td>' +
      '<td><span style="font-weight:600;color:#0f172a">' + escapeHtml(item.name) + '</span></td>' +
      '<td style="text-align:right"><b style="font-size:13.5px">' + item.count + '</b> 件</td>' +
      '<td style="text-align:right"><b style="color:' + color + ';font-weight:700">' + item.pct + '</b></td>' +
      '<td>' +
        '<div style="height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden;min-width:140px">' +
          '<div style="height:100%;width:' + item.pct + ';background:' + color + ';border-radius:4px"></div>' +
        '</div>' +
      '</td>' +
    '</tr>';
  }).join("");

  var body = '<div class="stats2-reason-modal-inner" style="max-height:72vh;overflow-y:auto;padding-right:4px">' +
    '<div class="stats2-modal-summary-bar" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 18px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center">' +
      '<div style="display:flex;align-items:center;gap:14px">' +
        '<span style="font-size:13px;color:#475569">当前统计区间：<b style="color:#0f172a">' + curPeriod + '</b></span>' +
        '<span style="color:#cbd5e1">｜</span>' +
        '<span style="font-size:13px;color:#475569">全量原因细目：<b style="color:#0f172a">' + items.length + ' 项</b></span>' +
      '</div>' +
      '<span class="tag" style="background:' + color + '15;color:' + color + ';font-weight:700;font-size:13px;padding:4px 12px;border-radius:6px">累计 ' + dataObj.total + ' 件</span>' +
    '</div>' +
    '<div class="table-wrap" style="padding:0;max-height:45vh;overflow-y:auto;border:1px solid #e2e8f0;border-radius:8px">' +
      '<table class="table" style="margin:0">' +
        '<thead>' +
          '<tr>' +
            '<th style="width:64px;text-align:center">排序</th>' +
            '<th>原因具体分类及情境说明</th>' +
            '<th style="text-align:right;width:110px">发生频次</th>' +
            '<th style="text-align:right;width:90px">占比</th>' +
            '<th style="width:160px">占比可视化</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' + tableRows + '</tbody>' +
      '</table>' +
    '</div>' +
    '<div style="margin-top:14px;padding:12px 16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;display:flex;align-items:center;gap:8px;font-size:12.5px;color:#166534">' +
      ico("shield-check", 16) +
      '<span>' + dataObj.footer + '</span>' +
    '</div>' +
  '</div>';

  return modalFrame(title + " · 全量统计明细", body, "stats2-reason-modal-frame", false);
}

function exportStats2FormReport(){
  var activeTab = state.stats2OrgTab || "ext-org";
  var tabTitleMap = {
    "ext-org": "外部组织节点数据统计",
    "int-org": "机构组织数据统计",
    "ext-user": "外部用户数据统计",
    "int-user": "机构用户使用数据"
  };
  var tabTitle = tabTitleMap[activeTab] || "组织数据统计";
  var headers = [];
  var rows = [];

  if(activeTab === "ext-org"){
    var orgs = stats2FormData.externalOrgs || [];
    headers = ["序号", "组织节点", "节点层级", "承办总量 (件)", "办结归档量 (件)", "一次性审核通过率", "限时完成率", "平均办结耗时"];
    orgs.forEach(function(r, idx){
      rows.push([
        (idx + 1),
        r.org,
        "一级主管节点",
        r.count,
        r.archivedCount,
        r.passRate,
        r.onTimeRate,
        r.avgHandle
      ]);
      if(r.children && r.children.length){
        r.children.forEach(function(sub, sIdx){
          rows.push([
            (idx + 1) + "-" + (sIdx + 1),
            "  └─ " + sub.org,
            "二级承办专班",
            sub.count,
            sub.archivedCount,
            sub.passRate,
            sub.onTimeRate,
            sub.avgHandle
          ]);
        });
      }
    });
  } else if(activeTab === "int-org"){
    var intOrgs = stats2FormData.internalOrgs || [];
    headers = ["序号", "机构处室", "层级属性", "承办总量 (件)", "办结归档量 (件)", "一次性审核通过率", "限时完成率", "平均办结耗时"];
    intOrgs.forEach(function(r, idx){
      rows.push([
        (idx + 1),
        r.org,
        "内部职能处室",
        r.count,
        r.archivedCount,
        r.passRate,
        r.onTimeRate,
        r.avgHandle
      ]);
      if(r.children && r.children.length){
        r.children.forEach(function(sub, sIdx){
          rows.push([
            (idx + 1) + "-" + (sIdx + 1),
            "  └─ " + sub.org,
            "处室专班/小组",
            sub.count,
            sub.archivedCount,
            sub.passRate,
            sub.onTimeRate,
            sub.avgHandle
          ]);
        });
      }
    });
  } else if(activeTab === "ext-user"){
    var extUsers = stats2FormData.externalUsers || [];
    headers = ["序号", "用户姓名", "角色职务", "所属外部单位", "经办总量 (件)", "办结归档量 (件)", "一次性审核通过率", "限时完成率", "平均办结耗时", "最近活跃"];
    extUsers.forEach(function(u, idx){
      rows.push([
        (idx + 1),
        u.name,
        u.role,
        u.org,
        u.count,
        u.archivedCount,
        u.passRate,
        u.onTimeRate,
        u.avgHandle,
        u.lastActive
      ]);
    });
  } else if(activeTab === "int-user"){
    var intUsers = stats2FormData.internalUsers || [];
    headers = ["序号", "用户姓名", "岗位职责", "所属机构处室", "调度/处理总量 (件)", "办结归档量 (件)", "一次性审核通过率", "限时完成率", "平均办结耗时", "当前状态"];
    intUsers.forEach(function(u, idx){
      rows.push([
        (idx + 1),
        u.name,
        u.role,
        u.org,
        u.count,
        u.archivedCount,
        u.passRate,
        u.onTimeRate,
        u.avgHandle,
        u.lastActive
      ]);
    });
  }

  var rowsHtml = rows.map(function(row){
    return "<tr>" + row.map(function(v){ return "<td>" + escapeHtml(String(v)) + "</td>"; }).join("") + "</tr>";
  }).join("");
  var html = '<html><head><meta charset="UTF-8"></head><body><table border="1"><thead><tr>' + headers.map(function(h){ return "<th>" + h + "</th>"; }).join("") + '</tr></thead><tbody>' + rowsHtml + '</tbody></table></body></html>';
  var blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = tabTitle + "_20260914.xls";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 500);
  showToast("✓ 已成功导出【" + tabTitle + "】报表 (Excel)");
}

var extGroupTree = [
  { id: "g-edu", name: "教育厅", children: [
    { id: "g-edu-he", name: "高教组", children: [] }
  ]},
  { id: "g-culture", name: "文旅厅", children: [] },
  { id: "g-build", name: "住建厅", children: [
    { id: "g-build-city", name: "市政组", children: [] }
  ]},
  { id: "g-kh", name: "高雄市网信办", children: [] },
  { id: "g-tp", name: "台北市网信办", children: [] }
];
var extUngroupedId = "g-ungrouped";
var extContacts = [
  { id: "ec-1", name: "张建国", phone: "13812340001", wechatNick: "建国在路上", wechatId: "zhangjg001", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "ec-2", name: "李婉清", phone: "13987654321", wechatNick: "婉清", wechatId: "liwanqing88", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "ec-3", name: "王浩", phone: "13700001111", wechatNick: "HaoWang", wechatId: "whao2024", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/men/41.jpg" },
  { id: "ec-4", name: "赵敏", phone: "13655556666", wechatNick: "敏敏", wechatId: "zhaomin66", groupId: "g-edu-he", status: "normal", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: "ec-5", name: "陈默", phone: "13522223333", wechatNick: "沉默的人", wechatId: "chenmo_ok", groupId: "g-culture", status: "disabled", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: "ec-6", name: "郭总", phone: "13900002201", wechatNick: "郭工", wechatId: "guozong201", groupId: "g-build", status: "normal", avatar: "https://randomuser.me/api/portraits/men/12.jpg" },
  { id: "ec-7", name: "周宁", phone: "15811112222", wechatNick: "Ning", wechatId: "zhouning158", groupId: "g-build", status: "normal", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: "ec-8", name: "吴芳", phone: "18677778888", wechatNick: "芳芳", wechatId: "wufang186", groupId: "g-build-city", status: "normal", avatar: "https://randomuser.me/api/portraits/women/21.jpg" },
  { id: "ec-9", name: "林峰", phone: "13344445555", wechatNick: "峰哥", wechatId: "linfeng133", groupId: extUngroupedId, status: "normal", avatar: "https://randomuser.me/api/portraits/men/76.jpg" },
  { id: "ec-10", name: "黄晓", phone: "17788889999", wechatNick: "小晓", wechatId: "huangxiao99", groupId: "g-tp", status: "disabled", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: "ec-11", name: "孙立", phone: "13820001101", wechatNick: "立哥", wechatId: "sunli1101", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/men/14.jpg" },
  { id: "ec-12", name: "马晓燕", phone: "13920001102", wechatNick: "燕子", wechatId: "maxy1102", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/women/14.jpg" },
  { id: "ec-13", name: "何俊", phone: "13720001103", wechatNick: "JunHe", wechatId: "hejun1103", groupId: "g-edu-he", status: "normal", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: "ec-14", name: "罗倩", phone: "13620001104", wechatNick: "倩倩", wechatId: "luoqian04", groupId: "g-edu-he", status: "normal", avatar: "https://randomuser.me/api/portraits/women/15.jpg" },
  { id: "ec-15", name: "高远", phone: "13520001105", wechatNick: "远方", wechatId: "gaoyuan05", groupId: "g-culture", status: "normal", avatar: "https://randomuser.me/api/portraits/men/16.jpg" },
  { id: "ec-16", name: "韩雪", phone: "15820001106", wechatNick: "小雪", wechatId: "hanxue06", groupId: "g-culture", status: "normal", avatar: "https://randomuser.me/api/portraits/women/16.jpg" },
  { id: "ec-17", name: "冯涛", phone: "18620001107", wechatNick: "涛哥", wechatId: "fengtao07", groupId: "g-build", status: "normal", avatar: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: "ec-18", name: "邓丽", phone: "13320001108", wechatNick: "Lili", wechatId: "dengli08", groupId: "g-build", status: "disabled", avatar: "https://randomuser.me/api/portraits/women/17.jpg" },
  { id: "ec-19", name: "曹阳", phone: "17720001109", wechatNick: "阳光", wechatId: "caoyang09", groupId: "g-build-city", status: "normal", avatar: "https://randomuser.me/api/portraits/men/18.jpg" },
  { id: "ec-20", name: "彭佳", phone: "15120001110", wechatNick: "佳佳", wechatId: "pengjia10", groupId: "g-build-city", status: "normal", avatar: "https://randomuser.me/api/portraits/women/18.jpg" },
  { id: "ec-21", name: "蒋波", phone: "15220001111", wechatNick: "波波", wechatId: "jiangbo11", groupId: "g-kh", status: "normal", avatar: "https://randomuser.me/api/portraits/men/19.jpg" },
  { id: "ec-22", name: "蔡欣", phone: "15320001112", wechatNick: "欣欣", wechatId: "caixin12", groupId: "g-kh", status: "normal", avatar: "https://randomuser.me/api/portraits/women/19.jpg" },
  { id: "ec-23", name: "丁磊", phone: "15520001113", wechatNick: "石头", wechatId: "dinglei13", groupId: "g-tp", status: "normal", avatar: "https://randomuser.me/api/portraits/men/20.jpg" },
  { id: "ec-24", name: "沈悦", phone: "15620001114", wechatNick: "悦悦", wechatId: "shenyue14", groupId: "g-tp", status: "normal", avatar: "https://randomuser.me/api/portraits/women/20.jpg" },
  { id: "ec-25", name: "吕强", phone: "15720001115", wechatNick: "强子", wechatId: "lvqiang15", groupId: extUngroupedId, status: "disabled", avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
  { id: "ec-26", name: "苏曼", phone: "15920001116", wechatNick: "曼曼", wechatId: "suman16", groupId: extUngroupedId, status: "normal", avatar: "https://randomuser.me/api/portraits/women/23.jpg" },
  { id: "ec-27", name: "魏晨", phone: "16620001117", wechatNick: "晨曦", wechatId: "weichen17", groupId: "g-edu", status: "normal", avatar: "https://randomuser.me/api/portraits/men/24.jpg" },
  { id: "ec-28", name: "姚静", phone: "18820001118", wechatNick: "静静", wechatId: "yaojing18", groupId: "g-culture", status: "normal", avatar: "https://randomuser.me/api/portraits/women/24.jpg" },
  { id: "ec-29", name: "潘飞", phone: "18920001119", wechatNick: "飞翔", wechatId: "panfei19", groupId: "g-kh", status: "disabled", avatar: "https://randomuser.me/api/portraits/men/25.jpg" },
  { id: "ec-30", name: "唐薇", phone: "13120001120", wechatNick: "薇薇", wechatId: "tangwei20", groupId: "g-tp", status: "normal", avatar: "https://randomuser.me/api/portraits/women/25.jpg" }
];
function extStatusLabel(status){
  return status === "disabled" ? "停用" : "正常";
}
function getExtStatusPick(){
  var p = state.extStatusPick;
  if(!Array.isArray(p) || !p.length) return ["normal", "disabled"];
  return p.filter(function(s){ return s === "normal" || s === "disabled"; });
}
function isExtStatusAll(pick){
  pick = pick || getExtStatusPick();
  return pick.indexOf("normal") > -1 && pick.indexOf("disabled") > -1;
}
function selectedExtIds(){
  var sel = state.extSelected || {};
  return Object.keys(sel).filter(function(id){ return !!sel[id]; });
}
function extCheckHtml(on, action, extra){
  return '<button type="button" class="ext-check'+(on?" on":"")+'" data-action="'+action+'" '+(extra||"")+' aria-checked="'+(on?"true":"false")+'">'+(on?ico("check",11):"")+'</button>';
}
function walkExtGroups(nodes, fn, parent){
  (nodes || []).forEach(function(n){
    fn(n, parent);
    if(n.children && n.children.length) walkExtGroups(n.children, fn, n);
  });
}
function findExtGroup(id, nodes){
  var found = null;
  walkExtGroups(nodes || extGroupTree, function(n){ if(n.id === id) found = n; });
  return found;
}
function findExtGroupParent(id, nodes, parent){
  var list = nodes || extGroupTree;
  for(var i=0;i<list.length;i++){
    if(list[i].id === id) return parent || null;
    if(list[i].children && list[i].children.length){
      var p = findExtGroupParent(id, list[i].children, list[i]);
      if(p !== undefined && p !== false) return p;
    }
  }
  return false;
}
function collectExtGroupIds(id){
  var ids = [id];
  var node = findExtGroup(id);
  if(node && node.children){
    walkExtGroups(node.children, function(n){ ids.push(n.id); });
  }
  return ids;
}
function flattenExtGroups(){
  var rows = [];
  walkExtGroups(extGroupTree, function(n, parent){
    rows.push({ id: n.id, name: n.name, parentId: parent ? parent.id : null });
  });
  rows.push({ id: extUngroupedId, name: "未分组", parentId: null });
  return rows;
}
function countExtContactsInGroup(id, includeChildren){
  if(id === "all") return extContacts.length;
  var ids = includeChildren ? collectExtGroupIds(id) : [id];
  return extContacts.filter(function(c){ return ids.indexOf(c.groupId) > -1; }).length;
}
function maskPhone(phone, revealed){
  var p = String(phone || "");
  if(revealed || p.length < 7) return p;
  return p.slice(0, 3) + "****" + p.slice(-4);
}
function maskWxId(wx, revealed){
  var p = String(wx || "");
  if(revealed || p.length < 5) return p;
  return p.slice(0, 2) + "****" + p.slice(-2);
}
function extAvatarHtml(c){
  var ch = escapeHtml((c.name || "?").slice(0, 1));
  var src = c.avatar ? '<img src="'+escapeHtml(c.avatar)+'" alt="" onerror="this.style.display=\'none\'">' : "";
  return '<span class="ext-avatar">'+src+'<span class="ext-avatar-fallback">'+ch+'</span></span>';
}
function commitExtGroupName(parentOrId, name, isRename){
  name = String(name || "").trim();
  if(!name){
    showToast("请输入组织名称");
    return;
  }
  if(name.length > 20){
    showToast("组织名称不能超过20个字");
    return;
  }
  if(isRename){
    var node = findExtGroup(parentOrId);
    if(node){
      node.name = name;
      showToast("已重命名组织");
    }
    state.extRenamingId = null;
  } else {
    var newNode = { id: "g-" + Date.now().toString(36), name: name, children: [] };
    if(!parentOrId){
      extGroupTree.push(newNode);
    } else {
      var parent = findExtGroup(parentOrId);
      if(parent){
        if(!parent.children) parent.children = [];
        parent.children.push(newNode);
      } else {
        extGroupTree.push(newNode);
      }
    }
    state.extAddingParentId = null;
    showToast("已新增组织");
  }
  render();
}
function bindExtGroupInlineEditors(){
  var addInp = document.getElementById("ext-group-add-input");
  if(addInp){
    addInp.focus();
    addInp.onkeydown = function(ev){
      if(ev.key === "Enter"){
        ev.preventDefault();
        commitExtGroupName(addInp.dataset.parentId || "", addInp.value, false);
      } else if(ev.key === "Escape"){
        state.extAddingParentId = null;
        render();
      }
    };
  }
  var renameInp = document.getElementById("ext-group-rename-input");
  if(renameInp){
    renameInp.focus();
    renameInp.select();
    renameInp.onkeydown = function(ev){
      if(ev.key === "Enter"){
        ev.preventDefault();
        commitExtGroupName(renameInp.dataset.groupId, renameInp.value, true);
      } else if(ev.key === "Escape"){
        state.extRenamingId = null;
        render();
      }
    };
  }
}
function renderExtAddInput(parentId){
  return '<div class="ext-tree-addbox">' +
    '<input id="ext-group-add-input" class="ext-tree-input" data-parent-id="'+escapeHtml(parentId||"")+'" maxlength="20" placeholder="输入组织名称，回车保存">' +
    '<button type="button" class="ext-tree-icon-btn ok" data-action="ext-commit-add" data-parent-id="'+escapeHtml(parentId||"")+'" title="保存">'+ico("check",12)+'</button>' +
    '<button type="button" class="ext-tree-icon-btn" data-action="ext-cancel-add" title="取消">'+ico("x",12)+'</button>' +
  '</div>';
}
function renderExtGroupNode(node, depth){
  var count = countExtContactsInGroup(node.id, true);
  var selected = state.extGroupId === node.id;
  var isAdding = state.extAddingParentId === node.id;
  var isRenaming = state.extRenamingId === node.id;
  var isParent = depth === 0;
  var nameInner = isRenaming
    ? '<input id="ext-group-rename-input" class="ext-tree-input" data-group-id="'+node.id+'" value="'+escapeHtml(node.name)+'" maxlength="20">'
    : '<span class="ext-tree-name">'+escapeHtml(node.name)+'</span><span class="ext-tree-count">'+count+'</span>';
  var actions = '<span class="ext-tree-actions">' +
    '<button type="button" class="ext-tree-icon-btn" data-action="ext-add-child" data-parent-id="'+node.id+'" title="添加子组织">'+ico("plus",12)+'</button>' +
    (isParent ? "" :
      '<button type="button" class="ext-tree-icon-btn" data-action="ext-rename-group" data-group-id="'+node.id+'" title="重命名">'+ico("pencil",11)+'</button>' +
      '<button type="button" class="ext-tree-icon-btn danger" data-action="ext-delete-group" data-group-id="'+node.id+'" title="删除">'+ico("trash-2",11)+'</button>') +
  '</span>';
  var lead = isParent
    ? '<span class="ext-tree-lead">'+ico("building-2",13)+'</span>'
    : '<span class="ext-tree-lead child">'+ico("chevron-down",11)+'</span>';
  var childrenHtml = "";
  if(node.children && node.children.length){
    childrenHtml = node.children.map(function(ch){ return renderExtGroupNode(ch, depth + 1); }).join("");
  }
  var rowAction = isParent
    ? 'data-action="ext-add-child" data-parent-id="'+node.id+'"'
    : 'data-action="ext-select-group" data-group-id="'+node.id+'"';
  return '<div class="ext-tree-block">' +
    '<div class="ext-tree-row '+(isParent?"is-parent":"is-child")+(selected?" selected":"")+'" '+rowAction+'>' +
      '<div class="ext-tree-select" data-action="ext-select-group" data-group-id="'+node.id+'">' + lead + '<div class="ext-tree-main">'+nameInner+'</div></div>' + actions +
    '</div>' +
    (isAdding ? renderExtAddInput(node.id) : "") +
    (childrenHtml ? '<div class="ext-tree-children">'+childrenHtml+'</div>' : "") +
  '</div>';
}
function renderExtGroupTree(){
  var allCount = extContacts.length;
  var unCount = countExtContactsInGroup(extUngroupedId, false);
  var allSelected = !state.extGroupId || state.extGroupId === "all";
  var unSelected = state.extGroupId === extUngroupedId;
  var rootAdd = state.extAddingParentId === "__root__" ? renderExtAddInput("") : "";
  return '<aside class="card side-card ext-side">' +
    '<div class="side-title"><span>'+ico("building-2",15)+'<span>联系人分组</span></span>' +
      '<button type="button" class="ext-tree-icon-btn primary" data-action="ext-add-child" data-parent-id="__root__" title="新增一级组织">'+ico("plus",13)+'</button>' +
    '</div>' +
    '<div class="ext-tree-row is-all '+(allSelected?"selected":"")+'" data-action="ext-select-group" data-group-id="all">' +
      '<span class="ext-tree-lead">'+ico("layers-3",13)+'</span>' +
      '<div class="ext-tree-main"><span class="ext-tree-name">全部</span><span class="ext-tree-count">'+allCount+'</span></div>' +
    '</div>' +
    rootAdd +
    '<div class="ext-tree-list">' +
      extGroupTree.map(function(n){ return renderExtGroupNode(n, 0); }).join("") +
    '</div>' +
    '<div class="ext-tree-row is-child '+(unSelected?"selected":"")+'" data-action="ext-select-group" data-group-id="'+extUngroupedId+'">' +
      '<span class="ext-tree-lead child">'+ico("inbox",12)+'</span>' +
      '<div class="ext-tree-main"><span class="ext-tree-name">未分组</span><span class="ext-tree-count">'+unCount+'</span></div>' +
    '</div>' +
  '</aside>';
}
function renderExtContactRows(rows, startIndex){
  var groups = flattenExtGroups();
  var groupMap = {};
  groups.forEach(function(g){ groupMap[g.id] = g.name; });
  if(!rows.length){
    return '<tr><td colspan="8">'+renderEmptyStateHtml("暂无外部联系人", "可邀请联系人或调整左侧组织筛选")+'</td></tr>';
  }
  return rows.map(function(c, idx){
    var phoneOn = !!(state.extPhoneReveal && state.extPhoneReveal[c.id]);
    var wxOn = !!(state.extWxReveal && state.extWxReveal[c.id]);
    var enabled = c.status !== "disabled";
    var statusText = extStatusLabel(c.status);
    var statusCls = enabled ? "on" : "off";
    var checked = !!(state.extSelected && state.extSelected[c.id]);
    return '<tr>' +
      '<td class="ext-seq-cell"><span class="ext-seq-inner">' +
        extCheckHtml(checked, "ext-toggle-row", 'data-id="'+c.id+'"') +
        '<span class="ext-seq">'+(startIndex + idx + 1)+'</span>' +
      '</span></td>' +
      '<td>' +
        '<div class="ext-user-cell">' +
          extAvatarHtml(c) +
          '<div class="ext-user-meta">' +
            '<div class="ext-user-name">'+escapeHtml(c.name)+'</div>' +
            '<div class="ext-user-phone">' +
              '<span>'+escapeHtml(maskPhone(c.phone, phoneOn))+'</span>' +
              '<button type="button" class="ext-eye-btn" data-action="ext-toggle-phone" data-id="'+c.id+'" title="'+(phoneOn?"隐藏手机号":"显示手机号")+'">'+ico(phoneOn?"eye-off":"eye",13)+'</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</td>' +
      '<td><span class="ext-user-name">'+escapeHtml(c.wechatNick || "-")+'</span></td>' +
      '<td>' +
        '<div class="ext-user-phone" style="margin-top:0">' +
          '<span>'+escapeHtml(maskWxId(c.wechatId, wxOn))+'</span>' +
          '<button type="button" class="ext-eye-btn" data-action="ext-toggle-wx" data-id="'+c.id+'" title="'+(wxOn?"隐藏微信号":"显示微信号")+'">'+ico(wxOn?"eye-off":"eye",13)+'</button>' +
        '</div>' +
      '</td>' +
      '<td><span class="ext-group-tag">'+escapeHtml(groupMap[c.groupId] || "未分组")+'</span></td>' +
      '<td>' +
        '<div class="ext-status-cell">' +
          '<button type="button" class="switch-pill '+(enabled?"active":"")+'" data-action="ext-toggle-status" data-id="'+c.id+'" title="'+(enabled?"点击停用":"点击启用")+'"></button>' +
          '<span class="ext-status-text '+statusCls+'">'+statusText+'</span>' +
        '</div>' +
      '</td>' +
      '<td>' +
        '<div class="draft-actions">' +
          '<button type="button" class="draft-action-link" data-action="contact-edit" data-contact-id="'+c.id+'">编辑</button>' +
          '<span class="draft-action-divider">|</span>' +
          '<button type="button" class="draft-action-link danger" data-action="ext-delete-contact" data-id="'+c.id+'">删除</button>' +
        '</div>' +
      '</td>' +
    '</tr>';
  }).join("");
}
function getExtFilteredRows(){
  var groupId = state.extGroupId || "all";
  var kw = (state.extKw || "").trim().toLowerCase();
  var rows = extContacts.slice();
  if(groupId && groupId !== "all"){
    var ids = groupId === extUngroupedId ? [extUngroupedId] : collectExtGroupIds(groupId);
    rows = rows.filter(function(c){ return ids.indexOf(c.groupId) > -1; });
  }
  var pick = getExtStatusPick();
  if(!isExtStatusAll(pick)){
    rows = rows.filter(function(c){
      var st = c.status === "disabled" ? "disabled" : "normal";
      return pick.indexOf(st) > -1;
    });
  }
  if(kw){
    rows = rows.filter(function(c){
      return (c.name && c.name.toLowerCase().indexOf(kw) > -1) ||
        (c.phone && c.phone.indexOf(kw) > -1) ||
        (c.wechatNick && c.wechatNick.toLowerCase().indexOf(kw) > -1) ||
        (c.wechatId && c.wechatId.toLowerCase().indexOf(kw) > -1);
    });
  }
  return rows;
}
function renderExtStatusFilter(){
  var pick = getExtStatusPick();
  var label = isExtStatusAll(pick) ? "全部状态" : (pick.length === 1 && pick[0] === "disabled" ? "已停用" : "正常启用");
  var draft = state.extStatusOpen && Array.isArray(state.extStatusDraft) ? state.extStatusDraft.slice() : pick.slice();
  var items = [
    { key:"normal", name:"正常启用", dot:"ok" },
    { key:"disabled", name:"已停用", dot:"off" }
  ];
  var panel = "";
  if(state.extStatusOpen){
    panel = '<div class="ext-ms-panel">' +
      '<div class="ext-ms-head"><span>账号状态选择（多选）</span><button type="button" class="ext-ms-clear" data-action="ext-status-clear">清空已选</button></div>' +
      items.map(function(it){
        var on = draft.indexOf(it.key) > -1;
        return '<button type="button" class="ext-ms-item'+(on?" on":"")+'" data-action="ext-status-toggle-item" data-status="'+it.key+'">' +
          '<span class="ext-ms-box'+(on?" on":"")+'">'+(on?ico("check",11):"")+'</span>' +
          '<span class="ext-ms-dot '+it.dot+'"></span>' +
          '<span>'+it.name+'</span>' +
        '</button>';
      }).join("") +
      '<div class="ext-ms-foot"><span>已选 '+draft.length+' 项</span><button type="button" class="ext-ms-ok" data-action="ext-status-apply">确定</button></div>' +
    '</div>';
  }
  return '<div class="ext-ms'+(state.extStatusOpen?" open":"")+'">' +
    '<button type="button" class="ext-ms-trigger" data-action="ext-status-toggle">账号状态：<b>'+label+'</b>'+ico("chevron-down",14)+'</button>' +
    panel +
  '</div>';
}
function renderExternalContacts(){
  var rows = getExtFilteredRows();
  var total = extContacts.length;
  var nNormal = extContacts.filter(function(c){ return c.status !== "disabled"; }).length;
  var nOff = extContacts.filter(function(c){ return c.status === "disabled"; }).length;
  var pick = getExtStatusPick();
  var cards = [
    { key:"all", title:"外部联系人总数", count:total, chip:"全部", desc:"已接入协同的外部人员", icon:"users", theme:"total" },
    { key:"normal", title:"正常状态用户", count:nNormal, chip:"正常", desc:"可正常接收协同指令", icon:"shield", theme:"ok" },
    { key:"disabled", title:"已停用用户", count:nOff, chip:"停用", desc:"账号已停用，不可协同", icon:"shield-alert", theme:"off" }
  ];
  var cardsHtml = '<div class="ext-kpi-grid">' +
    cards.map(function(card){
      var isActive = card.key === "all" ? isExtStatusAll(pick) : (pick.length === 1 && pick[0] === card.key);
      return '<button type="button" class="ext-kpi theme-'+card.theme+(isActive?" active":"")+'" data-action="ext-status-tab" data-tab="'+card.key+'">' +
        '<span class="ext-kpi-label">'+card.title+'</span>' +
        '<span class="ext-kpi-icon">'+ico(card.icon,18)+'</span>' +
        '<span class="ext-kpi-num-row"><span class="ext-kpi-num">'+card.count+'</span><span class="ext-kpi-unit">人</span><span class="ext-kpi-chip">'+card.chip+'</span></span>' +
        '<span class="ext-kpi-desc">'+card.desc+'</span>' +
      '</button>';
    }).join("") +
  '</div>';
  var pageSize = (state.pageSizes && state.pageSizes.external) || 10;
  var totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  var currentPage = (state.pageNumbers && state.pageNumbers.external) || 1;
  if(currentPage > totalPages) currentPage = totalPages;
  if(currentPage < 1) currentPage = 1;
  if(!state.pageNumbers) state.pageNumbers = {};
  state.pageNumbers.external = currentPage;
  var startIndex = (currentPage - 1) * pageSize;
  var pageRows = rows.slice(startIndex, startIndex + pageSize);
  var action = '<div class="head-actions"><button class="btn primary ext-head-btn" data-action="invite">'+ico("user-plus",14)+'邀请联系人</button></div>';
  var pageAllChecked = pageRows.length > 0 && pageRows.every(function(c){ return !!(state.extSelected && state.extSelected[c.id]); });
  var selCount = selectedExtIds().length;
  var batchOn = selCount > 0;
  var table = '<div class="table-wrap ext-table-wrap"><table class="table ext-contact-table">' +
    '<colgroup><col class="ext-col-seq"><col class="ext-col-user"><col class="ext-col-nick"><col class="ext-col-wx"><col class="ext-col-group"><col class="ext-col-status"><col class="ext-col-action"></colgroup>' +
    '<thead><tr>' +
      '<th class="ext-seq-th"><span class="ext-seq-inner">'+extCheckHtml(pageAllChecked, "ext-toggle-all")+'序号</span></th>' +
      '<th>姓名/电话</th>' +
      '<th>昵称</th>' +
      '<th>微信号</th>' +
      '<th>所属分组</th>' +
      '<th>状态</th>' +
      '<th>操作</th>' +
    '</tr></thead>' +
    '<tbody>'+renderExtContactRows(pageRows, startIndex)+'</tbody>' +
  '</table></div>';
  var filters = '<div class="filters task-filters" style="padding-top:14px"><div class="filter-row">' +
    '<div class="filter-content"><b>联系人</b><input data-filter-content data-ext-search placeholder="请输入姓名 / 手机号 / 微信" value="'+escapeHtml(state.extKw||"")+'"></div>' +
    renderExtStatusFilter() +
    '<div style="flex:1"></div>' +
    '<button class="btn primary ext-filter-btn" data-action="ext-query">'+ico("search",14)+'查询</button>' +
    '<button class="btn ext-filter-btn" data-action="ext-reset">'+ico("rotate-ccw",14)+'重置</button>' +
  '</div></div>';
  return '<div class="page ext-page">'+pageHead("外部联系人","维护外部协作人员，按组织分组统一管理与启停",action)+
    cardsHtml +
    '<div class="split ext-split">'+renderExtGroupTree()+'<section class="card ext-list-card">'+filters+
      '<div class="table-info-strip ext-info-strip">' +
        '<div class="summary-badge">当前分组及筛选条件下，共有 <strong>'+rows.length+'</strong> 条数据</div>' +
        '<div class="ext-batch-bar">' +
          '<button type="button" class="ext-batch-btn'+(batchOn?" on":"")+'" data-action="ext-batch-edit">'+ico("pencil",13)+'批量编辑</button>' +
          '<button type="button" class="ext-batch-btn danger'+(batchOn?" on":"")+'" data-action="ext-batch-delete">'+ico("trash-2",13)+'批量删除</button>' +
        '</div>' +
      '</div>' +
      table + pagination(rows.length, pageSize, currentPage, "external") +
    '</section></div>'+footer()+'</div>';
}
function userRows(external){
  var names=external?["yfb","zr","213","郭总","wx"]:["张若英","吴鑫","谭星","陈乾喜","密信测试号","卓","123","柒","太空人","Dennis.Chin*秦晓昊"];
  return names.map(function(n,i){return '<tr><td>'+(external?'<span class="row-check"></span>　':"")+(external?(i<3?"教育厅":"住建厅"):(i<9?"台湾省网信办":"SD"))+'</td><td><div class="user-cell"><span class="mini-avatar">'+n.slice(0,1)+'</span><div><b>'+n+'</b><small>昵称：'+(external?["Konne","-","没关系我会弯腰","-","测试账号"][i]:"用户昵称")+'</small></div></div></td><td>舆情处置　|　错误表述</td><td>'+(external?'<span class="switch">开</span>':"所属分组")+'</td><td><span class="link" data-action="'+(external?"contact-edit":"user-edit")+'">编辑</span></td></tr>'}).join("")
}
function sideTree(external){
  var groups=external?["教育厅(3)","文旅厅(0)","住建厅(2)","高雄市网信办(0)","台北市网信办(0)","台中市教育局(0)","未分组(0)"]:["R&D(14)","SD(17)","舆情科(0)","综合科(3)"];
  return '<aside class="card side-card"><div class="side-title"><span>'+ico("building-2",18)+'<span>'+(external?"联系人分组":"机构分组")+'</span></span><span class="link" '+(external?'data-action="group-add"':'')+'>'+ico("circle-plus",17)+'</span></div><div class="tree-root"><span class="tree-root-arrow">⌄</span><span>'+(external?"全部(5)":"台湾省网信办(91)")+'</span></div>'+groups.map(function(g,i){return '<div class="tree-item"><span>'+g+'</span>'+(external?(i<6?'<span class="tree-actions"><span data-action="group-add">'+ico("pencil",13)+'</span><span data-action="group-delete">'+ico("trash-2",13)+'</span></span>':""):'<span class="tree-actions"><span>'+ico("pencil",13)+'</span></span>')+'</div>'}).join("")+'</aside>'
}
function renderUsers(external){
  if(external) return renderExternalContacts();
  var action=external?'<div class="head-actions"><button class="btn" data-action="batch">'+ico("pencil",14)+'批量调整分组</button><button class="btn primary" data-action="invite">'+ico("user-plus",14)+'邀请联系人</button></div>':'<div class="head-actions"><button class="btn">'+ico("pencil",14)+'批量调整分组</button></div>';
  var title=external?"外部联系人":"机构用户",desc=external?"维护外部协作人员，灵活分组统一管理":"维护机构用户的指令流转权限";
  return '<div class="page">'+pageHead(title,desc,action)+'<div class="split">'+sideTree(external)+'<section class="card"><div class="filters task-filters management-filters" style="padding-top:18px"><div class="filter-row"><div class="filter-content"><b>'+(external?"联系人":"用户")+'</b><input data-filter-content placeholder="'+(external?"请输入联系人姓名":"请输入姓名搜索")+'"></div>'+filterSelect("user-category","指令类别",["舆情处置","错误表述"] )+'<div style="flex:1"></div><button class="btn primary">'+ico("search",15)+'查询</button><button class="btn" data-filter-reset>'+ico("rotate-ccw",15)+'重置</button></div></div><div class="table-wrap"><table class="table"><thead><tr><th>'+(external?'<span class="row-check"></span>　':"")+'分组</th><th>用户信息</th><th>指令类别</th><th>'+(external?"启用/停用":"数据权限")+'</th><th>操作</th></tr></thead><tbody>'+userRows(external)+'</tbody></table>'+pagination(external?5:91,external?50:10)+'</div></section></div>'+footer()+'</div>'
}
/* =========================================================
   系统设置全局状态、字典与角色权限矩阵
   ========================================================= */
var menuPermissionGroups = [
  {
    id: "menu_stats",
    name: "统计管理",
    actions: [
      { id: "btn_stats_view", name: "查看" },
      { id: "btn_stats_export", name: "导出" }
    ]
  },
  {
    id: "menu_external",
    name: "外部联系人",
    actions: [
      { id: "btn_ext_view", name: "查看" },
      { id: "btn_ext_group_add", name: "新增分组" },
      { id: "btn_ext_group_edit", name: "编辑分组" },
      { id: "btn_ext_user_add", name: "新增人员" },
      { id: "btn_ext_user_edit", name: "编辑人员" }
    ]
  },
  {
    id: "menu_monitor",
    name: "指令监控"
  },
  {
    id: "menu_warehouse",
    name: "数据仓库",
    actions: [
      { id: "btn_wh_view", name: "查看" },
      { id: "btn_wh_group", name: "分组管理" }
    ]
  },
  {
    id: "menu_tpl_lib",
    name: "模板库",
    actions: [
      { id: "btn_tpl_lib_view", name: "查看" }
    ]
  },
  {
    id: "menu_settings",
    name: "系统设置",
    children: [
      { id: "menu_settings_dict", name: "自定义分类配置", actions: [
        { id: "btn_settings_dict_view", name: "查看" },
        { id: "btn_settings_dict_add", name: "新增" },
        { id: "btn_settings_dict_edit", name: "编辑" }
      ]},
      { id: "menu_settings_storage", name: "系统存储管理", actions: [
        { id: "btn_settings_storage_view", name: "查看" },
        { id: "btn_settings_storage_clean", name: "清理" }
      ]}
    ]
  }
];

function collectChildPermIds(child){
  var ids = [child.id];
  (child.actions || []).forEach(function(a){ ids.push(a.id); });
  return ids;
}
function collectGroupPermIds(grp){
  var ids = [grp.id];
  (grp.actions || []).forEach(function(a){ ids.push(a.id); });
  (grp.children || []).forEach(function(ch){
    collectChildPermIds(ch).forEach(function(id){ ids.push(id); });
  });
  return ids;
}
function collectAllMenuPermIds(){
  var ids = [];
  menuPermissionGroups.forEach(function(g){
    collectGroupPermIds(g).forEach(function(id){ ids.push(id); });
  });
  return ids;
}
function collectReadonlyMenuPermIds(){
  var ids = [];
  menuPermissionGroups.forEach(function(g){
    ids.push(g.id);
    (g.actions || []).forEach(function(a){
      if(a.name === "查看") ids.push(a.id);
    });
    (g.children || []).forEach(function(ch){
      ids.push(ch.id);
      (ch.actions || []).forEach(function(a){
        if(a.name === "查看") ids.push(a.id);
      });
    });
  });
  return ids;
}
function setRolePermIds(role, ids, on){
  if(!role.menuPerms) role.menuPerms = [];
  ids.forEach(function(id){
    var idx = role.menuPerms.indexOf(id);
    if(on && idx === -1) role.menuPerms.push(id);
    if(!on && idx > -1) role.menuPerms.splice(idx, 1);
  });
}
function isPermChecked(role, id){
  return !!(role.menuPerms && role.menuPerms.indexOf(id) > -1);
}

var dataScopeOptions = [
  {
    id: "ALL",
    name: "全部数据权限",
    shortTag: "全部数据",
    tagCls: "scope-badge-ALL",
    icon: "globe",
    desc: "可查看系统内全部组织节点的指令与流转数据，支持跨部门全局检索。",
    badge: "全部数据"
  },
  {
    id: "DEPT_TREE",
    name: "本部门及子组织权限",
    shortTag: "部门及子组织",
    tagCls: "scope-badge-DEPT_TREE",
    icon: "share-2",
    desc: "可查看本部门及下级子组织的业务数据，下属节点回执自动汇总穿透。",
    badge: "部门及子组织"
  },
  {
    id: "SELF",
    name: "仅本人负责数据",
    shortTag: "仅本人",
    tagCls: "scope-badge-SELF",
    icon: "user",
    desc: "仅可查看本人创建、本人经办或当前经办人为本人的数据，不可浏览同部门其他人的办理过程。",
    badge: "仅本人"
  },
  {
    id: "CUSTOM",
    name: "自定义组织节点",
    shortTag: "自定义节点",
    tagCls: "scope-badge-CUSTOM",
    icon: "check-square",
    desc: "按业务需要自定义勾选一个或多个组织节点，仅可查看所选节点范围内的数据。",
    badge: "自定义节点"
  }
];

var customDeptOptions = [
  { id: "dept_leader", name: "台湾省网信办领导班子", code: "WXB-LEADER" },
  { id: "dept_yq", name: "舆情处置与研判专班", code: "WXB-YQ-ZB" },
  { id: "dept_yj", name: "网络应急指挥协调处", code: "WXB-YJ-ZH" },
  { id: "dept_wa", name: "网络安全保卫总队（外协）", code: "WXB-WA-ZD" },
  { id: "dept_center", name: "网信直属网络信息中心", code: "WXB-XX-ZX" },
  { id: "dept_edu", name: "省教育厅涉校网络舆情组", code: "EXT-JYT-YQ" },
  { id: "dept_house", name: "省住建厅城市建设协同组", code: "EXT-ZJT-XT" },
  { id: "dept_sz1", name: "台北市网信协同工作站", code: "LOC-TBS-GZ" },
  { id: "dept_sz2", name: "新北市网信协同工作站", code: "LOC-XBS-GZ" },
  { id: "dept_sz3", name: "台中市网信协同工作站", code: "LOC-TZS-GZ" }
];

var orgStaffPool = [
  { id: "staff_1", name: "武甲", account: "wujia", dept: "台湾省网信办领导班子", title: "系统管理员" },
  { id: "staff_2", name: "齐杰", account: "qijie", dept: "综合科", title: "机构管理员" },
  { id: "staff_3", name: "武丁", account: "wuding", dept: "综合科", title: "机构管理员" },
  { id: "staff_4", name: "陈乾喜", account: "chenqx", dept: "综合科", title: "机构管理员" },
  { id: "staff_5", name: "张若英", account: "zhangry", dept: "舆情科", title: "处置专员" },
  { id: "staff_6", name: "吴鑫", account: "wuxin", dept: "舆情科", title: "处置专员" },
  { id: "staff_7", name: "谭星", account: "tanxing", dept: "舆情科", title: "处置专员" },
  { id: "staff_8", name: "密信测试号", account: "mixin", dept: "R&D", title: "测试账号" },
  { id: "staff_9", name: "卓", account: "zhuo", dept: "R&D", title: "经办人" },
  { id: "staff_10", name: "123", account: "user123", dept: "SD", title: "经办人" },
  { id: "staff_11", name: "柒", account: "qi", dept: "SD", title: "经办人" },
  { id: "staff_12", name: "太空人", account: "taikong", dept: "SD", title: "经办人" },
  { id: "staff_13", name: "Dennis.Chin", account: "dennis", dept: "SD", title: "经办人" }
];
function cloneStaffByIds(ids){
  return orgStaffPool.filter(function(s){ return ids.indexOf(s.id) > -1; }).map(function(s){
    return { id: s.id, name: s.name, account: s.account, dept: s.dept, title: s.title };
  });
}
function syncRoleMemberCount(role){
  if(!role) return;
  if(!role.members) role.members = [];
  role.userCount = role.members.length;
}
function getSelectedRole(){
  return systemRoles.filter(function(r){ return r.id === state.selectedRoleId; })[0] || null;
}
function cloneRoleBaseline(role){
  if(!role) return null;
  return JSON.parse(JSON.stringify({
    name: role.name,
    desc: role.desc || "",
    code: role.code,
    dataScope: role.dataScope,
    customDepts: role.customDepts || [],
    maskSensitive: !!role.maskSensitive,
    watermark: !!role.watermark,
    exportLimit: role.exportLimit || "1000",
    menuPerms: role.menuPerms || [],
    members: role.members || [],
    permissions: role.permissions || {}
  }));
}
function captureRoleBaseline(role){
  state.roleBaseline = cloneRoleBaseline(role || getSelectedRole());
}
function applyRoleBasicInputs(role){
  if(!role) return;
  var nameInp = document.getElementById("role-edit-name-inp");
  var descInp = document.getElementById("role-edit-desc-inp");
  if(nameInp && nameInp.value.trim()) role.name = nameInp.value.trim();
  if(descInp) role.desc = descInp.value.trim();
}
function isRoleDetailDirty(){
  var role = getSelectedRole();
  if(!role || role.isSystem || !state.roleBaseline) return false;
  var live = cloneRoleBaseline(role);
  var nameInp = document.getElementById("role-edit-name-inp");
  var descInp = document.getElementById("role-edit-desc-inp");
  if(nameInp) live.name = nameInp.value.trim() || live.name;
  if(descInp) live.desc = descInp.value.trim();
  return JSON.stringify(live) !== JSON.stringify(state.roleBaseline);
}
function restoreRoleFromBaseline(role){
  if(!role || !state.roleBaseline) return;
  var snap = state.roleBaseline;
  role.name = snap.name;
  role.desc = snap.desc;
  role.code = snap.code;
  role.dataScope = snap.dataScope;
  role.customDepts = JSON.parse(JSON.stringify(snap.customDepts || []));
  role.maskSensitive = !!snap.maskSensitive;
  role.watermark = !!snap.watermark;
  role.exportLimit = snap.exportLimit;
  role.menuPerms = JSON.parse(JSON.stringify(snap.menuPerms || []));
  role.members = JSON.parse(JSON.stringify(snap.members || []));
  role.permissions = JSON.parse(JSON.stringify(snap.permissions || {}));
  syncRoleMemberCount(role);
  syncRoleLegacyPerms(role);
}
function saveCurrentRolePermissions(){
  var role = getSelectedRole();
  if(!role) return false;
  if(role.isSystem){
    showToast("系统内置角色仅支持查看，不可修改");
    return false;
  }
  applyRoleBasicInputs(role);
  captureRoleBaseline(role);
  return true;
}
function leaveRoleDetail(force){
  if(!force && isRoleDetailDirty()){
    openModal("unsaved-role-modal");
    return;
  }
  state.roleSubView = "list";
  state.roleBaseline = null;
  render();
  window.scrollTo(0,0);
}
function renderUnsavedRoleModal(){
  return '<div class="modal" style="width:420px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between">' +
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<div style="width:26px;height:26px;border-radius:6px;background:#fef3c7;color:#d97706;display:flex;align-items:center;justify-content:center">' + ico("alert-triangle", 15) + '</div>' +
        '<b style="font-size:15px;color:#0f172a">尚未保存</b>' +
      '</div>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:18px 20px;font-size:13.5px;color:#334155;line-height:1.6">已做了修改，还未保存，是否保存？</div>' +
    '<div class="modal-foot" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-action="discard-role-and-leave" style="height:32px;font-size:12.5px">不保存</button>' +
      '<button type="button" class="btn primary" data-action="save-role-and-leave" style="height:32px;font-size:12.5px;font-weight:700;background:#005c58;border-color:#005c58">' + ico("check", 13) + ' 保存</button>' +
    '</div>' +
  '</div>';
}
function generateRoleCode(){
  var code = "ROLE_" + Date.now().toString(36).toUpperCase();
  while(systemRoles.some(function(r){ return r.code === code; })){
    code = "ROLE_" + Date.now().toString(36).toUpperCase() + Math.floor(10 + Math.random() * 90);
  }
  return code;
}

var systemRoles = [
  {
    id: "role_superadmin",
    name: "超级管理员",
    code: "ROLE_SUPER_ADMIN",
    userCount: 1,
    isSystem: true,
    desc: "拥有全系统最高管理与审计权限，可管控全量组织机构、业务指令流转、模板设计及系统配置。",
    dataScope: "ALL",
    customDepts: [],
    maskSensitive: false,
    exportAllowed: true,
    exportLimit: "5000",
    watermark: true,
    members: cloneStaffByIds(["staff_1"]),
    menuPerms: collectAllMenuPermIds(),
    permissions: { issue: true, accept: true, process: true, approve: true, dict: true, template: true, stats: true }
  },
  {
    id: "role_orgadmin",
    name: "机构管理员",
    code: "ROLE_ORG_ADMIN",
    userCount: 3,
    isSystem: true,
    desc: "负责本机构及直属分支机构的指令流转业务统筹、工单下发、回执审核、统计台账查看与机构专属字典维护。",
    dataScope: "DEPT_TREE",
    customDepts: [],
    maskSensitive: false,
    exportAllowed: true,
    exportLimit: "2000",
    watermark: true,
    members: cloneStaffByIds(["staff_2", "staff_3", "staff_4"]),
    menuPerms: collectGroupPermIds(menuPermissionGroups[0]).concat(
      collectGroupPermIds(menuPermissionGroups[1]),
      collectGroupPermIds(menuPermissionGroups[2]),
      ["menu_warehouse", "btn_wh_view", "menu_tpl_lib", "btn_tpl_lib_view", "menu_settings", "menu_settings_dict", "btn_settings_dict_view", "menu_settings_storage", "btn_settings_storage_view", "btn_settings_storage_clean"]
    ),
    permissions: { issue: true, accept: true, process: true, approve: true, dict: true, template: false, stats: true }
  },
  {
    id: "role_custom_handler",
    name: "舆情处置专班岗",
    code: "ROLE_YQ_HANDLER",
    userCount: 8,
    isSystem: false,
    desc: "机构自建角色，负责舆情工单接单处置、回执填报、转办协同与子单拆分。",
    dataScope: "DEPT_TREE",
    customDepts: [],
    maskSensitive: true,
    exportAllowed: true,
    exportLimit: "1000",
    watermark: true,
    members: cloneStaffByIds(["staff_5", "staff_6", "staff_7", "staff_8", "staff_9", "staff_10", "staff_11", "staff_12"]),
    menuPerms: ["menu_stats", "btn_stats_view", "menu_external", "btn_ext_view", "menu_monitor"],
    permissions: { issue: false, accept: true, process: true, approve: false, dict: false, template: false, stats: true }
  }
];
systemRoles.forEach(syncRoleMemberCount);

function syncRoleLegacyPerms(role){
  if(!role || !role.permissions) return;
  var perms = role.menuPerms || [];
  role.permissions.issue = perms.indexOf("menu_monitor") > -1;
  role.permissions.accept = perms.indexOf("menu_external") > -1;
  role.permissions.process = perms.indexOf("btn_ext_user_edit") > -1;
  role.permissions.approve = perms.indexOf("btn_settings_roles_edit") > -1;
  role.permissions.dict = perms.indexOf("menu_settings_dict") > -1 || perms.indexOf("btn_settings_dict_edit") > -1;
  role.permissions.template = perms.indexOf("menu_tpl_lib") > -1 || perms.indexOf("menu_settings_tpl") > -1;
  role.permissions.stats = perms.indexOf("menu_stats") > -1 || perms.indexOf("btn_stats_view") > -1;
}

var tplWizardState = {
  step: 1, // 1: 基础信息, 2: 低代码表单设计, 3: 流程配置, 4: 完成
  isEditing: false,
  editingId: null,
  basic: {
    name: "舆情上报单",
    category: "舆情处置",
    scope: "机构专版",
    requirement: "限时回执",
    desc: "适用于全省网信协同应急指挥，支持涉网舆情多模态取证、限时处置核验及闭环审批。"
  },
  formFields: [
    {
      id: "f_title",
      type: "text",
      name: "舆情标题",
      placeholder: "请输入涉事舆情标题或关键线索",
      required: true,
      defaultValue: "",
      desc: "用于在待办列表中作为主标题呈现"
    },
    {
      id: "f_time",
      type: "date",
      name: "发现时间",
      placeholder: "选择舆情首发或监测捕获时间",
      required: true,
      defaultValue: "2026-09-15",
      desc: "精确记录舆情发酵或捕获时间节点"
    },
    {
      id: "f_source",
      type: "select",
      name: "舆情来源",
      placeholder: "请选择涉网平台或发布渠道",
      required: true,
      options: ["微博", "微信公众号", "抖音短视频", "快手", "境外社媒平台", "本地网络论坛", "其他"],
      defaultValue: "微博",
      desc: "标识涉事信息传播源头"
    }
  ],
  selectedFieldId: "f_title",
  flowNodes: [
    { id: "n1", title: "指令发起 / 下发", role: "主管领导 / 发文专班", type: "start", desc: "填写表单基本信息，审核后下发" },
    { id: "n2", title: "接收研判 / 办理", role: "属地网信应急组 / 责任科室", type: "process", desc: "确认任务并进入处置办理" },
    { id: "n3", title: "核查处置 / 填报", role: "一线处置员 / 业务专员", type: "process", desc: "填写低代码表单回执并上传佐证材料" },
    { id: "n4", title: "回执审批 / 办结", role: "值班长 / 审批主管", type: "archive", desc: "审核处置成效，同意归档或退回重办" }
  ]
};

function resetTplWizard(tplId){
  if(tplId){
    var target = issueTemplates.filter(function(t){return t.id===tplId})[0];
    if(target){
      tplWizardState.step = 1;
      tplWizardState.isEditing = true;
      tplWizardState.editingId = target.id;
      tplWizardState.basic = {
        name: target.name,
        category: target.category,
        scope: target.scope === "通用" ? "通用" : "机构专版",
        requirement: target.requirement,
        desc: target.desc
      };
      tplWizardState.formFields = (target.fields || []).map(function(f, idx){
        return {
          id: "f_" + idx + "_" + (f.key || "item"),
          type: f.type === "datetime" ? "date" : f.type === "textarea" ? "textarea" : f.type === "select" ? "select" : "text",
          name: f.label || "字段",
          placeholder: f.placeholder || ("请输入" + (f.label||"")),
          required: !!f.required,
          defaultValue: f.default || "",
          desc: "系统字段定义",
          options: f.options || ["微博", "微信公众号", "抖音短视频", "快手", "其他"]
        };
      });
      if(!tplWizardState.formFields.length){
        tplWizardState.formFields = [
          { id: "f_title", type: "text", name: "舆情标题", placeholder: "请输入涉事舆情标题", required: true, defaultValue: "", desc: "工单标题" },
          { id: "f_time", type: "date", name: "发现时间", placeholder: "请选择时间", required: true, defaultValue: "2026-09-15", desc: "捕获时间" },
          { id: "f_source", type: "select", name: "舆情来源", placeholder: "请选择来源", required: true, options: ["微博", "微信", "抖音", "快手", "其他"], defaultValue: "微博", desc: "来源平台" }
        ];
      }
      tplWizardState.selectedFieldId = tplWizardState.formFields[0]?.id || null;
      return;
    }
  }

  // 尝试从 localStorage 恢复草稿
  var savedDraft = null;
  try {
    var raw = localStorage.getItem("form_designer_saved_tpl");
    if(raw) savedDraft = JSON.parse(raw);
  } catch(e){}

  tplWizardState.step = 1;
  tplWizardState.isEditing = false;
  tplWizardState.editingId = null;
  tplWizardState.basic = {
    name: "舆情上报单",
    category: "舆情处置",
    scope: "机构专版",
    requirement: "限时回执",
    desc: "适用于全省网信协同应急指挥，支持涉网舆情多模态取证、限时处置核验及闭环审批。"
  };
  tplWizardState.formFields = (savedDraft && savedDraft.formFields && savedDraft.formFields.length) ? savedDraft.formFields : [
    {
      id: "f_title",
      type: "text",
      name: "舆情标题",
      placeholder: "请输入涉事舆情标题或关键线索",
      required: true,
      defaultValue: "",
      desc: "用于在待办列表中作为主标题呈现"
    },
    {
      id: "f_time",
      type: "date",
      name: "发现时间",
      placeholder: "选择舆情首发或监测捕获时间",
      required: true,
      defaultValue: "2026-09-15",
      desc: "精确记录舆情发酵或捕获时间节点"
    },
    {
      id: "f_source",
      type: "select",
      name: "舆情来源",
      placeholder: "请选择涉网平台或发布渠道",
      required: true,
      options: ["微博", "微信公众号", "抖音短视频", "快手", "境外社媒平台", "本地网络论坛", "其他"],
      defaultValue: "微博",
      desc: "标识涉事信息传播源头"
    }
  ];
  tplWizardState.selectedFieldId = tplWizardState.formFields[0]?.id || null;
}

function renderTemplates(){
  return '<div class="page settings-ui">' +
    pageHead("模板库", "机构指令模板只读预览与引用，模板配置权限已回收。", "") +
    '<section class="card" style="padding:16px 18px;min-height:760px;border-radius:6px;border:1px solid #e5eaed">' +
      renderOrgTemplatesPane() +
    '</section>' +
    footer() +
  '</div>';
}

function renderIssueTemplateCardsHtml(filterCat, searchKw, selectedId){
  var kw = (searchKw || "").trim().toLowerCase();
  var tpls = issueTemplates.filter(function(t){
    var matchCat = filterCat === "全部" || t.category === filterCat;
    var matchKw = !kw || t.name.toLowerCase().indexOf(kw) > -1 || (t.desc && t.desc.toLowerCase().indexOf(kw) > -1) || t.id.toLowerCase().indexOf(kw) > -1;
    return t.enabled !== false && matchCat && matchKw;
  });
  if(!tpls.length){
    return '<div class="issue-dispatch-empty">' + ico("inbox", 36) + '<p>暂无匹配的指令模板</p></div>';
  }
  var full = isStorageFull();
  return tpls.map(function(t){
    var isUrgent = t.requirement === "限时回执";
    var pillClass = isUrgent ? "reply" : t.requirement === "仅阅读" ? "read" : "reply";
    return '<div class="wizard-tpl-card issue-dispatch-card" data-tpl-id="' + t.id + '">' +
      '<div>' +
        '<div class="wizard-tpl-head">' +
          '<span class="tpl-tag-pill ' + pillClass + '">' + (isUrgent ? ico("clock-3", 12) : ico("check-check", 12)) + " " + t.requirement + '</span>' +
          '<span class="tpl-version-text">' + t.scope + " · " + t.version + "</span>" +
        "</div>" +
        '<div class="wizard-tpl-title">' + escapeHtml(t.name) + "</div>" +
        '<div class="wizard-tpl-code">' + escapeHtml(t.id) + "</div>" +
        '<div class="wizard-tpl-desc">' + escapeHtml(t.desc) + "</div>" +
      "</div>" +
      "<div>" +
        '<div class="wizard-tpl-meta">' +
          "<span>" + ico("sliders", 13) + " 包含字段 <b>" + t.fields.length + " 个</b></span>" +
          '<span style="color:#cbd5e1">|</span>' +
          "<span>" + ico("history", 13) + " 累计使用 <b>" + t.usedCount + " 次</b></span>" +
        "</div>" +
        '<div class="wizard-tpl-foot">' +
          '<span class="wizard-tpl-stats">分类：<b>' + t.category + "</b></span>" +
          '<div class="issue-card-actions">' +
            '<button type="button" class="issue-card-btn preview" data-action="preview-tpl-item" data-tpl-id="' + t.id + '">' + ico("eye", 13) + " 预览</button>" +
            '<button type="button" class="issue-card-btn choose" data-action="issue-with-tpl" data-tpl-id="' + t.id + '"' + (full ? ' disabled title="存储空间已满"' : "") + ">" + ico("arrow-right", 13) + " 选用并下发</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";
  }).join("");
}

function getIssueDraftListRows(){
  var rows = draftRows.slice();
  var q = (state.filterQuery && state.filterQuery.draft) || {};
  if(q.template && q.template !== "全部"){
    var tKw = q.template.trim();
    rows = rows.filter(function(r){ return r.template && r.template.indexOf(tKw) > -1; });
  }
  if(q.content && q.content.trim()){
    var kw = q.content.trim().toLowerCase();
    rows = rows.filter(function(r){
      return (r.title && r.title.toLowerCase().indexOf(kw) > -1) ||
             (r.id && r.id.toLowerCase().indexOf(kw) > -1) ||
             (r.template && r.template.toLowerCase().indexOf(kw) > -1) ||
             (r.description && r.description.toLowerCase().indexOf(kw) > -1);
    });
  }
  return rows;
}

function renderIssueDispatchPage(){
  if(state.issueDraftView){
    var draftList = getIssueDraftListRows();
    var pageSize = (state.pageSizes && state.pageSizes.draft) || 10;
    var totalPages = Math.max(1, Math.ceil(draftList.length / pageSize));
    var currentPage = (state.pageNumbers && state.pageNumbers.draft) || 1;
    if(currentPage > totalPages) currentPage = totalPages;
    if(currentPage < 1) currentPage = 1;
    if(!state.pageNumbers) state.pageNumbers = { todo:1, sent:1, done:1, draft:1, "sent-mgmt":1 };
    state.pageNumbers.draft = currentPage;
    var startIndex = (currentPage - 1) * pageSize;
    var pageRows = draftList.slice(startIndex, startIndex + pageSize);
    var draftTop = '<div class="head-actions" style="display:flex;gap:10px">' +
      '<button type="button" class="btn light" data-action="back-issue-templates">'+ico("arrow-left",14)+' 返回模板</button>' +
    '</div>';
    return '<div class="page settings-ui">' +
      pageHead("草稿箱", "暂存尚未正式下发的指令草稿，支持继续编辑、复制与删除。", draftTop) +
      '<section class="card settings-main-card issue-dispatch-panel">' +
        filterBar("draft", draftList.length) +
        draftTableHtml(pageRows, startIndex) +
        pagination(draftList.length, pageSize, currentPage, "draft") +
      "</section>" +
      footer() +
    "</div>";
  }
  var filterCat = state.issueTplCat || "全部";
  var kw = state.issueTplKw || "";
  var tplFilterBar = '<div class="wizard-filter-bar issue-dispatch-filter">' +
    '<div class="wizard-category-tabs">' +
      ["全部", "舆情处置", "错误表述"].map(function(cat){
        return '<button type="button" class="wizard-category-btn ' + (filterCat === cat ? "active" : "") + '" data-action="issue-page-filter-cat" data-cat="' + cat + '">' + cat + "</button>";
      }).join("") +
    "</div>" +
    '<div class="wizard-search-box">' +
      ico("search", 15) +
      '<input type="text" placeholder="搜索模板名称、关键词、ID..." value="' + escapeHtml(kw) + '" data-action="issue-page-search-input">' +
    "</div>" +
  "</div>";
  var draftTop = '<div class="head-actions" style="display:flex;gap:10px">' +
    '<button type="button" class="btn light" data-action="open-issue-drafts">'+ico("file-edit",14)+' 草稿箱 ('+draftRows.length+')</button>' +
  '</div>';
  return '<div class="page settings-ui">' +
    pageHead("下发指令", "选用机构预置指令模板，一键进入填写与发送流程。", draftTop) +
    '<section class="card settings-main-card issue-dispatch-panel">' +
      '<div class="issue-dispatch-intro">' +
        '<div class="issue-dispatch-intro-icon">' + ico("send", 18) + "</div>" +
        "<div>" +
          '<div class="issue-dispatch-intro-title">全部可下发模板</div>' +
          '<div class="issue-dispatch-intro-sub">以下为当前「下发指令」流程中的全部模板，点击选用后继续填写信息、选择接收人并发送。</div>' +
        "</div>" +
        '<span class="issue-dispatch-count">' + issueTemplates.filter(function(t){ return t.enabled !== false; }).length + " 套</span>" +
      "</div>" +
      tplFilterBar +
      '<div class="wizard-tpl-grid issue-dispatch-grid">' + renderIssueTemplateCardsHtml(filterCat, kw) + "</div>" +
    "</section>" +
    footer() +
  "</div>";
}

function renderSettings(){
  var activeMenu = state.settingsMenu || "dict";
  if(activeMenu === "templates" || activeMenu === "roles") activeMenu = "dict";

  var paneContentHtml = "";
  var title = "自定义分类配置";
  var desc = "维护转办、生成子单与驳回等业务流转分类，供全链路统计分析与下拉选用。";
  if(activeMenu === "storage"){
    paneContentHtml = renderStoragePane();
    title = "系统存储管理";
    desc = "查看机构存储用量，按形成时间筛选并清理已归档指令。";
  } else {
    paneContentHtml = renderDictPane();
  }

  return '<div class="page settings-ui">' +
    pageHead(title, desc, "") +
    '<section class="card settings-main-card">' + paneContentHtml + "</section>" +
    footer() +
  "</div>";
}

function renderV8JumpModal(){
  return '<div class="modal v8-jump-modal">' +
    '<div class="modal-head">' +
      '<span class="v8-jump-title">' +
        '<span class="v8-jump-icon">' + ico("shield-check", 18) + "</span>即将跳转 V8 集成管理" +
      "</span>" +
      '<button class="close" data-close>' + ico("x", 20) + "</button>" +
    "</div>" +
    '<div class="modal-body">' +
      "<p>用户与权限管理已统一接入 <b>V8 集成管理</b>。账号、角色、菜单权限与数据范围将在 V8 中集中配置，确认后打开外部系统完成管理。</p>" +
    "</div>" +
    '<div class="modal-foot">' +
      '<button type="button" class="btn" data-close>取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-v8-jump">确认跳转</button>' +
    "</div>" +
  "</div>";
}

function formatStorageMb(n){
  var v = Number(n) || 0;
  var t = Math.round(v * 10) / 10;
  return (t % 1 === 0 ? String(t) : t.toFixed(1)) + " MB";
}
function renderStoragePane(){
  var used = getStorageUsedMb();
  var total = getStorageTotalMb();
  var pct = Math.max(2, Math.min(100, Math.round(used / (total || 1) * 100)));
  var full = used >= total;
  var ageFilter = state.storageAgeFilter || "all";
  var allArchived = getArchivedTasks();
  var archived = getFilteredArchivedTasks();
  if(!state.storagePickIds) state.storagePickIds = [];
  var visibleKeys = archived.map(function(r){ return r.key; });
  var pickIds = state.storagePickIds.filter(function(id){ return visibleKeys.indexOf(id) > -1; });
  state.storagePickIds = pickIds;
  var allChecked = archived.length > 0 && pickIds.length === archived.length;
  var someChecked = pickIds.length > 0 && !allChecked;
  var selectedSize = archived.reduce(function(sum, r){
    return pickIds.indexOf(r.key) > -1 ? sum + getArchivedTaskSizeMb(r) : sum;
  }, 0);
  var remain = Math.max(0, total - used);
  var ageTabs = [
    { id: "all", label: "全部", count: allArchived.length },
    { id: "3m", label: "三月前", count: allArchived.filter(function(r){ var c = getStorageAgeCutoff("3m"); return getTaskCreatedMs(r) > 0 && getTaskCreatedMs(r) <= c; }).length },
    { id: "6m", label: "半年前", count: allArchived.filter(function(r){ var c = getStorageAgeCutoff("6m"); return getTaskCreatedMs(r) > 0 && getTaskCreatedMs(r) <= c; }).length },
    { id: "1y", label: "一年前", count: allArchived.filter(function(r){ var c = getStorageAgeCutoff("1y"); return getTaskCreatedMs(r) > 0 && getTaskCreatedMs(r) <= c; }).length }
  ];
  var ageDescMap = {
    all: "展示当前全部已归档任务。勾选后可删除释放空间，或导出数据备份。",
    "3m": "展示创建时间在三个月以前的已归档任务，适合清理较早台账并导出备份。",
    "6m": "展示创建时间在半年以前的已归档任务，可勾选后删除释放空间或导出数据。",
    "1y": "展示创建时间在一年以前的已归档任务，建议优先清理以释放存储空间。"
  };

  var rowsHtml = "";
  if(!archived.length){
    rowsHtml = '<tr><td colspan="6" style="padding:40px 0;text-align:center;color:#94a3b8;font-size:12.5px">' +
      ico("inbox", 32) +
      '<p style="margin-top:8px">当前筛选条件下暂无已归档任务</p>' +
    '</td></tr>';
  } else {
    rowsHtml = archived.map(function(r, idx){
      var on = pickIds.indexOf(r.key) > -1;
      var sizeMb = getArchivedTaskSizeMb(r);
      return '<tr>' +
        '<td class="storage-col-seq">' +
          '<span class="storage-seq-cell">' +
            '<span class="storage-check-cell" data-action="toggle-storage-task" data-key="' + r.key + '">' +
              '<input type="checkbox" ' + (on ? "checked" : "") + ' tabindex="-1" style="pointer-events:none;width:14px;height:14px;accent-color:#00a389">' +
            '</span>' +
            '<span class="storage-seq-no">' + (idx + 1) + '</span>' +
          '</span>' +
        '</td>' +
        '<td><div class="storage-task-title" title="' + escapeHtml(r.title || "-") + '">' + escapeHtml(r.title || "-") + '</div></td>' +
        '<td class="storage-col-org">' + escapeHtml(r.senderOrg || r.org || "-") + '</td>' +
        '<td class="storage-col-person">' + escapeHtml(r.sender || "-") + '</td>' +
        '<td class="storage-col-time">' + escapeHtml(r.time || "-") + '</td>' +
        '<td class="storage-col-size">' + formatStorageMb(sizeMb) + '</td>' +
      '</tr>';
    }).join("");
  }

  var selectedBar = pickIds.length
    ? '<div class="storage-selected-bar">' +
        '<span class="storage-selected-icon">' + ico("hard-drive", 14) + '</span>' +
        '<span>已勾选 <b>' + pickIds.length + '</b> 条' + (allChecked ? "（全部）" : "") + '</span>' +
        '<span class="storage-selected-sep">·</span>' +
        '<span>合计占用 <b>' + formatStorageMb(selectedSize) + '</b></span>' +
      '</div>'
    : "";

  return '<div class="storage-pane">' +
    '<div class="storage-page-head">' +
      '<h2>存储空间清理</h2>' +
      '<p>此模块用于清理存储空间，也可将已归档任务导出数据备份</p>' +
    '</div>' +
    '<div class="storage-hero storage-hero-compact' + (full ? " is-full" : "") + '">' +
      '<div class="storage-usage-head">' +
        '<span class="storage-hero-kicker">当前使用情况</span>' +
        '<span class="storage-usage-remain">' + (full ? "空间已满，无法下发新指令" : "剩余 " + remain + "MB") + '</span>' +
      '</div>' +
      '<div class="storage-usage-metrics">' +
        '<div class="storage-hero-used">' +
          '<span class="storage-hero-num">' + used + '</span>' +
          '<span class="storage-hero-unit">MB</span>' +
          '<span class="storage-hero-tag">已用</span>' +
        '</div>' +
        '<div class="storage-usage-pct">' + pct + '%</div>' +
      '</div>' +
      '<div class="storage-bar">' +
        '<div class="storage-bar-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<div class="storage-bar-meta">' + used + 'MB / ' + total + 'MB（2GB）</div>' +
    '</div>' +
    '<div class="storage-clean-block">' +
      '<div class="storage-filter-bar">' +
        '<div class="storage-age-tabs" role="tablist">' +
          ageTabs.map(function(tab){
            return '<button type="button" class="storage-age-tab' + (ageFilter === tab.id ? " active" : "") + '" data-action="filter-storage-age" data-filter="' + tab.id + '">' +
              '<span>' + tab.label + '</span>' +
              '<em>' + tab.count + '</em>' +
            '</button>';
          }).join("") +
        '</div>' +
      '</div>' +
      '<div class="storage-clean-toolbar">' +
        '<div class="storage-clean-copy">' +
          '<b>已归档任务</b>' +
          '<span>' + (ageDescMap[ageFilter] || ageDescMap.all) + '</span>' +
        '</div>' +
        '<div class="storage-clean-actions">' +
          '<button type="button" class="btn light" data-action="export-storage-tasks"' +
            (pickIds.length ? "" : " disabled") + '>' +
            ico("download", 14) + ' 导出数据' + (pickIds.length ? "（" + pickIds.length + "）" : "") +
          '</button>' +
          '<button type="button" class="btn primary storage-clean-btn" data-action="open-storage-clean-modal"' +
            (pickIds.length ? "" : " disabled") + '>' +
            ico("trash-2", 14) + ' 删除已选' + (pickIds.length ? "（" + pickIds.length + "）" : "") +
          '</button>' +
        '</div>' +
      '</div>' +
      selectedBar +
      '<div class="settings-table-card">' +
        '<table class="table storage-task-table" style="margin:0">' +
          '<colgroup>' +
            '<col class="storage-col-seq">' +
            '<col>' +
            '<col class="storage-col-org">' +
            '<col class="storage-col-person">' +
            '<col class="storage-col-time">' +
            '<col class="storage-col-size">' +
          '</colgroup>' +
          '<thead><tr>' +
            '<th class="storage-col-seq">' +
              '<span class="storage-seq-cell">' +
                '<span class="storage-check-cell" data-action="toggle-storage-task-all">' +
                  '<input type="checkbox" ' + (allChecked ? "checked" : "") + (someChecked ? ' data-indeterminate="true"' : "") + ' tabindex="-1" style="pointer-events:none;width:14px;height:14px;accent-color:#00a389"' + (archived.length ? "" : " disabled") + '>' +
                '</span>' +
                '<span>序号</span>' +
              '</span>' +
            '</th>' +
            '<th>标题</th>' +
            '<th class="storage-col-org">下发机构</th>' +
            '<th class="storage-col-person">下发人</th>' +
            '<th class="storage-col-time">创建时间</th>' +
            '<th class="storage-col-size">所占空间</th>' +
          '</tr></thead>' +
          '<tbody>' + rowsHtml + '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function exportStorageArchivedTasks(){
  var pickIds = state.storagePickIds || [];
  if(!pickIds.length){
    showToast("请先勾选需要导出的已归档任务");
    return false;
  }
  var rows = getFilteredArchivedTasks().filter(function(r){ return pickIds.indexOf(r.key) > -1; });
  var totalMb = rows.reduce(function(sum, r){ return sum + getArchivedTaskSizeMb(r); }, 0);
  var headers = ["序号","标题","下发机构","下发人","创建时间","所占空间"];
  var rowsHtml = rows.map(function(r, i){
    var values = [i + 1, r.title || "-", r.senderOrg || r.org || "-", r.sender || "-", r.time || "-", formatStorageMb(getArchivedTaskSizeMb(r))];
    return "<tr>" + values.map(function(v){ return "<td>" + escapeHtml(String(v)) + "</td>"; }).join("") + "</tr>";
  }).join("");
  var html = '<html><head><meta charset="UTF-8"></head><body><table border="1"><thead><tr>' + headers.map(function(h){ return "<th>" + h + "</th>"; }).join("") + "</tr></thead><tbody>" + rowsHtml + "</tbody></table></body></html>";
  var blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "已归档任务导出.xls";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function(){ URL.revokeObjectURL(url); }, 500);
  showToast("已导出 " + rows.length + " 条数据，合计 " + formatStorageMb(totalMb));
  return true;
}
function confirmStorageClean(){
  var codeInp = document.getElementById("storage-verify-code");
  var code = codeInp ? codeInp.value.trim() : "";
  if(code !== "123456"){
    showToast("验证码不正确，请重新输入");
    if(codeInp) codeInp.focus();
    return false;
  }
  var pickIds = state.storagePickIds || [];
  if(!pickIds.length){
    showToast("请先勾选需要清理的已归档任务");
    return false;
  }
  var freed = 0;
  var removed = 0;
  taskRows = taskRows.filter(function(r){
    if(r.status === "已归档" && pickIds.indexOf(r.key) > -1){
      freed += getArchivedTaskSizeMb(r);
      removed += 1;
      return false;
    }
    return true;
  });
  state.storagePickIds = [];
  var rootModal = document.getElementById("modalRoot");
  if(rootModal){
    rootModal.classList.remove("show");
    rootModal.innerHTML = "";
  }
  showToast("已清理 " + removed + " 条已归档任务，释放约 " + freed + "MB 空间");
  render();
  return true;
}
function renderStorageCleanModal(){
  var pickIds = state.storagePickIds || [];
  var archived = getArchivedTasks().filter(function(r){ return pickIds.indexOf(r.key) > -1; });
  var freeMb = archived.reduce(function(sum, r){ return sum + getArchivedTaskSizeMb(r); }, 0);
  return '<div class="modal" style="width:440px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between">' +
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<div style="width:26px;height:26px;border-radius:6px;background:#ecfdf5;color:#00a389;display:flex;align-items:center;justify-content:center">' + ico("shield-check", 15) + '</div>' +
        '<b style="font-size:15px;color:#0f172a">二次确认清理</b>' +
      '</div>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:18px 20px">' +
      '<p style="font-size:13.5px;color:#334155;line-height:1.65;margin:0 0 14px">已向管理员预留手机发送验证码。清理后不可恢复，将释放约 <b style="color:#00a389">' + freeMb + 'MB</b> 空间（已选 ' + archived.length + ' 条已归档任务）。</p>' +
      '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:6px">请输入验证码</label>' +
      '<input type="text" id="storage-verify-code" class="input" maxlength="6" placeholder="请输入6位验证码" style="height:36px;font-size:14px;letter-spacing:2px">' +
      '<div style="font-size:11.5px;color:#94a3b8;margin-top:6px">演示环境验证码：123456</div>' +
    '</div>' +
    '<div class="modal-foot" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-close style="height:32px;font-size:12.5px">取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-storage-clean" style="height:32px;font-size:12.5px;font-weight:700;background:#00a389;border-color:#00a389">' + ico("check", 13) + ' 确认清理</button>' +
    '</div>' +
  '</div>';
}

function renderStoreWarehouseModal(){
  var pickIds = state.storagePickIds || [];
  var options = warehouseGroups.map(function(g){
    return '<option value="' + g.id + '">' + escapeHtml(g.name) + '</option>';
  }).join("");
  return '<div class="modal" style="width:440px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between">' +
      '<b style="font-size:15px;color:#0f172a">存入数据仓库</b>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:18px 20px">' +
      '<p style="font-size:13px;color:#475569;line-height:1.6;margin:0 0 12px">将已选 ' + pickIds.length + ' 条已归档任务存入数据仓库。存入后从清理列表移除，可按分组查阅。</p>' +
      '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:6px">选择分组</label>' +
      '<select id="store-warehouse-group" class="input" style="height:36px;font-size:13px">' + options + '</select>' +
    '</div>' +
    '<div class="modal-foot" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-close style="height:32px;font-size:12.5px">取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-store-warehouse" style="height:32px;font-size:12.5px;font-weight:700;background:#005c58;border-color:#005c58">' + ico("archive", 13) + ' 确认存入</button>' +
    '</div>' +
  '</div>';
}

function renderWarehouseGroupModal(){
  var editingId = state.editingWarehouseGroupId || "";
  var editing = getWarehouseGroup(editingId);
  var isEdit = !!editingId && warehouseGroups.some(function(g){ return g.id === editingId; });
  return '<div class="modal" style="width:420px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between">' +
      '<b style="font-size:15px;color:#0f172a">' + (isEdit ? "重命名分组" : "新建分组") + '</b>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:18px 20px">' +
      '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:6px">分组名称</label>' +
      '<input type="text" id="warehouse-group-name" class="input" value="' + (isEdit ? escapeHtml(editing.name) : "") + '" placeholder="例如：年度台账库" style="height:36px;font-size:13px">' +
    '</div>' +
    '<div class="modal-foot" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-close style="height:32px;font-size:12.5px">取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-warehouse-group" style="height:32px;font-size:12.5px;font-weight:700;background:#005c58;border-color:#005c58">' + ico("check", 13) + ' 确定</button>' +
    '</div>' +
  '</div>';
}

function confirmStoreWarehouse(){
  var pickIds = state.storagePickIds || [];
  if(!pickIds.length){
    showToast("请先勾选需要存入的已归档任务");
    return false;
  }
  var sel = document.getElementById("store-warehouse-group");
  var gid = sel && sel.value ? sel.value : "wh_default";
  var n = 0;
  taskRows.forEach(function(r){
    if(pickIds.indexOf(r.key) > -1 && r.status === "已归档"){
      r.inWarehouse = true;
      r.warehouseGroupId = gid;
      n += 1;
    }
  });
  state.storagePickIds = [];
  var rootModal = document.getElementById("modalRoot");
  if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
  showToast("已将 " + n + " 条任务存入【" + getWarehouseGroup(gid).name + "】");
  render();
  return true;
}

function confirmWarehouseGroup(){
  var inp = document.getElementById("warehouse-group-name");
  var name = inp ? inp.value.trim() : "";
  if(!name){
    showToast("请输入分组名称");
    if(inp) inp.focus();
    return false;
  }
  var editingId = state.editingWarehouseGroupId || "";
  if(editingId){
    warehouseGroups.forEach(function(g){
      if(g.id === editingId) g.name = name;
    });
    showToast("分组已重命名");
  } else {
    var newId = "wh_" + Date.now();
    warehouseGroups.push({ id: newId, name: name });
    state.warehouseGroupId = newId;
    showToast("已新建分组【" + name + "】");
  }
  state.editingWarehouseGroupId = "";
  var rootModal = document.getElementById("modalRoot");
  if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
  render();
  return true;
}

function renderWarehousePage(){
  var curGroupId = state.warehouseGroupId || "all";
  var allItems = getWarehouseTasks();
  var items = allItems.filter(function(r){
    if(curGroupId === "all") return true;
    return (r.warehouseGroupId || "wh_default") === curGroupId;
  });
  if(!state.warehousePickIds) state.warehousePickIds = [];
  var visibleKeys = items.map(function(r){ return r.key; });
  var pickIds = state.warehousePickIds.filter(function(id){ return visibleKeys.indexOf(id) > -1; });
  state.warehousePickIds = pickIds;

  var groupNav = warehouseGroups.map(function(g){
    var count = allItems.filter(function(r){ return (r.warehouseGroupId || "wh_default") === g.id; }).length;
    return '<div class="warehouse-group-row">' +
      '<button type="button" class="sidebar-item ' + (curGroupId === g.id ? "active" : "") + '" data-action="switch-warehouse-group" data-group="' + g.id + '">' +
        '<span class="sidebar-item-left">' + ico("folder", 15) + '<span>' + escapeHtml(g.name) + '</span></span>' +
        '<span class="warehouse-group-count">' + count + '</span>' +
      '</button>' +
      (g.id === "wh_default" ? "" :
        '<span class="warehouse-group-ops">' +
          '<button type="button" class="warehouse-icon-btn" data-action="rename-warehouse-group" data-group="' + g.id + '" title="重命名">' + ico("pencil", 12) + '</button>' +
          '<button type="button" class="warehouse-icon-btn" data-action="delete-warehouse-group" data-group="' + g.id + '" title="删除分组">' + ico("trash-2", 12) + '</button>' +
        '</span>') +
    '</div>';
  }).join("");

  var moveOptions = warehouseGroups.map(function(g){
    return '<option value="' + g.id + '"' + (g.id === curGroupId ? " selected" : "") + '>' + escapeHtml(g.name) + '</option>';
  }).join("");

  var rowsHtml = "";
  if(!items.length){
    rowsHtml = '<tr><td colspan="5" style="padding:48px 0;text-align:center;color:#94a3b8;font-size:12.5px">' +
      ico("archive", 32) +
      '<p style="margin-top:8px">该分组暂无入库数据，请从存储清理中勾选已归档任务存入</p>' +
    '</td></tr>';
  } else {
    rowsHtml = items.map(function(r){
      var on = pickIds.indexOf(r.key) > -1;
      var gname = getWarehouseGroup(r.warehouseGroupId || "wh_default").name;
      return '<tr>' +
        '<td style="text-align:center">' +
          '<span class="storage-check-cell" data-action="toggle-warehouse-task" data-key="' + r.key + '">' +
            '<input type="checkbox" ' + (on ? "checked" : "") + ' tabindex="-1" style="pointer-events:none;width:14px;height:14px;accent-color:#005c58">' +
          '</span>' +
        '</td>' +
        '<td><div class="storage-task-title">' + escapeHtml(r.title || "-") + '</div></td>' +
        '<td style="white-space:nowrap">' + escapeHtml(r.sender || "-") + '</td>' +
        '<td style="white-space:nowrap;color:#64748b">' + escapeHtml(r.time || "-") + '</td>' +
        '<td style="white-space:nowrap"><span class="warehouse-group-tag">' + escapeHtml(gname) + '</span></td>' +
      '</tr>';
    }).join("");
  }

  return '<div class="page settings-ui">' +
    pageHead("数据仓库", "集中存放已归档并选择入库的任务，支持按分组管理。", "") +
    '<div class="list-layout">' +
      '<aside class="list-sidebar" style="min-height:760px">' +
        '<div class="sidebar-action-wrap" style="padding:10px 8px 12px;margin-bottom:8px">' +
          '<div style="font-size:14px;font-weight:800;color:#005c58;display:flex;align-items:center;gap:7px;padding:4px 6px">' +
            ico("archive", 16) + ' <span>仓库分组</span>' +
          '</div>' +
        '</div>' +
        '<nav class="sidebar-nav">' +
          '<button type="button" class="sidebar-item ' + (curGroupId === "all" ? "active" : "") + '" data-action="switch-warehouse-group" data-group="all">' +
            '<span class="sidebar-item-left">' + ico("layers", 15) + '<span>全部分组</span></span>' +
            '<span class="warehouse-group-count">' + allItems.length + '</span>' +
          '</button>' +
          groupNav +
        '</nav>' +
        '<div style="padding:10px 8px">' +
          '<button type="button" class="btn light" data-action="open-warehouse-group-modal" style="width:100%;height:34px;font-size:12.5px;font-weight:700">' + ico("plus", 14) + ' 新建分组</button>' +
        '</div>' +
      '</aside>' +
      '<main class="list-main">' +
        '<section class="card" style="padding:16px 18px;min-height:760px;border-radius:6px;border:1px solid #e5eaed">' +
          '<div class="storage-clean-toolbar">' +
            '<div>' +
              '<b>' + (curGroupId === "all" ? "全部入库任务" : escapeHtml(getWarehouseGroup(curGroupId).name)) + '</b>' +
              '<span>仅展示已选择存入数据仓库的已归档任务</span>' +
            '</div>' +
            '<div style="display:flex;align-items:center;gap:8px">' +
              '<select id="warehouse-move-group" class="input" style="height:34px;font-size:12.5px;width:160px"' + (pickIds.length ? "" : " disabled") + '>' + moveOptions + '</select>' +
              '<button type="button" class="btn light" data-action="move-warehouse-tasks"' + (pickIds.length ? "" : " disabled") + ' style="height:34px;font-size:12.5px;font-weight:700">' + ico("folder", 14) + ' 移动到分组</button>' +
            '</div>' +
          '</div>' +
          '<div class="settings-table-card">' +
            '<table class="table" style="margin:0">' +
              '<thead><tr>' +
                '<th style="width:48px;text-align:center"></th>' +
                '<th>标题</th>' +
                '<th style="width:120px">下发人</th>' +
                '<th style="width:180px">创建时间</th>' +
                '<th style="width:140px">所属分组</th>' +
              '</tr></thead>' +
              '<tbody>' + rowsHtml + '</tbody>' +
            '</table>' +
          '</div>' +
        '</section>' +
      '</main>' +
    '</div>' +
    footer() +
  '</div>';
}

/* === 1. 机构指令模板列表主面板（PC端只读预览权限） === */
function renderOrgTemplatesPane(){
  var curCat = state.tplFilterCat || "全部";
  var kw = (state.tplSearchKw || "").trim().toLowerCase();

  var filteredTemplates = issueTemplates.filter(function(tpl){
    var matchCat = (curCat === "全部" || tpl.category === curCat);
    var matchKw = !kw || tpl.name.toLowerCase().indexOf(kw) > -1 || tpl.id.toLowerCase().indexOf(kw) > -1 || (tpl.desc && tpl.desc.toLowerCase().indexOf(kw) > -1);
    return matchCat && matchKw;
  });

  var totalUsed = issueTemplates.reduce(function(acc, cur){ return acc + (cur.usedCount || 0); }, 0);
  var orgExclusiveCount = issueTemplates.filter(function(t){ return t.scope === "机构" || t.scope === "机构专版"; }).length;
  var enabledCount = issueTemplates.filter(function(t){ return t.enabled !== false; }).length;

  var statCards = '<div class="tpl-mgmt-stat-row">' +
    '<div class="tpl-mgmt-stat-card">' +
      '<div class="tpl-stat-icon-wrap" style="background:#005c58">' + ico("file-text", 18) + '</div>' +
      '<div>' +
        '<div class="tpl-stat-num">' + issueTemplates.length + ' <span style="font-size:12px;font-weight:400;color:#64748b">套</span></div>' +
        '<div class="tpl-stat-label">机构可用模板总数（已启用 ' + enabledCount + ' 套）</div>' +
      '</div>' +
    '</div>' +
    '<div class="tpl-mgmt-stat-card">' +
      '<div class="tpl-stat-icon-wrap" style="background:#0284c7">' + ico("building-2", 18) + '</div>' +
      '<div>' +
        '<div class="tpl-stat-num">' + (orgExclusiveCount || 1) + ' <span style="font-size:12px;font-weight:400;color:#64748b">套</span></div>' +
        '<div class="tpl-stat-label">台湾省网信办 · 机构定制专版模板</div>' +
      '</div>' +
    '</div>' +
    '<div class="tpl-mgmt-stat-card">' +
      '<div class="tpl-stat-icon-wrap" style="background:#059669">' + ico("send", 18) + '</div>' +
      '<div>' +
        '<div class="tpl-stat-num">' + totalUsed + ' <span style="font-size:12px;font-weight:400;color:#64748b">次</span></div>' +
        '<div class="tpl-stat-label">累计引用下发指令次数</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  var tipBanner = '<div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #005c58;border-radius:6px;padding:12px 18px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;font-size:12.5px;color:#334155">' +
    '<div style="display:flex;align-items:center;gap:10px">' +
      '<span style="color:#005c58;display:flex">' + ico("shield-alert", 18) + '</span>' +
      '<div>' +
        '<span style="font-weight:700;color:#0f172a">PC端指令模板只读受控策略：</span>' +
        '<span>当前端已收回所有指令模板的在线编辑及配置权限，模板库处于锁定只读状态。点击【预览模板】可查看真实表单样式与 5 阶段闭环全流程路径。</span>' +
      '</div>' +
    '</div>' +
    '<span style="background:#eef8f7;color:#005c58;border:1px solid #b5e5e2;padding:3px 10px;border-radius:4px;font-size:11.5px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:4px">' + ico("lock", 12) + ' 仅只读预览</span>' +
  '</div>';

  var catOptions = [];
  issueTemplates.forEach(function(t){
    if(t.category && catOptions.indexOf(t.category) === -1) catOptions.push(t.category);
  });
  if(!catOptions.length) catOptions = ["舆情处置", "错误表述"];

  var toolbar = '<div class="tpl-mgmt-toolbar">' +
    '<div class="tpl-mgmt-filter-group">' +
      filterSelect("tpl-category", "指令分类", catOptions, "settings-tpl-cat-select", false, curCat) +
    '</div>' +
    '<div style="display:flex;align-items:center;gap:10px">' +
      '<div class="wizard-search-box" style="width:260px">' +
        ico("search", 14) +
        '<input type="text" placeholder="搜索模板名称 / 编码..." value="' + escapeHtml(state.tplSearchKw || "") + '" data-action="settings-tpl-search-input">' +
      '</div>' +
    '</div>' +
  '</div>';

  var tableRowsHtml = "";
  if(!filteredTemplates.length){
    tableRowsHtml = '<tr><td colspan="8" style="padding:50px 0;text-align:center;color:#94a3b8">' +
      ico("file-x", 36) +
      '<p style="margin-top:8px">未检索到符合条件的模板，请调整筛选条件或搜索关键词</p>' +
    '</td></tr>';
  } else {
    tableRowsHtml = filteredTemplates.map(function(t, idx){
      var isUrgent = t.requirement === "限时回执";
      var pillClass = isUrgent ? "reply" : t.requirement === "仅阅读" ? "read" : "reply";
      var isOn = t.enabled !== false;

      return '<tr>' +
        '<td style="text-align:center;color:#64748b;font-weight:600">' + (idx + 1) + '</td>' +
        '<td>' +
          '<div>' +
            '<b style="color:#0f172a;font-size:13.5px">' + escapeHtml(t.name) + '</b>' +
            '<div style="font-size:12px;color:#64748b;margin-top:2px;font-family:\'JetBrains Mono\', monospace">' + t.id + '</div>' +
          '</div>' +
        '</td>' +
        '<td><span style="font-weight:600;color:#334155">' + t.category + '</span></td>' +
        '<td><span class="tpl-tag-pill ' + pillClass + '" style="font-size:11px;padding:2px 8px">' + (isUrgent ? ico("clock-3", 11) : ico("check-check", 11)) + ' ' + t.requirement + '</span></td>' +
        '<td><span style="color:#005c58;font-weight:700">' + (t.fields ? t.fields.length : 6) + ' 个控件</span></td>' +
        '<td><span style="color:#0284c7;font-weight:700">' + (t.usedCount || 0) + ' 次</span></td>' +
        '<td>' +
          '<div class="tpl-status-cell">' +
            '<button type="button" class="switch-pill ' + (isOn ? "active" : "") + '" data-action="toggle-tpl-enabled" data-tpl-id="' + t.id + '" title="' + (isOn ? "点击关闭" : "点击启用") + '"></button>' +
            '<span class="ext-status-text ' + (isOn ? "on" : "off") + '">' + (isOn ? "已启用" : "已关闭") + '</span>' +
          '</div>' +
        '</td>' +
        '<td style="text-align:center">' +
          '<div style="display:flex;gap:6px;align-items:center;justify-content:center">' +
            '<button type="button" class="btn light small" data-action="preview-tpl-item" data-tpl-id="' + t.id + '" style="font-size:12.5px;padding:3px 12px;font-weight:700;color:#005c58;background:#eef8f7;border-color:#b5e5e2">' + ico("eye", 13) + ' 预览模板</button>' +
          '</div>' +
        '</td>' +
      '</tr>';
    }).join("");
  }

  var tableHtml = '<div class="settings-table-card">' +
    '<table class="table" style="margin:0">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:50px;text-align:center">序号</th>' +
          '<th style="width:240px">模板名称 / 编码</th>' +
          '<th style="width:110px">分类</th>' +
          '<th style="width:110px">指令要求</th>' +
          '<th style="width:100px">表单控件</th>' +
          '<th style="width:100px">下发使用</th>' +
          '<th style="width:140px">状态<span class="tpl-help-tip" tabindex="0">'+ico("circle-help",13)+'<span class="tpl-help-pop">关闭后，下发指令将隐藏该模板</span></span></th>' +
          '<th style="width:130px;text-align:center">操作</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' + tableRowsHtml + '</tbody>' +
    '</table>' +
  '</div>';

  return '<div>' + statCards + tipBanner + toolbar + tableHtml + '</div>';
}

/* === 2. 配置字典面板 === */
function renderDictPane(){
  var curTab = state.settingsTab || "transfer";
  var searchKw = (state.settingsSearchKw || "").trim().toLowerCase();
  var list = getSettingReasonList(curTab);
  var tabLabel = getSettingReasonLabel(curTab);

  var filteredList = list.filter(function(item){
    if(!searchKw) return true;
    return item.name.toLowerCase().indexOf(searchKw) > -1 ||
           item.code.toLowerCase().indexOf(searchKw) > -1 ||
           (item.desc && item.desc.toLowerCase().indexOf(searchKw) > -1);
  });

  var subnav = '<div class="settings-tab-nav" style="margin-bottom:14px">' +
    '<button type="button" class="settings-tab-btn ' + (curTab === "transfer" ? "active" : "") + '" data-action="switch-settings-tab" data-tab="transfer">' +
      ico("user-round-cog", 16) + ' 转办原因分类 (' + systemSettings.transferReasons.length + ')' +
    '</button>' +
    '<button type="button" class="settings-tab-btn ' + (curTab === "subtask" ? "active" : "") + '" data-action="switch-settings-tab" data-tab="subtask">' +
      ico("git-fork", 16) + ' 生成子单原因分类 (' + systemSettings.subtaskReasons.length + ')' +
    '</button>' +
    '<button type="button" class="settings-tab-btn ' + (curTab === "reject" ? "active" : "") + '" data-action="switch-settings-tab" data-tab="reject">' +
      ico("undo-2", 16) + ' 驳回原因分类 (' + (systemSettings.rejectReasons || []).length + ')' +
    '</button>' +
  '</div>';

  var filterRow = '<div class="filter-row task-filters" style="margin-bottom:14px">' +
    '<div class="filter-content" style="flex:1;max-width:380px">' +
      '<b>分类检索</b>' +
      '<input type="text" placeholder="搜索分类名称 / 标识编码 / 业务说明..." value="' + escapeHtml(state.settingsSearchKw || "") + '" data-action="settings-search-input">' +
    '</div>' +
    '<div style="flex:1"></div>' +
    '<button type="button" class="btn light" data-action="settings-reset-search">' + ico("rotate-ccw", 14) + ' 重置</button>' +
    '<button type="button" class="btn primary" data-action="open-add-setting-modal" data-type="' + curTab + '" style="font-weight:700;background:#005c58;border-color:#005c58">' + ico("plus", 14) + ' 新增分类</button>' +
  '</div>';

  var tableRowsHtml = "";
  if(!filteredList.length){
    tableRowsHtml = '<tr><td colspan="8" style="padding:48px 0;text-align:center;color:#94a3b8;font-size:13px">' +
      ico("inbox", 36) +
      '<p style="margin-top:8px">暂无匹配的' + tabLabel + '数据</p>' +
    '</td></tr>';
  } else {
    tableRowsHtml = filteredList.map(function(item, idx){
      var isItemEnabled = !!item.enabled;
      return '<tr>' +
        '<td style="text-align:center;color:#64748b;font-weight:600">' + (idx + 1) + '</td>' +
        '<td>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="width:8px;height:8px;border-radius:50%;background:' + (isItemEnabled ? 'var(--teal)' : '#94a3b8') + '"></span>' +
            '<b style="color:#0f172a;font-size:13.5px;white-space:nowrap">' + escapeHtml(item.name) + '</b>' +
          '</div>' +
        '</td>' +
        '<td><span style="font-family:\'JetBrains Mono\', monospace;font-size:12px;color:#0284c7;background:#f0f9ff;padding:2px 8px;border-radius:4px;border:1px solid #bae6fd">' + escapeHtml(item.code) + '</span></td>' +
        '<td><div style="font-size:12.5px;color:#475569;line-height:1.5;white-space:normal;word-break:break-word">' + escapeHtml(item.desc || "-") + '</div></td>' +
        '<td><span class="tag" style="background:#e0f2fe;color:#0369a1;font-weight:700">' + (item.count || 0) + ' 条</span></td>' +
        '<td><span style="font-size:12.5px;color:#64748b">' + (item.updatedAt || "2026-09-14") + '</span></td>' +
        '<td>' +
          '<div style="display:flex;align-items:center;gap:8px;white-space:nowrap">' +
            '<button type="button" class="switch-pill ' + (isItemEnabled ? 'active' : '') + '" data-action="toggle-setting-status" data-type="' + curTab + '" data-id="' + item.id + '" title="' + (isItemEnabled ? '点击停用' : '点击启用') + '"></button>' +
            '<span style="font-size:12px;font-weight:600;color:' + (isItemEnabled ? '#059669' : '#94a3b8') + '">' + (isItemEnabled ? '已启用' : '已停用') + '</span>' +
          '</div>' +
        '</td>' +
        '<td>' +
          '<div style="display:flex;gap:8px;white-space:nowrap">' +
            '<button type="button" class="btn light small" data-action="edit-setting-item" data-type="' + curTab + '" data-id="' + item.id + '" style="font-size:12px;padding:0 10px">' + ico("pencil", 12) + ' 编辑</button>' +
            '<button type="button" class="btn small" data-action="delete-setting-item" data-type="' + curTab + '" data-id="' + item.id + '" style="font-size:12px;padding:0 10px;color:#ef4444;border-color:#fecaca">' + ico("trash-2", 12) + ' 删除</button>' +
          '</div>' +
        '</td>' +
      '</tr>';
    }).join("");
  }

  var tableHtml = '<div class="settings-table-card">' +
    '<table class="table" style="margin:0">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:60px;text-align:center">序号</th>' +
          '<th style="width:180px">分类名称</th>' +
          '<th style="width:170px">字典标识编码</th>' +
          '<th style="min-width:220px">业务场景说明</th>' +
          '<th style="width:110px">关联工单数</th>' +
          '<th style="width:150px">更新时间</th>' +
          '<th style="width:140px">启用状态</th>' +
          '<th style="width:180px">操作</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' + tableRowsHtml + '</tbody>' +
    '</table>' +
  '</div>';

  return '<div>' + subnav + filterRow + tableHtml + '</div>';
}

/* === 2.1 PC端指令模板详情预览弹窗（展示表单样式与全流程路径） === */
function getTemplateById(id){
  return issueTemplates.find(function(t){ return t.id === id; }) || issueTemplates[0] || {
    id: id,
    name: "指令模板",
    category: "舆情处置",
    requirement: "限时回执",
    scope: "通用",
    version: "v2.0",
    desc: "通用指令流转标准化模板"
  };
}

function renderPcTemplatePreviewModal(){
  var tplId = state.previewTplId || (issueTemplates[0] ? issueTemplates[0].id : "TPL202602110001");
  var tpl = getTemplateById(tplId);
  var activeTab = state.previewTplTab || "form"; // "form" | "flow"

  var isUrgent = tpl.requirement === "限时回执";
  var isReadOnly = tpl.requirement === "仅阅读";
  var isExclusive = (tpl.scope === "机构" || tpl.scope === "机构专版");
  var isCategoryError = (tpl.category === "错误表述");

  // 1. 顶栏标识 (复刻 Step 2 topbar)
  var topbar = '<div class="wizard-step2-topbar" style="margin-bottom:14px">'+
    '<div class="wizard-cur-tpl-info">'+
      '<span style="font-size:13px;color:#64748b">预览模板：</span>'+
      '<span style="font-size:14px;font-weight:800;color:#005c58">'+escapeHtml(tpl.name)+'</span>'+
      '<span class="tpl-tag-pill '+(isUrgent?"reply":isReadOnly?"read":"reply")+'" style="margin-left:4px">'+tpl.requirement+'</span>'+
      '<span class="tpl-tag-pill" style="margin-left:4px;background:#e0f2fe;color:#0369a1">'+tpl.category+'</span>'+
      (isExclusive ? '<span class="tpl-tag-pill" style="margin-left:4px;background:#fef3c7;color:#b45309">机构专版</span>' : '')+
    '</div>'+
    '<div style="font-size:12px;color:#047857;background:#ecfdf5;border:1px solid #6ee7b7;padding:3px 10px;border-radius:12px;font-weight:700;display:inline-flex;align-items:center;gap:4px">'+
      ico("eye", 13) + ' 第二步【填写信息】真实样式预览'+
    '</div>'+
  '</div>';

  // 3. 时限区配置 (复刻 Step 2 限时/常规/仅阅读)
  var timeLimitFields = '';
  if(isUrgent){
    timeLimitFields = '<div class="wizard-field-row" style="margin-bottom:0">'+
      '<div class="wizard-field-label"><span style="color:#ef4444;font-weight:700;margin-right:3px">*</span><span>限时完成时间</span></div>'+
      '<input class="input" type="text" placeholder="年/月/日 时:分 (请设置办结时限)" value="" readonly style="background:#f8fafc;color:#0f172a">'+
      '<div class="wizard-quick-times" style="margin-top:6px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">'+
        '<span style="font-size:12px;color:#64748b">按时间推算：</span>'+
        '<span class="wizard-time-chip">+2小时</span>'+
        '<span class="wizard-time-chip">+4小时</span>'+
        '<span class="wizard-time-chip">+8小时</span>'+
        '<span class="wizard-time-chip">+24小时</span>'+
      '</div>'+
    '</div>';
  } else if(isReadOnly){
    timeLimitFields = '<div class="wizard-field-row">'+
      '<div class="wizard-field-label"><span>办结 / 查阅要求</span></div>'+
      '<input class="input disabled" value="仅阅读通知：发布即生效，接收人查阅正文后系统自动标记已读，免填回执" disabled style="background:#f8fafc;color:#64748b;cursor:not-allowed">'+
    '</div>';
  } else {
    timeLimitFields = '<div class="wizard-field-row">'+
      '<div class="wizard-field-label"><span>办结 / 查阅要求</span></div>'+
      '<input class="input disabled" value="常规回执要求：无硬性倒计时限制，请在规定时间内完成排查并提报回执" disabled style="background:#f8fafc;color:#64748b;cursor:not-allowed">'+
    '</div>';
  }

  // 4. 卡片1：基础信息 (仅保留下发机构、下发人、业务系统，其他表单字段不带出数据)
  var basicCard = '<div class="wizard-form-box" style="margin-bottom:16px">'+
    '<div class="wizard-form-card-head">'+
      '<div>'+
        '<div class="wizard-form-card-title">'+ico("file-text", 16)+' 基础信息</div>'+
        '<div class="wizard-form-card-sub">设置指令的基础属性、自动关联下发主体与办结时限要求</div>'+
      '</div>'+
    '</div>'+
    '<div class="wizard-field-row">'+
      '<div class="wizard-field-label"><span style="color:#ef4444;font-weight:700;margin-right:3px">*</span><span>指令标题</span></div>'+
      '<input class="input" placeholder="请输入指令标题" value="" readonly style="background:#fff">'+
    '</div>'+
    '<div class="grid-2" style="gap:16px">'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>下发机构</span></div>'+
        '<input class="input disabled" value="台湾省网信办" disabled style="background:#f8fafc;color:#334155">'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>下发人</span></div>'+
        '<input class="input disabled" value="武丁" disabled style="background:#f8fafc;color:#334155">'+
      '</div>'+
    '</div>'+
    '<div class="grid-2" style="gap:16px">'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>业务系统</span></div>'+
        '<input class="input disabled" value="全省网络安全与舆情应急联动系统" disabled style="background:#f8fafc;color:#334155">'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span style="color:#ef4444;font-weight:700;margin-right:3px">*</span><span>紧急程度</span></div>'+
        '<select class="select" disabled style="background:#f8fafc;color:#94a3b8"><option value="" selected>-- 请选择紧急程度 --</option><option>加急</option><option>特急</option><option>平急</option></select>'+
      '</div>'+
    '</div>'+
    timeLimitFields+
  '</div>';

  // 5. 卡片2：指令下发内容 (字段不带出数据，仅保留提示占位符)
  var contentCardTitle = isCategoryError ? "错词纠错内容及核查要求" : (isExclusive ? "机构专版指令内容及采样包" : "指令下发内容");
  var labelSource = isCategoryError ? "刊载平台 / 账号" : (isReadOnly ? "发布渠道 / 编制单位" : "舆情来源 / 平台");
  var labelUrl = isCategoryError ? "错误页面 URL 链接" : "原信息 URL 链接";
  var labelDesc = isCategoryError ? "错误表述及修改建议" : (isReadOnly ? "通报正文及知悉要求" : "舆情说明 / 处置要求");

  var contentCard = '<div class="wizard-form-box" style="margin-bottom:16px">'+
    '<div class="wizard-form-card-head">'+
      '<div>'+
        '<div class="wizard-form-card-title">'+ico(isCategoryError ? "alert-triangle" : "layers-3", 16)+' '+contentCardTitle+'</div>'+
        '<div class="wizard-form-card-sub">'+(isCategoryError ? "录入涉事违规表述信息、源头链接及规范更正指引" : "录入舆情线索来源、原信息链接及具体处置要求")+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="grid-2" style="gap:16px">'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span style="color:#ef4444;font-weight:700;margin-right:3px">*</span><span>'+labelSource+'</span></div>'+
        '<input class="input" placeholder="请输入'+labelSource+'" value="" readonly style="background:#fff">'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>'+labelUrl+'</span></div>'+
        '<input class="input" placeholder="请输入'+labelUrl+'" value="" readonly style="background:#fff">'+
      '</div>'+
    '</div>'+
    '<div class="wizard-field-row">'+
      '<div class="wizard-field-label"><span style="color:#ef4444;font-weight:700;margin-right:3px">*</span><span>'+labelDesc+'</span></div>'+
      '<textarea class="textarea" style="height:90px;background:#fff" placeholder="请输入'+labelDesc+'" readonly></textarea>'+
    '</div>'+
    '<div class="grid-2" style="gap:16px">'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>'+(isCategoryError?"错误截图 / 现场对比图":"佐证图片")+'</span></div>'+
        '<div class="upload" style="padding:14px 12px;height:72px"><div>'+ico("image-plus", 18)+'<br><span style="font-size:11px">'+(isCategoryError?"支持上传错词位置截图 (PNG/JPG)":"上传现场图片 (PNG/JPG)")+'</span></div></div>'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label"><span>'+(isExclusive?"机构数据采样包 / 凭证":"附件文件")+'</span></div>'+
        '<div class="upload" style="padding:14px 12px;height:72px"><div>'+ico("file-up", 18)+'<br><span style="font-size:11px">'+(isExclusive?"上传专项大文件/采样包 (DOC/ZIP/MAX 50MB)":"上传排查采样包/文档 (DOC/ZIP)")+'</span></div></div>'+
      '</div>'+
    '</div>'+
  '</div>';

  // 6. 卡片3：回执区域 / 阅知确认
  var receiptCard = '';
  if(isReadOnly){
    receiptCard = '<div class="wizard-form-box" style="background:#f0fdf4;border:1px dashed #86efac">'+
      '<div class="wizard-form-card-head" style="border-bottom:1px solid #bbf7d0;margin-bottom:12px;padding-bottom:10px">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;width:100%">'+
          '<div>'+
            '<div class="wizard-form-card-title" style="color:#166534">'+ico("check-circle-2", 16)+' 阅知确认模式说明</div>'+
            '<div class="wizard-form-card-sub" style="color:#15803d">本模板为【仅阅读】通知，接收人查阅后系统自动标记已读，免填回执表单。</div>'+
          '</div>'+
          '<span class="tpl-tag-pill read" style="background:#dcfce7;color:#15803d;border:1px solid #86efac">'+ico("check", 12)+' 免填回执</span>'+
        '</div>'+
      '</div>'+
      '<div style="padding:10px 14px;background:#ffffff;border-radius:6px;border:1px solid #bbf7d0;font-size:12.5px;color:#166534;line-height:1.6">'+
        '接收人收到本指令通报后，查阅完正文及附件资料，点击【确认已读】即自动完成流转闭环，无需上传排查报告或佐证材料。'+
      '</div>'+
    '</div>';
  } else {
    receiptCard = '<div class="wizard-form-box" style="background:#f8fafc;border:1px dashed #cbd5e1">'+
      '<div class="wizard-form-card-head" style="border-bottom:1px solid #e2e8f0;margin-bottom:14px;padding-bottom:10px">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;width:100%">'+
          '<div>'+
            '<div class="wizard-form-card-title" style="color:#64748b">'+ico("check-square", 16)+' '+(isUrgent?"限时回执内容（预设填报规范）":"常规处置回执内容（预设填报规范）")+'</div>'+
            '<div class="wizard-form-card-sub" style="color:#94a3b8">以下为接收单位/责任人办结时需提交的回执格式，此处仅供发起人查阅预设样式</div>'+
          '</div>'+
          '<span class="tpl-tag-pill read" style="background:#e2e8f0;color:#64748b;border:none">'+ico("eye", 12)+' 发起人只读预览</span>'+
        '</div>'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label" style="color:#64748b"><span style="color:#94a3b8;margin-right:3px">*</span><span>'+(isCategoryError?"纠错整改结果说明 / 改版更正报告":"处理结果说明 / 处置报告")+'</span></div>'+
        '<textarea class="textarea disabled" disabled style="height:72px;background:#f1f5f9;color:#94a3b8;cursor:not-allowed;border-color:#e2e8f0" placeholder="'+(isCategoryError?"责任部门完成修改更正后，在此录入修正发布情况、相关责任追究及防范措施...":"责任部门完成舆情处置与核查后，在此录入具体处置情况、研判结论与回复意见...")+'"></textarea>'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label" style="color:#64748b"><span>'+(isCategoryError?"更正后页面截图":"处置佐证图片")+'</span></div>'+
          '<div class="upload disabled" style="padding:12px;height:66px;background:#f1f5f9;border:1px dashed #cbd5e1;cursor:not-allowed;display:flex;align-items:center;justify-content:center;text-align:center">'+
            '<div style="color:#94a3b8;font-size:12px">'+ico("image", 18)+'<br><span>接收人上传现场图片/截图 (只读)</span></div>'+
          '</div>'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label" style="color:#64748b"><span>'+(isCategoryError?"整改盖章文件 / 补正报告":"处置附件 / 盖章报告")+'</span></div>'+
          '<div class="upload disabled" style="padding:12px;height:66px;background:#f1f5f9;border:1px dashed #cbd5e1;cursor:not-allowed;display:flex;align-items:center;justify-content:center;text-align:center">'+
            '<div style="color:#94a3b8;font-size:12px">'+ico("file-text", 18)+'<br><span>接收人上传盖章材料/文档 (只读)</span></div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  }

  var formViewHtml = '<div style="padding:18px 24px;overflow-y:auto;flex:1;background:#f8fafc">'+
    topbar +
    basicCard +
    contentCard +
    receiptCard +
  '</div>';

  // 全流程路径视图
  var flowSteps = [
    {
      step: 1,
      title: "指令发起 / 审核下发",
      role: "主管领导 / 发文专班",
      timeLimit: "即时发起",
      desc: "发起人根据业务需求选择本模板，结构化录入指令标题、处置要求与限时倒计时，系统校验完整性后生成唯一流水号下发。",
      actions: ["填写表单字段", "选择机构/分组/人员", "生成全局指令ID", "推送下发通知"]
    },
    {
      step: 2,
      title: "接收指令 / 协同处置",
      role: "属地网信专班 / 责任科室",
      timeLimit: isUrgent ? "按倒计时限期办结" : "常规工作时间内办理",
      desc: "接收部门或专责人员收到指令提醒，点击查阅详情并推进处置办理，支持转办或生成协同子单。",
      actions: ["查阅下发内容与附件", "推进处置填报", "支持转办或生成协同子单"]
    },
    {
      step: 3,
      title: "协同核查 / 回执提报",
      role: "一线处置员 / 业务专员",
      timeLimit: isUrgent ? "按倒计时限期办结" : "按常规排期办理",
      desc: "处置人员开展现场排查、技术溯源或联动整改，对照模板表单逐项填写处理说明，并上传勘验截图、加固报告等佐证材料。",
      actions: ["核实涉事网络线索", "执行阻断/辟谣/加固", "结构化填写回执表单", "上传多模态证据包"]
    },
    {
      step: 4,
      title: "处置成效 / 回执审核",
      role: "发文审批岗 / 值班长",
      timeLimit: "提交后2小时内审核",
      desc: "发文主管对提报的回执报告进行复核：核验通过则同意办结并流转归档；若佐证不足或未达整改标准，则附带修改意见退回重办。",
      actions: ["质检验收处置报告", "合规性与完整性核验", "审核通过 / 退回重办"]
    },
    {
      step: 5,
      title: "全案闭环 / 归档沉淀",
      role: "系统自动处理",
      timeLimit: "审批通过即刻归档",
      desc: "指令全生命周期流转记录、附件凭证与批注日志自动封存入库，同步推送至统计分析大屏，完成端到端闭环。",
      actions: ["电子档案存证封包", "更新统计台账数据", "全流程溯源防篡改"]
    }
  ];

  var flowViewHtml = '<div style="padding:22px 28px;overflow-y:auto;flex:1;background:#f8fafc">' +
    '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 18px;margin-bottom:20px;display:flex;align-items:center;gap:12px;font-size:12.5px;color:#1e40af">' +
      ico("git-commit", 20) +
      '<div>' +
        '<div style="font-weight:700">标准 5 阶段全流程流转闭环拓扑</div>' +
        '<div style="font-size:11.5px;color:#3b82f6;margin-top:2px">本模板已固化全流程路由规则，涵盖下发、签收、回执、审批及归档全链路，确保权责清晰、时限严密、节点留痕。</div>' +
      '</div>' +
    '</div>' +
    '<div style="position:relative;padding-left:28px">' +
      '<div style="position:absolute;left:13px;top:20px;bottom:20px;width:2px;background:#cbd5e1"></div>' +
      flowSteps.map(function(s, idx){
        return '<div style="position:relative;margin-bottom:20px">' +
          '<div style="position:absolute;left:-28px;top:2px;width:28px;height:28px;border-radius:50%;background:#005c58;color:#fff;font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,92,88,0.25);border:2px solid #fff">' + s.step + '</div>' +
          '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:16px 20px;box-shadow:0 1px 3px rgba(0,0,0,0.03)">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
              '<div style="display:flex;align-items:center;gap:10px">' +
                '<span style="font-size:15px;font-weight:800;color:#0f172a">' + s.title + '</span>' +
                '<span style="background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:4px;font-size:11.5px;font-weight:700">' + s.role + '</span>' +
              '</div>' +
              '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">' + s.timeLimit + '</span>' +
            '</div>' +
            '<div style="font-size:13px;color:#475569;line-height:1.6;margin-bottom:12px">' + s.desc + '</div>' +
            '<div style="display:flex;flex-wrap:wrap;gap:8px">' +
              s.actions.map(function(act){
                return '<span style="background:#f1f5f9;color:#334155;border:1px solid #e2e8f0;padding:3px 10px;border-radius:4px;font-size:11.5px;font-weight:600;display:inline-flex;align-items:center;gap:4px">' +
                  ico("check-circle-2", 12) + ' ' + act +
                '</span>';
              }).join("") +
            '</div>' +
          '</div>' +
        '</div>';
      }).join("") +
    '</div>' +
  '</div>';

  return '<div class="modal tpl-preview-view-modal" style="width:880px;max-width:94vw;height:85vh;max-height:800px;display:flex;flex-direction:column">' +
    '<div class="modal-head" style="padding:16px 24px;border-bottom:1px solid #e2e8f0;background:#ffffff;display:flex;align-items:center;justify-content:space-between;flex-shrink:0">' +
      '<div style="display:flex;align-items:center;gap:10px">' +
        '<div style="width:34px;height:34px;border-radius:8px;background:#e6f4f3;color:#005c58;display:flex;align-items:center;justify-content:center">' + ico("eye", 18) + '</div>' +
        '<div>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-size:16px;font-weight:800;color:#0f172a">' + escapeHtml(tpl.name) + '</span>' +
            (isExclusive ? '<span style="background:#fef3c7;color:#b45309;padding:1px 6px;border-radius:4px;font-size:11px;font-weight:700">机构专版</span>' : '<span style="background:#f1f5f9;color:#475569;padding:1px 6px;border-radius:4px;font-size:11px;font-weight:600">全局通用</span>') +
            '<span style="background:#e0f2fe;color:#0369a1;padding:1px 6px;border-radius:4px;font-size:11px;font-weight:700">' + tpl.category + '</span>' +
          '</div>' +
          '<div style="font-size:11.5px;color:#64748b;font-family:\'JetBrains Mono\', monospace;margin-top:2px">模板编码: ' + tpl.id + ' ｜ 版本: ' + (tpl.version || "v2.0") + ' ｜ 状态：<span style="color:#005c58;font-weight:700">表单样式预览</span></div>' +
        '</div>' +
      '</div>' +
      '<button class="close" data-close style="cursor:pointer;background:none;border:none;color:#64748b">' + ico("x", 20) + '</button>' +
    '</div>' +
    '<div class="tpl-preview-tab-bar" style="display:flex;gap:4px;padding:0 24px;background:#ffffff;border-bottom:1px solid #e2e8f0;flex-shrink:0">' +
      '<button type="button" class="tpl-preview-tab-btn ' + (activeTab === "form" ? "active" : "") + '" data-action="switch-preview-tpl-tab" data-tab="form">' +
        ico("file-text", 15) + ' 表单结构预览 (第二步结构)' +
      '</button>' +
      '<button type="button" class="tpl-preview-tab-btn ' + (activeTab === "flow" ? "active" : "") + '" data-action="switch-preview-tpl-tab" data-tab="flow">' +
        ico("git-fork", 15) + ' 全流程路径' +
      '</button>' +
    '</div>' +
    (activeTab === "form" ? formViewHtml : flowViewHtml) +
    '<div class="modal-foot" style="padding:12px 24px;border-top:1px solid #e2e8f0;background:#ffffff;display:flex;justify-content:space-between;align-items:center;flex-shrink:0">' +
      '<div style="font-size:12.5px;color:#64748b">' +
        '模板编码: <b style="color:#0f172a;font-family:\'JetBrains Mono\', monospace">'+tpl.id+'</b> ｜ 分类: <b style="color:#005c58">'+tpl.category+'</b> ('+tpl.requirement+')' +
      '</div>' +
      '<div style="display:flex;gap:10px">' +
        '<button type="button" class="btn light" data-close style="padding:0 20px;font-weight:700">' + ico("x", 14) + ' 关闭预览</button>' +
        '<button type="button" class="btn primary" data-action="wizard-choose-and-next" data-tpl-id="' + tpl.id + '" style="padding:0 24px;font-weight:800;background:linear-gradient(135deg, #005c58, #009893)">' + ico("arrow-right", 15) + ' 选用此模板并下一步</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/* === 3. 角色权限设置面板（先列表展示，点击编辑进入详情设置，支持新建角色与编辑） === */
function renderRolesPane(){
  state.roleSubView = state.roleSubView || "list"; // "list" | "detail"
  state.selectedRoleId = state.selectedRoleId || (systemRoles[0] ? systemRoles[0].id : "role_superadmin");
  state.rolePermTab = state.rolePermTab || "menu"; // "menu" | "data" | "members" | "basic"

  if(state.roleSubView === "list"){
    return renderRoleListView();
  } else {
    return renderRoleDetailView();
  }
}

/* === 3.1 角色权限列表主视图 === */
function renderRoleListView(){
  var kw = (state.roleSearchKw || "").trim().toLowerCase();
  var filteredRoles = systemRoles.filter(function(r){
    if(!kw) return true;
    return r.name.toLowerCase().indexOf(kw) > -1 ||
           r.code.toLowerCase().indexOf(kw) > -1 ||
           (r.desc && r.desc.toLowerCase().indexOf(kw) > -1);
  });

  var filterToolbarHtml = '<div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px;background:#ffffff;padding:10px 14px;border:1px solid #e2e8f0;border-radius:6px">' +
    '<div style="display:flex;align-items:center;gap:10px;flex:1">' +
      '<div style="position:relative;width:320px">' +
        '<input type="text" class="input" placeholder="搜索角色名称 / 编码 / 职责说明..." value="' + escapeHtml(state.roleSearchKw || "") + '" data-action="role-list-search-input" style="height:32px;font-size:12.5px;padding-left:30px">' +
        '<span style="position:absolute;left:9px;top:8px;color:#94a3b8;display:flex">' + ico("search", 14) + '</span>' +
      '</div>' +
      (state.roleSearchKw ? '<button type="button" class="btn light small" data-action="role-list-search-clear" style="height:32px;font-size:12px">' + ico("x", 12) + ' 清空</button>' : '') +
    '</div>' +
    '<button type="button" class="btn primary" data-action="open-create-role-modal" style="font-weight:700;font-size:12.5px;padding:6px 16px;height:34px;background:#005c58;border-color:#005c58">' + ico("plus", 14) + ' 新建角色</button>' +
  '</div>';

  var tableRowsHtml = "";
  if(!filteredRoles.length){
    tableRowsHtml = '<tr><td colspan="6" style="padding:48px 0;text-align:center;color:#94a3b8;font-size:12.5px">' +
      ico("users", 36) +
      '<p style="margin-top:8px">未检索到匹配的岗位角色数据</p>' +
    '</td></tr>';
  } else {
    tableRowsHtml = filteredRoles.map(function(r, idx){
      var isSys = !!r.isSystem;
      var sourceHtml = isSys
        ? '<span class="role-source-tag role-source-system">系统内置</span>'
        : '<span class="role-source-tag role-source-custom">自建</span>';
      var actionHtml = isSys
        ? '<button type="button" class="btn light small" data-action="edit-role-detail" data-role-id="' + r.id + '" style="font-size:12px;padding:2px 10px;font-weight:700;color:#005c58;border-color:#99d5d1;background:#f0fdf9">' + ico("eye", 12) + ' 查看</button>'
        : '<button type="button" class="btn light small" data-action="edit-role-detail" data-role-id="' + r.id + '" style="font-size:12px;padding:2px 10px;font-weight:700;color:#005c58;border-color:#99d5d1;background:#f0fdf9">' + ico("edit", 12) + ' 编辑</button>' +
          '<button type="button" class="btn small" data-action="delete-custom-role" data-role-id="' + r.id + '" style="font-size:12px;padding:2px 8px;color:#ef4444;border-color:#fecaca" title="删除自建角色">' + ico("trash-2", 12) + ' 删除</button>';

      return '<tr>' +
        '<td style="text-align:center;font-weight:600;color:#64748b;font-size:12px">' + (idx + 1) + '</td>' +
        '<td>' +
          '<div>' +
            '<b style="color:#0f172a;font-size:13.5px">' + escapeHtml(r.name) + '</b>' +
            '<div style="font-size:11.5px;color:#64748b;font-family:\'JetBrains Mono\', monospace;margin-top:1px">' + r.code + '</div>' +
          '</div>' +
        '</td>' +
        '<td style="text-align:center"><span style="font-size:12.5px;font-weight:700;color:#005c58">' + (r.userCount || 0) + ' 人</span></td>' +
        '<td>' + sourceHtml + '</td>' +
        '<td><div style="font-size:12px;color:#475569;line-height:1.45">' + escapeHtml(r.desc || "-") + '</div></td>' +
        '<td style="text-align:center">' +
          '<div style="display:flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap">' + actionHtml + '</div>' +
        '</td>' +
      '</tr>';
    }).join("");
  }

  var tableHtml = '<div class="settings-table-card">' +
    '<table class="table" style="margin:0">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:45px;text-align:center">序号</th>' +
          '<th style="width:240px">岗位角色名称 / 编码</th>' +
          '<th style="width:90px;text-align:center">绑定人数</th>' +
          '<th style="width:110px">来源</th>' +
          '<th>职责与业务场景说明</th>' +
          '<th style="width:150px;text-align:center">操作</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' + tableRowsHtml + '</tbody>' +
    '</table>' +
  '</div>';

  return '<div class="role-list-container">' + filterToolbarHtml + tableHtml + '</div>';
}

/* === 3.2 角色权限详情编辑视图 === */
function renderRoleDetailView(){
  var curRole = systemRoles.filter(function(r){ return r.id === state.selectedRoleId; })[0] || systemRoles[0];
  if(!curRole.menuPerms) curRole.menuPerms = [];
  if(!curRole.customDepts) curRole.customDepts = [];
  var isReadonly = !!curRole.isSystem;

  var totalMenuItemCount = 0;
  totalMenuItemCount = collectAllMenuPermIds().length;
  var curRoleMenuCount = curRole.menuPerms.length;
  var curRoleMenuPercent = Math.round((curRoleMenuCount / (totalMenuItemCount || 1)) * 100);
  var curScopeObj = dataScopeOptions.filter(function(o){ return o.id === curRole.dataScope; })[0] || dataScopeOptions[0];

  // 1. Navigation head bar
  var headBarHtml = '<div class="role-detail-head-bar">' +
    '<div style="display:flex;align-items:center;gap:12px">' +
      '<button type="button" class="btn light small" data-action="back-to-role-list" style="font-size:12px;font-weight:700;padding:3px 12px;height:30px">' +
        ico("arrow-left", 14) + ' 返回角色列表' +
      '</button>' +
      '<div style="width:1px;height:18px;background:#cbd5e1"></div>' +
      '<div class="role-detail-breadcrumb">' +
        '<span>系统设置</span>' +
        '<span>/</span>' +
        '<span style="cursor:pointer" data-action="back-to-role-list">角色权限配置</span>' +
        '<span>/</span>' +
        '<b style="color:#005c58">' + (isReadonly ? '查看详情：' : '编辑详情：') + escapeHtml(curRole.name) + '</b>' +
      '</div>' +
    '</div>' +
  '</div>';

  // 2. Role Overview Hero Card
  var heroHtml = '<div class="role-detail-hero">' +
    '<div style="display:flex;align-items:center;gap:14px">' +
      '<div class="role-item-avatar" style="width:40px;height:40px;font-size:16px;border-radius:8px;background:#005c58;color:#fff;flex-shrink:0">' +
        (curRole.name ? curRole.name[0] : "角") +
      '</div>' +
      '<div>' +
        '<div style="display:flex;align-items:center;gap:8px">' +
          '<b style="font-size:15px;color:#0f172a">' + escapeHtml(curRole.name) + '</b>' +
          (curRole.isSystem ? '<span class="role-tag-system">' + ico("shield", 11) + ' 系统内置核心角色</span>' : '<span class="role-tag-custom">' + ico("user", 11) + ' 自定义角色</span>') +
        '</div>' +
        '<div style="font-size:12px;color:#64748b;margin-top:4px;line-height:1.4">' + escapeHtml(curRole.desc || "暂无职责说明") + '</div>' +
      '</div>' +
    '</div>' +
    (isReadonly ? '' : '<button type="button" class="btn primary" data-action="save-role-permissions" data-role="' + curRole.id + '" style="font-weight:700;font-size:12.5px;padding:6px 16px;height:34px;background:#005c58;border-color:#005c58">' +
      ico("check", 14) + ' 保存' +
    '</button>') +
  '</div>';

  // 3. Tab bar
  var tabsBarHtml = '<div class="role-detail-tabs-bar">' +
    '<button type="button" class="role-detail-tab-btn ' + (state.rolePermTab === "menu" ? "active" : "") + '" data-action="switch-role-perm-tab" data-tab="menu">' +
      ico("sliders", 14) + ' 功能菜单与操作权限' +
    '</button>' +
    '<button type="button" class="role-detail-tab-btn ' + (state.rolePermTab === "data" ? "active" : "") + '" data-action="switch-role-perm-tab" data-tab="data">' +
      ico("shield", 14) + ' 数据权限范围与安全策略' +
    '</button>' +
    '<button type="button" class="role-detail-tab-btn ' + (state.rolePermTab === "members" ? "active" : "") + '" data-action="switch-role-perm-tab" data-tab="members">' +
      ico("users", 14) + ' 已授权人员' +
    '</button>' +
    '<button type="button" class="role-detail-tab-btn ' + (state.rolePermTab === "basic" ? "active" : "") + '" data-action="switch-role-perm-tab" data-tab="basic">' +
      ico("user-cog", 14) + ' 角色基本信息维护' +
    '</button>' +
  '</div>';

  // Content for Menu Perms Tab
  var menuPermsContentHtml = "";
  if(state.rolePermTab === "menu"){
    if(!state.roleMenuExpanded) state.roleMenuExpanded = { menu_stats: true };
    var groupCardsHtml = menuPermissionGroups.map(function(grp){
      var grpIds = collectGroupPermIds(grp);
      var grpCheckedCount = grpIds.filter(function(id){ return isPermChecked(curRole, id); }).length;
      var allGrpChecked = grpCheckedCount === grpIds.length;
      var isExpanded = !!state.roleMenuExpanded[grp.id];
      var hasBody = (grp.actions && grp.actions.length) || (grp.children && grp.children.length);

      var groupActionsHtml = (grp.actions || []).map(function(act){
        var actChecked = isPermChecked(curRole, act.id);
        return '<label class="perm-action-check' + (actChecked ? ' on' : '') + '"' +
          (isReadonly ? '' : ' data-action="toggle-menu-perm" data-role="' + curRole.id + '" data-perm="' + act.id + '"') + '>' +
          '<input type="checkbox" ' + (actChecked ? 'checked' : '') + ' style="pointer-events:none">' +
          '<span>' + escapeHtml(act.name) + '</span>' +
        '</label>';
      }).join("");

      var childrenHtml = (grp.children || []).map(function(child){
        var childChecked = isPermChecked(curRole, child.id);
        var actionsHtml = (child.actions || []).map(function(act){
          var actChecked = isPermChecked(curRole, act.id);
          return '<label class="perm-action-check' + (actChecked ? ' on' : '') + '"' +
            (isReadonly ? '' : ' data-action="toggle-menu-perm" data-role="' + curRole.id + '" data-perm="' + act.id + '"') + '>' +
            '<input type="checkbox" ' + (actChecked ? 'checked' : '') + ' style="pointer-events:none">' +
            '<span>' + escapeHtml(act.name) + '</span>' +
          '</label>';
        }).join("");

        return '<div class="perm-page-block">' +
          '<label class="perm-page-check' + (childChecked ? ' on' : '') + '"' +
            (isReadonly ? '' : ' data-action="toggle-menu-perm" data-role="' + curRole.id + '" data-perm="' + child.id + '"') + '>' +
            '<input type="checkbox" ' + (childChecked ? 'checked' : '') + ' style="pointer-events:none">' +
            '<span>' + escapeHtml(child.name) + '</span>' +
          '</label>' +
          (actionsHtml ? '<div class="perm-action-row">' + actionsHtml + '</div>' : '') +
        '</div>';
      }).join("");

      return '<div class="perm-drawer' + (isExpanded ? ' open' : '') + '">' +
        '<div class="perm-drawer-head">' +
          '<label class="perm-drawer-check' + (allGrpChecked ? ' on' : '') + '"' +
            (isReadonly ? '' : ' data-action="toggle-menu-group" data-role="' + curRole.id + '" data-group="' + grp.id + '"') + '>' +
            '<input type="checkbox" ' + (allGrpChecked ? 'checked' : '') + (grpCheckedCount && !allGrpChecked ? ' data-indeterminate="true"' : '') + ' style="pointer-events:none">' +
          '</label>' +
          '<button type="button" class="perm-drawer-toggle"' + (hasBody ? ' data-action="toggle-role-drawer" data-group="' + grp.id + '"' : '') + '>' +
            '<span class="perm-drawer-name">' + escapeHtml(grp.name) + '</span>' +
            (hasBody ? ico(isExpanded ? "chevron-up" : "chevron-down", 16) : '') +
          '</button>' +
        '</div>' +
        (isExpanded && hasBody ? '<div class="perm-drawer-body">' +
          (groupActionsHtml ? '<div class="perm-action-row" style="padding-left:0;padding-bottom:8px">' + groupActionsHtml + '</div>' : '') +
          childrenHtml +
        '</div>' : '') +
      '</div>';
    }).join("");

    menuPermsContentHtml = '<div>' +
      '<div class="role-bench-actions-bar" style="padding:10px 14px;margin-bottom:12px">' +
        '<div style="display:flex;align-items:center;gap:12px">' +
          '<div>' +
            '<span style="font-size:13px;font-weight:700;color:#0f172a">当前已授权：' + curRoleMenuCount + ' / ' + totalMenuItemCount + ' 项</span>' +
            '<span style="font-size:11.5px;color:#64748b;margin-left:4px">（权限覆盖率 ' + curRoleMenuPercent + '%）</span>' +
          '</div>' +
          '<div style="width:140px;background:#e2e8f0;height:6px;border-radius:3px;overflow:hidden">' +
            '<div style="background:#005c58;height:100%;width:' + curRoleMenuPercent + '%;transition:width 0.2s"></div>' +
          '</div>' +
        '</div>' +
        (isReadonly ? '<span style="font-size:12px;color:#64748b;background:#f8fafc;border:1px solid #e2e8f0;padding:4px 10px;border-radius:4px">系统内置角色仅支持查看</span>' : '<div style="display:flex;align-items:center;gap:8px">' +
          '<button type="button" class="btn light" data-action="batch-menu-perms" data-role="' + curRole.id + '" data-type="all" style="padding:3px 10px;font-size:12px;font-weight:700;height:28px">' + ico("check-square", 13) + ' 一键全选</button>' +
          '<button type="button" class="btn light" data-action="batch-menu-perms" data-role="' + curRole.id + '" data-type="readonly" style="padding:3px 10px;font-size:12px;font-weight:700;height:28px">' + ico("eye", 13) + ' 基础只读</button>' +
          '<button type="button" class="btn light" data-action="batch-menu-perms" data-role="' + curRole.id + '" data-type="clear" style="padding:3px 10px;font-size:12px;font-weight:700;color:#ef4444;height:28px">' + ico("rotate-ccw", 13) + ' 清空选择</button>' +
        '</div>') +
      '</div>' +
      groupCardsHtml +
    '</div>';
  }

  // Content for Data Perms Tab
  var dataPermsContentHtml = "";
  if(state.rolePermTab === "data"){
    var scopeCardsHtml = dataScopeOptions.map(function(opt){
      var isCurScope = (curRole.dataScope === opt.id);
      return '<div class="data-scope-card ' + (isCurScope ? 'active' : '') + '"' + (isReadonly ? '' : ' data-action="change-data-scope" data-role="' + curRole.id + '" data-scope="' + opt.id + '"') + ' style="padding:12px 14px;gap:6px' + (isReadonly ? ';cursor:default' : '') + '">' +
        '<div style="display:flex;align-items:center;justify-content:space-between">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span class="data-scope-radio-outer" style="width:16px;height:16px"></span>' +
            '<b style="font-size:13.5px;color:#0f172a">' + escapeHtml(opt.name) + '</b>' +
          '</div>' +
          '<span class="role-scope-badge ' + opt.tagCls + '">' + ico(opt.icon, 11) + ' ' + opt.badge + '</span>' +
        '</div>' +
        '<div style="font-size:11.5px;color:#475569;line-height:1.4">' + escapeHtml(opt.desc) + '</div>' +
      '</div>';
    }).join("");

    var customDeptHtml = '';
    if(curRole.dataScope === "CUSTOM"){
      var deptItemsHtml = customDeptOptions.map(function(dept){
        var isDeptChecked = (curRole.customDepts.indexOf(dept.id) > -1);
        return '<div class="custom-dept-item ' + (isDeptChecked ? 'checked' : '') + '"' + (isReadonly ? '' : ' data-action="toggle-custom-dept" data-role="' + curRole.id + '" data-dept="' + dept.id + '"') + ' style="padding:7px 10px;font-size:12.5px' + (isReadonly ? ';cursor:default' : '') + '">' +
          '<input type="checkbox" ' + (isDeptChecked ? 'checked' : '') + ' style="pointer-events:none;width:14px;height:14px;accent-color:#005c58">' +
          '<div style="flex:1;min-width:0">' +
            '<div style="font-weight:700;font-size:12.5px;color:#0f172a">' + escapeHtml(dept.name) + '</div>' +
            '<div style="font-size:11px;color:#64748b;font-family:\'JetBrains Mono\', monospace">' + dept.code + '</div>' +
          '</div>' +
        '</div>';
      }).join("");

      customDeptHtml = '<div class="custom-dept-box" style="padding:12px 14px;margin-bottom:16px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between">' +
          '<div>' +
            '<b style="font-size:13px;color:#0f172a">自定义可查看的组织节点</b>' +
            '<div style="font-size:11.5px;color:#64748b;margin-top:2px">已选择 ' + curRole.customDepts.length + ' / ' + customDeptOptions.length + ' 个节点</div>' +
          '</div>' +
          (isReadonly ? '' : '<div style="display:flex;align-items:center;gap:6px">' +
            '<button type="button" class="btn light" data-action="batch-custom-depts" data-role="' + curRole.id + '" data-type="all" style="padding:2px 8px;font-size:11.5px;font-weight:700;height:26px">全选</button>' +
            '<button type="button" class="btn light" data-action="batch-custom-depts" data-role="' + curRole.id + '" data-type="clear" style="padding:2px 8px;font-size:11.5px;font-weight:700;color:#ef4444;height:26px">清空</button>' +
          '</div>') +
        '</div>' +
        '<div class="custom-dept-grid" style="gap:8px">' + deptItemsHtml + '</div>' +
      '</div>';
    }

    dataPermsContentHtml = '<div>' +
      '<div style="margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">' +
        '<b style="font-size:13.5px;color:#0f172a">1. 数据查看范围规则 (Data Scope Hierarchy)</b>' +
        '<span style="font-size:11.5px;color:#64748b">单选生效</span>' +
      '</div>' +
      '<div class="data-scope-grid" style="gap:10px;margin-bottom:16px">' + scopeCardsHtml + '</div>' +
      customDeptHtml +
      '<div style="margin-bottom:8px">' +
        '<b style="font-size:13.5px;color:#0f172a">2. 数据敏感脱敏与防泄密安全防护策略</b>' +
      '</div>' +
      '<div class="data-security-card" style="padding:12px 16px;margin-top:8px">' +
        '<div class="security-toggle-row" style="padding:8px 0">' +
          '<div style="display:flex;align-items:flex-start;gap:10px">' +
            '<div style="width:28px;height:28px;border-radius:6px;background:#fef3c7;color:#d97706;display:flex;align-items:center;justify-content:center;margin-top:2px">' + ico("lock", 15) + '</div>' +
            '<div>' +
              '<div style="font-weight:700;font-size:13px;color:#0f172a">涉密线索与公民隐私数据自动掩码脱敏</div>' +
              '<div style="font-size:11.5px;color:#64748b;margin-top:2px">开启后，对工单正文中的身份证号、手机号码及机密研判线索实施遮蔽掩码。</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="switch-pill ' + (curRole.maskSensitive ? 'active' : '') + '"' + (isReadonly ? ' disabled style="pointer-events:none;opacity:.7"' : ' data-action="toggle-role-security" data-role="' + curRole.id + '" data-field="maskSensitive"') + '></button>' +
        '</div>' +
        '<div class="security-toggle-row" style="padding:8px 0">' +
          '<div style="display:flex;align-items:flex-start;gap:10px">' +
            '<div style="width:28px;height:28px;border-radius:6px;background:#e0f2fe;color:#0284c7;display:flex;align-items:center;justify-content:center;margin-top:2px">' + ico("shield", 15) + '</div>' +
            '<div>' +
              '<div style="font-weight:700;font-size:13px;color:#0f172a">数据报表批量导出防泄密动态水印</div>' +
              '<div style="font-size:11.5px;color:#64748b;margin-top:2px">导出 Excel、PDF 或查阅流转台账时，嵌入操作人账号、姓名、IP 及时间戳透明防伪水印。</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="switch-pill ' + (curRole.watermark ? 'active' : '') + '"' + (isReadonly ? ' disabled style="pointer-events:none;opacity:.7"' : ' data-action="toggle-role-security" data-role="' + curRole.id + '" data-field="watermark"') + '></button>' +
        '</div>' +
        '<div class="security-toggle-row" style="padding:8px 0">' +
          '<div style="display:flex;align-items:flex-start;gap:10px">' +
            '<div style="width:28px;height:28px;border-radius:6px;background:#f3e8ff;color:#7e22ce;display:flex;align-items:center;justify-content:center;margin-top:2px">' + ico("download", 15) + '</div>' +
            '<div>' +
              '<div style="font-weight:700;font-size:13px;color:#0f172a">单次最大数据导出条数安全阈值</div>' +
              '<div style="font-size:11.5px;color:#64748b;margin-top:2px">防止大批量泄密爬取，限制该角色单次导出的最大工单数量。</div>' +
            '</div>' +
          '</div>' +
          '<select class="select" id="role-export-limit-select" data-role="' + curRole.id + '" style="width:140px;height:32px;padding:4px 8px;font-size:12px;font-weight:700"' + (isReadonly ? ' disabled' : '') + '>' +
            '<option value="5000" ' + (curRole.exportLimit === "5000" ? 'selected' : '') + '>5,000 条 (全量)</option>' +
            '<option value="2000" ' + (curRole.exportLimit === "2000" ? 'selected' : '') + '>2,000 条 (常规)</option>' +
            '<option value="1000" ' + (curRole.exportLimit === "1000" ? 'selected' : '') + '>1,000 条 (适中)</option>' +
            '<option value="200" ' + (curRole.exportLimit === "200" ? 'selected' : '') + '>200 条 (严格)</option>' +
            '<option value="0" ' + (curRole.exportLimit === "0" ? 'selected' : '') + '>禁止导出</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // Content for Authorized Members Tab
  var membersContentHtml = "";
  if(state.rolePermTab === "members"){
    if(!curRole.members) curRole.members = [];
    var memberRows = "";
    if(!curRole.members.length){
      memberRows = '<tr><td colspan="4" style="padding:40px 0;text-align:center;color:#94a3b8;font-size:13px">' +
        ico("users", 32) +
        '<p style="margin-top:8px">暂无已授权人员' + (isReadonly ? '' : '，请点击右上角添加授权') + '</p>' +
      '</td></tr>';
    } else {
      memberRows = curRole.members.map(function(m){
        return '<tr>' +
          '<td>' +
            '<div class="user-cell" style="gap:8px">' +
              '<span class="mini-avatar">' + escapeHtml((m.name || "?").slice(0,1)) + '</span>' +
              '<div><b style="font-size:13px;color:#0f172a">' + escapeHtml(m.name) + '</b>' +
              '<small style="display:block;color:#64748b">' + escapeHtml(m.title || "人员") + '</small></div>' +
            '</div>' +
          '</td>' +
          '<td><span style="font-family:\'JetBrains Mono\', monospace;font-size:12px;color:#0284c7">' + escapeHtml(m.account || "-") + '</span></td>' +
          '<td style="font-size:12.5px;color:#475569">' + escapeHtml(m.dept || "-") + '</td>' +
          '<td style="text-align:center">' +
            (isReadonly ? '<span style="font-size:12px;color:#94a3b8">系统内置</span>' :
              '<button type="button" class="btn small" data-action="remove-role-member" data-role="' + curRole.id + '" data-staff="' + m.id + '" style="font-size:12px;padding:2px 8px;color:#ef4444;border-color:#fecaca">' + ico("trash-2", 12) + ' 取消授权</button>') +
          '</td>' +
        '</tr>';
      }).join("");
    }
    membersContentHtml = '<div>' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">' +
        '<div>' +
          '<b style="font-size:13.5px;color:#0f172a">已授权人员</b>' +
          '<span style="font-size:12px;color:#64748b;margin-left:8px">当前角色共 ' + curRole.members.length + ' 人可使用该权限配置</span>' +
        '</div>' +
        (isReadonly ? '' : '<button type="button" class="btn primary" data-action="open-assign-role-members" data-role="' + curRole.id + '" style="height:32px;font-size:12.5px;font-weight:700;background:#005c58;border-color:#005c58">' + ico("user-plus", 14) + ' 添加授权</button>') +
      '</div>' +
      '<div class="settings-table-card">' +
        '<table class="table" style="margin:0">' +
          '<thead><tr>' +
            '<th>人员</th>' +
            '<th style="width:160px">账号</th>' +
            '<th style="width:220px">所属部门</th>' +
            '<th style="width:120px;text-align:center">操作</th>' +
          '</tr></thead>' +
          '<tbody>' + memberRows + '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';
  }

  // Content for Basic Info Tab
  var basicInfoContentHtml = "";
  if(state.rolePermTab === "basic"){
    basicInfoContentHtml = '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;padding:16px 20px;max-width:680px">' +
      '<div style="margin-bottom:14px">' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px">角色名称</label>' +
        '<input type="text" id="role-edit-name-inp" class="input" value="' + escapeHtml(curRole.name) + '" style="height:34px;font-size:13px;max-width:380px' + (isReadonly ? ';background:#f8fafc' : '') + '"' + (isReadonly ? ' readonly' : '') + '>' +
      '</div>' +
      '<div style="margin-bottom:14px">' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px">角色标识编码</label>' +
        '<input type="text" id="role-edit-code-inp" class="input" value="' + escapeHtml(curRole.code) + '" style="height:34px;font-size:12px;font-family:\'JetBrains Mono\', monospace;max-width:380px;background:#f8fafc" readonly>' +
        '<span style="font-size:11px;color:#94a3b8;margin-top:2px;display:block">编码由系统自动生成，不可修改</span>' +
      '</div>' +
      '<div style="margin-bottom:16px">' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px">角色职责与业务场景说明</label>' +
        '<textarea id="role-edit-desc-inp" class="textarea" style="height:76px;font-size:12px;padding:8px 10px;line-height:1.5' + (isReadonly ? ';background:#f8fafc' : '') + '"' + (isReadonly ? ' readonly' : '') + '>' + escapeHtml(curRole.desc || "") + '</textarea>' +
      '</div>' +
    '</div>';
  }

  return '<div class="role-detail-container">' +
    headBarHtml +
    heroHtml +
    '<div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden">' +
      tabsBarHtml +
      '<div style="padding:16px 18px">' +
        (state.rolePermTab === "menu" ? menuPermsContentHtml :
         state.rolePermTab === "data" ? dataPermsContentHtml :
         state.rolePermTab === "members" ? membersContentHtml : basicInfoContentHtml) +
      '</div>' +
    '</div>' +
  '</div>';
}

/* === 3.3 新建角色模态弹窗 === */
function renderCreateRoleModal(){
  var autoCode = generateRoleCode();
  return '<div class="modal" style="width:520px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;font-size:15px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between">' +
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<div style="width:26px;height:26px;border-radius:6px;background:#e6f4f3;color:#005c58;display:flex;align-items:center;justify-content:center">' + ico("user-plus", 15) + '</div>' +
        '<b style="font-size:15px;color:#0f172a">新建岗位角色</b>' +
      '</div>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:16px 20px;max-height:calc(85vh - 110px);overflow-y:auto">' +
      '<div style="margin-bottom:14px">' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px"><span style="color:#ef4444">*</span> 角色名称</label>' +
        '<input type="text" id="new-role-name-input" class="input" placeholder="例如：舆情处置专班岗、外协督导员..." style="height:34px;font-size:12.5px">' +
      '</div>' +
      '<div style="margin-bottom:14px">' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px">角色标识编码</label>' +
        '<input type="text" id="new-role-code-input" class="input" value="' + autoCode + '" readonly style="height:34px;font-size:12px;font-family:\'JetBrains Mono\',monospace;background:#f8fafc;color:#64748b">' +
        '<div style="font-size:11px;color:#94a3b8;margin-top:4px">由系统自动生成，创建后不可修改</div>' +
      '</div>' +
      '<div>' +
        '<label style="display:block;font-size:12.5px;font-weight:700;color:#334155;margin-bottom:5px">角色说明</label>' +
        '<textarea id="new-role-desc-textarea" class="textarea" placeholder="填写该角色的业务范围、岗位职能说明..." style="height:88px;font-size:12px;padding:8px 10px"></textarea>' +
      '</div>' +
    '</div>' +
    '<div class="modal-foot" style="height:50px;padding:0 20px;border-top:1px solid #e2e8f0;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-close style="height:30px;font-size:12px">取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-create-role" style="height:30px;font-size:12px;font-weight:700">' + ico("check", 13) + ' 确认创建</button>' +
    '</div>' +
  '</div>';
}

function renderAssignRoleMembersModal(){
  var roleId = state.assignRoleId || state.selectedRoleId;
  var role = systemRoles.filter(function(r){ return r.id === roleId; })[0];
  if(!role) role = systemRoles[0];
  if(!role.members) role.members = [];
  if(!state.roleMemberPickIds) state.roleMemberPickIds = [];
  var assignedIds = role.members.map(function(m){ return m.id; });
  var candidates = orgStaffPool.filter(function(s){ return assignedIds.indexOf(s.id) < 0; });
  var pickCount = state.roleMemberPickIds.length;

  var listHtml = "";
  if(!candidates.length){
    listHtml = '<div style="padding:36px 0;text-align:center;color:#94a3b8;font-size:13px">' + ico("check-circle-2", 28) + '<p style="margin-top:8px">机构人员均已授权到该角色</p></div>';
  } else {
    listHtml = candidates.map(function(s){
      var on = state.roleMemberPickIds.indexOf(s.id) > -1;
      return '<label class="custom-dept-item ' + (on ? 'checked' : '') + '" data-action="toggle-role-member-pick" data-staff="' + s.id + '" style="padding:8px 10px;cursor:pointer;display:flex;align-items:center;gap:10px">' +
        '<input type="checkbox" ' + (on ? 'checked' : '') + ' style="pointer-events:none;width:14px;height:14px;accent-color:#005c58">' +
        '<span class="mini-avatar" style="flex-shrink:0">' + escapeHtml(s.name.slice(0,1)) + '</span>' +
        '<div style="flex:1;min-width:0">' +
          '<div style="font-weight:700;font-size:13px;color:#0f172a">' + escapeHtml(s.name) + ' <span style="font-weight:500;font-size:11.5px;color:#64748b">' + escapeHtml(s.title) + '</span></div>' +
          '<div style="font-size:11.5px;color:#64748b">' + escapeHtml(s.dept) + ' · ' + escapeHtml(s.account) + '</div>' +
        '</div>' +
      '</label>';
    }).join("");
  }

  return '<div class="modal" style="width:520px;max-width:92vw">' +
    '<div class="modal-head" style="height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between">' +
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<div style="width:26px;height:26px;border-radius:6px;background:#e6f4f3;color:#005c58;display:flex;align-items:center;justify-content:center">' + ico("user-plus", 15) + '</div>' +
        '<b style="font-size:15px;color:#0f172a">添加授权人员</b>' +
      '</div>' +
      '<button class="close" data-close style="border:none;background:none;cursor:pointer;color:#94a3b8">' + ico("x", 16) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:16px 20px">' +
      '<div style="font-size:12.5px;color:#64748b;margin-bottom:10px">为【' + escapeHtml(role.name) + '】选择可使用该角色权限的人员，已选 ' + pickCount + ' 人</div>' +
      '<input type="text" class="input" placeholder="搜索姓名 / 账号 / 部门..." data-action="role-member-pick-search" style="height:32px;font-size:12.5px;margin-bottom:10px">' +
      '<div class="custom-dept-grid" id="role-member-pick-list" style="grid-template-columns:1fr;gap:6px;max-height:320px;overflow:auto">' + listHtml + '</div>' +
    '</div>' +
    '<div class="modal-foot" style="height:50px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:8px">' +
      '<button type="button" class="btn light" data-close style="height:30px;font-size:12px">取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-add-role-members" style="height:30px;font-size:12px;font-weight:700"' + (!pickCount || !candidates.length ? ' disabled' : '') + '>' + ico("check", 13) + ' 确认添加</button>' +
    '</div>' +
  '</div>';
}

function confirmCreateRoleFromForm(){
  var nameInp = document.getElementById("new-role-name-input");
  var codeInp = document.getElementById("new-role-code-input");
  var descInp = document.getElementById("new-role-desc-textarea");
  var rName = nameInp ? nameInp.value.trim() : "";
  if(!rName){
    showToast("请输入角色名称");
    if(nameInp) nameInp.focus();
    return false;
  }
  var rCode = codeInp && codeInp.value.trim() ? codeInp.value.trim().toUpperCase() : generateRoleCode();
  if(systemRoles.some(function(r){ return r.code === rCode; })){
    rCode = generateRoleCode();
  }
  var newRoleId = "role_custom_" + Date.now();
  var newRole = {
    id: newRoleId,
    name: rName,
    code: rCode,
    userCount: 0,
    isSystem: false,
    desc: descInp ? descInp.value.trim() : "",
    dataScope: "DEPT_TREE",
    customDepts: [],
    maskSensitive: false,
    exportAllowed: true,
    exportLimit: "1000",
    watermark: true,
    members: [],
    menuPerms: [],
    permissions: {}
  };
  syncRoleLegacyPerms(newRole);
  syncRoleMemberCount(newRole);
  systemRoles.push(newRole);
  var rootModal = document.getElementById("modalRoot");
  if(rootModal){
    rootModal.classList.remove("show");
    rootModal.innerHTML = "";
  }
  state.selectedRoleId = newRoleId;
  state.roleSubView = "detail";
  state.rolePermTab = "menu";
  captureRoleBaseline(newRole);
  showToast("✓ 角色【" + rName + "】已创建，请继续配置权限与授权人员");
  render();
  return true;
}

/* =========================================================
   低代码表单设计向导（4 步完整实现）
   ========================================================= */
function renderTplWizardModal(){
  var curStep = tplWizardState.step || 1;

  var stepperHtml = '<div class="designer-stepper-bar">' +
    '<div class="designer-step-pill ' + (curStep === 1 ? 'active' : curStep > 1 ? 'done' : '') + '">' +
      '<span class="designer-step-pill-num">' + (curStep > 1 ? '✓' : '1') + '</span><span>基础信息</span>' +
    '</div>' +
    '<span style="color:#cbd5e1">›</span>' +
    '<div class="designer-step-pill ' + (curStep === 2 ? 'active' : curStep > 2 ? 'done' : '') + '">' +
      '<span class="designer-step-pill-num">' + (curStep > 2 ? '✓' : '2') + '</span><span>低代码表单设计</span>' +
    '</div>' +
    '<span style="color:#cbd5e1">›</span>' +
    '<div class="designer-step-pill ' + (curStep === 3 ? 'active' : curStep > 3 ? 'done' : '') + '">' +
      '<span class="designer-step-pill-num">' + (curStep > 3 ? '✓' : '3') + '</span><span>流转流程配置</span>' +
    '</div>' +
    '<span style="color:#cbd5e1">›</span>' +
    '<div class="designer-step-pill ' + (curStep === 4 ? 'active' : '') + '">' +
      '<span class="designer-step-pill-num">4</span><span>完成并保存</span>' +
    '</div>' +
  '</div>';

  var header = '<div class="designer-wizard-header">' +
    '<div style="display:flex;align-items:center;gap:10px">' +
      '<span style="width:32px;height:32px;border-radius:8px;background:#005c58;color:#fff;display:flex;align-items:center;justify-content:center">' + ico("layout", 18) + '</span>' +
      '<div>' +
        '<div style="font-weight:800;font-size:15px;color:#0f172a">' + (tplWizardState.isEditing ? '编辑指令模板' : '新建指令模板向导') + '</div>' +
        '<div style="font-size:11.5px;color:#64748b">拖拽式低代码可视化表单设计器与流转引擎</div>' +
      '</div>' +
    '</div>' +
    stepperHtml +
    '<button class="close" data-close>' + ico("x", 20) + '</button>' +
  '</div>';

  // === 步骤 1：基础信息输入 ===
  if(curStep === 1){
    var b = tplWizardState.basic;
    var step1Body = '<div style="padding:32px 48px;max-width:760px;margin:0 auto;overflow-y:auto;flex:1">' +
      '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 16px;color:#1e40af;font-size:13px;display:flex;align-items:center;gap:10px;margin-bottom:24px">' +
        ico("info", 18) +
        '<span>第一步：设置模板的基础属性与办理时限规则，完成后进入低代码可视化表单设计器。</span>' +
      '</div>' +
      '<div class="field" style="margin-bottom:18px">' +
        '<label style="font-weight:700;color:#1e293b;margin-bottom:8px;display:block">模板名称 <span style="color:#ef4444">*</span></label>' +
        '<input class="input" id="wizard-tpl-name" value="' + escapeHtml(b.name) + '" placeholder="如：涉网舆情处置通报单、网络安全核查单..." style="height:42px;font-size:14px;font-weight:700">' +
      '</div>' +
      '<div class="grid-2" style="grid-template-columns:1fr 1fr;gap:20px;margin-bottom:18px">' +
        '<div class="field">' +
          '<label style="font-weight:700;color:#1e293b;margin-bottom:8px;display:block">模板分类 <span style="color:#ef4444">*</span></label>' +
          '<select class="select" id="wizard-tpl-category" style="height:42px">' +
            '<option value="舆情处置" ' + (b.category === "舆情处置" ? "selected" : "") + '>舆情处置</option>' +
            '<option value="错误表述" ' + (b.category === "错误表述" ? "selected" : "") + '>错误表述</option>' +
            '<option value="公文传阅" ' + (b.category === "公文传阅" ? "selected" : "") + '>公文传阅</option>' +
            '<option value="其他" ' + (b.category === "其他" ? "selected" : "") + '>其他业务</option>' +
          '</select>' +
        '</div>' +
        '<div class="field">' +
          '<label style="font-weight:700;color:#1e293b;margin-bottom:8px;display:block">指令要求 <span style="color:#ef4444">*</span></label>' +
          '<select class="select" id="wizard-tpl-req" style="height:42px">' +
            '<option value="限时回执" ' + (b.requirement === "限时回执" ? "selected" : "") + '>限时回执（带倒计时与催办）</option>' +
            '<option value="回执" ' + (b.requirement === "回执" ? "selected" : "") + '>回执（常态化提交成果）</option>' +
            '<option value="仅阅读" ' + (b.requirement === "仅阅读" ? "selected" : "") + '>仅阅读（阅后即办结）</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
      '<div class="field" style="margin-bottom:18px">' +
        '<label style="font-weight:700;color:#1e293b;margin-bottom:8px;display:block">适用范围</label>' +
        '<div style="display:flex;gap:20px;padding:8px 0">' +
          '<label style="display:flex;align-items:center;gap:6px;cursor:pointer">' +
            '<input type="radio" name="tpl-scope-radio" value="机构专版" ' + (b.scope !== "通用" ? "checked" : "") + '> <b>台湾省网信办（本机构专版）</b>' +
          '</label>' +
          '<label style="display:flex;align-items:center;gap:6px;cursor:pointer">' +
            '<input type="radio" name="tpl-scope-radio" value="通用" ' + (b.scope === "通用" ? "checked" : "") + '> 全局通用模板' +
          '</label>' +
        '</div>' +
      '</div>' +
      '<div class="field">' +
        '<label style="font-weight:700;color:#1e293b;margin-bottom:8px;display:block">模板业务描述</label>' +
        '<textarea class="textarea" id="wizard-tpl-desc" style="height:90px;resize:none" placeholder="请输入该模板适用的业务场景、下发规范或办理注意事项...">' + escapeHtml(b.desc) + '</textarea>' +
      '</div>' +
    '</div>';

    var step1Foot = '<div class="wizard-foot" style="background:#fff;border-top:1px solid #e2e8f0;padding:12px 24px;display:flex;justify-content:space-between">' +
      '<button type="button" class="btn" data-close>取消</button>' +
      '<button type="button" class="btn primary" data-action="tpl-wizard-step1-next" style="padding:0 24px;font-weight:700">' +
        ico("arrow-right", 15) + ' 下一步：配置低代码表单' +
      '</button>' +
    '</div>';

    return '<div class="modal designer-wizard-modal">' + header + step1Body + step1Foot + '</div>';
  }

  // === 步骤 2：低代码表单设计器（用户指定的重点功能） ===
  if(curStep === 2){
    var tplNameDisplay = tplWizardState.basic.name || "舆情上报单";

    // 1. 顶部工具栏
    var toolbar = '<div class="designer-toolbar">' +
      '<div class="designer-toolbar-title">' +
        ico("layout-template", 18) +
        '<span>【' + escapeHtml(tplNameDisplay) + ' - 表单设计器】</span>' +
        '<span style="font-size:12px;font-weight:400;color:#64748b;margin-left:4px">（画布控件：' + tplWizardState.formFields.length + ' 个）</span>' +
      '</div>' +
      '<div class="designer-toolbar-actions">' +
        '<button type="button" class="btn light small" data-action="designer-preview-form" style="font-weight:700">' + ico("eye", 14) + ' 预览</button>' +
        '<button type="button" class="btn light small" data-action="designer-save-storage" style="font-weight:700;color:#005c58">' + ico("save", 14) + ' 保存</button>' +
        '<button type="button" class="btn small" data-action="designer-clear-canvas" style="color:#ef4444;border-color:#fecaca">' + ico("trash-2", 14) + ' 清空</button>' +
        '<div style="width:1px;height:22px;background:#cbd5e1;margin:0 4px"></div>' +
        '<button type="button" class="btn light small" data-action="tpl-wizard-goto-step" data-step="1">' + ico("arrow-left", 14) + ' 上一步</button>' +
        '<button type="button" class="btn primary small" data-action="tpl-wizard-goto-step" data-step="3" style="font-weight:700">' + ico("arrow-right", 14) + ' 下一步：配置流转流程</button>' +
      '</div>' +
    '</div>';

    // 2. 左侧组件拖拽面板 (单行文本、多行文本、日期选择、下拉单选、附件上传、数字输入)
    var paletteComponents = [
      { type: "text", name: "单行文本", icon: "type", desc: "适用于简短标题、名称、平台等" },
      { type: "textarea", name: "多行文本", icon: "align-left", desc: "适用于事件详情、整改说明等" },
      { type: "date", name: "日期选择", icon: "calendar", desc: "年月日 / 发生时间 / 时限" },
      { type: "select", name: "下拉单选", icon: "chevron-down-square", desc: "预设选项，如分类、紧急度" },
      { type: "file", name: "附件上传", icon: "paperclip", desc: "现场佐证截图、报告文档" },
      { type: "number", name: "数字输入", icon: "hash", desc: "涉及金额、传播量、评分等" }
    ];

    var leftPalette = '<aside class="designer-left-palette">' +
      '<div class="designer-palette-title">' + ico("layers", 14) + ' 组件库（拖拽或点击添加）</div>' +
      paletteComponents.map(function(c){
        return '<div class="designer-component-card" draggable="true" data-action="designer-add-component" data-comp-type="' + c.type + '" title="点击或拖拽至中间画布">' +
          '<span class="component-icon-badge">' + ico(c.icon, 16) + '</span>' +
          '<div>' +
            '<div style="font-weight:700;color:#0f172a">' + c.name + '</div>' +
            '<div style="font-size:11px;color:#94a3b8">' + c.desc + '</div>' +
          '</div>' +
        '</div>';
      }).join("") +
      '<div style="margin-top:auto;padding:12px;background:#f8fafc;border-radius:8px;border:1px dashed #cbd5e1;font-size:11.5px;color:#64748b;line-height:1.5">' +
        ico("info", 13) + ' 提示：支持鼠标直接拖拽组件卡片放入中间画布，也可单击一键追加。' +
      '</div>' +
    '</aside>';

    // 3. 中间画布区域
    var canvasFieldsHtml = tplWizardState.formFields.map(function(f, idx){
      var isSelected = (f.id === tplWizardState.selectedFieldId);

      var previewControl = "";
      if(f.type === "text"){
        previewControl = '<input class="input" placeholder="' + escapeHtml(f.placeholder || "请输入单行文本") + '" value="' + escapeHtml(f.defaultValue || "") + '" disabled style="background:#fff;cursor:default">';
      } else if(f.type === "textarea"){
        previewControl = '<textarea class="textarea" placeholder="' + escapeHtml(f.placeholder || "请输入多行文本") + '" disabled style="background:#fff;cursor:default;height:60px;resize:none">' + escapeHtml(f.defaultValue || "") + '</textarea>';
      } else if(f.type === "date"){
        previewControl = '<input class="input" type="text" placeholder="' + escapeHtml(f.placeholder || "年/月/日 2026-09-15") + '" value="' + escapeHtml(f.defaultValue || "2026-09-15") + '" disabled style="background:#fff;cursor:default">';
      } else if(f.type === "select"){
        var opts = f.options || ["选项一", "选项二", "选项三"];
        previewControl = '<select class="select" disabled style="background:#fff;cursor:default">' +
          opts.map(function(o){ return '<option>' + escapeHtml(o) + '</option>'; }).join("") +
        '</select>';
      } else if(f.type === "file"){
        previewControl = '<div class="upload" style="padding:14px;height:60px;cursor:default"><div style="font-size:12px;color:#64748b">' + ico("upload-cloud", 18) + ' 点击或拖拽上传材料附件</div></div>';
      } else if(f.type === "number"){
        previewControl = '<div style="display:flex;align-items:center;gap:6px">' +
          '<input class="input" type="number" placeholder="' + escapeHtml(f.placeholder || "0") + '" value="' + escapeHtml(f.defaultValue || "") + '" disabled style="background:#fff;cursor:default;flex:1">' +
          (f.unit ? '<span style="font-size:12px;font-weight:700;color:#64748b">' + escapeHtml(f.unit) + '</span>' : '') +
        '</div>';
      }

      return '<div class="canvas-field-card ' + (isSelected ? 'active' : '') + '" data-action="designer-select-field" data-field-id="' + f.id + '" draggable="true" data-field-index="' + idx + '">' +
        '<div class="canvas-field-head">' +
          '<div class="canvas-field-label ' + (f.required ? 'req' : '') + '">' +
            '<span>' + (idx + 1) + '. ' + escapeHtml(f.name || "未命名字段") + '</span>' +
            '<span style="font-size:11px;color:#64748b;font-weight:400;background:#f1f5f9;padding:1px 6px;border-radius:4px">' + f.type + '</span>' +
          '</div>' +
          '<div class="canvas-field-actions">' +
            (idx > 0 ? '<button type="button" class="field-action-btn" data-action="designer-move-field" data-dir="up" data-index="' + idx + '" title="上移">' + ico("arrow-up", 12) + '</button>' : '') +
            (idx < tplWizardState.formFields.length - 1 ? '<button type="button" class="field-action-btn" data-action="designer-move-field" data-dir="down" data-index="' + idx + '" title="下移">' + ico("arrow-down", 12) + '</button>' : '') +
            '<button type="button" class="field-action-btn" data-action="designer-clone-field" data-field-id="' + f.id + '" title="复制组件">' + ico("copy", 12) + '</button>' +
            '<button type="button" class="field-action-btn del" data-action="designer-delete-field" data-field-id="' + f.id + '" title="删除组件">' + ico("trash-2", 12) + '</button>' +
          '</div>' +
        '</div>' +
        '<div style="pointer-events:none">' + previewControl + '</div>' +
        (f.desc ? '<div style="font-size:11px;color:#94a3b8;margin-top:4px">' + escapeHtml(f.desc) + '</div>' : '') +
      '</div>';
    }).join("");

    var centerCanvas = '<main class="designer-center-canvas">' +
      '<div class="designer-canvas-paper" id="designer-canvas-paper">' +
        '<div style="border-bottom:1.5px solid #005c58;padding-bottom:12px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between">' +
          '<div>' +
            '<div style="font-size:18px;font-weight:800;color:#0f172a">' + escapeHtml(tplNameDisplay) + '</div>' +
            '<div style="font-size:12px;color:#64748b;margin-top:2px">表单用途：' + escapeHtml(tplWizardState.basic.desc || "业务填报") + '</div>' +
          '</div>' +
          '<span class="tpl-tag-pill reply">' + tplWizardState.basic.requirement + '</span>' +
        '</div>' +
        canvasFieldsHtml +
        '<div class="canvas-dropzone-indicator" id="canvas-dropzone">' +
          ico("plus-circle", 24) +
          '<div style="font-weight:700;font-size:13px;margin-top:6px">从左侧拖拽或点击组件添加到表单</div>' +
        '</div>' +
      '</div>' +
    '</main>';

    // 4. 右侧属性配置面板
    var selectedField = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    var rightPropsHtml = "";

    if(!selectedField){
      rightPropsHtml = '<aside class="designer-right-props">' +
        '<div class="designer-props-title">' + ico("settings-2", 15) + ' 控件属性配置</div>' +
        '<div style="text-align:center;color:#94a3b8;padding:60px 0">' +
          ico("mouse-pointer", 32) +
          '<p style="margin-top:10px;font-size:12.5px">请在中间画布点击选中一个组件以配置其字段属性</p>' +
        '</div>' +
      '</aside>';
    } else {
      var optionsSettingHtml = "";
      if(selectedField.type === "select"){
        var opts = selectedField.options || [];
        optionsSettingHtml = '<div class="designer-prop-row">' +
          '<label class="designer-prop-label" style="display:flex;justify-content:space-between">' +
            '<span>下拉选项配置</span>' +
            '<button type="button" class="btn light small" data-action="prop-add-option" style="font-size:11px;padding:1px 6px">+ 加选项</button>' +
          '</label>' +
          opts.map(function(opt, optIdx){
            return '<div class="prop-option-item">' +
              '<input class="input" value="' + escapeHtml(opt) + '" data-action="prop-edit-option" data-option-index="' + optIdx + '" style="height:32px;font-size:12px">' +
              '<button type="button" class="field-action-btn del" data-action="prop-del-option" data-option-index="' + optIdx + '" title="删除此项">' + ico("x", 12) + '</button>' +
            '</div>';
          }).join("") +
        '</div>';
      }

      var numberSettingHtml = "";
      if(selectedField.type === "number"){
        numberSettingHtml = '<div class="designer-prop-row">' +
          '<label class="designer-prop-label">单位后缀</label>' +
          '<input class="input" value="' + escapeHtml(selectedField.unit || "") + '" data-action="prop-edit-unit" placeholder="如：条、次、件、万元..." style="height:34px">' +
        '</div>';
      }

      rightPropsHtml = '<aside class="designer-right-props">' +
        '<div class="designer-props-title">' +
          '<span>' + ico("settings-2", 15) + ' 控件属性</span>' +
          '<span style="font-size:11px;font-weight:700;color:#005c58;background:#e6f4f3;padding:2px 6px;border-radius:4px">' + selectedField.type + '</span>' +
        '</div>' +
        '<div class="designer-prop-row">' +
          '<label class="designer-prop-label">字段名称 (Label) <span style="color:#ef4444">*</span></label>' +
          '<input class="input" value="' + escapeHtml(selectedField.name || "") + '" data-action="prop-edit-name" style="height:36px;font-weight:700">' +
        '</div>' +
        '<div class="designer-prop-row">' +
          '<label class="designer-prop-label">占位提示语 (Placeholder)</label>' +
          '<input class="input" value="' + escapeHtml(selectedField.placeholder || "") + '" data-action="prop-edit-placeholder" style="height:34px">' +
        '</div>' +
        '<div class="designer-prop-row">' +
          '<label class="designer-prop-label">默认初始值</label>' +
          '<input class="input" value="' + escapeHtml(selectedField.defaultValue || "") + '" data-action="prop-edit-default" style="height:34px">' +
        '</div>' +
        '<div class="designer-prop-row">' +
          '<label class="designer-prop-label">字段说明 / 提示</label>' +
          '<input class="input" value="' + escapeHtml(selectedField.desc || "") + '" data-action="prop-edit-desc" placeholder="将在输入框下方小字显示" style="height:34px">' +
        '</div>' +
        optionsSettingHtml +
        numberSettingHtml +
        '<div class="designer-prop-row" style="padding-top:8px;border-top:1px solid #f1f5f9">' +
          '<label style="display:flex;align-items:center;gap:8px;cursor:pointer">' +
            '<input type="checkbox" ' + (selectedField.required ? 'checked' : '') + ' data-action="prop-edit-required" style="width:16px;height:16px;cursor:pointer">' +
            '<span style="font-size:13px;font-weight:700;color:#1e293b">设为必填项 (校验非空)</span>' +
          '</label>' +
        '</div>' +
      '</aside>';
    }

    var step2Body = '<div class="designer-three-columns">' + leftPalette + centerCanvas + rightPropsHtml + '</div>';

    return '<div class="modal designer-wizard-modal">' + header + toolbar + step2Body + '</div>';
  }

  // === 步骤 3：流程配置 ===
  if(curStep === 3){
    var nodes = tplWizardState.flowNodes;
    var step3Body = '<div style="padding:24px 36px;overflow-y:auto;flex:1">' +
      '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 16px;color:#1e40af;font-size:13px;display:flex;align-items:center;gap:10px;margin-bottom:20px">' +
        ico("git-branch", 18) +
        '<span>第三步：配置该指令模板的标准闭环流转流程与责任岗位节点。</span>' +
      '</div>' +
      '<div class="flow-designer-canvas">' +
        nodes.map(function(n, idx){
          return '<div class="flow-node-box ' + (idx === 2 ? 'highlight' : '') + '">' +
            '<div class="flow-node-header">' +
              '<div class="flow-node-title">' +
                '<span style="width:24px;height:24px;border-radius:50%;background:#005c58;color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:12px">' + (idx + 1) + '</span>' +
                '<span>' + escapeHtml(n.title) + '</span>' +
              '</div>' +
              '<span class="tag" style="background:#e0f2fe;color:#0369a1">' + escapeHtml(n.role) + '</span>' +
            '</div>' +
            '<div style="font-size:12.5px;color:#64748b;line-height:1.5">' + escapeHtml(n.desc) + '</div>' +
            (idx === 2 ? '<div style="margin-top:8px;padding:6px 10px;background:#e6f4f3;border-radius:6px;font-size:11.5px;color:#005c58;font-weight:700">✓ 已绑定低代码表单（' + tplWizardState.formFields.length + ' 个自定义控件）</div>' : '') +
          '</div>' +
          (idx < nodes.length - 1 ? '<div class="flow-arrow-down">↓</div>' : '');
        }).join("") +
      '</div>' +
    '</div>';

    var step3Foot = '<div class="wizard-foot" style="background:#fff;border-top:1px solid #e2e8f0;padding:12px 24px;display:flex;justify-content:space-between">' +
      '<button type="button" class="btn light" data-action="tpl-wizard-goto-step" data-step="2">' + ico("arrow-left", 14) + ' 上一步：修改表单设计</button>' +
      '<button type="button" class="btn primary" data-action="tpl-wizard-goto-step" data-step="4" style="padding:0 24px;font-weight:700">' +
        ico("arrow-right", 15) + ' 下一步：完成配置' +
      '</button>' +
    '</div>';

    return '<div class="modal designer-wizard-modal">' + header + step3Body + step3Foot + '</div>';
  }

  // === 步骤 4：完成并保存 ===
  if(curStep === 4){
    var b = tplWizardState.basic;
    var step4Body = '<div style="padding:40px 60px;text-align:center;overflow-y:auto;flex:1">' +
      '<div style="width:64px;height:64px;border-radius:50%;background:#dcfce7;color:#16a34a;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px">' +
        ico("check-check", 36) +
      '</div>' +
      '<div style="font-size:22px;font-weight:800;color:#0f172a;margin-bottom:8px">指令模板配置完成！</div>' +
      '<div style="font-size:14px;color:#64748b;max-width:540px;margin:0 auto 24px">已成功完成低代码表单与闭环流程设计，保存后将自动同步至【台湾省网信办】机构专属模板库。</div>' +
      '<div style="max-width:520px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:20px;margin:0 auto 28px;text-align:left">' +
        '<div style="font-weight:800;color:#0f172a;margin-bottom:12px;font-size:15px">模板属性摘要</div>' +
        '<div style="font-size:13px;color:#334155;margin-bottom:6px"><b>模板名称：</b>' + escapeHtml(b.name) + '</div>' +
        '<div style="font-size:13px;color:#334155;margin-bottom:6px"><b>所属分类：</b>' + escapeHtml(b.category) + '</div>' +
        '<div style="font-size:13px;color:#334155;margin-bottom:6px"><b>指令要求：</b>' + escapeHtml(b.requirement) + '</div>' +
        '<div style="font-size:13px;color:#334155;margin-bottom:6px"><b>表单字段数：</b>' + tplWizardState.formFields.length + ' 个自定义控件</div>' +
        '<div style="font-size:13px;color:#334155"><b>流转节点数：</b>4 个标准闭环节点</div>' +
      '</div>' +
      '<div style="display:flex;justify-content:center;gap:14px">' +
        '<button type="button" class="btn light" data-action="tpl-wizard-complete-back" style="padding:0 24px;font-weight:700">' + ico("list", 14) + ' 完成并返回模板列表</button>' +
        '<button type="button" class="btn primary" data-action="tpl-wizard-use-now" style="padding:0 28px;font-weight:800">' + ico("send", 14) + ' 立即使用此模板下发指令</button>' +
      '</div>' +
    '</div>';

    return '<div class="modal designer-wizard-modal">' + header + step4Body + '</div>';
  }

  return '<div></div>';
}

/* === 4. 表单预览模拟填报弹窗 === */
function renderFormPreviewModal(){
  var tplName = tplWizardState.basic.name || "舆情上报单";
  var fields = tplWizardState.formFields;

  var fieldsHtml = fields.map(function(f, idx){
    var ctrlHtml = "";
    if(f.type === "text"){
      ctrlHtml = '<input class="input" placeholder="' + escapeHtml(f.placeholder || "请输入" + f.name) + '" data-preview-field="' + f.id + '">';
    } else if(f.type === "textarea"){
      ctrlHtml = '<textarea class="textarea" placeholder="' + escapeHtml(f.placeholder || "请输入" + f.name) + '" data-preview-field="' + f.id + '" style="height:80px"></textarea>';
    } else if(f.type === "date"){
      ctrlHtml = '<input class="input" type="date" value="' + (f.defaultValue || "2026-09-15") + '" data-preview-field="' + f.id + '">';
    } else if(f.type === "select"){
      var opts = f.options || ["选项一", "选项二"];
      ctrlHtml = '<select class="select" data-preview-field="' + f.id + '">' +
        '<option value="">-- 请选择 --</option>' +
        opts.map(function(o){ return '<option value="' + escapeHtml(o) + '">' + escapeHtml(o) + '</option>'; }).join("") +
      '</select>';
    } else if(f.type === "file"){
      ctrlHtml = '<div class="upload" style="padding:16px;height:70px" onclick="showToast(\'已选择模拟测试文件：佐证材料.pdf\')"><div>' + ico("upload-cloud", 20) + '<br><span style="font-size:11px">点击上传材料 (PNG/JPG/PDF/DOC)</span></div></div>';
    } else if(f.type === "number"){
      ctrlHtml = '<div style="display:flex;align-items:center;gap:6px"><input class="input" type="number" placeholder="' + escapeHtml(f.placeholder || "0") + '" data-preview-field="' + f.id + '" style="flex:1">' + (f.unit ? '<span style="font-weight:700;color:#64748b">' + escapeHtml(f.unit) + '</span>' : '') + '</div>';
    }

    return '<div class="field" style="margin-bottom:16px">' +
      '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:flex;align-items:center;gap:4px">' +
        '<span>' + (idx + 1) + '. ' + escapeHtml(f.name) + '</span>' +
        (f.required ? '<span style="color:#ef4444">*</span>' : '<span style="font-size:11px;color:#94a3b8;font-weight:400">(选填)</span>') +
      '</label>' +
      ctrlHtml +
      (f.desc ? '<div style="font-size:11.5px;color:#64748b;margin-top:4px">' + escapeHtml(f.desc) + '</div>' : '') +
    '</div>';
  }).join("");

  return '<div class="modal" style="width:720px;max-width:92vw;max-height:88vh;display:flex;flex-direction:column">' +
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:8px;font-size:16px;font-weight:800">' +
        ico("eye", 18) +
        '<span>表单预览模拟填报 —— 【' + escapeHtml(tplName) + '】</span>' +
      '</div>' +
      '<button class="close" data-action="close-preview-modal">' + ico("x", 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 26px;overflow-y:auto;flex:1">' +
      '<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:10px 14px;color:#166534;font-size:12.5px;margin-bottom:18px;display:flex;align-items:center;gap:8px">' +
        ico("check-circle-2", 16) +
        '<span>当前为真实业务人员填报预览视角，支持在控件内输入测试并校验必填项。</span>' +
      '</div>' +
      fieldsHtml +
    '</div>' +
    '<div class="modal-foot" style="display:flex;justify-content:space-between">' +
      '<button type="button" class="btn light" data-action="close-preview-modal">关闭预览</button>' +
      '<button type="button" class="btn primary" data-action="submit-preview-test" style="font-weight:700">' + ico("send", 14) + ' 提交填报测试</button>' +
    '</div>' +
  '</div>';
}

function renderDetailLegacy(){
  var events=[["17:55:22","已归档","系统自动归档。"],["17:55:22","审批通过","武丁审批了指令　【审批结果】通过。　【审批意见】1212"],["17:54:26","待审批","审批人：武丁"],["17:54:26","再次提交　查看","齐杰再次提交了指令"],["17:53:57","已退回","武丁审批了指令　【审批结果】退回。　【审批意见】1212121"],["17:53:21","待审批","审批人：武丁"],["17:53:21","处理　查看","齐杰处理了指令"],["17:47:51","阅读","齐杰阅读了指令"],["17:47:27","指令下发","武丁下发了指令"]];
  return '<div class="page"><div class="detail-breadcrumb"><span class="link" data-action="back-done">◉ 已办</span>　/　<b>详情</b></div><section class="card detail-summary"><div class="detail-band"><span style="display:inline-flex;align-items:center;gap:4px;margin-right:8px"><span>指令ID：YQC71924020260814174727</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="YQC71924020260814174727" title="复制ID">'+ico("copy",12)+'</button></span> <span class="tag origin">下发</span><span class="tag returned">限时回执</span><span>2026-08-14 19:46:00</span><span style="margin-left:auto" class="tag archived">◉ 已归档</span></div><div class="detail-title"><span class="detail-title-main">'+ico("notebook-text",23)+'<span>舆情处置：速览｜北下关热点周报（8.7-8.13）</span></span><span class="link">展开详情 ⊙</span></div></section><section class="card detail-section"><h3>指令下发内容 <span class="link" style="float:right;font-weight:400">原文链接 ↗</span></h3><div class="kv"><span>舆情来源</span><b>微信</b></div><div class="kv"><span>舆情说明</span><div>热点周报<br>北下关街道（8.7-8.13）<br>一周速览 趋势解码<br>动态｜北下关街道召开2026年上半年工作总结暨防汛工作动员部署会。街道领导班子、机关各科室、事业单位及31个社区相关负责人参会。</div></div><div class="kv"><span>图片</span><div class="photo-strip">'+Array(8).fill(0).map(function(_,i){return '<div class="photo">预览 '+(i+1)+'</div>'}).join("")+'</div></div><div class="kv"><span>文件</span><div class="file-strip">'+["ZhilingliuzhuanV...7z","2.0副本.doc","2.0需求清单.wps","2.0.doc","产品统计.xlsx"].map(function(n){return '<div class="file-card">'+ico(n.indexOf("xlsx")>0?"sheet":"file-text",18)+' '+n+' '+ico("download",13)+'</div>'}).join("")+'</div></div></section><section class="card detail-section"><h3>指令回执内容 <span style="float:right;font-weight:400">处理人　齐杰　｜　处理时间　2026-08-14 17:54:26　｜　耗时　6分钟</span></h3><div class="kv"><span>处理说明</span><b>121221</b></div><div class="kv"><span>图片</span><div class="photo-strip">'+Array(7).fill(0).map(function(_,i){return '<div class="photo">回执 '+(i+1)+'</div>'}).join("")+'</div></div><div class="kv"><span>文件</span><div class="file-strip">'+["2.0.doc","2.0副本.doc","2.0需求.wps","2.0需求清单.wps","产品统计.xlsx"].map(function(n){return '<div class="file-card">'+ico("file-text",18)+' '+n+' '+ico("download",13)+'</div>'}).join("")+'</div></div></section><section class="card detail-section"><h3>指令流转记录 <span class="link" style="float:right;font-weight:400">⊙ 批注</span></h3><div class="timeline">'+events.map(function(e){return '<div class="event"><time>'+e[0]+'</time><b>'+e[1]+'</b><p>'+e[2]+'</p></div>'}).join("")+'</div></section>'+footer()+'</div>'
}
function basicInfoHtmlLegacy(){return '<div class="detail-basic" data-basic-info><div class="detail-basic-title">基础信息</div><div class="detail-basic-grid"><div class="detail-basic-item"><span class="detail-basic-label">指令类别</span><span class="detail-basic-value">舆情处置</span></div><div class="detail-basic-item"><span class="detail-basic-label">业务应用</span><span class="detail-basic-value">谛听预警</span></div><div class="detail-basic-item"><span class="detail-basic-label">业务模块</span><span class="detail-basic-value">实时监测</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发人</span><span class="detail-basic-value">齐杰</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发机构</span><span class="detail-basic-value">台湾省网信办</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发时间</span><span class="detail-basic-value">2026-08-17 14:15:42</span></div><div class="detail-basic-item"><span class="detail-basic-label">接收人</span><span class="detail-basic-value"><span class="receiver">内　武丁</span></span></div></div></div>'}
function currentDetailTask(){return taskRows.filter(function(r){return r.key===state.detailKey})[0]||taskRows[0]}
function currentDetailData(){
  var row=currentDetailTask();
  var parts=(row.path||"指令流转 > 业务办理").split(" > ");
  var sentDate=(row.time&&row.time.split(" ")[0])||"2026-09-14";
  var sentTime=(row.time&&row.time.split(" ")[1])||"08:30:00";

  var base={
    row:row,
    id:row.id||("ZL-20260914-"+(row.idShort||"001")),
    title:row.title,
    status:row.status,
    requirement:row.req,
    source:getTaskSource(row),
    description:row.description||("下发说明：请结合本级巡查与实战研判工作，对【"+row.title+"】开展专项核查处置，按时反馈真实回执。"),
    deadline:row.deadline||"2026-09-15 18:00:00",
    sender:row.sender||"张伟",
    org:row.senderOrg||"市公安局情指中心",
    receiver:plainPeople(row.receiver||"武沅林"),
    processor:row.processor||"-",
    application:getTaskApplication(row),
    module:parts[1]||"业务办理",
    sentTime:row.time||"2026-09-14 08:30:00",
    images:typeof row.images==="number"?row.images:(row.req==="限时回执"?2:0),
    files:row.files||["工作要求规范清单.pdf"],
    receipt:row.receipt||null,
    events:[],
    transferred:!!row.transferred,
    parentKey:row.parentKey||"",
    childKey:row.childKey||"",
    transferInfo:row.transferInfo||null
  };

  if(row.status==="待处理"){
    base.events=[
      [sentDate,"09:00:00","查阅",(base.receiver||"武沅林")+"查阅了指令正文与下发附件"],
      [sentDate,sentTime,"指令下发",(base.sender||"张伟")+"通过专网平台下发了指令"]
    ];
  }else if(row.status==="已退回"){
    base.events=[
      [sentDate,"15:30:00","审批退回","齐杰审批退回了回执：【退回意见】佐证材料中缺乏账号源头取证报告及下架函，请补齐材料重报！"],
      [sentDate,"14:10:00","办理报送","武沅林初次报送了办理回执"],
      [sentDate,"09:00:00","查阅","武沅林查阅了指令"],
      [sentDate,sentTime,"指令下发",(base.sender||"齐杰")+"下发了指令"]
    ];
  }else if(row.status==="待审批"){
    var hTime=row.handled||(row.receipt&&row.receipt.time)||"2026-09-14 14:10:00";
    var hParts=hTime.split(" ");
    base.events=[
      [hParts[0],hParts[1]||"14:10:00","待审批","已流转至审批节点（审批人：齐杰，等待核准确认）"],
      [hParts[0],hParts[1]||"14:10:00","办理回执提交",(row.processor||"经办人")+"提交了回执结果与佐证报告"],
      [sentDate,"09:10:00","查阅",(row.processor||"经办人")+"查阅了指令"],
      [sentDate,sentTime,"指令下发",(base.sender||"张伟")+"下发了指令"]
    ];
  }else if(row.status==="待阅"){
    base.events=[
      [sentDate,"08:35:00","公文分发","系统自动分发至【"+(base.receiver||"武沅林")+"】待阅传阅列表"],
      [sentDate,sentTime,"公文下发",(base.sender||"孙立明")+"通过公文流转中心正式下发通报公文"]
    ];
  }else{ // 已归档
    var fTime=row.handled||(row.receipt&&row.receipt.time)||"2026-09-14 10:20:15";
    var fParts=fTime.split(" ");
    base.events=[
      [fParts[0],fParts[1]||"10:20:15","已归档","系统确认结报完毕，全流程闭环办结归档"],
      [fParts[0],fParts[1]||"10:20:15","审批通过","武丁审批了指令【审批结果】审核通过，同意归档结案"],
      [sentDate,"09:00:00","办理回执提交",(row.processor||"武沅林")+"报送了处置结果与佐证报告"],
      [sentDate,sentTime,"指令下发",(base.sender||"张伟")+"下发了指令"]
    ];
  }

  if(base.transferInfo){
    var t=base.transferInfo,relationKey=base.childKey||base.parentKey,timeParts=t.time.split(" ");
    base.transferred=true;
    if(base.parentKey){
      base.events.unshift([timeParts[0],timeParts[1],"指令转办　查看",t.from+"转办了指令",base.parentKey]);
    }else{
      base.events.unshift([timeParts[0],timeParts[1],"转办　查看",t.from+"转办了指令。接收人："+plainPeople(t.to),relationKey]);
    }
  }

  if(state.annotations[row.key]){
    base.events=state.annotations[row.key].concat(base.events);
  }
  return base;
}
function renderDetailPhotos(count,label){return count?'<div class="kv"><span class="detail-media-label">图片</span><div class="detail-photo-strip">'+Array(count).fill(0).map(function(_,i){return '<div class="detail-photo-thumb" title="'+label+(i+1)+'"></div>'}).join("")+'</div></div>':""}
function renderDetailFiles(files){return files&&files.length?'<div class="kv"><span class="detail-media-label">文件</span><div class="file-strip detail-files">'+files.map(function(n){var excel=/xlsx/i.test(n),archive=/7z|gz|tar/i.test(n);return '<div class="file-card">'+ico(excel?"sheet":archive?"file-question":"file-text",22)+'<span class="file-main"><span class="file-name">'+n+'</span><span class="file-size">'+(excel?"14KB":archive?"24KB":"34KB")+'</span></span><span class="file-download">'+ico("download",15)+'</span></div>'}).join("")+'</div></div>':""}
function renderReceipt(data){
  if(!data.receipt)return "";
  var r=data.receipt;
  return '<section class="card detail-section receipt-fill-section"><div class="receipt-section-head"><h3 class="receipt-section-title"><span class="receipt-title-dot" style="background:#009893"></span><span>指令办理回执信息</span></h3><span class="detail-section-head-meta" style="margin-left:auto;font-size:13px;color:#64748b">处理人　'+escapeHtml(r.processor)+'　｜　处理时间　'+escapeHtml(r.time)+'　｜　耗时　'+escapeHtml(r.duration)+'</span></div><div class="kv" style="margin-top:14px"><span>处理说明</span><div class="detail-long-text">'+r.note+'</div></div>'+renderDetailPhotos(r.images,"回执图片")+renderDetailFiles(r.files)+'</section>'
}
function renderEmbeddedHandlingSection(d){
  var isHandle = isTaskActionHandle(d.row, state.detailSource);

  // 1. 如果已有办理回执（已归档、待审批或已有回执记录），展示回执详情卡片
  if(d.receipt){
    return renderReceipt(d);
  }
  if(d.status==="已归档"||d.status==="待审批"){
    return renderReceipt(d);
  }

  // 2. 如果操作是【详情】的单子（非当前登录用户待办处置），展示只读协同流转进度卡片，不展示填报表单
  if(!isHandle){
    var currentHandlerName = (d.row.processor && d.row.processor !== "-") ? d.row.processor : (Array.isArray(d.row.receiver)?d.row.receiver.join("、"):(d.row.receiver||"责任单位/人员"));
    return '<section class="card detail-section receipt-fill-section">' +
      '<div class="receipt-section-head"><h3 class="receipt-section-title"><span class="receipt-title-dot" style="background:#0284c7"></span><span>指令流转办理状态</span></h3><span class="receipt-status-pill done" style="background:#f0f9ff;color:#0284c7;border-color:#bae6fd">'+ico("clock",13)+' 协同办理进行中</span></div>' +
      '<div class="notice-callout-box" style="background:#f8fafc;border:1px solid #e2e8f0;display:flex;align-items:center;gap:14px;padding:18px 22px;border-radius:8px">' +
        '<div class="notice-check-circle" style="background:#e0f2fe;color:#0284c7;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">'+ico("user-check",18)+'</div>' +
        '<div style="font-size:13.5px;color:#334155;line-height:1.6">' +
          '<b>当前指令正由【'+escapeHtml(currentHandlerName)+'】推进办理中</b>' +
          '<p style="margin:4px 0 0;color:#64748b;font-size:12.5px">当前单据处于详情查阅模式，待经办人完成办理并提交回执后，回执内容与审批记录将自动同步呈现在此处。</p>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  // 3. 以下为【去处理】的单子：
  if(d.status==="待阅"||d.requirement==="仅阅读"){
    return '<section class="card detail-section receipt-fill-section"><div class="receipt-section-head"><h3 class="receipt-section-title"><span class="receipt-title-dot" style="background:#059669"></span><span>通知阅知确认</span></h3><span class="receipt-status-pill done">'+ico("book-open",13)+' 公文阅知类通知</span></div><div class="notice-callout-box"><div class="notice-check-circle">✓</div><div><b>本通知为公文阅知类指令，无需填报回执表单</b><p>请仔细查阅上述公文要求及附件内容，确认知悉后可直接点击底部【确认阅知并办结】以完成节点流转。</p></div></div></section>';
  }

  var defaultNoteVal=d.status==="已退回"?"已根据审批退回意见补充权威机构溯源核实结论，涉事虚假谣言发布账号已依法完成取证并限期下架，网络次生不良影响已有效阻断。":"已组织专班对涉网要素开展系统排查研判，涉事信源及传播链条已定位，正面引导与管控处置举措已全面落实。";
  return '<section class="card detail-section receipt-fill-section">' +
    '<div class="receipt-section-head">' +
      '<h3 class="receipt-section-title"><span class="receipt-title-dot" style="background:#10b981"></span><span>待处理表单：办理回执填报</span></h3>' +
      '<span class="receipt-status-pill editing">'+ico("edit-3",13)+' 正在填报中</span>' +
    '</div>' +
    '<div class="receipt-form-box highlight-active">' +
      '<div class="receipt-field-stacked">' +
        '<label class="receipt-label-top"><span class="receipt-label-name">处理说明</span><span class="receipt-label-req">*</span><span class="receipt-label-hint">（请输入处置核查措施、技术研判结论与管控情况）</span></label>' +
        '<div class="field-active-wrap"><textarea id="detail-receipt-note" class="receipt-textarea" placeholder="请在此输入核实情况、研判处置结论与后续管控举措...">'+defaultNoteVal+'</textarea></div>' +
      '</div>' +
      '<div class="receipt-uploads-grid">' +
        '<div class="receipt-field-stacked">' +
          '<label class="receipt-label-top"><span class="receipt-label-name">佐证截图</span><span class="receipt-label-hint">（支持 jpg、png 格式）</span></label>' +
          '<div class="receipt-upload-zone" data-action="mock-upload-image" id="detail-image-zone">' +
            ico("image-plus",24) +
            '<span class="upload-title">点击或拖拽上传核查佐证截图</span>' +
            '<div id="detail-image-status" class="upload-status-text">✓ 已附带 2 张系统现场监测核验截图</div>' +
          '</div>' +
        '</div>' +
        '<div class="receipt-field-stacked">' +
          '<label class="receipt-label-top"><span class="receipt-label-name">处置报告附件</span><span class="receipt-label-hint">（支持 docx、pdf、xlsx 格式）</span></label>' +
          '<div class="receipt-upload-zone" data-action="mock-upload-file" id="detail-file-zone">' +
            ico("file-up",24) +
            '<span class="upload-title">点击或拖拽上传结报材料文件</span>' +
            '<div id="detail-file-status" class="upload-status-text">✓ 《涉网要素研判处置总结报告.docx》已就绪</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</section>';
}
function renderTimelineDetail(title,detail){
  var approvalAt=detail.indexOf("【审批结果】");
  if(approvalAt>-1){
    var actor=detail.slice(0,approvalAt).replace(/[　\s]+$/,"");
    var result=detail.slice(approvalAt).replace(/\n/g,"<br>");
    return '<div class="approval-event-detail"><span class="approval-event-actor">'+actor+'</span><span class="approval-event-result">'+result+'</span></div>'
  }
  return '<div class="event-detail '+(title==="待审批"?"waiting-approval":"")+'">'+detail.replace(/\n/g,"<br>")+'</div>'
}
function renderTimeLimitPill(info){
  return "";
}

function getFlowNodes(d){
  var row = d.row || {};
  var rawSentTime = d.sentTime || row.time || "2026-09-14 08:30:00";
  
  function parseSafeDate(str){
    if(!str) return new Date("2026-09-14T08:30:00");
    var s = String(str).replace(/-/g, "/");
    var dt = new Date(s);
    if(isNaN(dt.getTime())) return new Date("2026-09-14T08:30:00");
    return dt;
  }
  function formatDateTime(dt){
    var y = dt.getFullYear();
    var m = String(dt.getMonth() + 1).padStart(2, "0");
    var day = String(dt.getDate()).padStart(2, "0");
    var h = String(dt.getHours()).padStart(2, "0");
    var min = String(dt.getMinutes()).padStart(2, "0");
    var sec = String(dt.getSeconds()).padStart(2, "0");
    return y + "-" + m + "-" + day + " " + h + ":" + min + ":" + sec;
  }
  function addSeconds(dt, s){
    return new Date(dt.getTime() + s * 1000);
  }

  var tSent = parseSafeDate(rawSentTime);
  var sentTimeStr = formatDateTime(tSent);
  var sentDateStr = sentTimeStr.split(" ")[0];

  var receiverName = d.receiver || "武乙";
  var senderName = d.sender || "张伟";
  var senderOrg = d.org || "市公安局情指中心";
  var deadline = d.deadline || row.deadline || "2026-09-15 18:00:00";
  var isAccepted = !!(state.acceptedMap && state.acceptedMap[row.key]) || row.accepted === true || d.status === "待审批" || d.status === "已归档";
  var isRejected = (d.status === "已退回" || !!row.rejected || row.key === "todo-returned");

  var tTransfer = addSeconds(tSent, 120);
  var transferTimeStr = formatDateTime(tTransfer);

  var tView = addSeconds(d.transferred ? tTransfer : tSent, 260);
  var viewTimeStr = formatDateTime(tView);

  var tAccept = addSeconds(tView, 465);
  var acceptTimeStr = formatDateTime(tAccept);

  var acceptedPerson = row.acceptedPerson || receiverName || currentUser;
  var acceptDuration = row.acceptedDuration || "12分05秒";
  var handleCountdown = row.handleCountdown || "03小时45分";

  var rawNodes = [];

  // 1. 指令下发
  rawNodes.push({
    node: "指令下发",
    badgeCls: "finish",
    icon: "send",
    person: senderName,
    unit: senderOrg,
    arriveTime: sentTimeStr,
    leaveTime: sentTimeStr,
    date: sentDateStr,
    time: sentTimeStr.split(" ")[1],
    opinion: "下发【" + escapeHtml(row.template || "舆情协同处置模板") + "】指令。要求限时核查并按规程反馈处置成果回执。",
    timeLimitInfo: {
      type: "submitted",
      title: "下发限时要求",
      items: [
        { label: "办结截止时限", value: deadline, highlight: true }
      ]
    }
  });

  // 2. 指令转办 (如果有转办信息)
  if(d.transferred && d.transferInfo){
    var t = d.transferInfo;
    rawNodes.push({
      node: "指令转办",
      badgeCls: "transfer",
      icon: "git-branch",
      person: t.from || "武甲",
      unit: "台湾省网信办",
      arriveTime: transferTimeStr,
      leaveTime: transferTimeStr,
      date: transferTimeStr.split(" ")[0],
      time: transferTimeStr.split(" ")[1],
      opinion: "经研判指令转办至【" + (t.to || "协同专员") + "】" + (t.remark && t.remark !== "-" ? "，转办说明：" + t.remark : ""),
      timeLimitInfo: {
        type: "waiting",
        title: "流转交接记录",
        items: [
          { label: "转交节点时间", value: transferTimeStr },
          { label: "承办责任流转", value: "顺延交接承办责任人，继续推进处置办理" }
        ]
      }
    });
  }

  // 3. 指令查阅
  rawNodes.push({
    node: "指令查阅",
    badgeCls: "finish",
    icon: "eye",
    person: receiverName,
    unit: "台湾省网信办",
    arriveTime: d.transferred ? transferTimeStr : sentTimeStr,
    leaveTime: viewTimeStr,
    date: viewTimeStr.split(" ")[0],
    time: viewTimeStr.split(" ")[1],
    opinion: "调阅指令通报正文与下发佐证附件材料，已确认通报内容与处置工作要求。",
    timeLimitInfo: {
      type: "accepted",
      title: "查阅记录",
      items: [
        { label: "调阅时间", value: viewTimeStr },
        { label: "查阅状态", value: "已调阅通报材料", highlight: true }
      ]
    }
  });

  // 4. 任务处置办理
  var isProcessingDone = row.status === "待审批" || row.status === "已归档";
  rawNodes.push({
    node: "处置办理",
    badgeCls: isProcessingDone ? "finish" : "current",
    icon: isProcessingDone ? "check-circle-2" : "edit-3",
    person: receiverName,
    unit: "台湾省网信办",
    arriveTime: viewTimeStr,
    leaveTime: isProcessingDone ? (row.handled || acceptTimeStr) : '<span class="flow-status-chip" style="background:#eff6ff;color:#0284c7">办理中</span>',
    date: viewTimeStr.split(" ")[0],
    time: viewTimeStr.split(" ")[1],
    opinion: isProcessingDone ? (row.acceptedNote || "已完成现场核查与处置整改，回执材料已形成并提报。") : "已调阅通报正文与下发材料，正在推进核查研判与处置填报。",
    timeLimitInfo: {
      type: isProcessingDone ? "accepted" : "waiting",
      title: "办结时限履约记录",
      items: [
        { label: "办结截止时限", value: deadline, highlight: true }
      ]
    }
  });

  // 5. 协同子单 (如果有子单)
  if(row.childKey){
    var tChild = addSeconds(tAccept, 180);
    var childTimeStr = formatDateTime(tChild);
    rawNodes.push({
      node: "生成子单",
      badgeCls: "transfer",
      icon: "git-fork",
      person: currentUser || receiverName,
      unit: "台湾省网信办",
      arriveTime: acceptTimeStr,
      leaveTime: childTimeStr,
      date: childTimeStr.split(" ")[0],
      time: childTimeStr.split(" ")[1],
      opinion: "生成协同子单派发协查责任人，联动分流处置",
      timeLimitInfo: {
        type: "submitted",
        title: "协同派发记录",
        items: [{ label: "子单状态", value: "已派发并同步启动协同办理" }]
      }
    });
  }

  // 6. 处置办理 / 驳回重新办理 / 待阅
  if(d.status === "待处理"){
    if(isAccepted){
      rawNodes.push({
        node: "处置办理",
        badgeCls: "current",
        icon: "edit-3",
        person: row.processor && row.processor !== "-" ? row.processor : receiverName,
        unit: "台湾省网信办",
        arriveTime: acceptTimeStr,
        leaveTime: '<span class="flow-status-chip">办理中</span>',
        date: acceptTimeStr.split(" ")[0],
        time: acceptTimeStr.split(" ")[1],
        opinion: "正按规程开展现场核查研判与管控处置，办理回执填报中。",
        timeLimitInfo: {
          type: "handling",
          title: "处置限时跟踪记录",
          items: [
            { label: "处置办结截止时间", value: deadline },
            { label: "剩余处置时间", value: handleCountdown, highlight: true }
          ]
        }
      });
    }
  } else if(d.status === "已退回" || isRejected){
    var tInitReport = addSeconds(tAccept, 2400); // +40分钟
    var initReportStr = formatDateTime(tInitReport);
    var tReject = addSeconds(tInitReport, 900); // +15分钟
    var rejectStr = formatDateTime(tReject);

    rawNodes.push({
      node: "回执初报",
      badgeCls: "finish",
      icon: "file-text",
      person: row.processor && row.processor !== "-" ? row.processor : receiverName,
      unit: "台湾省网信办",
      arriveTime: acceptTimeStr,
      leaveTime: initReportStr,
      date: initReportStr.split(" ")[0],
      time: initReportStr.split(" ")[1],
      opinion: "初次报送处置回执与佐证材料，提交审批",
      timeLimitInfo: {
        type: "submitted",
        title: "初报记录",
        items: [{ label: "初报时间", value: initReportStr }]
      }
    });
    rawNodes.push({
      node: "审批退回",
      badgeCls: "returned",
      icon: "rotate-ccw",
      person: senderName || "齐杰",
      unit: senderOrg || "指挥中心",
      arriveTime: initReportStr,
      leaveTime: rejectStr,
      date: rejectStr.split(" ")[0],
      time: rejectStr.split(" ")[1],
      opinion: '<span style="color:#e11d48;font-weight:600">【退回重办】' + escapeHtml(row.rejectReason || "佐证材料中缺乏账号源头取证报告及下架函，请补齐材料重报！") + '</span>',
      timeLimitInfo: {
        type: "waiting",
        title: "退回整改时效",
        items: [{ label: "处置时限", value: "退回重办纳入限时考核，请尽快补正" }]
      }
    });
    rawNodes.push({
      node: "重新办理",
      badgeCls: "current",
      icon: "clock",
      person: row.processor && row.processor !== "-" ? row.processor : receiverName,
      unit: "台湾省网信办",
      arriveTime: rejectStr,
      leaveTime: '<span class="flow-status-chip">办理中</span>',
      date: rejectStr.split(" ")[0],
      time: rejectStr.split(" ")[1],
      opinion: "针对退回意见补充取证材料，重新填报回执中",
      timeLimitInfo: {
        type: "handling",
        title: "处置限时跟踪记录",
        items: [
          { label: "办结截止时间", value: deadline },
          { label: "处置时效", value: "重新办理中", highlight: true }
        ]
      }
    });
  } else if(d.status === "待阅"){
    var tDist = addSeconds(tSent, 300);
    var distStr = formatDateTime(tDist);
    rawNodes.push({
      node: "公文分发",
      badgeCls: "finish",
      icon: "share-2",
      person: "系统自动",
      unit: "公文流转中心",
      arriveTime: sentTimeStr,
      leaveTime: distStr,
      date: distStr.split(" ")[0],
      time: distStr.split(" ")[1],
      opinion: "公文通报自动推送至经办人待阅列表",
      timeLimitInfo: {
        type: "submitted",
        title: "分发记录",
        items: [{ label: "分发时间", value: distStr }]
      }
    });
    rawNodes.push({
      node: "阅知待办",
      badgeCls: "current",
      icon: "clock",
      person: receiverName,
      unit: "台湾省网信办",
      arriveTime: distStr,
      leaveTime: '<span class="flow-status-chip">待阅中</span>',
      date: distStr.split(" ")[0],
      time: distStr.split(" ")[1],
      opinion: "等待经办人查阅并确认阅知办结",
      timeLimitInfo: {
        type: "waiting",
        title: "阅知时效要求",
        items: [{ label: "阅知要求", value: "当日内完成通报查阅并确认签收" }]
      }
    });
  }

  // 7. 回执提交 (待审批或已归档)
  var tReceipt = addSeconds(tAccept, 2400); // 默认约40分钟
  if(d.receipt && d.receipt.time){
    var parsedRec = parseSafeDate(d.receipt.time);
    if(parsedRec.getTime() > tAccept.getTime()){
      tReceipt = parsedRec;
    }
  }
  var receiptTimeStr = formatDateTime(tReceipt);

  if(d.status === "待审批" || d.status === "已归档"){
    rawNodes.push({
      node: "回执提交",
      badgeCls: "finish",
      icon: "file-check",
      person: (d.receipt && d.receipt.processor) || row.processor || "武乙",
      unit: "台湾省网信办",
      arriveTime: acceptTimeStr,
      leaveTime: receiptTimeStr,
      date: receiptTimeStr.split(" ")[0],
      time: receiptTimeStr.split(" ")[1],
      opinion: (d.receipt && d.receipt.note) || "已完成全网溯源查证与管控，佐证材料已上传，申请核准",
      timeLimitInfo: {
        type: "submitted",
        title: "办结履约时效记录",
        items: [
          { label: "回执提交时间", value: receiptTimeStr },
          { label: "处置总耗时", value: (d.receipt && d.receipt.duration) || "40分钟", highlight: true },
          { label: "时限履约结果", value: "在规定时限内办结完成" }
        ]
      }
    });
  }

  // 8. 审批与归档
  if(d.status === "待审批"){
    rawNodes.push({
      node: "回执审批",
      badgeCls: "approval",
      icon: "shield-alert",
      person: senderName || "齐杰",
      unit: senderOrg || "市公安局情指中心",
      arriveTime: receiptTimeStr,
      leaveTime: '<span class="flow-status-chip" style="background:#dbeafe;color:#1d4ed8">审批中</span>',
      date: receiptTimeStr.split(" ")[0],
      time: receiptTimeStr.split(" ")[1],
      opinion: "已提交至指令下发主管审批，审核处置证据闭环情况",
      timeLimitInfo: {
        type: "waiting",
        title: "审批流转跟踪",
        items: [{ label: "审批时限要求", value: "回执提交后24小时内完成审核" }]
      }
    });
  } else if(d.status === "已归档"){
    var tApprove = addSeconds(tReceipt, 600); // +10分钟
    if(d.handled){
      var parsedHandled = parseSafeDate(d.handled);
      if(parsedHandled.getTime() > tReceipt.getTime()){
        tApprove = parsedHandled;
      }
    }
    var approveTimeStr = formatDateTime(tApprove);
    var tArchive = addSeconds(tApprove, 60);
    var archiveTimeStr = formatDateTime(tArchive);

    rawNodes.push({
      node: "审批通过",
      badgeCls: "finish",
      icon: "shield-check",
      person: senderName || "武丁",
      unit: senderOrg || "指挥中心",
      arriveTime: receiptTimeStr,
      leaveTime: approveTimeStr,
      date: approveTimeStr.split(" ")[0],
      time: approveTimeStr.split(" ")[1],
      opinion: "审核通过，处置措施闭环到位，佐证充分，同意归档结案",
      timeLimitInfo: {
        type: "accepted",
        title: "审核结论",
        items: [{ label: "审核结论", value: "审批通过" }]
      }
    });
    rawNodes.push({
      node: "办结归档",
      badgeCls: "archived",
      icon: "archive",
      person: "系统归档",
      unit: "台湾省网信办",
      arriveTime: approveTimeStr,
      leaveTime: archiveTimeStr,
      date: archiveTimeStr.split(" ")[0],
      time: archiveTimeStr.split(" ")[1],
      opinion: "全流程流转闭环，已生成电子归档凭证并正式入库",
      timeLimitInfo: {
        type: "accepted",
        title: "归档确认",
        items: [{ label: "归档凭证", value: "已生成全流程电子证据链" }]
      }
    });
  }

  // 9. 用户动态操作标注（新增子单等）
  var userAnnotations = (state.annotations && state.annotations[row.key]) || [];
  if(userAnnotations.length){
    userAnnotations.forEach(function(ann){
      var aDate = ann[0] || sentDateStr;
      var aTime = ann[1] || "09:00:00";
      var aTitle = ann[2] || "流转操作";
      var aText = ann[3] || "";
      rawNodes.push({
        node: aTitle,
        badgeCls: aTitle.indexOf("取消") > -1 ? "returned" : "transfer",
        icon: aTitle.indexOf("取消") > -1 ? "undo-2" : "git-branch",
        person: currentUser,
        unit: "台湾省网信办",
        arriveTime: aDate + " " + aTime,
        leaveTime: aDate + " " + aTime,
        date: aDate,
        time: aTime,
        opinion: escapeHtml(aText),
        timeLimitInfo: {
          type: "waiting",
          title: "动态流转记录",
          items: [{ label: "记录时间", value: aDate + " " + aTime }]
        }
      });
    });
  }

  // 最新节点在最上面（倒序排列）
  return rawNodes.slice().reverse();
}

function renderTimelineInner(flowNodes, d){
  var lastDate = "";
  return '<div class="timeline detail-timeline" style="margin-top:4px">' +
    flowNodes.map(function(item){
      var dateHtml = item.date !== lastDate ? '<span class="timeline-event-date">' + escapeHtml(item.date) + '</span>' : "";
      lastDate = item.date;
      var timeDisplay = item.time || (item.arriveTime ? item.arriveTime.split(" ")[1] : "08:30:00");

      return '<div class="event">' +
        dateHtml +
        '<time>' + escapeHtml(timeDisplay) + '</time>' +
        '<div class="timeline-event-title" style="display:flex;align-items:center;flex-wrap:wrap;gap:8px">' +
          '<b style="font-size:14px;color:#0f172a">' + escapeHtml(item.node) + '</b>' +
          '<div class="flow-person-cell">' +
            '<span class="flow-person-avatar">' + escapeHtml(item.person.slice(0, 1)) + '</span>' +
            '<span style="font-weight:600;color:#334155">' + escapeHtml(item.person) + '</span>' +
          '</div>' +
          '<span style="color:#64748b;font-size:12.5px">' + escapeHtml(item.unit) + '</span>' +
        '</div>' +
        '<div class="event-detail" style="margin-top:6px">' +
          '<div style="color:#334155;line-height:1.6;font-size:13px">' + item.opinion + '</div>' +
        '</div>' +
      '</div>';
    }).join("") +
  '</div>';
}

function renderFlowTableInner(flowNodes, d){
  var tbodyHtml = flowNodes.map(function(item){
    return '<tr>' +
      '<td style="white-space:nowrap"><span class="flow-node-badge ' + item.badgeCls + '">' + ico(item.icon, 12) + ' ' + escapeHtml(item.node) + '</span></td>' +
      '<td style="white-space:nowrap"><div class="flow-person-cell"><span class="flow-person-avatar">' + escapeHtml(item.person.slice(0, 1)) + '</span><span>' + escapeHtml(item.person) + '</span></div></td>' +
      '<td>' +
        '<div class="flow-opinion-text" style="max-width:none">' + item.opinion + '</div>' +
      '</td>' +
      '<td style="white-space:nowrap"><span style="color:#475569;font-size:13px">' + escapeHtml(item.unit) + '</span></td>' +
      '<td style="white-space:nowrap"><span class="flow-time-cell">' + escapeHtml(item.arriveTime) + '</span></td>' +
      '<td style="white-space:nowrap"><span class="flow-time-cell">' + item.leaveTime + '</span></td>' +
    '</tr>';
  }).join("");

  return '<div class="flow-table-wrap">' +
    '<table class="flow-table">' +
      '<thead>' +
        '<tr>' +
          '<th style="width:130px">流程节点</th>' +
          '<th style="width:120px">节点处理人</th>' +
          '<th>处理意见</th>' +
          '<th style="width:150px">办理单位</th>' +
          '<th style="width:170px">到达节点时间</th>' +
          '<th style="width:170px">离开节点时间</th>' +
        '</tr>' +
      '</thead>' +
      '<tbody>' + tbodyHtml + '</tbody>' +
    '</table>' +
  '</div>';
}

function renderDetailBottomTabs(d){
  var activeTab=state.detailTab||"notes";
  var flowViewMode=state.flowViewMode||"table";
  var notes=(state.notes&&state.notes[d.row.key])||[];
  var flowNodes = getFlowNodes(d);

  var tabHeader='<div class="detail-tabs-header">' +
    '<button type="button" class="detail-tab-btn '+(activeTab==="notes"?"active":"")+'" data-action="switch-detail-tab" data-tab="notes">'+ico("message-square-text",15)+'<span>备注</span><span class="tab-count-badge">'+notes.length+'</span></button>' +
    '<button type="button" class="detail-tab-btn '+(activeTab==="flow"?"active":"")+'" data-action="switch-detail-tab" data-tab="flow">'+ico("git-commit",15)+'<span>流程跟踪</span><span class="tab-count-badge">'+flowNodes.length+'</span></button>' +
  '</div>';

  var contentHtml="";
  if(activeTab==="notes"){
    var editorHtml="";
    if(state.showNoteEditor){
      editorHtml='<div class="compact-note-editor">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
          '<div style="font-size:12.5px;color:#005c5a;font-weight:600;display:inline-flex;align-items:center;gap:5px">'+ico("user-check",13)+'<span>当前以 <b>'+escapeHtml(currentUser)+'</b>（台湾省网信办）身份录入备注</span></div>' +
          '<span style="font-size:11.5px;color:#64748b">协同可见·自动留痕</span>' +
        '</div>' +
        '<textarea id="new-note-text" class="compact-note-textarea" placeholder="请输入针对本指令的流转备注、跟进说明或协作备忘录..."></textarea>' +
        '<div style="display:flex;align-items:center;justify-content:flex-end;gap:8px;margin-top:8px">' +
          '<button type="button" class="btn small" data-action="cancel-note" style="padding:0 14px;height:30px;font-size:12.5px">取消</button>' +
          '<button type="button" class="btn primary small" data-action="submit-note" style="display:inline-flex;align-items:center;gap:4px;padding:0 16px;height:30px;font-size:12.5px;font-weight:700">'+ico("send",12)+' 提交备注</button>' +
        '</div>' +
      '</div>';
    }

    var notesTableRows="";
    if(!notes.length){
      notesTableRows='<tr><td colspan="6" class="empty-table-cell" style="padding:32px 0;text-align:center;color:#94a3b8;font-size:13px">暂无流转备注记录，可点击右上角【+ 添加备注】录入协同备忘</td></tr>';
    } else {
      notesTableRows=notes.map(function(item, idx){
        var isMine = (item.author === currentUser);
        var initial = (item.author||"武").slice(0,1);
        var unit = item.unit || "台湾省网信办";
        return '<tr>' +
          '<td style="text-align:center;width:55px;color:#94a3b8;font-size:13px">'+(idx+1)+'</td>' +
          '<td style="width:140px">' +
            '<div class="flow-person-cell">' +
              '<span class="flow-person-avatar '+(isMine?'mine':'')+'" style="'+(isMine?'background:#d1fae5;color:#047857':'')+'">'+escapeHtml(initial)+'</span>' +
              '<span style="font-weight:700">'+escapeHtml(item.author)+'</span>' +
              (isMine?'<span style="font-size:11px;color:#059669;background:#ecfdf5;padding:0 4px;border-radius:3px;border:1px solid #a7f3d0;margin-left:4px">我</span>':'') +
            '</div>' +
          '</td>' +
          '<td style="width:160px;color:#475569;font-size:13px">'+escapeHtml(unit)+'</td>' +
          '<td><div style="font-size:13.5px;color:#1e293b;line-height:1.55;word-break:break-word">'+escapeHtml(item.text).split("\n").join("<br>")+'</div></td>' +
          '<td style="width:170px"><span class="flow-time-cell">'+escapeHtml(item.time)+'</span></td>' +
          '<td style="width:80px;text-align:center">' +
            '<button type="button" class="note-quote-btn" data-action="copy-note" data-text="'+escapeHtml(item.text)+'" title="复制备注内容" style="padding:2px 8px">' +
              ico("copy",12) + ' 复制' +
            '</button>' +
          '</td>' +
        '</tr>';
      }).join("");
    }

    var notesTableHtml='<div class="flow-table-wrap">' +
      '<table class="flow-table">' +
        '<thead>' +
          '<tr>' +
            '<th style="width:55px;text-align:center">序号</th>' +
            '<th style="width:140px">备注人</th>' +
            '<th style="width:160px">所属单位</th>' +
            '<th>备注内容</th>' +
            '<th style="width:170px">记录时间</th>' +
            '<th style="width:80px;text-align:center">操作</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>' + notesTableRows + '</tbody>' +
      '</table>' +
    '</div>';

    contentHtml='<div class="notes-tab-pane">' +
      '<div class="notes-pane-top">' +
        '<div class="notes-pane-title">' +
          ico("message-square-text", 16) +
          '<span>流转协作备注</span>' +
          '<span class="flow-node-counter">共 ' + notes.length + ' 条记录</span>' +
        '</div>' +
        (state.showNoteEditor ? '' : '<button type="button" class="btn primary small" data-action="open-add-note" style="display:inline-flex;align-items:center;gap:5px;padding:0 14px;height:32px;font-size:13px;font-weight:700">' + ico("plus", 14) + ' 添加备注</button>') +
      '</div>' +
      editorHtml +
      notesTableHtml +
    '</div>';
  } else {
    var flowSwitchToolbar='<div class="flow-pane-top">' +
      '<div class="flow-pane-title">' +
        ico("git-commit", 16) +
        '<span>流程流转跟踪</span>' +
        '<span class="flow-node-counter">共 ' + flowNodes.length + ' 个流转节点</span>' +
      '</div>' +
      '<div class="flow-view-switch-group">' +
        '<button type="button" class="flow-switch-btn '+(flowViewMode==="table"?"active":"")+'" data-action="switch-flow-view" data-view="table">' +
          ico("table", 13) + ' <span>表格形式</span>' +
        '</button>' +
        '<button type="button" class="flow-switch-btn '+(flowViewMode==="timeline"?"active":"")+'" data-action="switch-flow-view" data-view="timeline">' +
          ico("git-commit", 13) + ' <span>时间轴形式</span>' +
        '</button>' +
      '</div>' +
    '</div>';

    var flowBodyHtml = flowViewMode==="timeline" ? renderTimelineInner(flowNodes, d) : renderFlowTableInner(flowNodes, d);
    contentHtml='<div class="notes-tab-pane">' + flowSwitchToolbar + flowBodyHtml + '</div>';
  }

  return '<section class="card detail-tabs-card">'+tabHeader+contentHtml+'</section>';
}

function detailActionBar(status,source){
  var row=currentDetailTask();
  if(!row) return "";
  if(status==="已归档") return "";

  if(status==="待重新派发"){
    return '<div class="detail-action-bar">' +
      '<div class="detail-action-bar-inner" style="justify-content:space-between">' +
        '<div style="font-size:13px;color:#c2410c;display:flex;align-items:center;gap:6px">' +
          ico("alert-circle", 16) + '<span>工单已回退至下发节点，请修改指令内容与接收人后重新派发</span>' +
        '</div>' +
        '<div style="display:flex;gap:12px;align-items:center">' +
          '<button class="btn light" data-action="back-list" style="padding:0 24px;height:38px;font-size:13px;font-weight:600;border-radius:6px;cursor:pointer">取消</button>' +
          '<button class="btn action-teal" data-action="confirm-redispatch" style="background:#005c58;border-color:#005c58;color:#ffffff;padding:0 32px;height:38px;font-size:14px;font-weight:800;border-radius:6px;box-shadow:0 2px 10px rgba(0,92,88,0.35);cursor:pointer;display:inline-flex;align-items:center;gap:8px">' +
            ico("send", 16) + ' 发起' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // 待审批状态：提交后到达流程下发人，由下发人审核。处理人提交工单后，应该不能显示审批类的按钮，只会展示传阅按钮。
  if(status==="待审批"){
    var approver = row.sender || "武甲";
    var isApprover = (approver === currentUser) || (row.sender === currentUser);
    var isProcessor = (row.processor === currentUser) && (row.sender !== currentUser);

    if(isProcessor || !isApprover){
      return '<div class="detail-action-bar">' +
        '<div class="detail-action-bar-inner" style="justify-content:space-between">' +
          '<div style="font-size:13px;color:#64748b;display:flex;align-items:center;gap:6px">' +
            ico("clock-3", 16) + '<span>工单回执已提交，当前处于【待审批】阶段，等待审批人（' + escapeHtml(approver) + '）审核裁定</span>' +
          '</div>' +
          '<div style="display:flex;gap:12px">' +
            // '<button class="btn light" data-action="detail-open-circulate" style="color:#005c58;border-color:#b5e5e2;background:#eef8f7;padding:0 22px;height:38px;font-size:13px;font-weight:700;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
            //   ico("share-2", 14) + ' 传阅' +
            // '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    // 审批人视图：下方按钮左侧为退回重办，右侧为通过并归档（左侧带传阅）
    return '<div class="detail-action-bar">' +
      '<div class="detail-action-bar-inner" style="justify-content:space-between">' +
        '<div style="font-size:13px;color:#64748b;display:flex;align-items:center;gap:6px">' +
          ico("shield-alert", 16) + '<span>当前节点为【回执审批】，请审阅处置成果并裁定</span>' +
        '</div>' +
        '<div style="display:flex;gap:12px">' +
          // '<button class="btn light" data-action="detail-open-circulate" style="color:#005c58;border-color:#b5e5e2;background:#eef8f7;padding:0 20px;height:38px;font-size:13px;font-weight:700;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
          //   ico("share-2", 14) + ' 传阅' +
          // '</button>' +
          '<button class="btn danger" data-action="detail-open-reject" style="background:#fff1f2;border:1px solid #fda4af;color:#e11d48;padding:0 24px;height:38px;font-weight:700;box-shadow:none;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
            ico("rotate-ccw",15) + ' 退回重办' +
          '</button>' +
          '<button class="btn action-teal" data-action="detail-approve-archive" style="background:#059669;border:1px solid #059669;color:#ffffff;padding:0 28px;height:38px;font-weight:700;box-shadow:0 2px 10px rgba(5,150,105,0.3);border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
            ico("check-check",16) + ' 通过并归档' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // 核心逻辑：操作是详情的单子，点进去，不应该展示按钮。
  if(!isTaskActionHandle(row, source)){
    return "";
  }

  // 待阅公文指令
  if(status==="待阅"||row.req==="仅阅读"){
    return '<div class="detail-action-bar">' +
      '<div class="detail-action-bar-inner" style="justify-content:flex-end">' +
        // '<button class="btn light" data-action="detail-open-circulate" style="color:#005c58;border-color:#b5e5e2;background:#eef8f7;padding:0 20px;height:38px;font-size:13px;font-weight:700;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
        //   ico("share-2", 14) + ' 传阅' +
        // '</button>' +
        '<button class="btn action-teal" data-action="detail-finish-read" style="background:#059669;border-color:#059669;padding:0 26px;font-size:14px;font-weight:700">' +
          ico("check-circle",15) + ' 确认阅知并办结' +
        '</button>' +
      '</div>' +
    '</div>';
  }

  // 待处理状态：最左侧增加传阅按钮，右侧从左到右分别为：生成子单，转办，提交结果。
  return '<div class="detail-action-bar">' +
    '<div class="detail-action-bar-inner" style="justify-content:flex-end">' +
      // '<button class="btn light" data-action="detail-open-circulate" style="color:#005c58;border-color:#b5e5e2;background:#eef8f7;padding:0 20px;height:38px;font-size:13px;font-weight:700;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
      //   ico("share-2", 14) + ' 传阅' +
      // '</button>' +
      '<div style="display:flex;gap:12px;align-items:center">' +
        '<button class="btn light" data-action="detail-open-subtask" style="color:#0284c7;border-color:#bae6fd;background:#f0f9ff;padding:0 20px;height:38px;font-size:13px;font-weight:600;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
          ico("git-fork", 14) + ' 生成子单' +
        '</button>' +
        '<button class="btn orange" data-action="detail-open-transfer" style="padding:0 22px;height:38px;font-size:13px;font-weight:600;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;gap:6px">' +
          ico("user-round-cog", 14) + ' 转办' +
        '</button>' +
        '<button class="btn action-teal" data-action="detail-submit-receipt" style="background:#10b981;border-color:#10b981;color:#ffffff;padding:0 28px;height:38px;font-size:14px;font-weight:800;border-radius:6px;box-shadow:0 2px 10px rgba(16,185,129,0.35);cursor:pointer;display:inline-flex;align-items:center;gap:8px">' +
          ico("send", 16) + ' 提交结果' +
        '</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}
function detailStateTag(status, isRejected){
  var cls=status==="已归档"?"archived":status==="待审批"?"approval":"pending";
  var rejectedBadge = isRejected ? '<span class="tag-rejected" style="margin-left:6px">'+ico("rotate-ccw",11)+'驳回重办</span>' : '';
  return '<span class="tag '+cls+' detail-state">'+ico("circle-dot",12)+status+'</span>'+rejectedBadge;
}
function basicInfoHtml(){var d=currentDetailData();return '<div class="detail-basic" data-basic-info><div class="detail-basic-title">基础信息</div><div class="detail-basic-grid"><div class="detail-basic-item"><span class="detail-basic-label">指令类别</span><span class="detail-basic-value">舆情处置</span></div><div class="detail-basic-item"><span class="detail-basic-label">业务应用</span><span class="detail-basic-value">'+d.application+'</span></div><div class="detail-basic-item"><span class="detail-basic-label">业务模块</span><span class="detail-basic-value">'+d.module+'</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发人</span><span class="detail-basic-value">'+highlightUser(d.sender)+'</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发机构</span><span class="detail-basic-value">'+d.org+'</span></div><div class="detail-basic-item"><span class="detail-basic-label">下发时间</span><span class="detail-basic-value">'+d.sentTime+'</span></div><div class="detail-basic-item"><span class="detail-basic-label">接收人</span><span class="detail-basic-value"><span class="receiver">内　'+highlightUser(d.receiver)+'</span></span></div></div></div>'}
function relatedInstructionHtml(d){var links=[];if(d.parentKey)links.push({label:"上一条（父指令）",key:d.parentKey});if(d.childKey)links.push({label:"下一条（转办新指令）",key:d.childKey});if(!links.length)return "";return '<div class="direct-links">'+links.map(function(item){var row=taskRows.filter(function(r){return r.key===item.key})[0];if(!row)return "";return '<div class="direct-link-card"><span>'+ico("git-branch",20)+'</span><div class="direct-copy"><small>'+item.label+'</small><b>'+escapeHtml(row.title)+'</b><span class="tag '+statusClass(row.status)+'">'+row.status+'</span></div><button class="btn light small" data-action="view-related" data-related-key="'+row.key+'">查看</button></div>'}).join("")+'</div>'}
function renderRedispatchDetailPage(d){
  var currentRecipients = state.redispatchRecipients || (Array.isArray(d.row.receiver) ? d.row.receiver.join("、") : (d.row.receiver || "武乙"));
  var detailIdFull = escapeHtml(d.id || "YQCZ1924020260911132448");
  var idSnippet = '<span class="detail-id-wrap" style="display:inline-flex;align-items:center;gap:4px;margin-right:8px"><span>指令ID：'+detailIdFull+'</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="'+detailIdFull+'" title="复制ID">'+ico("copy",12)+'</button></span>';
  var sourceText = state.detailSource === "sent-mgmt" ? "指令监控" : (state.detailSource === "todo" ? "我的待办" : "我下发");

  return '<div class="page detail-page">' +
    '<div class="detail-breadcrumb"><span class="link" data-action="back-list">'+ico("circle-chevron-left",16)+sourceText+'</span><span>/</span><b>重新派发详情</b></div>' +

    '<section class="card detail-summary" style="border-left:4px solid #ea580c;background:#fff7ed;padding:16px 20px;margin-bottom:16px">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
        '<div style="display:flex;align-items:center;gap:8px;font-weight:700;color:#c2410c;font-size:15px">' +
          ico("rotate-ccw", 18) +
          '<span>指令已被退回（待重新派发）</span>' +
        '</div>' +
        '<span class="tag" style="background:#ea580c;color:#ffffff;padding:2px 10px;border-radius:4px;font-weight:700;font-size:12px">待重新派发</span>' +
      '</div>' +
      '<div style="font-size:13.5px;color:#475569;line-height:1.6">' +
        '接收人<b>【' + escapeHtml(d.row.returnedBy || "武乙") + '】</b>退回了该指令，工单已退回至发起人节点。请在此修改指令内容及接收对象，重新发起派发。' +
      '</div>' +
    '</section>' +

    '<section class="card detail-section" style="padding:22px 24px;margin-bottom:16px;background:#ffffff">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;border-bottom:1px solid #e2e8f0;padding-bottom:12px">' +
        '<h3 style="margin:0;font-size:16px;font-weight:700;color:#0f172a;display:flex;align-items:center;gap:8px">' +
          '<span style="width:4px;height:16px;background:#005c58;border-radius:2px"></span>' +
          '<span>指令下发内容</span>' +
        '</h3>' +
      '</div>' +

      '<div style="display:flex;flex-direction:column;gap:16px">' +
        '<div>' +
          '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">指令标题 <span style="color:#e11d48">*</span></label>' +
          '<input id="redispatch-title-input" type="text" class="input" style="width:100%;height:38px;padding:0 12px;font-size:13.5px;font-weight:700;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box" value="' + escapeHtml(d.title) + '">' +
        '</div>' +

        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
          '<div>' +
            '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">紧急程度</label>' +
            '<select id="redispatch-urgency-select" class="input" style="width:100%;height:38px;padding:0 12px;font-size:13px;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box">' +
              '<option value="平急"' + (d.urgency==="平急"?" selected":"") + '>平急</option>' +
              '<option value="加急"' + (d.urgency==="加急"?" selected":"") + '>加急</option>' +
              '<option value="特急"' + (d.urgency==="特急"?" selected":"") + '>特急</option>' +
            '</select>' +
          '</div>' +
          '<div>' +
            '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">办理截止时间</label>' +
            '<input id="redispatch-deadline-input" type="text" class="input" style="width:100%;height:38px;padding:0 12px;font-size:13px;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box" value="' + escapeHtml(d.deadline || "2026-09-18 18:00:00") + '">' +
          '</div>' +
        '</div>' +

        '<div>' +
          '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">接收人 / 接收单位 <span style="color:#e11d48">*</span> <span style="font-size:12px;font-weight:400;color:#64748b">（使用下发第三步人员选择器重新指定）</span></label>' +
          '<div style="display:flex;align-items:center;gap:12px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;padding:8px 14px">' +
            '<div style="flex:1;display:flex;align-items:center;gap:8px;flex-wrap:wrap">' +
              ico("users", 18) +
              '<span id="redispatch-recipient-display" style="font-weight:700;font-size:14px;color:#0f172a">' + escapeHtml(currentRecipients) + '</span>' +
              '<span style="font-size:12px;color:#059669;background:#ecfdf5;border:1px solid #a7f3d0;padding:2px 8px;border-radius:4px;font-weight:600">已回显</span>' +
            '</div>' +
            '<button type="button" class="btn primary" data-action="open-redispatch-recipient-modal" style="background:#005c58;border-color:#005c58;color:#ffffff;height:34px;padding:0 16px;font-size:13px;font-weight:700;border-radius:4px;display:inline-flex;align-items:center;gap:6px;cursor:pointer">' +
              ico("user-plus", 14) + ' 重新选择接收人' +
            '</button>' +
          '</div>' +
        '</div>' +

        '<div>' +
          '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">舆情来源</label>' +
          '<input id="redispatch-source-input" type="text" class="input" style="width:100%;height:38px;padding:0 12px;font-size:13px;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box" value="' + escapeHtml(d.source || "网络监测巡查") + '">' +
        '</div>' +

        '<div>' +
          '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">原文链接</label>' +
          '<input id="redispatch-url-input" type="text" class="input" style="width:100%;height:38px;padding:0 12px;font-size:13px;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box" value="' + escapeHtml(d.url || "") + '">' +
        '</div>' +

        '<div>' +
          '<label style="display:block;font-size:13px;font-weight:700;color:#334155;margin-bottom:6px">舆情说明与指令要求</label>' +
          '<textarea id="redispatch-desc-textarea" class="textarea" style="width:100%;height:110px;padding:10px 12px;font-size:13px;line-height:1.6;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box;resize:vertical">' + escapeHtml(d.description || "") + '</textarea>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="card detail-section receipt-fill-section" style="padding:22px 24px;margin-bottom:16px;background:#f8fafc;border:1px solid #e2e8f0">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;border-bottom:1px solid #e2e8f0;padding-bottom:12px">' +
        '<h3 style="margin:0;font-size:16px;font-weight:700;color:#334155;display:flex;align-items:center;gap:8px">' +
          '<span style="width:4px;height:16px;background:#94a3b8;border-radius:2px"></span>' +
          '<span>指令回执信息</span>' +
          '<span style="font-size:12px;font-weight:400;color:#64748b;margin-left:6px">（不可修改 · 待接收人办理时填报）</span>' +
        '</h3>' +
        '<span class="receipt-status-pill locked" style="background:#f1f5f9;color:#64748b;border:1px solid #cbd5e1;padding:3px 10px;border-radius:4px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:4px">' + ico("lock",13) + ' 待派发激活 (表单只读)</span>' +
      '</div>' +

      '<div class="receipt-form-box locked">' +
        '<div class="form-locked-banner" style="background:#f1f5f9;border:1px solid #cbd5e1;padding:12px 16px;border-radius:6px;display:flex;align-items:center;gap:10px;margin-bottom:16px;color:#475569;font-size:13px">' +
          ico("info",18) +
          '<div>' +
            '<b>当前单据处于发起人重新派发编辑阶段，回执表单处于锁定状态。</b>' +
            '<span style="font-size:12.5px;color:#64748b;margin-left:6px">重新发起派发后，新填报的接收人将收到工单派发通知并激活办理回执填报功能。</span>' +
          '</div>' +
        '</div>' +

        '<div style="display:flex;flex-direction:column;gap:16px;opacity:0.75;pointer-events:none">' +
          '<div>' +
            '<label style="display:block;font-size:13px;font-weight:700;color:#475569;margin-bottom:6px">处理说明 <span style="color:#e11d48">*</span> <span style="font-size:12px;font-weight:400;color:#94a3b8">（接收人办理时填写）</span></label>' +
            '<textarea class="textarea" disabled placeholder="待接收人办理时录入处置说明与办理进度..." style="width:100%;height:88px;padding:10px 12px;font-size:13px;line-height:1.6;background:#ffffff;border:1px solid #cbd5e1;border-radius:6px;box-sizing:border-box;resize:none;color:#94a3b8;cursor:not-allowed"></textarea>' +
          '</div>' +

          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">' +
            '<div>' +
              '<label style="display:block;font-size:13px;font-weight:700;color:#475569;margin-bottom:6px">佐证图片 <span style="font-size:12px;font-weight:400;color:#94a3b8">（支持 jpg、png 格式）</span></label>' +
              '<div style="background:#ffffff;border:1px dashed #cbd5e1;height:84px;border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8;font-size:12px;gap:6px">' +
                ico("image",20) + '<span>待接收人上传佐证截图</span>' +
              '</div>' +
            '</div>' +

            '<div>' +
              '<label style="display:block;font-size:13px;font-weight:700;color:#475569;margin-bottom:6px">处置报告与证明文件 <span style="font-size:12px;font-weight:400;color:#94a3b8">（支持 pdf、docx、zip 格式）</span></label>' +
              '<div style="background:#ffffff;border:1px dashed #cbd5e1;height:84px;border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8;font-size:12px;gap:6px">' +
                ico("file-text",20) + '<span>待接收人上传处置报告及证明文件</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    renderDetailBottomTabs(d) +
    footer() +
    detailActionBar(d.status, state.detailSource) +
  '</div>';
}

function renderDetail(){
  var d=currentDetailData();
  if(d.status === "待重新派发"){
    return renderRedispatchDetailPage(d);
  }
  var origin=state.detailSource==="sent"||d.status==="待审批"?'<span class="tag origin">下发</span>':"",timeInfo="";
  var isAccepted=!!(state.acceptedMap&&state.acceptedMap[d.row.key]) || !!d.row.accepted;
  var isRejected=(d.status==="已退回" || !!d.row.rejected || d.row.key==="todo-returned");
  var displayStatus=d.status;
  if(d.status==="已退回"){
    displayStatus="待处理";
  }

  if(d.requirement==="限时回执" && (d.status==="待处理" || d.status==="已退回" || isRejected)){
    if(d.status==="已退回" || isRejected){
      if(d.row.handleOverdue || d.row.overdueHours){
        timeInfo=' '+renderUnifiedCountdownChip("handle", d.row.handleOverdue||d.row.overdueHours, true);
      }else{
        timeInfo=' '+renderUnifiedCountdownChip("handle", d.row.handleCountdown||"15小时00分", false);
      }
    } else {
      if(d.row.handleOverdue || d.row.overdueHours){
        timeInfo=' '+renderUnifiedCountdownChip("handle", d.row.handleOverdue||d.row.overdueHours, true);
      }else{
        timeInfo=' '+renderUnifiedCountdownChip("handle", d.row.handleCountdown||"03小时59分", false);
      }
    }
  }
  var transferTag=d.transferred?'<span class="tag detail-transfer-tag">'+ico("git-branch",12)+'转办</span>':"";
  var detailIdFull = escapeHtml(d.id || "YQCZ1924020260911132448");
  var idSnippet = '<span class="detail-id-wrap" style="display:inline-flex;align-items:center;gap:4px;margin-right:8px"><span>指令ID：'+detailIdFull+'</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="'+detailIdFull+'" title="复制ID">'+ico("copy",12)+'</button></span>';

  var breadcrumbLabel = "待办（" + (displayStatus || "待处理") + "）";
  if(state.detailSource === "done"){
    breadcrumbLabel = "已办";
  } else if(state.detailSource === "read"){
    breadcrumbLabel = "待阅";
  } else if(state.detailSource === "sent"){
    breadcrumbLabel = "我下发";
  } else if(state.detailSource === "sent-mgmt"){
    breadcrumbLabel = "指令监控";
  } else if(state.detailSource === "draft"){
    breadcrumbLabel = "草稿箱";
  } else if(state.detailSource === "stats"){
    breadcrumbLabel = "统计穿透";
  }

  return '<div class="page detail-page"><div class="detail-breadcrumb"><span class="link" data-action="back-list">'+ico("circle-chevron-left",16)+breadcrumbLabel+'</span><span>/</span><b>详情</b></div><section class="card detail-summary"><div class="detail-band">'+idSnippet+origin+transferTag+'<span class="tag returned">'+d.requirement+'</span>'+(d.deadline?'<span>'+d.deadline+'</span>':"")+timeInfo+detailStateTag(displayStatus, isRejected)+'</div><div class="detail-title"><span class="detail-title-main">'+ico("notebook-text",23)+'<span>'+d.title+'</span></span><span class="link">展开详情</span></div></section><section class="card detail-section"><h3>指令下发内容 <span class="link detail-heading-link" style="float:right;font-weight:400"><span>原文链接</span>'+ico("external-link",13)+'</span></h3>'+(d.source?'<div class="kv"><span>舆情来源</span><b>'+d.source+'</b></div>':"")+'<div class="kv"><span>舆情说明</span><div class="detail-long-text">'+d.description.replace(/\n/g,"<br>")+'</div></div>'+renderDetailPhotos(d.images,"下发图片")+renderDetailFiles(d.files)+'</section>'+renderEmbeddedHandlingSection(d)+renderDetailBottomTabs(d)+footer()+detailActionBar(d.status,state.detailSource)+'</div>'
}
var guideLinkStore = { mobile: "", mt: "" };
function readGuideCookie(name){
  try {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  } catch(e){
    return "";
  }
}
function writeGuideCookie(name, value){
  try {
    document.cookie = name + "=" + encodeURIComponent(value || "") + "; path=/; max-age=31536000; SameSite=Lax";
  } catch(e){}
}
function hydrateGuideLinks(){
  var mobile = "";
  var mt = "";
  try {
    mobile = localStorage.getItem("custom_link_mobile") || "";
    mt = localStorage.getItem("custom_link_mt") || "";
  } catch(e){}
  if(!mobile) mobile = readGuideCookie("zlpc_guide_mobile");
  if(!mt) mt = readGuideCookie("zlpc_guide_mt");
  guideLinkStore.mobile = mobile || "";
  guideLinkStore.mt = mt || "";
}
hydrateGuideLinks();
function getGuideLink(target){
  if(target !== "mobile" && target !== "mt") return "";
  if(guideLinkStore[target]) return guideLinkStore[target];
  hydrateGuideLinks();
  return guideLinkStore[target] || "";
}
function setGuideLink(target, url){
  if(target !== "mobile" && target !== "mt") return;
  var val = url || "";
  guideLinkStore[target] = val;
  try {
    if(val) localStorage.setItem("custom_link_" + target, val);
    else localStorage.removeItem("custom_link_" + target);
  } catch(e){}
  writeGuideCookie("zlpc_guide_" + target, val);
}
function flushGuideLinkInputs(){
  ["mobile", "mt"].forEach(function(target){
    var inp = document.getElementById("guide-link-" + target);
    if(!inp) return;
    var val = normalizeUrl(inp.value);
    if(val){
      setGuideLink(target, val);
      if(!state.guideEditing) state.guideEditing = {};
      state.guideEditing[target] = false;
    }
  });
}
function normalizeUrl(url){
  if(!url) return "";
  url = url.trim();
  if(!url) return "";
  if(!/^https?:\/\//i.test(url) && !/^\/\//.test(url) && !/^mailto:/i.test(url) && !/^tel:/i.test(url)){
    return "https://" + url;
  }
  return url;
}
function renderGuide(){
  var mobileLink = getGuideLink("mobile");
  var mtLink = getGuideLink("mt");
  if(!state.guideEditing){
    state.guideEditing = { mobile: false, mt: false };
  }

  var pcCard = '<div class="guide-card guide-card-pc" data-action="open-pc" title="点击进入PC端指令流转中心">'
    + '<div class="guide-card-top">'
      + '<div class="guide-card-icon guide-icon-pc">' + ico("monitor", 28) + '</div>'
      + '<span class="guide-status-badge badge-internal">' + ico("check-circle-2", 13) + '内置系统</span>'
    + '</div>'
    + '<h2 class="guide-card-title">指令PC端</h2>'
    + '<p class="guide-card-desc">指令流转中心桌面端主工作台，支持全量指令下发协同、处置回执、全景监控与多维决策看板。</p>'
    + '<div class="guide-card-footer">'
      + '<button type="button" class="guide-action-btn primary-btn" data-action="open-pc">'
        + '<span>进入PC端工作台</span>' + ico("arrow-right", 16)
      + '</button>'
    + '</div>'
  + '</div>';

  var mobileIsEditing = !mobileLink || !!(state.guideEditing && state.guideEditing.mobile);
  var mobileCard = '<div class="guide-card guide-card-link" data-card-target="mobile">'
    + '<div class="guide-card-top">'
      + '<div class="guide-card-icon guide-icon-mobile">' + ico("smartphone", 28) + '</div>'
      + '<span class="guide-status-badge badge-link">' + ico("external-link", 13) + '跳转链接</span>'
    + '</div>'
    + '<h2 class="guide-card-title">移动端</h2>'
    + '<p class="guide-card-desc">适用于手机移动端及移动办公协同，支持移动端指令查看与处置填报。</p>'
    + '<div class="guide-link-config">'
      + (mobileIsEditing ? (
          '<div class="guide-input-wrapper">'
            + '<div class="guide-input-row">'
              + '<div class="guide-input-prefix">' + ico("link-2", 15) + '</div>'
              + '<input type="url" class="guide-link-input" id="guide-link-mobile" placeholder="输入移动端跳转链接（如 https://...）" value="' + escapeHtml(mobileLink) + '" />'
              + '<button type="button" class="guide-save-btn" data-action="save-guide-link" data-target="mobile">' + ico("save", 13) + ' 保存</button>'
            + '</div>'
            + '<div class="guide-input-tip">'
              + '<span>输入并保存后，点击卡片或按钮即可直接跳转</span>'
              + (mobileLink ? '<span class="link" data-action="cancel-edit-guide-link" data-target="mobile">取消</span>' : '')
            + '</div>'
          + '</div>'
        ) : (
          '<div class="guide-saved-wrapper">'
            + '<div class="guide-saved-box" title="' + escapeHtml(mobileLink) + '">'
              + '<span class="guide-saved-icon">' + ico("globe", 14) + '</span>'
              + '<span class="guide-saved-url">' + escapeHtml(mobileLink) + '</span>'
              + '<button type="button" class="guide-edit-inline-btn" data-action="edit-guide-link" data-target="mobile" title="修改跳转地址">' + ico("pencil", 12) + ' 修改</button>'
            + '</div>'
            + '<button type="button" class="guide-action-btn jump-btn" data-action="jump-guide-link" data-target="mobile">'
              + '<span>立即跳转访问</span>' + ico("external-link", 15)
            + '</button>'
          + '</div>'
        ))
    + '</div>'
  + '</div>';

  var mtIsEditing = !mtLink || !!(state.guideEditing && state.guideEditing.mt);
  var mtCard = '<div class="guide-card guide-card-link" data-card-target="mt">'
    + '<div class="guide-card-top">'
      + '<div class="guide-card-icon guide-icon-mt">' + ico("layout-dashboard", 28) + '</div>'
      + '<span class="guide-status-badge badge-link">' + ico("external-link", 13) + '跳转链接</span>'
    + '</div>'
    + '<h2 class="guide-card-title">MT端</h2>'
    + '<p class="guide-card-desc">适用于管理中心与流程引擎调度、业务模板管理、组织权限及实例协同中心。</p>'
    + '<div class="guide-link-config">'
      + (mtIsEditing ? (
          '<div class="guide-input-wrapper">'
            + '<div class="guide-input-row">'
              + '<div class="guide-input-prefix">' + ico("link-2", 15) + '</div>'
              + '<input type="url" class="guide-link-input" id="guide-link-mt" placeholder="输入MT端跳转链接（如 https://...）" value="' + escapeHtml(mtLink) + '" />'
              + '<button type="button" class="guide-save-btn" data-action="save-guide-link" data-target="mt">' + ico("save", 13) + ' 保存</button>'
            + '</div>'
            + '<div class="guide-input-tip">'
              + '<span>输入并保存后，点击卡片或按钮即可直接跳转</span>'
              + (mtLink ? '<span class="link" data-action="cancel-edit-guide-link" data-target="mt">取消</span>' : '')
            + '</div>'
          + '</div>'
        ) : (
          '<div class="guide-saved-wrapper">'
            + '<div class="guide-saved-box" title="' + escapeHtml(mtLink) + '">'
              + '<span class="guide-saved-icon">' + ico("globe", 14) + '</span>'
              + '<span class="guide-saved-url">' + escapeHtml(mtLink) + '</span>'
              + '<button type="button" class="guide-edit-inline-btn" data-action="edit-guide-link" data-target="mt" title="修改跳转地址">' + ico("pencil", 12) + ' 修改</button>'
            + '</div>'
            + '<button type="button" class="guide-action-btn jump-btn" data-action="jump-guide-link" data-target="mt">'
              + '<span>立即跳转访问</span>' + ico("external-link", 15)
            + '</button>'
          + '</div>'
        ))
    + '</div>'
  + '</div>';

  return '<div class="guide-page">'
    + '<section class="guide-hero">'
      + '<div class="guide-kicker">' + ico("layout-grid", 17) + ' 指令流转中心 · 终端协同门户</div>'
      + '<h1>统一入口导航</h1>'
      + '<p>请选择需要访问的终端，支持直达PC端工作台，或配置并跳转至移动端与MT端外部业务协同系统</p>'
    + '</section>'
    + '<section class="guide-cards">'
      + pcCard
      + mobileCard
      + mtCard
    + '</section>'
    + footer()
  + '</div>';
}
function renderLoginQrMark(){
  var cells = "";
  var i, j, n = 21;
  function on(x, y){
    var inFinder = (x < 7 && y < 7) || (x > n - 8 && y < 7) || (x < 7 && y > n - 8);
    if(inFinder){
      var fx = x < 7 ? x : (x > n - 8 ? x - (n - 7) : x);
      var fy = y < 7 ? y : (y > n - 8 ? y - (n - 7) : y);
      var ring = fx === 0 || fy === 0 || fx === 6 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4);
      return ring;
    }
    if(x >= 8 && x <= 12 && y >= 8 && y <= 12) return false;
    return ((x * 7 + y * 13 + x * y) % 5) < 2;
  }
  for(j = 0; j < n; j++){
    for(i = 0; i < n; i++){
      if(on(i, j)) cells += '<rect x="'+i+'" y="'+j+'" width="1" height="1" rx="0.08"/>';
    }
  }
  return '<svg class="zgl-qr-svg" viewBox="0 0 '+n+' '+n+'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+cells+'</svg>';
}
function renderLogin(){
  return '<div class="zgl-login">' +
    '<div class="zgl-login-bg"></div>' +
    '<header class="zgl-login-top">' +
      '<div class="zgl-login-brands">' +
        '<span class="zgl-kn"><b>KN</b><span>康奈网络<br>knn.net.cn</span></span>' +
        '<span class="zgl-brand-split"></span>' +
        '<img class="zgl-login-logo" src="./brand-logo.png" alt="正管用">' +
      '</div>' +
      '<div class="zgl-login-links"><span>' + ico("phone", 14) + ' 联系我们 4000-999-363</span><i></i><span>产品矩阵</span></div>' +
    '</header>' +
    '<div class="zgl-login-body">' +
      '<div class="zgl-login-copy">' +
        '<div class="zgl-login-domain">wxb.cn</div>' +
        '<h1>正管用</h1>' +
        '<h2>网络生态综合治理平台</h2>' +
        '<ul>' +
          '<li><b>AI</b> 人工智能+网络生态综合治理</li>' +
          '<li>' + ico("check-circle-2", 15) + ' 正能量是总要求</li>' +
          '<li>' + ico("map-pin", 15) + ' 管得住是硬道理</li>' +
          '<li>' + ico("sparkles", 15) + ' 用得好是真本事</li>' +
        '</ul>' +
      '</div>' +
      '<div class="zgl-login-shield" aria-hidden="true"><span>正管用</span></div>' +
      '<div class="zgl-login-card">' +
        '<div class="zgl-login-card-title">欢迎登录</div>' +
        '<div class="zgl-login-card-sub">网络生态综合治理平台</div>' +
        '<button type="button" class="zgl-login-qr" data-action="login-qr-success" title="点击二维码模拟登录">' +
          renderLoginQrMark() +
          '<span class="zgl-login-qr-logo"><img src="./brand-logo.png" alt=""></span>' +
          '<span class="zgl-login-scan"></span>' +
          '<span class="zgl-login-entering-mask">' +
            '<span class="zgl-login-spinner"></span>' +
          '</span>' +
        '</button>' +
        '<div class="zgl-login-qr-tip" data-login-tip>请使用微信扫码同步登录</div>' +
      '</div>' +
    '</div>' +
    '<footer class="zgl-login-foot">© 2013-2026 西安康奈网络科技有限公司 保留所有权利　|　陕ICP备14037110号-14</footer>' +
  '</div>';
}
var HASH_PAGES = {
  guide: true,
  todo: true,
  sent: true,
  read: true,
  done: true,
  draft: true,
  "sent-mgmt": true,
  "issue-dispatch": true,
  stats: true,
  stats2: true,
  "stats-drilldown": true,
  external: true,
  org: true,
  warehouse: true,
  templates: true,
  settings: true,
  roles: true,
  detail: true,
  login: true
};
var JUMP_HASHES = { mt: true, h5: true, mobile: true };
var _applyingHash = false;
var _lastAppHash = "";

function normalizeHashPath(raw){
  var value = String(raw || "").replace(/^#/, "");
  if(!value) return "";
  if(value.charAt(0) !== "/") value = "/" + value;
  return value;
}
function isJumpHash(){
  var raw = String(location.hash || "").replace(/^#/, "").replace(/^\//, "");
  return !!JUMP_HASHES[raw];
}
function parseAppHash(){
  if(isJumpHash()) return { jump: true };
  var raw = normalizeHashPath(location.hash);
  if(!raw || raw === "/") return null;
  var qIndex = raw.indexOf("?");
  var path = qIndex >= 0 ? raw.slice(0, qIndex) : raw;
  var query = qIndex >= 0 ? new URLSearchParams(raw.slice(qIndex + 1)) : new URLSearchParams();
  var parts = path.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  var page = parts[0] || "guide";
  if(page === "settings"){
    return { page: "settings", settingsMenu: parts[1] === "storage" ? "storage" : "dict" };
  }
  if(page === "roles"){
    return { page: "settings", settingsMenu: "dict" };
  }
  if(page === "detail"){
    return {
      page: "detail",
      detailKey: decodeURIComponent(parts[1] || query.get("key") || ""),
      detailSource: query.get("source") || "sent-mgmt"
    };
  }
  if(page === "stats-drilldown"){
    return {
      page: "stats-drilldown",
      statsDrilldown: {
        scope: query.get("scope") || "",
        entity: query.get("entity") || "",
        metric: query.get("metric") || ""
      }
    };
  }
  if(page === "todo" || page === "sent" || page === "read" || page === "done" || page === "draft"){
    var sub = page === "todo" ? (parts[1] || "todo") : page;
    if(sub === "read" || (sub !== "todo" && sub !== "sent" && sub !== "done" && sub !== "draft")) sub = "todo";
    return { page: "todo", mySubPage: sub };
  }
  if(!HASH_PAGES[page]) page = "guide";
  return { page: page };
}
function buildAppHash(){
  var page = state.page || "guide";
  if(page === "issue-form") page = "todo";
  if(page === "todo" || page === "sent" || page === "read" || page === "done" || page === "draft"){
    var sub = page === "todo" ? (state.mySubPage || "todo") : page;
    page = sub === "todo" ? "todo" : "todo/" + sub;
  }
  if(page === "roles") page = "settings";
  var hash = "#/" + page;
  if(page === "settings" && state.settingsMenu === "storage") hash = "#/settings/storage";
  if(page === "detail"){
    hash = "#/detail/" + encodeURIComponent(state.detailKey || "");
    if(state.detailSource) hash += "?source=" + encodeURIComponent(state.detailSource);
  }
  if(page === "stats-drilldown" && state.statsDrilldown){
    var d = state.statsDrilldown;
    hash = "#/stats-drilldown?scope=" + encodeURIComponent(d.scope || "") +
      "&entity=" + encodeURIComponent(d.entity || "") +
      "&metric=" + encodeURIComponent(d.metric || "");
  }
  return hash;
}
function applyParsedHash(parsed){
  if(!parsed || parsed.jump) return false;
  if(parsed.page) state.page = parsed.page;
  if(parsed.mySubPage) state.mySubPage = parsed.mySubPage;
  if(parsed.settingsMenu) state.settingsMenu = parsed.settingsMenu;
  if(parsed.detailKey) state.detailKey = parsed.detailKey;
  if(parsed.detailSource) state.detailSource = parsed.detailSource;
  if(parsed.statsDrilldown) state.statsDrilldown = parsed.statsDrilldown;
  return true;
}
function syncHashFromState(){
  if(_applyingHash || isJumpHash()) return;
  var next = buildAppHash();
  if(location.hash === next){
    _lastAppHash = next;
    return;
  }
  var pageChanged = !!_lastAppHash && _lastAppHash !== next;
  _lastAppHash = next;
  if(pageChanged) history.pushState(null, "", next);
  else history.replaceState(null, "", next);
}
function consumeLegacyQuery(){
  var params = new URLSearchParams(location.search);
  var used = false;
  if(params.get("page")){
    state.page = params.get("page");
    params.delete("page");
    used = true;
  } else if(params.get("guide") === "0"){
    state.page = "sent-mgmt";
    params.delete("guide");
    used = true;
  }
  if(params.get("detail")){
    state.detailKey = params.get("detail");
    state.detailSource = params.get("source") || "sent-mgmt";
    state.page = "detail";
    params.delete("detail");
    params.delete("source");
    used = true;
  }
  if(used){
    var qs = params.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + (location.hash || ""));
  }
  return used;
}

function render(){
  closeNavSettingsMenu();
  document.querySelector(".app").classList.toggle("guide-mode",state.page==="guide"||state.page==="login");
  document.querySelector(".app").classList.toggle("login-mode",state.page==="login");
  if(state.page==="issue-form"){
    state.page="todo";
  }
  var activePage=state.page==="detail"?(state.detailSource==="stats"||state.detailSource==="stats2"?"stats":state.detailSource):state.page==="stats-drilldown"?"stats":state.page;
  if(activePage==="sent"||activePage==="read"||activePage==="done"||activePage==="draft"||activePage==="issue-form") activePage="todo";
  if(activePage==="roles"||activePage==="settings") activePage="settings";
  document.querySelectorAll("[data-page]").forEach(function(n){n.classList.toggle("active",n.dataset.page===activePage)});
  var settingsTrig=document.getElementById("nav-settings-trigger");
  if(settingsTrig) settingsTrig.classList.toggle("active", state.page==="settings");
  var html=state.page==="guide"?renderGuide():
    state.page==="login"?renderLogin():
    state.page==="issue-dispatch"?renderIssueDispatchPage():
    (state.page==="todo"||state.page==="sent"||state.page==="read"||state.page==="done"||state.page==="draft")?renderMyInstructions():
    state.page==="sent-mgmt"?renderSentManagement():
    state.page==="stats"?renderStats2():
    state.page==="stats2"?renderStats2():
    state.page==="stats-drilldown"?renderStatsDrilldown():
    state.page==="org"?renderUsers(false):
    state.page==="external"?renderUsers(true):
    state.page==="warehouse"?renderWarehousePage():
    state.page==="templates"?renderTemplates():
    state.page==="roles"?(state.settingsMenu="dict",renderSettings()):
    state.page==="settings"?renderSettings():
    renderDetail();
  document.getElementById("page").innerHTML=html;
  if(state.page==="detail"){
    var detailSummary=document.querySelector(".detail-summary");
    if(detailSummary){
      var detailToggle=detailSummary.querySelector(".detail-title > .link");
      if(detailToggle){
        detailToggle.classList.add("detail-toggle");
        detailToggle.dataset.action="toggle-basic";
        detailToggle.innerHTML='<span data-toggle-label>展开详情</span>'+ico("chevron-down",14);
        detailSummary.insertAdjacentHTML("beforeend",basicInfoHtml());
      }
    }
  }
  bindActions();
  bindExtGroupInlineEditors();
  document.querySelectorAll('input[data-indeterminate="true"]').forEach(function(inp){ inp.indeterminate = true; });
  if(state.page==="stats"||state.page==="stats2")setTimeout(drawStats2Charts,0);
  if(window.lucide)lucide.createIcons();
  syncHashFromState();
}
function exportValue(value){var text=value==null||value===""?"-":String(value);return escapeHtml(text)}
function exportSelectedInstructions(){
  var isSentMgmt = state.page === "sent-mgmt";
  var selected = isSentMgmt ? (state.listTabs["sent-mgmt"] || "全部") : (state.listTabs.sent || "全部");
  var rows = taskRows.filter(function(r){
    if(isSentMgmt) return !isCirculateTask(r);
    return r.sender === currentUser && !isCirculateTask(r);
  });
  if(selected!=="全部")rows=rows.filter(function(r){return r.status===selected});
  var selectedRows=rows.filter(function(r){return state.selectedSent[r.key]});
  var targetRows=selectedRows.length?selectedRows:rows;
  if(!targetRows.length){showToast("暂无可导出的指令数据");return}
  var headers=["指令ID","指令标题","指令类别","业务应用","业务模块","指令要求","状态","下发人","下发机构","下发时间","原始接收人","处理人","截止时间","是否超时","舆情来源","舆情说明","处理说明","处理时间","耗时","审批人","审批结果","审批意见","转办人","转办接收人","转办时间","转办备注","原截止时间","转办后截止时间","父指令ID","子指令ID","原文链接","图片链接","文件链接","流转记录","批注"];
  var tableRows=targetRows.map(function(r,index){var dKey=state.detailKey,dPage=state.page;state.detailKey=r.key;var d=currentDetailData();state.detailKey=dKey;state.page=dPage;var t=r.transferInfo||{},receipt=d.receipt||{},approval=d.events.filter(function(e){return String(e[2]||e[1]).indexOf("审批")>-1})[0]||[],values=["YQCZ"+String(202608180001+index),r.title,"舆情处置",d.application,d.module,r.req,r.status,r.sender||"齐杰","台湾省网信办",r.time,plainPeople(r.receiver),r.status==="待处理"?"-":r.processor||"-",r.deadline||"-",r.deadline&&new Date(r.deadline)<new Date()?"是":"否",d.source||"-",d.description||"-",receipt.note||"-",receipt.time||r.handled||"-",receipt.duration||"-",approval.length?"武丁":"-",r.status==="已归档"?"通过":r.status==="已退回"?"退回":"-",r.status==="已退回"?"请按要求补充后重新提交":"-",t.from||"-",t.to||"-",t.time||"-",t.remark||"-",t.oldDeadline||"-",t.newDeadline||"-",r.parentKey||"-",r.childKey||"-","https://www.wxb.cn/flow/detail/"+r.key,d.images?"https://www.wxb.cn/files/"+r.key+"/images":"-",d.files&&d.files.length?"https://www.wxb.cn/files/"+r.key:"-",d.events.map(function(e){return (e[0]||"")+" "+(e[1]||"")+" "+(e[2]||"")}).join("；")||"-",(state.annotations[r.key]||[]).map(function(a){return a[3]}).join("；")||"-"];return '<tr>'+values.map(function(v){return '<td>'+exportValue(v).replace(/\n/g,"<br>")+'</td>'}).join("")+'</tr>'}).join("");
  var html='<html><head><meta charset="UTF-8"></head><body><table border="1"><thead><tr>'+headers.map(function(h){return '<th>'+h+'</th>'}).join("")+'</tr></thead><tbody>'+tableRows+'</tbody></table></body></html>',blob=new Blob([html],{type:"application/vnd.ms-excel;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="指令详情批量导出_20260818.xls";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},500);showToast("已导出 "+targetRows.length+" 条指令详情")
}
function bindActions(){
  document.querySelectorAll("[data-action]").forEach(function(el){el.onclick=function(e){
    var a=el.dataset.action;
    var handled=true;
    if(a==="open-guide"){state.page="guide";render();window.scrollTo(0,0)}
    else if(a==="open-pc"){flushGuideLinkInputs();state.page="login";render();window.scrollTo(0,0)}
    else if(a==="login-qr-success"){
      if(state.loginEntering) return;
      state.loginEntering = true;
      var loginRoot = document.querySelector(".zgl-login");
      var tip = document.querySelector("[data-login-tip]");
      if(loginRoot) loginRoot.classList.add("is-entering");
      if(tip) tip.textContent = "识别成功，正在进入系统…";
      setTimeout(function(){
        state.loginEntering = false;
        state.page = "todo";
        state.mySubPage = "todo";
        showToast("登录成功");
        render();
        window.scrollTo(0,0);
      }, 1400);
    }
    else if(a==="save-guide-link"){
      var target = el.dataset.target;
      var inp = document.getElementById("guide-link-" + target);
      if(inp){
        var val = normalizeUrl(inp.value);
        if(!val){
          showToast("请输入有效的跳转链接（如 https://...）");
          inp.focus();
          return;
        }
        setGuideLink(target, val);
        if(!state.guideEditing) state.guideEditing = {};
        state.guideEditing[target] = false;
        showToast("✓ " + (target === "mobile" ? "移动端" : "MT端") + "跳转链接已成功保存！");
        render();
      }
    }
    else if(a==="edit-guide-link"){
      var target = el.dataset.target;
      if(!state.guideEditing) state.guideEditing = {};
      state.guideEditing[target] = true;
      render();
      setTimeout(function(){
        var inp = document.getElementById("guide-link-" + target);
        if(inp){ inp.focus(); inp.select(); }
      }, 50);
    }
    else if(a==="cancel-edit-guide-link"){
      var target = el.dataset.target;
      if(!state.guideEditing) state.guideEditing = {};
      state.guideEditing[target] = false;
      render();
    }
    else if(a==="jump-guide-link"){
      var target = el.dataset.target;
      var link = getGuideLink(target);
      if(link){
        window.open(link, "_blank");
      } else {
        if(!state.guideEditing) state.guideEditing = {};
        state.guideEditing[target] = true;
        render();
        showToast("请先配置并保存" + (target === "mobile" ? "移动端" : "MT端") + "跳转链接");
      }
    }
    else if(a==="open-h5"){
      var link = getGuideLink("mobile");
      if(link){ window.open(link, "_blank"); }
      else { state.page = "guide"; if(!state.guideEditing) state.guideEditing = {}; state.guideEditing.mobile = true; render(); showToast("请先输入移动端跳转链接并保存"); }
    }
    else if(a==="open-mt"){
      var link = getGuideLink("mt");
      if(link){ window.open(link, "_blank"); }
      else { state.page = "guide"; if(!state.guideEditing) state.guideEditing = {}; state.guideEditing.mt = true; render(); showToast("请先输入MT端跳转链接并保存"); }
    }
    else if(a==="guide-unavailable"){showToast((el.dataset.guideProduct||"")+"端原型暂未接入")}
    else if(a==="stats2-switch-tab"){state.stats2Filter.activeTab=el.dataset.tab;render();}
    else if(a==="stats2-change-period"){
      var p = el.dataset.period;
      state.stats2Filter.timePeriod = p;
      state.stats2Filter.dateRange = p;
      render();
    }
    else if(a==="stats2-query"){
      var tplSel=document.getElementById("stats2-tpl-filter");
      var dtSel=document.getElementById("stats2-date-filter");
      if(tplSel) state.stats2Filter.template=tplSel.value;
      if(dtSel) state.stats2Filter.dateRange=dtSel.value;
      render();
      showToast("已应用筛选条件");
    }
    else if(a==="stats2-reset"){
      state.stats2Filter.template="全部";
      state.stats2Filter.urgency="全部";
      state.stats2Filter.source="全部";
      state.stats2Filter.measure="全部";
      state.stats2Filter.timePeriod="近30天";
      state.stats2Filter.dateRange="近30天";
      state.stats2Filter.orgKw="";
      render();
      showToast("已重置筛选条件");
    }
    else if(a==="stats2-export"){exportStats2FormReport();}
    else if(a==="stats2-view-form"){
      var rid=el.dataset.recordId;
      var found=stats2FormData.records.filter(function(r){return r.id===rid})[0];
      if(found){
        state.stats2SelectedRecord=found;
        openModal("stats2-form-detail");
      }
    }
    else if(a==="stats2-view-reason-detail"){
      var rType=el.dataset.reasonType||"transfer";
      var rTitle=el.dataset.reasonTitle||"原因统计分析";
      state.stats2SelectedReasonType=rType;
      state.stats2SelectedReasonTitle=rTitle;
      openModal("stats2-reason-detail");
    }
    else if(a==="stats2-urge"){
      var orgName=el.dataset.org||"承办责任部门";
      showToast("✓ 已向【"+orgName+"】下达表单履约与质效合规督办提醒函");
    }
    else if(a==="stats2-change-org-tab"){
      state.stats2OrgTab = el.dataset.tab;
      state.stats2Filter.orgKw = "";
      render();
    }
    else if(a==="stats2-toggle-org-tree"){
      var orgId = el.dataset.orgId;
      if(!state.stats2ExpandedOrgs) state.stats2ExpandedOrgs = {};
      state.stats2ExpandedOrgs[orgId] = !state.stats2ExpandedOrgs[orgId];
      var isExp = !!state.stats2ExpandedOrgs[orgId];
      var subRows = document.querySelectorAll(".stats2-org-subrow[data-parent-id='" + orgId + "']");
      subRows.forEach(function(r){ r.style.display = isExp ? "" : "none"; });
      var pBtn = document.querySelector(".stats2-tree-btn[data-org-id='" + orgId + "']");
      if(pBtn){
        pBtn.classList.toggle("expanded", isExp);
        pBtn.title = isExp ? "收起下级" : "展开下级";
      }
    }
    else if(a==="stats2-toggle-expand-all"){
      var shouldExp = !state.stats2AllOrgsExpanded;
      state.stats2AllOrgsExpanded = shouldExp;
      if(!state.stats2ExpandedOrgs) state.stats2ExpandedOrgs = {};
      var allBtns = document.querySelectorAll(".stats2-tree-btn");
      allBtns.forEach(function(b){
        var oid = b.dataset.orgId;
        state.stats2ExpandedOrgs[oid] = shouldExp;
        b.classList.toggle("expanded", shouldExp);
        b.title = shouldExp ? "收起下级" : "展开下级";
      });
      var allSubs = document.querySelectorAll(".stats2-org-subrow");
      allSubs.forEach(function(r){ r.style.display = shouldExp ? "" : "none"; });
      var lbl = el.querySelector(".toggle-label");
      if(lbl) lbl.textContent = shouldExp ? "全部收起" : "全部展开";
    }
    else if(a==="issue" || a==="go-issue-dispatch"){
      if(!assertCanIssue()) return;
      state.page = "issue-dispatch";
      state.issueDraftView = false;
      render();
      window.scrollTo(0,0);
    }
    else if(a==="contact-edit"){
      state.extEditingId = el.dataset.contactId || "";
      openModal("contact-edit");
    }
    else if(a==="invite"){
      ensureInviteState();
      inviteState.tab = "qr";
      inviteState.qrGenerated = false;
      inviteState.codeFilter = "all";
      openModal("invite");
    }
    else if(a==="user-edit"||a==="group-add"||a==="group-delete"||a==="batch"||a==="template-view")openModal(a);
    else if(a==="ext-status-tab"){
      e.stopPropagation();
      var tab = el.dataset.tab || "all";
      state.extStatusPick = tab === "normal" ? ["normal"] : (tab === "disabled" ? ["disabled"] : ["normal", "disabled"]);
      state.extStatusDraft = state.extStatusPick.slice();
      state.extStatusOpen = false;
      state.extStatusTab = tab;
      if(!state.pageNumbers) state.pageNumbers = {};
      state.pageNumbers.external = 1;
      render();
    }
    else if(a==="ext-status-toggle"){
      e.stopPropagation();
      state.extStatusOpen = !state.extStatusOpen;
      if(state.extStatusOpen) state.extStatusDraft = getExtStatusPick().slice();
      render();
    }
    else if(a==="ext-status-toggle-item"){
      e.stopPropagation();
      if(!Array.isArray(state.extStatusDraft)) state.extStatusDraft = getExtStatusPick().slice();
      var st = el.dataset.status;
      var ix = state.extStatusDraft.indexOf(st);
      if(ix > -1) state.extStatusDraft.splice(ix, 1);
      else state.extStatusDraft.push(st);
      state.extStatusOpen = true;
      render();
    }
    else if(a==="ext-status-clear"){
      e.stopPropagation();
      state.extStatusDraft = [];
      state.extStatusOpen = true;
      render();
    }
    else if(a==="ext-status-apply"){
      e.stopPropagation();
      var next = Array.isArray(state.extStatusDraft) ? state.extStatusDraft.slice() : [];
      state.extStatusPick = next.length ? next : ["normal", "disabled"];
      state.extStatusOpen = false;
      if(!state.pageNumbers) state.pageNumbers = {};
      state.pageNumbers.external = 1;
      render();
    }
    else if(a==="ext-select-group"){
      e.stopPropagation();
      if(e.target.closest(".ext-tree-actions, .ext-tree-input, .ext-tree-addbox")) return;
      state.extGroupId = el.dataset.groupId || "all";
      if(!state.pageNumbers) state.pageNumbers = {};
      state.pageNumbers.external = 1;
      render();
    }
    else if(a==="ext-add-child"){
      e.stopPropagation();
      state.extRenamingId = null;
      state.extAddingParentId = el.dataset.parentId || "__root__";
      render();
    }
    else if(a==="ext-cancel-add"){
      e.stopPropagation();
      state.extAddingParentId = null;
      render();
    }
    else if(a==="ext-commit-add"){
      e.stopPropagation();
      var inp = document.getElementById("ext-group-add-input");
      commitExtGroupName(el.dataset.parentId || (inp && inp.dataset.parentId) || "", inp ? inp.value : "", false);
    }
    else if(a==="ext-rename-group"){
      e.stopPropagation();
      state.extAddingParentId = null;
      state.extRenamingId = el.dataset.groupId;
      render();
    }
    else if(a==="ext-delete-group"){
      e.stopPropagation();
      var gid = el.dataset.groupId;
      var target = findExtGroup(gid);
      if(!target) return;
      if(target.children && target.children.length){
        showToast("请先删除子组织");
        return;
      }
      state.extPendingDeleteGroupId = gid;
      openModal("ext-delete-group");
    }
    else if(a==="ext-toggle-phone"){
      e.stopPropagation();
      if(!state.extPhoneReveal) state.extPhoneReveal = {};
      state.extPhoneReveal[el.dataset.id] = !state.extPhoneReveal[el.dataset.id];
      render();
    }
    else if(a==="ext-toggle-wx"){
      e.stopPropagation();
      if(!state.extWxReveal) state.extWxReveal = {};
      state.extWxReveal[el.dataset.id] = !state.extWxReveal[el.dataset.id];
      render();
    }
    else if(a==="ext-toggle-status"){
      e.stopPropagation();
      var ct = extContacts.filter(function(x){ return x.id === el.dataset.id; })[0];
      if(ct){
        ct.status = ct.status === "disabled" ? "normal" : "disabled";
        showToast(ct.name + (ct.status === "disabled" ? " 已停用" : " 已启用"));
        render();
      }
    }
    else if(a==="ext-toggle-row"){
      e.stopPropagation();
      if(!state.extSelected) state.extSelected = {};
      state.extSelected[el.dataset.id] = !state.extSelected[el.dataset.id];
      render();
    }
    else if(a==="ext-toggle-all"){
      e.stopPropagation();
      if(!state.extSelected) state.extSelected = {};
      var allRows = getExtFilteredRows();
      var pageSize = (state.pageSizes && state.pageSizes.external) || 10;
      var currentPage = (state.pageNumbers && state.pageNumbers.external) || 1;
      var startIndex = (currentPage - 1) * pageSize;
      var pageRows = allRows.slice(startIndex, startIndex + pageSize);
      var allOn = pageRows.length > 0 && pageRows.every(function(c){ return !!state.extSelected[c.id]; });
      pageRows.forEach(function(c){ state.extSelected[c.id] = !allOn; });
      render();
    }
    else if(a==="ext-batch-edit"){
      if(!selectedExtIds().length){
        showToast("请先选择联系人");
        return;
      }
      openModal("ext-batch-edit");
    }
    else if(a==="ext-batch-delete"){
      if(!selectedExtIds().length){
        showToast("请先选择联系人");
        return;
      }
      openModal("ext-batch-delete");
    }
    else if(a==="confirm-ext-batch-save"){
      var bg = document.getElementById("ext-batch-group");
      var gid = bg ? bg.value : extUngroupedId;
      var ids = selectedExtIds();
      extContacts.forEach(function(c){
        if(ids.indexOf(c.id) > -1) c.groupId = gid;
      });
      state.extSelected = {};
      var mb = document.getElementById("modalRoot");
      if(mb){ mb.classList.remove("show"); mb.innerHTML = ""; }
      showToast("已批量调整 "+ids.length+" 人所属分组");
      render();
    }
    else if(a==="confirm-ext-batch-delete"){
      var delIds = selectedExtIds();
      extContacts = extContacts.filter(function(x){ return delIds.indexOf(x.id) === -1; });
      state.extSelected = {};
      var md = document.getElementById("modalRoot");
      if(md){ md.classList.remove("show"); md.innerHTML = ""; }
      showToast("已删除 "+delIds.length+" 名联系人");
      render();
    }
    else if(a==="ext-delete-contact"){
      state.extPendingDeleteContactId = el.dataset.id;
      openModal("ext-delete-contact");
    }
    else if(a==="confirm-ext-delete-group"){
      applyExtGroupDelete(state.extPendingDeleteGroupId);
      var mg = document.getElementById("modalRoot");
      if(mg){ mg.classList.remove("show"); mg.innerHTML = ""; }
      render();
    }
    else if(a==="confirm-ext-delete-contact"){
      extContacts = extContacts.filter(function(x){ return x.id !== state.extPendingDeleteContactId; });
      if(state.extSelected) delete state.extSelected[state.extPendingDeleteContactId];
      state.extPendingDeleteContactId = null;
      var mc = document.getElementById("modalRoot");
      if(mc){ mc.classList.remove("show"); mc.innerHTML = ""; }
      showToast("已删除联系人");
      render();
    }
    else if(a==="ext-query"){
      var sInp = document.querySelector("[data-ext-search]");
      state.extKw = sInp ? sInp.value : (state.extKw || "");
      if(!state.pageNumbers) state.pageNumbers = {};
      state.pageNumbers.external = 1;
      render();
    }
    else if(a==="ext-reset"){
      state.extKw = "";
      state.extStatusTab = "all";
      state.extStatusPick = ["normal", "disabled"];
      state.extStatusDraft = ["normal", "disabled"];
      state.extStatusOpen = false;
      state.extGroupId = "all";
      state.extSelected = {};
      if(!state.pageNumbers) state.pageNumbers = {};
      state.pageNumbers.external = 1;
      render();
    }
    else if(a==="view-receipt")openModal("receipt-view");
    else if(a==="view-related"){var target=el.dataset.relatedKey;if(target)window.open(location.pathname+"?detail="+encodeURIComponent(target)+"&source="+encodeURIComponent(state.detailSource||"sent"),"_blank")}
    else if(a==="toggle-export"){var key=el.dataset.exportKey;state.selectedSent[key]=!state.selectedSent[key];render()}
    else if(a==="toggle-export-all"){
      var isSentMgmt = state.page === "sent-mgmt";
      var selected = isSentMgmt ? (state.listTabs["sent-mgmt"] || "全部") : (state.listTabs.sent || "全部");
      var rows = taskRows.filter(function(r){
        if(isSentMgmt) return !isCirculateTask(r);
        return r.sender === currentUser && !isCirculateTask(r);
      });
      if(selected!=="全部")rows=rows.filter(function(r){return r.status===selected});
      var all=rows.length&&rows.every(function(r){return !!state.selectedSent[r.key]});
      rows.forEach(function(r){state.selectedSent[r.key]=!all});
      render();
    }
    else if(a==="bulk-export")exportSelectedInstructions();
    else if(a==="transfer"||a==="process"||a==="approve"||a==="revoke"||a==="revoke-transfer")openModal(a);
    else if(a==="detail"){state.detailSource=el.dataset.detailSource||"todo";state.detailKey=el.dataset.detailKey||"todo-1";state.detailTab="notes";state.showNoteEditor=false;state.flowViewMode="table";state.page="detail";render();window.scrollTo(0,0)}
    
    else if(a==="detail-open-reject"){
      openModal("reject");
    }
    else if(a==="detail-approve-archive"){
      var curRow = currentDetailTask();
      var nowStr = formatDeadlineDate(Date.now());
      curRow.status = "已归档";
      curRow.handled = nowStr;
      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "审批通过并归档",
        currentUser + " 审批通过了处置成果，同意办结并正式归档"
      ]);
      showToast("审批通过！指令已成功归档结案");
      render();
    }
    else if(a==="open-redispatch-recipient-modal"){
      recipientReturn = "redispatch";
      var curRow = currentDetailTask();
      var curRecStr = state.redispatchRecipients || (curRow ? (Array.isArray(curRow.receiver) ? curRow.receiver.join("、") : curRow.receiver) : "武乙");
      var recs = (curRecStr || "").split(/[、,，\s]+/).filter(Boolean);
      wizardState.selectedRecipients = {};
      recs.forEach(function(r){
        wizardState.selectedRecipients[r] = { id: "u_" + r, type: "人员", name: r };
      });
      openModal("issue-recipient");
    }
    else if(a==="confirm-redispatch"){
      var curRow = currentDetailTask();
      if(!curRow) return;
      var titleInp = document.getElementById("redispatch-title-input");
      var urgencySel = document.getElementById("redispatch-urgency-select");
      var deadlineInp = document.getElementById("redispatch-deadline-input");
      var sourceInp = document.getElementById("redispatch-source-input");
      var urlInp = document.getElementById("redispatch-url-input");
      var descInp = document.getElementById("redispatch-desc-textarea");

      var titleVal = titleInp ? titleInp.value.trim() : curRow.title;
      if(!titleVal){
        showToast("请输入指令标题");
        if(titleInp) titleInp.focus();
        return;
      }
      var recVal = state.redispatchRecipients || (Array.isArray(curRow.receiver) ? curRow.receiver.join("、") : curRow.receiver);
      if(!recVal){
        showToast("请指定接收人");
        return;
      }

      curRow.title = titleVal;
      if(urgencySel) curRow.urgency = urgencySel.value;
      if(deadlineInp) curRow.deadline = deadlineInp.value.trim();
      curRow.receiver = recVal;
      if(sourceInp) curRow.source = sourceInp.value.trim();
      if(urlInp) curRow.url = urlInp.value.trim();
      if(descInp) curRow.description = descInp.value.trim();

      curRow.status = "待处理";
      curRow.processor = "-";
      curRow.accepted = false;
      curRow.returnedBy = null;
      var nowStr = formatDeadlineDate(Date.now());
      curRow.time = nowStr;
      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "重新发起派发",
        currentUser + " 重新编辑并下发了该指令，接收人变更为【" + recVal + "】"
      ]);

      state.redispatchRecipients = null;
      state.page = "todo";
      state.mySubPage = "sent";
      if(!state.listTabs) state.listTabs = {};
      state.listTabs.sent = "全部";
      showToast("✓ 指令【" + titleVal + "】已重新发起成功！已下发至 " + recVal);
      render();
      window.scrollTo(0,0);
    }
    else if(a==="detail-open-circulate"){
      openModal("circulate");
    }
    else if(a==="toggle-circulate-person"){
      var p = el.dataset.person;
      if(p){
        var idx = selectedCirculatePersons.indexOf(p);
        if(idx > -1){
          selectedCirculatePersons.splice(idx, 1);
        } else {
          selectedCirculatePersons.push(p);
        }
        openModal("circulate");
      }
    }
    else if(a==="confirm-circulate"){
      var curRow = currentDetailTask();
      var personInput = document.getElementById("circulate-person-input");
      var noteInput = document.getElementById("circulate-note-input");
      var personVal = personInput ? personInput.value.trim() : (selectedCirculatePersons.join("、") || "武丙、武乙");
      var noteVal = noteInput ? noteInput.value.trim() : "";
      if(!personVal){
        showToast("请指定传阅对象");
        if(personInput) personInput.focus();
        return;
      }
      var nowStr = formatDeadlineDate(Date.now());
      if(curRow){
        if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
        state.annotations[curRow.key].unshift([
          nowStr.split(" ")[0],
          nowStr.split(" ")[1],
          "公文传阅",
          currentUser + " 发起了公文传阅，传阅对象：【" + personVal + "】" + (noteVal ? "，传阅意见：" + noteVal : "")
        ]);
        
        // 为被传阅人增加待阅传阅记录
        var pList = personVal.split(/[、,，\s]+/).filter(Boolean);
        pList.forEach(function(recName){
          var circulateKey = "circulate-" + curRow.key + "-" + recName + "-" + Date.now().toString().slice(-4);
          if(!taskRows.some(function(r){ return r.key === circulateKey })){
            taskRows.unshift({
              key: circulateKey,
              id: "CY" + Date.now().toString().slice(-10),
              idShort: String(Math.floor(100 + Math.random() * 900)),
              type: "待阅",
              categoryTag: "传阅",
              senderOrg: "台湾省网信办",
              sender: currentUser,
              senderTime: nowStr.split(" ")[1].slice(0,5),
              urgency: curRow.urgency || "常规",
              direction: "我下发",
              title: "【传阅】" + curRow.title,
              template: curRow.template || "公文协同传阅",
              path: curRow.path + " > 传阅阅知",
              time: nowStr,
              receiver: recName,
              processor: "-",
              req: "仅阅读",
              status: "待处理",
              origin: "传阅",
              deadline: curRow.deadline || "",
              description: "【传阅意见】" + (noteVal || "请审阅并知悉相关处置进展。") + "\n\n【原指令信息】" + (curRow.description || curRow.title),
              parentKey: curRow.key
            });
          }
        });
      }
      document.getElementById("modalRoot").classList.remove("show");
      showToast("公文传阅成功！已通知【" + personVal + "】同步审阅知悉。");
      render();
    }
    else if(a==="detail-open-subtask"){
      openModal("subtask");
    }
    else if(a==="detail-open-transfer"){
      openModal("transfer-person");
    }
    else if(a==="select-subtask-person"){
      selectedSubtaskPerson = el.dataset.person;
      openModal("subtask");
    }
    else if(a==="select-transfer-person"){
      selectedTransferPerson = el.dataset.person;
      openModal("transfer-person");
    }
    else if(a==="confirm-reject-instruction"){
      var rInput = document.getElementById("reject-reason-input");
      var reason = rInput ? rInput.value.trim() : "";
      if(!reason){
        showToast("请录入退回原因说明后再提交");
        if(rInput) rInput.focus();
        return;
      }
      var curRow = currentDetailTask();
      var nowStr = formatDeadlineDate(Date.now());
      curRow.status = "待处理";
      curRow.accepted = true;
      curRow.rejected = true;
      curRow.rejectReason = reason;
      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "退回重办",
        currentUser + " 审核退回了指令，意见：" + reason
      ]);
      document.getElementById("modalRoot").classList.remove("show");
      showToast("已成功退回重办！工单已驳回至处理人待办");
      render();
    }
    else if(a==="confirm-create-subtask"){
      var curRow = currentDetailTask();
      var dlInput = document.getElementById("subtask-deadline-input");
      var noteInput = document.getElementById("subtask-note-input");
      var subDeadline = dlInput ? dlInput.value.trim() : curRow.deadline;
      var subNote = noteInput ? noteInput.value.trim() : "";
      var nowStr = formatDeadlineDate(Date.now());

      var newKey = "sub-" + Date.now();
      var subRow = {
        key: newKey,
        id: "YQCZ19240202609" + Math.floor(100000 + Math.random() * 900000),
        idShort: String(Math.floor(100 + Math.random() * 900)),
        type: "待办",
        senderOrg: "台湾省网信办",
        sender: currentUser,
        senderTime: nowStr.split(" ")[1].slice(0,5),
        urgency: curRow.urgency || "加急",
        categoryTag: "子单·协同",
        direction: "我下发",
        title: "【协同子单】" + curRow.title,
        template: curRow.template || "协查处置子单模板",
        path: curRow.path + " > 协同子单",
        time: nowStr,
        receiver: (subtaskRecipientText || selectedSubtaskPerson || "谭星"),
        processor: "-",
        req: "限时回执",
        status: "待处理",
        origin: "下发",
        accepted: false,
        parentKey: curRow.key,
        deadline: subDeadline,
        responseCountdown: "00小时20分",
        source: curRow.source,
        description: (subNote ? "【分工说明】" + subNote + "\n" : "") + "【父指令内容】" + (curRow.description || curRow.title),
        files: curRow.files || []
      };

      curRow.childKey = newKey;
      taskRows.unshift(subRow);

      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "生成子单",
        currentUser + " 生成了协同子单派发给【" + selectedSubtaskPerson + "】"
      ]);

      document.getElementById("modalRoot").classList.remove("show");
      showToast("协同子单已成功生成并下发给【" + selectedSubtaskPerson + "】！");
      render();
    }
    else if(a==="confirm-transfer-person"){
      var curRow = currentDetailTask();
      var noteInput = document.getElementById("transfer-note-input");
      var tNote = noteInput ? noteInput.value.trim() : "";
      var nowStr = formatDeadlineDate(Date.now());
      var toPerson = transferRecipientText || selectedTransferPerson || "陈乾喜";

      curRow.receiver = toPerson;
      curRow.processor = "-";
      curRow.accepted = false;
      if(state.acceptedMap) delete state.acceptedMap[curRow.key];

      curRow.transferInfo = {
        from: currentUser,
        to: toPerson,
        time: nowStr,
        remark: tNote || "转交处理"
      };

      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "转办",
        currentUser + " 将指令转办给【" + selectedTransferPerson + "】" + (tNote ? "，备注：" + tNote : "")
      ]);

      document.getElementById("modalRoot").classList.remove("show");
      showToast("已成功转办给【" + selectedTransferPerson + "】！");
      state.page = "todo";
      render();
    }
    else if(a==="detail-submit-receipt"){
      var ta=document.getElementById("detail-receipt-note");
      var noteVal=ta?ta.value.trim():"";
      if(!noteVal){
        showToast("请填写处理说明后再提交");
        if(ta)ta.focus();
        return;
      }
      var row=currentDetailTask();
      var nowStr=formatDeadlineDate(Date.now());
      row.status="待审批";
      row.processor=currentUser;
      row.handled=nowStr;
      row.receipt={
        processor:currentUser,
        time:nowStr,
        duration:"5分钟",
        note:noteVal,
        images:2,
        files:["处置依据与核验报告.docx","现场勘验材料.pdf"]
      };
      if(!state.annotations[row.key]) state.annotations[row.key]=[];
      state.annotations[row.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "办理回执提交",
        currentUser + "提交了办理回执结果，已流转至审批节点（审批人：齐杰）"
      ]);
      showToast("办理回执已成功提交结果！已流转至审批节点");
      render();
    }
    else if(a==="detail-finish-read"){
      var row=currentDetailTask();
      var nowStr=formatDeadlineDate(Date.now());
      row.status="已归档";
      row.handled=nowStr;
      if(!state.annotations[row.key]) state.annotations[row.key]=[];
      state.annotations[row.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "阅知办结",
        "武沅林确认阅知该通知公文并归档"
      ]);
      showToast("已确认阅知并成功办结！");
      render();
    }
    else if(a==="switch-detail-tab"){
      state.detailTab=el.dataset.tab||"notes";
      render();
    }
    else if(a==="open-add-note"){
      state.showNoteEditor=true;
      render();
      var ed=document.getElementById("new-note-text");
      if(ed) ed.focus();
    }
    else if(a==="cancel-note"){
      state.showNoteEditor=false;
      render();
    }
    else if(a==="submit-note"){
      var ed=document.getElementById("new-note-text");
      var text=ed?ed.value.trim():"";
      if(!text){
        showToast("请输入备注内容后再提交");
        if(ed) ed.focus();
        return;
      }
      var key=state.detailKey;
      if(!state.notes) state.notes={};
      if(!state.notes[key]) state.notes[key]=[];
      var nowStr=formatDeadlineDate(Date.now());
      state.notes[key].unshift({
        author:currentUser,
        unit:"台湾省网信办",
        time:nowStr,
        text:text
      });
      state.showNoteEditor=false;
      showToast("备注信息已成功添加（记录人：" + currentUser + "）！");
      render();
    }
    else if(a==="switch-flow-view"){
      state.flowViewMode=el.dataset.view||"table";
      render();
    }
    else if(a==="quick-tag"){
      var tag=el.dataset.tag;
      var ed=document.getElementById("new-note-text");
      if(ed){
        ed.value = (ed.value ? ed.value + " " : "") + tag;
        ed.focus();
      }
    }
    else if(a==="copy-note"){
      var txt=el.dataset.text||"";
      if(navigator.clipboard&&navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt);
      }
      showToast("备注内容已复制至剪切板");
    }
    else if(a==="copy-id"){
      e.stopPropagation();
      var idTxt=el.dataset.copyText||"";
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(idTxt);
      } else {
        var ta = document.createElement("textarea");
        ta.value = idTxt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast("已成功复制ID：" + idTxt);
    }
    else if(a==="rich-format"){
      var fmt=el.dataset.format;
      var ed=document.getElementById("new-note-text");
      if(!ed)return;
      var start=ed.selectionStart, end=ed.selectionEnd, val=ed.value;
      var sel=val.slice(start,end)||(fmt==="quote"?"引用重点说明":fmt==="list"?"事项清单":"重点内容");
      var wrap="";
      if(fmt==="bold") wrap="【"+sel+"】";
      else if(fmt==="italic") wrap="*"+sel+"*";
      else if(fmt==="strike") wrap="~"+sel+"~";
      else if(fmt==="list") wrap="\n• "+sel;
      else if(fmt==="quote") wrap="\n> "+sel+"\n";
      ed.value=val.slice(0,start)+wrap+val.slice(end);
      ed.focus();
    }
    else if(a==="mock-upload-image"){
      var st=document.getElementById("detail-image-status");
      if(st){
        st.innerHTML="✓ 已重新上传并核验 3 张佐证截图 (jpg)";
        st.style.color="#059669";
      }
      showToast("已成功上传并替换佐证截图材料");
    }
    else if(a==="mock-upload-file"){
      var st=document.getElementById("detail-file-status");
      if(st){
        st.innerHTML="✓ 《涉网要素研判处置总结报告(最新修订版).docx》已更新";
        st.style.color="#059669";
      }
      showToast("已成功更新处置报告附件");
    }
    else if(a==="stats-drill"){state.statsDrilldown={scope:el.dataset.statsScope,entity:el.dataset.statsEntity,metric:el.dataset.statsMetric};state.page="stats-drilldown";render();window.scrollTo(0,0)}
    else if(a==="back-stats"){state.page="stats";render();window.scrollTo(0,0)}
    else if(a==="stats-detail"){state.detailSource="stats";state.detailKey=el.dataset.detailKey;state.page="detail";render();window.scrollTo(0,0)}
    else if(a==="toggle-user-menu"){
      var userDrop = document.getElementById("user-profile-dropdown");
      var userTrig = document.getElementById("user-profile-trigger");
      if(userDrop){
        var isOpen = userDrop.classList.contains("show");
        userDrop.classList.toggle("show", !isOpen);
        if(userTrig) userTrig.classList.toggle("active", !isOpen);
      }
    }
    else if(a==="toggle-settings-nav"){
      e.stopPropagation();
      toggleNavSettingsMenu();
    }
    else if(a==="open-settings-dict"){
      openSettingsSection("dict");
    }
    else if(a==="open-settings-storage"){
      openSettingsSection("storage");
    }
    else if(a==="open-v8-jump-modal"){
      closeNavSettingsMenu();
      openModal("v8-jump");
    }
    else if(a==="confirm-v8-jump"){
      var root=document.getElementById("modalRoot");
      if(root){ root.classList.remove("show"); root.innerHTML=""; }
      showToast("已跳转至 V8 集成管理（演示）");
    }
    else if(a==="issue-page-filter-cat"){
      state.issueTplCat = el.dataset.cat || "全部";
      render();
    }
    else if(a==="issue-page-select-tpl"){
      return;
    }
    else if(a==="switch-demo-user"){
      switchDemoUser(el.dataset.user);
    }
    else if(a==="switch-my-subpage"){
      state.page="todo";
      state.mySubPage=el.dataset.subpage||"todo";
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[state.mySubPage]=1;
      render();
    }
    else if(a==="edit-draft"){
      e.stopPropagation();
      var dKey=el.dataset.draftKey;
      var dRow=draftRows.find(function(r){return r.key===dKey});
      openIssueWizardFromDraft(dRow);
    }
    else if(a==="copy-draft"){
      var dKey=el.dataset.draftKey;
      var dRow=draftRows.find(function(r){return r.key===dKey});
      if(dRow){
        var newKey="draft-copy-"+Date.now();
        var newId="CG-20260914-"+Math.floor(100+Math.random()*900);
        var baseTitle = dRow.title.replace(/（草稿）/g,"");
        var copiedTitle = baseTitle.indexOf("（副本）")>-1 ? dRow.title : baseTitle + "（副本）（草稿）";
        var copiedRow = Object.assign({}, dRow, {
          key: newKey,
          id: newId,
          title: copiedTitle,
          time: formatDeadlineDate(Date.now()).slice(0, 16)
        });
        var index = draftRows.findIndex(function(r){return r.key===dKey});
        if(index>-1){
          draftRows.splice(index+1, 0, copiedRow);
        } else {
          draftRows.unshift(copiedRow);
        }
        showToast("已成功复制草稿！");
        render();
      }
    }
    else if(a==="delete-draft"){
      var dKey=el.dataset.draftKey;
      draftRows=draftRows.filter(function(r){return r.key!==dKey});
      showToast("已成功删除草稿");
      render();
    }
    else if(a==="list-tab"){
      state.listTabs[el.dataset.listMode]=el.dataset.listTab;
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[el.dataset.listMode]=1;
      render();
    }
    else if(a==="open-issue-drafts"){
      e.stopPropagation();
      state.page = "issue-dispatch";
      state.issueDraftView = true;
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers.draft=1;
      render();
      window.scrollTo(0,0);
    }
    else if(a==="back-issue-templates"){
      e.stopPropagation();
      state.page = "issue-dispatch";
      state.issueDraftView = false;
      render();
      window.scrollTo(0,0);
    }
    else if(a==="toggle-flag"){
      e.stopPropagation();
      var flag=el.dataset.flag;
      if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
      state.quickFlags[flag]=!state.quickFlags[flag];
      var mode=state.page==="todo"?(state.mySubPage||"todo"):state.page;
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[mode]=1;
      render();
    }
    else if(a==="toggle-flag-radio"){
      e.stopPropagation();
      var flag=el.dataset.flag;
      if(state.quickFlag===flag){
        state.quickFlag=null;
        if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
        state.quickFlags.todayDue=false;
        state.quickFlags.overdue=false;
      }else{
        state.quickFlag=flag;
        if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
        state.quickFlags.todayDue=flag==="todayDue";
        state.quickFlags.overdue=flag==="overdue";
      }
      var mode=state.page==="todo"?(state.mySubPage||"todo"):state.page;
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[mode]=1;
      render();
    }
    else if(a==="filter-query"){
      var mode=el.dataset.mode||(state.page==="todo"?(state.mySubPage||"todo"):state.page);
      var wrap=el.closest(".task-filters");
      var req=wrap?wrap.querySelector('[data-filter="requirement"] .select-value'):null;
      var sdr=wrap?wrap.querySelector('[data-filter="sender"] .select-value'):null;
      var sOrg=wrap?wrap.querySelector('[data-filter="senderOrg"] .select-value'):null;
      var sts=wrap?wrap.querySelector('[data-filter="status"] .select-value'):null;
      var proc=wrap?wrap.querySelector('[data-filter="processor"] .select-value'):null;
      var tpl=wrap?wrap.querySelector('[data-filter="template"] .select-value'):null;
      var inp=wrap?wrap.querySelector("[data-filter-content]"):null;
      if(!state.filterQuery) state.filterQuery={};
      state.filterQuery[mode]={
        requirement:req?req.textContent.trim():"全部",
        senderOrg:sOrg?sOrg.textContent.trim():"全部",
        sender:sdr?sdr.textContent.trim():"全部",
        status:sts?sts.textContent.trim():"全部",
        processor:proc?proc.textContent.trim():"全部",
        template:tpl?tpl.textContent.trim():"全部",
        content:inp?inp.value.trim():""
      };
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[mode]=1;
      render();
    }
    else if(a==="filter-reset"){
      var mode=el.dataset.mode||(state.page==="todo"?(state.mySubPage||"todo"):state.page);
      if(!state.filterQuery) state.filterQuery={};
      state.filterQuery[mode]={requirement:"全部",senderOrg:"全部",sender:"全部",status:"全部",processor:"全部",template:"全部",content:""};
      state.quickFlag=null;
      state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[mode]=1;
      render();
    }
    else if(a==="set-view-mode"){state.viewMode=state.viewMode||{};state.viewMode[el.dataset.listMode]=el.dataset.view;render()}
    else if(a==="row-process"){state.detailKey=el.dataset.detailKey;openModal("process")}
    else if(a==="row-approve"){state.detailKey=el.dataset.detailKey;openModal("approve")}
    else if(a==="back-list"){
      if(state.detailSource==="stats"){
        state.page="stats-drilldown";
      } else if(state.detailSource==="sent-mgmt"){
        state.page="sent-mgmt";
      } else if(state.detailSource==="sent" || state.detailSource==="done" || state.detailSource==="draft" || state.detailSource==="todo" || state.detailSource==="read"){
        state.page="sent-mgmt";
      } else {
        state.page="sent-mgmt";
      }
      render();
      window.scrollTo(0,0);
    }
    // === 全屏下发页面操作 actions ===
    else if(a==="back-from-issue-form"){
      state.page = "issue-dispatch";
      render();
      window.scrollTo(0,0);
    }
    else if(a==="issue-form-submit"){
      if(!assertCanIssue()) return;
      var titleInp = document.querySelector("[data-issue-page-field='title']");
      if(titleInp) wizardState.formData.title = titleInp.value;
      var urgInp = document.querySelector("[data-issue-page-field='urgency']");
      if(urgInp) wizardState.formData.urgency = urgInp.value;
      var deadInp = document.querySelector("[data-issue-page-field='deadline']");
      if(deadInp) wizardState.formData.deadline = deadInp.value;
      var noteInp = document.querySelector("[data-issue-page-field='note']");
      if(noteInp) wizardState.formData.note = noteInp.value;
      var srcInp = document.querySelector("[data-issue-page-field='source']");
      if(srcInp) wizardState.formData.source = srcInp.value;
      var urlInp = document.querySelector("[data-issue-page-field='url']");
      if(urlInp) wizardState.formData.url = urlInp.value;
      var descInp = document.querySelector("[data-issue-page-field='description']");
      if(descInp) wizardState.formData.description = descInp.value;

      if(!wizardState.formData.title.trim()){
        showToast("请输入指令标题");
        if(titleInp) titleInp.focus();
        return;
      }
      if(!wizardState.formData.source.trim()){
        showToast("请输入舆情来源");
        if(srcInp) srcInp.focus();
        return;
      }
      if(!wizardState.formData.description.trim()){
        showToast("请输入舆情说明");
        if(descInp) descInp.focus();
        return;
      }
      if(Object.keys(wizardState.selectedRecipients).length === 0){
        showToast("请至少指定一个接收对象（机构/人员）");
        return;
      }

      var nowId = "YQCZ" + new Date().getFullYear() + ("0"+(new Date().getMonth()+1)).slice(-2) + ("0"+new Date().getDate()).slice(-2) + ("0"+new Date().getHours()).slice(-2) + ("0"+new Date().getMinutes()).slice(-2) + ("0"+new Date().getSeconds()).slice(-2);
      var recNames = Object.keys(wizardState.selectedRecipients).join("、");
      var curTpl = getTemplateById(wizardState.selectedTemplateId);

      taskRows.unshift({
        key: "issue-new-" + nowId,
        id: nowId,
        type: "我下发",
        senderOrg: "台湾省网信办（直属指挥中心）",
        sender: currentUser,
        senderTime: "10:20",
        urgency: wizardState.formData.urgency || "加急",
        categoryTag: curTpl.category || "舆情处置",
        direction: "我下发",
        title: wizardState.formData.title,
        template: curTpl.name,
        application: "指令流转",
        path: "指令流转 > " + curTpl.name,
        time: "2026-08-31 10:20:00",
        receiver: recNames || "台湾省网信办（直属指挥中心）",
        processor: "-",
        req: curTpl.requirement,
        status: "待处理",
        origin: "下发",
        deadline: curTpl.requirement === "限时回执" ? (wizardState.formData.deadline || "2026-08-31 18:00:00") : "",
        source: wizardState.formData.source || "微博",
        description: wizardState.formData.description || "请按要求核查处置并反馈结果。"
      });
      consumeIssueStorage();
      showToast("✓ 指令【" + wizardState.formData.title + "】已成功下发至责任人待办！");
      state.page = "sent";
      state.mySubPage = "sent";
      state.listTabs.sent = "全部";
      render();
      window.scrollTo(0,0);
    }
    else if(a==="save-issue-draft"){
      var titleInp = document.querySelector("[data-issue-page-field='title']");
      if(titleInp) wizardState.formData.title = titleInp.value;
      var curTpl = getTemplateById(wizardState.selectedTemplateId);
      var now = new Date();
      var pad = function(n){return n<10?'0'+n:n};
      var nowStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
      var dateStr = "" + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate());
      var newDraftId = "CG-" + dateStr + "-" + ("00" + (draftRows.length + 1)).slice(-3);

      draftRows.unshift({
        key: "draft-" + Date.now(),
        id: newDraftId,
        title: wizardState.formData.title || "（未命名草稿）",
        template: curTpl.name,
        time: nowStr,
        receiver: Object.keys(wizardState.selectedRecipients).join("、") || "未指定",
        sender: currentUser,
        processor: "-",
        req: curTpl.requirement,
        status: "草稿",
        origin: "草稿",
        source: wizardState.formData.source || "",
        url: wizardState.formData.url || "",
        description: wizardState.formData.description || "",
        deadline: curTpl.requirement === "限时回执" ? (wizardState.formData.deadline || "") : "",
        note: wizardState.formData.note || ""
      });
      showToast("✓ 已成功暂存至草稿箱！");
    }
    else if(a==="wizard-rec-dim"){
      wizardState.recipientDimTab = el.dataset.dim || "org";
      wizardState.recipientSearchKw = "";
      render();
    }
    else if(a==="wizard-rec-select-all-dim"){
      var activeDim = wizardState.recipientDimTab || "org";
      var list = wizardRecipientDimensionData[activeDim] || [];
      list.forEach(function(item){
        wizardState.selectedRecipients[item.name] = { id: item.id, type: item.type, name: item.name, role: item.role, org: item.org, count: item.count };
      });
      render();
    }
    else if(a==="wizard-toggle-recipient"){
      var rName = el.dataset.name;
      if(wizardState.selectedRecipients[rName]){
        delete wizardState.selectedRecipients[rName];
      } else {
        wizardState.selectedRecipients[rName] = { id: el.dataset.id, type: el.dataset.type, name: rName };
      }
      render();
    }
    else if(a==="wizard-remove-recipient"){
      var rName2 = el.dataset.name;
      if(wizardState.selectedRecipients[rName2]){
        delete wizardState.selectedRecipients[rName2];
      }
      render();
    }
    else if(a==="wizard-clear-recipients"){
      wizardState.selectedRecipients = {};
      render();
    }
    else if(a==="quick-deadline"){
      var hours = Number(el.dataset.hours) || 4;
      var now = new Date();
      now.setHours(now.getHours() + hours);
      var pad = function(n){return n<10?'0'+n:n};
      var timeStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':00';
      wizardState.formData.deadline = timeStr;
      var input = document.querySelector("[data-issue-page-field='deadline']");
      if(input) input.value = timeStr;
      var chips = document.querySelectorAll("[data-action='quick-deadline']");
      chips.forEach(function(c){ c.classList.toggle("active", c === el); });
    }
    else if(a==="parse-origin-link"){
      startOriginLinkSimulation(el);
    }
    else if(a==="reparse-origin-link"){
      var box = el.closest(".origin-fetch-box");
      var btn = box ? box.querySelector("[data-action='parse-origin-link']") : null;
      startOriginLinkSimulation(btn || el);
    }
    else if(a==="switch-origin-demo"){
      var outcome = el.dataset.outcome || "success";
      var box = el.closest(".origin-fetch-box");
      setOriginDemoOutcome(outcome, box);
    }
    else if(a==="view-origin-preview"){
      openModal("origin-preview");
    }
    else if(a==="toggle-basic"){var summary=el.closest(".detail-summary"),expanded=summary.classList.toggle("expanded");el.querySelector("[data-toggle-label]").textContent=expanded?"收起详情":"展开详情";el.querySelector("svg,i").outerHTML=ico(expanded?"chevron-up":"chevron-down",14);if(window.lucide)lucide.createIcons()}
    else if(a==="toggle-annotation"){var editor=el.closest(".detail-section").querySelector("[data-annotation-editor]");editor.classList.add("open");editor.querySelector("[data-annotation-input]").focus()}
    else if(a==="cancel-annotation"){var cancelEditor=el.closest("[data-annotation-editor]");cancelEditor.querySelector("[data-annotation-input]").value="";cancelEditor.classList.remove("open")}
    else if(a==="send-annotation"){var sendEditor=el.closest("[data-annotation-editor]"),input=sendEditor.querySelector("[data-annotation-input]"),note=input.value.trim();if(!note)return;var now=new Date(),pad=function(n){return String(n).padStart(2,"0")},date=now.getFullYear()+"-"+pad(now.getMonth()+1)+"-"+pad(now.getDate()),time=pad(now.getHours())+":"+pad(now.getMinutes())+":"+pad(now.getSeconds());if(!state.annotations[state.detailKey])state.annotations[state.detailKey]=[];state.annotations[state.detailKey].unshift([date,time,"批注","武丁："+escapeHtml(note)]);render()}
    
    // === 系统设置交互 actions ===
    else if(a==="switch-settings-menu"){
      state.settingsMenu = el.dataset.menu || "dict";
      render();
    }
    else if(a==="toggle-storage-task"){
      if(!state.storagePickIds) state.storagePickIds = [];
      var storageKey = el.dataset.key;
      var storageIdx = state.storagePickIds.indexOf(storageKey);
      if(storageIdx > -1) state.storagePickIds.splice(storageIdx, 1);
      else state.storagePickIds.push(storageKey);
      render();
    }
    else if(a==="toggle-storage-task-all"){
      var archivedAll = getFilteredArchivedTasks();
      var allKeys = archivedAll.map(function(r){ return r.key; });
      var pickedVisible = (state.storagePickIds || []).filter(function(id){ return allKeys.indexOf(id) > -1; });
      if(pickedVisible.length === allKeys.length && allKeys.length) state.storagePickIds = [];
      else state.storagePickIds = allKeys.slice();
      render();
    }
    else if(a==="filter-storage-age"){
      state.storageAgeFilter = el.dataset.filter || "all";
      state.storagePickIds = [];
      render();
    }
    else if(a==="open-storage-clean-modal"){
      if(!(state.storagePickIds || []).length){
        showToast("请先勾选需要清理的已归档任务");
        return;
      }
      openModal("storage-clean-modal");
    }
    else if(a==="confirm-storage-clean"){
      confirmStorageClean();
    }
    else if(a==="export-storage-tasks"){
      exportStorageArchivedTasks();
    }
    else if(a==="open-store-warehouse-modal"){
      if(!(state.storagePickIds || []).length){
        showToast("请先勾选需要导出的已归档任务");
        return;
      }
      exportStorageArchivedTasks();
    }
    else if(a==="confirm-store-warehouse"){
      confirmStoreWarehouse();
    }
    else if(a==="switch-warehouse-group"){
      state.warehouseGroupId = el.dataset.group || "all";
      state.warehousePickIds = [];
      render();
    }
    else if(a==="toggle-warehouse-task"){
      if(!state.warehousePickIds) state.warehousePickIds = [];
      var whKey = el.dataset.key;
      var whIdx = state.warehousePickIds.indexOf(whKey);
      if(whIdx > -1) state.warehousePickIds.splice(whIdx, 1);
      else state.warehousePickIds.push(whKey);
      render();
    }
    else if(a==="open-warehouse-group-modal"){
      state.editingWarehouseGroupId = "";
      openModal("warehouse-group-modal");
    }
    else if(a==="rename-warehouse-group"){
      state.editingWarehouseGroupId = el.dataset.group || "";
      openModal("warehouse-group-modal");
    }
    else if(a==="confirm-warehouse-group"){
      confirmWarehouseGroup();
    }
    else if(a==="delete-warehouse-group"){
      var delGid = el.dataset.group;
      if(!delGid || delGid === "wh_default"){
        showToast("默认分组不可删除");
        return;
      }
      getWarehouseTasks().forEach(function(r){
        if((r.warehouseGroupId || "wh_default") === delGid) r.warehouseGroupId = "wh_default";
      });
      warehouseGroups = warehouseGroups.filter(function(g){ return g.id !== delGid; });
      if(state.warehouseGroupId === delGid) state.warehouseGroupId = "all";
      showToast("分组已删除，组内数据已移至默认分组");
      render();
    }
    else if(a==="move-warehouse-tasks"){
      var pickWh = state.warehousePickIds || [];
      if(!pickWh.length){
        showToast("请先勾选要移动的入库任务");
        return;
      }
      var moveSel = document.getElementById("warehouse-move-group");
      var targetGid = moveSel && moveSel.value ? moveSel.value : "wh_default";
      getWarehouseTasks().forEach(function(r){
        if(pickWh.indexOf(r.key) > -1) r.warehouseGroupId = targetGid;
      });
      state.warehousePickIds = [];
      showToast("已移动到【" + getWarehouseGroup(targetGid).name + "】");
      render();
    }
    else if(a==="filter-settings-tpl-cat"){
      state.tplFilterCat = el.dataset.cat || "全部";
      render();
    }
    else if(a==="preview-tpl-item"){
      state.previewTplId = el.dataset.tplId;
      state.previewTplTab = "form";
      var fromWizard = !!el.closest(".wizard-modal-box") || el.dataset.fromWizard === "true";
      state.previewReturnModal = fromWizard ? "issue" : null;
      openModal("pc-template-preview");
    }
    else if(a==="switch-preview-tpl-tab"){
      state.previewTplTab = el.dataset.tab || "form";
      openModal("pc-template-preview");
    }
    else if(a==="open-create-template-wizard"){
      resetTplWizard();
      openModal("template-wizard");
    }
    else if(a==="edit-tpl-wizard"){
      var tplId = el.dataset.tplId;
      resetTplWizard(tplId);
      tplWizardState.step = 2;
      openModal("template-wizard");
    }
    else if(a==="copy-tpl-item"){
      var copyId = el.dataset.tplId;
      var origTpl = issueTemplates.filter(function(t){ return t.id === copyId; })[0];
      if(origTpl){
        var newTpl = JSON.parse(JSON.stringify(origTpl));
        newTpl.id = "TPL" + new Date().getFullYear() + ("0"+(new Date().getMonth()+1)).slice(-2) + ("0"+new Date().getDate()).slice(-2) + Date.now().toString().slice(-4);
        newTpl.name = origTpl.name + "（副本）";
        newTpl.usedCount = 0;
        issueTemplates.unshift(newTpl);
        showToast("已成功复制模板：" + origTpl.name);
        render();
      }
    }
    else if(a==="delete-tpl-item"){
      var delId = el.dataset.tplId;
      var tplToDelete = issueTemplates.filter(function(t){ return t.id === delId; })[0];
      issueTemplates = issueTemplates.filter(function(t){ return t.id !== delId; });
      showToast("已删除模板：" + (tplToDelete ? tplToDelete.name : ""));
      render();
    }
    else if(a==="switch-settings-tab"){
      state.settingsTab = el.dataset.tab || "transfer";
      render();
    }
    else if(a==="open-add-setting-modal"){
      var type = el.dataset.type || state.settingsTab || "transfer";
      currentEditingSetting = { type: type, isEdit: false, itemId: null };
      openModal("setting-reason-modal");
    }
    else if(a==="toggle-setting-modal-enabled"){
      toggleSettingModalEnabled();
    }
    else if(a==="edit-setting-item"){
      var type = el.dataset.type || state.settingsTab || "transfer";
      var itemId = el.dataset.id;
      currentEditingSetting = { type: type, isEdit: true, itemId: itemId };
      openModal("setting-reason-modal");
    }
    else if(a==="toggle-tpl-enabled"){
      var tplId = el.dataset.tplId;
      var tpl = issueTemplates.filter(function(t){ return t.id === tplId; })[0];
      if(tpl){
        tpl.enabled = tpl.enabled === false;
        showToast(tpl.name + (tpl.enabled !== false ? " 已启用" : " 已关闭，下发指令中将隐藏"));
        render();
      }
    }
    else if(a==="toggle-setting-status"){
      var type = el.dataset.type || state.settingsTab || "transfer";
      var itemId = el.dataset.id;
      var list = getSettingReasonList(type);
      var item = list.filter(function(r){ return r.id === itemId })[0];
      if(item){
        item.enabled = !item.enabled;
        item.updatedAt = formatDeadlineDate(Date.now()).slice(0,16);
        showToast(item.name + " 已" + (item.enabled ? "启用" : "停用"));
        render();
      }
    }
    else if(a==="delete-setting-item"){
      var type = el.dataset.type || state.settingsTab || "transfer";
      var itemId = el.dataset.id;
      var list = getSettingReasonList(type);
      var idx = -1;
      for(var i=0; i<list.length; i++){
        if(list[i].id === itemId){ idx = i; break; }
      }
      if(idx > -1){
        var removed = list.splice(idx, 1)[0];
        showToast("已删除分类：" + (removed ? removed.name : ""));
        render();
      }
    }
    else if(a==="settings-reset-search"){
      state.settingsSearchKw = "";
      state.tplSearchKw = "";
      render();
    }
    else if(a==="edit-role-detail"){
      state.roleSubView = "detail";
      state.selectedRoleId = el.dataset.roleId;
      state.rolePermTab = "menu";
      captureRoleBaseline();
      render();
      window.scrollTo(0,0);
    }
    else if(a==="back-to-role-list"){
      leaveRoleDetail();
    }
    else if(a==="save-role-and-leave"){
      if(saveCurrentRolePermissions()){
        var rootModal = document.getElementById("modalRoot");
        if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
        leaveRoleDetail(true);
        showToast("已保存");
      }
    }
    else if(a==="discard-role-and-leave"){
      restoreRoleFromBaseline(getSelectedRole());
      var rootModal = document.getElementById("modalRoot");
      if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
      leaveRoleDetail(true);
    }
    else if(a==="open-create-role-modal"){
      openModal("create-role-modal");
    }
    else if(a==="confirm-create-role"){
      confirmCreateRoleFromForm();
    }
    else if(a==="open-assign-role-members"){
      var tRole = systemRoles.filter(function(r){ return r.id === el.dataset.role; })[0];
      if(tRole && tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可添加授权");
        return;
      }
      state.assignRoleId = el.dataset.role || state.selectedRoleId;
      state.roleMemberPickIds = [];
      openModal("assign-role-members");
    }
    else if(a==="toggle-role-member-pick"){
      var staffId = el.dataset.staff;
      if(!state.roleMemberPickIds) state.roleMemberPickIds = [];
      var pIdx = state.roleMemberPickIds.indexOf(staffId);
      if(pIdx > -1) state.roleMemberPickIds.splice(pIdx, 1);
      else state.roleMemberPickIds.push(staffId);
      openModal("assign-role-members");
    }
    else if(a==="confirm-add-role-members"){
      var tRole = systemRoles.filter(function(r){ return r.id === (state.assignRoleId || state.selectedRoleId); })[0];
      if(!tRole || tRole.isSystem) return;
      if(!tRole.members) tRole.members = [];
      cloneStaffByIds(state.roleMemberPickIds || []).forEach(function(staff){
        if(!tRole.members.some(function(m){ return m.id === staff.id; })) tRole.members.push(staff);
      });
      syncRoleMemberCount(tRole);
      state.roleMemberPickIds = [];
      var rootModal = document.getElementById("modalRoot");
      if(rootModal){
        rootModal.classList.remove("show");
        rootModal.innerHTML = "";
      }
      showToast("已为【" + tRole.name + "】添加授权人员");
      render();
    }
    else if(a==="remove-role-member"){
      var tRole = systemRoles.filter(function(r){ return r.id === el.dataset.role; })[0];
      if(!tRole || tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可调整授权");
        return;
      }
      tRole.members = (tRole.members || []).filter(function(m){ return m.id !== el.dataset.staff; });
      syncRoleMemberCount(tRole);
      showToast("已取消该人员授权");
      render();
    }
    else if(a==="delete-custom-role"){
      var rId = el.dataset.roleId;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(!tRole) return;
      if(tRole.isSystem){
        showToast("系统内置核心角色不可删除！");
        return;
      }
      var roleIdx = systemRoles.findIndex(function(r){ return r.id === rId; });
      if(roleIdx > -1){
        systemRoles.splice(roleIdx, 1);
        if(state.selectedRoleId === rId){
          state.selectedRoleId = systemRoles[0] ? systemRoles[0].id : "";
        }
        showToast("✓ 角色【" + tRole.name + "】已成功删除");
        render();
      }
    }
    else if(a==="save-role-basic-info"){
      var rId = el.dataset.role;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole && tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可修改");
        return;
      }
      if(tRole){
        var nameInp = document.getElementById("role-edit-name-inp");
        var descInp = document.getElementById("role-edit-desc-inp");

        if(nameInp && nameInp.value.trim()) tRole.name = nameInp.value.trim();
        if(descInp) tRole.desc = descInp.value.trim();

        showToast("✓ 【" + tRole.name + "】基本信息已成功更新");
        render();
      }
    }
    else if(a==="role-list-search-clear"){
      state.roleSearchKw = "";
      render();
    }
    else if(a==="save-role-permissions"){
      if(saveCurrentRolePermissions()){
        showToast("当前权限配置已保存");
        render();
      }
    }
    else if(a==="select-perm-role"){
      state.selectedRoleId = el.dataset.roleId;
      state.roleSubView = "detail";
      captureRoleBaseline();
      render();
    }
    else if(a==="switch-role-perm-tab"){
      state.rolePermTab = el.dataset.tab;
      render();
    }
    else if(a==="switch-role-view-mode"){
      state.roleViewMode = el.dataset.mode;
      render();
    }
    else if(a==="toggle-menu-perm"){
      var rId = el.dataset.role;
      var pId = el.dataset.perm;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole && tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可修改");
        return;
      }
      if(tRole){
        if(!tRole.menuPerms) tRole.menuPerms = [];
        var pIdx = tRole.menuPerms.indexOf(pId);
        if(pIdx > -1){
          tRole.menuPerms.splice(pIdx, 1);
        } else {
          tRole.menuPerms.push(pId);
        }
        syncRoleLegacyPerms(tRole);
        render();
      }
    }
    else if(a==="toggle-role-drawer"){
      if(!state.roleMenuExpanded) state.roleMenuExpanded = { menu_stats: true };
      var drawerId = el.dataset.group;
      state.roleMenuExpanded[drawerId] = !state.roleMenuExpanded[drawerId];
      render();
    }
    else if(a==="toggle-menu-group"){
      var rId = el.dataset.role;
      var gId = el.dataset.group;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      var grp = menuPermissionGroups.filter(function(g){ return g.id === gId; })[0];
      if(tRole && tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可修改");
        return;
      }
      if(tRole && grp){
        var ids = collectGroupPermIds(grp);
        var allChecked = ids.every(function(id){ return isPermChecked(tRole, id); });
        setRolePermIds(tRole, ids, !allChecked);
        syncRoleLegacyPerms(tRole);
        render();
      }
    }
    else if(a==="batch-menu-perms"){
      var rId = el.dataset.role;
      var bType = el.dataset.type;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole && tRole.isSystem){
        showToast("系统内置角色仅支持查看，不可修改");
        return;
      }
      if(tRole){
        if(bType === "all"){
          tRole.menuPerms = collectAllMenuPermIds().slice();
          showToast("已一键全选【" + tRole.name + "】全部菜单与操作权限");
        } else if(bType === "clear"){
          tRole.menuPerms = [];
          showToast("已清空【" + tRole.name + "】的所有菜单权限");
        } else if(bType === "readonly"){
          tRole.menuPerms = collectReadonlyMenuPermIds();
          showToast("已将【" + tRole.name + "】快速设置为只读查阅权限");
        }
        syncRoleLegacyPerms(tRole);
        render();
      }
    }
    else if(a==="change-data-scope"){
      var rId = el.dataset.role;
      var scopeId = el.dataset.scope;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole){
        tRole.dataScope = scopeId;
        if(scopeId === "CUSTOM" && (!tRole.customDepts || !tRole.customDepts.length)){
          tRole.customDepts = ["dept_yq", "dept_yj"];
        }
        var sObj = dataScopeOptions.filter(function(o){ return o.id === scopeId; })[0];
        showToast("已将【" + tRole.name + "】数据权限范围切换为：" + (sObj ? sObj.shortTag : scopeId));
        render();
      }
    }
    else if(a==="toggle-custom-dept"){
      var rId = el.dataset.role;
      var deptId = el.dataset.dept;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole){
        if(!tRole.customDepts) tRole.customDepts = [];
        var dIdx = tRole.customDepts.indexOf(deptId);
        if(dIdx > -1){
          tRole.customDepts.splice(dIdx, 1);
        } else {
          tRole.customDepts.push(deptId);
        }
        render();
      }
    }
    else if(a==="batch-custom-depts"){
      var rId = el.dataset.role;
      var bType = el.dataset.type;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole){
        if(bType === "all"){
          tRole.customDepts = customDeptOptions.map(function(d){ return d.id; });
          showToast("已全选 10 个直属单位与协同处室");
        } else {
          tRole.customDepts = [];
          showToast("已清空自选穿透机构");
        }
        render();
      }
    }
    else if(a==="toggle-role-security"){
      var rId = el.dataset.role;
      var field = el.dataset.field;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole){
        tRole[field] = !tRole[field];
        var fName = (field === "maskSensitive" ? "涉密线索脱敏" : "防泄密动态水印");
        showToast("【" + tRole.name + "】" + fName + "已" + (tRole[field] ? "开启生效" : "关闭停用"));
        render();
      }
    }
    else if(a==="reset-role-permissions"){
      var rId = el.dataset.role;
      var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
      if(tRole){
        if(tRole.id === "role_superadmin"){
          tRole.dataScope = "ALL";
          tRole.maskSensitive = false;
          tRole.watermark = true;
          tRole.exportLimit = "5000";
        } else if(tRole.id === "role_orgadmin"){
          tRole.dataScope = "DEPT_TREE";
          tRole.maskSensitive = false;
          tRole.watermark = true;
          tRole.exportLimit = "2000";
        } else {
          tRole.dataScope = "DEPT_TREE";
          tRole.maskSensitive = false;
          tRole.watermark = true;
          tRole.exportLimit = "1000";
        }
        showToast("已恢复【" + tRole.name + "】的系统推荐安全与权限规则");
        render();
      }
    }
    else if(a==="copy-id"){
      var textToCopy = el.dataset.copyText || "";
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(textToCopy).then(function(){
          showToast("已复制ID至剪贴板: " + textToCopy);
        }).catch(function(){
          showToast("复制成功: " + textToCopy);
        });
      } else {
        showToast("复制成功: " + textToCopy);
      }
    }
    else {
      handled = false;
    }
    if(handled) e.stopPropagation();
  }})
}
function drawCharts(){
  if(!window.echarts)return;
  var common={textStyle:{fontFamily:"Microsoft YaHei"},color:["#f49343","#009b98","#3f8bd8","#ef4949"]};
  var trend=echarts.init(document.getElementById("trend"));trend.setOption({color:["#f49343","#00aaa7"],tooltip:{trigger:"axis"},legend:{right:5,data:["下发指令趋势","已办指令趋势"]},grid:{left:38,right:20,top:38,bottom:25},xAxis:{type:"category",data:["08-11","08-12","08-13","08-14","08-15","08-16","08-17"]},yAxis:{type:"value",splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"下发指令趋势",type:"line",data:[1,6,1,17,0,0,3]},{name:"已办指令趋势",type:"line",data:[0,6,0,9,0,0,0]}]});
  function pie(id,data,colors){var c=echarts.init(document.getElementById(id));c.setOption({color:colors,tooltip:{trigger:"item"},legend:{top:0,right:0},series:[{type:"pie",radius:["41%","60%"],center:["50%","56%"],label:{formatter:"{b} {d}%"},data:data}]})}
  pie("statusChart",[{name:"待处理",value:13},{name:"已退回",value:2},{name:"待审批",value:2},{name:"已归档",value:11}],["#f49343","#ef4949","#3e8cda","#009893"]);
  pie("timeChart",[{name:"0-1小时",value:8},{name:"1-2小时",value:0},{name:"2-3小时",value:0},{name:"3-4小时",value:1},{name:"4-5小时",value:4},{name:"5-24小时",value:0},{name:"24小时以上",value:0}],["#506fd0","#93c957","#f2bf43","#ef4949","#6cb9d7","#2aa26f","#f18752"]);
  pie("lateChart",[{name:"已超时",value:1},{name:"未超时",value:12}],["#ef4949","#009893"])
}
function modalFrame(title,body,size,foot){
  return '<div class="modal '+(size||"")+'"><div class="modal-head"><span>'+title+'</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body">'+body+'</div>'+(foot===false?"":'<div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-close>提交</button></div>')+'</div>'
}
var recipientSelection={},issueRecipientText="",transferRecipientText="陈乾喜",subtaskRecipientText="谭星",transferOrganization="台湾省网信办",recipientReturn="issue";
var originLinkValue="";
var originLinkStatus="";
var originDemoOutcome="success"; // "success" | "failed"
var originAnalysisState = {
  analyzing: false,
  progress: 0,
  elapsed: 0,
  completed: false,
  timerId: null
};

function renderOriginAnalyzingCard() {
  return '<div class="origin-analyzing-card" id="originAnalyzingPanel">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
      '<div style="display:flex;align-items:center;gap:8px">' +
        '<span class="origin-spin-circle"></span>' +
        '<span style="font-weight:700;color:#0f766e;font-size:13px;">正在解析链接并提取要素...</span>' +
      '</div>' +
      '<span style="font-size:12px;color:#64748b;" id="originLiveTimer">0.0s</span>' +
    '</div>' +
    '<div class="origin-progress-track">' +
      '<div class="origin-progress-bar" id="originLiveProgressBar" style="width: 0%;"></div>' +
    '</div>' +
    '<div style="font-size:12px;color:#475569;display:flex;align-items:center;gap:6px;" id="originParseStepText">' +
      '<span>已建立连接，正在分析网页内容...</span>' +
    '</div>' +
  '</div>';
}

function renderOriginCompletedBanner() {
  var isSuccess = (originLinkStatus === "success" || (!originLinkStatus && originDemoOutcome === "success"));
  if (isSuccess) {
    return '<div class="origin-autofill-banner">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:24px;height:24px;border-radius:50%;background:#dcfce7;color:#15803d;display:flex;align-items:center;justify-content:center;flex:none;font-size:14px;font-weight:700;">✓</div>' +
        '<div>' +
          '<div style="font-size:13px;font-weight:700;color:#15803d;display:flex;align-items:center;gap:8px;">' +
            '<span>链接解析完成，已自动填入表单！</span>' +
          '</div>' +
          '<div style="font-size:12px;color:#166534;margin-top:2px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">' +
            '<span>来源平台：<b>微博</b></span>' +
            '<span>标题：<b>【微博采集】小区雨后积水引发居民关注</b></span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<div class="origin-demo-mode-pill" title="演示状态切换">' +
          '<button type="button" class="active success" data-action="switch-origin-demo" data-outcome="success">解析成功</button>' +
          '<button type="button" data-action="switch-origin-demo" data-outcome="failed">解析失败</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  } else {
    return '<div class="origin-autofill-banner failed">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<div style="width:24px;height:24px;border-radius:50%;background:#fee2e2;color:#b91c1c;display:flex;align-items:center;justify-content:center;flex:none;font-size:14px;font-weight:700;">✕</div>' +
        '<div>' +
          '<div style="font-size:13px;font-weight:700;color:#b91c1c;display:flex;align-items:center;gap:8px;">' +
            '<span>链接解析失败：未能从该网页提取到可用结构化字段</span>' +
          '</div>' +
          '<div style="font-size:12px;color:#991b1b;margin-top:2px;">' +
            '<span>该链接可能需要登录验证或页面结构未匹配，您仍可手动填写下方表单内容。</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<div class="origin-demo-mode-pill" title="演示状态切换">' +
          '<button type="button" data-action="switch-origin-demo" data-outcome="success">解析成功</button>' +
          '<button type="button" class="active failed" data-action="switch-origin-demo" data-outcome="failed">解析失败</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
}

function originLinkStatusHtml(){
  if(originAnalysisState.analyzing) return renderOriginAnalyzingCard();
  if(originAnalysisState.completed || originLinkStatus==="success" || originLinkStatus==="failed") return renderOriginCompletedBanner();
  return '';
}

function setOriginDemoOutcome(outcome, box) {
  originDemoOutcome = outcome;
  originLinkStatus = outcome;
  originAnalysisState.completed = true;

  if (outcome === "success") {
    wizardState.formData.url = originLinkValue || "https://weibo.com/detail/102938481029384";
    wizardState.formData.title = "【微博采集】小区雨后积水引发居民关注";
    wizardState.formData.source = "微博";
    wizardState.formData.description = "【已采集内容】有网友反映，连续降雨后，某小区出入口出现积水，影响居民通行。帖文附有现场情况说明，并询问排水设施维护进展。目前已有用户转发并补充附近路段的情况。";

    var targets = [
      { sel: "[data-wizard-field='title'], [data-issue-page-field='title']", val: wizardState.formData.title },
      { sel: "[data-wizard-field='source'], [data-issue-page-field='source']", val: wizardState.formData.source },
      { sel: "[data-wizard-field='url'], [data-issue-page-field='url']", val: wizardState.formData.url },
      { sel: "[data-wizard-field='description'], [data-issue-page-field='description']", val: wizardState.formData.description }
    ];

    targets.forEach(function(item) {
      document.querySelectorAll(item.sel).forEach(function(elem) {
        elem.value = item.val;
        elem.classList.add("field-autofill-highlight");
        setTimeout(function() {
          elem.classList.remove("field-autofill-highlight");
        }, 1500);
      });
    });
    showToast("✓ 已切换为【解析成功】演示状态");
  } else {
    showToast("已切换为【解析失败】演示状态");
  }

  var slot = box ? box.querySelector(".origin-analysis-slot") : document.querySelector(".origin-analysis-slot");
  if (slot) {
    slot.innerHTML = renderOriginCompletedBanner();
  }
}

function startOriginLinkSimulation(btnEl) {
  if (originAnalysisState.analyzing) return;
  var box = btnEl ? btnEl.closest(".origin-fetch-box") : document.querySelector(".origin-fetch-box");
  var input = box ? box.querySelector("input") : null;
  var url = input ? input.value.trim() : "";
  if (!url) {
    url = "https://weibo.com/detail/102938481029384";
    if (input) input.value = url;
  }
  originLinkValue = url;
  wizardState.formData.url = url;

  originAnalysisState.analyzing = true;
  originAnalysisState.completed = false;
  originAnalysisState.elapsed = 0;
  originAnalysisState.progress = 0;

  var slot = box ? box.querySelector(".origin-analysis-slot") : null;
  if (!slot && box) {
    slot = document.createElement("div");
    slot.className = "origin-analysis-slot";
    box.appendChild(slot);
  }
  if (slot) {
    slot.innerHTML = renderOriginAnalyzingCard();
  }

  if (originAnalysisState.timerId) clearInterval(originAnalysisState.timerId);

  originAnalysisState.timerId = setInterval(function() {
    originAnalysisState.elapsed += 0.05;
    var elap = originAnalysisState.elapsed;
    var ratio = Math.min(1, elap / 1.0);
    originAnalysisState.progress = Math.min(100, Math.round(ratio * 100));

    var timerEl = document.getElementById("originLiveTimer");
    if (timerEl) timerEl.innerText = elap.toFixed(1) + "s";

    var barEl = document.getElementById("originLiveProgressBar");
    if (barEl) barEl.style.width = originAnalysisState.progress + "%";

    var textEl = document.getElementById("originParseStepText");
    if (textEl) {
      if (elap < 0.4) {
        textEl.innerHTML = '<span>正在解析源网页标题与正文...</span>';
      } else if (elap < 0.8) {
        textEl.innerHTML = '<span>正在提取关键要素并匹配表单...</span>';
      } else {
        textEl.innerHTML = '<span>要素提取完成，正在填入表单...</span>';
      }
    }

    if (elap >= 1.0) {
      clearInterval(originAnalysisState.timerId);
      originAnalysisState.timerId = null;
      originAnalysisState.analyzing = false;
      originAnalysisState.completed = true;

      if (originDemoOutcome === "success") {
        originLinkStatus = "success";
        wizardState.formData.url = url;
        wizardState.formData.title = "【微博采集】小区雨后积水引发居民关注";
        wizardState.formData.source = "微博";
        wizardState.formData.description = "【已采集内容】有网友反映，连续降雨后，某小区出入口出现积水，影响居民通行。帖文附有现场情况说明，并询问排水设施维护进展。目前已有用户转发并补充附近路段的情况。";

        var targets = [
          { sel: "[data-wizard-field='title'], [data-issue-page-field='title']", val: wizardState.formData.title },
          { sel: "[data-wizard-field='source'], [data-issue-page-field='source']", val: wizardState.formData.source },
          { sel: "[data-wizard-field='url'], [data-issue-page-field='url']", val: wizardState.formData.url },
          { sel: "[data-wizard-field='description'], [data-issue-page-field='description']", val: wizardState.formData.description }
        ];

        targets.forEach(function(item) {
          document.querySelectorAll(item.sel).forEach(function(elem) {
            elem.value = item.val;
            elem.classList.add("field-autofill-highlight");
            setTimeout(function() {
              elem.classList.remove("field-autofill-highlight");
            }, 2000);
          });
        });

        showToast("✓ 链接解析完成，已自动填入表单！");
      } else {
        originLinkStatus = "failed";
        showToast("链接解析完成：未匹配到内容字段（演示失败状态）");
      }

      if (slot) {
        slot.innerHTML = renderOriginCompletedBanner();
      }
    }
  }, 50);
}

/* =========================================================
   下发向导全局状态与收件人维度
   ========================================================= */
var wizardOrgTreeData = [
  {
    id: "org-prov",
    name: "台湾省网信办（全域指挥网）",
    path: "台湾省网信办",
    countSelf: 35,
    countDirect: 91,
    countAll: 217,
    children: [
      {
        id: "org-prov-direct",
        name: "台湾省网信办直属机关",
        path: "台湾省网信办 / 直属机关",
        countSelf: 28,
        countDirect: 91,
        countAll: 91,
        children: [
          { id: "org-dept-1", name: "综合处（应急办公室）", path: "台湾省网信办 / 直属机关 / 综合处", countSelf: 18, countDirect: 18, countAll: 18 },
          { id: "org-dept-2", name: "网络舆情处置处", path: "台湾省网信办 / 直属机关 / 网络舆情处置处", countSelf: 25, countDirect: 25, countAll: 25 },
          { id: "org-dept-3", name: "网络安全协调处", path: "台湾省网信办 / 直属机关 / 网络安全协调处", countSelf: 20, countDirect: 20, countAll: 20 }
        ]
      },
      {
        id: "org-city-tp",
        name: "台北市网宣与应急管理处",
        path: "台湾省网信办 / 台北市",
        countSelf: 16,
        countDirect: 48,
        countAll: 48,
        children: [
          { id: "org-city-tp-1", name: "台北市驻地监管一科", path: "台湾省网信办 / 台北市 / 驻地监管一科", countSelf: 18, countDirect: 18, countAll: 18 },
          { id: "org-city-tp-2", name: "台北市网评协调组", path: "台湾省网信办 / 台北市 / 网评协调组", countSelf: 14, countDirect: 14, countAll: 14 }
        ]
      },
      {
        id: "org-city-kh",
        name: "高雄市网信协同处置中心",
        path: "台湾省网信办 / 高雄市",
        countSelf: 14,
        countDirect: 34,
        countAll: 34,
        children: [
          { id: "org-city-kh-1", name: "高雄市应急突击支队", path: "台湾省网信办 / 高雄市 / 应急突击支队", countSelf: 20, countDirect: 20, countAll: 20 }
        ]
      },
      {
        id: "org-sector",
        name: "省级行业协同工作专班",
        path: "台湾省网信办 / 行业协同",
        countSelf: 12,
        countDirect: 44,
        countAll: 44,
        children: [
          { id: "org-sector-edu", name: "教育系统网络舆情工作专班", path: "台湾省网信办 / 行业协同 / 教育厅专班", countSelf: 26, countDirect: 26, countAll: 26 },
          { id: "org-sector-build", name: "住建与市政应急宣传中心", path: "台湾省网信办 / 行业协同 / 住建厅宣传中心", countSelf: 18, countDirect: 18, countAll: 18 }
        ]
      }
    ]
  }
];

var wizardExtGroupTreeData = [
  {
    id: "ext-grp-root",
    name: "全省外部分组与协同网络",
    path: "外部分组",
    countSelf: 12,
    countDirect: 42,
    countAll: 42,
    children: [
      {
        id: "ext-grp-edu",
        name: "教育系统网络应急联动组",
        path: "外部分组 / 教育系统",
        countSelf: 8,
        countDirect: 24,
        countAll: 24,
        children: [
          { id: "ext-grp-edu-1", name: "省属高校舆情协同组", path: "外部分组 / 教育系统 / 省属高校", countSelf: 14, countDirect: 14, countAll: 14 },
          { id: "ext-grp-edu-2", name: "市县教委联络专班", path: "外部分组 / 教育系统 / 市县教委", countSelf: 10, countDirect: 10, countAll: 10 }
        ]
      },
      {
        id: "ext-grp-build",
        name: "住建与市政应急宣传专班",
        path: "外部分组 / 住建市政",
        countSelf: 6,
        countDirect: 18,
        countAll: 18,
        children: [
          { id: "ext-grp-build-1", name: "城市基础设施突发事件专班", path: "外部分组 / 住建市政 / 基础设施", countSelf: 11, countDirect: 11, countAll: 11 },
          { id: "ext-grp-build-2", name: "供水供电应急联络组", path: "外部分组 / 住建市政 / 供水供电", countSelf: 7, countDirect: 7, countAll: 7 }
        ]
      }
    ]
  }
];

var wizardRecipientDimensionData = {
  org: [
    { id: "org-1", type: "机构", name: "台湾省网信办（直属指挥中心）", count: "91人", sub: "全厅各处室与直属事业单位", people: ["武丁", "齐杰", "陈乾喜", "张若英", "吴鑫", "赵力"] },
    { id: "org-2", type: "机构", name: "高雄市网信协同处置中心", count: "34人", sub: "属地网信应急支队", people: ["黄志明", "林雅萍", "李俊杰"] },
    { id: "org-3", type: "机构", name: "台北市网宣与应急管理处", count: "48人", sub: "驻地监管与协调联络组", people: ["柯文哲", "陈时中", "蒋万安"] },
    { id: "org-4", type: "机构", name: "教育系统网络舆情工作专班", count: "26人", sub: "教育厅下属高校及中专协调组", people: ["yfb", "zr", "213"] },
    { id: "org-5", type: "机构", name: "住建与市政应急宣传中心", count: "18人", sub: "住建厅宣传中心", people: ["郭总", "wx"] }
  ],
  group: [
    { id: "grp-1", type: "分组", name: "综合科（应急值班组）", count: "8人", sub: "台湾省网信办 / 综合协调与公文流转", people: ["张启帆", "武丁", "赵力"] },
    { id: "grp-2", type: "分组", name: "舆情科（监测研判组）", count: "12人", sub: "台湾省网信办 / 24小时值班研判", people: ["杨福宾", "齐杰", "幸福快乐"] },
    { id: "grp-3", type: "分组", name: "R&D 研发支撑与溯源组", count: "14人", sub: "技术中心 / 涉诈分析与网络对抗", people: ["谭星", "Mr.鬼手", "任云辉"] },
    { id: "grp-4", type: "分组", name: "SD 安全运维与处置组", count: "17人", sub: "技术中心 / 漏洞加固与指令落地", people: ["武丙", "杨欢", "密信测试号", "卓", "柒"] },
    { id: "grp-5", type: "分组", name: "外部协作-教育厅专班", count: "3人", sub: "外部联系人 / 高校与直属机构", people: ["yfb", "zr", "213"] }
  ],
  role: [
    { id: "role-1", type: "角色", name: "一线处置员（Disposer）", count: "42人", sub: "具备指令接收、填报处置回执与附件上传权限", people: ["武丁", "齐杰", "武丙", "谭星", "杨福宾", "张启帆"] },
    { id: "role-2", type: "角色", name: "处置审批人（Approver）", count: "8人", sub: "具备指令审批归档、驳回重办及退回转办权限", people: ["武丁", "齐杰", "吴鑫"] },
    { id: "role-3", type: "角色", name: "应急值班长（Shift Leader）", count: "6人", sub: "具备指令加急下发、跨机构指派与强行催办权限", people: ["齐杰", "陈乾喜"] },
    { id: "role-4", type: "角色", name: "数据审计员（Auditor）", count: "5人", sub: "具备流转日志审计、批注及全域统计穿透权限", people: ["张若英", "Dennis.Chin*秦晓昊"] }
  ],
  person: [
    { id: "usr-1", type: "人员", name: "武丁", role: "处置审批人 / 综合科", org: "台湾省网信办", phone: "138****0001", avatar: "武", isInternal: true },
    { id: "usr-2", type: "人员", name: "齐杰", role: "应急值班长 / 舆情科", org: "台湾省网信办", phone: "138****0002", avatar: "齐", isInternal: true },
    { id: "usr-3", type: "人员", name: "武丙", role: "一线处置员 / SD组", org: "台湾省网信办", phone: "138****0003", avatar: "武", isInternal: true },
    { id: "usr-4", type: "人员", name: "谭星", role: "一线处置员 / R&D组", org: "台湾省网信办", phone: "138****0004", avatar: "谭", isInternal: true },
    { id: "usr-5", type: "人员", name: "陈乾喜", role: "应急值班长 / 台湾省网信办", org: "台湾省网信办", phone: "138****0005", avatar: "陈", isInternal: true },
    { id: "usr-6", type: "人员", name: "张启帆", role: "一线处置员 / 综合科", org: "台湾省网信办", phone: "138****0006", avatar: "张", isInternal: true },
    { id: "usr-7", type: "人员", name: "杨福宾", role: "一线处置员 / 舆情科", org: "台湾省网信办", phone: "138****0007", avatar: "杨", isInternal: true },
    { id: "usr-8", type: "人员", name: "杨欢", role: "一线处置员 / SD组", org: "台湾省网信办", phone: "138****0008", avatar: "杨", isInternal: true },
    { id: "usr-9", type: "人员", name: "吴鑫", role: "处置审批人 / 主任科员", org: "台湾省网信办", phone: "138****0009", avatar: "吴", isInternal: true },
    { id: "usr-10", type: "人员", name: "张若英", role: "数据审计员 / 秘书处", org: "台湾省网信办", phone: "138****0010", avatar: "张", isInternal: true },
    { id: "usr-11", type: "人员", name: "yfb", role: "外部联系人 / 教育厅专班", org: "教育厅", phone: "139****1101", avatar: "Y", isInternal: false },
    { id: "usr-12", type: "人员", name: "zr", role: "外部联系人 / 教育厅专班", org: "教育厅", phone: "139****1102", avatar: "Z", isInternal: false },
    { id: "usr-13", type: "人员", name: "213", role: "外部联系人 / 高教组", org: "教育厅", phone: "139****1103", avatar: "2", isInternal: false },
    { id: "usr-14", type: "人员", name: "郭总", role: "外部联系人 / 住建市政", org: "住建厅", phone: "139****2201", avatar: "郭", isInternal: false }
  ]
};

var wizardState = {
  step: 1, // 1: 选模板, 2: 填写字段, 3: 选接收人, 4: 确认并发送, 5: 发送成功
  selectedTemplateId: "TPL202602110001",
  tplCategoryFilter: "全部",
  tplSearchKeyword: "",
  formData: {
    org: "台湾省网信办",
    issuer: "武丁",
    system: "全省网络安全与舆情应急联动系统",
    title: "",
    urgency: "",
    responseTime: "",
    deadline: "",
    source: "",
    url: "",
    description: "",
    note: ""
  },
  recipientDimTab: "org", // 'org' | 'group' | 'role' | 'person'
  recipientSearchKw: "",
  recipientTreeSearchKw: "",
  recipientOrgTreeActiveId: "org-prov-direct",
  recipientExtGroupTreeActiveId: "ext-grp-edu",
  recipientUserOrgActiveId: "org-prov-direct",
  recipientUserExtOrgActiveId: "ext-grp-edu",
  recipientPersonSubtab: "internal", // 'internal' | 'external'
  recipientOrgTreeExpanded: { "org-prov": true, "org-prov-direct": true, "org-city-tp": true, "org-city-kh": true, "org-sector": true, "ext-grp-root": true, "ext-grp-edu": true, "ext-grp-build": true },
  selectedRecipients: {
    "台湾省网信办直属机关 [当前组织及子组织]": { id: "org-prov-direct", type: "组织架构", name: "台湾省网信办直属机关 [当前组织及子组织]", count: "91人" },
    "武丁": { id: "usr-1", type: "用户", name: "武丁", role: "处置审批人", org: "台湾省网信办" }
  },
  draftId: "",
  lastIssuedId: "YQCZ1924020260831102000"
};

function findOrgNodeById(nodes, id){
  if(!nodes) return null;
  for(var i = 0; i < nodes.length; i++){
    var n = nodes[i];
    if(n.id === id) return n;
    if(n.children && n.children.length){
      var res = findOrgNodeById(n.children, id);
      if(res) return res;
    }
  }
  return null;
}

function renderOrgTreeNodesHtml(nodes, depth, activeId, searchKw, expandedMap){
  if(!nodes || !nodes.length) return "";
  var html = "";
  for(var i = 0; i < nodes.length; i++){
    var node = nodes[i];
    var hasChildren = node.children && node.children.length > 0;
    var isExpanded = expandedMap ? !!expandedMap[node.id] : true;
    if(searchKw && node.name.toLowerCase().indexOf(searchKw) > -1){
      isExpanded = true;
    }
    var isActive = node.id === activeId;
    var matchSearch = !searchKw || node.name.toLowerCase().indexOf(searchKw) > -1 || (node.path && node.path.toLowerCase().indexOf(searchKw) > -1);

    var rowStyle = "padding-left: " + (8 + depth * 16) + "px;";
    var expanderIcon = hasChildren ? (isExpanded ? ico("chevron-down", 14) : ico("chevron-right", 14)) : '<span style="width:14px;display:inline-block"></span>';

    if(matchSearch || (hasChildren && isExpanded)){
      html += '<div class="tree-node-row ' + (isActive ? "active" : "") + '" style="' + rowStyle + '" data-action="wizard-rec-tree-node" data-node-id="' + node.id + '">' +
        (hasChildren ? '<button type="button" class="tree-node-expander" data-action="tree-node-toggle" data-node-id="' + node.id + '">' + expanderIcon + '</button>' : '<span class="tree-node-expander" style="cursor:default">' + expanderIcon + '</span>') +
        '<span class="tree-node-icon">' + (hasChildren ? ico("building-2", 15) : ico("layers", 14)) + '</span>' +
        '<span class="tree-node-title">' + escapeHtml(node.name) + '</span>' +
      '</div>';
    }

    if(hasChildren && isExpanded){
      html += renderOrgTreeNodesHtml(node.children, depth + 1, activeId, searchKw, expandedMap);
    }
  }
  return html;
}

function renderOrgScopePaneHtml(activeNode, isGroup){
  if(!activeNode) activeNode = isGroup ? wizardExtGroupTreeData[0] : wizardOrgTreeData[0];
  var selMap = wizardState.selectedRecipients || {};

  var opt1Name = activeNode.name + (isGroup ? " [当前分组]" : " [当前组织]");
  var isSel1 = !!selMap[opt1Name];

  var opt2Name = activeNode.name + (isGroup ? " [当前分组及子分组]" : " [当前组织及子组织]");
  var isSel2 = !!selMap[opt2Name];

  var opt3Name = activeNode.name + (isGroup ? " [当前分组及子孙分组]" : " [当前组织及子孙组织]");
  var isSel3 = !!selMap[opt3Name];

  var recType = isGroup ? "外部分组" : "组织架构";
  var label1 = isGroup ? "【当前分组】" : "【当前组织】";
  var label2 = isGroup ? "【当前分组及子分组】" : "【当前组织及子组织】";
  var label3 = isGroup ? "【当前分组及子孙分组】" : "【当前组织及子孙组织】";

  return '<div style="display:flex;flex-direction:column;gap:12px;padding:4px 0">' +
    /* 卡片 1: 当前组织 / 分组 (单选) */
    '<div class="scope-option-card ' + (isSel1 ? "selected" : "") + '" data-action="wizard-scope-select" data-node-id="' + activeNode.id + '" data-scope-type="self" data-rec-name="' + escapeHtml(opt1Name) + '" data-rec-type="' + recType + '">' +
      '<div class="scope-card-left">' +
        '<span class="row-check ' + (isSel1 ? "on" : "") + '" style="border-radius:50%"></span>' +
        '<span class="scope-card-icon">' + (isGroup ? ico("users", 16) : ico("building-2", 16)) + '</span>' +
        '<span class="scope-card-label">' + label1 + '</span>' +
      '</div>' +
    '</div>' +

    /* 卡片 2: 当前组织/分组及子组织/子分组 (单选) */
    '<div class="scope-option-card ' + (isSel2 ? "selected" : "") + '" data-action="wizard-scope-select" data-node-id="' + activeNode.id + '" data-scope-type="direct" data-rec-name="' + escapeHtml(opt2Name) + '" data-rec-type="' + recType + '">' +
      '<div class="scope-card-left">' +
        '<span class="row-check ' + (isSel2 ? "on" : "") + '" style="border-radius:50%"></span>' +
        '<span class="scope-card-icon">' + ico("layers", 16) + '</span>' +
        '<span class="scope-card-label">' + label2 + '</span>' +
      '</div>' +
    '</div>' +

    /* 卡片 3: 当前组织/分组及子孙组织/子孙分组 (单选) */
    '<div class="scope-option-card ' + (isSel3 ? "selected" : "") + '" data-action="wizard-scope-select" data-node-id="' + activeNode.id + '" data-scope-type="all" data-rec-name="' + escapeHtml(opt3Name) + '" data-rec-type="' + recType + '">' +
      '<div class="scope-card-left">' +
        '<span class="row-check ' + (isSel3 ? "on" : "") + '" style="border-radius:50%"></span>' +
        '<span class="scope-card-icon">' + ico("git-fork", 16) + '</span>' +
        '<span class="scope-card-label">' + label3 + '</span>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderWizardRecipientLeftContent(isIssueModal){
  var activeDim = wizardState.recipientDimTab || "org";
  var searchKw = (wizardState.recipientSearchKw || "").trim().toLowerCase();
  var toggleAction = isIssueModal ? "issue-modal-toggle-rec" : "wizard-toggle-recipient";
  var searchAction = isIssueModal ? "issue-modal-rec-search-input" : "wizard-rec-search-input";
  var selectAllAction = isIssueModal ? "issue-modal-rec-select-all-dim" : "wizard-rec-select-all-dim";

  // 1. 按组织架构
  if(activeDim === "org"){
    var activeNodeId = wizardState.recipientOrgTreeActiveId || "org-prov-direct";
    var activeNode = findOrgNodeById(wizardOrgTreeData, activeNodeId) || wizardOrgTreeData[0];
    var treeSearchKw = (wizardState.recipientTreeSearchKw || "").trim().toLowerCase();

    var treeNodesHtml = renderOrgTreeNodesHtml(wizardOrgTreeData, 0, activeNodeId, treeSearchKw, wizardState.recipientOrgTreeExpanded);
    var scopeHtml = renderOrgScopePaneHtml(activeNode, false);

    return '<div class="wizard-two-pane">' +
      '<div class="wizard-tree-pane">' +
        '<div class="tree-search-bar">' +
          ico("search", 14) +
          '<input type="text" placeholder="搜索组织架构..." value="' + escapeHtml(wizardState.recipientTreeSearchKw || "") + '" data-action="wizard-rec-tree-search" style="border:none;background:transparent;outline:none;font-size:12.5px;width:100%">' +
        '</div>' +
        '<div class="tree-scroll-pane">' + treeNodesHtml + '</div>' +
      '</div>' +
      '<div class="wizard-scope-pane">' + scopeHtml + '</div>' +
    '</div>';
  }

  // 2. 按外部分组
  if(activeDim === "group"){
    var activeNodeId = wizardState.recipientExtGroupTreeActiveId || "ext-grp-edu";
    var activeNode = findOrgNodeById(wizardExtGroupTreeData, activeNodeId) || wizardExtGroupTreeData[0];
    var treeSearchKw = (wizardState.recipientTreeSearchKw || "").trim().toLowerCase();

    var treeNodesHtml = renderOrgTreeNodesHtml(wizardExtGroupTreeData, 0, activeNodeId, treeSearchKw, wizardState.recipientOrgTreeExpanded);
    var scopeHtml = renderOrgScopePaneHtml(activeNode, true);

    return '<div class="wizard-two-pane">' +
      '<div class="wizard-tree-pane">' +
        '<div class="tree-search-bar">' +
          ico("search", 14) +
          '<input type="text" placeholder="搜索外部分组架构..." value="' + escapeHtml(wizardState.recipientTreeSearchKw || "") + '" data-action="wizard-rec-tree-search" style="border:none;background:transparent;outline:none;font-size:12.5px;width:100%">' +
        '</div>' +
        '<div class="tree-scroll-pane">' + treeNodesHtml + '</div>' +
      '</div>' +
      '<div class="wizard-scope-pane">' + scopeHtml + '</div>' +
    '</div>';
  }

  // 3. 按角色
  if(activeDim === "role"){
    var listData = wizardRecipientDimensionData.role || [];
    var filteredList = listData.filter(function(item){
      if(!searchKw) return true;
      return item.name.toLowerCase().indexOf(searchKw) > -1 || (item.sub && item.sub.toLowerCase().indexOf(searchKw) > -1);
    });

    var searchRow = '<div class="wizard-rec-search-row">' +
      '<div class="wizard-search-box" style="flex:1;width:auto">' +
        ico("search", 15) +
        '<input type="text" placeholder="搜索岗位角色名称..." value="' + escapeHtml(wizardState.recipientSearchKw) + '" data-action="' + searchAction + '">' +
      '</div>' +
      '<button type="button" class="btn light small" data-action="' + selectAllAction + '" style="font-size:12px;font-weight:700">' + ico("check-check", 13) + ' 本维度全选</button>' +
    '</div>';

    var rows = '<div class="wizard-rec-list-scroll">' + filteredList.map(function(item){
      var isSelected = !!wizardState.selectedRecipients[item.name];
      return '<div class="rec-item-row ' + (isSelected ? "selected" : "") + '" data-action="' + toggleAction + '" data-name="' + escapeHtml(item.name) + '" data-type="角色" data-id="' + item.id + '">' +
        '<div class="rec-item-left">' +
          '<span class="rec-item-avatar" style="background:#fef3c7;color:#b45309">' + ico("shield-check", 14) + '</span>' +
          '<div class="rec-item-info">' +
            '<span class="rec-item-name">' + escapeHtml(item.name) + '</span>' +
            '<span class="rec-item-sub">' + (item.sub || "") + ' ' + (item.count ? ' · <b style="color:var(--teal)">' + item.count + '</b>' : "") + '</span>' +
          '</div>' +
        '</div>' +
        '<span class="row-check ' + (isSelected ? "on" : "") + '"></span>' +
      '</div>';
    }).join("") + '</div>';

    return searchRow + rows;
  }

  // 4. 按用户
  if(activeDim === "person"){
    var curSubtab = wizardState.recipientPersonSubtab || "internal"; // "internal" | "external"
    var treeData = curSubtab === "internal" ? wizardOrgTreeData : wizardExtGroupTreeData;
    var activeOrgId = (curSubtab === "internal" ? wizardState.recipientUserOrgActiveId : wizardState.recipientUserExtOrgActiveId) || treeData[0].id;
    var activeOrgNode = findOrgNodeById(treeData, activeOrgId) || treeData[0];
    var treeSearchKw = (wizardState.recipientTreeSearchKw || "").trim().toLowerCase();

    var treeNodesHtml = renderOrgTreeNodesHtml(treeData, 0, activeOrgId, treeSearchKw, wizardState.recipientOrgTreeExpanded);

    var allPersons = wizardRecipientDimensionData.person || [];
    var filteredPersons = allPersons.filter(function(item){
      if(curSubtab === "internal" && !item.isInternal) return false;
      if(curSubtab === "external" && item.isInternal) return false;
      if(!searchKw) return true;
      return item.name.toLowerCase().indexOf(searchKw) > -1 || (item.role && item.role.toLowerCase().indexOf(searchKw) > -1) || (item.org && item.org.toLowerCase().indexOf(searchKw) > -1) || (item.phone && item.phone.indexOf(searchKw) > -1);
    });

    var subtabs = '<div class="wizard-user-subtabs" style="padding:8px 14px;border-bottom:1px solid #edf2f5;background:#f8fafc">' +
      '<button type="button" class="wizard-user-subtab-btn ' + (curSubtab==="internal"?"active":"") + '" data-action="wizard-user-subtab" data-sub="internal">' + ico("building-2", 13) + ' 内部</button>' +
      '<button type="button" class="wizard-user-subtab-btn ' + (curSubtab==="external"?"active":"") + '" data-action="wizard-user-subtab" data-sub="external">' + ico("external-link", 13) + ' 外部</button>' +
    '</div>';

    var searchRow = '<div class="wizard-rec-search-row" style="padding:10px 12px;margin:0;border-bottom:1px solid #edf2f5">' +
      '<div class="wizard-search-box" style="flex:1;width:auto">' +
        ico("search", 15) +
        '<input type="text" placeholder="搜索姓名、职务或手机号..." value="' + escapeHtml(wizardState.recipientSearchKw) + '" data-action="' + searchAction + '">' +
      '</div>' +
      '<button type="button" class="btn light small" data-action="' + selectAllAction + '" style="font-size:12px;font-weight:700">' + ico("check-check", 13) + ' 本组全选</button>' +
    '</div>';

    var personRows = '<div class="wizard-rec-list-scroll" style="padding:8px;flex:1;overflow-y:auto">' + filteredPersons.map(function(item){
      var isSelected = !!wizardState.selectedRecipients[item.name];
      return '<div class="rec-item-row ' + (isSelected ? "selected" : "") + '" data-action="' + toggleAction + '" data-name="' + escapeHtml(item.name) + '" data-type="用户" data-id="' + item.id + '">' +
        '<div class="rec-item-left">' +
          '<span class="rec-item-avatar" style="' + (item.isInternal ? "background:#e0f5f4;color:#005c58" : "background:#e0f2fe;color:#0369a1") + '">' + item.avatar + '</span>' +
          '<div class="rec-item-info">' +
            '<span class="rec-item-name">' + escapeHtml(item.name) + '</span>' +
            '<span class="rec-item-sub">' + escapeHtml(item.role) + ' · ' + escapeHtml(item.org) + '</span>' +
          '</div>' +
        '</div>' +
        '<span class="row-check ' + (isSelected ? "on" : "") + '"></span>' +
      '</div>';
    }).join("") + '</div>';

    var userRightPane = '<div style="display:flex;flex-direction:column;flex:1;min-width:0;height:100%">' + searchRow + personRows + '</div>';

    return '<div style="display:flex;flex-direction:column;flex:1;min-height:0">' +
      subtabs +
      '<div class="wizard-two-pane" style="flex:1;min-height:0">' +
        '<div class="wizard-tree-pane">' +
          '<div class="tree-search-bar">' +
            ico("search", 14) +
            '<input type="text" placeholder="搜索组织架构..." value="' + escapeHtml(wizardState.recipientTreeSearchKw || "") + '" data-action="wizard-rec-tree-search" style="border:none;background:transparent;outline:none;font-size:12.5px;width:100%">' +
          '</div>' +
          '<div class="tree-scroll-pane">' + treeNodesHtml + '</div>' +
        '</div>' +
        '<div class="wizard-user-pane" style="flex:1;display:flex;flex-direction:column;min-width:0;padding:0">' + userRightPane + '</div>' +
      '</div>' +
    '</div>';
  }

  return "";
}

function resetWizardState(tplId, targetStep){
  var tpl = getTemplateById(tplId || "TPL202602110001");
  wizardState.step = targetStep || 1;
  wizardState.selectedTemplateId = tpl.id;
  wizardState.tplCategoryFilter = "全部";
  wizardState.tplSearchKeyword = "";
  wizardState.recipientDimTab = "org";
  wizardState.recipientSearchKw = "";
  wizardState.recipientTreeSearchKw = "";
  wizardState.recipientOrgTreeActiveId = "org-prov-direct";
  wizardState.recipientExtGroupTreeActiveId = "ext-grp-edu";
  wizardState.recipientUserOrgActiveId = "org-prov-direct";
  wizardState.recipientUserExtOrgActiveId = "ext-grp-edu";
  wizardState.recipientPersonSubtab = "internal";
  wizardState.recipientOrgTreeExpanded = { "org-prov": true, "org-prov-direct": true, "org-city-tp": true, "org-city-kh": true, "org-sector": true, "ext-grp-root": true, "ext-grp-edu": true, "ext-grp-build": true };
  wizardState.editingDraftKey = null;
  wizardState.draftId = "";
  wizardState.formData = {
    org: "台湾省网信办",
    issuer: currentUser || "武丁",
    system: "全省网络安全与舆情应急联动系统",
    title: "",
    urgency: "",
    responseTime: "",
    deadline: "",
    source: "",
    url: "",
    description: "",
    note: ""
  };
  wizardState.selectedRecipients = {};
  originLinkValue = "";
  originParsedData = null;
  originParseStatus = "idle";
}

function openIssueWizardFromDraft(draftItem){
  if(!draftItem) return;
  if(!assertCanIssue()) return;
  resetWizardState();
  var matchTpl = issueTemplates.filter(function(t){ return t.name === draftItem.template; })[0] || issueTemplates[0];
  wizardState.selectedTemplateId = matchTpl.id;
  wizardState.step = 2;
  wizardState.formData.title = String(draftItem.title || "").replace(/（草稿）/g, "").replace(/（副本）/g, "");
  wizardState.formData.description = draftItem.description || "";
  wizardState.formData.deadline = draftItem.deadline || "2026-09-18 18:00:00";
  wizardState.formData.source = draftItem.source || "专网监测预警平台";
  wizardState.formData.url = draftItem.url || "";
  wizardState.formData.urgency = draftItem.urgency || "加急";
  wizardState.formData.note = draftItem.note || "";
  wizardState.editingDraftKey = draftItem.key;
  wizardState.draftId = draftItem.id || "";
  wizardState.selectedRecipients = {};
  if(draftItem.receiver && draftItem.receiver !== "未指定接收人" && draftItem.receiver !== "-" && draftItem.receiver !== "未指定"){
    String(draftItem.receiver).split(/[、,，\s]+/).filter(Boolean).forEach(function(rn){
      wizardState.selectedRecipients[rn] = { id: "rec-" + rn, type: "接收对象", name: rn };
    });
  }
  openModal("issue");
}

/* === 全屏指令下发配置页面 (指定下发第二步全屏重构) === */
function renderIssueFormPage(){
  var curTpl = getTemplateById(wizardState.selectedTemplateId);
  var recList = Object.keys(wizardState.selectedRecipients);
  var isUrgent = curTpl.requirement === "限时回执";

  // 面包屑
  var breadcrumb = '<div class="detail-breadcrumb" style="margin-bottom:8px">' +
    '<span class="link" data-action="back-from-issue-form">' + ico("circle-chevron-left", 16) + ' 我的指令</span>' +
    '<span>/</span>' +
    '<b>新建指令下发配置</b>' +
  '</div>';

  // 顶部卡片 (包含横向放置在右侧的下发流程链条：选择模板 -> 填写信息 -> 完成发送)
  var summaryHeader = '<section class="card detail-summary" style="margin-bottom:10px;padding:10px 18px">' +
    '<div class="detail-band" style="padding-bottom:6px;margin-bottom:4px">' +
      '<span class="detail-id-wrap" style="display:inline-flex;align-items:center;gap:6px">' +
        '<span class="tpl-tag-pill ' + (isUrgent?"reply":"read") + '" style="padding:2px 8px;font-size:12px;font-weight:700">' +
          ico("layout-template", 13) + ' 当前模板：' + escapeHtml(curTpl.name) +
        '</span>' +
      '</span>' +
      '<span class="tag ' + (isUrgent?"urgent":"returned") + '" style="padding:1px 7px;font-size:11.5px">' + curTpl.requirement + '</span>' +
      '<span style="font-size:12px;color:#64748b">' + curTpl.scope + ' · ' + (curTpl.version || 'v2.1') + '</span>' +
      '<span style="margin-left:auto;font-size:11.5px;color:#005c58;background:#eef8f7;padding:2px 10px;border-radius:4px;border:1px solid #b5e5e2;display:inline-flex;align-items:center;gap:4px">' +
        ico("shield-check", 13) + ' 结构化表单配置与协同派发' +
      '</span>' +
    '</div>' +
    '<div class="detail-title" style="margin-top:4px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
      '<span class="detail-title-main" style="font-size:17px">' +
        ico("file-signature", 20) +
        '<span>下发指令表单配置</span>' +
      '</span>' +
      '<div class="issue-horizontal-flow" style="padding:3px 12px;gap:8px">' +
        '<div class="flow-step-h-item done">' +
          '<span class="flow-step-h-num" style="width:18px;height:18px;font-size:10px">✓</span>' +
          '<span style="font-size:12px">选择模板</span>' +
        '</div>' +
        '<span class="flow-step-h-arrow" style="font-size:12px">›</span>' +
        '<div class="flow-step-h-item active">' +
          '<span class="flow-step-h-num" style="width:18px;height:18px;font-size:10px">2</span>' +
          '<span style="font-size:12px">填写信息</span>' +
        '</div>' +
        '<span class="flow-step-h-arrow" style="font-size:12px">›</span>' +
        '<div class="flow-step-h-item">' +
          '<span class="flow-step-h-num" style="width:18px;height:18px;font-size:10px">3</span>' +
          '<span style="font-size:12px">完成发送</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</section>';

  // 原文链接获取模块 (与基础信息栏间距缩小)
  var originBox = '<div class="origin-fetch-box" style="margin-bottom:0">' +
    '<div class="origin-fetch-top" style="margin-bottom:6px">' +
      '<div class="origin-fetch-title" style="font-size:14px">' + ico("link-2", 15) + '<span>原文内容快速获取</span></div>' +
      '<div class="origin-fetch-tip" style="font-size:12px">支持粘贴社交媒体或网页链接，智能解析采集字段并自动填入表单。</div>' +
    '</div>' +
    '<div class="origin-fetch-input-wrap">' +
      '<input class="input origin-fetch-input" data-issue-page-field="url-parse" style="height:36px;font-size:13px" placeholder="粘贴原信息链接（如微博/微信/网页），获取已采集内容" value="' + escapeHtml(originLinkValue || wizardState.formData.url || "") + '">' +
      '<button type="button" class="btn primary origin-fetch-btn" data-action="parse-origin-link" style="height:36px;padding:0 14px;font-size:13px">' + ico("search", 14) + ' 解析链接</button>' +
    '</div>' +
    '<div class="origin-analysis-slot">' + originLinkStatusHtml() + '</div>' +
  '</div>';

  // 1. 基础信息卡片 (只保留指令类别，业务应用，下发机构，下发人)
  var basicInfoCard = '<div class="issue-cfg-card">' +
    '<div class="issue-cfg-card-head">' +
      '<h3 class="issue-section-title"><span class="section-title-dot" style="background:#009893"></span><span>基础信息</span><span class="section-sub-tip">（系统基础属性规范）</span></h3>' +
    '</div>' +
    '<div class="issue-basic-grid">' +
      '<div class="issue-basic-item">' +
        '<label class="issue-basic-label">指令类别</label>' +
        '<div class="issue-basic-value-readonly">' + (curTpl.category || "舆情处置") + '</div>' +
      '</div>' +
      '<div class="issue-basic-item">' +
        '<label class="issue-basic-label">业务应用</label>' +
        '<div class="issue-basic-value-readonly">一体化态势感知与指令流转系统</div>' +
      '</div>' +
      '<div class="issue-basic-item">' +
        '<label class="issue-basic-label">下发机构</label>' +
        '<div class="issue-basic-value-readonly">台湾省网信办（直属指挥中心）</div>' +
      '</div>' +
      '<div class="issue-basic-item">' +
        '<label class="issue-basic-label">下发人</label>' +
        '<div class="issue-basic-value-readonly">' + escapeHtml(currentUser) + '（主管领导）</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  // 2. 指令下发内容卡片 (做高亮提示和处理回执时一样)
  var contentCard = '<div class="issue-cfg-card highlight-active" style="border: 2px solid #10b981; background: #f0fdf9; box-shadow: 0 4px 18px rgba(16,185,129,0.08);">' +
    '<div class="issue-cfg-card-head" style="border-bottom:1px solid #d1fae5;padding-bottom:8px;margin-bottom:10px">' +
      '<h3 class="issue-section-title"><span class="section-title-dot" style="background:#10b981"></span><span style="color:#065f46">指令下发内容</span><span class="section-sub-tip" style="color:#047857">（录入需要核查处置的具体事实与线索）</span></h3>' +
      '<span class="receipt-status-pill editing" style="background:#ecfdf5;color:#047857;border:1px solid #10b981;font-size:12px;font-weight:700;padding:2px 10px;border-radius:12px">' + ico("edit-3", 13) + ' 正在填报中</span>' +
    '</div>' +
    '<div class="form-active-banner" style="display:flex;align-items:flex-start;gap:10px;background:#ffffff;border:1px solid #a7f3d0;border-radius:6px;padding:10px 14px;margin-bottom:12px;box-shadow:0 1px 3px rgba(0,0,0,0.03)">' +
      '<div class="active-check-circle" style="width:20px;height:20px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex:none;margin-top:1px">✓</div>' +
      '<div>' +
        '<b style="display:block;font-size:13.5px;color:#065f46;margin-bottom:2px">当前处于指令下发内容录入模式</b>' +
        '<p style="margin:0;font-size:12px;color:#047857">请规范录入指令标题、舆情信源与处置说明，支持上传佐证截图或附件材料。</p>' +
      '</div>' +
    '</div>' +
    '<div class="wizard-field-row">' +
      '<label class="issue-field-label required"><span style="color:#065f46;font-weight:800">指令标题</span></label>' +
      '<input class="input" id="issue-form-title" data-issue-page-field="title" style="background:#ffffff" placeholder="请输入指令标题，如：舆情处置：关于某事件的专项排查" value="' + escapeHtml(wizardState.formData.title) + '">' +
    '</div>' +
    '<div class="grid-2" style="gap:14px">' +
      '<div class="wizard-field-row">' +
        '<label class="issue-field-label required"><span style="color:#065f46;font-weight:800">舆情来源 / 平台</span></label>' +
        '<input class="input" id="issue-form-source" data-issue-page-field="source" style="background:#ffffff" placeholder="例如：微博、微信公众号、抖音短视频、属地论坛等" value="' + escapeHtml(wizardState.formData.source) + '">' +
      '</div>' +
      '<div class="wizard-field-row">' +
        '<label class="issue-field-label"><span style="color:#065f46;font-weight:800">原信息 URL 链接</span></label>' +
        '<input class="input" id="issue-form-url" data-issue-page-field="url" style="background:#ffffff" placeholder="https://..." value="' + escapeHtml(wizardState.formData.url) + '">' +
      '</div>' +
    '</div>' +
    '<div class="wizard-field-row">' +
      '<label class="issue-field-label required"><span style="color:#065f46;font-weight:800">舆情说明 / 处置要求</span></label>' +
      '<textarea class="textarea" id="issue-form-desc" data-issue-page-field="description" style="background:#ffffff;height:100px;line-height:1.6" placeholder="请详细描述舆情事件经过、涉及主体、主要风险点及具体处置要求">' + escapeHtml(wizardState.formData.description) + '</textarea>' +
    '</div>' +
    '<div class="wizard-field-row" style="margin-bottom:0">' +
      '<label class="issue-field-label"><span style="color:#065f46;font-weight:800">附件上传</span></label>' +
      '<div class="upload" style="padding:12px 14px;height:76px;background:#ffffff;border:1px dashed #6ee7b7">' +
        '<div>' +
          ico("upload-cloud", 22) + '<br>' +
          '<span style="font-size:12px;color:#047857">点击或拖拽上传现场图片、排查报告、证据材料等附件 (支持 PNG/JPG/PDF/DOC/ZIP)</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  // 3. 回执区域卡片
  var receiptCard = '<div class="issue-cfg-card">' +
    '<div class="issue-cfg-card-head">' +
      '<h3 class="issue-section-title"><span class="section-title-dot" style="background:#10b981"></span><span>回执区域</span><span class="section-sub-tip">（接收责任人在办结时填报的回执字段规范）</span></h3>' +
    '</div>' +
    '<div class="wizard-field-row">' +
      '<label class="issue-field-label required"><span>处理说明</span></label>' +
      '<textarea class="textarea" disabled placeholder="接收责任人在办结处置时录入具体排查核实结论、整改措施与闭环说明..." style="height:88px;background:#f8fafc;color:#64748b;resize:none;cursor:default"></textarea>' +
    '</div>' +
    '<div class="wizard-field-row" style="margin-bottom:0">' +
      '<label class="issue-field-label"><span>附件上传</span></label>' +
      '<div class="upload disabled" style="padding:16px 14px;height:84px;background:#f8fafc;border:1px dashed #cbd5e1;cursor:default">' +
        '<div>' +
          ico("upload-cloud", 24) + '<br>' +
          '<span style="font-size:12px;color:#64748b">接收责任人在办结时上传现场照片、核实截图、盖章报告等佐证材料 (支持 PNG/JPG/PDF/DOC/ZIP)</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  // 4. 其他配置卡片（接收人 与 时限控制）
  var selectedEntries = Object.keys(wizardState.selectedRecipients);
  var timeLimitSection = isUrgent ? (
    '<div style="margin-top:20px;padding-top:16px;border-top:1px solid #edf4f5">' +
      '<div class="wizard-field-row" style="margin-bottom:14px">' +
        '<label class="issue-field-label required"><span>紧急程度</span></label>' +
        '<select class="select" id="issue-form-urgency" data-issue-page-field="urgency" data-action="wizard-change-urgency">' +
          '<option value="" ' + (wizardState.formData.urgency===""?"selected":"") + ' disabled>-- 请选择紧急程度 --</option>' +
          '<option value="加急" ' + (wizardState.formData.urgency==="加急"?"selected":"") + '>加急（推荐：4小时完成）</option>' +
          '<option value="特急" ' + (wizardState.formData.urgency==="特急"?"selected":"") + '>特急（推荐：2小时完成）</option>' +
          '<option value="平急" ' + (wizardState.formData.urgency==="平急"?"selected":"") + '>平急（推荐：24小时完成）</option>' +
        '</select>' +
      '</div>' +
      '<div class="wizard-field-row" style="margin-bottom:0">' +
        '<label class="issue-field-label required"><span>限时完成时间</span></label>' +
        '<input class="input" id="issue-form-deadline" data-issue-page-field="deadline" placeholder="请选择限时完成时间" value="' + escapeHtml(wizardState.formData.deadline || "") + '">' +
        '<div class="wizard-quick-times">' +
          '<span style="font-size:12px;color:#64748b">快捷时限设置：</span>' +
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="2">+2小时</span>' +
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="4">+4小时（推荐）</span>' +
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="8">+8小时</span>' +
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="24">+24小时</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  ) : (
    '<div style="margin-top:16px;padding-top:14px;border-top:1px solid #edf4f5;font-size:12.5px;color:#64748b;display:flex;align-items:center;gap:6px">' +
      ico("info", 14) + ' <span>当前模板为常规回执要求，无硬性倒计时限制，责任人办结后提交回执即可。</span>' +
    '</div>'
  );

  var otherConfigCard = '<div class="issue-cfg-card">' +
    '<div class="issue-cfg-card-head">' +
      '<h3 class="issue-section-title"><span class="section-title-dot" style="background:#f59e0b"></span><span>接收对象与时限控制</span><span class="section-sub-tip">（指定指令接收人及完成时限）</span></h3>' +
    '</div>' +
    '<div class="wizard-field-row">' +
      '<label class="issue-field-label required"><span>选择接收人</span></label>' +
      '<div style="display:flex;gap:12px;align-items:stretch">' +
        '<div class="issue-recipient-input-box" data-action="open-issue-recipient-modal">' +
          (selectedEntries.length ? selectedEntries.map(function(name){
            var item = wizardState.selectedRecipients[name];
            return '<span class="selected-rec-pill">[' + item.type + '] ' + escapeHtml(name) + '<button type="button" class="rec-pill-del" data-action="issue-remove-rec" data-name="' + name + '" title="移除">×</button></span>';
          }).join("") : '<span style="color:#94a3b8;font-size:13px;display:flex;align-items:center;gap:6px">' + ico("user-plus", 14) + ' 点击选择接收部门、业务分组、岗位角色或经办人员...</span>') +
        '</div>' +
        '<button type="button" class="btn primary" data-action="open-issue-recipient-modal" style="display:inline-flex;align-items:center;gap:6px;padding:0 20px;height:42px;white-space:nowrap;font-weight:700;flex-shrink:0">' +
          ico("user-plus", 15) +
          '<span>选择接收人</span>' +
        '</button>' +
      '</div>' +
    '</div>' +
    timeLimitSection +
  '</div>';

  // 底部悬浮操作栏 (全局居中对齐，与页面主体宽度保持一致)
  var bottomBar = '<div class="detail-action-bar" style="position:fixed;left:0;right:0;bottom:0;z-index:90;height:72px;background:#ffffff;border-top:1px solid #cbd5e1;box-shadow:0 -4px 16px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;padding:0">' +
    '<div class="detail-action-bar-inner" style="display:flex;align-items:center;justify-content:space-between">' +
      '<div style="font-size:13.5px;color:#475569">' +
        '已选接收对象：<b style="color:#005c58" id="issue-page-rec-count">' + selectedEntries.length + '</b> 个 ｜ 使用模板：<b>' + escapeHtml(curTpl.name) + '</b> (' + curTpl.requirement + ')' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:12px">' +
        '<button type="button" class="btn" data-action="back-from-issue-form" style="padding:0 20px;height:38px;font-size:13px;border-radius:6px">取消</button>' +
        '<button type="button" class="btn light" data-action="save-issue-draft" style="padding:0 20px;height:38px;font-size:13px;border-radius:6px">' + ico("save", 14) + ' 暂存</button>' +
        '<button type="button" class="btn primary" data-action="issue-form-submit" style="padding:0 28px;height:38px;font-size:14px;font-weight:800;border-radius:6px;background:linear-gradient(135deg, #005c58, #009893);box-shadow:0 2px 10px rgba(0,92,88,0.3)">' + ico("send", 15) + ' 立即下发指令</button>' +
      '</div>' +
    '</div>' +
  '</div>';

  return '<div class="page issue-form-page">' +
    breadcrumb +
    summaryHeader +
    '<div class="issue-cfg-layout">' +
      originBox +
      basicInfoCard +
      contentCard +
      receiptCard +
      otherConfigCard +
    '</div>' +
    footer() +
    bottomBar +
  '</div>';
}

function issueRecipientPickerModal(){
  var activeDim = wizardState.recipientDimTab || "org";

  var dimTabs = '<div class="wizard-rec-dim-tabs">' +
    '<button type="button" class="wizard-rec-tab-btn ' + (activeDim==="org"?"active":"") + '" data-action="issue-modal-rec-dim" data-dim="org">' + ico("building-2", 15) + ' 按机构组织</button>' +
    '<button type="button" class="wizard-rec-tab-btn ' + (activeDim==="group"?"active":"") + '" data-action="issue-modal-rec-dim" data-dim="group">' + ico("users-round", 15) + ' 按业务分组</button>' +
    '<button type="button" class="wizard-rec-tab-btn ' + (activeDim==="role"?"active":"") + '" data-action="issue-modal-rec-dim" data-dim="role">' + ico("shield-check", 15) + ' 按岗位角色</button>' +
    '<button type="button" class="wizard-rec-tab-btn ' + (activeDim==="person"?"active":"") + '" data-action="issue-modal-rec-dim" data-dim="person">' + ico("user", 15) + ' 经办人员</button>' +
  '</div>';

  var leftContent = renderWizardRecipientLeftContent(true);

  var selectedEntries = Object.keys(wizardState.selectedRecipients);
  var selectedCards = '<div class="wizard-rec-selected-list" style="max-height:360px">' +
    (selectedEntries.length ? selectedEntries.map(function(name){
      var item = wizardState.selectedRecipients[name];
      return '<div class="selected-rec-chip">' +
        '<div style="display:flex;align-items:center;gap:6px;min-width:0">' +
          '<span style="background:#e0f2fe;color:#0369a1;padding:1px 5px;border-radius:3px;font-size:11px;font-weight:700">' + item.type + '</span>' +
          '<span style="font-weight:700;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + escapeHtml(name) + '</span>' +
        '</div>' +
        '<button type="button" class="selected-rec-del" data-action="issue-modal-remove-rec" data-name="' + name + '" title="移除">' + ico("x", 14) + '</button>' +
      '</div>';
    }).join("") : '<div style="text-align:center;color:#94a3b8;padding:60px 0">' + ico("user-x", 32) + '<p style="margin-top:6px;font-size:12.5px">请从左侧选择接收机构或人员</p></div>') +
  '</div>';

  var rightPanel = '<div class="wizard-rec-right" style="width:330px">' +
    '<div class="wizard-rec-right-head">' +
      '<span class="wizard-rec-right-title">' + ico("check-square", 16) + ' 已选接收对象 (<b>' + selectedEntries.length + '</b>)</span>' +
      '<button type="button" class="wizard-rec-clear-btn" data-action="issue-modal-clear-rec">清空全部</button>' +
    '</div>' +
    selectedCards +
    '<div class="wizard-rec-right-foot">' +
      '<div><span>支持多机构层级、业务分组及人员混合派发</span></div>' +
    '</div>' +
  '</div>';

  var body = '<div class="wizard-recipient-wrap" style="padding:0;min-height:500px">' +
    '<div class="wizard-rec-left" style="padding:0;display:flex;flex-direction:column">' +
      dimTabs +
      leftContent +
    '</div>' +
    rightPanel +
  '</div>';

  return '<div class="modal" style="width:960px;max-width:96vw">' +
    '<div class="modal-head">' +
      '<span>选择指令接收对象（机构 / 分组 / 角色 / 人员）</span>' +
      '<button class="close" data-close>' + ico("x", 22) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:0">' + body + '</div>' +
    '<div class="modal-foot" style="justify-content:space-between">' +
      '<span style="font-size:13px;color:#64748b">当前已选：<b style="color:#005c58">' + selectedEntries.length + '</b> 个接收对象</span>' +
      '<div style="display:flex;gap:10px">' +
        '<button type="button" class="btn" data-close>取消</button>' +
        '<button type="button" class="btn primary" data-action="confirm-issue-modal-rec" style="padding:0 22px;font-weight:700">确认选择</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderIssueStepper(){
  var steps = [
    { num: 1, label: "选择模板" },
    { num: 2, label: "填写信息" },
    { num: 3, label: "选择接收人" },
    { num: 4, label: "执行发送" }
  ];
  var current = wizardState.step;
  if(current === 5){
    return '<div class="wizard-stepper"><span class="wizard-step-node done"><span class="wizard-step-num">✓</span> 全部完成</span></div>';
  }
  return '<div class="wizard-stepper">' + steps.map(function(s, idx){
    var isDone = s.num < current;
    var isActive = s.num === current;
    var nodeClass = isActive ? "active" : isDone ? "done" : "";
    var numDisplay = isDone ? "✓" : s.num;
    var arrow = idx < steps.length - 1 ? '<span class="wizard-step-arrow">›</span>' : '';
    return '<div class="wizard-step-node ' + nodeClass + '"><span class="wizard-step-num">' + numDisplay + '</span><span>' + s.label + '</span></div>' + arrow;
  }).join("") + '</div>';
}

function renderIssueWizard(){
  var curStep = wizardState.step;
  var curTpl = getTemplateById(wizardState.selectedTemplateId);
  var isUrgent = curTpl.requirement === "限时回执";
  var isReadOnly = curTpl.requirement === "仅阅读";

  // 步骤 1：选择模板
  if(curStep === 1){
    var filterCat = wizardState.tplCategoryFilter;
    var kw = (wizardState.tplSearchKeyword || "").trim().toLowerCase();
    var tpls = issueTemplates.filter(function(t){
      var matchCat = filterCat === "全部" || t.category === filterCat;
      var matchKw = !kw || t.name.toLowerCase().indexOf(kw) > -1 || t.desc.toLowerCase().indexOf(kw) > -1 || t.id.toLowerCase().indexOf(kw) > -1;
      return t.enabled !== false && matchCat && matchKw;
    });

    var banner = '<div class="wizard-tip-banner">'+
      '<div class="wizard-tip-icon">'+ico("sparkles", 14)+'</div>'+
      '<div>'+
        '<div class="wizard-tip-title">预置标准化指令模板库</div>'+
        '<div class="wizard-tip-sub">系统已内置通用舆情研判、限时回执、错误表述纠错等全生命周期模版，支持一键载入标准表单结构与处置规范。</div>'+
      '</div>'+
    '</div>';

    var filterBar = '<div class="wizard-filter-bar">'+
      '<div class="wizard-category-tabs">'+
        ['全部', '舆情处置', '错误表述'].map(function(cat){
          return '<button type="button" class="wizard-category-btn '+(filterCat===cat?'active':'')+'" data-action="wizard-filter-cat" data-cat="'+cat+'">'+cat+'</button>';
        }).join("")+
      '</div>'+
      '<div class="wizard-search-box">'+
        ico("search", 15)+
        '<input type="text" placeholder="搜索模版名称、关键词、ID..." value="'+escapeHtml(wizardState.tplSearchKeyword)+'" data-action="wizard-search-input">'+
      '</div>'+
    '</div>';

    var cards = '<div class="wizard-tpl-grid">'+tpls.map(function(t){
      var isSelected = t.id === wizardState.selectedTemplateId;
      var isUrgent = t.requirement === "限时回执";
      var pillClass = isUrgent ? "reply" : t.requirement === "仅阅读" ? "read" : "reply";
      return '<div class="wizard-tpl-card '+(isSelected?'selected':'')+'" data-action="wizard-select-tpl" data-tpl-id="'+t.id+'">'+
        '<div>'+
          '<div class="wizard-tpl-head">'+
            '<span class="tpl-tag-pill '+pillClass+'">'+(isUrgent?ico("clock-3",12):ico("check-check",12))+' '+t.requirement+'</span>'+
            '<span class="tpl-version-text">'+t.scope+' · '+t.version+'</span>'+
          '</div>'+
          '<div class="wizard-tpl-title">'+escapeHtml(t.name)+'</div>'+
          '<div class="wizard-tpl-code">'+t.id+'</div>'+
          '<div class="wizard-tpl-desc">'+escapeHtml(t.desc)+'</div>'+
        '</div>'+
        '<div>'+
          '<div class="wizard-tpl-meta">'+
            '<span>'+ico("sliders",13)+' 包含字段 <b>'+t.fields.length+' 个</b></span>'+
            '<span style="color:#cbd5e1">|</span>'+
            '<span>'+ico("history",13)+' 累计使用 <b>'+t.usedCount+' 次</b></span>'+
          '</div>'+
          '<div class="wizard-tpl-foot">'+
            '<span class="wizard-tpl-stats">分类：<b>'+t.category+'</b></span>'+
            '<div style="display:flex;gap:6px">'+
              '<button type="button" class="btn light small" data-action="preview-tpl-item" data-tpl-id="'+t.id+'" data-from-wizard="true" style="font-size:12px;padding:3px 10px;font-weight:700;color:#005c58;background:#eef8f7;border-color:#b5e5e2">'+ico("eye",12)+' 预览</button>'+
              '<button type="button" class="btn-choose-tpl" data-action="wizard-choose-and-next" data-tpl-id="'+t.id+'">'+ico("arrow-right",13)+' 选用并下一步</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join("")+'</div>';

    var body = '<div class="wizard-body-step1">'+banner+filterBar+cards+'</div>';
    var foot = '<div class="wizard-foot">'+
      '<span style="font-size:13px;color:#64748b">当前已选：<b style="color:#005c58">'+escapeHtml(curTpl.name)+'</b> ('+curTpl.requirement+')</span>'+
      '<div style="display:flex;gap:10px">'+
        '<button type="button" class="btn" data-close>取消</button>'+
        '<button type="button" class="btn primary" data-action="wizard-next-step" style="font-weight:700">'+ico("arrow-right", 15)+' 下一步：填写信息</button>'+
      '</div>'+
    '</div>';

    return '<div class="wizard-modal-box">'+
      '<div class="wizard-head">'+
        '<div class="wizard-brand-title">'+
          '<span class="wizard-brand-icon">'+ico("send", 15)+'</span>'+
          '<span class="wizard-brand-text">下发指令向导</span>'+
        '</div>'+
        renderIssueStepper()+
        '<button class="close" data-close>'+ico("x", 20)+'</button>'+
      '</div>'+
      body+foot+
    '</div>';
  }

  // 步骤 2：填写信息 (严格复刻图2规范)
  if(curStep === 2){
    var draftBadgeHtml = '';
    if(wizardState.draftId){
      draftBadgeHtml = '<div class="wizard-draft-badge" style="display:inline-flex;align-items:center;gap:6px;background:#f0fdfa;border:1px solid #99f6e4;padding:4px 12px;border-radius:6px;font-size:12.5px">'+
        '<span style="color:#0f766e;font-weight:600;display:inline-flex;align-items:center;gap:4px">'+ico("file-text", 13)+'草稿箱指令ID：</span>'+
        '<span style="font-family:monospace;font-weight:700;color:#005c58;font-size:13px;background:#ffffff;padding:1px 6px;border-radius:4px;border:1px solid #ccfbf1">'+escapeHtml(wizardState.draftId)+'</span>'+
        '<span style="background:#ccfbf1;color:#0d9488;font-size:11px;font-weight:700;padding:1px 5px;border-radius:4px">已暂存</span>'+
      '</div>';
    }

    var topbar = '<div class="wizard-step2-topbar">'+
      '<div class="wizard-cur-tpl-info">'+
        '<span style="font-size:13px;color:#64748b">当前选用模板：</span>'+
        '<span style="font-size:14px;font-weight:800;color:#005c58">'+escapeHtml(curTpl.name)+'</span>'+
        '<span class="tpl-tag-pill '+(curTpl.requirement==="限时回执"?"reply":"read")+'" style="margin-left:4px">'+curTpl.requirement+'</span>'+
      '</div>'+
      draftBadgeHtml+
    '</div>';

    var originBox = '<div class="origin-fetch-box">'+
      '<div class="origin-fetch-top">'+
        '<div class="origin-fetch-title">'+ico("link-2", 17)+'<span>原文内容获取</span></div>'+
        '<div class="origin-fetch-tip">通过原文链接获取内容，并选择填入下发内容中。</div>'+
      '</div>'+
      '<div class="origin-fetch-input-wrap">'+
        '<input class="input origin-fetch-input" data-origin-input placeholder="粘贴原信息链接，获取已采集内容" value="'+escapeHtml(originLinkValue || wizardState.formData.url || "")+'">'+
        '<button type="button" class="btn primary origin-fetch-btn" data-action="parse-origin-link">'+ico("search", 16)+' 解析链接</button>'+
      '</div>'+
      '<div class="origin-analysis-slot">' + originLinkStatusHtml() + '</div>'+
    '</div>';

    var reqStar = '<span style="color:#ef4444;font-weight:700;margin-right:3px">*</span>';

    var deadRaw = wizardState.formData.deadline || "";
    var deadMatch = deadRaw.match(/(\d{4}-\d{2}-\d{2})[\sT](\d{2}:\d{2})/);
    var deadDtLocal = "";
    if (deadMatch) {
      deadDtLocal = deadMatch[1] + "T" + deadMatch[2];
    }

    var timeLimitBlock = '';
    if(isUrgent){
      timeLimitBlock = '<div class="wizard-field-row" style="margin-bottom:0">'+
        '<div class="wizard-field-label">'+reqStar+'<span>限时完成时间</span></div>'+
        '<input class="input" type="datetime-local" data-wizard-field="deadline" value="'+deadDtLocal+'" placeholder="请选择限时完成时间" style="font-family:inherit;color:#0f172a">'+
        '<div class="wizard-quick-times" style="margin-top:6px;display:flex;align-items:center;gap:6px;flex-wrap:wrap">'+
          '<span style="font-size:12px;color:#64748b">按时间推算：</span>'+
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="2">+2小时</span>'+
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="4">+4小时</span>'+
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="8">+8小时</span>'+
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="24">+24小时</span>'+
          '<span class="wizard-time-chip" data-action="quick-deadline" data-hours="48">+48小时</span>'+
        '</div>'+
      '</div>';
    } else if(isReadOnly){
      timeLimitBlock = '<div class="wizard-field-row" style="margin-bottom:0">'+
        '<div class="wizard-field-label"><span>办结 / 查阅要求</span></div>'+
        '<input class="input disabled" value="仅阅读通知：发布即生效，接收人查阅正文后系统自动标记已读，免填回执" disabled style="background:#f8fafc;color:#64748b;cursor:not-allowed">'+
      '</div>';
    } else {
      timeLimitBlock = '<div class="wizard-field-row" style="margin-bottom:0">'+
        '<div class="wizard-field-label"><span>办结 / 查阅要求</span></div>'+
        '<input class="input disabled" value="常规回执要求：无硬性倒计时限制，请在规定时间内完成排查并提报回执" disabled style="background:#f8fafc;color:#64748b;cursor:not-allowed">'+
      '</div>';
    }

    var urgencyOptions = isUrgent ? (
      '<option value="" '+(wizardState.formData.urgency===""?"selected":"")+' disabled>-- 请选择紧急程度 --</option>'+
      '<option value="加急" '+(wizardState.formData.urgency==="加急"?"selected":"")+'>加急（推荐：4小时完成）</option>'+
      '<option value="特急" '+(wizardState.formData.urgency==="特急"?"selected":"")+'>特急（推荐：2小时完成）</option>'+
      '<option value="平急" '+(wizardState.formData.urgency==="平急"?"selected":"")+'>平急（推荐：24小时完成）</option>'
    ) : (
      '<option value="" '+(wizardState.formData.urgency===""?"selected":"")+' disabled>-- 请选择紧急程度 --</option>'+
      '<option value="加急" '+(wizardState.formData.urgency==="加急"?"selected":"")+'>加急</option>'+
      '<option value="特急" '+(wizardState.formData.urgency==="特急"?"selected":"")+'>特急</option>'+
      '<option value="平急" '+(wizardState.formData.urgency==="平急"?"selected":"")+'>平急</option>'
    );

    var formCards = '<div class="wizard-form-box">'+
      '<div class="wizard-form-card-head">'+
        '<div>'+
          '<div class="wizard-form-card-title">'+ico("file-text", 16)+' 基础信息</div>'+
          '<div class="wizard-form-card-sub">设置指令的基础属性、自动关联下发主体与办结时限要求</div>'+
        '</div>'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label">'+reqStar+'<span>指令标题</span></div>'+
        '<input class="input" data-wizard-field="title" placeholder="请输入指令标题" value="'+escapeHtml(wizardState.formData.title || "")+'">'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>下发机构</span></div>'+
          '<input class="input disabled" value="'+escapeHtml(wizardState.formData.org || "台湾省网信办")+'" disabled style="background:#f8fafc;color:#334155;cursor:not-allowed">'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>下发人</span></div>'+
          '<input class="input disabled" value="'+escapeHtml(wizardState.formData.issuer || "武丁")+'" disabled style="background:#f8fafc;color:#334155;cursor:not-allowed">'+
        '</div>'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>业务系统</span></div>'+
          '<input class="input disabled" value="'+escapeHtml(wizardState.formData.system || "全省网络安全与舆情应急联动系统")+'" disabled style="background:#f8fafc;color:#334155;cursor:not-allowed">'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label">'+reqStar+'<span>紧急程度</span></div>'+
          '<select class="select" data-wizard-field="urgency" data-action="wizard-change-urgency">'+
            urgencyOptions+
          '</select>'+
        '</div>'+
      '</div>'+
      timeLimitBlock+
    '</div>'+

    '<div class="wizard-form-box">'+
      '<div class="wizard-form-card-head">'+
        '<div>'+
          '<div class="wizard-form-card-title">'+ico("layers-3", 16)+' 指令下发内容</div>'+
          '<div class="wizard-form-card-sub">录入舆情线索来源、原信息链接及具体处置要求</div>'+
        '</div>'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label">'+reqStar+'<span>舆情来源 / 平台</span></div>'+
          '<input class="input" data-wizard-field="source" placeholder="如：微博、微信公众号、抖音短视频、属地论坛等" value="'+escapeHtml(wizardState.formData.source)+'">'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>原信息 URL 链接</span></div>'+
          '<input class="input" data-wizard-field="url" placeholder="https://..." value="'+escapeHtml(wizardState.formData.url)+'">'+
        '</div>'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label">'+reqStar+'<span>舆情说明 / 处置要求</span></div>'+
        '<textarea class="textarea" data-wizard-field="description" style="height:100px" placeholder="请详细描述舆情事件经过、涉及主体、主要风险点及具体处置要求">'+escapeHtml(wizardState.formData.description)+'</textarea>'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>佐证图片</span></div>'+
          '<div class="upload" style="padding:14px 12px;height:72px"><div>'+ico("image-plus", 18)+'<br><span style="font-size:11px">上传现场图片 (PNG/JPG)</span></div></div>'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label"><span>附件文件</span></div>'+
          '<div class="upload" style="padding:14px 12px;height:72px"><div>'+ico("file-up", 18)+'<br><span style="font-size:11px">上传排查采样包/文档 (DOC/ZIP)</span></div></div>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '<div class="wizard-form-box" style="background:#f8fafc;border:1px dashed #cbd5e1">'+
      '<div class="wizard-form-card-head" style="border-bottom:1px solid #e2e8f0;margin-bottom:14px;padding-bottom:10px">'+
        '<div style="display:flex;align-items:center;justify-content:space-between;width:100%">'+
          '<div>'+
            '<div class="wizard-form-card-title" style="color:#64748b">'+ico("check-square", 16)+' '+(isUrgent ? '限时回执内容' : isReadOnly ? '阅读要求内容' : '指令回执内容')+'（预设填报规范）</div>'+
            '<div class="wizard-form-card-sub" style="color:#94a3b8">以下为接收单位/责任人办结时需提交的回执格式，此处仅供发起人查阅预设样式</div>'+
          '</div>'+
          '<span class="tpl-tag-pill read" style="background:#e2e8f0;color:#64748b;border:none">'+ico("eye", 12)+' 发起人只读预览</span>'+
        '</div>'+
      '</div>'+
      '<div class="wizard-field-row">'+
        '<div class="wizard-field-label" style="color:#64748b"><span style="color:#94a3b8;margin-right:3px">*</span><span>处理结果说明 / 处置报告</span></div>'+
        '<textarea class="textarea disabled" disabled style="height:72px;background:#f1f5f9;color:#94a3b8;cursor:not-allowed;border-color:#e2e8f0" placeholder="责任部门完成舆情处置与核查后，在此录入具体处置情况、研判结论与回复意见..."></textarea>'+
      '</div>'+
      '<div class="grid-2" style="gap:16px">'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label" style="color:#64748b"><span>处置佐证图片</span></div>'+
          '<div class="upload disabled" style="padding:12px;height:66px;background:#f1f5f9;border:1px dashed #cbd5e1;cursor:not-allowed;display:flex;align-items:center;justify-content:center;text-align:center">'+
            '<div style="color:#94a3b8;font-size:12px">'+ico("image", 18)+'<br><span>接收人上传现场图片/截图 (只读)</span></div>'+
          '</div>'+
        '</div>'+
        '<div class="wizard-field-row">'+
          '<div class="wizard-field-label" style="color:#64748b"><span>处置附件 / 盖章报告</span></div>'+
          '<div class="upload disabled" style="padding:12px;height:66px;background:#f1f5f9;border:1px dashed #cbd5e1;cursor:not-allowed;display:flex;align-items:center;justify-content:center;text-align:center">'+
            '<div style="color:#94a3b8;font-size:12px">'+ico("file-text", 18)+'<br><span>接收人上传盖章材料/文档 (只读)</span></div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';

    var body = '<div class="wizard-step2-scroll">'+originBox+formCards+'</div>';
    var foot = '<div class="wizard-foot">'+
      '<button type="button" class="btn light" data-action="wizard-goto-step" data-step="1">'+ico("arrow-left", 14)+' 上一步：重选模板</button>'+
      '<div style="display:flex;gap:10px">'+
        '<button type="button" class="btn" data-close>取消</button>'+
        '<button type="button" class="btn light" data-action="wizard-save-draft" style="font-weight:600">'+ico("save", 14)+' 暂存</button>'+
        '<button type="button" class="btn primary" data-action="wizard-next-step" style="font-weight:700">'+ico("arrow-right", 15)+' 下一步：选择接收人</button>'+
      '</div>'+
    '</div>';

    return '<div class="wizard-modal-box">'+
      '<div class="wizard-head">'+
        '<div class="wizard-brand-title">'+
          '<span class="wizard-brand-icon">'+ico("send", 15)+'</span>'+
          '<span class="wizard-brand-text">下发指令向导</span>'+
        '</div>'+
        renderIssueStepper()+
        '<button class="close" data-close>'+ico("x", 20)+'</button>'+
      '</div>'+
      topbar+body+foot+
    '</div>';
  }

  // 步骤 3：选择接收人 (按机构 / 按分组 / 按角色 / 单个人员)
  if(curStep === 3){
    var activeDim = wizardState.recipientDimTab || "org";

    var dimTabs = '<div class="wizard-rec-dim-tabs">'+
      '<button type="button" class="wizard-rec-tab-btn '+(activeDim==="org"?"active":"")+'" data-action="wizard-rec-dim" data-dim="org">'+ico("building-2", 15)+' 按机构组织</button>'+
      '<button type="button" class="wizard-rec-tab-btn '+(activeDim==="group"?"active":"")+'" data-action="wizard-rec-dim" data-dim="group">'+ico("users-round", 15)+' 按业务分组</button>'+
      '<button type="button" class="wizard-rec-tab-btn '+(activeDim==="role"?"active":"")+'" data-action="wizard-rec-dim" data-dim="role">'+ico("shield-check", 15)+' 按岗位角色</button>'+
      '<button type="button" class="wizard-rec-tab-btn '+(activeDim==="person"?"active":"")+'" data-action="wizard-rec-dim" data-dim="person">'+ico("user", 15)+' 经办人员</button>'+
    '</div>';

    var leftContent = renderWizardRecipientLeftContent(false);

    var selectedEntries = Object.keys(wizardState.selectedRecipients);
    var selectedCards = '<div class="wizard-rec-selected-list">'+
      (selectedEntries.length ? selectedEntries.map(function(name){
        var item = wizardState.selectedRecipients[name];
        return '<div class="selected-rec-chip">'+
          '<div style="display:flex;align-items:center;gap:6px;min-width:0">'+
            '<span style="background:#e0f2fe;color:#0369a1;padding:1px 5px;border-radius:3px;font-size:11px;font-weight:700">'+item.type+'</span>'+
            '<span style="font-weight:700;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+escapeHtml(name)+'</span>'+
          '</div>'+
          '<button type="button" class="selected-rec-del" data-action="wizard-remove-recipient" data-name="'+name+'" title="移除">'+ico("x", 14)+'</button>'+
        '</div>';
      }).join("") : '<div style="text-align:center;color:#94a3b8;padding:60px 0">'+ico("user-x", 36)+'<p style="margin-top:8px;font-size:13px">请从左侧多维度选择接收人</p></div>')+
    '</div>';

    var rightPanel = '<div class="wizard-rec-right">'+
      '<div class="wizard-rec-right-head">'+
        '<span class="wizard-rec-right-title">'+ico("check-square", 16)+' 已选接收对象 (<b>'+selectedEntries.length+'</b>)</span>'+
        '<button type="button" class="wizard-rec-clear-btn" data-action="wizard-clear-recipients">清空全部</button>'+
      '</div>'+
      selectedCards+
      '<div class="wizard-rec-right-foot">'+
        '<div><span>指令下发后将同步通知所选对象的协同待办列表。</span></div>'+
      '</div>'+
    '</div>';

    var body = '<div class="wizard-recipient-wrap" style="padding:0">'+
      '<div class="wizard-rec-left" style="padding:0;display:flex;flex-direction:column">'+dimTabs+leftContent+'</div>'+
      rightPanel+
    '</div>';

    var foot = '<div class="wizard-foot">'+
      '<button type="button" class="btn light" data-action="wizard-goto-step" data-step="2">'+ico("arrow-left", 14)+' 上一步：修改字段信息</button>'+
      '<div style="display:flex;gap:10px">'+
        '<button type="button" class="btn" data-close>取消</button>'+
        '<button type="button" class="btn primary" data-action="wizard-next-step" style="font-weight:700" '+(selectedEntries.length===0?'disabled':'')+'>'+ico("arrow-right", 15)+' 下一步：核对并执行发送</button>'+
      '</div>'+
    '</div>';

    return '<div class="wizard-modal-box">'+
      '<div class="wizard-head">'+
        '<div class="wizard-brand-title">'+
          '<span class="wizard-brand-icon">'+ico("send", 15)+'</span>'+
          '<span class="wizard-brand-text">下发指令向导</span>'+
        '</div>'+
        renderIssueStepper()+
        '<button class="close" data-close>'+ico("x", 20)+'</button>'+
      '</div>'+
      body+foot+
    '</div>';
  }

  // 步骤 4：核对并执行发送
  if(curStep === 4){
    var recList = Object.keys(wizardState.selectedRecipients);
    var body = '<div class="wizard-step4-wrap">'+
      '<div class="wizard-confirm-card">'+
        '<div class="wizard-confirm-title">'+ico("shield-alert", 20)+' 确认下发指令信息摘要</div>'+
        '<div class="wizard-confirm-grid">'+
          '<div class="confirm-kv"><b>指令标题：</b>'+escapeHtml(wizardState.formData.title)+'</div>'+
          '<div class="confirm-kv"><b>使用模板：</b>'+escapeHtml(curTpl.name)+' ('+curTpl.requirement+')</div>'+
          '<div class="confirm-kv"><b>紧急程度：</b><span class="tag '+(wizardState.formData.urgency==="特急"?"urgent":"returned")+'">'+wizardState.formData.urgency+'</span></div>'+
          '<div class="confirm-kv"><b>办结时限：</b>'+(curTpl.requirement==="限时回执"?wizardState.formData.deadline:"无硬性倒计时")+'</div>'+
          '<div class="confirm-kv"><b>舆情来源：</b>'+escapeHtml(wizardState.formData.source)+'</div>'+
          '<div class="confirm-kv"><b>信息链接：</b><span style="color:#0284c7">'+(wizardState.formData.url || "无")+'</span></div>'+
        '</div>'+
        '<div class="confirm-kv" style="margin-bottom:12px"><b>舆情说明及处置要求：</b><div style="background:#f8fafc;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;margin-top:4px;line-height:1.6">'+escapeHtml(wizardState.formData.description)+'</div></div>'+
        '<div class="confirm-kv"><b>指定接收对象 (共 '+recList.length+' 项)：</b>'+
          '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">'+
            recList.map(function(name){
              var r = wizardState.selectedRecipients[name];
              return '<span style="background:#e0f5f4;color:#005c58;border:1px solid #a3e2de;padding:3px 8px;border-radius:4px;font-size:12px;font-weight:700">['+r.type+'] '+escapeHtml(name)+'</span>';
            }).join("")+
          '</div>'+
        '</div>'+
      '</div>'+
      '<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:12px 16px;color:#1d4ed8;font-size:13px;display:flex;align-items:center;gap:10px">'+
        ico("info", 18)+
        '<span>点击【立即执行发送】后，系统将自动生成全局唯一的指令ID，并将工单路由推送至相关人员的待处理列表中。</span>'+
      '</div>'+
    '</div>';

    var foot = '<div class="wizard-foot">'+
      '<button type="button" class="btn light" data-action="wizard-goto-step" data-step="3">'+ico("arrow-left", 14)+' 上一步：调整接收人</button>'+
      '<div style="display:flex;gap:10px">'+
        '<button type="button" class="btn" data-close>取消</button>'+
        '<button type="button" class="btn primary" data-action="wizard-execute-send" style="padding:0 24px;font-weight:800;background:linear-gradient(135deg, #005c58, #009893)">'+ico("send", 15)+' 立即执行发送</button>'+
      '</div>'+
    '</div>';

    return '<div class="wizard-modal-box">'+
      '<div class="wizard-head">'+
        '<div class="wizard-brand-title">'+
          '<span class="wizard-brand-icon">'+ico("send", 15)+'</span>'+
          '<span class="wizard-brand-text">下发指令向导</span>'+
        '</div>'+
        renderIssueStepper()+
        '<button class="close" data-close>'+ico("x", 20)+'</button>'+
      '</div>'+
      body+foot+
    '</div>';
  }

  // 步骤 5：发送成功页面 (全景反馈)
  if(curStep === 5){
    var newId = wizardState.lastIssuedId || "YQCZ1924020260831102000";
    var recCount = Object.keys(wizardState.selectedRecipients).length;
    var body = '<div class="wizard-success-panel">'+
      '<div class="success-badge-circle">'+ico("check", 38)+'</div>'+
      '<div class="wizard-success-title">指令已成功下发！</div>'+
      '<div class="wizard-success-sub">指令信息已完成校验并生成全局唯一流水号，系统已自动派发至 <b>'+recCount+' 个接收对象</b> 的待办列表中，责任部门将按时限回执反馈。</div>'+
      '<div class="wizard-success-code-box">'+
        '<span>指令流转 ID：</span>'+
        '<span style="color:#005c58">'+newId+'</span>'+
        '<button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="'+newId+'" title="复制ID" style="margin-left:6px">'+ico("copy", 14)+'</button>'+
      '</div>'+
      '<div class="wizard-success-actions">'+
        '<button type="button" class="btn light" data-action="wizard-view-created-detail" data-key="issue-new-'+newId+'" style="padding:0 20px">'+ico("eye", 15)+' 查看该指令详情</button>'+
        '<button type="button" class="btn primary" data-action="wizard-issue-another" style="padding:0 24px;font-weight:700">'+ico("plus", 15)+' 继续下发下一条指令</button>'+
        '<button type="button" class="btn" data-close style="padding:0 20px">完成并返回列表</button>'+
      '</div>'+
    '</div>';

    return '<div class="wizard-modal-box" style="width:780px">'+
      '<div class="wizard-head">'+
        '<div class="wizard-brand-title">'+
          '<span class="wizard-brand-icon">'+ico("send", 15)+'</span>'+
          '<span class="wizard-brand-text">下发成功</span>'+
        '</div>'+
        renderIssueStepper()+
        '<button class="close" data-close>'+ico("x", 20)+'</button>'+
      '</div>'+
      body+
    '</div>';
  }

  return '<div></div>';
}

function issueModal(){
  return renderIssueWizard();
}

function originPreviewModal(){
  var count=getOriginSelectedCount();
  var tableBody='<tbody>'+
    '<tr><td class="num">1</td><td class="field-name">标题</td><td class="content-cell">小区雨后积水引发居民关注（演示）</td><td><select class="select origin-fill-select" data-origin-field="title"><option value="">未填入</option><option value="title" '+(originSelectedMappings.title==="title"?"selected":"")+'>指令标题</option><option value="desc" '+(originSelectedMappings.title==="desc"?"selected":"")+'>舆情说明</option><option value="note" '+(originSelectedMappings.title==="note"?"selected":"")+'>备注</option></select></td></tr>'+
    '<tr><td class="num">2</td><td class="field-name">来源</td><td class="content-cell">微博</td><td><select class="select origin-fill-select" data-origin-field="source"><option value="">未填入</option><option value="source" '+(originSelectedMappings.source==="source"?"selected":"")+'>舆情来源</option><option value="note" '+(originSelectedMappings.source==="note"?"selected":"")+'>备注</option></select></td></tr>'+
    '<tr><td class="num">3</td><td class="field-name">作者</td><td class="content-cell">市民观察（演示账号）</td><td><select class="select origin-fill-select" data-origin-field="author"><option value="">未填入</option><option value="note" '+(originSelectedMappings.author==="note"?"selected":"")+'>备注</option><option value="desc" '+(originSelectedMappings.author==="desc"?"selected":"")+'>舆情说明</option></select></td></tr>'+
    '<tr><td class="num">4</td><td class="field-name">IP属地</td><td class="content-cell">-</td><td><select class="select origin-fill-select disabled" data-origin-field="ip" disabled style="background:#f5f7f8;color:#9aa5ad"><option value="">未填入</option></select></td></tr>'+
    '<tr><td class="num">5</td><td class="field-name">调性</td><td class="content-cell">-</td><td><select class="select origin-fill-select disabled" data-origin-field="sentiment" disabled style="background:#f5f7f8;color:#9aa5ad"><option value="">未填入</option></select></td></tr>'+
    '<tr><td class="num">6</td><td class="field-name">时间</td><td class="content-cell">2026-08-31 09:20:00</td><td><select class="select origin-fill-select" data-origin-field="time"><option value="">未填入</option><option value="deadline" '+(originSelectedMappings.time==="deadline"?"selected":"")+'>限时时间</option><option value="note" '+(originSelectedMappings.time==="note"?"selected":"")+'>备注</option></select></td></tr>'+
    '<tr><td class="num">7</td><td class="field-name">正文</td><td class="content-cell">【模拟采集内容】有网友反映，连续降雨后，某小区出入口出现积水，影响居民通行。帖文附有现场情况说明，并询问排水设施维护进展。目前已有用户转发并补充附近路段的情况。以上文字仅用于演示原信息填入，不对应真实新闻。</td><td><select class="select origin-fill-select" data-origin-field="content"><option value="">未填入</option><option value="desc" '+(originSelectedMappings.content==="desc"?"selected":"")+'>舆情说明</option><option value="note" '+(originSelectedMappings.content==="note"?"selected":"")+'>备注</option><option value="title" '+(originSelectedMappings.content==="title"?"selected":"")+'>指令标题</option></select></td></tr>'+
    '</tbody>';
  return '<div class="modal origin-preview-modal"><div class="modal-head"><span>原信息预览与填入</span><button class="close" data-action="close-origin-preview">'+ico("x",22)+'</button></div><div class="origin-preview-banner"><span>当前模板：<b>'+escapeHtml(getTemplateById(wizardState.selectedTemplateId).name)+'</b></span><span class="origin-preview-switch-tip">如需切换模板，请先关闭本弹窗</span></div><div class="modal-body" style="padding-top:10px"><table class="origin-preview-table"><thead><tr><th style="width:60px;text-align:center">序号</th><th style="width:90px">字段</th><th>内容</th><th style="width:200px">填充选择</th></tr></thead>'+tableBody+'</table></div><div class="modal-foot" style="justify-content:space-between"><span data-origin-selected-count style="font-size:14px;color:#5a6873">已选择填入字段 '+count+' 项</span><div><button class="btn" data-action="close-origin-preview">取消</button> <button class="btn primary" data-action="confirm-origin-fill">确认填入</button></div></div></div>'
}
function recipientModal(){
  var kind="internal",d=recipientDirectory[kind];
  var body='<div class="recipient-search"><input class="input" maxlength="100" data-recipient-search placeholder="请输入人员姓名"><span class="recipient-search-count"><span data-recipient-count>0</span> / 100</span></div><div class="choose-layout" style="margin-top:18px" data-recipient-root data-kind="internal"><div class="choose-left"><div class="choose-tabs"><button class="choose-tab active" data-recipient-tab="internal">内部用户</button><button class="choose-tab" data-recipient-tab="external">外部联系人</button><span style="margin-left:auto" class="link">'+ico("refresh-cw",14)+' 刷新</span></div><div class="notice-strip" data-recipient-notice>'+d.notice+'</div><div class="chooser"><div class="chooser-groups" data-recipient-groups>'+recipientGroupsMarkup(kind)+'</div><div class="people-list" data-recipient-people>'+recipientPeopleMarkup(kind)+'</div></div></div><div class="selected-pane"><div class="selected-head"><b>已选择</b><span data-recipient-clear>清空列表</span></div><div data-recipient-selected></div></div></div>';
  return '<div class="modal wide"><div class="modal-head"><span>选择接收人</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body">'+body+'</div><div class="modal-foot" style="justify-content:space-between"><button class="btn light" data-open="invite">邀请联系人</button><div><button class="btn" data-recipient-cancel>取消</button> <button class="btn primary" data-recipient-submit>提交</button></div></div></div>'
}
function userEditModal(){
  var body='<div class="field"><div class="field-label required">分组名称</div><div class="user-cell"><span class="mini-avatar">吴</span><div><b>吴鑫</b><small>昵称：·</small></div></div></div><div class="field"><div class="field-label required">指令类别</div><div class="checkline" style="padding-top:10px"><label class="option-check" data-check-option><span class="fake-check on">✓</span><b class="link">舆情处置</b></label><label class="option-check" data-check-option><span class="fake-check on">✓</span><b class="link">错误表述</b></label></div></div><div class="field"><div class="field-label required">数据权限</div><div><div class="radio-line" data-permission-group><label class="radio-option" data-permission-radio="机构全部"><span class="radio"></span><span>机构全部</span></label><label class="radio-option" data-permission-radio="所属分组"><span class="radio"></span><span>所属分组</span></label><label class="radio-option" data-permission-radio="指定分组"><span class="radio on"></span><span>指定分组</span></label><label class="radio-option" data-permission-radio="仅个人"><span class="radio"></span><span>仅个人</span></label></div><div class="permission-grid" data-permission-grid><label data-check-option><span class="fake-check on">✓</span><b>台湾省网信办</b></label><label data-check-option><span class="fake-check"></span><b>R&amp;D</b></label><label data-check-option><span class="fake-check"></span><b>SD</b></label><label data-check-option><span class="fake-check"></span><b>舆情科</b></label><label data-check-option><span class="fake-check"></span><b>综合科</b></label></div></div></div>';
  return modalFrame("编辑",body,"wide")
}
function extBatchEditModal(){
  var n = selectedExtIds().length;
  var groups = flattenExtGroups();
  var opts = groups.map(function(g){
    return '<option value="'+g.id+'">'+escapeHtml(g.name)+'</option>';
  }).join("");
  var body = '<p class="ext-confirm-copy" style="margin-bottom:16px">已选择 <b>'+n+'</b> 名联系人，可统一调整所属分组。</p>' +
    '<div class="ext-field"><label class="ext-field-label required">所属分组</label><select class="select" id="ext-batch-group">'+opts+'</select></div>';
  return '<div class="modal ext-modal"><div class="modal-head"><span>批量编辑</span><button class="close" data-close>'+ico("x",18)+'</button></div><div class="modal-body">'+body+'</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-action="confirm-ext-batch-save">保存</button></div></div>';
}
function extBatchDeleteModal(){
  var n = selectedExtIds().length;
  return extConfirmModal("确认批量删除？", "即将删除已选的 "+n+" 名联系人，删除后不可恢复。", "confirm-ext-batch-delete");
}
function contactEditModal(){
  var c = extContacts.filter(function(x){ return x.id === state.extEditingId; })[0] || extContacts[0] || { name:"", groupId: extUngroupedId };
  var groups = flattenExtGroups();
  var opts = groups.map(function(g){
    return '<option value="'+g.id+'" '+(g.id===c.groupId?"selected":"")+'>'+escapeHtml(g.name)+'</option>';
  }).join("");
  var body='<div class="ext-edit-profile">'+extAvatarHtml(c)+'<div><div class="ext-edit-name">'+escapeHtml(c.name)+'</div><div class="ext-edit-sub">仅可修改真实姓名与所属分组</div></div></div>' +
    '<div class="ext-field"><label class="ext-field-label required">真实姓名</label><input class="input" id="ext-edit-name" maxlength="20" value="'+escapeHtml(c.name||"")+'" placeholder="请输入真实姓名"></div>' +
    '<div class="ext-field"><label class="ext-field-label required">所属分组</label><select class="select" id="ext-edit-group">'+opts+'</select></div>';
  return '<div class="modal ext-modal"><div class="modal-head"><span>编辑联系人</span><button class="close" data-close>'+ico("x",18)+'</button></div><div class="modal-body">'+body+'</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-action="confirm-ext-contact-save">保存</button></div></div>';
}
function extConfirmModal(title, copy, confirmAction){
  return '<div class="modal ext-modal ext-confirm-modal"><div class="modal-head"><div class="ext-confirm-heading"><span class="ext-confirm-icon">'+ico("alert-triangle",16)+'</span><span>'+title+'</span></div><button class="close" data-close>'+ico("x",18)+'</button></div><div class="modal-body"><p class="ext-confirm-copy">'+copy+'</p></div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn danger" data-action="'+confirmAction+'">确定删除</button></div></div>';
}
function extDeleteGroupModal(){
  var g = findExtGroup(state.extPendingDeleteGroupId) || { name:"该组织", id: state.extPendingDeleteGroupId };
  var n = countExtContactsInGroup(g.id, false);
  return extConfirmModal("确认删除组织？", "即将删除「"+escapeHtml(g.name)+"」。该组织下 "+n+" 名联系人将移至「未分组」，删除后不可恢复。", "confirm-ext-delete-group");
}
function extDeleteContactModal(){
  var c = extContacts.filter(function(x){ return x.id === state.extPendingDeleteContactId; })[0] || { name:"该联系人" };
  return extConfirmModal("确认删除联系人？", "即将删除「"+escapeHtml(c.name)+"」。删除后不可恢复，请确认后再操作。", "confirm-ext-delete-contact");
}
function applyExtGroupDelete(gid){
  var target = findExtGroup(gid);
  if(!target) return;
  if(target.children && target.children.length){
    showToast("请先删除子组织");
    return;
  }
  var parent = findExtGroupParent(gid);
  var list = parent && parent !== false ? parent.children : extGroupTree;
  for(var gi=0; gi<list.length; gi++){
    if(list[gi].id === gid){ list.splice(gi, 1); break; }
  }
  extContacts.forEach(function(c){ if(c.groupId === gid) c.groupId = extUngroupedId; });
  if(state.extGroupId === gid) state.extGroupId = "all";
  state.extPendingDeleteGroupId = null;
  showToast("已删除组织");
}
var inviteState = {
  tab: "qr",
  orgId: "",
  qrLimit: 100,
  qrCustom: "100",
  qrExpire: "2026-12-31T23:59",
  qrGenerated: false,
  batchName: "",
  codeQty: 10,
  codeExpire: "2026-12-31T23:59",
  codeFilter: "all",
  codes: [
    { id: "SB-2026-8A91F", status: "expired", org: "教育厅/高教组", role: "上报员", expire: "2026-09-30 23:59" },
    { id: "SB-2026-3B22C", status: "used", name: "周敏", phone: "139****6621", org: "教育厅/高教组", role: "上报员", expire: "2026-09-30 23:59" },
    { id: "SB-2026-7C11D", status: "expired", org: "教育厅/高教组", role: "上报员", expire: "2026-09-30 23:59" },
    { id: "SB-2026-9E40E", status: "expired", org: "教育厅/高教组", role: "上报员", expire: "2026-09-30 23:59" },
    { id: "SB-2026-HX91A", status: "expired", org: "教育厅/高教组", role: "上报员", expire: "2026-09-30 23:59" }
  ]
};
function ensureInviteState(){
  if(!inviteState.orgId){
    var gid = state.extGroupId;
    if(gid && gid !== "all" && (findExtGroup(gid) || gid === extUngroupedId)) inviteState.orgId = gid;
    else inviteState.orgId = (extGroupTree[0] && extGroupTree[0].id) || extUngroupedId;
  }
}
function inviteOrgOptions(){
  var html = "";
  function walk(nodes, depth){
    (nodes || []).forEach(function(n){
      var pad = depth ? new Array(depth + 1).join("　") : "";
      html += '<option value="'+n.id+'"'+(inviteState.orgId===n.id?" selected":"")+'>'+pad+escapeHtml(n.name)+'</option>';
      if(n.children && n.children.length) walk(n.children, depth + 1);
    });
  }
  walk(extGroupTree, 0);
  html += '<option value="'+extUngroupedId+'"'+(inviteState.orgId===extUngroupedId?" selected":"")+'>未分组</option>';
  return html;
}
function inviteOrgName(){
  if(inviteState.orgId === extUngroupedId) return "未分组";
  var n = findExtGroup(inviteState.orgId);
  return n ? n.name : "教育厅";
}
function formatInviteExpire(v){
  return String(v || "").replace("T", " ");
}
function copyInviteText(text, okMsg){
  var msg = okMsg || "已复制";
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){ showToast(msg); }).catch(function(){ showToast(msg); });
  } else {
    showToast(msg);
  }
}
function syncInviteFormFromDom(root){
  if(!root) return;
  var org = root.querySelector("[data-invite-org]");
  if(org) inviteState.orgId = org.value;
  var custom = root.querySelector("[data-invite-custom]");
  if(custom){
    inviteState.qrCustom = custom.value;
    var n = parseInt(custom.value, 10);
    if(n > 0) inviteState.qrLimit = n;
  }
  var qrExp = root.querySelector("[data-invite-qr-expire]");
  if(qrExp) inviteState.qrExpire = qrExp.value;
  var batch = root.querySelector("[data-invite-batch-name]");
  if(batch) inviteState.batchName = batch.value;
  var codeExp = root.querySelector("[data-invite-code-expire]");
  if(codeExp) inviteState.codeExpire = codeExp.value;
}
function makeInviteCode(){
  var chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  var s = "";
  for(var i=0;i<5;i++) s += chars.charAt(Math.floor(Math.random()*chars.length));
  return "SB-2026-" + s;
}
function inviteCodeStatus(c){
  if(c.status === "expired" || c.status === "used" || c.status === "unused") return c.status;
  if(c.used) return "used";
  var exp = String(c.expire || "").replace("T", " ");
  if(exp && new Date(exp.replace(/-/g, "/")) < new Date("2026-10-11T00:00:00")) return "expired";
  return "unused";
}
function inviteQrPane(){
  var limits = [10, 50, 100, 200, 500];
  var chips = limits.map(function(n){
    return '<button type="button" class="invite-chip'+(inviteState.qrLimit===n?" on":"")+'" data-action="invite-limit" data-limit="'+n+'">'+n+'人</button>';
  }).join("");
  var orgName = inviteOrgName();
  var rightHtml = inviteState.qrGenerated
    ? ('<div class="invite-live-title">'+ico("sparkles",14)+' 专属扫码加入卡片</div>' +
      '<div class="invite-qr-card">' +
        '<span class="invite-qr-org">'+escapeHtml(orgName)+'</span>' +
        '<div class="sub">微信扫码 · 自动入队绑定</div>' +
        '<div class="invite-qr-box"><span class="invite-qr-finder tl"></span><span class="invite-qr-finder tr"></span><span class="invite-qr-finder bl"></span><span class="invite-qr-center"><img src="./brand-logo.png" alt="正管用"></span></div>' +
        '<div class="invite-qr-meta">上限人数：<b data-invite-limit-label>'+inviteState.qrLimit+'</b> 人<br>截止：'+escapeHtml(formatInviteExpire(inviteState.qrExpire))+'</div>' +
      '</div>' +
      '<div class="invite-qr-actions">' +
        '<button type="button" class="btn primary" data-action="invite-download-qr">'+ico("download",14)+' 下载图片</button>' +
        '<button type="button" class="btn light" data-action="invite-copy-link">'+ico("link",14)+' 复制链接</button>' +
      '</div>')
    : '<div class="invite-qr-empty"><div class="invite-qr-empty-icon">'+ico("qr-code",28)+'</div><p>请完善左侧三个字段后，点击「生成二维码和链接」</p></div>';
  return '<div class="invite-split">' +
    '<div class="invite-pane qr-left">' +
      '<div class="invite-field"><label class="invite-field-label">所在组织节点</label><select class="select" data-invite-org>'+inviteOrgOptions()+'</select></div>' +
      '<div class="invite-field"><label class="invite-field-label">扫码上限额度<span class="hint">当前 '+inviteState.qrLimit+' 人</span></label><div class="invite-chips">'+chips+'</div><div class="invite-custom">自定义名额 <input class="input" data-invite-custom value="'+escapeHtml(String(inviteState.qrCustom))+'" maxlength="5"> 人</div></div>' +
      '<div class="invite-field"><label class="invite-field-label">二维码有效时间</label><input class="input" type="datetime-local" data-invite-qr-expire value="'+escapeHtml(inviteState.qrExpire)+'"></div>' +
      '<button type="button" class="invite-gen-qr-btn" data-action="invite-gen-qr">'+ico("qr-code",16)+' 生成二维码和链接</button>' +
    '</div>' +
    '<div class="invite-pane qr-right">'+rightHtml+'</div>' +
  '</div>';
}
function inviteCodePane(){
  var qtys = [5, 10, 20, 50];
  var chips = qtys.map(function(n){
    return '<button type="button" class="invite-chip'+(inviteState.codeQty===n?" on-orange":"")+'" data-action="invite-code-qty" data-qty="'+n+'">'+n+'个</button>';
  }).join("");
  var all = inviteState.codes || [];
  var unusedN = all.filter(function(c){ return inviteCodeStatus(c) === "unused"; }).length;
  var filter = inviteState.codeFilter || "all";
  var shown = all.filter(function(c){
    if(filter === "all") return true;
    return inviteCodeStatus(c) === filter;
  });
  var list = shown.map(function(c, i){
    var st = inviteCodeStatus(c);
    var badge = st === "used"
      ? '<span class="invite-code-used-inline">已使用：'+escapeHtml(c.name||"")+' ('+escapeHtml(c.phone||"")+')</span>'
      : (st === "expired"
        ? '<span class="invite-code-tag expired">已过期</span>'
        : '<span class="invite-code-tag unused">未使用</span>');
    var meta = '教育厅/高教组 · 至 ' + escapeHtml(c.expire || formatInviteExpire(inviteState.codeExpire));
    return '<div class="invite-code-item '+st+'"><span class="idx">'+(i+1)+'.</span><div class="invite-code-body"><div class="invite-code-line">'+
      '<span class="code">'+escapeHtml(c.id)+'</span>'+badge+
      '</div><div class="invite-code-meta">'+meta+'</div></div></div>';
  }).join("");
  if(!shown.length) list = '<div class="invite-code-empty">当前筛选下暂无激活码</div>';
  var tabs = [["all","全部"],["unused","未使用"],["used","已使用"],["expired","已过期"]].map(function(t){
    return '<button type="button" class="invite-code-tab'+(filter===t[0]?" on":"")+'" data-action="invite-code-filter" data-filter="'+t[0]+'">'+t[1]+'</button>';
  }).join("");
  return '<div class="invite-split">' +
    '<div class="invite-pane code-left">' +
      '<div class="invite-field"><label class="invite-field-label">所在组织节点</label><select class="select" data-invite-org>'+inviteOrgOptions()+'</select></div>' +
      '<div class="invite-field"><label class="invite-field-label">邀请批次名称</label><input class="input" data-invite-batch-name maxlength="40" value="'+escapeHtml(inviteState.batchName)+'" placeholder="请输入邀请批次名称"></div>' +
      '<div class="invite-field"><label class="invite-field-label">单次生成数量</label><div class="invite-chips">'+chips+'</div></div>' +
      '<div class="invite-field"><label class="invite-field-label">有效期至</label><input class="input" type="datetime-local" data-invite-code-expire value="'+escapeHtml(inviteState.codeExpire)+'"></div>' +
      '<button type="button" class="invite-gen-btn" data-action="invite-gen-codes">'+ico("refresh-cw",14)+' 生成激活码批次</button>' +
    '</div>' +
    '<div class="invite-pane code-right">' +
      '<div class="invite-code-head"><div><b>激活码列表</b><span class="count">(共 '+all.length+' 条，未使用 '+unusedN+')</span></div>' +
        '<div class="invite-code-tools">' +
          '<button type="button" class="btn invite-copy-unused-btn" data-action="invite-copy-unused">'+ico("copy",13)+' 一键复制未用码</button>' +
          '<button type="button" class="btn" data-action="invite-export">'+ico("download",13)+' 导出表格</button>' +
        '</div>' +
      '</div>' +
      '<div class="invite-code-tabs">'+tabs+'</div>' +
      '<div class="invite-code-list">'+list+'</div>' +
      '<div class="invite-code-note">激活码规则为一码一人。用户在登录/注册时选择「激活码绑定」，输入任意未过期激活码后，将自动归属该码绑定的机构与角色。</div>' +
    '</div>' +
  '</div>';
}
function inviteModal(){
  ensureInviteState();
  var isQr = inviteState.tab !== "code";
  var tabs = '<div class="invite-tabs">' +
    '<button type="button" class="invite-tab'+(isQr?" on-qr":"")+'" data-action="invite-tab" data-tab="qr">' +
      '<span class="invite-tab-icon">'+ico("qr-code",18)+'</span><span><b>二维码邀请'+(isQr?" ·":"")+'</b><small>线下面对面扫码 / 微信群公开加入</small></span>' +
    '</button>' +
    '<button type="button" class="invite-tab'+(!isQr?" on-code":"")+'" data-action="invite-tab" data-tab="code">' +
      '<span class="invite-tab-icon">'+ico("key-round",18)+'</span><span><b>激活码邀请'+(!isQr?" ·":"")+'</b><small>批量发放专属密钥 / 离线核验注册</small></span>' +
    '</button>' +
  '</div>';
  var body = tabs + (isQr ? inviteQrPane() : inviteCodePane());
  return '<div class="modal invite-modal">' +
    '<div class="modal-head"><div class="invite-head-main"><span class="invite-head-icon">'+ico("user-plus",18)+'</span><div class="invite-head-copy"><h3>邀请联系人</h3><p>台湾省网信办 · '+escapeHtml(currentUser)+' 邀请外部联系人加入「'+escapeHtml(inviteOrgName())+'」</p></div></div><button class="close" data-close>'+ico("x",18)+'</button></div>' +
    '<div class="modal-body">'+body+'</div>' +
    '<div class="modal-foot"><button class="btn" data-close>关闭</button></div>' +
  '</div>';
}
function handleInviteAction(a, el, root){
  if(a==="invite-tab"){
    syncInviteFormFromDom(root);
    inviteState.tab = el.dataset.tab === "code" ? "code" : "qr";
    openModal("invite");
    return true;
  }
  if(a==="invite-limit"){
    syncInviteFormFromDom(root);
    inviteState.qrLimit = Number(el.dataset.limit) || 100;
    inviteState.qrCustom = String(inviteState.qrLimit);
    openModal("invite");
    return true;
  }
  if(a==="invite-code-qty"){
    syncInviteFormFromDom(root);
    inviteState.codeQty = Number(el.dataset.qty) || 10;
    openModal("invite");
    return true;
  }
  if(a==="invite-gen-qr"){
    syncInviteFormFromDom(root);
    if(!inviteState.orgId){ showToast("请选择所在组织节点"); return true; }
    if(!inviteState.qrLimit){ showToast("请设置扫码上限额度"); return true; }
    if(!inviteState.qrExpire){ showToast("请选择二维码有效时间"); return true; }
    inviteState.qrGenerated = true;
    openModal("invite");
    showToast("已生成二维码和邀请链接");
    return true;
  }
  if(a==="invite-code-filter"){
    inviteState.codeFilter = el.dataset.filter || "all";
    openModal("invite");
    return true;
  }
  if(a==="invite-gen-codes"){
    syncInviteFormFromDom(root);
    var name = String(inviteState.batchName || "").trim();
    if(!name){ showToast("请输入邀请批次名称"); return true; }
    var n = inviteState.codeQty || 10;
    var expText = formatInviteExpire(inviteState.codeExpire);
    var expired = expText && new Date(expText.replace(/-/g, "/")) < new Date("2026-10-11T00:00:00");
    var added = [];
    for(var i=0;i<n;i++){
      added.push({
        id: makeInviteCode(),
        status: expired ? "expired" : "unused",
        org: "教育厅/高教组",
        role: "上报员",
        expire: expText
      });
    }
    inviteState.codes = added.concat(inviteState.codes || []);
    inviteState.codeFilter = "all";
    openModal("invite");
    showToast("已生成 "+n+" 个激活码");
    return true;
  }
  if(a==="invite-copy-unused"){
    var unused = (inviteState.codes || []).filter(function(c){ return inviteCodeStatus(c) === "unused"; }).map(function(c){ return c.id; });
    if(!unused.length){ showToast("暂无未使用激活码"); return true; }
    copyInviteText(unused.join("\n"), "已复制 "+unused.length+" 个未用激活码");
    return true;
  }
  if(a==="invite-copy-code"){
    copyInviteText(el.dataset.code || "", "已复制激活码");
    return true;
  }
  if(a==="invite-copy-link"){
    syncInviteFormFromDom(root);
    copyInviteText("https://wxb.cn/flowh5/invite?org="+encodeURIComponent(inviteState.orgId)+"&limit="+inviteState.qrLimit, "已复制邀请链接");
    return true;
  }
  if(a==="invite-download-qr"){
    showToast("已下载专属扫码加入卡片（演示）");
    return true;
  }
  if(a==="invite-export"){
    var headers = ["序号","激活码","状态","使用人","手机号","组织","有效期"];
    var stLabel = { unused:"未使用", used:"已使用", expired:"已过期" };
    var rows = (inviteState.codes || []).map(function(c, i){
      var st = inviteCodeStatus(c);
      return "<tr><td>"+(i+1)+"</td><td>"+escapeHtml(c.id)+"</td><td>"+(stLabel[st]||st)+"</td><td>"+escapeHtml(c.name||"")+"</td><td>"+escapeHtml(c.phone||"")+"</td><td>"+escapeHtml(c.org||"")+"</td><td>"+escapeHtml(c.expire||"")+"</td></tr>";
    }).join("");
    var html = '<html><head><meta charset="UTF-8"></head><body><table border="1"><thead><tr>'+headers.map(function(h){return "<th>"+h+"</th>";}).join("")+"</tr></thead><tbody>"+rows+"</tbody></table></body></html>";
    var blob = new Blob([html], { type: "application/vnd.ms-excel;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var aLink = document.createElement("a");
    aLink.href = url;
    aLink.download = "激活码列表.xls";
    document.body.appendChild(aLink);
    aLink.click();
    aLink.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 500);
    showToast("已导出激活码表格");
    return true;
  }
  return false;
}
function inviteResult(){
  var body='<div class="alert">ⓘ 您可下载二维码或复制链接，发送给想要邀请的外部联系人</div><h3 style="border-left:4px solid var(--teal);padding-left:10px">方式一：二维码邀请 <button class="btn primary" style="float:right">下载二维码</button></h3><div style="text-align:center"><h2>尊敬的用户您好</h2><p>“台湾省网信办”武丁邀请您成为外部联系人。</p><div class="qr"></div></div><hr style="border:0;border-top:1px solid #e5eaed"><h3 style="border-left:4px solid var(--teal);padding-left:10px">方式二：链接邀请</h3><p>尊敬的用户您好，“台湾省网信办”武丁邀请您成为外部联系人。<br>请点击以下链接加入</p><div style="display:flex"><input class="input" value="https://www.wxb.cn/flowh5/register/accountLink?ActiveCombo="><button class="btn primary">复制链接</button></div>';
  return modalFrame("邀请联系人",body,"wide",false)
}
function templateView(){
  var body='<div class="grid-2" style="line-height:2"><div>机构：　台湾省网信办<br>指令类别：舆情处置<br>模板名称：文件测试模板</div><div><span style="display:inline-flex;align-items:center;gap:4px"><span>模板ID：TPb40f9649f7f24043a6ce69d81e0e7...</span><button type="button" class="copy-id-btn" data-action="copy-id" data-copy-text="TPb40f9649f7f24043a6ce69d81e0e7" title="复制ID">'+ico("copy",12)+'</button></span><br>指令要求：回执<br>审批人：王旭龙</div></div><div style="margin-top:18px;border:1px solid #86cfcc;padding:18px;background:#f8ffff;min-height:560px"><b class="link">模板内容</b><h3 class="form-section-title" style="margin-top:42px">指令下发内容</h3><div class="field"><div class="field-label">指令描述</div><textarea class="textarea disabled" placeholder="请输入指令描述"></textarea></div><div class="field"><div class="field-label">文件上传</div><div class="upload big disabled">拖拽或点击上传<br>请上传文件</div></div><h3 class="form-section-title" style="margin-top:58px">指令回执内容</h3><div class="field"><div class="field-label">处理结果</div><textarea class="textarea disabled" placeholder="请输入处理结果"></textarea></div></div>';
  return modalFrame("查看",body,"wide",false)
}
function receiptViewModal(){
  var data=currentDetailData(),r=data.receipt||{note:"暂无回执内容",images:0,files:[]};
  return '<div class="modal receipt-view-modal"><div class="modal-head"><span>查看回执</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body"><div class="kv"><span>处理说明</span><div class="detail-long-text">'+r.note+'</div></div>'+renderDetailPhotos(r.images,"回执图片")+renderDetailFiles(r.files)+'</div></div>'
}
function transferModal(){
  var orgs=["台中市教育局","台中市第一中学","禁用-中国汽车工程研究院股份有限公司","禁用-测试机构（台湾省）","台湾省网信办","广西省网信办","台中市网信办","台中市公安局"];
  return '<div class="modal transfer-modal"><div class="modal-head"><span>选择转办机构</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body"><div class="transfer-org-list">'+orgs.map(function(n){return '<div class="transfer-org" data-transfer-org="'+n+'">'+ico("building-2",21)+'<span>'+n+'</span></div>'}).join("")+'</div></div></div>'
}
function transferFormModal(){
  var d=currentDetailData(),deadline=d.requirement==="限时回执"?'<div class="field"><div class="field-label required">限时时间</div><div><input class="input" type="datetime-local" data-transfer-deadline value="'+String(d.deadline||"").replace(" ","T")+'"><div class="field-deadline-note">默认继承父指令截止时间，可选择新的绝对截止时间；父指令时限不变。</div></div></div>':"";
  var body='<div class="field"><div class="field-label">转办机构</div><div style="padding-top:10px;font-weight:700">'+escapeHtml(transferOrganization||"-")+'</div></div><div class="field"><div class="field-label required">接收人</div><div style="display:flex"><input class="input disabled" value="'+transferRecipientText+'" placeholder="请选择接收人" disabled><button class="btn primary" data-open="recipient">选择</button></div></div>'+deadline+'<div class="field"><div class="field-label">备注</div><div><textarea class="textarea" maxlength="500" data-transfer-note placeholder="如有备注，请输入"></textarea><div style="text-align:right;color:#9aa5ad"><span data-transfer-count>0</span> / 500</div></div></div>';
  return '<div class="modal transfer-form"><div class="modal-head"><span>转办</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body">'+body+'</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-transfer-submit>提交</button></div></div>'
}
function processModal(){
  var body='<div class="field"><div class="field-label required">处理说明</div><div><textarea class="textarea" placeholder="请填写处理说明"></textarea><div style="text-align:right;color:#9aa5ad">0 / 500</div></div></div><div class="field"><div class="field-label">图片</div><div><div class="upload"><div>'+ico("plus",28)+'<br>上传图片</div></div><div class="modal-note">如有处理图片请上传。只支持格式JPG、GIF、PNG，且大小不超过10M。</div></div></div><div class="field"><div class="field-label">文件</div><div class="upload"><div>'+ico("file-up",24)+'<br>拖拽或点击上传<br><span class="modal-note">支持DOC、DOCX、XLS、XlSX、PPT等，且文件大小不超过10M</span></div></div></div><div class="field"><div class="field-label">备注</div><div><textarea class="textarea" placeholder="如有备注，请输入"></textarea><div style="text-align:right;color:#9aa5ad">0 / 500</div></div></div>';
  return '<div class="modal process-modal"><div class="modal-head"><span>处理</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body">'+body+'</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary">提交</button></div></div>'
}
function approveModal(){
  return '<div class="modal"><div class="modal-head"><span>审批</span><button class="close" data-close>'+ico("x",22)+'</button></div><div class="modal-body"><div style="margin-bottom:8px">审批意见</div><textarea class="textarea" style="height:210px" placeholder="请输入审批意见"></textarea><div style="text-align:right;color:#9aa5ad">0 / 500</div></div><div class="modal-foot"><button class="btn" data-close>退回</button><button class="btn primary" data-close>通过</button></div></div>'
}
function revokeModal(){
  return '<div class="modal confirm-modal"><div class="modal-head"><div class="confirm-heading"><span class="confirm-icon">'+ico("info",15)+'</span><span>撤回指令?</span></div></div><div class="confirm-copy">您确认撤回指令吗？撤回后该指令将被移除，且不可恢复。</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-close>确定</button></div></div>'
}
function revokeTransferModal(){
  return '<div class="modal confirm-modal"><div class="modal-head"><div class="confirm-heading"><span class="confirm-icon">'+ico("info",15)+'</span><span>撤回转办指令?</span></div></div><div class="confirm-copy">您确认撤回转办指令吗？撤回后转办指令将被移除，且不可恢复。</div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-confirm-revoke-transfer>确定</button></div></div>'
}
function groupSimple(type){
  if(type==="group-add")return modalFrame("新增分组",'<div class="field"><div class="field-label required">分组名称</div><input class="input" placeholder="请输入分组名称"><span style="grid-column:2;text-align:right;color:#9aa4ac">0 / 50</span></div>',"");
  if(type==="group-delete")return '<div class="modal"><div class="modal-body" style="padding:45px 32px 20px"><h2>ⓘ　确认删除?</h2><p style="color:#667580;margin:25px 35px">您确认删除该分组吗？删除后不可恢复，请谨慎操作</p></div><div class="modal-foot"><button class="btn" data-close>取消</button><button class="btn primary" data-close>确定</button></div></div>';
  return modalFrame("调整分组",'<div class="field"><div class="field-label required">调整到</div><div style="display:flex;gap:12px"><select class="select"><option>请选择调整到的分组</option></select><button class="btn light" data-open="group-add">新增</button></div></div>',"")
}

// === 流程处理模态框 ===
var selectedTransferPerson = "武乙";
var selectedSubtaskPerson = "武丙";

function rejectModal(){
  var row = currentDetailTask();
  return '<div class="modal reject-modal" style="max-width:540px">' +
    '<div class="modal-head" style="background:#fff1f2;border-bottom:1px solid #ffe4e6;height:48px;min-height:48px;padding:0 20px">' +
      '<div style="display:flex;align-items:center;gap:8px;color:#9f1239;font-weight:700;font-size:15px">' +
        ico("rotate-ccw", 16) +
        '<span>退回重办</span>' +
      '</div>' +
      '<button class="close" data-close style="display:flex;align-items:center;justify-content:center;height:32px;width:32px">' + ico("x", 18) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:18px 20px 16px">' +
      '<div style="background:#fff1f2;border:1px solid #fecdd3;border-radius:6px;padding:9px 12px;color:#9f1239;font-size:13px;font-weight:700;display:flex;align-items:center;gap:8px;margin-bottom:14px;line-height:1.4">' +
        '<span style="display:inline-flex;align-items:center;color:#e11d48;flex:none">' + ico("alert-triangle", 15) + '</span>' +
        '<span>确认将该指令退回给当前处理人重办吗？</span>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:8px">' +
        '<div style="display:flex;align-items:center;justify-content:space-between">' +
          '<label style="font-weight:700;color:#1e293b;font-size:13px">' +
            '退回原因说明 <span style="color:#ef4444">*</span>' +
          '</label>' +
          '<span style="font-size:12px;color:#94a3b8"><span id="reject-reason-counter">0</span> / 500</span>' +
        '</div>' +
        '<textarea id="reject-reason-input" class="textarea" maxlength="500" placeholder="请详细录入退回原因，例如：核查佐证材料不充分、缺少现场处置截图、技术链路不闭环等..." style="width:100%;height:105px;resize:none;border-color:#fda4af;padding:10px 12px;font-size:13px;line-height:1.6;box-sizing:border-box" oninput="document.getElementById(\'reject-reason-counter\').textContent=this.value.length"></textarea>' +
      '</div>' +
    '</div>' +
    '<div class="modal-foot" style="background:#f8fafc;border-top:1px solid #e2e8f0;height:54px;min-height:54px;padding:0 20px;display:flex;align-items:center;justify-content:flex-end;gap:10px">' +
      '<button class="btn light" data-close style="padding:0 18px;height:34px;font-size:13px">取消</button>' +
      '<button class="btn danger" data-action="confirm-reject-instruction" style="background:#e11d48;border-color:#e11d48;color:#ffffff;padding:0 20px;height:34px;font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:6px">' +
        ico("rotate-ccw", 14) + ' 确认退回重办' +
      '</button>' +
    '</div>' +
  '</div>';
}

function subInstructionModal(){
  var d = currentDetailData();
  var recipientVal = subtaskRecipientText || selectedSubtaskPerson || "谭星";
  var enabledSubtaskReasons = systemSettings.subtaskReasons.filter(function(r){return r.enabled});
  if(!enabledSubtaskReasons.length) enabledSubtaskReasons = systemSettings.subtaskReasons;

  var reasonOptionsHtml = enabledSubtaskReasons.map(function(item){
    return '<option value="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + (item.desc ? ' (' + escapeHtml(item.desc) + ')' : '') + '</option>';
  }).join("");

  var topNoticeBar = '<div class="subtask-top-tip" style="background:#f0f9ff;border-bottom:1px solid #bae6fd;padding:11px 24px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;color:#0369a1">' +
    '<div style="display:flex;align-items:center;gap:8px">' +
      '<span style="display:inline-flex;color:#0284c7;flex:none">' + ico("info", 15) + '</span>' +
      '<span style="font-weight:600;color:#0369a1">生成子表单，下发协助完成此任务。</span>' +
    '</div>' +
    '<div style="font-size:12px;color:#0284c7;opacity:0.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:280px">关联工单：' + escapeHtml(d.title) + '</div>' +
  '</div>';

  var body = '<div class="grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px">' +
    '<div class="subtask-field" style="display:flex;flex-direction:column;gap:6px">' +
      '<label style="font-weight:700;color:#1e293b;font-size:13.5px;display:flex;align-items:center;gap:4px">' +
        '<span>子单原因分类</span>' +
        '<span style="color:#ef4444">*</span>' +
      '</label>' +
      '<select class="input" id="subtask-reason-select" style="background:#fff;width:100%;height:38px;cursor:pointer;border:1px solid #cbd5e1;border-radius:4px;padding:0 12px;font-size:13px">' +
        reasonOptionsHtml +
      '</select>' +
      '<div style="font-size:11.5px;color:#64748b;margin-top:2px">可在【系统设置】中统一配置维护分类字典。</div>' +
    '</div>' +
    '<div class="subtask-field" style="display:flex;flex-direction:column;gap:6px">' +
      '<label style="font-weight:700;color:#1e293b;font-size:13.5px;display:flex;align-items:center;gap:4px">' +
        '<span>限时完成时间</span>' +
      '</label>' +
      '<input class="input" id="subtask-deadline-input" value="' + (d.deadline||"2026-09-15 18:00:00") + '" style="height:38px;border:1px solid #cbd5e1;border-radius:4px;padding:0 12px;font-size:13px">' +
      '<div style="font-size:11.5px;color:#64748b;margin-top:2px">默认继承父指令办理截止时限，可按需微调。</div>' +
    '</div>' +
  '</div>' +
  '<div class="subtask-field" style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px">' +
    '<label style="font-weight:700;color:#1e293b;font-size:13.5px;display:flex;align-items:center;gap:4px">' +
      '<span>子单接收人</span>' +
      '<span style="color:#ef4444">*</span>' +
    '</label>' +
    '<div style="display:flex;gap:10px;align-items:center">' +
      '<input class="input disabled" id="subtask-recipient-input" value="' + escapeHtml(recipientVal) + '" placeholder="请选择接收人员" disabled style="background:#f8fafc;flex:1;height:38px;border:1px solid #cbd5e1;border-radius:4px;padding:0 12px;font-size:13px;color:#334155">' +
      '<button type="button" class="btn primary" data-open="recipient" data-return="subtask" style="display:inline-flex;align-items:center;gap:6px;padding:0 18px;font-weight:700;white-space:nowrap;height:38px;border-radius:4px;background:#0284c7;border-color:#0284c7;color:#fff">' +
        ico("user-plus", 15) + ' 选择人员' +
      '</button>' +
    '</div>' +
  '</div>' +
  '<div class="subtask-field" style="display:flex;flex-direction:column;gap:6px;margin-bottom:4px">' +
    '<div style="display:flex;justify-content:space-between;align-items:center">' +
      '<label style="font-weight:700;color:#1e293b;font-size:13.5px">子单说明</label>' +
      '<span style="font-size:12px;color:#94a3b8"><span id="subtask-note-counter">0</span> / 500</span>' +
    '</div>' +
    '<textarea id="subtask-note-input" class="textarea" maxlength="500" placeholder="请录入派发给协同责任人的具体子单工作说明、排查要素及取证重点（选填）..." style="width:100%;height:95px;resize:none;border:1px solid #cbd5e1;border-radius:4px;padding:10px 12px;font-size:13px;line-height:1.5;box-sizing:border-box" oninput="document.getElementById(\'subtask-note-counter\').textContent=this.value.length"></textarea>' +
  '</div>';

  return '<div class="modal subtask-modal" style="width:720px;max-width:92vw;border-radius:8px;border:1px solid #cbd5e1;box-shadow:0 12px 36px rgba(15,23,42,0.22);overflow:hidden">' +
    '<div class="modal-head" style="height:52px;min-height:52px;padding:0 24px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;background:#fff">' +
      '<div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:16px;color:#0f172a">' +
        '<span style="color:#0284c7;display:flex">' + ico("git-fork", 18) + '</span>' +
        '<span>生成协同子单</span>' +
      '</div>' +
      '<button class="close" data-close style="display:flex;align-items:center;justify-content:center;height:32px;width:32px;border:none;background:transparent;cursor:pointer;color:#64748b;border-radius:4px">' + ico("x", 18) + '</button>' +
    '</div>' +
    topNoticeBar +
    '<div class="modal-body" style="padding:20px 24px 16px">' + body + '</div>' +
    '<div class="modal-foot" style="height:56px;min-height:56px;padding:0 24px;border-top:1px solid #e2e8f0;background:#f8fafc;display:flex;align-items:center;justify-content:space-between">' +
      '<button class="btn light" data-close style="padding:0 20px;height:36px;font-size:13px">取消</button>' +
      '<button class="btn action-teal" data-action="confirm-create-subtask" style="background:#0284c7;border-color:#0284c7;color:#ffffff;padding:0 24px;height:36px;font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:6px">' +
        ico("check", 14) + ' 确认生成子单' +
      '</button>' +
    '</div>' +
  '</div>';
}

function transferPersonModal(){
  var d = currentDetailData();
  var recipientVal = transferRecipientText || selectedTransferPerson || "陈乾喜";
  var enabledTransferReasons = systemSettings.transferReasons.filter(function(r){return r.enabled});
  if(!enabledTransferReasons.length) enabledTransferReasons = systemSettings.transferReasons;

  var reasonOptionsHtml = enabledTransferReasons.map(function(item){
    return '<option value="' + escapeHtml(item.name) + '">' + escapeHtml(item.name) + (item.desc ? ' (' + escapeHtml(item.desc) + ')' : '') + '</option>';
  }).join("");

  var body = '<div class="field" style="margin-bottom:16px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block;white-space:nowrap">转办原因分类 <span style="color:#ef4444">*</span></label>' +
    '<select class="input" id="transfer-reason-select" style="background:#fff;width:100%;height:40px;cursor:pointer">' +
      reasonOptionsHtml +
    '</select>' +
    '<div style="font-size:11.5px;color:#64748b;margin-top:4px">分类选项可在【系统设置】中统一配置管理，便于全链路统计分析。</div>' +
  '</div>' +
  '<div class="field" style="margin-bottom:16px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block;white-space:nowrap">转办接收人 <span style="color:#ef4444">*</span></label>' +
    '<div style="display:flex;gap:10px">' +
      '<input class="input disabled" id="transfer-recipient-input" value="' + escapeHtml(recipientVal) + '" placeholder="请选择转办接收人" disabled style="background:#f8fafc;flex:1;height:40px">' +
      '<button type="button" class="btn primary" data-open="recipient" data-return="transfer-person" style="display:inline-flex;align-items:center;gap:6px;padding:0 20px;font-weight:700;white-space:nowrap;height:40px">' +
        ico("user-plus", 15) + ' 选择人员' +
      '</button>' +
    '</div>' +
  '</div>' +
  '<div class="field">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:flex;justify-content:space-between;white-space:nowrap">' +
      '<span>转办备注 / 交接说明</span>' +
      '<span style="font-size:12px;color:#94a3b8"><span id="transfer-note-counter">0</span> / 500</span>' +
    '</label>' +
    '<textarea id="transfer-note-input" class="textarea" maxlength="500" placeholder="请录入转办具体交接工作说明、研判依据或移交备忘录（选填）..." style="height:92px;resize:none" oninput="document.getElementById(\'transfer-note-counter\').textContent=this.value.length"></textarea>' +
  '</div>';

  return '<div class="modal transfer-form transfer-form-modal-wide" style="width:720px;max-width:92vw">' +
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:16px">' +
        ico("user-round-cog", 18) +
        '<span>指令转办</span>' +
      '</div>' +
      '<button class="close" data-close>' + ico("x", 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px">' + body + '</div>' +
    '<div class="modal-foot" style="display:flex;justify-content:space-between">' +
      '<button class="btn light" data-close style="padding:0 22px">取消</button>' +
      '<button class="btn primary" data-action="confirm-transfer-person" style="padding:0 26px;font-weight:700">' +
        ico("send", 14) + ' 确认转办' +
      '</button>' +
    '</div>' +
  '</div>';
}

var selectedCirculatePersons = ["武丙", "武乙"];

function circulateModal(){
  var curRow = currentDetailTask();
  var defaultTitle = curRow ? curRow.title : "工单公文";
  var personOptions = ["武甲", "武乙", "武丙", "武丁", "陈乾喜", "齐杰", "谭星", "张若英"];
  
  var personChips = personOptions.map(function(p){
    var isSel = selectedCirculatePersons.indexOf(p) > -1;
    return '<button type="button" class="btn ' + (isSel ? 'action-teal' : 'light') + '" data-action="toggle-circulate-person" data-person="' + p + '" style="padding:4px 12px;font-size:12.5px;height:32px;border-radius:6px;font-weight:' + (isSel ? '700' : '500') + '">' +
      (isSel ? '✓ ' : '+ ') + escapeHtml(p) +
    '</button>';
  }).join("");

  var body = '<div class="field" style="margin-bottom:14px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block">当前公文/工单</label>' +
    '<div style="background:#f8fafc;padding:10px 14px;border-radius:6px;border:1px solid #e2e8f0;font-size:13px;color:#334155;font-weight:600">' +
      escapeHtml(defaultTitle) +
    '</div>' +
  '</div>' +
  '<div class="field" style="margin-bottom:14px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block">传阅对象 <span style="color:#ef4444">*</span> <span style="font-weight:normal;color:#64748b;font-size:12px">（点击快速勾选）</span></label>' +
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px">' +
      personChips +
    '</div>' +
    '<input class="input" id="circulate-person-input" value="' + escapeHtml(selectedCirculatePersons.join("、")) + '" placeholder="输入或勾选传阅人员姓名" style="height:38px">' +
  '</div>' +
  '<div class="field" style="margin-bottom:14px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block">传阅意见/附言</label>' +
    '<textarea class="textarea" id="circulate-note-input" placeholder="请输入传阅说明或请示事项，如：请审阅并知悉相关处置进展..." style="height:76px;resize:none">请审阅并知悉相关处置进展及佐证材料。</textarea>' +
  '</div>' +
  '<div class="field" style="margin-bottom:6px">' +
    '<label style="font-weight:700;color:#1e293b;margin-bottom:6px;display:block">阅知提醒</label>' +
    '<div style="display:flex;align-items:center;gap:12px;font-size:12.5px;color:#475569">' +
      '<label style="display:flex;align-items:center;gap:4px;cursor:pointer"><input type="checkbox" checked style="cursor:pointer"> 站内消息推送</label>' +
      '<label style="display:flex;align-items:center;gap:4px;cursor:pointer"><input type="checkbox" checked style="cursor:pointer"> 待办列表置顶提醒</label>' +
    '</div>' +
  '</div>';

  return '<div class="modal" style="width:560px;max-width:92vw">' +
    '<div class="modal-head">' +
      '<div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:16px;color:#005c58">' +
        ico("share-2", 18) +
        '<span>公文/工单传阅</span>' +
      '</div>' +
      '<button class="close" data-close>' + ico("x", 20) + '</button>' +
    '</div>' +
    '<div class="modal-body" style="padding:22px 24px">' + body + '</div>' +
    '<div class="modal-foot" style="display:flex;justify-content:space-between">' +
      '<button class="btn light" data-close style="padding:0 22px">取消</button>' +
      '<button class="btn action-teal" data-action="confirm-circulate" style="background:var(--teal);border-color:var(--teal);padding:0 26px;font-weight:700">' +
        ico("send", 14) + ' 确认发起传阅' +
      '</button>' +
    '</div>' +
  '</div>';
}

var currentEditingSetting = null;

function settingReasonModal(type, itemId){
  var list = getSettingReasonList(type);
  var item = itemId ? list.filter(function(r){return r.id===itemId})[0] : null;
  var isEdit = !!item;
  currentEditingSetting = { type: type, itemId: itemId, isEdit: isEdit };

  var typeLabel = getSettingReasonLabel(type);
  var titleText = isEdit ? "编辑分类" : "新增分类";
  var nameVal = item ? item.name : "";
  var codeVal = item ? item.code : ("CAT_" + Date.now().toString().slice(-4));
  var descVal = item ? (item.desc || "") : "";
  var enabledVal = item ? item.enabled : true;
  var nameIcon = type === "reject" ? "undo-2" : (type === "subtask" ? "git-fork" : "user-round-cog");
  var hintMap = {
    transfer: "用于指令转办时选择原因，启用后出现在转办下拉选项中。",
    subtask: "用于生成子单时选择原因，启用后出现在子单下拉选项中。",
    reject: "用于驳回回执时选择原因，启用后出现在驳回下拉选项中。"
  };

  var body =
    '<div class="setting-modal-field">' +
      '<div class="setting-modal-label-row">' +
        '<label class="setting-modal-label" for="setting-modal-name">分类名称 <em>*</em></label>' +
        '<span class="setting-modal-count"><span id="setting-modal-name-count">' + String(nameVal).length + '</span> / 10</span>' +
      '</div>' +
      '<input class="input" id="setting-modal-name" maxlength="10" value="' + escapeHtml(nameVal) + '" placeholder="请输入分类名称，最多10个字">' +
    '</div>' +
    '<div class="setting-modal-field">' +
      '<label class="setting-modal-label" for="setting-modal-code">标识编码 <em>*</em></label>' +
      '<input class="input setting-modal-code" id="setting-modal-code" value="' + escapeHtml(codeVal) + '" placeholder="如 CROSS_DEPT" spellcheck="false">' +
      '<p class="setting-modal-hint">仅大写英文字母与下划线，用于统计聚合和接口标识</p>' +
    '</div>' +
    '<div class="setting-modal-field">' +
      '<label class="setting-modal-label" for="setting-modal-desc">业务说明</label>' +
      '<textarea class="textarea" id="setting-modal-desc" placeholder="简要描述该分类适用的业务场景或流转规则…">' + escapeHtml(descVal) + '</textarea>' +
    '</div>' +
    '<div class="setting-modal-enable">' +
      '<div class="setting-modal-enable-copy">' +
        '<b>启用状态</b>' +
        '<span>启用后将在对应业务下拉框中可见</span>' +
      '</div>' +
      '<input type="checkbox" id="setting-modal-enabled" class="setting-modal-enabled-input" ' + (enabledVal ? "checked" : "") + '>' +
      '<button type="button" class="switch-pill' + (enabledVal ? " active" : "") + '" data-action="toggle-setting-modal-enabled" aria-label="启用状态"></button>' +
    '</div>';

  return '<div class="modal setting-reason-modal">' +
    '<div class="modal-head">' +
      '<div class="setting-modal-head-main">' +
        '<span class="setting-modal-head-icon">' + ico(nameIcon, 18) + '</span>' +
        '<div class="setting-modal-head-copy">' +
          '<h3>' + titleText + '</h3>' +
          '<p>' + escapeHtml(typeLabel) + ' · ' + (hintMap[type] || hintMap.transfer) + '</p>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="close" data-close>' + ico("x", 18) + '</button>' +
    '</div>' +
    '<div class="modal-body">' + body + '</div>' +
    '<div class="modal-foot">' +
      '<button type="button" class="btn light" data-close>取消</button>' +
      '<button type="button" class="btn primary" data-action="confirm-save-setting-item">' +
        ico("check", 14) + (isEdit ? " 保存" : " 确定") +
      '</button>' +
    '</div>' +
  '</div>';
}
function toggleSettingModalEnabled(){
  var inp = document.getElementById("setting-modal-enabled");
  var sw = document.querySelector(".setting-reason-modal [data-action='toggle-setting-modal-enabled']");
  if(!inp) return;
  inp.checked = !inp.checked;
  if(sw) sw.classList.toggle("active", inp.checked);
}
function updateWizardRecipientRightUI(modalBox){
  if(!modalBox) modalBox = document.getElementById("modalRoot");
  var isIssueModal = !!modalBox.querySelector("[data-action='issue-modal-rec-dim']");
  var removeAction = isIssueModal ? "issue-modal-remove-rec" : "wizard-remove-recipient";
  var selectedEntries = Object.keys(wizardState.selectedRecipients);
  var selectedCards = (selectedEntries.length ? selectedEntries.map(function(name){
    var item = wizardState.selectedRecipients[name];
    return '<div class="selected-rec-chip">'+
      '<div style="display:flex;align-items:center;gap:6px;min-width:0">'+
        '<span style="background:#e0f2fe;color:#0369a1;padding:1px 5px;border-radius:3px;font-size:11px;font-weight:700">'+item.type+'</span>'+
        '<span style="font-weight:700;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+escapeHtml(name)+'</span>'+
      '</div>'+
      '<button type="button" class="selected-rec-del" data-action="'+removeAction+'" data-name="'+name+'" title="移除">'+ico("x", 14)+'</button>'+
    '</div>';
  }).join("") : '<div style="text-align:center;color:#94a3b8;padding:60px 0">'+ico("user-x", 36)+'<p style="margin-top:8px;font-size:13px">请从左侧多维度选择接收人</p></div>');

  var listContainer = modalBox.querySelector(".wizard-rec-selected-list");
  if(listContainer) listContainer.innerHTML = selectedCards;

  var titleEl = modalBox.querySelector(".wizard-rec-right-title");
  if(titleEl) titleEl.innerHTML = ico("check-square", 16) + ' 已选接收对象 (<b>' + selectedEntries.length + '</b>)';

  var footCountEl = modalBox.querySelector(".modal-foot b");
  if(footCountEl) footCountEl.textContent = selectedEntries.length;

  var nextBtn = modalBox.querySelector("[data-action='wizard-next-step']");
  if(nextBtn){
    if(selectedEntries.length === 0){
      nextBtn.setAttribute("disabled", "disabled");
    } else {
      nextBtn.removeAttribute("disabled");
    }
  }

  // 同步左侧卡片与行的高亮
  modalBox.querySelectorAll(".scope-option-card").forEach(function(card){
    var recName = card.dataset.recName;
    card.classList.toggle("selected", !!wizardState.selectedRecipients[recName]);
  });
  modalBox.querySelectorAll(".rec-item-row").forEach(function(row){
    var name = row.dataset.name;
    var isSel = !!wizardState.selectedRecipients[name];
    row.classList.toggle("selected", isSel);
    var chk = row.querySelector(".row-check");
    if(chk) chk.classList.toggle("on", isSel);
  });

  if(window.lucide) lucide.createIcons();
}

function bindDesignerDragDrop(root){
  if(!root) root = document.getElementById("modalRoot");
  var paletteCards = root.querySelectorAll(".designer-component-card");
  paletteCards.forEach(function(card){
    card.ondragstart = function(e){
      var compType = this.dataset.compType;
      e.dataTransfer.setData("text/plain", compType);
      e.dataTransfer.effectAllowed = "copy";
    };
  });

  var dropzone = root.querySelector("#designer-canvas-paper");
  if(dropzone){
    dropzone.ondragover = function(e){
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
      var indicator = root.querySelector("#canvas-dropzone");
      if(indicator) indicator.classList.add("dragover");
    };
    dropzone.ondragleave = function(e){
      var indicator = root.querySelector("#canvas-dropzone");
      if(indicator) indicator.classList.remove("dragover");
    };
    dropzone.ondrop = function(e){
      e.preventDefault();
      var indicator = root.querySelector("#canvas-dropzone");
      if(indicator) indicator.classList.remove("dragover");

      var compType = e.dataTransfer.getData("text/plain");
      if(compType && ["text", "textarea", "date", "select", "file", "number"].indexOf(compType) > -1){
        var newId = "f_" + Date.now().toString().slice(-6);
        var typeNames = { text: "单行文本", textarea: "多行文本", date: "日期时间", select: "下拉选项", file: "佐证材料附件", number: "数值指标" };
        var newField = {
          id: newId,
          type: compType,
          name: typeNames[compType] || "新字段",
          placeholder: "请输入" + (typeNames[compType] || "内容"),
          required: false,
          defaultValue: "",
          desc: "业务自定义填报字段",
          options: compType === "select" ? ["选项一", "选项二", "选项三"] : undefined,
          unit: compType === "number" ? "个" : undefined
        };
        tplWizardState.formFields.push(newField);
        tplWizardState.selectedFieldId = newId;
        openModal("template-wizard");
        showToast("已拖入添加【" + (typeNames[compType] || compType) + "】控件");
      }
    };
  }
}

function openModal(type){
  var root=document.getElementById("modalRoot");
  var html = "";
  if(type==="template-wizard") html = renderTplWizardModal();
  else if(type==="form-preview") html = renderFormPreviewModal();
  else if(type==="pc-template-preview" || type==="preview-tpl") html = renderPcTemplatePreviewModal();
  else if(type==="reject") html = rejectModal();
  else if(type==="subtask") html = subInstructionModal();
  else if(type==="transfer-person") html = transferPersonModal();
  else if(type==="circulate") html = circulateModal();
  else if(type==="setting-reason-modal") html = settingReasonModal(currentEditingSetting?currentEditingSetting.type:(state.settingsTab||"transfer"),currentEditingSetting?currentEditingSetting.itemId:null);
  else if(type==="create-role-modal") html = renderCreateRoleModal();
  else if(type==="assign-role-members") html = renderAssignRoleMembersModal();
  else if(type==="unsaved-role-modal") html = renderUnsavedRoleModal();
  else if(type==="storage-clean-modal") html = renderStorageCleanModal();
  else if(type==="store-warehouse-modal") html = renderStoreWarehouseModal();
  else if(type==="warehouse-group-modal") html = renderWarehouseGroupModal();
  else if(type==="v8-jump") html = renderV8JumpModal();
  else if(type==="issue") html = issueModal();
  else if(type==="issue-recipient") html = issueRecipientPickerModal();
  else if(type==="origin-preview") html = originPreviewModal();
  else if(type==="recipient") html = recipientModal();
  else if(type==="user-edit") html = userEditModal();
  else if(type==="contact-edit") html = contactEditModal();
  else if(type==="ext-batch-edit") html = extBatchEditModal();
  else if(type==="ext-batch-delete") html = extBatchDeleteModal();
  else if(type==="ext-delete-group") html = extDeleteGroupModal();
  else if(type==="ext-delete-contact") html = extDeleteContactModal();
  else if(type==="invite") html = inviteModal();
  else if(type==="invite-result") html = inviteResult();
  else if(type==="template-view") html = templateView();
  else if(type==="receipt-view") html = receiptViewModal();
  else if(type==="transfer") html = transferModal();
  else if(type==="transfer-form") html = transferFormModal();
  else if(type==="process") html = processModal();
  else if(type==="approve") html = approveModal();
  else if(type==="revoke") html = revokeModal();
  else if(type==="revoke-transfer") html = revokeTransferModal();
  else if(type==="stats2-form-detail") html = renderStats2FormDetailModal();
  else if(type==="stats2-reason-detail") html = renderStats2ReasonDetailModal();
  else html = groupSimple(type);

  root.innerHTML = html;
  root.classList.add("show");
  if(type==="recipient") updateRecipientSelectionUI(root);
  if(type==="template-wizard") bindDesignerDragDrop(root);
  if(window.lucide) lucide.createIcons();
}
document.getElementById("modalRoot").onclick=function(e){
  if(e.target === this){
    resetWizardState();
    this.classList.remove("show");
    this.innerHTML = "";
    render();
    return;
  }
  var confirmV8JumpBtn = e.target.closest("[data-action='confirm-v8-jump']");
  if(confirmV8JumpBtn){
    this.classList.remove("show");
    this.innerHTML = "";
    showToast("已跳转至 V8 集成管理（演示）");
    return;
  }
  var inviteActEl = e.target.closest("[data-action^='invite-']");
  if(inviteActEl && handleInviteAction(inviteActEl.dataset.action, inviteActEl, this)) return;

  // === PC端模板详情预览弹窗 Tab 切换 ===
  var previewTabBtn = e.target.closest("[data-action='switch-preview-tpl-tab']");
  if(previewTabBtn){
    state.previewTplTab = previewTabBtn.dataset.tab || "form";
    openModal("pc-template-preview");
    return;
  }

  // === 低代码表单向导：第一步完成进入第二步 ===
  var tplStep1NextBtn = e.target.closest("[data-action='tpl-wizard-step1-next']");
  if(tplStep1NextBtn){
    var nameInp = this.querySelector("#wizard-tpl-name");
    var catSel = this.querySelector("#wizard-tpl-category");
    var reqSel = this.querySelector("#wizard-tpl-req");
    var descInp = this.querySelector("#wizard-tpl-desc");
    var scopeRadio = this.querySelector("input[name='tpl-scope-radio']:checked");

    var nameVal = nameInp ? nameInp.value.trim() : "";
    if(!nameVal){
      showToast("请输入模板名称");
      return;
    }

    tplWizardState.basic.name = nameVal;
    tplWizardState.basic.category = catSel ? catSel.value : "舆情处置";
    tplWizardState.basic.requirement = reqSel ? reqSel.value : "限时回执";
    tplWizardState.basic.desc = descInp ? descInp.value.trim() : "";
    tplWizardState.basic.scope = (scopeRadio && scopeRadio.value === "通用") ? "通用" : "机构专版";

    tplWizardState.step = 2;
    openModal("template-wizard");
    return;
  }

  // === 低代码表单向导：步骤跳转 ===
  var tplGotoStepBtn = e.target.closest("[data-action='tpl-wizard-goto-step']");
  if(tplGotoStepBtn){
    var targetStep = Number(tplGotoStepBtn.dataset.step) || 1;
    tplWizardState.step = targetStep;
    openModal("template-wizard");
    return;
  }

  // === 低代码设计器：顶部工具栏操作 ===
  // 1. 预览
  if(e.target.closest("[data-action='designer-preview-form']")){
    openModal("form-preview");
    return;
  }
  // 2. 保存至 localStorage
  if(e.target.closest("[data-action='designer-save-storage']")){
    try {
      localStorage.setItem("form_designer_saved_tpl", JSON.stringify(tplWizardState));
      showToast("已成功将当前表单设计配置保存至本地缓存（刷新页面不丢失）");
    } catch(err){
      showToast("保存成功！");
    }
    return;
  }
  // 3. 清空画布与本地存储
  if(e.target.closest("[data-action='designer-clear-canvas']")){
    tplWizardState.formFields = [];
    tplWizardState.selectedFieldId = null;
    try {
      localStorage.removeItem("form_designer_saved_tpl");
    } catch(err){}
    openModal("template-wizard");
    showToast("已清空画布所有组件及本地存储");
    return;
  }

  // === 预览弹窗操作 ===
  if(e.target.closest("[data-action='close-preview-modal']")){
    openModal("template-wizard");
    return;
  }
  if(e.target.closest("[data-action='submit-preview-test']")){
    var unfulfilled = [];
    tplWizardState.formFields.forEach(function(f){
      if(f.required){
        var inp = document.querySelector("[data-preview-field='" + f.id + "']");
        if(!inp || !inp.value.trim()){
          unfulfilled.push(f.name);
        }
      }
    });
    if(unfulfilled.length > 0){
      showToast("请填写必填项：" + unfulfilled[0]);
      return;
    }
    showToast("✓ 模拟填报校验通过！表单结构合法且数据已成功提交。");
    return;
  }

  // === 低代码设计器：点击添加组件 ===
  var addCompBtn = e.target.closest("[data-action='designer-add-component']");
  if(addCompBtn){
    var compType = addCompBtn.dataset.compType;
    var newId = "f_" + Date.now().toString().slice(-6);
    var typeNames = { text: "单行文本", textarea: "多行文本", date: "日期选择", select: "下拉单选", file: "佐证材料附件", number: "数值输入" };
    var newField = {
      id: newId,
      type: compType,
      name: typeNames[compType] || "新组件",
      placeholder: "请输入" + (typeNames[compType] || "内容"),
      required: false,
      defaultValue: compType === "date" ? "2026-09-15" : "",
      desc: "业务自定义填报字段",
      options: compType === "select" ? ["选项一", "选项二", "选项三"] : undefined,
      unit: compType === "number" ? "个" : undefined
    };
    tplWizardState.formFields.push(newField);
    tplWizardState.selectedFieldId = newId;
    openModal("template-wizard");
    showToast("已添加【" + (typeNames[compType] || compType) + "】组件到画布");
    return;
  }

  // === 低代码设计器：选中字段 ===
  var selectFieldBtn = e.target.closest("[data-action='designer-select-field']");
  if(selectFieldBtn && !e.target.closest(".canvas-field-actions")){
    var fieldId = selectFieldBtn.dataset.fieldId;
    tplWizardState.selectedFieldId = fieldId;
    openModal("template-wizard");
    return;
  }

  // === 低代码设计器：字段排序与操作 ===
  var moveFieldBtn = e.target.closest("[data-action='designer-move-field']");
  if(moveFieldBtn){
    var dir = moveFieldBtn.dataset.dir;
    var idx = Number(moveFieldBtn.dataset.index);
    if(dir === "up" && idx > 0){
      var temp = tplWizardState.formFields[idx];
      tplWizardState.formFields[idx] = tplWizardState.formFields[idx-1];
      tplWizardState.formFields[idx-1] = temp;
    } else if(dir === "down" && idx < tplWizardState.formFields.length - 1){
      var temp2 = tplWizardState.formFields[idx];
      tplWizardState.formFields[idx] = tplWizardState.formFields[idx+1];
      tplWizardState.formFields[idx+1] = temp2;
    }
    openModal("template-wizard");
    return;
  }

  var cloneFieldBtn = e.target.closest("[data-action='designer-clone-field']");
  if(cloneFieldBtn){
    var cloneId = cloneFieldBtn.dataset.fieldId;
    var targetIdx = -1;
    for(var ci=0; ci<tplWizardState.formFields.length; ci++){
      if(tplWizardState.formFields[ci].id === cloneId){ targetIdx = ci; break; }
    }
    if(targetIdx > -1){
      var orig = tplWizardState.formFields[targetIdx];
      var copyObj = JSON.parse(JSON.stringify(orig));
      copyObj.id = "f_" + Date.now().toString().slice(-6);
      copyObj.name = orig.name + "（副本）";
      tplWizardState.formFields.splice(targetIdx + 1, 0, copyObj);
      tplWizardState.selectedFieldId = copyObj.id;
      openModal("template-wizard");
      showToast("已复制组件：" + orig.name);
    }
    return;
  }

  var delFieldBtn = e.target.closest("[data-action='designer-delete-field']");
  if(delFieldBtn){
    var delId = delFieldBtn.dataset.fieldId;
    tplWizardState.formFields = tplWizardState.formFields.filter(function(f){ return f.id !== delId; });
    if(tplWizardState.selectedFieldId === delId){
      tplWizardState.selectedFieldId = tplWizardState.formFields[0]?.id || null;
    }
    openModal("template-wizard");
    showToast("已从画布中移除该控件");
    return;
  }

  // === 属性面板：下拉选项操作 ===
  if(e.target.closest("[data-action='prop-add-option']")){
    var curF = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF && curF.type === "select"){
      if(!curF.options) curF.options = [];
      curF.options.push("新选项 " + (curF.options.length + 1));
      openModal("template-wizard");
    }
    return;
  }
  var delOptBtn = e.target.closest("[data-action='prop-del-option']");
  if(delOptBtn){
    var optIdx = Number(delOptBtn.dataset.optionIndex);
    var curF2 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF2 && curF2.options && curF2.options.length > 1){
      curF2.options.splice(optIdx, 1);
      openModal("template-wizard");
    } else {
      showToast("下拉单选至少保留 1 个选项");
    }
    return;
  }

  // === 步骤4：完成并保存到模板库 / 立即下发 ===
  if(e.target.closest("[data-action='tpl-wizard-complete-back']") || e.target.closest("[data-action='tpl-wizard-use-now']")){
    var isUseNow = !!e.target.closest("[data-action='tpl-wizard-use-now']");
    var b = tplWizardState.basic;
    var finalFields = tplWizardState.formFields.map(function(f){
      return {
        key: f.id,
        label: f.name,
        type: f.type === "date" ? "datetime" : f.type,
        required: !!f.required,
        default: f.defaultValue || "",
        placeholder: f.placeholder || "",
        options: f.options
      };
    });

    var savedId = "";
    if(tplWizardState.isEditing && tplWizardState.editingId){
      var existTpl = issueTemplates.filter(function(t){ return t.id === tplWizardState.editingId; })[0];
      if(existTpl){
        existTpl.name = b.name;
        existTpl.category = b.category;
        existTpl.requirement = b.requirement;
        existTpl.desc = b.desc;
        existTpl.scope = b.scope;
        existTpl.fields = finalFields;
        savedId = existTpl.id;
      }
    } else {
      savedId = "TPL" + new Date().getFullYear() + ("0"+(new Date().getMonth()+1)).slice(-2) + ("0"+new Date().getDate()).slice(-2) + Date.now().toString().slice(-4);
      issueTemplates.unshift({
        id: savedId,
        name: b.name,
        category: b.category,
        requirement: b.requirement,
        scope: b.scope || "机构专版",
        version: "v1.0",
        usedCount: 0,
        desc: b.desc || "机构自定义低代码表单模板",
        fields: finalFields
      });
    }

    try {
      localStorage.setItem("form_designer_saved_tpl", JSON.stringify(tplWizardState));
    } catch(err){}

    if(isUseNow){
      if(!assertCanIssue()) return;
      resetWizardState(savedId);
      wizardState.step = 2;
      openModal("issue");
      showToast("已成功载入【" + b.name + "】模板，请填写下发内容！");
    } else {
      this.classList.remove("show");
      this.innerHTML = "";
      showToast("指令模板【" + b.name + "】已成功保存至机构模板库！");
      render();
    }
    return;
  }

  // === 向导第一步：模版选择相关（原地平滑无闪烁更新） ===
  var filterCatBtn = e.target.closest("[data-action='wizard-filter-cat']");
  if(filterCatBtn){
    var cat = filterCatBtn.dataset.cat;
    wizardState.tplCategoryFilter = cat;
    this.querySelectorAll("[data-action='wizard-filter-cat']").forEach(function(b){
      b.classList.toggle("active", b.dataset.cat === cat);
    });
    var kw = (wizardState.tplSearchKeyword || "").trim().toLowerCase();
    var tpls = issueTemplates.filter(function(t){
      var matchCat = cat === "全部" || t.category === cat;
      var matchKw = !kw || t.name.toLowerCase().indexOf(kw) > -1 || t.desc.toLowerCase().indexOf(kw) > -1 || t.id.toLowerCase().indexOf(kw) > -1;
      return t.enabled !== false && matchCat && matchKw;
    });
    var grid = this.querySelector(".wizard-tpl-grid");
    if(grid){
      grid.innerHTML = tpls.map(function(t){
        var isSelected = t.id === wizardState.selectedTemplateId;
        var isUrgent = t.requirement === "限时回执";
        var pillClass = isUrgent ? "reply" : t.requirement === "仅阅读" ? "read" : "reply";
        return '<div class="wizard-tpl-card '+(isSelected?'selected':'')+'" data-action="wizard-select-tpl" data-tpl-id="'+t.id+'">'+
          '<div>'+
            '<div class="wizard-tpl-head">'+
              '<span class="tpl-tag-pill '+pillClass+'">'+(isUrgent?ico("clock-3",12):ico("check-check",12))+' '+t.requirement+'</span>'+
              '<span class="tpl-version-text">'+t.scope+' · '+t.version+'</span>'+
            '</div>'+
            '<div class="wizard-tpl-title">'+escapeHtml(t.name)+'</div>'+
            '<div class="wizard-tpl-code">'+t.id+'</div>'+
            '<div class="wizard-tpl-desc">'+escapeHtml(t.desc)+'</div>'+
          '</div>'+
          '<div>'+
            '<div class="wizard-tpl-meta">'+
              '<span>'+ico("sliders",13)+' 包含字段 <b>'+t.fields.length+' 个</b></span>'+
              '<span style="color:#cbd5e1">|</span>'+
              '<span>'+ico("history",13)+' 累计使用 <b>'+t.usedCount+' 次</b></span>'+
            '</div>'+
            '<div class="wizard-tpl-foot">'+
              '<span class="wizard-tpl-stats">分类：<b>'+t.category+'</b></span>'+
              '<button type="button" class="btn-choose-tpl" data-action="wizard-choose-and-next" data-tpl-id="'+t.id+'">'+ico("arrow-right",13)+' 选用并下一步</button>'+
            '</div>'+
          '</div>'+
        '</div>';
      }).join("");
      if(window.lucide) lucide.createIcons();
    }
    return;
  }
  var tplCard = e.target.closest("[data-action='wizard-select-tpl']");
  if(tplCard && !e.target.closest("[data-action='wizard-choose-and-next']")){
    wizardState.selectedTemplateId = tplCard.dataset.tplId;
    this.querySelectorAll(".wizard-tpl-card").forEach(function(card){
      card.classList.toggle("selected", card.dataset.tplId === wizardState.selectedTemplateId);
    });
    var curTpl = getTemplateById(wizardState.selectedTemplateId);
    var tip = this.querySelector(".wizard-foot span");
    if(tip) tip.innerHTML = '当前已选：<b style="color:#005c58">'+escapeHtml(curTpl.name)+'</b> ('+curTpl.requirement+')';
    return;
  }
  var chooseAndNextBtn = e.target.closest("[data-action='wizard-choose-and-next']");
  if(chooseAndNextBtn){
    wizardState.selectedTemplateId = chooseAndNextBtn.dataset.tplId;
    wizardState.formData.title = wizardState.formData.title || "";
    wizardState.formData.urgency = wizardState.formData.urgency || "";
    wizardState.formData.responseTime = wizardState.formData.responseTime || "";
    wizardState.formData.deadline = wizardState.formData.deadline || "";
    wizardState.formData.source = wizardState.formData.source || "";
    wizardState.formData.url = wizardState.formData.url || "";
    wizardState.formData.description = wizardState.formData.description || "";
    wizardState.formData.note = wizardState.formData.note || "";
    wizardState.step = 2;
    openModal("issue");
    return;
  }

  // === 向导通用步骤切换 ===
  var nextStepBtn = e.target.closest("[data-action='wizard-next-step']");
  if(nextStepBtn){
    if(wizardState.step === 1){
      wizardState.formData.title = wizardState.formData.title || "";
      wizardState.formData.urgency = wizardState.formData.urgency || "";
      wizardState.formData.responseTime = wizardState.formData.responseTime || "";
      wizardState.formData.deadline = wizardState.formData.deadline || "";
      wizardState.formData.source = wizardState.formData.source || "";
      wizardState.formData.url = wizardState.formData.url || "";
      wizardState.formData.description = wizardState.formData.description || "";
      wizardState.formData.note = wizardState.formData.note || "";
      wizardState.step = 2;
      openModal("issue");
      return;
    } else if(wizardState.step === 2){
      // 提取第二步表单输入
      var titleInp = this.querySelector("[data-wizard-field='title']");
      if(titleInp) wizardState.formData.title = titleInp.value;
      var urgInp = this.querySelector("[data-wizard-field='urgency']");
      if(urgInp) wizardState.formData.urgency = urgInp.value;
      var respInp = this.querySelector("[data-wizard-field='responseTime']");
      if(respInp) wizardState.formData.responseTime = respInp.value;
      var deadInp = this.querySelector("[data-wizard-field='deadline']");
      if(deadInp) wizardState.formData.deadline = deadInp.value;
      var noteInp = this.querySelector("[data-wizard-field='note']");
      if(noteInp) wizardState.formData.note = noteInp.value;
      var srcInp = this.querySelector("[data-wizard-field='source']");
      if(srcInp) wizardState.formData.source = srcInp.value;
      var urlInp = this.querySelector("[data-wizard-field='url']");
      if(urlInp) wizardState.formData.url = urlInp.value;
      var descInp = this.querySelector("[data-wizard-field='description']");
      if(descInp) wizardState.formData.description = descInp.value;

      if(!wizardState.formData.title.trim()){
        showToast("请输入指令标题");
        return;
      }
      if(!wizardState.formData.source.trim()){
        showToast("请输入舆情来源");
        return;
      }
      if(!wizardState.formData.description.trim()){
        showToast("请输入舆情说明");
        return;
      }
      wizardState.step = 3;
    } else if(wizardState.step === 3){
      if(Object.keys(wizardState.selectedRecipients).length === 0){
        showToast("请至少选择一个接收对象");
        return;
      }
      wizardState.step = 4;
    }
    openModal("issue");
    return;
  }
  var gotoStepBtn = e.target.closest("[data-action='wizard-goto-step']");
  if(gotoStepBtn){
    if(wizardState.step === 2){
      var titleInp = this.querySelector("[data-wizard-field='title']");
      if(titleInp) wizardState.formData.title = titleInp.value;
      var urgInp = this.querySelector("[data-wizard-field='urgency']");
      if(urgInp) wizardState.formData.urgency = urgInp.value;
      var respInp = this.querySelector("[data-wizard-field='responseTime']");
      if(respInp) wizardState.formData.responseTime = respInp.value;
      var deadInp = this.querySelector("[data-wizard-field='deadline']");
      if(deadInp) wizardState.formData.deadline = deadInp.value.replace("T", " ");
      var noteInp = this.querySelector("[data-wizard-field='note']");
      if(noteInp) wizardState.formData.note = noteInp.value;
      var srcInp = this.querySelector("[data-wizard-field='source']");
      if(srcInp) wizardState.formData.source = srcInp.value;
      var urlInp = this.querySelector("[data-wizard-field='url']");
      if(urlInp) wizardState.formData.url = urlInp.value;
      var descInp = this.querySelector("[data-wizard-field='description']");
      if(descInp) wizardState.formData.description = descInp.value;
    }
    wizardState.step = Number(gotoStepBtn.dataset.step) || 1;
    openModal("issue");
    return;
  }

  // === 向导第二步：暂存至草稿箱 ===
  var saveDraftBtn = e.target.closest("[data-action='wizard-save-draft']");
  if(saveDraftBtn){
    e.stopPropagation();
    e.preventDefault();
    var titleInp = this.querySelector("[data-wizard-field='title']");
    if(titleInp) wizardState.formData.title = titleInp.value;
    var urgInp = this.querySelector("[data-wizard-field='urgency']");
    if(urgInp) wizardState.formData.urgency = urgInp.value;
    var respInp = this.querySelector("[data-wizard-field='responseTime']");
    if(respInp) wizardState.formData.responseTime = respInp.value;
    var deadInp = this.querySelector("[data-wizard-field='deadline']");
    if(deadInp) wizardState.formData.deadline = deadInp.value.replace("T", " ");
    var noteInp = this.querySelector("[data-wizard-field='note']");
    if(noteInp) wizardState.formData.note = noteInp.value;
    var srcInp = this.querySelector("[data-wizard-field='source']");
    if(srcInp) wizardState.formData.source = srcInp.value;
    var urlInp = this.querySelector("[data-wizard-field='url']");
    if(urlInp) wizardState.formData.url = urlInp.value;
    var descInp = this.querySelector("[data-wizard-field='description']");
    if(descInp) wizardState.formData.description = descInp.value;

    var curTpl = getTemplateById(wizardState.selectedTemplateId);
    var now = new Date();
    var pad = function(n){return n<10?'0'+n:n};
    var nowStr = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
    var dateStr = "" + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate());
    var newDraftId = wizardState.draftId || ("CG-" + dateStr + "-" + ("00" + (draftRows.length + 1)).slice(-3));
    wizardState.draftId = newDraftId;

    if(wizardState.editingDraftKey){
      var existDraft = draftRows.filter(function(d){ return d.key === wizardState.editingDraftKey; })[0];
      if(existDraft){
        existDraft.id = newDraftId;
        existDraft.title = wizardState.formData.title || "（未命名草稿）";
        existDraft.template = curTpl ? curTpl.name : existDraft.template;
        existDraft.time = nowStr;
        existDraft.receiver = Object.keys(wizardState.selectedRecipients).join("、") || "未指定";
        existDraft.req = curTpl ? curTpl.requirement : existDraft.req;
        existDraft.source = wizardState.formData.source || "";
        existDraft.url = wizardState.formData.url || "";
        existDraft.description = wizardState.formData.description || "";
        existDraft.deadline = curTpl && curTpl.requirement === "限时回执" ? (wizardState.formData.deadline || "") : "";
        existDraft.note = wizardState.formData.note || "";
      }
    } else {
      var dKey = "draft-" + Date.now();
      wizardState.editingDraftKey = dKey;
      draftRows.unshift({
        key: dKey,
        id: newDraftId,
        title: wizardState.formData.title || "（未命名草稿）",
        template: curTpl ? curTpl.name : "舆情处置-限时回执",
        time: nowStr,
        receiver: Object.keys(wizardState.selectedRecipients).join("、") || "未指定",
        sender: currentUser,
        processor: "-",
        req: curTpl ? curTpl.requirement : "限时回执",
        status: "草稿",
        origin: "草稿",
        source: wizardState.formData.source || "",
        url: wizardState.formData.url || "",
        description: wizardState.formData.description || "",
        deadline: curTpl && curTpl.requirement === "限时回执" ? (wizardState.formData.deadline || "") : "",
        note: wizardState.formData.note || ""
      });
    }

    openModal("issue");
    showToast("✓ 已成功暂存至草稿箱！指令ID：" + newDraftId);
    return;
  }

  // === 向导第二步：快捷完成时间选择 ===
  var quickDeadlineBtn = e.target.closest("[data-action='quick-deadline']");
  if(quickDeadlineBtn){
    var hours = Number(quickDeadlineBtn.dataset.hours) || 4;
    var now = new Date();
    now.setHours(now.getHours() + hours);
    var pad = function(n){return n<10?'0'+n:n};
    var dtVal = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
    wizardState.formData.deadline = dtVal.replace("T", " ");
    var input = this.querySelector("[data-wizard-field='deadline']");
    if(input) input.value = dtVal;
    this.querySelectorAll("[data-action='quick-deadline']").forEach(function(btn){btn.classList.toggle("active", btn===quickDeadlineBtn)});
    return;
  }

  // === 向导第三步与独立选人弹窗：四维接收人选择与组织树交互 ===
  var recDimBtn = e.target.closest("[data-action='wizard-rec-dim']") || e.target.closest("[data-action='issue-modal-rec-dim']");
  if(recDimBtn){
    var isIssueModal = !!e.target.closest("[data-action='issue-modal-rec-dim']");
    var dim = recDimBtn.dataset.dim;
    wizardState.recipientDimTab = dim;
    wizardState.recipientSearchKw = "";
    wizardState.recipientTreeSearchKw = "";
    var leftContainer = this.querySelector(".wizard-rec-left");
    if(leftContainer){
      var dimTabs = '<div class="wizard-rec-dim-tabs">'+
        '<button type="button" class="wizard-rec-tab-btn '+(dim==="org"?"active":"")+'" data-action="'+(isIssueModal?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="org">'+ico("building-2", 15)+' 按组织架构</button>'+
        '<button type="button" class="wizard-rec-tab-btn '+(dim==="group"?"active":"")+'" data-action="'+(isIssueModal?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="group">'+ico("users-round", 15)+' 按外部分组</button>'+
        '<button type="button" class="wizard-rec-tab-btn '+(dim==="role"?"active":"")+'" data-action="'+(isIssueModal?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="role">'+ico("shield-check", 15)+' 按角色</button>'+
        '<button type="button" class="wizard-rec-tab-btn '+(dim==="person"?"active":"")+'" data-action="'+(isIssueModal?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="person">'+ico("user", 15)+' 按用户</button>'+
      '</div>';
      leftContainer.innerHTML = dimTabs + renderWizardRecipientLeftContent(isIssueModal);
      if(window.lucide) lucide.createIcons();
    }
    return;
  }

  // 组织树节点折叠/展开
  var expanderBtn = e.target.closest("[data-action='tree-node-toggle']");
  if(expanderBtn){
    var expNodeId = expanderBtn.dataset.nodeId;
    wizardState.recipientOrgTreeExpanded = wizardState.recipientOrgTreeExpanded || {};
    wizardState.recipientOrgTreeExpanded[expNodeId] = !wizardState.recipientOrgTreeExpanded[expNodeId];
    var treeScroll = this.querySelector(".tree-scroll-pane");
    if(treeScroll){
      var kw = (wizardState.recipientTreeSearchKw || "").trim().toLowerCase();
      var activeDim = wizardState.recipientDimTab || "org";
      var treeData = wizardOrgTreeData;
      var activeId = wizardState.recipientOrgTreeActiveId;
      if(activeDim === "group"){
        treeData = wizardExtGroupTreeData;
        activeId = wizardState.recipientExtGroupTreeActiveId;
      } else if(activeDim === "person"){
        treeData = wizardState.recipientPersonSubtab === "external" ? wizardExtGroupTreeData : wizardOrgTreeData;
        activeId = wizardState.recipientPersonSubtab === "external" ? wizardState.recipientUserExtOrgActiveId : wizardState.recipientUserOrgActiveId;
      }
      treeScroll.innerHTML = renderOrgTreeNodesHtml(treeData, 0, activeId, kw, wizardState.recipientOrgTreeExpanded);
      if(window.lucide) lucide.createIcons();
    }
    return;
  }

  // 组织树节点点击选择当前激活节点
  var treeNodeRow = e.target.closest("[data-action='wizard-rec-tree-node']");
  if(treeNodeRow){
    var actNodeId = treeNodeRow.dataset.nodeId;
    var activeDim = wizardState.recipientDimTab || "org";
    if(activeDim === "org"){
      wizardState.recipientOrgTreeActiveId = actNodeId;
    } else if(activeDim === "group"){
      wizardState.recipientExtGroupTreeActiveId = actNodeId;
    } else if(activeDim === "person"){
      if(wizardState.recipientPersonSubtab === "external"){
        wizardState.recipientUserExtOrgActiveId = actNodeId;
      } else {
        wizardState.recipientUserOrgActiveId = actNodeId;
      }
    }
    this.querySelectorAll(".tree-node-row").forEach(function(r){
      r.classList.toggle("active", r.dataset.nodeId === actNodeId);
    });
    var scopePane = this.querySelector(".wizard-scope-pane");
    if(scopePane){
      var treeData = activeDim === "group" ? wizardExtGroupTreeData : wizardOrgTreeData;
      var activeNode = findOrgNodeById(treeData, actNodeId) || treeData[0];
      scopePane.innerHTML = renderOrgScopePaneHtml(activeNode, activeDim === "group");
      if(window.lucide) lucide.createIcons();
    }
    return;
  }

  // 组织覆盖范围卡片点击选择（当前组织 / 当前组织及子组织 / 当前组织及子孙组织）
  var scopeCard = e.target.closest("[data-action='wizard-scope-select']");
  if(scopeCard){
    var scRecName = scopeCard.dataset.recName;
    var scRecType = scopeCard.dataset.recType || "组织架构";
    var scNodeId = scopeCard.dataset.nodeId;
    var isScSel = !!wizardState.selectedRecipients[scRecName];
    var chk = scopeCard.querySelector(".row-check");
    var scopePane = scopeCard.closest(".wizard-scope-pane");
    if(isScSel){
      delete wizardState.selectedRecipients[scRecName];
      scopeCard.classList.remove("selected");
      if(chk) chk.classList.remove("on");
    } else {
      // 单选逻辑：清除该节点的所有其他覆盖范围选项（当前组织/当前组织及子组织/当前组织及子孙组织，或分组等）
      var baseNodeName = scRecName.replace(/\s*\[.+\]$/, "");
      delete wizardState.selectedRecipients[baseNodeName + " [当前组织]"];
      delete wizardState.selectedRecipients[baseNodeName + " [当前组织及子组织]"];
      delete wizardState.selectedRecipients[baseNodeName + " [当前组织及子孙组织]"];
      delete wizardState.selectedRecipients[baseNodeName + " [当前分组]"];
      delete wizardState.selectedRecipients[baseNodeName + " [当前分组及子分组]"];
      delete wizardState.selectedRecipients[baseNodeName + " [当前分组及子孙分组]"];

      if(scopePane){
        scopePane.querySelectorAll(".scope-option-card").forEach(function(c){
          c.classList.remove("selected");
          var cChk = c.querySelector(".row-check");
          if(cChk) cChk.classList.remove("on");
        });
      }

      wizardState.selectedRecipients[scRecName] = { id: scNodeId, type: scRecType, name: scRecName };
      scopeCard.classList.add("selected");
      if(chk) chk.classList.add("on");
    }
    updateWizardRecipientRightUI(this);
    return;
  }

  // 人员子标签切换 (内部 / 外部)
  var userSubtabBtn = e.target.closest("[data-action='wizard-user-subtab']");
  if(userSubtabBtn){
    var subKey = userSubtabBtn.dataset.sub;
    wizardState.recipientPersonSubtab = subKey;
    var isIssueModal2 = !!this.querySelector("[data-action='issue-modal-rec-dim']");
    var leftContainer2 = this.querySelector(".wizard-rec-left");
    if(leftContainer2){
      var dimTabs2 = '<div class="wizard-rec-dim-tabs">'+
        '<button type="button" class="wizard-rec-tab-btn" data-action="'+(isIssueModal2?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="org">'+ico("building-2", 15)+' 按组织架构</button>'+
        '<button type="button" class="wizard-rec-tab-btn" data-action="'+(isIssueModal2?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="group">'+ico("users-round", 15)+' 按外部分组</button>'+
        '<button type="button" class="wizard-rec-tab-btn" data-action="'+(isIssueModal2?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="role">'+ico("shield-check", 15)+' 按角色</button>'+
        '<button type="button" class="wizard-rec-tab-btn active" data-action="'+(isIssueModal2?"issue-modal-rec-dim":"wizard-rec-dim")+'" data-dim="person">'+ico("user", 15)+' 按用户</button>'+
      '</div>';
      leftContainer2.innerHTML = dimTabs2 + renderWizardRecipientLeftContent(isIssueModal2);
      if(window.lucide) lucide.createIcons();
    }
    return;
  }

  // 行条目点击切换勾选
  var toggleRecRow = e.target.closest("[data-action='wizard-toggle-recipient']") || e.target.closest("[data-action='issue-modal-toggle-rec']");
  if(toggleRecRow){
    var name = toggleRecRow.dataset.name;
    var type = toggleRecRow.dataset.type;
    var id = toggleRecRow.dataset.id;
    if(wizardState.selectedRecipients[name]){
      delete wizardState.selectedRecipients[name];
      toggleRecRow.classList.remove("selected");
      var chk = toggleRecRow.querySelector(".row-check");
      if(chk) chk.classList.remove("on");
    } else {
      wizardState.selectedRecipients[name] = { id: id, type: type, name: name };
      toggleRecRow.classList.add("selected");
      var chk = toggleRecRow.querySelector(".row-check");
      if(chk) chk.classList.add("on");
    }
    updateWizardRecipientRightUI(this);
    return;
  }

  // 移除右侧已选对象
  var removeRecBtn = e.target.closest("[data-action='wizard-remove-recipient']") || e.target.closest("[data-action='issue-modal-remove-rec']");
  if(removeRecBtn){
    var name = removeRecBtn.dataset.name;
    delete wizardState.selectedRecipients[name];
    updateWizardRecipientRightUI(this);
    return;
  }

  // 清空全部已选
  if(e.target.closest("[data-action='wizard-clear-recipients']") || e.target.closest("[data-action='issue-modal-clear-rec']")){
    wizardState.selectedRecipients = {};
    updateWizardRecipientRightUI(this);
    return;
  }

  // 本维度全选 / 反选
  if(e.target.closest("[data-action='wizard-rec-select-all-dim']") || e.target.closest("[data-action='issue-modal-rec-select-all-dim']")){
    var activeDimKey = wizardState.recipientDimTab || "org";
    var listToToggle = [];
    if(activeDimKey === "person"){
      var curSub = wizardState.recipientPersonSubtab || "all";
      var persons = wizardRecipientDimensionData.person || [];
      listToToggle = persons.filter(function(p){
        if(curSub === "internal" && !p.isInternal) return false;
        if(curSub === "external" && p.isInternal) return false;
        return true;
      });
    } else {
      listToToggle = wizardRecipientDimensionData[activeDimKey] || [];
    }
    var allInDimSelected = listToToggle.length > 0 && listToToggle.every(function(item){ return !!wizardState.selectedRecipients[item.name]; });
    listToToggle.forEach(function(item){
      if(allInDimSelected){
        delete wizardState.selectedRecipients[item.name];
      } else {
        wizardState.selectedRecipients[item.name] = { id: item.id, type: item.type, name: item.name };
      }
    });
    updateWizardRecipientRightUI(this);
    return;
  }

  if(e.target.closest("[data-action='confirm-issue-modal-rec']")){
    var selectedRecNames = Object.keys(wizardState.selectedRecipients).join("、");
    if(recipientReturn === "redispatch"){
      state.redispatchRecipients = selectedRecNames || "武乙";
    }
    this.classList.remove("show");
    this.innerHTML = "";
    render();
    return;
  }

  // === 向导第四步：执行发送 ===
  if(e.target.closest("[data-action='wizard-execute-send']")){
    var nowId = "YQCZ" + new Date().getFullYear() + ("0"+(new Date().getMonth()+1)).slice(-2) + ("0"+new Date().getDate()).slice(-2) + ("0"+new Date().getHours()).slice(-2) + ("0"+new Date().getMinutes()).slice(-2) + ("0"+new Date().getSeconds()).slice(-2);
    wizardState.lastIssuedId = nowId;
    var recNames = Object.keys(wizardState.selectedRecipients).join("、");
    var curTpl = getTemplateById(wizardState.selectedTemplateId);

    // 新增任务推入列表
    taskRows.unshift({
      key: "issue-new-" + nowId,
      title: wizardState.formData.title || "舆情处置：" + nowId,
      application: "指令流转",
      path: "指令流转 > " + curTpl.name,
      time: "2026-08-31 10:20:00",
      receiver: recNames || "台湾省网信办",
      sender: currentUser,
      processor: "-",
      req: curTpl.requirement,
      status: "待处理",
      origin: "下发",
      deadline: curTpl.requirement === "限时回执" ? wizardState.formData.deadline : ""
    });

    wizardState.step = 5;
    openModal("issue");
    showToast("指令已成功下发至接收人！");
    return;
  }

  // === 向导第五步：成功页面操作 ===
  if(e.target.closest("[data-action='wizard-issue-another']")){
    resetWizardState();
    openModal("issue");
    return;
  }
  var viewCreatedDetailBtn = e.target.closest("[data-action='wizard-view-created-detail']");
  if(viewCreatedDetailBtn){
    this.classList.remove("show");
    this.innerHTML = "";
    state.detailKey = viewCreatedDetailBtn.dataset.key;
    state.page = "detail";
    render();
    return;
  }

  // === 原文解析与填入 ===
  if(e.target.closest("[data-action='parse-origin-link']")){
    startOriginLinkSimulation(e.target.closest("[data-action='parse-origin-link']"));
    return;
  }
  if(e.target.closest("[data-action='reparse-origin-link']")){
    var box = e.target.closest(".origin-fetch-box");
    var btn = box ? box.querySelector("[data-action='parse-origin-link']") : null;
    startOriginLinkSimulation(btn || e.target.closest("[data-action='reparse-origin-link']"));
    return;
  }
  if(e.target.closest("[data-action='switch-origin-demo']")){
    var switchBtn = e.target.closest("[data-action='switch-origin-demo']");
    var outcome = switchBtn.dataset.outcome || "success";
    var box = switchBtn.closest(".origin-fetch-box");
    setOriginDemoOutcome(outcome, box);
    return;
  }
  if(e.target.closest("[data-action='view-origin-preview']")){openModal("origin-preview");return}
  if(e.target.closest("[data-action='close-origin-preview']")){openModal("issue");return}
  if(e.target.closest("[data-action='confirm-origin-fill']")){
    if(originSelectedMappings.title==="title")wizardState.formData.title="小区雨后积水引发居民关注（演示）";
    if(originSelectedMappings.title==="desc")wizardState.formData.description="小区雨后积水引发居民关注（演示）";
    if(originSelectedMappings.title==="note")wizardState.formData.note=(wizardState.formData.note?wizardState.formData.note+"\n":"")+"标题：小区雨后积水引发居民关注（演示）";
    if(originSelectedMappings.source==="source")wizardState.formData.source="微博";
    if(originSelectedMappings.source==="note")wizardState.formData.note=(wizardState.formData.note?wizardState.formData.note+"\n":"")+"来源：微博";
    if(originSelectedMappings.author==="note")wizardState.formData.note=(wizardState.formData.note?wizardState.formData.note+"\n":"")+"作者：市民观察（演示账号）";
    if(originSelectedMappings.author==="desc")wizardState.formData.description=(wizardState.formData.description?wizardState.formData.description+"\n":"")+"作者：市民观察（演示账号）";
    if(originSelectedMappings.time==="deadline")wizardState.formData.deadline="2026-08-31 09:20:00";
    if(originSelectedMappings.time==="note")wizardState.formData.note=(wizardState.formData.note?wizardState.formData.note+"\n":"")+"发布时间：2026-08-31 09:20:00";
    if(originSelectedMappings.content==="desc")wizardState.formData.description="【模拟采集内容】有网友反映，连续降雨后，某小区出入口出现积水，影响居民通行。帖文附有现场情况说明，并询问排水设施维护进展。目前已有用户转发并补充附近路段的情况。以上文字仅用于演示原信息填入，不对应真实新闻。";
    if(originSelectedMappings.content==="title")wizardState.formData.title="小区雨后积水引发居民关注（演示）";
    if(originSelectedMappings.content==="note")wizardState.formData.note=(wizardState.formData.note?wizardState.formData.note+"\n":"")+"【模拟采集内容】有网友反映，连续降雨后，某小区出入口出现积水，影响居民通行。帖文附有现场情况说明，并询问排水设施维护进展。目前已有用户转发并补充附近路段的情况。以上文字仅用于演示原信息填入，不对应真实新闻。";
    openModal("issue");
    showToast("已成功填入选中的字段内容");
    return;
  }

  // === 撤回与转办等 ===
  if(e.target.closest("[data-confirm-revoke-transfer]")){var row=currentDetailTask(),childKey=row.childKey;if(childKey){var childIndex=taskRows.findIndex(function(r){return r.key===childKey});if(childIndex>-1)taskRows.splice(childIndex,1)}row.transferred=false;row.childKey="";row.transferInfo=null;this.classList.remove("show");this.innerHTML="";showToast("已撤回转办指令");render();return}
  var transferOrg=e.target.closest("[data-transfer-org]");
  if(transferOrg){transferOrganization=transferOrg.dataset.transferOrg;transferRecipientText="";recipientSelection={};recipientReturn="transfer-form";openModal("transfer-form");return}
  var recipientTab=e.target.closest("[data-recipient-tab]");
  if(recipientTab){var recipientRoot=recipientTab.closest("[data-recipient-root]"),kind=recipientTab.dataset.recipientTab,d=recipientDirectory[kind];recipientRoot.dataset.kind=kind;recipientRoot.querySelectorAll("[data-recipient-tab]").forEach(function(n){n.classList.toggle("active",n===recipientTab)});recipientRoot.querySelector("[data-recipient-notice]").textContent=d.notice;recipientRoot.querySelector("[data-recipient-groups]").innerHTML=recipientGroupsMarkup(kind);recipientRoot.querySelector("[data-recipient-people]").innerHTML=recipientPeopleMarkup(kind);updateRecipientSelectionUI(this);return}
  var recipientGroup=e.target.closest("[data-recipient-group]");
  if(recipientGroup){recipientGroup.parentElement.querySelectorAll("[data-recipient-group]").forEach(function(n){n.classList.toggle("active",n===recipientGroup)});return}
  var recipientOption=e.target.closest("[data-recipient-option]");
  if(recipientOption){var name=recipientOption.dataset.name;if(recipientSelection[name])delete recipientSelection[name];else recipientSelection[name]={kind:recipientOption.dataset.kind};updateRecipientSelectionUI(this);return}
  var recipientAll=e.target.closest("[data-recipient-all]");
  if(recipientAll){var rows=Array.from(this.querySelectorAll("[data-recipient-option]")),allSelected=rows.length&&rows.every(function(row){return !!recipientSelection[row.dataset.name]});rows.forEach(function(row){if(allSelected)delete recipientSelection[row.dataset.name];else recipientSelection[row.dataset.name]={kind:row.dataset.kind}});updateRecipientSelectionUI(this);return}
  var recipientRemove=e.target.closest("[data-recipient-remove]");
  if(recipientRemove){delete recipientSelection[recipientRemove.dataset.recipientRemove];updateRecipientSelectionUI(this);return}
  if(e.target.closest("[data-recipient-clear]")){recipientSelection={};updateRecipientSelectionUI(this);return}
  if(e.target.closest("[data-recipient-cancel]")){openModal(recipientReturn);return}
  if(e.target.closest("[data-recipient-submit]")){
    var selectedNames=Object.keys(recipientSelection).join("、");
    if(recipientReturn==="transfer-person" || recipientReturn==="transfer-form" || recipientReturn==="transfer"){
      transferRecipientText=selectedNames || "陈乾喜";
      selectedTransferPerson=selectedNames || "陈乾喜";
      openModal("transfer-person");
    } else if(recipientReturn==="subtask"){
      subtaskRecipientText=selectedNames || "谭星";
      selectedSubtaskPerson=selectedNames || "谭星";
      openModal("subtask");
    } else {
      issueRecipientText=selectedNames;
      openModal("issue");
    }
    return;
  }

  // === 确认转办 ===
  var confirmTransferBtn = e.target.closest("[data-action='confirm-transfer-person']");
  if(confirmTransferBtn){
    var rec = (transferRecipientText || selectedTransferPerson || "陈乾喜").trim();
    var reasonSel = document.getElementById("transfer-reason-select");
    var reasonVal = reasonSel ? reasonSel.value : "跨部门协同办理";
    var noteInput = document.getElementById("transfer-note-input");
    var noteVal = noteInput ? noteInput.value.trim() : "";
    if(!rec){
      showToast("请选择转办接收人");
      return;
    }
    var row = currentDetailTask();
    var now = formatDeadlineDate(Date.now());
    var childKey = "transfer-" + row.key;
    row.transferred = true;
    row.childKey = childKey;
    row.transferInfo = {
      from: currentUser,
      to: rec,
      time: now,
      reason: reasonVal,
      remark: (reasonVal ? "【" + reasonVal + "】" : "") + (noteVal ? " " + noteVal : "") || "转办交接"
    };

    if(!taskRows.some(function(r){ return r.key === childKey })){
      taskRows.unshift({
        key: childKey,
        id: "YQCZ" + Date.now().toString().slice(-10),
        title: row.title + "（转办）",
        application: getTaskApplication(row),
        path: getTaskApplication(row) + " > 舆情处置-转办",
        time: now,
        receiver: rec,
        sender: currentUser,
        processor: "-",
        req: row.req,
        status: "待处理",
        origin: "转办",
        deadline: row.deadline || "",
        parentKey: row.key,
        transferInfo: row.transferInfo
      });
    }

    var matchedReason = systemSettings.transferReasons.filter(function(r){ return r.name === reasonVal })[0];
    if(matchedReason) matchedReason.count = (matchedReason.count || 0) + 1;

    this.classList.remove("show");
    this.innerHTML = "";
    showToast("转办成功！工单已转派至 " + rec + "（原因：" + reasonVal + "）");
    render();
    return;
  }

  // === 确认生成子单 ===
  var confirmSubtaskBtn = e.target.closest("[data-action='confirm-create-subtask']");
  if(confirmSubtaskBtn){
    var rec = (subtaskRecipientText || selectedSubtaskPerson || "谭星").trim();
    var reasonSel = document.getElementById("subtask-reason-select");
    var reasonVal = reasonSel ? reasonSel.value : "多主体协同处置";
    var deadlineInput = document.getElementById("subtask-deadline-input");
    var deadlineVal = deadlineInput ? deadlineInput.value.trim() : "";
    var noteInput = document.getElementById("subtask-note-input");
    var noteVal = noteInput ? noteInput.value.trim() : "";
    if(!rec){
      showToast("请选择子单接收人");
      return;
    }
    var row = currentDetailTask();
    var now = formatDeadlineDate(Date.now());
    var childKey = "subtask-" + Date.now().toString().slice(-6);

    taskRows.unshift({
      key: childKey,
      id: "YQCZ" + Date.now().toString().slice(-10),
      title: row.title + "（子单·" + reasonVal + "）",
      application: getTaskApplication(row),
      path: getTaskApplication(row) + " > 舆情协同-子任务",
      time: now,
      receiver: rec,
      sender: currentUser,
      processor: "-",
      req: row.req,
      status: "待处理",
      origin: "协同子单",
      deadline: deadlineVal || row.deadline || "",
      parentKey: row.key,
      subtaskReason: reasonVal,
      description: "【子单协同要求】" + (noteVal || "请结合父指令工作要求协助开展排查处置，并及时反馈佐证。")
    });

    var matchedSubReason = systemSettings.subtaskReasons.filter(function(r){ return r.name === reasonVal })[0];
    if(matchedSubReason) matchedSubReason.count = (matchedSubReason.count || 0) + 1;

    this.classList.remove("show");
    this.innerHTML = "";
    showToast("子单生成成功！已下发给 " + rec + " 协同推进");
    render();
    return;
  }

  // === 确认公文传阅 ===
  var toggleCirculateBtn = e.target.closest("[data-action='toggle-circulate-person']");
  if(toggleCirculateBtn){
    var p = toggleCirculateBtn.dataset.person;
    if(p){
      var idx = selectedCirculatePersons.indexOf(p);
      if(idx > -1){
        selectedCirculatePersons.splice(idx, 1);
      } else {
        selectedCirculatePersons.push(p);
      }
      openModal("circulate");
    }
    return;
  }

  var confirmCirculateBtn = e.target.closest("[data-action='confirm-circulate']");
  if(confirmCirculateBtn){
    var curRow = currentDetailTask();
    var personInput = document.getElementById("circulate-person-input");
    var noteInput = document.getElementById("circulate-note-input");
    var personVal = personInput ? personInput.value.trim() : (selectedCirculatePersons.join("、") || "武丙、武乙");
    var noteVal = noteInput ? noteInput.value.trim() : "";
    if(!personVal){
      showToast("请指定传阅对象");
      if(personInput) personInput.focus();
      return;
    }
    var nowStr = formatDeadlineDate(Date.now());
    if(curRow){
      if(!state.annotations[curRow.key]) state.annotations[curRow.key] = [];
      state.annotations[curRow.key].unshift([
        nowStr.split(" ")[0],
        nowStr.split(" ")[1],
        "公文传阅",
        currentUser + " 发起了公文传阅，传阅对象：【" + personVal + "】" + (noteVal ? "，传阅意见：" + noteVal : "")
      ]);

      // 为被传阅人增加待阅传阅记录
      var pList = personVal.split(/[、,，\s]+/).filter(Boolean);
      pList.forEach(function(recName){
        var circulateKey = "circulate-" + curRow.key + "-" + recName + "-" + Date.now().toString().slice(-4);
        if(!taskRows.some(function(r){ return r.key === circulateKey })){
          taskRows.unshift({
            key: circulateKey,
            id: "CY" + Date.now().toString().slice(-10),
            idShort: String(Math.floor(100 + Math.random() * 900)),
            type: "待阅",
            categoryTag: "传阅",
            senderOrg: "台湾省网信办",
            sender: currentUser,
            senderTime: nowStr.split(" ")[1].slice(0,5),
            urgency: curRow.urgency || "常规",
            direction: "我下发",
            title: "【传阅】" + curRow.title,
            template: curRow.template || "公文协同传阅",
            path: curRow.path + " > 传阅阅知",
            time: nowStr,
            receiver: recName,
            processor: "-",
            req: "仅阅读",
            status: "待处理",
            origin: "传阅",
            deadline: curRow.deadline || "",
            description: "【传阅意见】" + (noteVal || "请审阅并知悉相关处置进展。") + "\n\n【原指令信息】" + (curRow.description || curRow.title),
            parentKey: curRow.key
          });
        }
      });
    }
    this.classList.remove("show");
    this.innerHTML = "";
    showToast("公文传阅成功！已通知【" + personVal + "】同步审阅知悉。");
    render();
    return;
  }

  var saveExtBatchBtn = e.target.closest("[data-action='confirm-ext-batch-save']");
  if(saveExtBatchBtn){
    var bg = document.getElementById("ext-batch-group");
    var gid = bg ? bg.value : extUngroupedId;
    var ids = selectedExtIds();
    if(!ids.length){
      showToast("请先选择联系人");
      return;
    }
    extContacts.forEach(function(c){
      if(ids.indexOf(c.id) > -1) c.groupId = gid;
    });
    state.extSelected = {};
    this.classList.remove("show");
    this.innerHTML = "";
    showToast("已批量调整 "+ids.length+" 人所属分组");
    render();
    return;
  }
  var delExtBatchBtn = e.target.closest("[data-action='confirm-ext-batch-delete']");
  if(delExtBatchBtn){
    var delIds = selectedExtIds();
    extContacts = extContacts.filter(function(x){ return delIds.indexOf(x.id) === -1; });
    state.extSelected = {};
    this.classList.remove("show");
    this.innerHTML = "";
    showToast("已删除 "+delIds.length+" 名联系人");
    render();
    return;
  }
  var saveExtContactBtn = e.target.closest("[data-action='confirm-ext-contact-save']");
  if(saveExtContactBtn){
    var nameInp = document.getElementById("ext-edit-name");
    var groupSel = document.getElementById("ext-edit-group");
    var nameVal = nameInp ? nameInp.value.trim() : "";
    if(!nameVal){
      showToast("请输入真实姓名");
      return;
    }
    var c = extContacts.filter(function(x){ return x.id === state.extEditingId; })[0];
    if(c){
      c.name = nameVal;
      c.groupId = groupSel ? groupSel.value : c.groupId;
      showToast("已保存联系人信息");
    }
    this.classList.remove("show");
    this.innerHTML = "";
    render();
    return;
  }

  // === 确认保存系统设置分类 ===
  var saveSettingBtn = e.target.closest("[data-action='confirm-save-setting-item']");
  if(saveSettingBtn){
    var nameInp = document.getElementById("setting-modal-name");
    var codeInp = document.getElementById("setting-modal-code");
    var descInp = document.getElementById("setting-modal-desc");
    var enabledInp = document.getElementById("setting-modal-enabled");
    var nameVal = nameInp ? nameInp.value.trim() : "";
    var codeVal = codeInp ? codeInp.value.trim().toUpperCase() : "";
    var descVal = descInp ? descInp.value.trim() : "";
    var enabledVal = enabledInp ? enabledInp.checked : true;

    if(!nameVal){
      showToast("请输入分类名称");
      return;
    }
    if(nameVal.length > 10){
      showToast("分类名称不能超过10个字");
      return;
    }
    if(!codeVal){
      showToast("请输入字典标识编码");
      return;
    }

    var editCtx = currentEditingSetting || { type: state.settingsTab || "transfer", isEdit: false };
    var targetList = getSettingReasonList(editCtx.type);

    if(editCtx.isEdit && editCtx.itemId){
      var item = targetList.filter(function(r){ return r.id === editCtx.itemId })[0];
      if(item){
        item.name = nameVal;
        item.code = codeVal;
        item.desc = descVal;
        item.enabled = enabledVal;
        item.updatedAt = formatDeadlineDate(Date.now()).slice(0,16);
      }
      showToast("已更新分类配置");
    } else {
      var newId = (editCtx.type === "subtask" ? "sr-" : editCtx.type === "reject" ? "rj-" : "tr-") + Date.now().toString().slice(-4);
      targetList.unshift({
        id: newId,
        name: nameVal,
        code: codeVal,
        desc: descVal,
        enabled: enabledVal,
        count: 0,
        updatedAt: formatDeadlineDate(Date.now()).slice(0,16)
      });
      showToast("新增分类成功！");
    }

    this.classList.remove("show");
    this.innerHTML = "";
    render();
    return;
  }

  if(e.target.closest("[data-transfer-submit]")){var form=e.target.closest(".transfer-form"),note=form.querySelector("[data-transfer-note]").value.trim(),deadlineInput=form.querySelector("[data-transfer-deadline]");if(!transferRecipientText){showToast("请选择转办接收人");return}if(deadlineInput&&!deadlineInput.value){showToast("请选择限时时间");return}if(deadlineInput&&new Date(deadlineInput.value)<=new Date()){showToast("限时时间必须晚于当前时间");return}var row=currentDetailTask(),oldDeadline=row.deadline||"-",newDeadline=deadlineInput?deadlineInput.value.replace("T"," ")+":00":"-",now="2026-08-18 10:18:26",childKey="transfer-"+row.key;row.transferred=true;row.childKey=childKey;row.transferInfo={from:currentUser,to:transferRecipientText,time:now,remark:note||"-",oldDeadline:oldDeadline,newDeadline:newDeadline};if(!taskRows.some(function(r){return r.key===childKey}))taskRows.push({key:childKey,title:row.title+"（转办）",application:getTaskApplication(row),path:getTaskApplication(row)+" > 舆情处置-转办",time:now,receiver:transferRecipientText,sender:currentUser,processor:"-",req:row.req,status:"待处理",origin:"转办",deadline:newDeadline==="-"?"":newDeadline,parentKey:row.key,transferInfo:row.transferInfo});this.classList.remove("show");this.innerHTML="";showToast("转办成功，已生成新的子指令");render();return}
  var checkOption=e.target.closest("[data-check-option]");
  if(checkOption){var check=checkOption.querySelector(".fake-check");check.classList.toggle("on");check.textContent=check.classList.contains("on")?"✓":"";return}
  var radioOption=e.target.closest("[data-permission-radio]");
  if(radioOption){var group=radioOption.closest("[data-permission-group]");group.querySelectorAll(".radio").forEach(function(n){n.classList.remove("on")});radioOption.querySelector(".radio").classList.add("on");var grid=group.parentElement.querySelector("[data-permission-grid]");if(grid)grid.style.display=radioOption.dataset.permissionRadio==="指定分组"?"grid":"none";return}
  var t=e.target.closest("[data-close],[data-open],[data-generate]");
  if(!t)return;
  if(t.hasAttribute("data-close")){
    if(state.previewReturnModal === "issue"){
      state.previewReturnModal = null;
      wizardState.step = 1;
      openModal("issue");
      return;
    }
    resetWizardState();
    this.classList.remove("show");
    this.innerHTML="";
    render();
  }else if(t.dataset.open){if(t.dataset.open==="recipient"){recipientReturn=t.dataset.return||(t.closest(".subtask-modal")?"subtask":t.closest(".transfer-form")?"transfer-person":"issue")}openModal(t.dataset.open)}else if(t.hasAttribute("data-generate"))openModal("invite-result")
};
document.getElementById("modalRoot").onchange=function(e){
  if(e.target.closest("[data-invite-org],[data-invite-qr-expire],[data-invite-code-expire]")){
    syncInviteFormFromDom(this);
    openModal("invite");
    return;
  }
  var sel=e.target.closest(".origin-fill-select");
  if(sel){
    originSelectedMappings[sel.dataset.originField]=sel.value;
    var countSpan=this.querySelector("[data-origin-selected-count]");
    if(countSpan)countSpan.textContent="已选择填入字段 "+getOriginSelectedCount()+" 项";
  }
  if(e.target.matches("[data-wizard-field='urgency']")){
    wizardState.formData.urgency = e.target.value;
  }
  if(e.target.matches("[data-action='prop-edit-required']")){
    var curF = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF){
      curF.required = e.target.checked;
      var cardHead = this.querySelector(".canvas-field-card.active .canvas-field-label");
      if(cardHead) cardHead.classList.toggle("req", curF.required);
    }
  }
};
document.getElementById("modalRoot").oninput=function(e){
  if(e.target.matches("[data-invite-custom]")){
    inviteState.qrCustom = e.target.value;
    var n = parseInt(e.target.value, 10);
    if(n > 0){
      inviteState.qrLimit = n;
      var lab = this.querySelector("[data-invite-limit-label]");
      if(lab) lab.textContent = n;
    }
    return;
  }
  if(e.target.matches("[data-invite-batch-name]")){
    inviteState.batchName = e.target.value;
    return;
  }
  if(e.target.matches("[data-action='prop-edit-name']")){
    var curF = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF){
      curF.name = e.target.value;
      var cardHead = this.querySelector(".canvas-field-card.active .canvas-field-label span:first-child");
      var idx = tplWizardState.formFields.indexOf(curF);
      if(cardHead) cardHead.textContent = (idx + 1) + ". " + (curF.name || "未命名字段");
    }
    return;
  }
  if(e.target.matches("[data-action='prop-edit-placeholder']")){
    var curF2 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF2){
      curF2.placeholder = e.target.value;
      var inp = this.querySelector(".canvas-field-card.active input, .canvas-field-card.active textarea");
      if(inp) inp.placeholder = curF2.placeholder;
    }
    return;
  }
  if(e.target.matches("[data-action='prop-edit-default']")){
    var curF3 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF3){
      curF3.defaultValue = e.target.value;
      var inp2 = this.querySelector(".canvas-field-card.active input, .canvas-field-card.active textarea");
      if(inp2) inp2.value = curF3.defaultValue;
    }
    return;
  }
  if(e.target.matches("[data-action='prop-edit-desc']")){
    var curF4 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF4){
      curF4.desc = e.target.value;
    }
    return;
  }
  if(e.target.matches("[data-action='prop-edit-unit']")){
    var curF5 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF5){
      curF5.unit = e.target.value;
    }
    return;
  }
  if(e.target.matches("[data-action='prop-edit-option']")){
    var optIdx = Number(e.target.dataset.optionIndex);
    var curF6 = tplWizardState.formFields.filter(function(f){ return f.id === tplWizardState.selectedFieldId; })[0];
    if(curF6 && curF6.options && curF6.options[optIdx] !== undefined){
      curF6.options[optIdx] = e.target.value;
    }
    return;
  }
  if(e.target.matches("[data-origin-input]")){
    originLinkValue=e.target.value;
    wizardState.formData.url=e.target.value;
    return;
  }
  if(e.target.matches("[data-action='wizard-search-input']")){
    wizardState.tplSearchKeyword = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var filterCat = wizardState.tplCategoryFilter;
    var tpls = issueTemplates.filter(function(t){
      var matchCat = filterCat === "全部" || t.category === filterCat;
      var matchKw = !kw || t.name.toLowerCase().indexOf(kw) > -1 || t.desc.toLowerCase().indexOf(kw) > -1 || t.id.toLowerCase().indexOf(kw) > -1;
      return t.enabled !== false && matchCat && matchKw;
    });
    var grid = this.querySelector(".wizard-tpl-grid");
    if(grid){
      grid.innerHTML = tpls.map(function(t){
        var isSelected = t.id === wizardState.selectedTemplateId;
        var isUrgent = t.requirement === "限时回执";
        var pillClass = isUrgent ? "reply" : t.requirement === "仅阅读" ? "read" : "reply";
        return '<div class="wizard-tpl-card '+(isSelected?'selected':'')+'" data-action="wizard-select-tpl" data-tpl-id="'+t.id+'">'+
          '<div>'+
            '<div class="wizard-tpl-head">'+
              '<span class="tpl-tag-pill '+pillClass+'">'+(isUrgent?ico("clock-3",12):ico("check-check",12))+' '+t.requirement+'</span>'+
              '<span class="tpl-version-text">'+t.scope+' · '+t.version+'</span>'+
            '</div>'+
            '<div class="wizard-tpl-title">'+escapeHtml(t.name)+'</div>'+
            '<div class="wizard-tpl-code">'+t.id+'</div>'+
            '<div class="wizard-tpl-desc">'+escapeHtml(t.desc)+'</div>'+
          '</div>'+
          '<div>'+
            '<div class="wizard-tpl-meta">'+
              '<span>'+ico("sliders",13)+' 包含字段 <b>'+t.fields.length+' 个</b></span>'+
              '<span style="color:#cbd5e1">|</span>'+
              '<span>'+ico("history",13)+' 累计使用 <b>'+t.usedCount+' 次</b></span>'+
            '</div>'+
            '<div class="wizard-tpl-foot">'+
              '<span class="wizard-tpl-stats">分类：<b>'+t.category+'</b></span>'+
              '<button type="button" class="btn-choose-tpl" data-action="wizard-choose-and-next" data-tpl-id="'+t.id+'">'+ico("arrow-right",13)+' 选用并下一步</button>'+
            '</div>'+
          '</div>'+
        '</div>';
      }).join("");
      if(window.lucide) lucide.createIcons();
    }
    return;
  }
  if(e.target.matches("[data-action='wizard-rec-tree-search']") || e.target.matches("[data-action='issue-modal-rec-tree-search']")){
    wizardState.recipientTreeSearchKw = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var treeScroll = this.querySelector(".tree-scroll-pane");
    if(treeScroll){
      treeScroll.innerHTML = renderOrgTreeNodesHtml(wizardOrgTreeData, 0, wizardState.recipientOrgTreeActiveId, kw, wizardState.recipientOrgTreeExpanded);
      if(window.lucide) lucide.createIcons();
    }
    return;
  }
  if(e.target.matches("[data-action='wizard-rec-search-input']") || e.target.matches("[data-action='issue-modal-rec-search-input']")){
    wizardState.recipientSearchKw = e.target.value;
    var searchKw = e.target.value.trim().toLowerCase();
    var activeDim = wizardState.recipientDimTab || "org";
    var listData = wizardRecipientDimensionData[activeDim] || [];
    if(activeDim === "person"){
      var curSub = wizardState.recipientPersonSubtab || "all";
      listData = listData.filter(function(p){
        if(curSub === "internal" && !p.isInternal) return false;
        if(curSub === "external" && p.isInternal) return false;
        return true;
      });
    }
    var filteredList = listData.filter(function(item){
      if(!searchKw) return true;
      return item.name.toLowerCase().indexOf(searchKw) > -1 || (item.sub && item.sub.toLowerCase().indexOf(searchKw) > -1) || (item.role && item.role.toLowerCase().indexOf(searchKw) > -1) || (item.org && item.org.toLowerCase().indexOf(searchKw) > -1);
    });
    var isIssueModal = e.target.matches("[data-action='issue-modal-rec-search-input']");
    var toggleAction = isIssueModal ? "issue-modal-toggle-rec" : "wizard-toggle-recipient";
    var scrollPane = this.querySelector(".wizard-rec-list-scroll");
    if(scrollPane){
      scrollPane.innerHTML = filteredList.map(function(item){
        var isSelected = !!wizardState.selectedRecipients[item.name];
        var avatarText = item.avatar || (item.type==="机构"?"机":item.type==="分组"?"组":item.type==="角色"?"角":"人");
        return '<div class="rec-item-row '+(isSelected?'selected':'')+'" data-action="'+toggleAction+'" data-name="'+item.name+'" data-type="'+item.type+'" data-id="'+item.id+'">'+
          '<div class="rec-item-left">'+
            '<span class="rec-item-avatar">'+avatarText+'</span>'+
            '<div class="rec-item-info">'+
              '<span class="rec-item-name">'+escapeHtml(item.name)+'</span>'+
              '<span class="rec-item-sub">'+(item.sub || item.role || item.org || "")+' '+(item.count ? ' · <b style="color:var(--teal)">'+item.count+'</b>' : '')+'</span>'+
            '</div>'+
          '</div>'+
          '<span class="row-check '+(isSelected?'on':'')+'"></span>'+
        '</div>';
      }).join("");
      if(window.lucide) lucide.createIcons();
    }
    return;
  }
  if(e.target.matches("[data-wizard-field]")){
    var f=e.target.dataset.wizardField;
    wizardState.formData[f]=e.target.value;
    return;
  }
  if(e.target.matches("[data-transfer-note]")){var transferCount=this.querySelector("[data-transfer-count]");if(transferCount)transferCount.textContent=e.target.value.length;return}
  if(!e.target.matches("[data-recipient-search]"))return;
  var keyword=e.target.value.trim().toLowerCase(),counter=this.querySelector("[data-recipient-count]");
  if(counter)counter.textContent=e.target.value.length;
  this.querySelectorAll("[data-recipient-option]").forEach(function(row){row.style.display=!keyword||row.dataset.name.toLowerCase().indexOf(keyword)>-1?"flex":"none"});
};
function showPopover(type,button){
  var pop=document.getElementById("popover");document.querySelectorAll(".tool-circle").forEach(function(n){n.classList.remove("active")});
  if(pop.dataset.type===type&&pop.classList.contains("show")){pop.classList.remove("show");pop.dataset.type="";return}
  button.classList.add("active");pop.dataset.type=type;pop.style.top="68px";
  if(type==="todo"){pop.style.width="395px";pop.style.left="calc(50% + 20px)";pop.innerHTML='<div class="pop-head"><span>待办</span><span class="link" data-page-pop="sent-mgmt">查看更多</span></div><div class="pop-list">'+taskRows.slice(0,3).map(function(r){return '<div class="pop-item"><b>'+r.title+'</b><p>下发人/机构：齐杰/台湾省网信办 <span class="tag returned" style="float:right">待处理</span></p><time>'+r.time+'</time></div>'}).join("")+'</div><div style="text-align:center;color:#a2abb2;padding:12px">已到底部</div>'}
  else if(type==="notice"){pop.style.width="395px";pop.style.left="calc(50% + 65px)";pop.innerHTML='<div class="pop-head"><span>通知</span><span class="link">查看更多</span></div><div class="pop-list">'+["齐杰 下发了指令「舆情处置：#新生儿起名改名」","齐杰 下发了指令「舆情处置：北京年年下大雨」","谭 阅读了指令「舆情处置：慈云寺北里社区」","齐杰 下发了指令「舆情处置：因殡仪馆失误」"].map(function(t,i){return '<div class="pop-item"><b>'+t+'</b><p>来源：指令流转</p><time>2026-08-'+(17-i)+' 09:16:13</time></div>'}).join("")+'</div><div class="link" style="padding:12px 20px">全部已读</div>'}
  else{pop.style.width="675px";pop.style.left="calc(50% - 60px)";pop.innerHTML='<div style="padding:25px 28px"><h3>联系客户经理</h3><div class="grid-2"><div class="user-cell"><span class="mini-avatar" style="width:78px;height:78px">齐</span><div><h2>齐杰　<span class="tag archived">专员</span></h2><p style="color:#89959f">电话：159-3484-3696</p></div><div class="qr" style="width:75px;height:75px;margin:0 0 0 auto;background-size:8px 8px;border-width:7px"></div></div><div class="user-cell"><span class="mini-avatar" style="width:78px;height:78px">穆</span><div><h2>穆猛强　<span class="tag archived">主管</span></h2><p style="color:#89959f">电话：131-7063-3110</p></div><div class="qr" style="width:75px;height:75px;margin:0 0 0 auto;background-size:8px 8px;border-width:7px"></div></div></div><div class="link" style="text-align:right">'+ico("tag",17)+' 投诉建议</div></div>'}
  pop.classList.add("show");if(window.lucide)lucide.createIcons()
}
document.querySelectorAll("[data-page]").forEach(function(n){
  n.onclick=function(){
    flushGuideLinkInputs();
    var p = n.dataset.page;
    if(p === "roles"){
      state.page = "roles";
      state.settingsMenu = "roles";
    } else if(p === "settings"){
      state.page = "settings";
      if(!state.settingsMenu || state.settingsMenu === "templates") state.settingsMenu = "dict";
    } else {
      state.page = p;
      if(p === "todo" && !state.mySubPage) state.mySubPage = "todo";
      if(p === "issue-dispatch") state.issueDraftView = false;
    }
    render();
    window.scrollTo(0,0);
  };
});
document.querySelectorAll("[data-pop]").forEach(function(n){n.onclick=function(e){e.stopPropagation();showPopover(n.dataset.pop,n)}});
document.getElementById("popover").onclick=function(e){var t=e.target.closest("[data-page-pop]");if(t){state.page=t.dataset.pagePop;this.classList.remove("show");render()}};
document.addEventListener("click",function(e){
  // === 用户头像下拉菜单外部点击关闭 ===
  if(!e.target.closest(".user-profile-menu-container")){
    var userDrop = document.getElementById("user-profile-dropdown");
    var userTrig = document.getElementById("user-profile-trigger");
    if(userDrop && userDrop.classList.contains("show")){
      userDrop.classList.remove("show");
      if(userTrig) userTrig.classList.remove("active");
    }
  }
  if(!e.target.closest(".nav-dropdown")){
    closeNavSettingsMenu();
  }

  // === 统一入口卡片点击与主导航首页图标 ===
  var homeBtn = e.target.closest(".nav-home");
  if(homeBtn){
    state.page = "guide";
    render();
    window.scrollTo(0,0);
    return;
  }
  var guideLinkCard = e.target.closest(".guide-card-link");
  if(guideLinkCard && !e.target.closest("input, button, .link")){
    flushGuideLinkInputs();
    var cardTarget = guideLinkCard.dataset.cardTarget;
    var currentUrl = getGuideLink(cardTarget);
    if(currentUrl){
      window.open(currentUrl, "_blank");
    } else {
      if(!state.guideEditing) state.guideEditing = {};
      state.guideEditing[cardTarget] = true;
      render();
      setTimeout(function(){
        var inp = document.getElementById("guide-link-" + cardTarget);
        if(inp){ inp.focus(); }
      }, 50);
      showToast("请先输入" + (cardTarget === "mobile" ? "移动端" : "MT端") + "跳转链接并点击保存");
    }
    return;
  }

  // === 全局导航与页面路由切换 ===
  var navPageBtn = e.target.closest("[data-page]");
  if(navPageBtn){
    flushGuideLinkInputs();
    var p = navPageBtn.dataset.page;
    if(p === "roles"){
      state.page = "roles";
      state.settingsMenu = "roles";
    } else if(p === "settings"){
      state.page = "settings";
      if(!state.settingsMenu || state.settingsMenu === "templates") state.settingsMenu = "dict";
    } else {
      state.page = p;
      if(p === "todo" && !state.mySubPage) state.mySubPage = "todo";
      if(p === "issue-dispatch") state.issueDraftView = false;
    }
    render();
    window.scrollTo(0,0);
    return;
  }

  var openIssueDraftsBtn = e.target.closest("[data-action='open-issue-drafts']");
  if(openIssueDraftsBtn){
    state.page = "issue-dispatch";
    state.issueDraftView = true;
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers.draft=1;
    render();
    window.scrollTo(0,0);
    return;
  }
  var backIssueTplBtn = e.target.closest("[data-action='back-issue-templates']");
  if(backIssueTplBtn){
    state.page = "issue-dispatch";
    state.issueDraftView = false;
    render();
    window.scrollTo(0,0);
    return;
  }

  // === 全局下发指令相关 ===
  var openIssueRecModalBtn = e.target.closest("[data-action='open-issue-recipient-modal']");
  if(openIssueRecModalBtn){
    openModal("issue-recipient");
    return;
  }
  var issueRemoveRecPill = e.target.closest("[data-action='issue-remove-rec']");
  if(issueRemoveRecPill){
    e.stopPropagation();
    var pillName = issueRemoveRecPill.dataset.name;
    delete wizardState.selectedRecipients[pillName];
    render();
    return;
  }
  var quickDeadlineBtn = e.target.closest("[data-action='quick-deadline']");
  if(quickDeadlineBtn){
    var hours = Number(quickDeadlineBtn.dataset.hours) || 4;
    var targetDate = new Date(Date.now() + hours * 3600 * 1000);
    var dStr = formatDeadlineDate(targetDate.getTime());
    wizardState.formData.deadline = dStr;
    var dInput = document.getElementById("issue-form-deadline");
    if(dInput) dInput.value = dStr;
    document.querySelectorAll("[data-action='quick-deadline']").forEach(function(el){ el.classList.remove("active"); });
    quickDeadlineBtn.classList.add("active");
    return;
  }
  var saveIssueDraftBtn = e.target.closest("[data-action='save-issue-draft']");
  if(saveIssueDraftBtn){
    var titleInp = document.getElementById("issue-form-title") || document.querySelector("[data-issue-page-field='title']");
    var sourceInp = document.getElementById("issue-form-source") || document.querySelector("[data-issue-page-field='source']");
    var descInp = document.getElementById("issue-form-desc") || document.querySelector("[data-issue-page-field='desc']");
    var deadlineInp = document.getElementById("issue-form-deadline") || document.querySelector("[data-issue-page-field='deadline']");
    var urgencySel = document.getElementById("issue-form-urgency") || document.querySelector("[data-issue-page-field='urgency']");
    var urlInp = document.getElementById("issue-form-url") || document.querySelector("[data-issue-page-field='url']");

    var curTpl = getTemplateById(wizardState.selectedTemplateId);
    var titleVal = (titleInp ? titleInp.value.trim() : "") || (wizardState.formData.title || "") || ("【草稿】" + (curTpl ? curTpl.name : "新指令"));
    var sourceVal = (sourceInp ? sourceInp.value.trim() : "") || (wizardState.formData.source || "网络监测平台");
    var descVal = (descInp ? descInp.value.trim() : "") || (wizardState.formData.description || "");
    var deadlineVal = (deadlineInp ? deadlineInp.value.trim() : "") || (wizardState.formData.deadline || "");
    var urgencyVal = (urgencySel ? urgencySel.value : "") || (wizardState.formData.urgency || "加急");
    var urlVal = (urlInp ? urlInp.value.trim() : "") || (wizardState.formData.url || "");

    var recKeys = Object.keys(wizardState.selectedRecipients);
    var recText = recKeys.length ? recKeys.join("、") : (wizardState.editingDraftKey ? "各相关单位" : "未指定接收人");

    var now = new Date();
    var pad = function(n){ return String(n).padStart(2, "0"); };
    var nowTime = now.getFullYear() + "-" + pad(now.getMonth()+1) + "-" + pad(now.getDate()) + " " + pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());

    if(wizardState.editingDraftKey){
      var existDraft = draftRows.filter(function(d){ return d.key === wizardState.editingDraftKey; })[0];
      if(existDraft){
        existDraft.title = titleVal;
        existDraft.template = curTpl ? curTpl.name : existDraft.template;
        existDraft.time = nowTime;
        existDraft.receiver = recText;
        existDraft.deadline = deadlineVal;
        existDraft.description = descVal;
        existDraft.source = sourceVal;
        existDraft.url = urlVal;
        existDraft.urgency = urgencyVal;
      }
    } else {
      var newDraftId = "CG-" + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate()) + "-" + ("00" + (draftRows.length + 1)).slice(-3);
      draftRows.unshift({
        key: "draft-" + Date.now(),
        id: newDraftId,
        title: titleVal,
        template: curTpl ? curTpl.name : "舆情处置-限时回执",
        time: nowTime,
        receiver: recText,
        sender: currentUser,
        processor: "-",
        req: curTpl ? curTpl.requirement : "限时回执",
        status: "草稿",
        origin: "草稿",
        deadline: deadlineVal,
        description: descVal,
        source: sourceVal,
        url: urlVal,
        urgency: urgencyVal
      });
    }

    showToast("✓ 已成功暂存至草稿箱！");
    return;
  }
  var wizardSaveDraftBtn = e.target.closest("[data-action='wizard-save-draft']");
  if(wizardSaveDraftBtn){
    var modalEl = document.getElementById("modalRoot");
    if(modalEl && modalEl.classList.contains("show")){
      var titleInp = modalEl.querySelector("[data-wizard-field='title']");
      if(titleInp) wizardState.formData.title = titleInp.value;
      var urgInp = modalEl.querySelector("[data-wizard-field='urgency']");
      if(urgInp) wizardState.formData.urgency = urgInp.value;
      var respInp = modalEl.querySelector("[data-wizard-field='responseTime']");
      if(respInp) wizardState.formData.responseTime = respInp.value;
      var deadInp = modalEl.querySelector("[data-wizard-field='deadline']");
      if(deadInp) wizardState.formData.deadline = deadInp.value.replace("T", " ");
      var noteInp = modalEl.querySelector("[data-wizard-field='note']");
      if(noteInp) wizardState.formData.note = noteInp.value;
      var srcInp = modalEl.querySelector("[data-wizard-field='source']");
      if(srcInp) wizardState.formData.source = srcInp.value;
      var urlInp = modalEl.querySelector("[data-wizard-field='url']");
      if(urlInp) wizardState.formData.url = urlInp.value;
      var descInp = modalEl.querySelector("[data-wizard-field='description']");
      if(descInp) wizardState.formData.description = descInp.value;
    }
    var curTpl2 = getTemplateById(wizardState.selectedTemplateId);
    var titleVal2 = (wizardState.formData.title || "").trim() || ("【草稿】" + (curTpl2 ? curTpl2.name : "新指令"));
    var now2 = new Date();
    var pad2 = function(n){ return String(n).padStart(2, "0"); };
    var nowTime2 = now2.getFullYear() + "-" + pad2(now2.getMonth()+1) + "-" + pad2(now2.getDate()) + " " + pad2(now2.getHours()) + ":" + pad2(now2.getMinutes()) + ":" + pad2(now2.getSeconds());
    var newDraftId2 = "CG-" + now2.getFullYear() + pad2(now2.getMonth()+1) + pad2(now2.getDate()) + "-" + ("00" + (draftRows.length + 1)).slice(-3);

    draftRows.unshift({
      key: "draft-" + Date.now(),
      id: newDraftId2,
      title: titleVal2,
      template: curTpl2 ? curTpl2.name : "舆情处置-限时回执",
      time: nowTime2,
      receiver: Object.keys(wizardState.selectedRecipients).join("、") || "未指定",
      sender: currentUser,
      processor: "-",
      req: curTpl2 ? curTpl2.requirement : "限时回执",
      status: "草稿",
      origin: "草稿",
      deadline: wizardState.formData.deadline || "",
      description: wizardState.formData.description || "",
      source: wizardState.formData.source || "",
      url: wizardState.formData.url || "",
      urgency: wizardState.formData.urgency || "加急"
    });

    showToast("✓ 已成功暂存至草稿箱！");
    return;
  }
  var editDraftBtn = e.target.closest("[data-action='edit-draft']");
  if(editDraftBtn){
    var draftKey = editDraftBtn.dataset.draftKey;
    var draftItem = draftRows.filter(function(d){ return d.key === draftKey; })[0];
    openIssueWizardFromDraft(draftItem);
    if(draftItem) showToast("已载入草稿【" + draftItem.title + "】，可继续编辑或立即下发");
    return;
  }
  var copyDraftBtn = e.target.closest("[data-action='copy-draft']");
  if(copyDraftBtn){
    var cDraftKey = copyDraftBtn.dataset.draftKey;
    var cDraftItem = draftRows.filter(function(d){ return d.key === cDraftKey; })[0];
    if(cDraftItem){
      var cNow = new Date();
      var cPad = function(n){ return String(n).padStart(2, "0"); };
      var cNowTime = cNow.getFullYear() + "-" + cPad(cNow.getMonth()+1) + "-" + cPad(cNow.getDate()) + " " + cPad(cNow.getHours()) + ":" + cPad(cNow.getMinutes()) + ":" + cPad(cNow.getSeconds());
      var cNewDraftId = "CG-" + cNow.getFullYear() + cPad(cNow.getMonth()+1) + cPad(cNow.getDate()) + "-" + Date.now().toString().slice(-3);
      var newCopyDraft = JSON.parse(JSON.stringify(cDraftItem));
      newCopyDraft.key = "draft-" + Date.now();
      newCopyDraft.id = cNewDraftId;
      newCopyDraft.title = cDraftItem.title + "（副本）";
      newCopyDraft.time = cNowTime;
      draftRows.unshift(newCopyDraft);
      render();
      showToast("已成功复制草稿：" + cDraftItem.title);
    }
    return;
  }
  var deleteDraftBtn = e.target.closest("[data-action='delete-draft']");
  if(deleteDraftBtn){
    var dDraftKey = deleteDraftBtn.dataset.draftKey;
    var dDraftItem = draftRows.filter(function(d){ return d.key === dDraftKey; })[0];
    draftRows = draftRows.filter(function(d){ return d.key !== dDraftKey; });
    render();
    showToast("已删除草稿：" + (dDraftItem ? dDraftItem.title : ""));
    return;
  }
  var backIssueBtn = e.target.closest("[data-action='back-from-issue-form']");
  if(backIssueBtn){
    state.page = "todo";
    render();
    window.scrollTo(0,0);
    return;
  }
  var submitIssueBtn = e.target.closest("[data-action='issue-form-submit']");
  if(submitIssueBtn){
    if(!assertCanIssue()) return;
    var titleInp = document.getElementById("issue-form-title");
    var sourceInp = document.getElementById("issue-form-source");
    var descInp = document.getElementById("issue-form-desc");
    var deadlineInp = document.getElementById("issue-form-deadline");
    var urgencySel = document.getElementById("issue-form-urgency");
    var urlInp = document.getElementById("issue-form-url");

    var titleVal = titleInp ? titleInp.value.trim() : (wizardState.formData.title || "");
    var sourceVal = sourceInp ? sourceInp.value.trim() : (wizardState.formData.source || "");
    var descVal = descInp ? descInp.value.trim() : (wizardState.formData.description || "");
    var deadlineVal = deadlineInp ? deadlineInp.value.trim() : (wizardState.formData.deadline || "");
    var urgencyVal = urgencySel ? urgencySel.value : (wizardState.formData.urgency || "加急");
    var urlVal = urlInp ? urlInp.value.trim() : (wizardState.formData.url || "");

    if(!titleVal){
      showToast("请输入指令标题");
      if(titleInp) titleInp.focus();
      return;
    }
    if(!sourceVal){
      showToast("请输入舆情来源/平台");
      if(sourceInp) sourceInp.focus();
      return;
    }
    if(!descVal){
      showToast("请输入舆情说明/处置要求");
      if(descInp) descInp.focus();
      return;
    }
    var recKeys = Object.keys(wizardState.selectedRecipients);
    if(!recKeys.length){
      showToast("请至少选择一个指令接收人或接收机构");
      openModal("issue-recipient");
      return;
    }

    var nowKey = "YQCZ" + Date.now().toString().slice(-10);
    var nowTime = formatDeadlineDate(Date.now());
    var recText = recKeys.join("、");
    var curTpl = getTemplateById(wizardState.selectedTemplateId);

    taskRows.unshift({
      key: "task-" + Date.now().toString().slice(-6),
      id: nowKey,
      title: titleVal,
      application: "指令流转",
      path: "指令流转 > " + curTpl.name,
      time: nowTime,
      receiver: recText,
      sender: currentUser,
      processor: "-",
      req: curTpl.requirement,
      status: "待处理",
      origin: "下发",
      deadline: curTpl.requirement === "限时回执" ? deadlineVal : "",
      description: descVal,
      source: sourceVal,
      url: urlVal
    });

    consumeIssueStorage();
    resetWizardState();
    state.page = "sent-mgmt";
    render();
    window.scrollTo(0,0);
    showToast("✓ 指令下发成功！已进入流转闭环与协同跟踪。");
    return;
  }
  var issueActionBtn = e.target.closest("[data-action='issue'],[data-action='go-issue-dispatch']");
  if(issueActionBtn){
    if(!assertCanIssue()) return;
    state.page = "issue-dispatch";
    state.issueDraftView = false;
    render();
    window.scrollTo(0,0);
    return;
  }
  var issueWithTplBtn = e.target.closest("[data-action='issue-with-tpl']");
  if(issueWithTplBtn){
    if(!assertCanIssue()) return;
    resetWizardState();
    wizardState.selectedTemplateId = issueWithTplBtn.dataset.tplId || "TP-YQ-01";
    wizardState.formData.title = "";
    wizardState.formData.urgency = "";
    wizardState.formData.responseTime = "";
    wizardState.formData.deadline = "";
    wizardState.formData.source = "";
    wizardState.formData.url = "";
    wizardState.formData.description = "";
    wizardState.formData.note = "";
    wizardState.step = 2;
    openModal("issue");
    return;
  }
  var switchTplTabBtn = e.target.closest("[data-action='switch-template-tab']");
  if(switchTplTabBtn){
    state.templatePageTab = switchTplTabBtn.dataset.tab || "舆情处置";
    render();
    return;
  }
  var copyIdBtn = e.target.closest("[data-action='copy-id']");
  if(copyIdBtn){
    var textToCopy = copyIdBtn.dataset.copyText || "";
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(textToCopy).then(function(){
        showToast("已复制ID至剪贴板: " + textToCopy);
      }).catch(function(){
        showToast("复制成功: " + textToCopy);
      });
    } else {
      showToast("复制成功: " + textToCopy);
    }
    return;
  }

  var openSettingsDictBtn = e.target.closest("[data-action='open-settings-dict']");
  if(openSettingsDictBtn){
    openSettingsSection("dict");
    return;
  }
  var openSettingsStorageBtn = e.target.closest("[data-action='open-settings-storage']");
  if(openSettingsStorageBtn){
    openSettingsSection("storage");
    return;
  }
  var openV8JumpBtn = e.target.closest("[data-action='open-v8-jump-modal']");
  if(openV8JumpBtn){
    closeNavSettingsMenu();
    openModal("v8-jump");
    return;
  }
  var issuePageFilterBtn = e.target.closest("[data-action='issue-page-filter-cat']");
  if(issuePageFilterBtn){
    state.issueTplCat = issuePageFilterBtn.dataset.cat || "全部";
    render();
    return;
  }
  var issuePageSelectBtn = e.target.closest("[data-action='issue-page-select-tpl']");
  if(issuePageSelectBtn && !e.target.closest("[data-action='issue-with-tpl'],[data-action='preview-tpl-item']")){
    wizardState.selectedTemplateId = issuePageSelectBtn.dataset.tplId;
    render();
    return;
  }

  // === 系统设置相关交互 ===
  var switchSettingsMenuBtn = e.target.closest("[data-action='switch-settings-menu']");
  if(switchSettingsMenuBtn){
    state.settingsMenu = switchSettingsMenuBtn.dataset.menu || "dict";
    render();
    return;
  }
  var confirmStorageCleanBtn = e.target.closest("[data-action='confirm-storage-clean']");
  if(confirmStorageCleanBtn){
    confirmStorageClean();
    return;
  }
  var confirmStoreWarehouseBtn = e.target.closest("[data-action='confirm-store-warehouse']");
  if(confirmStoreWarehouseBtn){
    confirmStoreWarehouse();
    return;
  }
  var confirmWarehouseGroupBtn = e.target.closest("[data-action='confirm-warehouse-group']");
  if(confirmWarehouseGroupBtn){
    confirmWarehouseGroup();
    return;
  }

  var previewTplBtn = e.target.closest("[data-action='preview-tpl-item']");
  if(previewTplBtn){
    state.previewTplId = previewTplBtn.dataset.tplId;
    state.previewTplTab = "form";
    var fromWizard = !!previewTplBtn.closest(".wizard-modal-box") || !!previewTplBtn.closest(".wizard-tpl-grid") || previewTplBtn.dataset.fromWizard === "true";
    state.previewReturnModal = fromWizard ? "issue" : null;
    openModal("pc-template-preview");
    return;
  }
  var switchPreviewTplTabBtn = e.target.closest("[data-action='switch-preview-tpl-tab']");
  if(switchPreviewTplTabBtn){
    state.previewTplTab = switchPreviewTplTabBtn.dataset.tab || "form";
    openModal("pc-template-preview");
    return;
  }

  // 1. 模板管理动作
  if(e.target.closest("[data-action='open-create-template-wizard']")){
    resetTplWizard();
    openModal("template-wizard");
    return;
  }
  var editTplBtn = e.target.closest("[data-action='edit-tpl-wizard']");
  if(editTplBtn){
    var tplId = editTplBtn.dataset.tplId;
    resetTplWizard(tplId);
    tplWizardState.step = 2;
    openModal("template-wizard");
    return;
  }
  var copyTplBtn = e.target.closest("[data-action='copy-tpl-item']");
  if(copyTplBtn){
    var copyId = copyTplBtn.dataset.tplId;
    var origTpl = issueTemplates.filter(function(t){ return t.id === copyId; })[0];
    if(origTpl){
      var newTpl = JSON.parse(JSON.stringify(origTpl));
      newTpl.id = "TPL" + new Date().getFullYear() + ("0"+(new Date().getMonth()+1)).slice(-2) + ("0"+new Date().getDate()).slice(-2) + Date.now().toString().slice(-4);
      newTpl.name = origTpl.name + "（副本）";
      newTpl.usedCount = 0;
      issueTemplates.unshift(newTpl);
      showToast("已成功复制模板：" + origTpl.name);
      render();
    }
    return;
  }
  var delTplBtn = e.target.closest("[data-action='delete-tpl-item']");
  if(delTplBtn){
    var delId = delTplBtn.dataset.tplId;
    var tplToDelete = issueTemplates.filter(function(t){ return t.id === delId; })[0];
    issueTemplates = issueTemplates.filter(function(t){ return t.id !== delId; });
    showToast("已删除模板：" + (tplToDelete ? tplToDelete.name : ""));
    render();
    return;
  }
  var filterTplCatBtn = e.target.closest("[data-action='filter-settings-tpl-cat']");
  if(filterTplCatBtn){
    state.tplFilterCat = filterTplCatBtn.dataset.cat || "全部";
    render();
    return;
  }
  var filterTplReqBtn = e.target.closest("[data-action='filter-settings-tpl-req']");
  if(filterTplReqBtn){
    state.tplFilterReq = filterTplReqBtn.dataset.req || "全部";
    render();
    return;
  }

  // 2. 角色权限动作
  var editRoleDetailBtn = e.target.closest("[data-action='edit-role-detail']");
  if(editRoleDetailBtn){
    state.roleSubView = "detail";
    state.selectedRoleId = editRoleDetailBtn.dataset.roleId;
    state.rolePermTab = "menu";
    captureRoleBaseline();
    render();
    window.scrollTo(0,0);
    return;
  }
  var backToRoleListBtn = e.target.closest("[data-action='back-to-role-list']");
  if(backToRoleListBtn){
    leaveRoleDetail();
    return;
  }
  var saveRoleAndLeaveBtn = e.target.closest("[data-action='save-role-and-leave']");
  if(saveRoleAndLeaveBtn){
    if(saveCurrentRolePermissions()){
      var rootModal = document.getElementById("modalRoot");
      if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
      leaveRoleDetail(true);
      showToast("已保存");
    }
    return;
  }
  var discardRoleAndLeaveBtn = e.target.closest("[data-action='discard-role-and-leave']");
  if(discardRoleAndLeaveBtn){
    restoreRoleFromBaseline(getSelectedRole());
    var rootModal = document.getElementById("modalRoot");
    if(rootModal){ rootModal.classList.remove("show"); rootModal.innerHTML = ""; }
    leaveRoleDetail(true);
    return;
  }
  var openCreateRoleBtn = e.target.closest("[data-action='open-create-role-modal']");
  if(openCreateRoleBtn){
    openModal("create-role-modal");
    return;
  }
  var confirmCreateRoleBtn = e.target.closest("[data-action='confirm-create-role']");
  if(confirmCreateRoleBtn){
    confirmCreateRoleFromForm();
    return;
  }
  var openAssignRoleMembersBtn = e.target.closest("[data-action='open-assign-role-members']");
  if(openAssignRoleMembersBtn){
    var tRole = systemRoles.filter(function(r){ return r.id === openAssignRoleMembersBtn.dataset.role; })[0];
    if(tRole && tRole.isSystem){
      showToast("系统内置角色仅支持查看，不可添加授权");
      return;
    }
    state.assignRoleId = openAssignRoleMembersBtn.dataset.role || state.selectedRoleId;
    state.roleMemberPickIds = [];
    openModal("assign-role-members");
    return;
  }
  var toggleRoleMemberPickBtn = e.target.closest("[data-action='toggle-role-member-pick']");
  if(toggleRoleMemberPickBtn){
    var staffId = toggleRoleMemberPickBtn.dataset.staff;
    if(!state.roleMemberPickIds) state.roleMemberPickIds = [];
    var pIdx = state.roleMemberPickIds.indexOf(staffId);
    if(pIdx > -1) state.roleMemberPickIds.splice(pIdx, 1);
    else state.roleMemberPickIds.push(staffId);
    openModal("assign-role-members");
    return;
  }
  var confirmAddRoleMembersBtn = e.target.closest("[data-action='confirm-add-role-members']");
  if(confirmAddRoleMembersBtn){
    var tRole = systemRoles.filter(function(r){ return r.id === (state.assignRoleId || state.selectedRoleId); })[0];
    if(!tRole || tRole.isSystem) return;
    if(!tRole.members) tRole.members = [];
    cloneStaffByIds(state.roleMemberPickIds || []).forEach(function(staff){
      if(!tRole.members.some(function(m){ return m.id === staff.id; })) tRole.members.push(staff);
    });
    syncRoleMemberCount(tRole);
    state.roleMemberPickIds = [];
    var rootModal = document.getElementById("modalRoot");
    if(rootModal){
      rootModal.classList.remove("show");
      rootModal.innerHTML = "";
    }
    showToast("已为【" + tRole.name + "】添加授权人员");
    render();
    return;
  }
  var removeRoleMemberBtn = e.target.closest("[data-action='remove-role-member']");
  if(removeRoleMemberBtn){
    var tRole = systemRoles.filter(function(r){ return r.id === removeRoleMemberBtn.dataset.role; })[0];
    if(!tRole || tRole.isSystem){
      showToast("系统内置角色仅支持查看，不可调整授权");
      return;
    }
    tRole.members = (tRole.members || []).filter(function(m){ return m.id !== removeRoleMemberBtn.dataset.staff; });
    syncRoleMemberCount(tRole);
    showToast("已取消该人员授权");
    render();
    return;
  }
  var deleteCustomRoleBtn = e.target.closest("[data-action='delete-custom-role']");
  if(deleteCustomRoleBtn){
    var rId = deleteCustomRoleBtn.dataset.roleId;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(!tRole) return;
    if(tRole.isSystem){
      showToast("系统内置核心角色不可删除！");
      return;
    }
    var roleIdx = systemRoles.findIndex(function(r){ return r.id === rId; });
    if(roleIdx > -1){
      systemRoles.splice(roleIdx, 1);
      if(state.selectedRoleId === rId){
        state.selectedRoleId = systemRoles[0] ? systemRoles[0].id : "";
      }
      showToast("✓ 角色【" + tRole.name + "】已成功删除");
      render();
    }
    return;
  }
  var saveRoleBasicInfoBtn = e.target.closest("[data-action='save-role-basic-info']");
  if(saveRoleBasicInfoBtn){
    var rId = saveRoleBasicInfoBtn.dataset.role;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole && tRole.isSystem){
      showToast("系统内置角色仅支持查看，不可修改");
      return;
    }
    if(tRole){
      var nameInp = document.getElementById("role-edit-name-inp");
      var descInp = document.getElementById("role-edit-desc-inp");

      if(nameInp && nameInp.value.trim()) tRole.name = nameInp.value.trim();
      if(descInp) tRole.desc = descInp.value.trim();

      showToast("✓ 【" + tRole.name + "】基本信息已成功更新");
      render();
    }
    return;
  }
  var clearRoleSearchBtn = e.target.closest("[data-action='role-list-search-clear']");
  if(clearRoleSearchBtn){
    state.roleSearchKw = "";
    render();
    return;
  }
  var selectRoleBtn = e.target.closest("[data-action='select-perm-role']");
  if(selectRoleBtn){
    state.selectedRoleId = selectRoleBtn.dataset.roleId;
    state.roleSubView = "detail";
    captureRoleBaseline();
    render();
    return;
  }
  var switchRolePermTabBtn = e.target.closest("[data-action='switch-role-perm-tab']");
  if(switchRolePermTabBtn){
    state.rolePermTab = switchRolePermTabBtn.dataset.tab;
    render();
    return;
  }
  var switchRoleViewModeBtn = e.target.closest("[data-action='switch-role-view-mode']");
  if(switchRoleViewModeBtn){
    state.roleViewMode = switchRoleViewModeBtn.dataset.mode;
    render();
    return;
  }
  var toggleRoleDrawerBtn = e.target.closest("[data-action='toggle-role-drawer']");
  if(toggleRoleDrawerBtn){
    if(!state.roleMenuExpanded) state.roleMenuExpanded = { menu_stats: true };
    var drawerId = toggleRoleDrawerBtn.dataset.group;
    state.roleMenuExpanded[drawerId] = !state.roleMenuExpanded[drawerId];
    render();
    return;
  }
  var toggleMenuPermBox = e.target.closest("[data-action='toggle-menu-perm']");
  if(toggleMenuPermBox){
    var rId = toggleMenuPermBox.dataset.role;
    var pId = toggleMenuPermBox.dataset.perm;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      if(!tRole.menuPerms) tRole.menuPerms = [];
      var pIdx = tRole.menuPerms.indexOf(pId);
      if(pIdx > -1){
        tRole.menuPerms.splice(pIdx, 1);
      } else {
        tRole.menuPerms.push(pId);
      }
      syncRoleLegacyPerms(tRole);
      render();
    }
    return;
  }
  var toggleMenuGroupBtn = e.target.closest("[data-action='toggle-menu-group']");
  if(toggleMenuGroupBtn){
    var rId = toggleMenuGroupBtn.dataset.role;
    var gId = toggleMenuGroupBtn.dataset.group;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    var grp = menuPermissionGroups.filter(function(g){ return g.id === gId; })[0];
    if(tRole && tRole.isSystem){
      showToast("系统内置角色仅支持查看，不可修改");
      return;
    }
    if(tRole && grp){
      var ids = collectGroupPermIds(grp);
      var allChecked = ids.every(function(id){ return isPermChecked(tRole, id); });
      setRolePermIds(tRole, ids, !allChecked);
      syncRoleLegacyPerms(tRole);
      render();
    }
    return;
  }
  var batchMenuPermsBtn = e.target.closest("[data-action='batch-menu-perms']");
  if(batchMenuPermsBtn){
    var rId = batchMenuPermsBtn.dataset.role;
    var bType = batchMenuPermsBtn.dataset.type;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      if(bType === "all"){
        tRole.menuPerms = collectAllMenuPermIds().slice();
        showToast("已一键全选【" + tRole.name + "】全部菜单与操作权限");
      } else if(bType === "clear"){
        tRole.menuPerms = [];
        showToast("已清空【" + tRole.name + "】的所有菜单权限");
      } else if(bType === "readonly"){
        tRole.menuPerms = collectReadonlyMenuPermIds();
        showToast("已将【" + tRole.name + "】快速设置为只读查阅权限");
      }
      syncRoleLegacyPerms(tRole);
      render();
    }
    return;
  }
  var changeDataScopeBtn = e.target.closest("[data-action='change-data-scope']");
  if(changeDataScopeBtn){
    var rId = changeDataScopeBtn.dataset.role;
    var scopeId = changeDataScopeBtn.dataset.scope;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      tRole.dataScope = scopeId;
      if(scopeId === "CUSTOM" && (!tRole.customDepts || !tRole.customDepts.length)){
        tRole.customDepts = ["dept_yq", "dept_yj"];
      }
      var sObj = dataScopeOptions.filter(function(o){ return o.id === scopeId; })[0];
      showToast("已将【" + tRole.name + "】数据权限范围切换为：" + (sObj ? sObj.shortTag : scopeId));
      render();
    }
    return;
  }
  var toggleCustomDeptBtn = e.target.closest("[data-action='toggle-custom-dept']");
  if(toggleCustomDeptBtn){
    var rId = toggleCustomDeptBtn.dataset.role;
    var deptId = toggleCustomDeptBtn.dataset.dept;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      if(!tRole.customDepts) tRole.customDepts = [];
      var dIdx = tRole.customDepts.indexOf(deptId);
      if(dIdx > -1){
        tRole.customDepts.splice(dIdx, 1);
      } else {
        tRole.customDepts.push(deptId);
      }
      render();
    }
    return;
  }
  var batchCustomDeptsBtn = e.target.closest("[data-action='batch-custom-depts']");
  if(batchCustomDeptsBtn){
    var rId = batchCustomDeptsBtn.dataset.role;
    var bType = batchCustomDeptsBtn.dataset.type;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      if(bType === "all"){
        tRole.customDepts = customDeptOptions.map(function(d){ return d.id; });
        showToast("已全选 10 个直属单位与协同处室");
      } else {
        tRole.customDepts = [];
        showToast("已清空自选穿透机构");
      }
      render();
    }
    return;
  }
  var toggleRoleSecBtn = e.target.closest("[data-action='toggle-role-security']");
  if(toggleRoleSecBtn){
    var rId = toggleRoleSecBtn.dataset.role;
    var field = toggleRoleSecBtn.dataset.field;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      tRole[field] = !tRole[field];
      var fName = (field === "maskSensitive" ? "涉密线索脱敏" : "防泄密动态水印");
      showToast("【" + tRole.name + "】" + fName + "已" + (tRole[field] ? "开启生效" : "关闭停用"));
      render();
    }
    return;
  }
  var resetRolePermBtn = e.target.closest("[data-action='reset-role-permissions']");
  if(resetRolePermBtn){
    var rId = resetRolePermBtn.dataset.role;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      if(tRole.id === "role_superadmin"){
        tRole.dataScope = "ALL";
        tRole.maskSensitive = false;
        tRole.watermark = true;
        tRole.exportLimit = "5000";
      } else if(tRole.id === "role_orgadmin"){
        tRole.dataScope = "DEPT_TREE";
        tRole.maskSensitive = false;
        tRole.watermark = true;
        tRole.exportLimit = "2000";
      } else {
        tRole.dataScope = "DEPT_TREE";
        tRole.maskSensitive = false;
        tRole.watermark = true;
        tRole.exportLimit = "1000";
      }
      showToast("已恢复【" + tRole.name + "】的系统推荐安全与权限规则");
      render();
    }
    return;
  }
  var saveRolePermBtn = e.target.closest("[data-action='save-role-permissions']");
  if(saveRolePermBtn){
    if(saveCurrentRolePermissions()){
      showToast("当前权限配置已保存");
      render();
    }
    return;
  }
  var toggleRolePermInput = e.target.closest("[data-action='toggle-role-perm']");
  if(toggleRolePermInput){
    var roleId = toggleRolePermInput.dataset.role;
    var permKey = toggleRolePermInput.dataset.perm;
    var targetRole = systemRoles.filter(function(r){ return r.id === roleId; })[0];
    if(targetRole && targetRole.permissions){
      targetRole.permissions[permKey] = toggleRolePermInput.checked;
    }
    return;
  }

  // 3. 字典设置
  var switchSettingsTabBtn = e.target.closest("[data-action='switch-settings-tab']");
  if(switchSettingsTabBtn){
    state.settingsTab = switchSettingsTabBtn.dataset.tab || "transfer";
    render();
    return;
  }
  var openAddSettingBtn = e.target.closest("[data-action='open-add-setting-modal']");
  if(openAddSettingBtn){
    var type = openAddSettingBtn.dataset.type || state.settingsTab || "transfer";
    currentEditingSetting = { type: type, isEdit: false, itemId: null };
    openModal("setting-reason-modal");
    return;
  }
  if(e.target.closest("[data-action='toggle-setting-modal-enabled']")){
    toggleSettingModalEnabled();
    return;
  }
  var editSettingBtn = e.target.closest("[data-action='edit-setting-item']");
  if(editSettingBtn){
    var type = editSettingBtn.dataset.type || state.settingsTab || "transfer";
    var itemId = editSettingBtn.dataset.id;
    currentEditingSetting = { type: type, isEdit: true, itemId: itemId };
    openModal("setting-reason-modal");
    return;
  }
  var toggleSettingBtn = e.target.closest("[data-action='toggle-setting-status']");
  if(toggleSettingBtn){
    var type = toggleSettingBtn.dataset.type || state.settingsTab || "transfer";
    var itemId = toggleSettingBtn.dataset.id;
    var list = getSettingReasonList(type);
    var item = list.filter(function(r){ return r.id === itemId })[0];
    if(item){
      item.enabled = !item.enabled;
      item.updatedAt = formatDeadlineDate(Date.now()).slice(0,16);
      showToast(item.name + " 已" + (item.enabled ? "启用" : "停用"));
      render();
    }
    return;
  }
  var deleteSettingBtn = e.target.closest("[data-action='delete-setting-item']");
  if(deleteSettingBtn){
    var type = deleteSettingBtn.dataset.type || state.settingsTab || "transfer";
    var itemId = deleteSettingBtn.dataset.id;
    var list = getSettingReasonList(type);
    var idx = -1;
    for(var i=0; i<list.length; i++){
      if(list[i].id === itemId){ idx = i; break; }
    }
    if(idx > -1){
      var removed = list.splice(idx, 1)[0];
      showToast("已删除分类：" + (removed ? removed.name : ""));
      render();
    }
    return;
  }
  var resetSettingsSearchBtn = e.target.closest("[data-action='settings-reset-search']");
  if(resetSettingsSearchBtn){
    state.settingsSearchKw = "";
    render();
    return;
  }

  var sizeTrigger=e.target.closest("[data-page-size-trigger]");
  if(sizeTrigger){var sizeSelect=sizeTrigger.closest(".page-size-select"),sizeWasOpen=sizeSelect.classList.contains("open");document.querySelectorAll(".filter-select.open").forEach(function(n){n.classList.remove("open")});document.querySelectorAll(".page-size-select.open").forEach(function(n){n.classList.remove("open")});if(!sizeWasOpen)sizeSelect.classList.add("open");return}
  var sizeOption=e.target.closest("[data-page-size-option]");
  if(sizeOption){
    var paginationRoot=sizeOption.closest("[data-pagination]");
    var newSize=Number(sizeOption.dataset.pageSizeOption)||10;
    var mode=(paginationRoot&&paginationRoot.dataset.mode)||state.page;
    if(!state.pageSizes) state.pageSizes={todo:10,sent:10,done:10};
    state.pageSizes[mode]=newSize;
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var pageNumber=e.target.closest("[data-page-number]");
  if(pageNumber){setPaginationPage(pageNumber.closest("[data-pagination]"),pageNumber.dataset.pageNumber);return}
  var pageStep=e.target.closest("[data-page-step]");
  if(pageStep&&!pageStep.disabled){var stepRoot=pageStep.closest("[data-pagination]"),current=Number(stepRoot.dataset.currentPage)||1;setPaginationPage(stepRoot,current+(pageStep.dataset.pageStep==="next"?1:-1));return}
  var flagLabel=e.target.closest("[data-action='toggle-flag']");
  if(flagLabel){
    var flag=flagLabel.dataset.flag;
    if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
    state.quickFlags[flag]=!state.quickFlags[flag];
    var mode=state.page==="todo"?(state.mySubPage||"todo"):state.page;
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var radioFlagLabel=e.target.closest("[data-action='toggle-flag-radio']");
  if(radioFlagLabel){
    var flag=radioFlagLabel.dataset.flag;
    if(state.quickFlag===flag){
      state.quickFlag=null;
      if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
      state.quickFlags.todayDue=false;
      state.quickFlags.overdue=false;
    }else{
      state.quickFlag=flag;
      if(!state.quickFlags) state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
      state.quickFlags.todayDue=flag==="todayDue";
      state.quickFlags.overdue=flag==="overdue";
    }
    var mode=state.page==="todo"?(state.mySubPage||"todo"):state.page;
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var queryBtn=e.target.closest("[data-action='filter-query']");
  if(queryBtn){
    var mode=queryBtn.dataset.mode||(state.page==="todo"?(state.mySubPage||"todo"):state.page);
    var wrap=queryBtn.closest(".task-filters");
    var cat=wrap?wrap.querySelector('[data-filter="category"] .select-value'):null;
    var tpl=wrap?wrap.querySelector('[data-filter="template"] .select-value'):null;
    var req=wrap?wrap.querySelector('[data-filter="requirement"] .select-value'):null;
    var sdr=wrap?wrap.querySelector('[data-filter="sender"] .select-value'):null;
    var sOrg=wrap?wrap.querySelector('[data-filter="senderOrg"] .select-value'):null;
    var sts=wrap?wrap.querySelector('[data-filter="status"] .select-value'):null;
    var proc=wrap?wrap.querySelector('[data-filter="processor"] .select-value'):null;
    var inp=wrap?wrap.querySelector("[data-filter-content]"):null;
    if(!state.filterQuery) state.filterQuery={};
    state.filterQuery[mode]={
      category:cat?cat.textContent.trim():"全部",
      template:tpl?tpl.textContent.trim():"全部",
      requirement:req?req.textContent.trim():"全部",
      senderOrg:sOrg?sOrg.textContent.trim():"全部",
      sender:sdr?sdr.textContent.trim():"全部",
      status:sts?sts.textContent.trim():"全部",
      processor:proc?proc.textContent.trim():"全部",
      content:inp?inp.value.trim():""
    };
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var resetBtn=e.target.closest("[data-action='filter-reset']");
  if(resetBtn){
    var mode=resetBtn.dataset.mode||(state.page==="todo"?(state.mySubPage||"todo"):state.page);
    if(!state.filterQuery) state.filterQuery={};
    state.filterQuery[mode]={category:"全部",template:"全部",requirement:"全部",senderOrg:"全部",sender:"全部",status:"全部",processor:"全部",content:""};
    state.quickFlag=null;
    state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var statsAppTrigger=e.target.closest("[data-stats-app-trigger]");
  if(statsAppTrigger){var appOwner=statsAppTrigger.closest("[data-stats-app]"),appOpen=appOwner.classList.contains("open");document.querySelectorAll("[data-stats-app],[data-stats-date]").forEach(function(n){n.classList.remove("open");var b=n.querySelector(".stats-filter-trigger");if(b)b.classList.remove("active")});if(!appOpen){appOwner.classList.add("open");statsAppTrigger.classList.add("active")}return}
  var statsAppOption=e.target.closest("[data-stats-app-option]");
  if(statsAppOption){var app=statsAppOption.closest("[data-stats-app]");app.querySelector("[data-stats-app-value]").textContent=statsAppOption.dataset.statsAppOption;app.classList.remove("open");app.querySelector(".stats-filter-trigger").classList.remove("active");return}
  var statsDateTrigger=e.target.closest("[data-stats-date-trigger]");
  if(statsDateTrigger){var dateOwner=statsDateTrigger.closest("[data-stats-date]"),dateOpen=dateOwner.classList.contains("open");document.querySelectorAll("[data-stats-app],[data-stats-date]").forEach(function(n){n.classList.remove("open");var b=n.querySelector(".stats-filter-trigger");if(b)b.classList.remove("active")});if(!dateOpen){dateOwner.classList.add("open");statsDateTrigger.classList.add("active")}return}
  var statsDay=e.target.closest("[data-stats-day]");
  if(statsDay){var picked=statsDay.dataset.statsDay;if(statsPickingStart){statsDateStart=picked;statsDateEnd=picked;statsPickingStart=false}else{if(picked<statsDateStart){statsDateEnd=statsDateStart;statsDateStart=picked}else statsDateEnd=picked;statsPickingStart=true}refreshStatsDatePicker();return}
  var dateShortcut=e.target.closest("[data-date-shortcut]");
  if(dateShortcut){var spanMap={"近1天":1,"近3天":3,"近7天":7,"近15天":15,"近30天":30,"近60天":60,"近一季度":90,"近半年":180,"近一年":365},end=new Date(2026,7,17),start=new Date(end);start.setDate(end.getDate()-(spanMap[dateShortcut.dataset.dateShortcut]-1));statsDateStart=start.getFullYear()+'-'+String(start.getMonth()+1).padStart(2,'0')+'-'+String(start.getDate()).padStart(2,'0');statsDateEnd="2026-08-17";statsPickingStart=true;refreshStatsDatePicker();return}
  var statsReset=e.target.closest("[data-stats-reset]");
  if(statsReset){statsDateStart="2026-08-11";statsDateEnd="2026-08-17";statsPickingStart=true;var appReset=document.querySelector('[data-stats-app-value]');if(appReset)appReset.textContent="全部业务应用";refreshStatsDatePicker();return}
  if(state.page==="external" && state.extStatusOpen && !e.target.closest(".ext-ms")){
    state.extStatusOpen=false;
    render();
  }
  if(e.target.closest(".filter-search-box")) return;
  var trigger=e.target.closest(".filter-trigger");
  if(trigger){var select=trigger.closest(".filter-select"),wasOpen=select.classList.contains("open");document.querySelectorAll(".page-size-select.open").forEach(function(n){n.classList.remove("open")});document.querySelectorAll(".filter-select.open").forEach(function(n){n.classList.remove("open")});if(!wasOpen){select.classList.add("open");var searchInp=select.querySelector(".filter-search-input");if(searchInp){setTimeout(function(){searchInp.focus()},50)}}return}
  var parent=e.target.closest("[data-cascade-parent]");
  if(parent){var moduleSelect=parent.closest(".filter-select");moduleSelect.querySelectorAll("[data-cascade-parent]").forEach(function(n){n.classList.remove("active")});parent.classList.add("active");var children=parent.dataset.cascadeParent==="谛听预警"?["话题汇总","谛听H5","实时监测"]:[];moduleSelect.querySelector(".cascade-children").innerHTML=children.map(function(item){return '<div class="filter-option" data-filter-option="'+item+'"><span class="filter-radio"></span>'+item+'</div>';}).join('');return}
  var option=e.target.closest("[data-filter-option]");
  if(option){
    var owner=option.closest(".filter-select");
    var filterKey=owner?owner.dataset.filter:"";
    var filterVal=option.dataset.filterOption;
    var filtersWrap=option.closest(".task-filters");
    var mode=filtersWrap?(filtersWrap.dataset.filterMode||(state.page==="todo"?(state.mySubPage||"todo"):state.page)):(state.page==="todo"?(state.mySubPage||"todo"):state.page);
    if(owner){
      var valSpan=owner.querySelector(".select-value");
      if(valSpan) valSpan.textContent=filterVal;
      owner.querySelectorAll("[data-filter-option]").forEach(function(n){n.classList.remove("selected","active")});
      owner.classList.remove("open");
    }
    option.classList.add("selected");
    if(filterKey === "tpl-category"){
      state.tplFilterCat = filterVal || "全部";
      render();
      return;
    }
    if(filterKey === "ext-status"){
      return;
    }
    if(!state.filterQuery) state.filterQuery={};
    if(!state.filterQuery[mode]) state.filterQuery[mode]={category:"全部",module:"全部",content:"",requirement:"全部",senderOrg:"全部",sender:"全部",status:"全部",processor:"全部"};
    if(filterKey) state.filterQuery[mode][filterKey]=filterVal;
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }
  var reset=e.target.closest("[data-filter-reset]");
  if(reset){
    var root=reset.closest(".task-filters");
    var mode=reset.dataset.mode||(root?(root.dataset.filterMode||(state.page==="todo"?(state.mySubPage||"todo"):state.page)):(state.page==="todo"?(state.mySubPage||"todo"):state.page));
    if(!state.filterQuery) state.filterQuery={};
    state.filterQuery[mode]={category:"全部",module:"全部",requirement:"全部",senderOrg:"全部",sender:"全部",status:"全部",processor:"全部",content:""};
    state.quickFlag=null;
    state.quickFlags={todayDue:false,overdue:false,onlyMine:false};
    if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
    state.pageNumbers[mode]=1;
    render();
    return;
  }

  // === 统计2（表单要素与管理看板）交互委托 ===
  var s2Period = e.target.closest("[data-action='stats2-change-period']");
  if(s2Period){
    var periodVal = s2Period.dataset.period;
    state.stats2Filter.timePeriod = periodVal;
    state.stats2Filter.dateRange = periodVal;
    render();
    return;
  }
  var s2Tab = e.target.closest("[data-action='stats2-switch-tab']");
  if(s2Tab){
    state.stats2Filter.activeTab = s2Tab.dataset.tab;
    render();
    return;
  }
  var s2Query = e.target.closest("[data-action='stats2-query']");
  if(s2Query){
    var tplSel=document.getElementById("stats2-tpl-filter");
    var dtSel=document.getElementById("stats2-date-filter");
    if(tplSel) state.stats2Filter.template=tplSel.value;
    if(dtSel) state.stats2Filter.dateRange=dtSel.value;
    render();
    showToast("已应用筛选条件");
    return;
  }
  var s2Reset = e.target.closest("[data-action='stats2-reset']");
  if(s2Reset){
    state.stats2Filter.template="全部";
    state.stats2Filter.urgency="全部";
    state.stats2Filter.source="全部";
    state.stats2Filter.measure="全部";
    state.stats2Filter.timePeriod="近30天";
    state.stats2Filter.dateRange="近30天";
    state.stats2Filter.orgKw="";
    render();
    showToast("已重置筛选条件");
    return;
  }
  var s2Export = e.target.closest("[data-action='stats2-export']");
  if(s2Export){
    exportStats2FormReport();
    return;
  }
  var s2ViewForm = e.target.closest("[data-action='stats2-view-form']");
  if(s2ViewForm){
    var rid = s2ViewForm.dataset.recordId;
    var found = stats2FormData.records.filter(function(r){return r.id===rid})[0];
    if(found){
      state.stats2SelectedRecord = found;
      openModal("stats2-form-detail");
    }
    return;
  }
  var s2Reason = e.target.closest("[data-action='stats2-view-reason-detail']");
  if(s2Reason){
    state.stats2SelectedReasonType = s2Reason.dataset.reasonType || "transfer";
    state.stats2SelectedReasonTitle = s2Reason.dataset.reasonTitle || "原因统计分析";
    openModal("stats2-reason-detail");
    return;
  }
  var s2Urge = e.target.closest("[data-action='stats2-urge']");
  if(s2Urge){
    var orgName = s2Urge.dataset.org || "承办责任部门";
    showToast("✓ 已向【" + orgName + "】下达表单履约与质效合规督办提醒函");
    return;
  }

  if(!e.target.closest(".filter-select"))document.querySelectorAll(".filter-select.open").forEach(function(n){n.classList.remove("open")});
  if(!e.target.closest("[data-stats-app]"))document.querySelectorAll("[data-stats-app]").forEach(function(n){n.classList.remove("open");var b=n.querySelector(".stats-filter-trigger");if(b)b.classList.remove("active")});
  if(!e.target.closest("[data-stats-date]"))document.querySelectorAll("[data-stats-date]").forEach(function(n){n.classList.remove("open");var b=n.querySelector(".stats-filter-trigger");if(b)b.classList.remove("active")});
  if(!e.target.closest(".page-size-select"))document.querySelectorAll(".page-size-select.open").forEach(function(n){n.classList.remove("open")});
  if(!e.target.closest(".toolbar-pop")&&!e.target.closest("[data-pop]")){document.getElementById("popover").classList.remove("show");document.querySelectorAll(".tool-circle").forEach(function(n){n.classList.remove("active")})}
});
document.addEventListener("change",function(e){
  var urgencySelect = e.target.closest("[data-action='wizard-change-urgency']");
  if(urgencySelect){
    var urg = urgencySelect.value;
    wizardState.formData.urgency = urg;
    var modal = document.getElementById("modalRoot");
    if(modal){
      var deadInp = modal.querySelector("[data-wizard-field='deadline']");
      if(!urg){
        wizardState.formData.deadline = "";
        if(deadInp) deadInp.value = "";
        modal.querySelectorAll("[data-action='quick-deadline']").forEach(function(chip){
          chip.classList.remove("active");
        });
        return;
      }
      var now = new Date();
      var hours = 4;
      if(urg === "特急"){
        hours = 2;
      } else if(urg === "加急"){
        hours = 4;
      } else {
        hours = 24;
      }
      now.setHours(now.getHours() + hours);
      var pad = function(n){return n<10?'0'+n:n};
      var dtVal = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + 'T' + pad(now.getHours()) + ':' + pad(now.getMinutes());
      wizardState.formData.deadline = dtVal.replace("T", " ");

      if(deadInp) deadInp.value = dtVal;

      modal.querySelectorAll("[data-action='quick-deadline']").forEach(function(chip){
        chip.classList.toggle("active", Number(chip.dataset.hours) === hours);
      });
    }
    return;
  }
  var reqSelect = e.target.closest("[data-action='filter-settings-tpl-req']");
  if(reqSelect){
    state.tplFilterReq = reqSelect.value;
    render();
    return;
  }
  var rolePermCheck = e.target.closest("[data-action='toggle-role-perm']");
  if(rolePermCheck){
    var roleId = rolePermCheck.dataset.role;
    var permKey = rolePermCheck.dataset.perm;
    var targetRole = systemRoles.filter(function(r){ return r.id === roleId; })[0];
    if(targetRole && targetRole.permissions){
      targetRole.permissions[permKey] = rolePermCheck.checked;
    }
    return;
  }
  var limitSelect = e.target.closest("[data-action='change-export-limit']");
  if(limitSelect){
    var rId = limitSelect.dataset.role;
    var targetRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(targetRole){
      targetRole.exportLimit = limitSelect.value;
      showToast("【" + targetRole.name + "】导出限额已更新为：" + (limitSelect.value === "0" ? "禁止导出" : limitSelect.value + "条"));
    }
    return;
  }
});
document.addEventListener("input",function(e){
  if(e.target.matches("[data-action='role-list-search-input']")){
    state.roleSearchKw = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var rows = document.querySelectorAll(".role-list-container table tbody tr");
    rows.forEach(function(r){
      var txt = r.textContent.toLowerCase();
      r.style.display = (!kw || txt.indexOf(kw) > -1) ? "" : "none";
    });
    return;
  }
  if(e.target.matches("[data-action='role-search-input']")){
    state.roleSearchKw = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var cards = document.querySelectorAll(".role-item-card");
    cards.forEach(function(c){
      var txt = c.textContent.toLowerCase();
      c.style.display = (!kw || txt.indexOf(kw) > -1) ? "" : "none";
    });
    return;
  }
  if(e.target.matches("[data-action='settings-tpl-search-input']")){
    state.tplSearchKw = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var rows = document.querySelectorAll(".settings-table-card tbody tr");
    rows.forEach(function(r){
      var txt = r.textContent.toLowerCase();
      r.style.display = (!kw || txt.indexOf(kw) > -1) ? "" : "none";
    });
    return;
  }
  if(e.target.matches("[data-action='role-member-pick-search']")){
    var kw = e.target.value.trim().toLowerCase();
    var list = document.getElementById("role-member-pick-list");
    if(list){
      list.querySelectorAll("[data-action='toggle-role-member-pick']").forEach(function(row){
        var txt = row.textContent.toLowerCase();
        row.style.display = (!kw || txt.indexOf(kw) > -1) ? "" : "none";
      });
    }
    return;
  }
  if(e.target.matches("[data-action='issue-page-search-input']")){
    state.issueTplKw = e.target.value;
    var grid = document.querySelector(".issue-dispatch-grid");
    if(grid){
      grid.innerHTML = renderIssueTemplateCardsHtml(state.issueTplCat || "全部", state.issueTplKw, wizardState.selectedTemplateId);
      if(window.lucide) lucide.createIcons();
    }
    return;
  }
  if(e.target.id === "setting-modal-name"){
    var countEl = document.getElementById("setting-modal-name-count");
    if(countEl) countEl.textContent = String(e.target.value.length);
    return;
  }
  if(e.target.id === "setting-modal-code"){
    var caret = e.target.selectionStart;
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9_]/g, "").toUpperCase();
    try { e.target.setSelectionRange(caret, caret); } catch(err){}
    return;
  }
  if(e.target.matches("[data-action='settings-search-input']")){
    state.settingsSearchKw = e.target.value;
    var kw = e.target.value.trim().toLowerCase();
    var rows = document.querySelectorAll(".settings-table-card tbody tr");
    rows.forEach(function(r){
      var txt = r.textContent.toLowerCase();
      r.style.display = (!kw || txt.indexOf(kw) > -1) ? "" : "none";
    });
    return;
  }
  if(e.target.matches(".filter-search-input")){
    var kw=e.target.value.trim().toLowerCase();
    var menu=e.target.closest(".searchable-menu");
    if(menu){
      menu.querySelectorAll(".filter-option").forEach(function(opt){
        var txt=opt.textContent.toLowerCase();
        opt.style.display=(!kw||txt.indexOf(kw)>-1)?"flex":"none";
      });
    }
    return;
  }
  if(e.target.matches("[data-filter-content]")){
    var wrap=e.target.closest(".task-filters");
    var counter=e.target.closest(".filter-content")?e.target.closest(".filter-content").querySelector(".counter"):null;
    if(counter) counter.textContent=e.target.value.length+" / 100";
    var mode=wrap?(wrap.dataset.filterMode||(state.page==="todo"?(state.mySubPage||"todo"):state.page)):(state.page==="todo"?(state.mySubPage||"todo"):state.page);
    if(!state.filterQuery) state.filterQuery={};
    if(!state.filterQuery[mode]) state.filterQuery[mode]={category:"全部",module:"全部",requirement:"全部",senderOrg:"全部",sender:"全部",status:"全部",processor:"全部",content:""};
    state.filterQuery[mode].content=e.target.value;
  }
  if(e.target && e.target.id==="stats2-org-search-input"){
    state.stats2Filter.orgKw = e.target.value;
    render();
    var orgInp = document.getElementById("stats2-org-search-input");
    if(orgInp){ orgInp.focus(); orgInp.setSelectionRange(orgInp.value.length, orgInp.value.length); }
    return;
  }
  if(e.target && e.target.id==="role-search-input"){
    state.roleSearchKw = e.target.value;
    render();
    var inp = document.getElementById("role-search-input");
    if(inp){ inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }
});
document.addEventListener("change",function(e){
  if(e.target && e.target.id==="role-export-limit-select"){
    var rId = e.target.dataset.role;
    var tRole = systemRoles.filter(function(r){ return r.id === rId; })[0];
    if(tRole){
      tRole.exportLimit = e.target.value;
      showToast("【" + tRole.name + "】单次数据导出安全上限已变更为：" + e.target.options[e.target.selectedIndex].text);
      render();
    }
  }
});
document.addEventListener("focusout",function(e){
  if(e.target && e.target.matches && e.target.matches(".guide-link-input")){
    var val = normalizeUrl(e.target.value);
    if(!val) return;
    var target = e.target.id === "guide-link-mt" ? "mt" : "mobile";
    setGuideLink(target, val);
  }
});
document.addEventListener("keydown",function(e){
  if(e.key==="Enter"){
    if(e.target.matches(".guide-link-input")){
      var inputRow = e.target.closest(".guide-input-row");
      var saveBtn = inputRow ? inputRow.querySelector("[data-action='save-guide-link']") : null;
      if(saveBtn){ saveBtn.click(); }
      return;
    }
    if(e.target.matches("[data-action='settings-tpl-search-input']")){
      state.tplSearchKw = e.target.value;
      render();
    } else if(e.target.matches("[data-page-jump]")){
      setPaginationPage(e.target.closest("[data-pagination]"),e.target.value);
    } else if(e.target.matches("[data-filter-content]")){
      var wrap=e.target.closest(".task-filters");
      var mode=wrap?(wrap.dataset.filterMode||(state.page==="todo"?(state.mySubPage||"todo"):state.page)):(state.page==="todo"?(state.mySubPage||"todo"):state.page);
      if(!state.pageNumbers) state.pageNumbers={todo:1,sent:1,done:1,draft:1,"sent-mgmt":1};
      state.pageNumbers[mode]=1;
      render();
    }
  }
});
function onHashRouteChange(){
  if(_applyingHash || isJumpHash()) return;
  var next = parseAppHash();
  if(!next || next.jump) return;
  applyParsedHash(next);
  var applied = buildAppHash();
  if(applied === _lastAppHash) return;
  _applyingHash = true;
  _lastAppHash = applied;
  render();
  _applyingHash = false;
}
(function bootHashRoute(){
  var parsed = parseAppHash();
  if(parsed && parsed.jump){
    state.page = "guide";
  } else if(parsed && parsed.page){
    applyParsedHash(parsed);
  } else if(!consumeLegacyQuery()){
    state.page = "guide";
  }
  render();
  window.addEventListener("hashchange", onHashRouteChange);
  window.addEventListener("popstate", onHashRouteChange);
})();

