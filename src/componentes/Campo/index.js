import './campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                obrigatorio
                type={type}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                placeholder={placeholder}
            /> 
        </div>
    )
}

export default Campo