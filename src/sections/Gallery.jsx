import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";

// This grabs all jpg/png files in that folder automatically
const imageModules = import.meta.glob('../assets/photos/*.{png,jpg,jpeg,JPG,PNG}', { eager: true });

// Convert the object into an array of URL strings
const images = Object.values(imageModules).map((mod) => mod.default);

export const Gallery = () => {
    const [data, setData] = useState({
        img: "",
        i: 0
    });

    const viewImage = (img, i) => {
        setData({ img, i });
    };

    const imgAction = (action) => {
        let i = data.i;
        if (action === "next-img"){
            setData({ img: images[i + 1], i: i + 1 });
        }
        if (action === "prev-img"){
            setData({ img: images[i - 1], i: i - 1 });
        }
        if (!action){
            setData({ img: "", i: 0 });
        }
    }
    return (
    
    <>  
        <section className="pt-20 pb-20 min-h-screen">
            {data.img && 
                <div style={{
                    width: "100%",
                    height: "100vh",
                    background: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    zIndex: 1000
            }}>
                <button onClick={() => imgAction()} style={{ position: "absolute", top: "10px", right: "10px"}}>✕</button>
                <button 
                    onClick={() => imgAction("prev-img")}
                    className="text-4xl absolute left-4 md:left-10 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
                >
                    ‹
                </button>                
                <img src={data.img} style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}></img>
                <button 
                    onClick={() => imgAction("next-img")}
                    className="text-4xl absolute right-4 md:right-10 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all"
                >
                    ›
                </button>
            </div>
            }        
            <div style={{ padding: "10px" }}>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter="20px">
                        {images.map((image, i) => (
                            <img 
                                key={i}
                                src={image}
                                style={{ width: "100%", display: "block"}}
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>

    
    </>
    )
}

