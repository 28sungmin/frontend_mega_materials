//import { memo } from "react"; 
//캐싱으로 저장 : 변경된 값이 없다면 캐시 메모리로부터 가져온다. (속도 문제를 효율적으로 처리할 수 있음) export default memo(ImgAtm);
const ImgAtm = ({srcProps, altProps, ...props}) => {
    console.log(srcProps);
    console.log(altProps);
    console.log(props); //{className: 'h-40', title: 'Puma Logo'}

    return (
        <img {...props} src={srcProps} alt={altProps} />
    )
}
export default ImgAtm;