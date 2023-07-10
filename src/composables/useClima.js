export default function useClima() {

    const obtenerClima = ({ciudad, pais}) => {
        console.log('consultando..', ciudad);
        console.log('consultando..', pais);
    }

    return {
        obtenerClima
    }
}