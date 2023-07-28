var pets=['dog', 'cat' , 'dog']
const petsCount=pets.reduce((obj,pet)=>{

if (!obj[pet])
{
 obj[pet]=1
}
else
{
obj[pet]++
}
return obj;
},{})

console.log(petsCount);


// count same characters in string

var obj={}
const Username = "abdulrehman"
for(var i=0;i<Username.length;i++)
{   const char =Username[i];
    if(obj[char])
    {
        obj[char]++
    }
    else
    {
        obj[char]=1;
    }
}

console.log(obj);

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }




    var users=[]
    for (var i=0;i<5 ;i++)
    {   
        const username=generateRandomString(5)
        const email=`${username}@gmail.com`
        const password=generateRandomString(6)
        users.push({email,password})
    }


    console.log(users);





