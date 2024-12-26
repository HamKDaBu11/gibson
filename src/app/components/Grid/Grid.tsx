import { ReactNode } from "react"

interface GridProps {
    gridCols: number | undefined
    children: ReactNode
}

const Grid: React.FC<GridProps> = ({
    gridCols,
    children
}) => {
    return (
        <div className={`grid grid-cols-${gridCols} grid-rows-1 my-12 gap-2`}>
            {children}
        </div>
    )
}

export default Grid
