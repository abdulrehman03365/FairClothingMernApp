interface Directory{
    
   
    showFiles() : void;
}
class FileClass{
    filename : string;
    constructor(filename:string){
    this.filename=filename;
    }
    getFileName()
    {
        console.log(this.filename);
        
    }
    setFileName(filename:string ) : void
    {
        this.filename=filename;
        console.log(`File name updated${ filename}`);
        
       
    }
    
    
    }

class DirectoryClass implements Directory{
    private files :FileClass[]=[]

    addFiles(newfile:FileClass) {
   
     this.files.push(newfile); 

    }


    showFiles(): void {
      this.files.map((file)=>{file.getFileName()})  
    }

}


const homeDir=new DirectoryClass();
homeDir.addFiles(new FileClass("python"))
homeDir.showFiles()




