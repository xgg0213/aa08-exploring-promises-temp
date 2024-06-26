/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here 
function num1() {
    return 1;
}

async function num2() {
    return 2;
}

// console.log("num1,", num1());
// console.log("num2,", num2());
// console.log("num2,", num2().then(result => console.log(result)));


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here 
async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}
// waiting();


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here 
async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 3000)
    });

    const result = await promise;
    console.log('my promise is', result);

    new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 1500)
    }).then(r => console.log("then my promise is " + r))
}
// waitForMyPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here 
// const newPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("done");
//     }, 1500)
// })

// // note: promise is not a function, DO NOT invoke it
// newPromise
//     .then(r => console.log("then my promise is " + r))

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here 
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function phase5() {
    const res = await wait(2000);
    console.log("message displayed after 2s")
  }


//   phase5();
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here 
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

// for (let i = 0; i < 10; i++) {
//     let random = Math.random();
    
//     // wait(2000 + random * 1000) // why lin 96 and line 97 yields different results?
//     wait(2000)

//         .then(() => tryRandomPromise(random))
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
// }



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here 

const phase7 = async function(i) {
    let random = Math.random();
    await wait(5000 + random * 1000);
    try {
        const res = await tryRandomPromise(random);
        console.log('random again #', i, res);
    } catch (err) {
        console.log('random again #', i, err);
    }
}

for (let i = 0; i < 10; i++) {
    phase7(i) ;     
}
// phase7(0)
    


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here 
console.log('END OF PROGRAM');