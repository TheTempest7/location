import  {ReactNode} from "react";


interface IButton {
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({children, onClick}:IButton) => {
    return (<button
        onClick={onClick}
    >
        {children}
    </button>)
}
