const os = require("os");

const userinfo = os.userInfo();
console.log(userinfo)

const uptime = os.uptime();
console.log(uptime);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);
