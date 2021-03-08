const url=require('url');
const myUrl=new URL('https://www.zaubacorp.com/company-directors/EPIKINDIFI-SOFTWARE-SOLUTIONS-PRIVATE-LIMITED/U72900TN2018PTC120848?id=1005&status=active');
// console.log(myUrl.href);
// console.log(myUrl.href);
// console.log(myUrl.toString());

// console.log(myUrl.searchParams);
// console.log(myUrl.pathname);


console.log(myUrl.searchParams)

myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));


