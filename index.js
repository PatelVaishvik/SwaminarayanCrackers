const fs = require('fs');
const http = require('http')
const url = require('url')

// // const read = fs.readFileSync('./txt/input.txt','utf-8');
// // console.log(read);

// // const text = `das na das vaishvik ${read}, \n Created atmiyata on${Date.now()}`;
// // fs.writeFileSync('./txt/output.txt',text);


// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//    // if(err) return console.log('ERROR ...........');
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3);

//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err =>{
//                 console.log(err);
//             })

//         });
//     });
    
// });

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8')
const dataObj = JSON.parse(data);
// console.log('will read file before this execute...');
const server = http.createServer((req,res)=>{
    console.log(req.url)
    const pathName = req.url;
    if(pathName ==='/' ||  pathName === '/overview'){
        res.end('This is the o0verview.....')
    }else if(pathName === '/product'){
        res.end('This is the product....')
    }else if(pathName === '/api'){

            //console.log(prodeuctData);
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(data)

    }else{
        res.writeHead(404,{
            'Content-type':'text/html'

        });
        res.end('<h1>This page could not found...</h1>')
    }
   // res.end('hello from the server......');
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000.....');
});