class Img extends React.Component {
    render(){
       console.log("aaa",this.props.src)
        return (
            <img
              src={this.props.src}
              className={this.props.class}
              alt={this.props.alt}
              width={this.props.width}
              height={this.props.height}
              style={this.props.style}
            />
        )
    }
}