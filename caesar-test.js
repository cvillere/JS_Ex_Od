const caesar = function(initialString, shiftNum) {
    //create alphabet and reverseAlphabet arrays
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphaStringReverse = "zyxwvutsrqponmlkjihgfedcba";
    const alphaReverseArray = Array.from(alphaStringReverse);
    const alphabetArray = Array.from(alphabetString);
    
    //manipulate initial string into array and make lower case array
    const initCaseArray = [...initialString];
    const initStringArray = initCaseArray.map(function (x)
                                    {return x.toLowerCase()});

    
    //finds index of letter from initialStringArray in alphabet array
    const initIndexArray = initStringArray.map(function(letter){
        return (alphabetArray.indexOf(letter));
    });

    //** I Think I should be able to use modulus operator here to
    //"wrap" around the array, but I'm at a loss for how.
   
    //return array with letters shifted
    const shiftStringArray = initIndexArray.map(function(index){
        
        if (shiftNum >= 0) {
            finalPlace = index + shiftNum;

        } else {
            finalPlace = index - shiftNum;
            
            }
        

        if (shiftNum >= 0){
            for (let i = index; i = finalPlace % 25; i++) {
                if (alphabetArray[i] === alphabetArray[totalLoops]){
                    return alphabetArray[i];
                };
            };
        }
        else if (shiftNum < 0) {
            for (let i = 0; i <= 25; i++){
                if (alphaReverseArray[i] === alphaReverseArray[finalIndex]){
                    return alphaReverseArray[i];
                }
            }
        }
    
    });

    //preserve spaces and punctuation marks from initial array
    const finalArray = (function(firItem, secItem, thrItem) {
        penulArrayOutput = [];
        for (i = 0; i < firItem.length; i++)
            if (secItem.includes(firItem[i])) {
                console.log(penulArrayOutput.push(thrItem[i]));
             }

            else {
                console.log(penulArrayOutput.push(firItem[i])); 
            }
        return penulArrayOutput;    
        });
    
    //fir arg. -- initCaseArray ; Sec arg. -- shiftArray
    const finalCaseArray = (function (lowerArray, upperArray) {
        absFinArray = [];
        for (i = 0; i < lowerArray.length; i++)
            if (lowerArray[i] !== lowerArray[i].toUpperCase()){
                console.log(`Value of upperArray[i]: ${upperArray[i]}`)
                absFinArray.push(upperArray[i]);
            }

            else {
                console.log(`Value of upperArray[i]: ${upperArray[i]}`)
                upperLetterLet = upperArray[i].toUpperCase();
                absFinArray.push(upperLetterLet);

            }
        
        return absFinArray;

    });

    

    const shiftArray = finalArray(initStringArray, alphabetArray, shiftStringArray);
    const finalCase = finalCaseArray(initCaseArray, shiftArray);
    const finalString = finalCase.join('');
    return finalString;
    

};



//(typeof caesar === 'function');
caesar("Mjqqt, Btwqi!", -5);

//module.exports = caesar
/*for (i = 1; i <= initStringArray.length; i++) {
    initIndex = alphabetArray.findIndex(initStringArray[i]);
    console.log(initIndex);
*/

//finding index of one array element in another array
//https://stackoverflow.com/questions/30114829/find-index-of-array-element-in-another-array-javascript

//how to iterate through a loop backwards
//https://medium.com/@chanakyabhardwaj/es6-reverse-iterable-for-an-array-5dae91c02904