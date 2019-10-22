import Vue from "vue";
var success = (Vue.prototype.$success = function success(res) {
  this.$message({
    type: "success",
    message: res.data.info
  });
});
var error = (Vue.prototype.$error = function error(res) {
  this.$message({
    type: "error",
    message: res.data.info
  });
});
var info = (Vue.prototype.$info = function info(res) {
    this.$message({
      type: "info",
      message: res.data.info
    });
  });
export default {
  success,
  error,
  info
};
