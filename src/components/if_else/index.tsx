import {ReactNode} from "react"

interface Props {
    name: string;
    ispacked: boolean;
    children: ReactNode;
}

export default function MyName({name, ispacked, children}: Props){
    return ispacked ? (
    <div>
        <h1>Hello {name}!</h1>
        {children}
        </div>
    ) : (
        <>АААААААААААААА</>
    )
}