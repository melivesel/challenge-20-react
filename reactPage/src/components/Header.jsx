import Nav from './Nav';
export default function Header() {
    const headerStyle = {
        fontSize: 100,
        position: 'absolute',
        top: 0
    };
    const navStyle = {
        position: 'absolute',
        top: 105, 
        right: 0,
        fontSize: 30
    }

    return (
        <div>
            <h1 style={headerStyle}>Melissa</h1>
            <div style={navStyle} >
                <Nav />
            </div>
        </div>
    );
}