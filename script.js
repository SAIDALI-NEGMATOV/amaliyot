let text = "Lorem  ipsum dolor sit amet consectetur, adipisicing elit. Similique dignissimos ducimus culpa! Alias, est quas veniam deserunt ex qui velit! Quasi reprehenderit earum dolorem doloremque iusto recusandae cupiditate quam reiciendis hic temporibus nam magni nulla distinctio obcaecati soluta accusantium dignissimos, laudantium, deleniti, enim minus eos sapiente placeat vitae. Illum ut natus expedita, numquam quia obcaecati consequuntur pariatur commodi? Ad similique doloremque consectetur maiores dicta! Quisquam dignissimos accusantium animi atque non quos mollitia quidem, voluptate cum, natus voluptates quaerat at voluptatum, tempore magnam quas! Quidem sint blanditiis, deleniti placeat dolore aperiam excepturi culpa. Nemo quos possimus incidunt doloribus repellendus similique odit."
let sp=text.toLowerCase().split("")

// console.log(a);
let s=[]
let a =[]
let l=[]
let o=[]
let m=[]
let h=[]
let b=[]
let y=[]
let e = []

let s1= 0
let a1= 0
let l1= 0
let o1= 0
let m1= 0
let h1= 0
let b1= 0
let y1 = 0
let e1 = 0

function salom(sp, s,a,l,o,m,h,b,y){
for (let item of sp) {

   if (item == "s"){
      s1++
     s.push(item)
   }else if (item == "a"){
      a.push(item)}
      a1++
      if (item == "l"){
         l.push(item)}
         l1++
         if (item == "o"){
            o.push(item)
         o1++} 
            if (item == "m"){
               m.push(item)
            m1++}
            if (item == "h"){
               h.push(item)
               h1++
            }if (item == "b"){
               b.push(item)
               b1++
            }if (item == "e"){
               e.push(item)
               e1++
            }if (item == "y"){
               y.push(item)
               y1++
            }{
      console.log("error");
   }
   
}
}




salom(sp,s,a,l,o,m,h,b,y)

// console.log(s)
// console.log(a)
// console.log(l)
// console.log(o)
// console.log(h)
// console.log(b)
// console.log(y)


// console.log(s1)
// console.log(a1)
// console.log(l1)
// console.log(o1)
// console.log(h1)
// console.log(b1)
// console.log(y1)

let v = Math.min(s1,a1,l1,o1,m1,)
let math1 = Math.min(h1,e1,l1,l1,o1)
let math2 = Math.min(b1,a1,y1,)

console.log(v);
console.log(math1);
console.log(math2);


// let r = "((())()))))()())(())()()((()()()))))))((((())(((()((()()(()()("



// let u = r.split("")

// let bqavss = []
// let byakta = []


// let bq1= []
// let by1 = []

// function qavs(u , bqavss,byakta){
//    for (let item of u){
//       if (item == ")"){
//          bqavss.push(item)
//          bq1++
//       }if (item == "("){
//          byakta.push(item)
//          by1++
//       }else{
//          console.log("eror");
//       }
//    }
// }




// qavs(u, bqavss,byakta)


// console.log(u);

// let e = Math.min(bq1,by1)

// console.log(e);