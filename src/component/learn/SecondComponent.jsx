const SecondComponent = () => {
    return (
        <div>second component</div>
    )
}
const ThirdComponent = () => {
    return (
        <div>Third component</div>
    )
}
//cách 1:
export default SecondComponent;

//cách 2: xuất bao nhiêu biến tùy thích
export { ThirdComponent, SecondComponent };