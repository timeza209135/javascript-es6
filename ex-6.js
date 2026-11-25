let height = undefined;
let result;

function definedCheck(height) {
    return result = height ?? "Height is not defined";
}
result = definedCheck(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
