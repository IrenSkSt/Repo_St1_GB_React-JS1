export const Message = ({ name }) => {
    return <div style={{ paddingLeft: "50", color: "red" }}>{name} пишет: Текст сообщения. </div>;
}

// export const Message = (props) => {
//     // console.log(props);
//     // console.log(props.name);
//     return <div>{props.name} пишет: Текст сообщения. </div>;
// }