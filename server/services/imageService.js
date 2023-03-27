
const BUCKET_NAME=process.env.BUCKET_NAME
const REGION=process.env.AWS_REGION
const { S3Client, PutObjectCommand , GetObjectCommand , getSignedUrl ,  } = require("@aws-sdk/client-s3");
const { parseUrl } =require( "@aws-sdk/url-parser");
var url="";

async function upload(imageName, base64Image , type)
{

base64Image=base64Image.replace(/^data:image\/\w+;base64,/, '')
const buffer=Buffer.from(base64Image,'base64')
                

const sizeInBytes = Buffer.byteLength(buffer);

console.log("Size of base64 file:", sizeInBytes, "bytes");
const params =
 {
        Bucket :BUCKET_NAME,
        Key:imageName,
        Body:buffer,
        ContentType:type
}

try{
        console.log("REGION :" +REGION);
        const client = new S3Client({
                region: REGION,
                credentials: {
                accessKeyId:process.env.AWS_ACCESS_KEY_ID ,
                secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY

                },
              })
        const command = new PutObjectCommand(params)
        const response=await client.send(command)
        const getObjectCommand = new GetObjectCommand({ Bucket: params.Bucket, Key: params.Key });
        url = `https://${params.Bucket}.s3.${REGION}.amazonaws.com/${params.Key}`;
        console.log('type of url :'+url);
        console.log("url :"+ url);
                



        
}
catch(error)
{
        console.log("Error:"+ error);
}



return url


}
module.exports={upload}