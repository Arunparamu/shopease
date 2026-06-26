
import banner from "../assets/homeimage.png";
import "../Css/Home.css";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();
    const checkuser=()=>{
        const userid=localStorage.getItem("userid");
        if(!userid)
        {
            navigate("user/signup");
        }
        else{
            navigate("/user/allproducts");
        }
    };
    return(
        <div >
            <div  
            style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "120vh",
                    }}>

                    <div className="nav-home">
                        <button onClick={checkuser}>SHOW NOW</button>
                    </div>
                    
            </div>
           
        </div>
    );
}
export default Home;