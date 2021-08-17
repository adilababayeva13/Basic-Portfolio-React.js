class Header extends React.Component {
    render(){
        var headerMargin={
          marginLeft:10
        }
        return (
            <header>
       
            <a href="../index.html" id="logo">{this.props.a1}</a>
            <nav>
                <a href="../index.html" style={headerMargin} >{this.props.a2}</a> 
                <a href="../portfolio.html" style={headerMargin}>{this.props.a3}</a> 
                <a href="../contact.html" style={headerMargin}>{this.props.a4}</a>
              </nav> 
         
        </header>
        )
    }
}

Header.propTypes = {
    a1: PropTypes.string.isRequired,
    a2: PropTypes.string.isRequired,
    a3: PropTypes.string.isRequired,
    a4: PropTypes.string.isRequired,
}