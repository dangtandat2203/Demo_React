// () => { }
import './style.css';

const MyComponent = () => {
    //kiểu dữ liệu nguyên thủy
    //const a = "Hello Hello"; //string 
    //const a = 25; //number
    //const a= true; //boolean
    //const a = undefined;
    //const a = null;

    //kiểu dự liệu không nguyên thủy
    const a = [1, 2, 3]; //array
    // const a = {
    //     name: " dangtandat",
    //     age: 21
    // }
    return (
        <>
            <div className='abc'>{JSON.stringify(a)} dangtandat update 1 </div>
            <div>{console.log("Dangtandat")}</div>
        </>
    );
}


export default MyComponent;