class Challenges{


    StringReverse(string )  
    {

        var tempString  ='';
        for(var i=string.length ; i-- ;i<0 ){
           tempString=tempString+string[i]
        }

    return tempString;
    }



    Palaindrone(string){

        const n = string.length;
        for(var i=0;i<n/2;i++)
        {

            if(string[i]!==string[string.length-i-1])
            {
                console.log(string[i]+string[string.length-i-1]);
                console.log(string + " is not palandrome");
            }

            else
            console.log("string is palandrome");
        }
    }


    numberofOccurances()
    {

    }


    secondLargest()
    {
        
    }

}

const chall= new Challenges()
console.log(chall.StringReverse('ALI'));
chall.Palaindrone('madam')

// 934696
// 783521
// 249278
// 392142
// 373566