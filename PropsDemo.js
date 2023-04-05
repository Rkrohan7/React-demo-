function PropsDemo() {
    let message = "Hey React!!!!"
    return (
        <div>
            <h3>Props Demo!!!!</h3>
            <p>message: {message}</p>
            <ChildProps message={message} />
            <ChildProps1 message={message} />
            
        </div>
    )
}

function ChildProps({message}) {
    return (
        <div>
            <h4>Child Props</h4>
            <p>Message:{message}</p>
        </div>
    )
}
function ChildProps1({message}) {
    return (
        <div>
            <h4>Child Props</h4>
            <p>Message:{message}</p>
        </div>
    )
}

export default PropsDemo 