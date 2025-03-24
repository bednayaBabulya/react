import { Bold, Eraser, Italic, Underline } from 'lucide-react'
import styles from './EmailEditor.module.scss'
import { useRef, useState } from 'react'
import { applyStyle, TStyle } from './apply-style'
import parse from 'html-react-parser'

export function EmialEditor() {
  const [text, setText] = useState(`Hey!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente voluptatem at minus ex iusto dignissimos perspiciatis, quos, quas omnis libero, alias fuga fugit? Laudantium ullam ab consequuntur ipsa eos.`)

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null)

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  }

  const applyFormat = (type: TStyle) => {

    const selectedText = text.substring(selectionStart,
      selectionEnd) // Выделенный текст
    if (!selectedText) return
    const before = text.substring(0, selectionStart)
    //Текст до выделенного фрагмента
    const after = text.substring(selectionEnd) // TeKcT после выделенного фрагмента

    setText(before + applyStyle(type, selectedText) + after)

  }

  return (
    <div>
      <h1>Email editor</h1>
      <div className={styles.previe}>
        {parse(text)}
      </div>
      <div className={styles.card}>

        <textarea
          ref={textRef}
          className={styles.editor} spellCheck='false'
          onSelect={updateSelection}
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <div className={styles.actions}>
          <div className={styles.tools}>
            <button onClick={() => setText('')}><Eraser size={17} /></button>
            <button onClick={() => applyFormat('bold')}>
              <Bold size={17} />
            </button>
            <button onClick={() => applyFormat('italic')}>
              <Italic size={17} />
            </button>
            <button onClick={() => applyFormat('underline')}>
              <Underline size={17} />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  )
}