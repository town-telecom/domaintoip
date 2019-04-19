const dns = require('dns')
const extension = ".com";
const domains = require ('./domains.js');
const domainResolve = (arr) => {

  arr.map(domain => {
    dns.lookup(domain + extension, (err, ip) => {
      console.log(domain + extension + ` => ${ip}`);
    });
  });

};


domainResolve(domains);