// Create a file called log file
// write  memory utilization in it aftery every five min


const fs=require('fs')
const memoryDetails=process.memoryUsage().heapUsed
console.log(`${new Date().toISOString() } - Memory Usage  : ${memoryDetails/ (1024 * 1024) } MBs\n`);
const logData=`${new Date().toISOString() } - Memory Usage  : ${memoryDetails/ (1024 * 1024)} - Mbs\n`
fs.appendFile('ApplicationLogs.txt',logData,(err)=>{

    if(err)
    {
        console.log('Error:'+ err );
    }
})


