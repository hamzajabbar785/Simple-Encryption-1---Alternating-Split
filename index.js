// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the 
// odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated 
// N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the 
// process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


const encrypt = (text, n) => {
    if(!text || n <= 0){
        return text
    }

    let count = 0
    while(count < n){
        let odd = ""
        let even = ""

        for(let i = 0; i < text.length; i++){
            if(i > 0 && i % 2 !== 0){
                odd += text[i]
            }else{
                even += text[i]
            }
        }

        text = odd + even
        count++
    }

    return text
}

encrypt("012345", 2)

const decrypt = (encryptedText, n) => {
    if(!encryptedText === null || n <= 0){
        return encryptedText
    }
    
    let count = 0

    while(count < n){
        let arr = []
        let mid = encryptedText.length/2
        let first = encryptedText.split("").slice(mid)
        let second = encryptedText.split("").slice(0,mid)

        for(let i = 0; i < first.length; i++){
            arr.push(first[i])
            arr.push(second[i])
        }
        
        encryptedText = arr.join("")
        count++
    }

    return encryptedText
}

decrypt("012345", 2)