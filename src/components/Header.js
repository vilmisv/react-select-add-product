import Button from "./Button";

const Header = ({onnAdd, showAdd}) => {

    return (
        <header className='header'>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add Product'} onClick={onnAdd}/>
        </header>
    )
}

export default Header;