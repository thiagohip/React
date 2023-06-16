import { ReactNode } from "react"

interface IList {
    children: ReactNode
}

export function List({ children }: IList) {
    return(
        <li>{children}</li>
    )
}