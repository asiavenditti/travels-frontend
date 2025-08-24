import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleCardPage() {
    const { id } = useParams();
    const [city, setCity] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/cities/${id}`)
            .then((res) => res.json())
            .then((data) => setCity(data));
    }, [id]);

    if (!city) return null;

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="card shadow-sm mb-4">
                        <img
                            src={city.image_url}
                            alt={city.city}
                            className="card-img-top"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <h2 className="card-title fw-bold text-center mb-3">{city.city}</h2>
                            <p className="card-text text-center fs-5">
                                <strong>Paese:</strong> {city.country}
                            </p>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <strong>Regione:</strong> {city.admin_name || "Non disponibile"}
                                </li>

                                <li className="list-group-item">
                                    <strong>Popolazione:</strong>{" "}
                                    {city.population ? city.population.toLocaleString() : "Non disponibile"}
                                </li>

                            </ul>

                            <p className="text-muted text-center fst-italic mt-3">
                                Scopri tutte le meraviglie di {city.city}!
                            </p>
                        </div>
                    </div>

                    {/* MAPPA */}
                    {city.map_url && (
                        <div className="ratio ratio-16x9">
                            <iframe
                                src={city.map_url}
                                title={`Mappa di ${city.city}`}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
