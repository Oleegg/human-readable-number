const numberReadable = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 
6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 
11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 
15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen'}
numberDozens = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
//module.exports =
function toReadable (n) {
    if(n<20) return numberReadable.n
}


console.log(toReadable(1));  ; // Will return 'one'
console.log(toReadable(997));  ; //will return 'nine hundred ninety seven'