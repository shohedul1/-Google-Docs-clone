

'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row';
import ImageResize from 'tiptap-extension-resize-image';
import { useEditorStore } from '@/store/use-editor-store';
import Underline from '@tiptap/extension-underline';


const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor)
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor)
    },
    onTransaction({ editor }) {
      setEditor(editor)
    },
    onFocus({ editor }) {
      setEditor(editor)
    },
    onBlur({ editor }) {
      setEditor(editor)
    },
    onContentError({ editor }) {
      setEditor(editor)
    },
    editorProps: {
      attributes: {
        style: "padding-left:56px; padding-right:56px;",
        class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7]  px-[56px] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text relative overflow-hidden"
      }
    },
    extensions: [
      StarterKit,
      ImageResize,
      Underline,
      Image,
      Table,
      TableCell,
      TableHeader,
      TaskList,
      TableRow,
      TaskItem.configure({
        nested: true,
      })

    ],

    content: `
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th colspan="3">Description</th>
      <th>Name</th>
      <th>Address</th>
      <th>Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cyndi Lauper</td>
      <td colspan="3">Singer, Songwriter, Actress</td>
      <td>John Doe</td>
      <td>New York</td>
      <td>123-456-7890</td>
    </tr>
  </tbody>
</table>

      `,
  })

  return (
    <div className='size-full  overflow-x-auto px-4 print:p-0 print:bg-white print:overflow-visible'>
      <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0  '>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Editor


