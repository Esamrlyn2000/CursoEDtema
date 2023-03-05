import Curso from "./Curso";

function Cuadricula() {
    return (
        <div className="main-content">
            <Curso
                titulo="Android desde cero 2023"
                subtitulo="Domina los fundamentos de Android y crea tu primera aplicación móvil."
                imagen="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2Fbf604a66-3986-4483-86c6-3ecd9db26aaf.png&w=1920&q=75"
            />

            <Curso
                titulo="Python desde cero 2023"
                subtitulo="Domina la última versión de uno de los lenguajes más importantes y aprende a crear un To-Do List."
                imagen="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fmedium%2F22b4eb1a-aa12-435b-9537-7b88911506c6.png&w=1920&q=75"
            />
        </div>
    );
}

export default Cuadricula;