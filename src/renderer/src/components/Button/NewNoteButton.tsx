import { LuFilePlus } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from "./ActionButton"

export const NewNoteButton = ({...props}: ActionButtonProps) => {
    return <ActionButton {...props}>
        <LuFilePlus className="w-4 h-4 text-zinc-300"/>
    </ActionButton>
}