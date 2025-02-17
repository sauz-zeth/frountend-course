interface Props{
    age: Int32Array;
}

export default function MyAge({age}: Props) {
    return <h1>My age: { age } </h1>
}