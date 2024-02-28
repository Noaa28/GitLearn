export const Button = (props) => {

    const { setName } = props;

    return <div>
        <button onClick={() => setName('insert name')}>Reset Name</button>
    </div>
}

