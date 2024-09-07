const ListItemAtm = ({nameProps, linkProps, ...props}) => {
    console.log(nameProps);
    console.log(linkProps);
    console.log(props); //{className: 'mx-10'}

    return (
        <li {...props}>
            <a href={linkProps}>
                {nameProps}
            </a>
        </li>
    )
}

export default ListItemAtm;