export const Button = (props) => {

    const { setName } = props;

    return <div>
        <button onClick={() => setName('insert My Name')}>Reset Name</button>
    </div>
}

