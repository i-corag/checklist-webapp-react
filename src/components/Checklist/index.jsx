// tendremos todos los items del checklist

const Checklist = (props) => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default Checklist