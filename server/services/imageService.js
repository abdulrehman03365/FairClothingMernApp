/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 */

const BUCKET_NAME=process.env.BUCKET_NAME
const REGION=process.env.REGION
const { S3Client, PutObjectCommand , GetObjectCommand } = require("@aws-sdk/client-s3");

async function upload(imageName, base64Image , type)
{
const buffer =new Buffer.from(base64Image,"base64")
const params =
 {
        Bucket :BUCKET_NAME,
        Key:imageName,
        Body:buffer,
        ContentType:type
}


const S3Client = new S3Client({region:REGION})
const command = new PutObjectCommand(params)
await S3Client.send(command)

// Get signed URL for uploaded file
const getCommand = new GetObjectCommand({ Bucket: params.Bucket, Key: params.Key });
const url = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });
log(url)






}

module.exports={upload}