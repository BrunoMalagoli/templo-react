import fernet from "../images/fernet.png"
import gancia from "../images/gancia.png"
import red from "../images/red.png"
import jack from "../images/jack.png"
import chandon from "../images/chandon.png"
import enemigo from "../images/enemigo.png"
import cordero from "../images/cordero.png"
import baronb from "../images/baronb.png"
const Products=[
    {
    "id": "1",
    "photo": red,
    "name": "JW Red Label",
    "price":"1600",
    "stock":"15",
    "description":"Johnnie Walker Red Label se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor.",
    "category":"whiskys"
    },
    {
    "id": "2",
    "photo": gancia,
    "name": "Gancia",
    "price":"400",
    "stock":"12",
    "description":"Americano Gancia es un aperitivo que se caracteriza por la presencia de sabores herbáceos y cítricos que se combinan con los del vino blanco y el alcohol. El sabor amargo de las hierbas se mezcla con el dulzor del azúcar logrando una bebida amable, agradable al beber, equilibrada y de gran personalidad.",
    "category":"aperitivos"
    },
    {
    "id": "3",
    "photo": jack,
    "name": "Jack Daniel's N7",
    "price":"3800",
    "stock":"7",
    "description":"Whiskey Jack Daniel's es una reconocida marca de whiskey de origen estadounidense. Se trata de un whiskey Tennesse, y este tipo de destilado se diferencia en que su elaboración se filtra a través de carbon de madera de arce.",
    "category":"whiskys"
    },
    {
    "id": "4",    
    "photo": fernet,
    "name": "Fernet Branca",
    "price":"550",
    "stock":"10",
    "description":"Fernet-Branca es de color marrón claro con reflejos ámbar y desprende un aroma a menta que predomina sobre el resto de las hierbas con las que se elabora, aunque debajo de la menta se percibe pino, algunas notas florales y hasta caramelo.",
    "category":"aperitivos"
    },
    {
    "id": "5",    
    "photo": chandon ,
    "name": "Chandon Extra Brut",
    "price":"800",
    "stock":"30",
    "description":"Chandon Extra Brut es el gran clásico de Chandon. Las mejores uvas de Chardonnay y Pinot Noir nos permiten crear un espumoso fresco, frutado, elegante, cremoso y equilibrado. Se destaca por su fineza y precisión.",
    "category":"espumantes"
    },
    {
        "id": "6",    
        "photo": enemigo ,
        "name": "El enemigo Malbec",
        "price":"1950",
        "stock":"12",
        "description":"Realizado por bodegas Aleanna, provincia de Mendoza, es de cuerpo compacto, con ciertos tonos de fruta roja algo madura, taninos más macizos, firmes y algo secantes. No es profundo, sólo persiste su textura. La expresión es toda de fruta, madura algo de pasa, con músculo y buena frescura, y con toque herbal al final.",
        "category":"vinos"
    },
    {
        "id": "7",    
        "photo": cordero ,
        "name": "Cordero piel de lobo Malbec",
        "price":"300",
        "stock":"48",
        "description":"Es un Malbec joven muy bien elaborado, diferente por su aroma y sabor a frutos maduros. Con una acidez justa deja en boca un picor agradable con un final reforzado por su paso por madera.",
        "category":"vinos"
        },
    {
        "id": "8",    
        "photo": baronb ,
        "name": "Baron B Extra Brut",
        "price":"1500",
        "stock":"48",
        "description":"El espumante Baron B de Chandon conjugan la elegancia del Chardonnay y la intensidad del Pinot Noir en un producto delicado y armonioso. ... Aromas expresivos a damasco y frutos cítricos se combinan con notas de pan tostado y frutos secos, dando complejidad a este espumante con final de boca sensual y de gran persistencia.",
        "category":"espumantes"
    }

]
export default Products;