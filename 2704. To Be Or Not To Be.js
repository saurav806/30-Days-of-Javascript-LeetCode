//Link:- https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (temp) =>{
            if(temp!==val) throw new Error("Not Equal");
            return true;
        },
        notToBe: (temp) =>{
            if(temp===val) throw new Error("Equal");
            return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
