import bagPic from "../../assets/bag.png"
import treePic from "../../assets/tree.png"
import "./Logo.css"


export default function Logo() {
    return (
         <div className="col-12" style={{
            backgroundColor: "#f1971f",
         }}>
            <div className="childDiv d-flex justify-content-center align-items-center gap-5 p-4">
            <img className="image" src={bagPic} width={"70px"} />
            <h1 id="heading">FAR-AWAY</h1>
            <img className="image" src={treePic} width={"70px"} />

            </div>
            
         </div>   
    );
}