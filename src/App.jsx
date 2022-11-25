import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState(["mjo", "11homam11", "123Amr321","99alice66","EliaS0000","0101JAD1010"]);
  const [images, setImages] = useState([
    {
      image_1: {
        src: "./fire3.png",
        
      },
      image_2: {
        src: "./fire1.png",
      },
      image_3: {
        src: "./metal2.png",
        title:" الطلب الاول:تصوير فيديو دبكةعند الذهاب الى اول محطة "
      },
    },
    {
      image_1: {
        src: "./metal3.png",
        
      },
      image_2: {
        src: "./water2.png",
        
      },
      image_3: {
        src: "./fire1.png",
       title:"الطلب الثاني:أعطاء مبلغ لمحتاج"
      },
    },
    {
      image_1: {
        src: "./water3.png",
        
      },
      image_2: {
        src: "./water1.png",
        
      },
      image_3: {
        src: "./fire2.png",
        title:"الطلب الثالث:صورة للفرقة مع السيف الدمشقي أو سارية العلم"
      },
    },
    {
      image_1: {
        src: "./metal1.png",
        
      },
      image_2: {
        src: "./fire2.png",
        
      },
      image_3: {
        src: "./water3.png",
        title:"الطلب الرابع:الحصول على كرت باص أخضر"
        
      },
    },
    {
      image_1: {
        src: "./water4.png",
        
      },
      image_2: {
        src: "./fire4.png",
        
      },
      image_3: {
        src: "./metal1.png",
        title:"الطلب الخامس:الحصول على طابع و تلزيقه على ورقة"
      },
    },
    {
      image_1: {
        src: "./fire.png",
        
      },
      image_2: {
        src: "./firestorm.png",
        
      },
      image_3: {
        src: "./fire.png",
        title:"الطلب الأخير:فتح لايف على غروب الأسرة أثناء الذهاب الى الموقع"
      },
    },
  ]);

  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState("");

  const handleSubmit = () => {
    if (password.includes(current)) {
      const newPassword = password.filter((item) => item != current);
      setPassword(newPassword);
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      <h1 className="harryPotter">Chamber Of</h1>
      <h2 className="harryPotter">Secrets</h2>
      <iframe src="/Theme.MP3" allow="autoplay" id="audio" style={{display: "none"}}></iframe>

    <audio id="player" autoPlay loop>
      <source src="/Theme.MP3" type="audio/mp3" />
  </audio>

      <div className="d-flex" style={{ marginLeft: "20%" }}>
        <input type="text" onChange={(e) => setCurrent(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {count > 0 && (
        <div className="d-flex-column">
          <div className="d-flex-column">
            <img src={`${images[count - 1].image_1.src}`} className="image" />
            <div className="d-flex" style={{ padding: "0px 20px" }}>
              <input type="radio" id="1" name="fav_language" value="1" />
              <label htmlFor="1">{images[count - 1].image_1.title}</label>
            </div>
          </div>

          <div className="d-flex-column">
            <img src={`${images[count - 1].image_2.src}`} className="image" />
            <div className="d-flex" style={{ padding: "0px 20px" }}>
              <input type="radio" id="2" name="fav_language" value="2" />
              <label htmlFor="2">{images[count - 1].image_2.title}</label>
            </div>
          </div>

          <div className="d-flex-column">
            <img src={`${images[count - 1].image_3.src}`} className="image" />
            <div className="d-flex-column" style={{ padding: "0px 20px" }}>
              <input type="radio" id="3" name="fav_language" value="3" />
              <label htmlFor="3">{images[count - 1].image_3.title}</label>
            </div>
          </div>
        </div>
      )}

      {password.length == 0&& (
        <div>
          Go to here
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.9425127828634!2d36.31835081753894!3d33.51717374435042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6c340544943%3A0x1cfd2cce0e91ab79!2sChurch%20Of%20Holy%20Cross!5e0!3m2!1sen!2s!4v1669381830818!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ marginTop: "100px", alignSelf: "center", border: "none" }}
            allowFullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
