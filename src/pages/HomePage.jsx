import { use, useEffect, useState } from "react";
import Card from "../components/Card";
export default function HomePage() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cities')
            .then(res => res.json())
            .then(data => setCities(data))
            .catch(err => console.error('Fetch error'))
    }, [])

    return (
        <div className="container">
            <h2 className="text-center my-5">Le nostre destinazioni</h2>
            <div className="row ">
                {cities.map((city) => {
                    return (
                        <div className="col-sm-12 col-md-4 d-flex justify-content-center my-3" key={city.id}>


                            <Card
                                id={city.id}
                                imageUrl={city.imageUrl}
                                altText={city.city}
                                title={city.city}
                                description={city.country}
                            />
                        </div>

                    )
                })}
            </div>
        </div>
    )

}