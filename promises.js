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


  phase5();
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here 



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here 



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here 
