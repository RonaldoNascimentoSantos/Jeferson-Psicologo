import './RedesSociais.css';

const RedesSociais = () => {

    const ListaRedes = [
        {id:1, urlNome: 'Instagram',url:'https://www.instagram.com/jeferson.novaes.psi/'},
        {id:2, urlNome: 'Whatsapp',url:'https://wa.me/message/EZF4A2CYCBISL1'},
        {id:3, urlNome: 'Linkedin',url:'https://www.linkedin.com/in/jeferson-novaes-58776015b/'},
        
        
    ]

    const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className="conteudo-links">
        <a href={props.url}>{props.urlNome}</a>
    </div>
    )

    return (
        <>
        {LinksRedes}
        
        </>
    )
}

export default RedesSociais;