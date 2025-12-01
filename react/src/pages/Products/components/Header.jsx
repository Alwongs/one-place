export default function Header({ title, classes }) {
    return (
        <header className={`header ${classes}`}>
            <h1 className="header__title">{title}</h1>
        </header>        
    )
}