const dns = require('dns')
const extension = ".com";
const domains = require ('./domains.js');


//console.log(domains);
for (let i = 0; i < domains.length; i++) {
  dns.lookup(domains[i] + extension, (err, ip) => {
    console.log(domains[i]+extension+` => ${ip}`);
    // console.log(domains[i] + extension);
    // console.log(ip);
  });
};

