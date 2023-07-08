//Link:- https://leetcode.com/problems/sleep/description/

/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve,millis));
    // sleep(millis).then( () => console.log(millis));
    // return millis;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
