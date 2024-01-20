
const BUCKET_NAME=process.env.BUCKET_NAME
const REGION=process.env.AWS_REGION
const { S3Client, PutObjectCommand , GetObjectCommand   } = require("@aws-sdk/client-s3");
const { getSignedUrl } =require( "@aws-sdk/s3-request-presigner")
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
     
        const client = new S3Client({
                region: REGION,
                credentials: {
                accessKeyId:process.env.AWS_ACCESS_KEY_ID ,
                secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY

                },
              })
        const command = new PutObjectCommand(params)
        const response=await client.send(command)
        // const getObjectCommand = new GetObjectCommand({ Bucket: params.Bucket, Key: params.Key });
        // const url = await getSignedUrl(client, getObjectCommand, { expiresIn: 60 }); // You can adjust expiresIn as needed
        // const urlString = url.toString();
        // console.log('Generated signed URL:', url);
        // console.log("type of signed url " + typeof urlString);
        // return urlString;
        
        url = `https://${params.Bucket}.s3.${REGION}.amazonaws.com/${params.Key}`;
        console.log("type of generated url :"+  typeof url)
        // const imageUrl = await S3Client.getSignedUrl(getObjectCommand, { expiresIn: 60 });
       
        return url.toString()       



        
}
catch(error)
{
        console.log("Error:"+ error);
}





}
module.exports={upload}
