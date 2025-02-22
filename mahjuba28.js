function palindrome (myString)
{ 
    var input=myString.replace(/[^A-Z0-9]/ig,"").toLowerCase();
    var reversedinput=input.split('').reverse().join('');
    if (input===reversedinput)
    {document.write("<div>"+ myString + "the given word was a palindrome </div>")}
    else{document.write("<div> it wasn't a palindrome</div>")}
}
var t=prompt('give me a word to check whether its palindrome or not....')
palindrome (t);