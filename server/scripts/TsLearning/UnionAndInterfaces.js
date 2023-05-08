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
        var numArray=[3,4,5,6]
         let max=numArray[0];
         let secMax=numArray[1]
         let n=numArray.length;
         for(var i=2;i<n;i++)
         {
                if(numArray[i]>max)
                {
                    secMax=max;
                    max=numArray[i]
                }
                else if (numArray[i]>secMax && this.numArray[i]!=max){
                    secMax=numArray[i]

                }

                
         }
         console.log("largest is "+ max
                 + "and second largest is "+ secMax);
    }

}

const chall= new Challenges()
console.log(chall.StringReverse('ALI'));
chall.Palaindrone('madam')
chall.secondLargest()
// 934696
// 783521
// 249278
// 392142
// 373566