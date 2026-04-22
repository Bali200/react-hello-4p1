function startEngine() {
    const x = Math.floor(Math.random() * 2);
    if(x === 1)
    {
        alert("vroom vroom");
    } else {
        alert("stall")
    }
}

function Car() {
    return (
        <>
        <button onClick={startEngine}>Start engine</button>
        </>
    )
}



export default Car;