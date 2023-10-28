
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{

        fetch('Services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))

    },[])




    return (
        <div className='text-center py-8'>
            <h3 className='text-orange-400 font-bold text-3xl'>Services</h3>
            <h1 className='text-5xl' >Services Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard key={service._id} service ={service} ></ServicesCard>) 
                }
            </div>
        </div>
    );
};

export default Services;