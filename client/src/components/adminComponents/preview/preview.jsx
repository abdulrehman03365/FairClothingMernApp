import './preview.css'
function Preview() {
    return (  <>
         <div id='preview-holder'>

        <div id='st-preview'>
        <p id='pr-view'>name of marque</p>
        <img src="./marqueImages/bilal.jpg" id="img-Preview"></img>
        <p>status</p>

        </div>
        <div id="bt-preview">
        <button >edit</button>

        <button>remove</button>
        </div>
         </div>
        
    </>);
}

export default Preview;