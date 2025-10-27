// console.log('Hello Jay...')
// let os = require('os')
// console.log(os.platform());

// let ex = require('express')
// let app = ex()
// app.get('/',(req,res)=>console.log(1+20))
// app.listen(5000,()=>console.log('server running...'))

// let fs=require('fs')
// fs.readFile('abc.txt','utf8',(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })

// let fs=require('fs')
// fs.writeFile('abc.txt','hello from writefile',(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })

// let fs = require('fs')
// fs.open('abc.txt','w',(err,data)=>{
//     if(err) console.log(err);
//     let buf = Buffer.from('hello from write')
//     fs.write(data,buf,0,buf.length,0,(err,rd,buf)=>{
//         if(err) console.log(err);
//         console.log(rd);
//         fs.close(data,(err)=>{
//             if(err) console.log(err);
//         })
//     })
// })

// let fs = require('fs')
// fs.open('abc.txt','r',(err,data)=>{
//     if(err) console.log(err);
//     let buf = Buffer.alloc(1224)
//     fs.read(data,buf,0,buf.length,0,(err,rd,buf)=>{
//         if(err) console.log(err);
//         console.log(buf.toString('utf8',0,rd));
//         fs.close(data,(err)=>{
//             if(err) console.log(err);
//         })
//     })
// })

// let http=require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'})
//     // res.writeHead(200,{'Content-Type':'text/plain'})
//     res.end('Hello From End')
// }).listen(5000);

// console.log('hello',process.argv);
// console.log('hello',process.argv[2]);

// let a = process.argv[3]
// console.log(a);

// console.log([1,2,3,4,5]+','+[6,7,8,9,10]);

// let fs = require('fs')
// fs.writeFileSync('abc.txt','hello from writesync');
// console.log(fs.readFileSync('abc.txt','utf8'));

// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((ele,i)=>console.log(i,ele))


// let fs = require('fs').promises
// async function a(){
//     try{
//         let b = await fs.readFile('abc.txt','utf8')
//         console.log(b);
//     }catch(e){
//         console.log(e)
//     }
// }
// a()

// function fetchData(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`Data for ID ${id}`), 1000);
//     });
// }

// async function a() {
//     console.time('sequential');
//     const data1 = await fetchData(1);
//     const data2 = await fetchData(2);
//     const data3 = await fetchData(3);
//     console.timeEnd('sequential');
//     return [data1, data2, data3];
// }

// async function b() {
//     console.time('parallel');
//     const results = await Promise.all([
//         fetchData(1),
//         fetchData(2),
//         fetchData(3)
//     ]);
//     console.timeEnd('parallel');
//     return results;
// }

// async function c() {
//     console.log('sequentially...');
//     const aa = await a();
//     console.log(aa);

//     console.log('\nparallel...');
//     const bb = await b();
//     console.log(bb);
// }

// c();

// -------------------CommonJS Module ---------------------
// let a = 10;
// let b = 20;
// exports.a = a;
// exports.b = b;

// -------------------ES Module ---------------------
// export let a = 10;
// export let b = 10;

console.log('hello')

