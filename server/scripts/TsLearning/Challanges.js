class Challenges{
 
       
    StringReverse(string)  
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


    numberofOccurances(pass)
    {
        
        var charObj={}
        for (const char of pass)
        {
             charObj[char]=0;
             for (const char2 of pass)
             {
                if (char==char2)
                {
                    charObj[char]++;
                }
             }

             

        }
        console.log(charObj);

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



    arrayReverse(){
        var arr=[0,1,2,3,4,5,6]
        const n = arr.length
        
        for(var i=0 ;i<Math.floor(n/2);i++)
        {   
        
        var temp=arr[n-i-1];
            arr[n-i-1]=arr[i]
            arr[i]=temp;
        }
    console.log(arr);
    }




}

class phdStudent{
    constructor(stName,stClass,stRollno,sup,reArea){
        this.stName=stName
        this.stClass=stClass
        this.stRollno=stRollno
        this.researchArea=reArea
        this.supervisor=sup}
    }
class msStudent{
    constructor(stName,stClass,stRollno,supervisor){
        this.stName=stName
        this.stClass=stClass
        this.stRollno=stRollno
        this.supervisor=supervisor}
       
    }






class StudentFactory{
createStudent(type ,data){
    switch(type){

        case "phdStudent" :
        {
newPhdSt= new phdStudent(data)
console.log("new PHD student Created",newPhdSt); 
}
        case "msStudent":{
const newMsst= new msStudent(data)
console.log("new Ms Student Created",newMsst);
        }
     
    }
}



    
}

 StudentFactory=new StudentFactory();
 StudentFactory.createStudent("msStudent",{stName:"abdul",stClass:"MS(SE)",
 stRollno:"i192086",supervisor:"Irum-Inayat"});













const chall= new Challenges()
console.log(chall.StringReverse('ALI'));
//https://edabit.com/challenges/javascript
// https://github.com/dinanathsj29/javascript-exercise-beginners
chall.Palaindrone('madam')
chall.secondLargest()
chall.arrayReverse()
chall.numberofOccurances("pass")
// 934696
// 783521
// 249278
// 392142
// 373566