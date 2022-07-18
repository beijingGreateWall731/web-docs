const os = require('os')
let networkInterfaces =  os.networkInterfaces()
console.log(networkInterfaces);
for (const key in networkInterfaces) {
   console.log("key==>",key);
   console.log(`networkInterfaces[${key}]==>`,networkInterfaces[key]);
   let arrs = networkInterfaces[key]
   for(var i=0;i<arrs.length;i++){
    let obj = arrs[i]
    if(obj.family === 'IPv4' && !obj.internal && obj.cidr){
      console.log("address=>",obj.address);
      return
    }
   }
   
}
