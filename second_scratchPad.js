const caesar = function(initialString, shiftNum) {
    //create alphabet and reverseAlphabet arrays
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    //const alphaStringReverse = "zyxwvutsrqponmlkjihgfedcba";
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

    const shiftStringArray = initIndexArray.map(function (index){
        //splice alphabet array at index to end of alphabet array
        //concatenate the array from the given index to end of the 
        //alphabet to the beginning of the initial array

        //run the for loop shift number of times
        //only need to slice if index and shift number would be
        //greater than 25
        forwardIndexArray = alphabetArray.slice(index);
        firstFrontArray = alphabetArray.slice(0, index);
        LoopArray = forwardIndexArray.concat(firstFrontArray);
        
        secIndexArray = alphabetArray.slice(index + 1);
        secLoopArray = alphabetArray.slice(0, index);
        secLoopArray = secIndexArray.concat(secLoopArray);
        secLoopReverse = secLoopArray.reverse();

        finalShiftAmt = shiftNum % 26

        if (shiftNum >= 0){
            if (shiftNum <= 25) {
                for (i = 0; i = shiftNum; i++) {
                    if (loopArray[i] === loopArray[shiftNum]) {
                        return loopArray[i];
                    }
                }
            } 
            
            else if (shiftNum >= 26) {
                for (i = 0; i = shiftNum % 26; i++) {
                    if (loopArray[i] === loopArray[shiftNum % 26]) {
                        return loopArray[i];
                    }
                }
            }


        } 


        else if (shiftNum < 0) {
            if (shiftNum >= -25) {
                for (i = 0; i = Math.abs(shiftNum); i++) {
                    if (secLoopReverse[i] === secLoopReverse[Math.abs(shiftNum)]) {
                        return secLoopReverse[i];
                    }
                }
            }

            else if (shiftNum <= -26) {
                for (i = 0; i = Math.abs(shiftNum) % 26; i++)
                    if (secLoopReverse[i] === secLoopReverse[Math.abs(shiftNum) % 26]) {
                        return secLoopReverse[i];
                    }
                 }
             }
            
        
        
            
            
            
            for(i = index; i = shiftNum + index; i++) {
                if (alphabetArray[i] === alphabetArray[shiftNum + index]){
                    return alphabetArray[i];

                }
            }
        }

        if (-26 < shiftNum < 0 && Math.abs(shiftNum + index) <= 25){
            for(i = index; i = shiftNum + index; i--) {
                if (alphabetArray[i] === alphabetArray[shiftNum + index]){
                    return alphabetArray[i];
                }
            }
        }

        if (26 > shiftNum > 0 && shiftNum + index > 25){
            for (i = 0; i = shiftNum; i++) {
                if (forLoopArray[i] === forLoopArray[shiftNum]) {
                    return forLoopArray[i];
                }
            }
        }

        if (shiftNum >= 26 && shiftNum + index > 25) {
            for (i = 0; i = shiftNum % 26; i++) {
                if (forLoopArray[i] === forLoopArray[shiftNum % 26]) {
                    return forLoopArray[i];
                }
            }
        }

        if ()

        }

        if (shiftNum <= )

 

        //Need if statements to do with large shift factors
        //and negative values

    })


};




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