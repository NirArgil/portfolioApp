import './projectsList.scss'

export default function ProjectsList({ id, title, active, setSelected }) {
    return (
        <div className={active ? 'projectsList active' : 'projectsList'}
             onClick={() => setSelected(id)}>

            {title}

        </div>
    )
}
