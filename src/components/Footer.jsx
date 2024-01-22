

function Footer(){
    const date = new Date();

    return (
        <div className="footer">
        <p className="footerp">
        Copyright ⓒ {date.getFullYear()} 
         </p>
    </div>);
}

export default Footer;