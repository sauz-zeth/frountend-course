/*export default function Index() {
    let cnt = 0;

    function handleclick(){
        cnt += 1;
    }
    return (
        <div>
            <p>
                <button onClick={handleclick}>
                Plus
                </button>
            </p>
            <p>{ cnt }!</p>
        </div>
    )

}
    */
import {ReactNode} from "react";

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
            <h1>не, тут фолс</h1>
        )

}