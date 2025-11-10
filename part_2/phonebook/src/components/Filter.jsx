const Filter = ({value, onChange}) => {
    return (
        <form>
            <div>
                search:
                <input
                value={value}
                onChange={onChange}
                />
            </div>
        </form>
    )
}

export default Filter