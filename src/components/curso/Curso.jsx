const Curso = ({titulo,subtitulo,imagen}) => {
    return(
        <div>
          <img src={imagen} alt={titulo} />
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </div>
    );
}

export default Curso;