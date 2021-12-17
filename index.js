// Solution

document.getElementById("myButton").onclick = function() {

  var cardNumber = document.getElementById("myText").value
  
  // "-" işareti geldiğinde kart numarasını kabul etmesini sağladık.
  var edittedNum = "";
  
  for (let i = 0; i < cardNumber.length; i++) {
  if (cardNumber[i] !== "-") {
  edittedNum += cardNumber[i];
  }
  }
  
  // Kart numarasının 16 haneli ve tipinin string olmasını sağladık.
  if (typeof(edittedNum) !== "string" || edittedNum.length !== 16) { 
     alert('Kart Numaranız 16 Haneli Rakamlardan Oluşan Bir String Olmalı!')
  } 
   // Harf girildiği taktirde uyarı vermesini sağladık.
  else if( parseInt(edittedNum) != edittedNum) {
       alert("Kart Numaranız Sadece Rakamlardan Oluşmalı!")
  } 
    // Kart numaralarının toplamının 16'dan büyük olmasını, en az 2 farklı rakam olmasını ve son hanesinin çift  sayı olmasını sağladık.
  else if (true) {
     let counter = 0;
     let total = 0;
     for (let i = 0; i < edittedNum.length; i++) {
        if (edittedNum[0] === edittedNum[i]) {
         counter++;
         total += parseInt(edittedNum[i])
        } else total += parseInt(edittedNum[i]) 
     }
       
       if ( counter == 16) {
         alert("Kart Numaranız En Az 2 Farklı Rakam İçermeli!")
       } else if ( total <= 16) {
         alert("Kart Numaranızın Rakamlarının Toplamı 16'dan Büyük Olmalı!")
       } else if (edittedNum[15] % 2 == 1 ) {
         alert("Kart Numaranızın Son Rakamı Çift Sayı Olmalı!")
       } 
       // Luhn Algoritmasını kullanarak kart numarasının son kullanma tarihinin geçerli olup olmadığını hesaplamasını sağladık.
       else if (true) {
        let arr1 = ""
        let arr2 = ""
        let total = "0"
        let total1 = "0"
        let total2 = "0"
             for (let i = 0; i < edittedNum.length; i += 2) {
             arr1 += Number(edittedNum[i]) * 2
             }
             arr1 = arr1.split("")
             arr1 = arr1.map((cardNumber) => Number(cardNumber))
             total1 = arr1.reduce((acc, number) => acc + number);
             
             for (let i = 1; i < edittedNum.length; i += 2) {
             arr2 += Number(edittedNum[i]) 
             }
             arr2 = arr2.split("")
             arr2 = arr2.map((cardNumber) => Number(cardNumber))
             total2 = arr2.reduce((acc, number) => acc + number);
             
             total = total1 + total2
             
             total % 10 == 0 ? alert("Harika, Kart Numaranız ve Son Kullanma Tarihiniz Geçerli!") : alert("Kart Numaranız Geçerli Fakat Son Kullanma Tarihiniz Geçersiz!") 
             }
      
   }
  }
   
   
  // isCreditCardNumberValid ("9999777788880000") // "Harika, Kart Numaranız ve Son Kullanma Tarihiniz Geçerli!"
  // isCreditCardNumberValid ("6666666666661666") // "Kart Numaranız Geçerli Fakat Son Kullanma Tarihiniz Geçersiz!"
  
  // isCreditCardNumberValid ("a92332119c011112") // "Kart Numaranız Sadece Rakamlardan Oluşmalı!"
  // isCreditCardNumberValid ("4444444444444444") // "Kart Numaranız En Az 2 Farklı Rakam İçermeli!"
  // isCreditCardNumberValid ("1111111111111110") // "Kart Numaranızın Rakamlarının Toplamı 16'dan Büyük Olmalı!"
  // isCreditCardNumberValid ("6666666666666661") // "Kart Numaranızın Son Rakamı Çift Sayı Olmalı!"
  
  // isCreditCardNumberValid ("-9999-7777-8888-0000") // "Harika, Kart Numaranız ve Son Kullanma Tarihiniz Geçerli!"
  // isCreditCardNumberValid ("-6666-6666-6666-1666") // "Kart Numaranız Geçerli Fakat Son Kullanma Tarihiniz Geçersiz!"
