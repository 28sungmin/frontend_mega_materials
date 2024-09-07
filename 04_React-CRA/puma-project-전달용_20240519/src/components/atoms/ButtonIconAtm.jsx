const ButtonIconAtm = ({srcProps, altProps, evtProps}) => {
    console.log(srcProps);

    return (
        <button onClick={evtProps}>
            <img src={srcProps} alt={altProps}/>
        </button>
    )
}
export default ButtonIconAtm;