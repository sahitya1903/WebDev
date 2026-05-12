function Hello({username='',textColor=''}){
    let style={color:textColor};
    return(
        <h3 style={style}>Hello, {username}</h3>
    );
}

export default Hello;