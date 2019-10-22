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
const updateWater =baseUrl+"/updateWater"
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
  updateWater
};
