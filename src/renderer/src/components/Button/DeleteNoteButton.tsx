/* eslint-disable prettier/prettier */
import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { LuTrash } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDelete = () => {
    deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <LuTrash className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
