function palindroom(str) {
        const charCount = {};
        var display = "";
        for (const ch of str.toLowerCase()) {
          if (/[^a-z0-9]/.test(ch)) {
            continue;
          }
          display += ch;
          if (charCount[ch]) {
            charCount[ch] += 1;
          } else {
            charCount[ch] = 1;
          }
        }
        
        let oddCount = 0;
        for (const prop in charCount){
          if (charCount[prop] % 2 === 1){
            oddCount += 1;
          }
        }
        console.log();
        console.log(charCount);
        console.log(oddCount > 1 ? false : true);
        
        
        if (oddCount > 1 || str == "") //test of het echt een "pa" is
        {
          document.getElementById("answer").innerHTML =  " is geen palindroom.";
        }
        else {
          document.getElementById("answer").innerHTML =  " is wel palindroom.";
        }
      }