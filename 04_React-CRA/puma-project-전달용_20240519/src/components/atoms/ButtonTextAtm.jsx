const ButtonTextAtm = ({evtProps, txtProps, ...props}) => {
    console.log(evtProps);
    return (
        <button {...props} onClick={evtProps}>
            <span>{txtProps}</span>
        </button>
    )
}
export default ButtonTextAtm;