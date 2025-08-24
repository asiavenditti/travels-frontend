
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Card({ id, altText, imageUrl, title, description }) {

    const [imageErr, setImageErr] = useState(false)

    return (
        <Link to={`/city/${id}`} style={{ textDecoration: 'none' }}>
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
                        <h5 className="card-title fw-bold">
                            {title}
                        </h5>

                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </Link >
    )
}