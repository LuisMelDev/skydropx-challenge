
interface ShiptmentParams{
    zip_from: string;
    zip_to: string;
    weight: string;
    height: string;
    width: string;
    length: string;
}

export const getBodyShipment = ({zip_from, height, length, weight, width, zip_to}:ShiptmentParams) => ({
    
        "address_from": {
            "province": "Ciudad de México",
            "city": "Azcapotzalco",
            "name": "Jose Fernando",
            "zip": zip_from,
            "country": "MX",
            "address1": "Av. Principal #234",
            "company": "skydropx",
            "address2": "Centro",
            "phone": "5555555555",
            "email": "skydropx@email.com"
        },
        "parcels": [
            {
                "weight": parseInt(weight),
                "distance_unit": "CM",
                "mass_unit": "KG",
                "height": parseInt(height),
                "width": parseInt(width),
                "length": parseInt(length)
            }
        ],
        "address_to": {
            "province": "Jalisco",
            "city": "Guadalajara",
            "name": "Jorge Fernández",
            "zip": zip_to,
            "country": "MX",
            "address1": " Av. Lázaro Cárdenas #234",
            "company": "-",
            "address2": "Americana",
            "phone": "5555555555",
            "email": "ejemplo@skydropx.com",
            "reference": "Frente a tienda de abarro",
            "contents": "Contenido"
        },
        "consignment_note_class_code": "53131600",
        "consignment_note_packaging_code": "1H1"
    
})