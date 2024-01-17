
type HeaderType = {
    title: string;
}
export const Header: React.FC<HeaderType> = (props: HeaderType) => {
    const { title } = props;
    return (
        <>
        <h1>{title}</h1>
        </>
    )
}