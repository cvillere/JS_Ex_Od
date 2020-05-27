const caesar = function(initialString, shiftNum) {

    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = Array.from(alphabetString);

    //manipulate initial string into array and make lower case array
    const initCaseArray = [...initialString];
    const initStringArray = initCaseArray.map(function (x)
                                    {return x.toLowerCase()});    

    //finds index of letter from initialStringArray in alphabet array
    const initIndexArray = initStringArray.map(function(letter){
        return (alphabetArray.indexOf(letter));
    });

    console.log(initIndexArray);
    const shiftStringArray = initIndexArray.map(function (index){
        //splice alphabet array at index to end of alphabet array
        //concatenate the array from the given index to end of the 
        //alphabet to the beginning of the initial array

        forwardIndexArray = alphabetArray.slice(index);
        firstFrontArray = alphabetArray.slice(0, index);
        loopArray = forwardIndexArray.concat(firstFrontArray);
        
        
        secIndexArray = alphabetArray.slice(index + 1);
        secLoopArray = alphabetArray.slice(0, index + 1);
        loopRevArray = secIndexArray.concat(secLoopArray);
        secLoopReverse = loopRevArray.reverse();
        

        finalShiftAmt = Math.abs(shiftNum)

        if (shiftNum >= 0 && shiftNum <= 25) {
            for (i = 0; i <= shiftNum; i++) {
                if (loopArray[i] === loopArray[shiftNum]) {
                    console.log(loopArray[i]);
                    return loopArray[i];

                    }
                }
            } 
            
        else if (shiftNum >= 26) {
            for (i = 0; i <= shiftNum % 26; i++) {
                if (loopArray[i] === loopArray[shiftNum % 26]) {
                    console.log(loopArray[i]);
                    return loopArray[i];
                    
                    }
                }
            }


        else if (shiftNum >= -25 && shiftNum < 0) {
            for (i = 0; i <= finalShiftAmt; i++) {
                if (secLoopReverse[i] === secLoopReverse[finalShiftAmt]) {
                    console.log(secLoopReverse[i]);
                    return secLoopReverse[i];

                    }
                }
            }

        else if (shiftNum <= -26) {
            for (i = 0; i <= finalShiftAmt % 26; i++) {
                if (secLoopReverse[i] === secLoopReverse[finalShiftAmt % 26]) {
                    console.log(secLoopReverse[i]);
                    return secLoopReverse[i];
                    
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

    //Make letter at index in shiftStringArray uppercase that was
    //uppercase in initStringArray
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




console.log(caesar("Mjqqt, Btwqi!", -5));

module.exports = caesar


//finding index of one array element in another array
//https://stackoverflow.com/questions/30114829/find-index-of-array-element-in-another-array-javascript

//how to iterate through a loop backwards
//https://medium.com/@chanakyabhardwaj/es6-reverse-iterable-for-an-array-5dae91c02904