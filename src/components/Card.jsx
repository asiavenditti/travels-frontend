
import { useState } from "react"

export default function Card({ altText, imageUrl, title, description }) {

    const [imageErr, setImageErr] = useState(false)

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                {imageErr ? (
                    <div className="d-flex justify-content-center align-items-center bg-secondary text-white" style={{ height: '18rem' }}>
                        <p className="m-0">Immagine non disponibile</p>
                    </div>
                ) : (

                    <img
                        src={imageUrl}
                        alt={altText}
                        className="card-img-top"
                        onError={setImageErr(true)}
                    />
                )}
                <div className="card-body">
                    <h5 className="card-text">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}