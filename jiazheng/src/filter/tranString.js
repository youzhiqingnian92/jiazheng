function tranString(obj){
    if(obj.indexOf('[')!=-1){
       return JSON.parse(obj).join(',')
    }else{
        return obj
    }
}
export default tranString