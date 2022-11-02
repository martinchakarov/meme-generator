export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={require(`../img/trollface.png`)} alt="Trollface" className="logo--icon"/>
                <h1>Meme Generator</h1>
            </div>
            <h3 className="subtitle">React Course - Project 3</h3>
        </header>
    )
}