
const BUCKET_NAME=process.env.BUCKET_NAME
const REGION=process.env.AWS_REGION
const { S3Client, PutObjectCommand , GetObjectCommand , getSignedUrl } = require("@aws-sdk/client-s3");
var url ="";
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
                  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                },
              })
        const command = new PutObjectCommand(params)
        const response=await client.send(command)
        console.log("s3 response :"+response);
        //Get signed URL for uploaded file
        const getCommand = new GetObjectCommand({ Bucket: params.Bucket, Key: params.Key });
        const getresp=await client.send(getCommand)
        url = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
        console.log("url of image: " +url)
        
}
catch(error)
{
        console.log("error uploading to aws s3 :"+ error);
}



return url

}
module.exports={upload}
