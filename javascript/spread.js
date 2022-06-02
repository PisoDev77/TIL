const duplicateArr = () => {
    const arr = ["a","b","c","d"];
    const copyArr1 = arr.slice(0);
    const copyArr2 = [...arr];
    copyArr1[2] = "f1";
    copyArr2[2] = "f2";
    console.log(arr);

    const arr2 = [1,2,[3,4]];
    const copyArr21 = [...arr2];
    copyArr21[2][0] = 5;
    console.log(arr2);
};

const removeDuple = () => {
    const arr = ["a", "a", "b", "b"];
    const uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
};

const toArr = () => {
    const $divs = document.querySelectorAll("div");
    const $arrDivs = [...$divs];
    console.log(Array.isArray($divs), Array.isArray($arrDivs));
};

const distribute = () => {
    const [a, ...others] = ["a","b","c","d"];
    console.log(a);
    console.log(others);
    //rest의 개념도 확인해두자
};

distribute();