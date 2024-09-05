export default function Project ({data}) {
    return (
        <div className = "card">
            <h2>{data.title}</h2>
            <img src={data.image} />
        </div>
    )
}