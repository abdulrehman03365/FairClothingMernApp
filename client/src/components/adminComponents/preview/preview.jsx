import './preview.css'
function Preview() {
    return (  <>
         <div id='preview-holder' style={{border:"1px solid" }}>

        <div id='st-preview'>
        <p id='pr-view'>name of marque</p>
        <p>location</p>
        <img src="./marqueImages/bilal.jpg" id="img-Preview"></img>
        <p>status</p>
        <p>capacity</p>

        </div>
        <div id="bt-preview">
        <button >edit</button>

        <button>remove</button>
        </div>
         </div>
        
    </>);
}

export default Preview;