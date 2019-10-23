const baseUrl = "/api";
//登录
const login = baseUrl + "/login";
//查询管理员
const findManage = baseUrl + "/findManage";
//删除管理员
const delManage = baseUrl + "/delManage";
//添加管理员
const addManage = baseUrl + "/addManage";
//修改管理员
const updateManage = baseUrl + "/updateManage";

//查询轮播图
const banner = baseUrl + "/banner";
//删除轮播图
const delBanner = baseUrl + "/delBanner";
//添加轮播图
const addBanner = baseUrl + "/addBanner";

//查询家教
const teacherBanner = baseUrl + "/teacherBanner";
//删除家教
const delTeacherBanner = baseUrl + "/delTeacherBanner";
//添加家教
const addTeacherBanner = baseUrl + "/addTeacherBanner";

//查询家教类型
const teacherType = baseUrl + "/teacherType";
//删除家教类型
const delTeacherType = baseUrl + "/delTeacherType";
//添加家教类型
const addTeacherType = baseUrl + "/addTeacherType";

//查询家教排行
const teacherTop = baseUrl + "/teacherTop";
//删除排行
const delTeacherTop = baseUrl + "/delTeacherTop";
//添加家教排行
const addTeacherTop = baseUrl + "/addTeacherTop";

//查询水站
const findWater = baseUrl + "/findWater";
//删除水站
const delWater = baseUrl + "/delWater";
//添加水站
const addWater = baseUrl + "/addWater";
//修改水站
const updateWater = baseUrl + "/updateWater";
//获取水站评论
const findComment = baseUrl + "/findComment";
// 删除水站评论
const delComment = baseUrl + "/delComment";

//获取维修列表
const findRepair = baseUrl + "/findRepair";
//删除维修
const delRepair = baseUrl + "/delRepair";
//添加维修
const addRepair = baseUrl + "/addRepair";
//修改维修
const updateRepair = baseUrl + "/updateRepair";
//获取维修评论
const findRepairComment = baseUrl + "/findRepairComment";
//删除维修评论
const delRepairComment = baseUrl + "/delRepairComment ";

//获取家政轮播图
const homeBanner = baseUrl + "/homeBanner";
//删除家政轮播图
const delHomeBanner = baseUrl+"/delHomeBanner"
//添加家政轮播图
const addHomeBanner= baseUrl+"/addHomeBanner"

//获取家政人员信息
const findHomeWorker = baseUrl+"/findHomeWorker"
//删除员工信息
const delHomeWorker = baseUrl+"/delHomeWorker"
//添加员工信息
const addHomeWorker =baseUrl+"/addHomeWorker"
//修改员工信息
const updateHomeWorker = baseUrl+"/updateHomeWorker"

//获取家政类型
const getHomeType = baseUrl+"/getHomeType"
//获取家政资格
const getQualification = baseUrl+"/getQualification"

//修改密码
const changePassManage =baseUrl+"/changePassManage"
// 退出登录 
const exit = baseUrl+"/exit"
export default {
  login,
  findManage,
  delManage,
  addManage,
  updateManage,
  banner,
  delBanner,
  addBanner,
  teacherBanner,
  teacherType,
  teacherTop,
  delTeacherBanner,
  delTeacherType,
  delTeacherTop,
  addTeacherBanner,
  addTeacherType,
  addTeacherTop,
  findWater,
  delWater,
  addWater,
  updateWater,
  findComment,
  delComment,
  findRepair,
  delRepair,
  addRepair,
  updateRepair,
  findRepairComment,
  delRepairComment,
  homeBanner,
  delHomeBanner,
  addHomeBanner,
  findHomeWorker,
  delHomeWorker,
  getHomeType,
  getQualification,
  addHomeWorker,
  updateHomeWorker,
  changePassManage,
  exit
};
